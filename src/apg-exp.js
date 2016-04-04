// This is the `apg-exp` object constructor.
// `apg-exp` functions similarly to the built-in JavaScript `RegExp` pattern matching engine.
// However, patterns are described with an [SABNF]()
// syntax and matching is done with an
// [`apg`](https://github.com/ldthomas/apg-js2) parser.
// See the [README](./README.html) file for a more detailed description.
//
// The input parameters are:
//<pre><code>
// input - required, type "string" or "object"
//         if it is a string, it must be a
//           valid SABNF grammar (see note(&#42;) below) 
//         if it is an object, it must be a
//           valid APG-generated grammar object.
// flags - optional, string of flag characters,
//         g - global search, advances lastIndex to end of
//             matched phrase. Repeated calls to exec()
//             will find all matches in the input string.
//         y - sticky, similar to g but lastIndex acts
//             as an anchor - a match must be found beginning
//             at lastIndex. Repeated calls to exec() will
//             find all *consecutive* matches in the string. 
//         u - unicode, does not change the behavior of the
//             pattern matching, only the form of the results.
//             With the u flag set all resulting matched phrases
//             are returned as arrays of integer character codes
//             rather than JavaScript strings.
//         d - debug, when set the **APG** trace object is
//             available to the user to trace steps the parser
//             took. Handy for debugging syntax and phrases that
//             aren't behaving as expected.
//         defaults are all false
// nodeHits -  optional, the maximum number of node hits the parser
//             is allowed (default Infinity)
// treeDepth - optional, the maximum parse tree depth allowed
//             (default Infinity)
//             (see note (**) below)
//</code></pre>
// To skip over default values, enter `null` or `undefined`. e.g.
//<pre>
//<code>
// var abnfexp = require("abnf-exp");
// var exp = new abnfexp('rule = "abc"\n', null, null, 100);
//</code>
//</pre>
// This will set the maximum tree depth to 100 and leave `flags` and `nodeHits` at their default.
//
// **Note(\*):**
// For longer, more complex grammars, it is recommended to use [APG](https://github.com/ldthomas/apg-js2)
// to generate the grammar object
// in advance.
// In addition to saving the compile time each time you run the application,
// its error reporting is much more complete and getting the grammar right is much easier.
//
// **Note(\*\*):** 
// Some pathological grammars can push a recursive-decent parser to exponential behavior
// with an exceptionally large number of parse tree node operations (node hits) and/or
// an exceptionally large parse tree depth. For most grammars this is not a problem.
// But if you want to protect against this kind of behavior you can set limits on either or both of these.
// The parser will throw an exception with a message telling you that the maximum number was exceeded.
// You would probably get an exception anyway (or a hung application), but with these exceptions it should
// be a little easier to figure out what went wrong.
module.exports = function(input, flags, nodeHits, treeDepth) {
  "use strict;"
  var _this = this;
  var thisFileName = "apg-exp: ";
  var errorName = thisFileName;
  var apglib = require("apg-lib");
  var execFuncs = require("./exec.js");
  var replaceFuncs = require("./replace.js");
  var resultFuncs = require("./result.js");
  var splitFuncs = require("./split.js");
  var setFlags = require("./flags.js");
  var sabnfGenerator = require("./sabnf-generator.js");
  var readonly = {
    writable : false,
    enumerable : false,
    configurable : true
  };
  /* private object data that needs to be passed around to supporting modules */
  var priv = {
    _this : this,
    grammarObject : null,
    ruleNames : [],
    str : null,
    chars : null,
    parser : null,
    result : null,
    charsToString : null,
    match : function(state) {
      return (state === apglib.ids.MATCH || state === apglib.ids.EMPTY);
    }
  }
  // This is a custom exception object.
  // Derived from Error, it is named `ApgExpError` and in addition to the error `message`
  // it has two functions, `toText()` and `toHtml()` which will display the errors
  // in a user-friendly ASCII text format or HTML format like the formats used by APG.
  // e. g.
  //```
  // try{
  //   ...
  // }catch(e){
  //   if(e.name === "ApgExpError"){
  //     console.log(e.toText());
  //   }else{
  //     console.log(e.message);
  //   }
  //```
  // All errors from the constructor and all object functions are reported by throwing an `ApgExpError` Error object.
  var ApgExpError = function(msg, t, h){
    this.message = msg;
    this.name = "ApgExpError";
    var text = t;
    var html = h;
    this.toText = function(){
      var ret = "";
      ret += this.message;
      ret += "\n";
      if(text){
        ret += text;
      }
      return ret;
    }
    this.toHtml = function(){
      var ret = "";
      ret += "<h3>" + apglib.utils.stringToAsciiHtml(this.message) + "</h3>";
      ret += "\n";
      if(html){
        ret += html;
      }
      return ret;
    }
  }
  ApgExpError.prototype = new Error();
  
  /* verifies that all UDT callback functions have been defined */
  var checkParserUdts = function(errorName) {
    var udterrors = []
    var error = null;
    for (var i = 0; i < priv.grammarObject.udts.length; i += 1) {
      var lower = priv.grammarObject.udts[i].lower;
      if (typeof (priv.parser.callbacks[lower]) !== "function") {
        udterrors.push(priv.ruleNames[lower]);
      }
    }
    if (udterrors.length > 0) {
      error = "undefined UDT callback functions: " + udterrors;
    }
    return error;
  }
  
  /* the constructor */
  errorName = thisFileName + "constructor: ";
  var error = null;
  var result = null;
  try {
    while (true) {
      /* flags */
      error = setFlags(this, flags);
      if (error) {
        error = new ApgExpError(error);
        break;
      }
      /* grammar object for the defining SABNF grammar */
      if (typeof (input) === "string") {
        this.source = input;
        result = sabnfGenerator(input);
        if (result.error) {
          error = new ApgExpError(result.error, result.text, result.html);
          break;
        }
        priv.grammarObject = result.obj;
      } else if (typeof (input) === "object" && typeof (input.grammarObject) === "string"
          && input.grammarObject === "grammarObject") {
        priv.grammarObject = input;
        this.source = priv.grammarObject.toString();
      } else {
        error = new ApgExpError(thisFileName + "invalid SABNF grammar input");
        this.source = "";
        break;
      }
      Object.defineProperty(this, "source", readonly);
      /* the parser & AST */
      priv.charsToString = apglib.utils.charsToString;
      priv.parser = new apglib.parser();
      this.ast = new apglib.ast();
      this.trace = this.debug ? (new apglib.trace()) : null;
      for (var i = 0; i < priv.grammarObject.rules.length; i += 1) {
        var rule = priv.grammarObject.rules[i];
        priv.ruleNames[rule.lower] = rule.name
        priv.parser.callbacks[rule.lower] = false;
        this.ast.callbacks[rule.lower] = true;
      }
      for (var i = 0; i < priv.grammarObject.udts.length; i += 1) {
        var rule = priv.grammarObject.udts[i];
        priv.ruleNames[rule.lower] = rule.name
        priv.parser.callbacks[rule.lower] = false;
        this.ast.callbacks[rule.lower] = true;
      }
      /* nodeHit and treeDepth limits */
      if (typeof (nodeHits) === "number") {
        this.nodeHits = Math.floor(nodeHits);
        if (this.nodeHits > 0) {
          priv.parser.setMaxNodeHits(this.nodeHits);
        } else {
          error = new ApgExpError(thisFileName + "nodeHits must be integer > 0: " + nodeHits);
          this.nodeHits = Infinity;
          break;
        }
      } else {
        this.nodeHits = Infinity;
      }
      if (typeof (treeDepth) === "number") {
        this.treeDepth = Math.floor(treeDepth);
        if (this.treeDepth > 0) {
          priv.parser.setMaxTreeDepth(this.treeDepth);
        } else {
          error = new ApgExpError(thisFileName + "treeDepth must be integer > 0: " + treeDepth);
          this.treeDepth = Infinity;
          break;
        }
      } else {
        this.treeDepth = Infinity;
      }
      Object.defineProperty(this, "nodeHits", readonly);
      Object.defineProperty(this, "treeDepth", readonly);
      /* success */
      this.lastIndex = 0;
      break;
    }
  } catch (e) {
    error = new ApgExpError(e.name + ": " + e.message);
  }
  if (error) {
    throw error;
  }
  // <pre><code>
  // str - the input string to find the patterns in
  // may be a JavaScript string or an array of
  // character codes
  // </code></pre>

  // Find the SABNF-defined pattern in the input string.
  // Can be called multiple times with the `g` or `y` flags.
  // If both `g` and `y` are specified, `g` is ignored.
  // Be aware that SABNF grammars, like regular expressions,
  // can define empty string (`""`) patterns.
  // This oft-given global example can lead to an infinite loop:
  // <pre>
  // <code>
  // var exp = /a*/g;
  // while((result = exp.exec("aaba")) !== null){
  // /* do something */
  // }
  // </code>
  // </pre>
  // A better solution would be
  // <pre>
  // <code>
  // var grammar = "rule = *a\n";
  // var exp = new `apg-exp`(grammar, "g");
  // while(true){
  // result = exp.exec("aaba");
  // if(result === null){break;}
  // /* do something */
  // /* bump-along mode */
  // if(result[0].length === 0){lastIndex += 1;}
  // }
  // </code>
  // </pre>
  /* public API */
  this.exec = function(str) {
    var result = null;
    var error;
    errorName = thisFileName = "exec(): ";
    if (typeof (str) === "string") {
      priv.str = str;
      priv.chars = apglib.utils.stringToChars(str);
    } else if (Array.isArray(str)) {
      priv.str = null;
      priv.chars = str;
    } else {
      return result;
    }
    priv.parser.ast = this.ast;
    priv.parser.trace = this.trace;
    error = checkParserUdts(errorName);
    if(error){
      throw new ApgExpError(errorName + error);
    }
    if (this.sticky) {
      result = execFuncs.execAnchor(priv);
    } else {
      result = execFuncs.execForward(priv);
    }
    return result;
  }
  // Test for a match of the SABNF-defined pattern in the input string.
  // Can be called multiple times with the `g` or `y` flags.
  // However, see caution above for `exec()`.
  this.test = function(str) {
    var result = null;
    var error;
    errorName = thisFileName + "test(): ";
    if (typeof (str) === "string") {
      priv.str = str;
      priv.chars = apglib.utils.stringToChars(str);
    } else if (Array.isArray(str)) {
      priv.str = null;
      priv.chars = str;
    } else {
      return result;
    }
    priv.parser.ast = null;
    priv.parser.trace = null;
    this.ast = null;
    this.trace = null;
    error = checkParserUdts(errorName);
    if(error){
      throw new ApgExpError(errorName + error);
    }
    if (this.sticky) {
      result = execFuncs.testAnchor(priv);
    } else {
      result = execFuncs.testForward(priv);
    }
    return result;
  }
  // <pre>
  // <code>
  // str - the string to find patterns to be replaced in
  // replacement - a string or function defining replacement
  // phrases for the matched phrases.
  // returns str with the matched phrases replaced
  // </code>
  // </pre>
  // This is roughly equivalent to the JavaScript string replacement function, `str.replace(regex, replacement)`.
  // (It follows closely the
  // [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) description.)
  // If the global flag `g` is set, all matched phrases will be replaced,
  // otherwise, only the first.
  // If the sticky flag `y` is set, all matched 'consecutive' phrases will be replaced,
  // otherwise, only the first.
  // If the unicode flag `u` is set, an exception will be thrown. `replace()` only works on strings, not character code arrays.
  // The `replacement` string may contain the patterns patterns.
  // <pre>
  // <code>
  // $$ - insert the character $
  // the escape sequence for the $ character
  // $&#96; - insert the prefix to the matched pattern
  // $&#38; - insert the matched pattern
  // $' - insert the suffix of the matched pattern
  // ${name} - insert the last match to the rule "name"
  // </code>
  // </pre>
  // `replacement` may also be a user-written function of the form
  // <pre>
  // <code>
  // var replacement = function(result, exp){}
  // result - the result object from the pattern match
  // exp - the apg-exp object
  // </code>
  // </pre>
  // There is quite a bit of redundancy here with both the `result` object and the `apg-exp` object being passed to the
  // replacement function. However, this provides the user with a great deal of flexibility in what might be the
  // most convenient way to create the replacement. Also, the `apg-exp` object has the AST which is a powerful
  // translation tool for really tough replacement jobs. See the [ast.js]() example.

  this.replace = function(str, replacement) {
    errorName = thisFileName + "replace(): ";
    if (this.unicode) {
      throw new ApgExpError(errorName + "cannot do string replacement in 'unicode' mode. Insure that 'u' flag is absent.");
    }
    if (typeof (str) !== "string") {
      throw new ApgExpError(errorName + "input type error: str not a string");
    }
    if (typeof (replacement) === "string") {
      return replaceFuncs.replaceString(priv, str, replacement);
    }
    if (typeof (replacement) === "function") {
      return replaceFuncs.replaceFunction(priv, str, replacement);
    }
    throw new ApgExpError(errorName + "input type error: replacement not a string or function");
  }
  // <pre>
  // <code>
  // str - the string to split
  // limit - optional limit on the number of splits
  // </code>
  // </pre>
  // Mimics the JavaScript `String.split(regexp)` function. That is,
  // `split(str[, limit])` is roughly equivalent to `str.split(regexp[, limit])`
  // Returns an array of strings.
  // If `str` is undefined or empty the returned array
  // contains a single, empty string.
  // Otherwise, `exp.exec(str)` is called in global mode. If a one or more matched phrases are found, they are removed from the
  // string
  // and the substrings are returned in an array.
  // If no matched phrases are found, the array contains one element consisting of the entire string, `["str"]`.
  // Empty string matches will split the string and advance `lastIndex` by one character (bump-along mode).
  // That means, for example, the grammar `rule=""\n` would match the empty string at every character
  // and an array of all characters would be returned. It would be similar to calling the JavaScript function `str.split("")`.
  // Unlike the JavaScript function, capturing parentheses (rules) are not spliced into the output string.
  // An exception is thrown if the unicode flag is set. `split()` works only on strings, not integer arrays of character codes.
  // If the `limit` argument is used, it must be a positive number and no more than `limit` matches will be returned.
  this.split = function(str, limit) {
    errorName = thisFileName + "split(): ";
    if (this.unicode) {
      throw new ApgExpError(errorName + "cannot do string split in 'unicode' mode. Insure that 'u' flag is absent.");
    }
    if (str === undefined || str === null || str === "") {
      return [ "" ];
    }
    if (typeof (str) !== "string") {
      throw new ApgExpError(errorName + "argument must be a string: typeof(arg): " + typeof (str));
    }
    if (typeof (limit) !== "number") {
      limit = Infinity;
    } else {
      limit = Math.floor(limit);
      if (limit <= 0) {
        throw new ApgExpError(errorName + "limit must be >= 0: limit: " + limit);
      }
    }
    return splitFuncs.split(priv, str, limit);
  }
  // Select specific rule/UDT names to include in the result object.
  // `list` is an array of rule/UDT names to include.
  // All other names, not in the array, are excluded.
  // Excluding a rule/UDT name does not affect the operation of any functions,
  // it simply excludes its phrases from the results.
  this.include = function(list) {
    errorName = thisFileName + "include(): ";
    if (list === undefined || list == null || (typeof (list) === "string" && list.toLowerCase() === "all")) {
      /* set all to true */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = true;
      }
      return;
    }
    if (Array.isArray(list)) {
      /* set all to false */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = false;
      }
      /* then set those in the list to true */
      for (var i = 0; i < list.length; i += 1) {
        var l = list[i];
        if (typeof (l) !== "string") {
          throw new ApgExpError(errorName + "invalid name type in list");
        }
        l = l.toLowerCase();
        if (_this.ast.callbacks[l] === undefined) {
          throw new ApgExpError(errorName + "unrecognized name in list: " + list[i]);
        }
        _this.ast.callbacks[l] = true;
      }
      return;
    }
    throw new ApgExpError(errorName + "unrecognized list type");
  }
  // Select specific rule/UDT names to exclude in the result object.
  // `list` is an array of rule/UDT names to exclude.
  // All other names, not in the array, are included.
  // Excluding a rule/UDT name does not affect the operation of any functions,
  // it simply excludes its phrases from the results.
  this.exclude = function(list) {
    errorName = thisFileName + "exclude(): ";
    if (list === undefined || list == null || (typeof (list) === "string" && list.toLowerCase() === "all")) {
      /* set all to false */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = false;
      }
      return;
    }
    if (Array.isArray(list)) {
      /* set all to true */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = true;
      }
      /* then set all in list to false */
      for (var i = 0; i < list.length; i += 1) {
        var l = list[i];
        if (typeof (l) !== "string") {
          throw new ApgExpError(errorName + "invalid name type in list");
        }
        l = l.toLowerCase();
        if (_this.ast.callbacks[l] === undefined) {
          throw new ApgExpError(errorName + "unrecognized name in list: " + list[i]);
        }
        _this.ast.callbacks[l] = false;
      }
      return;
    }
    throw new ApgExpError(errorName + "unrecognized list type");
  }
  // Defines a UDT callback function. *All* UDTs appearing in the SABNF phrase syntax must be defined here.
  // <pre><code>
  // name - the (case-insensitive) name of the UDT
  // func - the UDT callback function
  // </code></pre>
  // See the <a href="#">udt example</a> for the callback function details.
  this.defineUdt = function(name, func) {
    errorName = thisFileName + "defineUdt(): ";
    if (typeof (name) !== "string") {
      throw new ApgExpError(errorName + "'name' must be a string");
    }
    if (typeof (func) !== "function") {
      throw new ApgExpError(errorName + "'func' must be a function reference");
    }
    var lowerName = name.toLowerCase();
    for (var i = 0; i < priv.grammarObject.udts.length; i += 1) {
      if (priv.grammarObject.udts[i].lower === lowerName) {
        priv.parser.callbacks[lowerName] = func;
        return;
      }
    }
    throw new ApgExpError(errorName + "'name' not a UDT name: " + name);
  }
  // Estimates the upper bound of the call stack depth for this JavaScript
  // engine. Taken from [here](http://www.2ality.com/2014/04/call-stack-size.html)
  this.maxCallStackDepth = function() {
    try {
      return 1 + this.maxCallStackDepth();
    } catch (e) {
      return 1;
    }
  }
  // Returns the "last match" information in the `apg-exp` object in ASCII text.
  // Patterned after and similar to the JavaScript
  // [`RegExp` properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
  this.toText = function(mode) {
    if (this.unicode) {
      return resultFuncs.u.expToText(this, mode);
    }
    return resultFuncs.s.expToText(this);
  }
  // Returns the "last match" information in the `apg-exp` object formatted as an HTML table.
  this.toHtml = function(mode) {
    if (this.unicode) {
      return resultFuncs.u.expToHtml(this, mode);
    }
    return resultFuncs.s.expToHtml(this);
  }
  // Same as `toHtml()` except the output is a complete HTML page.
  this.toHtmlPage = function(mode) {
    if (this.unicode) {
      return resultFuncs.u.expToHtmlPage(this, mode);
    }
    return resultFuncs.s.expToHtmlPage(this);
  }
  // Returns the SABNF syntax or grammar defining the pattern in ASCII text format.
  this.sourceToText = function() {
    return resultFuncs.s.sourceToText(this);
  }
  // Returns the SABNF syntax or grammar defining the pattern in HTML format.
  this.sourceToHtml = function() {
    return resultFuncs.s.sourceToHtml(this);
  }
  // Returns the SABNF syntax or grammar defining the pattern as a complete HTML page.
  this.sourceToHtmlPage = function() {
    return resultFuncs.s.sourceToHtmlPage(this);
  }
};