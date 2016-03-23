(function(){
  var fs = require("fs");
  var apglib = require("apg-lib");
  var css = apglib.utils.css();
  fs.writeFileSync("apgexp.css", css);
})()
