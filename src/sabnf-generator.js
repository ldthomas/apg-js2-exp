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
  var api = require("apg-api");
  var result = {obj: null, error: null, text: null, html: null};
  var grammarTextTitle = "annotated grammar:\n";
  var textErrorTitle = "annotated grammar errors:\n";
  function resultError(api, result, header){
    result.error = header;
    result.text  = grammarTextTitle;
    result.text += api.linesToAscii();
    result.text += textErrorTitle;
    result.text += api.errorsToAscii();
    result.html = api.linesToHtml();
    result.html += api.errorsToHtml();
  }
  while(true){
    /* verify the input string - preliminary analysis*/
    try{
      api = new api(input);
      api.scan();
    }catch(e){
      result.error = errorName + e.msg;
      break;
    }
    if(api.errors.length){
      resultError(api, result, "grammar has validation errors");
      break;
    }
    
    /* syntax analysis of the grammar */
    api.parse()
    if(api.errors.length){
      resultError(api, result, "grammar has syntax errors");
      break;
    }
    
    /* semantic analysis of the grammar */
    api.translate();
    if(api.errors.length){
      resultError(api, result, "grammar has semantic errors");
      break;
    }
    
    /* attribute analysis of the grammar */
    api.attributes();
    if(api.errors.length){
      resultError(api, result, "grammar has attribute errors");
      break;
    }
    
    /* finally, generate a grammar object */
    result.obj = api.toObject();
    break;
  }
  return result;
}