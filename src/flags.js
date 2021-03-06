// This module analyzes the flags string, setting the true/false flags accordingly.
"use strict;"
module.exports = function(obj, flags) {
  var errorName = "apg-exp: constructor: flags: ";
  var error = null;
  var readonly = {
      writable : false,
      enumerable : false,
      configurable : true
    };
  /* defaults - all flags default to false */
  /* set to true only if they appear in the input flags string */
  obj.flags = "";
  obj.global = false;
  obj.sticky = false;
  obj.unicode = false;
  obj.debug = false;
  while(true){
    /* validation */
    if (typeof (flags) === "undefined" || flags === null) {
      break;
    }
    if (typeof (flags) !== "string") {
      error = errorName + "Invalid flags supplied to constructor: must be null, undefined or string: '"+ typeof (flags) + "'";
      break;
    }
    if (flags === "") {
      break;
    }
    /* set the flags */
    var f = flags.toLowerCase().split("");
    for (var i = 0; i < f.length; i += 1) {
      switch (f[i]) {
      case "d":
        obj.debug = true;
        break;
      case "g":
        obj.global = true;
        break;
      case "u":
        obj.unicode = true;
        break;
      case "y":
        obj.sticky = true;
        break;
      default:
        error = errorName + "Invalid flags supplied to constructor: '" + flags + "'";
        return error;
      }
    }
    /* alphabetize the existing flags */
    if (obj.debug) {
      obj.flags += "d";
    }
    if (obj.global) {
      obj.flags += "g";
    }
    if (obj.unicode) {
      obj.flags += "u";
    }
    if (obj.sticky) {
      obj.flags += "y";
    }
    break;
  }
  /* make flag properties read-only */
  Object.defineProperty(obj, "flags", readonly);
  Object.defineProperty(obj, "global", readonly);
  Object.defineProperty(obj, "debug", readonly);
  Object.defineProperty(obj, "unicode", readonly);
  Object.defineProperty(obj, "sticky", readonly);
  return error;
}