// This module will parse the replacement string and locate any special replacement characters.
"use strict;"
var errorName = "apgex: replace(): ";
var synError = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    var value = data.charsToString(chars, phraseIndex, result.phraseLength);
    data.items.push({type: "error", index: phraseIndex, length: result.phraseLength, error: value});
    data.errors += 1;
    data.count += 1;
  }
}
var synEscape = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    data.items.push({type: "escape", index: phraseIndex, length: result.phraseLength});
    data.escapes += 1;
    data.count += 1;
  }
}
var synMatch = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    data.items.push({type: "match", index: phraseIndex, length: result.phraseLength});
    data.matches += 1;
    data.count += 1;
  }
}
var synPrefix = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    data.items.push({type: "prefix", index: phraseIndex, length: result.phraseLength});
    data.prefixes += 1;
    data.count += 1;
  }
}
var synSuffix = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    data.items.push({type: "suffix", index: phraseIndex, length: result.phraseLength});
    data.suffixes += 1;
    data.count += 1;
  }
}
var synXName = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    data.items.push({type: "name", index: phraseIndex, length: result.phraseLength, name: data.name});
    data.names += 1;
    data.count += 1;
  }
}
var synName = function(result, chars, phraseIndex, data) {
  if(data.isMatch(result.state)){
    var nameStr = data.charsToString(chars, phraseIndex, result.phraseLength);
    var nameChars = chars.slice(phraseIndex, phraseIndex + result.phraseLength)
    data.name = {nameString: nameStr, nameChars: nameChars};
  }
}
module.exports = function(p, str){
  var grammar = new (require("./replace-grammar.js"))();
  var apglib = require("apg-lib");
  var parser = new apglib.parser();
  var data = {
      name: "",
      count: 0,
      errors: 0,
      escapes: 0,
      prefixes: 0,
      matches: 0,
      suffixes: 0,
      names: 0,
      isMatch: p.match,
      charsToString: apglib.utils.charsToString,
      items: []
  }
  parser.callbacks["error"] = synError;
  parser.callbacks["escape"] = synEscape;
  parser.callbacks["prefix"] = synPrefix;
  parser.callbacks["match"] = synMatch;
  parser.callbacks["suffix"] = synSuffix;
  parser.callbacks["xname"] = synXName;
  parser.callbacks["name"] = synName;
  var chars = apglib.utils.stringToChars(str);
  var result = parser.parse(grammar, 0, chars, data);
  if(!result.success){
    throw new Error(errorName + "unexpected error parsing replacement string");
  }
  var ret = data.items;
  if(data.errors > 0){
    var msg = "[";
    var i = 0;
    var e = 0;
    for(; i < data.items.length; i +=1){
      var item = data.items[i];
      if(item.type === "error"){
        if(e > 0){
          msg += ", " + item.error;
        }else{
          msg += item.error;
        }
        e += 1;
      }
    }
    msg += "]";
    throw new Error(errorName + "special character sequences ($...) errors: " + msg);
  }
  if(data.names > 0){
    var badNames = [];
    var i = 0;
    var n = 0;
    for(; i < data.items.length; i +=1){
      var item = data.items[i];
      if(item.type === "name"){
        var name = item.name.nameString; 
        var lower = name.toLowerCase(); 
        if( !p.parser.ast.callbacks[lower]){
          /* name not in callback list, either a bad rule name or an excluded rule name */
          badNames.push(name);
        }
        /* convert all item rule names to lower case */
        item.name.nameString = lower;
      }
    }
    if(badNames.length > 0){
      var msg = "[";
      for(var i = 0; i < badNames.length; i +=1){
        if(i > 0){
          msg += ", " + badNames[i];
        }else{
          msg += badNames[i];
        }
      }
      msg += "]";
      throw new Error(errorName + "special character sequences ${name}: names not found: " + msg);
    }
  }
  return ret;
}