// This module implements the `exec()` function.
"use strict;"
var funcs = require('./result.js');
/* turns on or off the read-only attribute of the `last result` properties of the object */
var setProperties = function(p, readonly) {
  readonly = (readonly === true) ? true : false;
  var exp = p._this;
  var prop = {
    writable : readonly,
    enumerable : false,
    configurable : true
  };
  Object.defineProperty(exp, "input", prop);
  Object.defineProperty(exp, "leftContext", prop);
  Object.defineProperty(exp, "lastMatch", prop);
  Object.defineProperty(exp, "rightContext", prop);
  Object.defineProperty(exp, "$_", prop);
  Object.defineProperty(exp, "$`", prop);
  Object.defineProperty(exp, "$&", prop);
  Object.defineProperty(exp, "$'", prop);
  prop.enumerable = true;
  Object.defineProperty(exp, "rules", prop);
  if (!exp.rules) {
    exp.rules = [];
  }
  for ( var name in exp.rules) {
    var des = "${" + name + "}";
    Object.defineProperty(exp, des, prop);
    Object.defineProperty(exp.rules, name, prop);
  }
}
/* generate the results object for JavaScript strings */
var sResult = function(p) {
  var chars = p.chars;
  var result = p.result;
  var ret = {
    index : result.index,
    length : result.length,
    input : p.charsToString(chars, 0),
    treeDepth : result.treeDepth,
    nodeHits : result.nodeHits,
    rules : [],
    toText : function() {
      return funcs.s.resultToText(this);
    },
    toHtml : function() {
      return funcs.s.resultToHtml(this);
    },
    toHtmlPage : function() {
      return funcs.s.resultToHtmlPage(this);
    }
  }
  ret[0] = p.charsToString(p.chars, result.index, result.length);
  /* each rule is either 'undefined' or an array of phrases */
  for ( var name in result.rules) {
    var rule = result.rules[name];
    if (rule) {
      ret.rules[name] = [];
      for (var i = 0; i < rule.length; i += 1) {
        ret.rules[name][i] = {
          index : rule[i].index,
          phrase : p.charsToString(chars, rule[i].index, rule[i].length)
        };
      }
    } else {
      ret.rules[name] = undefined;
    }
  }
  return ret;
}
/* generate the results object for integer arrays of character codes */
var uResult = function(p) {
  var chars = p.chars;
  var result = p.result;
  var beg, end;
  var ret = {
    index : result.index,
    length : result.length,
    input : chars.slice(0),
    treeDepth : result.treeDepth,
    nodeHits : result.nodeHits,
    rules : [],
    toText : function(mode) {
      return funcs.u.resultToText(this, mode);
    },
    toHtml : function(mode) {
      return funcs.u.resultToHtml(this, mode);
    },
    toHtmlPage : function(mode) {
      return funcs.u.resultToHtmlPage(this, mode);
    }
  }
  beg = result.index;
  end = beg + result.length;
  ret[0] = chars.slice(beg, end);
  /* each rule is either 'undefined' or an array of phrases */
  for ( var name in result.rules) {
    var rule = result.rules[name];
    if (rule) {
      ret.rules[name] = [];
      for (var i = 0; i < rule.length; i += 1) {
        beg = rule[i].index;
        end = beg + rule[i].length;
        ret.rules[name][i] = {
          index : beg,
          phrase : chars.slice(beg, end)
        };
      }
    } else {
      ret.rules[name] = undefined;
    }
  }
  return ret;
}
/* generate the apg-exp properties or "last match" object for JavaScript strings */
var sLastMatch = function(p, result) {
  var exp = p._this;
  var temp;
  exp.lastMatch = result[0];
  temp = p.chars.slice(0, p.result.index);
  exp.leftContext = p.charsToString(temp, 0);
  temp = p.chars.slice(result.index + result.length);
  exp.rightContext = p.charsToString(temp, 0);
  exp["input"] = result.input.slice(0);
  exp["$_"] = exp["input"];
  exp["$&"] = exp.lastMatch;
  exp["$`"] = exp.leftContext;
  exp["$'"] = exp.rightContext;
  exp.rules = {};
  for ( var name in result.rules) {
    var rule = result.rules[name];
    if (rule) {
      exp.rules[name] = rule[rule.length - 1].phrase;
    } else {
      exp.rules[name] = undefined;
    }
    exp["${" + name + "}"] = exp.rules[name];
  }
}
/* generate the apg-exp properties or "last match" object for integer arrays of character codes */
var uLastMatch = function(p, result) {
  var exp = p._this;
  var chars = p.chars;
  var beg, end;
  beg = 0;
  end = beg + result.index;
  exp.leftContext = chars.slice(beg, end);
  exp.lastMatch = result[0].slice(0);
  beg = result.index + result.length;
  exp.rightContext = chars.slice(beg);
  exp["input"] = result.input.slice(0);
  exp["$_"] = exp["input"];
  exp["$&"] = exp.lastMatch;
  exp["$`"] = exp.leftContext;
  exp["$'"] = exp.rightContext;
  exp.rules = {};
  for ( var name in result.rules) {
    var rule = result.rules[name];
    if (rule) {
      exp.rules[name] = rule[rule.length - 1].phrase;
    } else {
      exp.rules[name] = undefined;
    }
    exp["${" + name + "}"] = exp.rules[name];
  }
}
/* set the returned result properties, and the `last result` properties of the object */
var setResult = function(p, parserResult) {
  var exp = p._this;
  var result;
  p.result = {
    index : parserResult.index,
    length : parserResult.length,
    treeDepth : parserResult.treeDepth,
    nodeHits : parserResult.nodeHits,
    rules : []
  }
  /* set result in APG phrases {phraseIndex, phraseLength} */
  /* p.ruleNames are all names in the grammar */
  /* p._this.ast.callbacks[name] only defined for 'included' rule names */
  var obj = p.parser.ast.phrases();
  for ( var name in p._this.ast.callbacks) {
    var cap = p.ruleNames[name];
    if (p._this.ast.callbacks[name]) {
      var cap = p.ruleNames[name];
      if (Array.isArray(obj[cap])) {
        p.result.rules[cap] = obj[cap];
      } else {
        p.result.rules[cap] = undefined;
      }
    }
  }
  /* p.result now has everything we need to know about the result of exec() */
  /* generate the Unicode or JavaScript string version of the result & last match objects */
  setProperties(p, true);
  if (p._this.unicode) {
    result = uResult(p);
    uLastMatch(p, result);
  } else {
    result = sResult(p);
    sLastMatch(p, result);
  }
  setProperties(p, false);
  return result;
}

