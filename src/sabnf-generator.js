// This module parses an input SABNF grammar string into a grammar object.
// Errors are reported as an array of error message strings.
// To be called only by the `apg-exp` contructor.
// ```
// input - required, a string containing the SABNF grammar
// errors - required, must be an array
// ```
"use strict;";
module.exports = function(input, errors){
  var errorName = "abnf-exp: generator: ";
  var apg = require("apg");
  var attributes = new apg.attributes();
  var grammarAnalysis = new apg.inputAnalysisParser();
  var parser = new apg.ABNFForSABNFParser();
  var grammarResult;
  var grammarObject = null;
  while(true){
    if(Array.isArray(errors) === false){
      break;
    }
    errors.length = 0;
    
    /* verify the input string - preliminary analysis*/
    try{
      grammarAnalysis.getString(input);
    }catch(e){
      errors.push(errorName + e.msg);
      break;
    }
    try{
      grammarResult = grammarAnalysis.analyze();
    }catch(e){
      errors.push(errorName + e.msg);
      break;
    }
    if(grammarResult.hasErrors){
      grammarResult.errors.forEach(function(error){
        errors.push(errorName + "line: "+error.line+" char: "+error.char+" error: "+error.msg)
      });
      break;
    }
    
    /* syntax analysis of the grammar */
    grammarResult = parser.syntax(grammarAnalysis);
    if(grammarResult.hasErrors){
      grammarResult.errors.forEach(function(error){
        errors.push(errorName + "line: "+error.line+" char: "+error.char+" error: "+error.msg)
      });
      break;
    }
    
    /* semantic analysis of the grammar */
    grammarResult = parser.semantic();
    if(grammarResult.hasErrors){
      grammarResult.errors.forEach(function(error){
        errors.push(errorName + "line: "+error.line+" char: "+error.char+" error: "+error.msg)
      });
      break;
    }
    
    /* attribute analysis of the grammar */
    var attrErrors = attributes.getAttributes(grammarResult.rules);
    if(attrErrors.length > 0){
      attrErrors.forEach(function(error){
        errors.push(errorName +"rule name: '"+error.name + "' attribute error: '" + error.error + "'");
      });
      break;
    }
    
    /* finally, generate a grammar object */
    grammarObject = parser.generateObject(grammarResult.rules, grammarResult.udts, input);
    break;
  }
  return grammarObject;
}