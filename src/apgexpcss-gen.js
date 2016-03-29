// This module generates `apgexp.css`,
// a CSS file for displaying the HTML output of the `apg-lib` utility functions.
// To generate apgexp.css
//```
// node apgexpcss-gen.js
//```
// `apgexp.css` should be included in the web pages that use `apgexp.js`.
// e.g.
// ```
//<head>
// ...
// <link rel="stylesheet" href="apgexp.css">
// <script src="apgexp.js" charset="utf-8"></script>
// ...
//</head>
//```
(function(){
  var fs = require("fs");
  var apglib = require("apg-lib");
  var css = apglib.utils.css();
  var name = "./apgexp.css";
  try{
    fs.writeFileSync(name, css);
    console.log("apgexpcss-gen: apg-exp css file written to: "+name);
  }catch(e){
    console.log(e.message);
  }
})()