/* create an unsuccessful parser result object */
var resultInit = function() {
  return {
    success : false
  };
}

/* create a successful parser result object */
var resultSuccess = function(index, parserResult) {
  return {
    success : true,
    index : index,
    length : parserResult.matched,
    treeDepth : parserResult.maxTreeDepth,
    nodeHits : parserResult.nodeHits
  };
}
/* search forward from `lastIndex` until a match is found or the end of string is reached */
var forward = function(p) {
  var result = resultInit();
  for (var i = p._this.lastIndex; i < p.chars.length; i += 1) {
    var re = p.parser.parseSubstring(p.grammarObject, 0, p.chars, i, p.chars.length - i);
    if (p.match(re.state)) {
      result = resultSuccess(i, re);
      break;
    }
  }
  return result;
}
/* reset lastIndex after a search */
var setLastIndex = function(lastIndex, flag, parserResult) {
  if (flag) {
    if (parserResult.success) {
      return parserResult.index + parserResult.length;
    }
    return 0;
  }
  return lastIndex;
}
/* attempt a match at lastIndex only - does look further if a match is not found */
var anchor = function(p) {
  var result = resultInit();
  if (p._this.lastIndex < p.chars.length) {
    var re = p.parser.parseSubstring(p.grammarObject, 0, p.chars, p._this.lastIndex, p.chars.length - p._this.lastIndex);
    if (p.match(re.state)) {
      result = resultSuccess(p._this.lastIndex, re);
    }
  }
  return result;
}
/* called by exec() for a forward search */
exports.execForward = function(p) {
  var parserResult = forward(p);
  var result = null;
  if (parserResult.success) {
    result = setResult(p, parserResult);
  }
  p._this.lastIndex = setLastIndex(p._this.lastIndex, p._this.global, parserResult);
  return result;
}
/* called by exec() for an anchored search */
exports.execAnchor = function(p) {
  var parserResult = anchor(p);
  var result = null;
  if (parserResult.success) {
    result = setResult(p, parserResult);
  }
  p._this.lastIndex = setLastIndex(p._this.lastIndex, p._this.sticky, parserResult);
  return result;
}
/* search forward from lastIndex looking for a match */
exports.testForward = function(p) {
  var parserResult = forward(p);
  p._this.lastIndex = setLastIndex(p._this.lastIndex, p._this.global, parserResult);
  return parserResult.success;
}
/* test for a match at lastIndex only, do not look further if no match is found */
exports.testAnchor = function(p) {
  var parserResult = anchor(p);
  p._this.lastIndex = setLastIndex(p._this.lastIndex, p._this.sticky, parserResult);
  return parserResult.success;
}
