// This module implements the `replace()` function.
"use strict;"
var errorName = "apg-exp: replace(): ";
var apglib = require("apg-lib");
var repGrammar = new (require("./replace-grammar.js"))();
var parseReplacementString = require("./parse-replacement.js");
/* replace special replacement patterns, `$&`, etc. */
var generateReplacementString = function(p, rstr, items) {
  var exp = p._this;
  if (items.length === 0) {
    /* no special characters in the replacement string */
    /* just return a copy of the replacement string */
    return rstr;
  }
  var replace = rstr.slice(0);
  var first, last;
  items.reverse();
  items.forEach(function(item) {
    first = replace.slice(0, item.index);
    last = replace.slice(item.index + item.length);
    switch (item.type) {
    case "escape":
      replace = first.concat("$", last);
      break;
    case "prefix":
      replace = first.concat(exp.leftContext, last);
      break;
    case "match":
      replace = first.concat(exp.lastMatch, last);
      break;
    case "suffix":
      replace = first.concat(exp.rightContext, last);
      break;
    case "name":
      /* If there are multiple matches to this rule name, only the last is used */
      /* If this is a problem, modify the grammar and use different rule names for the different places. */
      var ruleName = p.ruleNames[item.name.nameString];
      replace = first.concat(exp.rules[ruleName], last);
      break;
    default:
      throw new Error(errorName + "generateREplacementString(): unrecognized item type: " + item.type);
      break;
    }
  });
  return replace;
}
/* creates a special object with the apg-exp object's "last match" properites */
var lastObj = function(exp) {
  var obj = {}
  obj.ast = exp.ast;
  obj.input = exp.input;
  obj.leftContext = exp.leftContext;
  obj.lastMatch = exp.lastMatch;
  obj.rightContext = exp.rightContext;
  obj["$_"] = exp.input;
  obj["$`"] = exp.leftContext;
  obj["$&"] = exp.lastMatch;
  obj["$'"] = exp.rightContext;
  obj.rules = [];
  for (name in exp.rules) {
    var el = "${" + name + "}";
    obj[el] = exp[el];
    obj.rules[name] = exp.rules[name];
  }
  return obj;
}
/* call the user's replacement function for a single pattern match */
var singleReplaceFunction = function(p, ostr, func) {
  var result = p._this.exec(ostr);
  if (result === null) {
    return ostr;
  }
  rstr = func(result, lastObj(p._this));
  var ret = (p._this.leftContext).concat(rstr, p._this.rightContext);
  return ret;
}
/* call the user's replacement function to replace all pattern matches */
var globalReplaceFunction = function(p, ostr, func) {
  var exp = p._this;
  var retstr = ostr.slice(0);
  while (true) {
    var result = exp.exec(retstr);
    if (result === null) {
      break;
    }
    var newrstr = func(result, lastObj(exp));
    retstr = (exp.leftContext).concat(newrstr, exp.rightContext);
    exp.lastIndex = exp.leftContext.length + newrstr.length;
    if (result[0].length === 0) {
      /* an empty string IS a match and is replaced */
      /* but use "bump-along" mode to prevent infinite loop */
      exp.lastIndex += 1;
    }
  }
  return retstr;
}
/* do a single replacement with the caller's replacement string */
var singleReplaceString = function(p, ostr, rstr) {
  var exp = p._this;
  var result = exp.exec(ostr);
  if (result === null) {
    return ostr;
  }
  var ritems = parseReplacementString(p, rstr);
  rstr = generateReplacementString(p, rstr, ritems);
  var ret = (exp.leftContext).concat(rstr, exp.rightContext);
  return ret;
}
/* do a global replacement of all matches with the caller's replacement string */
var globalReplaceString = function(p, ostr, rstr) {
  var exp = p._this;
  var retstr = ostr.slice(0);
  var ritems = null;
  while (true) {
    var result = exp.exec(retstr);
    if (result == null) {
      break;
    }
    if (ritems === null) {
      ritems = parseReplacementString(p, rstr);
    }
    var newrstr = generateReplacementString(p, rstr, ritems);
    retstr = (exp.leftContext).concat(newrstr, exp.rightContext);
    exp.lastIndex = exp.leftContext.length + newrstr.length;
    if (result[0].length === 0) {
      /* an empty string IS a match and is replaced */
      /* but use "bump-along" mode to prevent infinite loop */
      exp.lastIndex += 1;
    }
  }
  return retstr;
}
/* the replace() function calls this to replace the matched patterns with a string */
exports.replaceString = function(p, str, replacement) {
  if (p._this.global || p._this.sticky) {
    return globalReplaceString(p, str, replacement);
  } else {
    return singleReplaceString(p, str, replacement);
  }
}
/* the replace() function calls this to replace the matched patterns with a function */
exports.replaceFunction = function(p, str, func) {
  if (p._this.global || p._this.sticky) {
    return globalReplaceFunction(p, str, func);
  } else {
    return singleReplaceFunction(p, str, func);
  }
}
