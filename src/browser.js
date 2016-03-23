// This function is used to generate a browser-accessible copy of `apg-exp.js`.
// To generate and minify:
// ```
//npm install -g browserify
//npm install -g uglifyjs
//browserify browser.js > apgexp.js
// uglifyjs apgexp.js --compress --mangle >apgexp-min.js
// ```
// To use it in a browser, include apgexp.js or apgexp-min.js in a script in the web page header.
// ```
//<!DOCTYPE html>
//<html lang="en">
//<head>
// ...
//<script src="apgexp-min.js" charset="utf-8"></script>
// ...
//</head>
// ```
// You can now access `apg-exp` and `apg-lib` 
// in your web page JavaScript
// through the variables `window.apgexp` 
// and `window.apglib` . e. g.
// ```
//  <script>
//  var exec = function(){
//    var grammar = 'rule = "abc"\n';
//    var str = "---abc---";
//    /* use apg-exp */
//    var exp = new apgexp(grammar);
//    var result = exp.exec(str);
//    ... /* do something with result */
//    /* use an apg-lib utilities function */
//    var strHtml = apglib.utils.stringToAsciiHtml(str);
//    ... /* do something with the HTML version of the string */
//  }
//  </script>
// ```
(function(){
  this.apgexp = require("./apg-exp.js");
  this.apglib = require("apg-lib");
})()
