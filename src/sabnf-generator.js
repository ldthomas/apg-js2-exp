// This module parses an input SABNF grammar string into a grammar object.
// Errors are reported as an array of error message strings.
// To be called only by the `apg-exp` contructor.
// ```
// input - required, a string containing the SABNF grammar
// errors - required, must be an array
// ```
"use strict;";
module.exports = function(input){
  var errorName = "apg-exp: generator: ";
  var apg = require("apg");
  var attributes = new apg.attributes();
  var grammarAnalysis = new apg.inputAnalysisParser();
  var parser = new apg.ABNFForSABNFParser();
  var grammarResult;
  var grammarObject = null;
  var result = {obj: null, error: null, text: null, html: null};
  var grammarText, grammarHtml;
  var grammarTextTitle = "annotated grammar:\n";
  var textErrorTitle = "annotated grammar errors:\n";
  var htmlErrorTitle = "<h3>annotated grammar errors</h3>";
  var grammarHtmlTitle = "<h3>annotated grammar</h3>";
  while(true){
    /* verify the input string - preliminary analysis*/
    try{
      grammarResult = grammarAnalysis.analyze(input);
    }catch(e){
      result.error = errorName + e.msg;
      break;
    }
    if(grammarResult.hasErrors){
      result.error = "grammar has validation errors";
      result.text  = grammarTextTitle;
      result.text += grammarAnalysis.toString();
      result.text += textErrorTitle;
      result.text += grammarAnalysis.errorsToString(grammarResult.errors);
      result.html = grammarAnalysis.toHtml();
      result.html += grammarAnalysis.errorsToHtml(grammarResult.errors);
      break;
    }
    
    /* syntax analysis of the grammar */
    grammarResult = parser.syntax(grammarAnalysis);
    if(grammarResult.hasErrors){
      result.error = "grammar has syntax errors";
      result.text  = grammarTextTitle;
      result.text += grammarAnalysis.toString();
      result.text += textErrorTitle;
      result.text += grammarAnalysis.errorsToString(grammarResult.errors);
      result.html = grammarAnalysis.toHtml();
      result.html += grammarAnalysis.errorsToHtml(grammarResult.errors);
      break;
    }
    
    /* semantic analysis of the grammar */
    grammarResult = parser.semantic();
    if(grammarResult.hasErrors){
      result.error = "grammar has semantic errors";
      result.text  = grammarTextTitle;
      result.text += grammarAnalysis.toString();
      result.text += textErrorTitle;
      result.text += grammarAnalysis.errorsToString(grammarResult.errors);
      result.html = grammarAnalysis.toHtml();
      result.html += grammarAnalysis.errorsToHtml(grammarResult.errors);
      break;
    }
    
    /* attribute analysis of the grammar */
    var attrErrors = attributes.getAttributes(grammarResult.rules, grammarResult.rulesLineMap);
    if(attrErrors.length > 0){
      result.error = "grammar has attribute errors";
      result.text  = grammarTextTitle;
      result.text += grammarAnalysis.toString();
      result.text += textErrorTitle;
      result.text += grammarAnalysis.errorsToString(attrErrors);
      result.html = grammarAnalysis.toHtml() + grammarAnalysis.errorsToHtml(attrErrors);
      result.html = grammarAnalysis.toHtml();
      result.html += grammarAnalysis.errorsToHtml(attrErrors);
      break;
    }
    
    /* finally, generate a grammar object */
    result.obj = parser.generateObject(grammarResult.rules, grammarResult.udts, input);
    break;
  }
  return result;
}