/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This module serves to export all other objects and object constructors with the `require("apg-lib")` statement.
// For example, to create a new parser in your program,
//````
// var apglib = require("apg-lib");
// var my-parser = new apglib.parser();
//````
/*
* COPYRIGHT: Copyright (c) 2017 Lowell D. Thomas, all rights reserved
*   LICENSE: BSD-3-Clause
*    AUTHOR: Lowell D. Thomas
*     EMAIL: lowell@coasttocoastresearch.com
*   WEBSITE: http://coasttocoastresearch.com/
*/

exports.ast = __webpack_require__(36);
exports.circular = __webpack_require__(8);
exports.ids = __webpack_require__(1);
exports.parser = __webpack_require__(37);
exports.stats = __webpack_require__(38);
exports.trace = __webpack_require__(39);
exports.utils = __webpack_require__(2);
exports.emitcss = __webpack_require__(9);
exports.style = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This module exposes a list of named identifiers, shared across the parser generator
// and the parsers that are generated.

module.exports = {
  // Identifies the operator type. Used by the [generator](https://github.com/ldthomas/apg-js2)
  // to indicate operator types in the grammar object.
  // Used by the [parser](./parser.html) when interpreting the grammar object.
  /* the original ABNF operators */
  ALT : 1, /* alternation */
  CAT : 2, /* concatenation */
  REP : 3, /* repetition */
  RNM : 4, /* rule name */
  TRG : 5, /* terminal range */
  TBS : 6, /* terminal binary string, case sensitive */
  TLS : 7, /* terminal literal string, case insensitive */
  /* the super set, SABNF operators */
  UDT : 11, /* user-defined terminal */
  AND : 12, /* positive look ahead */
  NOT : 13, /* negative look ahead */
  BKR : 14, /* back reference to a previously matched rule name */
  BKA : 15, /* positive look behind */
  BKN : 16, /* negative look behind */
  ABG : 17, /* anchor - begin of string */
  AEN : 18, /* anchor - end of string */
  // Used by the parser and the user's `RNM` and `UDT` callback functions.
  // Identifies the parser state as it traverses the parse tree nodes.
  // - *ACTIVE* - indicates the downward direction through the parse tree node.
  // - *MATCH* - indicates the upward direction and a phrase, of length \> 0, has been successfully matched
  // - *EMPTY* - indicates the upward direction and a phrase, of length = 0, has been successfully matched
  // - *NOMATCH* - indicates the upward direction and the parser failed to match any phrase at all
  ACTIVE : 100,
  MATCH : 101,
  EMPTY : 102,
  NOMATCH : 103,
  // Used by [`AST` translator](./ast.html) (semantic analysis) and the user's callback functions
  // to indicate the direction of flow through the `AST` nodes.
  // - *SEM_PRE* - indicates the downward (pre-branch) direction through the `AST` node.
  // - *SEM_POST* - indicates the upward (post-branch) direction through the `AST` node.
  SEM_PRE : 200,
  SEM_POST : 201,
  // Used by the user's callback functions to indicate to the `AST` translator (semantic analysis) how to proceed.
  // - *SEM_OK* - normal return value
  // - *SEM_SKIP* - if a callback function returns this value from the SEM_PRE state,
  // the translator will skip processing all `AST` nodes in the branch below the current node.
  // Ignored if returned from the SEM_POST state.
  SEM_OK : 300,
  SEM_SKIP : 301,
  // Used in attribute generation to distinguish the necessary attribute categories.
  // - *ATTR_N* - non-recursive
  // - *ATTR_R* - recursive
  // - *ATTR_MR* - belongs to a mutually-recursive set
  // - *ATTR_NMR* - non-recursive, but refers to a mutually-recursive set
  // - *ATTR_RMR* - recursive, but refers to a mutually-recursive set
  ATTR_N : 400,
  ATTR_R : 401,
  ATTR_MR : 402,
  ATTR_NMR : 403,
  ATTR_RMR : 404,
  // Look around values indicate whether the parser is in look ahead or look behind mode.
  // Used by the tracing facility to indicate the look around mode in the trace records display.
  // - *LOOKAROUND_NONE* - the parser is in normal parsing mode
  // - *LOOKAROUND_AHEAD* - the parse is in look-ahead mode, phrase matching for operator `AND(&)` or `NOT(!)`
  // - *LOOKAROUND_BEHIND* - the parse is in look-behind mode, phrase matching for operator `BKA(&&)` or `BKN(!!)`
  LOOKAROUND_NONE : 500,
  LOOKAROUND_AHEAD : 501,
  LOOKAROUND_BEHIND : 502,
  // Back reference rule mode indicators
  // - *BKR_MODE_UM* - the back reference is using universal mode
  // - *BKR_MODE_PM* - the back reference is using parent frame mode
  // - *BKR_MODE_CS* - the back reference is using case-sensitive phrase matching
  // - *BKR_MODE_CI* - the back reference is using case-insensitive phrase matching
  BKR_MODE_UM : 601,
  BKR_MODE_PM : 602,
  BKR_MODE_CS : 603,
  BKR_MODE_CI : 604
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This module exports a variety of utility functions that support 
// [`apg`](https://github.com/ldthomas/apg-js2), [`apg-lib`](https://github.com/ldthomas/apg-js2-lib)
// and the generated parser applications.

var thisFileName = "utilities.js: ";
var style = __webpack_require__(3);
var converter = __webpack_require__(5).converter;
var _this = this;
/* translate (implied) phrase beginning character and length to actual first and last character indexes */
/* used by multiple phrase handling functions */
var getBounds = function(length, beg, len) {
  var end;
  while (true) {
    if (length <= 0) {
      beg = 0;
      end = 0;
      break;
    }
    if (typeof (beg) !== "number") {
      beg = 0;
      end = length;
      break;
    }
    if (beg >= length) {
      beg = length;
      end = length;
      break;
    }
    if (typeof (len) !== "number") {
      end = length;
      break;
    }
    end = beg + len;
    if (end > length) {
      end = length;
      break
    }
    break;
  }
  return {
    beg : beg,
    end : end
  };
}
// Generates a complete, minimal HTML5 page, inserting the user's HTML text on the page.
// - *html* - the page text in HTML format
// - *title* - the HTML page `<title>` - defaults to `htmlToPage`.
exports.htmlToPage = function(html, title) {
  var thisFileName = "utilities.js: ";
  var emitcss = __webpack_require__(9);
  if (typeof (html) !== "string") {
    throw new Error(thisFileName + "htmlToPage: input HTML is not a string");
  }
  if (typeof (title) !== "string") {
    title = "htmlToPage";
  }
  var page = '';
  page += '<!DOCTYPE html>\n';
  page += '<html lang="en">\n';
  page += '<head>\n';
  page += '<meta charset="utf-8">\n';
  page += '<title>' + title + '</title>\n';
  page += "<style>\n";
  page += emitcss();
  page += "</style>\n";
  page += '</head>\n<body>\n';
  page += '<p>' + new Date() + '</p>\n';
  page += html;
  page += '</body>\n</html>\n';
  return page;
};
// Formats the returned object from [`parser.parse()`](./parse.html)
// into an HTML table.
// ```
// return {
//   success : sysData.success,
//   state : sysData.state,
//   length : charsLength,
//   matched : sysData.phraseLength,
//   maxMatched : maxMatched,
//   maxTreeDepth : maxTreeDepth,
//   nodeHits : nodeHits,
//   inputLength : chars.length,
//   subBegin : charsBegin,
//   subEnd : charsEnd,
//   subLength : charsLength
// };
// ```
exports.parserResultToHtml = function(result, caption) {
  var id = __webpack_require__(1);
  var cap = null;
  if (typeof (caption ) === "string" && caption !== "") {
    cap = caption;
  }
  var success, state;
  if (result.success === true) {
    success = '<span class="' + style.CLASS_MATCH + '">true</span>';
  } else {
    success = '<span class="' + style.CLASS_NOMATCH + '">false</span>';
  }
  if (result.state === id.EMPTY) {
    state = '<span class="' + style.CLASS_EMPTY + '">EMPTY</span>';
  } else if (result.state === id.MATCH) {
    state = '<span class="' + style.CLASS_MATCH + '">MATCH</span>';
  } else if (result.state === id.NOMATCH) {
    state = '<span class="' + style.CLASS_NOMATCH + '">NOMATCH</span>';
  } else {
    state = '<span class="' + style.CLASS_NOMATCH + '">unrecognized</span>';
  }
  var html = '';
  html += '<table class="' + style.CLASS_STATE + '">\n';
  if (cap) {
    html += '<caption>' + cap + '</caption>\n';
  }
  html += '<tr><th>state item</th><th>value</th><th>description</th></tr>\n';
  html += '<tr><td>parser success</td><td>' + success + '</td>\n';
  html += '<td><span class="' + style.CLASS_MATCH + '">true</span> if the parse succeeded,\n';
  html += ' <span class="' + style.CLASS_NOMATCH + '">false</span> otherwise';
  html += '<br><i>NOTE: for success, entire string must be matched</i></td></tr>\n';
  html += '<tr><td>parser state</td><td>' + state + '</td>\n';
  html += '<td><span class="' + style.CLASS_EMPTY + '">EMPTY</span>, ';
  html += '<span class="' + style.CLASS_MATCH + '">MATCH</span> or \n';
  html += '<span class="' + style.CLASS_NOMATCH + '">NOMATCH</span></td></tr>\n';
  html += '<tr><td>string length</td><td>' + result.length + '</td><td>length of the input (sub)string</td></tr>\n';
  html += '<tr><td>matched length</td><td>' + result.matched + '</td><td>number of input string characters matched</td></tr>\n';
  html += '<tr><td>max matched</td><td>' + result.maxMatched
      + '</td><td>maximum number of input string characters matched</td></tr>\n';
  html += '<tr><td>max tree depth</td><td>' + result.maxTreeDepth
      + '</td><td>maximum depth of the parse tree reached</td></tr>\n';
  html += '<tr><td>node hits</td><td>' + result.nodeHits
      + '</td><td>number of parse tree node hits (opcode function calls)</td></tr>\n';
  html += '<tr><td>input length</td><td>' + result.inputLength + '</td><td>length of full input string</td></tr>\n';
  html += '<tr><td>sub-string begin</td><td>' + result.subBegin + '</td><td>sub-string first character index</td></tr>\n';
  html += '<tr><td>sub-string end</td><td>' + result.subEnd + '</td><td>sub-string end-of-string index</td></tr>\n';
  html += '<tr><td>sub-string length</td><td>' + result.subLength + '</td><td>sub-string length</td></tr>\n';
  html += '</table>\n';
  return html;
}
// Translates a sub-array of integer character codes into a string.
// Very useful in callback functions to translate the matched phrases into strings.
exports.charsToString = function(chars, phraseIndex, phraseLength) {
  var ar = chars.slice(phraseIndex, phraseIndex+phraseLength);
  var buf = converter.encode("UTF16LE", ar);
  return buf.toString("utf16le");
}
// Translates a string into an array of integer character codes.
exports.stringToChars = function(string) {
  return converter.decode("STRING", string);
}
// Translates an opcode identifier into a human-readable string.
exports.opcodeToString = function(type) {
  var id = __webpack_require__(1);
  var ret = 'unknown';
  switch (type) {
  case id.ALT:
    ret = 'ALT';
    break;
  case id.CAT:
    ret = 'CAT';
    break;
  case id.RNM:
    ret = 'RNM';
    break;
  case id.UDT:
    ret = 'UDT';
    break;
  case id.AND:
    ret = 'AND';
    break;
  case id.NOT:
    ret = 'NOT';
    break;
  case id.REP:
    ret = 'REP';
    break;
  case id.TRG:
    ret = 'TRG';
    break;
  case id.TBS:
    ret = 'TBS';
    break;
  case id.TLS:
    ret = 'TLS';
    break;
  case id.BKR:
    ret = 'BKR';
    break;
  case id.BKA:
    ret = 'BKA';
    break;
  case id.BKN:
    ret = 'BKN';
    break;
  case id.ABG:
    ret = 'ABG';
    break;
  case id.AEN:
    ret = 'AEN';
    break;
  }
  return ret;
};
// Array which translates all 128, 7-bit ASCII character codes to their respective HTML format.
exports.asciiChars = [ "NUL", "SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "TAB", "LF", "VT", "FF", "CR", "SO", "SI",
    "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", '&nbsp;', "!",
    '&#34;', "#", "$", "%", '&#38;', '&#39;', "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", ":", ";", '&#60;', "=", '&#62;', "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "&#92;", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~",
    "DEL" ];
// Translates a single character to hexidecimal with leading zeros for 2, 4, or 8 digit display.
exports.charToHex = function(char) {
  var ch = char.toString(16).toUpperCase();
  switch (ch.length) {
  case 1:
  case 3:
  case 7:
    ch = "0" + ch;
    break;
  case 6:
    ch = "00" + ch;
    break;
  case 5:
    ch = "000" + ch;
    break;
  }
  return ch;
}
// Translates a sub-array of character codes to decimal display format.
exports.charsToDec = function(chars, beg, len) {
  var ret = "";
  if (!Array.isArray(chars)) {
    throw new Error(thisFileName + "charsToDec: input must be an array of integers");
  }
  var bounds = getBounds(chars.length, beg, len);
  if (bounds.end > bounds.beg) {
    ret += chars[bounds.beg];
    for (var i = bounds.beg + 1; i < bounds.end; i += 1) {
      ret += "," + chars[i];
    }
  }
  return ret;
}
// Translates a sub-array of character codes to hexidecimal display format.
exports.charsToHex = function(chars, beg, len) {
  var ret = "";
  if (!Array.isArray(chars)) {
    throw new Error(thisFileName + "charsToHex: input must be an array of integers");
  }
  var bounds = getBounds(chars.length, beg, len);
  if (bounds.end > bounds.beg) {
    ret += "\\x" + _this.charToHex(chars[bounds.beg]);
    for (var i = bounds.beg + 1; i < bounds.end; i += 1) {
      ret += ",\\x" + _this.charToHex(chars[i]);
    }
  }
  return ret;
}
// Translates a sub-array of character codes to Unicode display format.
exports.charsToUnicode = function(chars, beg, len) {
  var ret = "";
  if (!Array.isArray(chars)) {
    throw new Error(thisFileName + "charsToUnicode: input must be an array of integers");
  }
  var bounds = getBounds(chars.length, beg, len);
  if (bounds.end > bounds.beg) {
    ret += "U+" + _this.charToHex(chars[bounds.beg]);
    for (var i = bounds.beg + 1; i < bounds.end; i += 1) {
      ret += ",U+" + _this.charToHex(chars[i]);
    }
  }
  return ret;
}
// Translates a sub-array of character codes to JavaScript Unicode display format (`\uXXXX`).
exports.charsToJsUnicode = function(chars, beg, len) {
  var ret = "";
  if (!Array.isArray(chars)) {
    throw new Error(thisFileName + "charsToJsUnicode: input must be an array of integers");
  }
  var bounds = getBounds(chars.length, beg, len);
  if (bounds.end > bounds.beg) {
    ret += "\\u" + _this.charToHex(chars[bounds.beg]);
    for (var i = bounds.beg + 1; i < bounds.end; i += 1) {
      ret += ",\\u" + _this.charToHex(chars[i]);
    }
  }
  return ret;
}
// Translates a sub-array of character codes to printing ASCII character display format.
exports.charsToAscii = function(chars, beg, len) {
  var ret = "";
  if (!Array.isArray(chars)) {
    throw new Error(thisFileName + "charsToAscii: input must be an array of integers");
  }
  var bounds = getBounds(chars.length, beg, len);
  for (var i = bounds.beg; i < bounds.end; i += 1) {
    var char = chars[i];
    if (char >= 32 && char <= 126) {
      ret += String.fromCharCode(char);
    } else {
      ret += "\\x" + _this.charToHex(char);
    }
  }
  return ret;
}
// Translates a sub-array of character codes to HTML display format.
exports.charsToAsciiHtml = function(chars, beg, len) {
  if (!Array.isArray(chars)) {
    throw new Error(thisFileName + "charsToAsciiHtml: input must be an array of integers");
  }
  var html = "";
  var char;
  var bounds = getBounds(chars.length, beg, len);
  for (var i = bounds.beg; i < bounds.end; i += 1) {
    char = chars[i];
    if (char < 32 || char === 127) {
      /* control characters */
      html += '<span class="' + style.CLASS_CTRLCHAR + '">' + _this.asciiChars[char] + '</span>';
    } else if (char > 127) {
      /* non-ASCII */
      html += '<span class="' + style.CLASS_CTRLCHAR + '">' + 'U+' + _this.charToHex(char) + '</span>';
    } else {
      /* printing ASCII, 32 <= char <= 126 */
      html += _this.asciiChars[char];
    }
  }
  return html;
}
//Translates a JavaScript string to HTML display format.
exports.stringToAsciiHtml = function(str){
  var chars = converter.decode("STRING", str);
//  var chars = this.stringToChars(str);
  return this.charsToAsciiHtml(chars);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {

  // Generated by apglib/style.js 
  CLASS_MONOSPACE: 'apg-mono',
  CLASS_ACTIVE: 'apg-active',
  CLASS_EMPTY: 'apg-empty',
  CLASS_MATCH: 'apg-match',
  CLASS_NOMATCH: 'apg-nomatch',
  CLASS_LOOKAHEAD: 'apg-lh-match',
  CLASS_LOOKBEHIND: 'apg-lb-match',
  CLASS_REMAINDER: 'apg-remainder',
  CLASS_CTRLCHAR: 'apg-ctrl-char',
  CLASS_LINEEND: 'apg-line-end',
  CLASS_ERROR: 'apg-error',
  CLASS_PHRASE: 'apg-phrase',
  CLASS_EMPTYPHRASE: 'apg-empty-phrase',
  CLASS_STATE: 'apg-state',
  CLASS_STATS: 'apg-stats',
  CLASS_TRACE: 'apg-trace',
  CLASS_GRAMMAR: 'apg-grammar',
  CLASS_RULES: 'apg-rules',
  CLASS_RULESLINK: 'apg-rules-link',
  CLASS_ATTRIBUTES: 'apg-attrs',
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(12)
var ieee754 = __webpack_require__(13)
var isArray = __webpack_require__(14)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This module exports the `converter` and `transformers` objects from the  `require("apg-conv-api")` statement.
// For example, get the converter and encode an array of integer character codes to a UTF8 byte stream,
//````
// var apgConv = require("apg-conv-api");
// var buf = apgConv.converter.encode("UTF8", chars);
//````
/*
* COPYRIGHT: Copyright (c) 2017 Lowell D. Thomas, all rights reserved
*   LICENSE: BSD-3-Clause
*    AUTHOR: Lowell D. Thomas
*     EMAIL: lowell@coasttocoastresearch.com
*   WEBSITE: http://coasttocoastresearch.com/
*/

exports.converter = __webpack_require__(27);
exports.transformers = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// This module contains the actual encoding and decoding algorithms.
// Throws "RangeError" exceptions on characters or bytes out of range for the given encoding.
"use strict;"
var _this = this;

/* decoding error codes */
var NON_SHORTEST = 0xFFFFFFFC;
var TRAILING     = 0xFFFFFFFD;
var RANGE        = 0xFFFFFFFE;
var ILL_FORMED   = 0xFFFFFFFF;

/* mask[n] = 2**n - 1, ie. mask[n] = n bits on. e.g. mask[6] = %b111111 */
var mask = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023];

/* ascii[n] = 'HH', where 0xHH = n, eg. ascii[254] = 'FE' */
var ascii = [ 
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0A', '0B', '0C', '0D', '0E', '0F', '10', '11', '12', '13', '14', '15', '16', '17',
  '18', '19', '1A', '1B', '1C', '1D', '1E', '1F', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2A', '2B', '2C', '2D', '2E', '2F', '30',
  '31', '32', '33', '34', '35', '36', '37', '38', '39', '3A', '3B', '3C', '3D', '3E', '3F', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
  '4A', '4B', '4C', '4D', '4E', '4F', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5A', '5B', '5C', '5D', '5E', '5F', '60', '61', '62',
  '63', '64', '65', '66', '67', '68', '69', '6A', '6B', '6C', '6D', '6E', '6F', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7A', '7B',
  '7C', '7D', '7E', '7F', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8A', '8B', '8C', '8D', '8E', '8F', '90', '91', '92', '93', '94',
  '95', '96', '97', '98', '99', '9A', '9B', '9C', '9D', '9E', '9F', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'AA', 'AB', 'AC', 'AD',
  'AE', 'AF', 'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6',
  'C7', 'C8', 'C9', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF',
  'E0', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'F0', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
  'F9', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF' ];

/* vector of base 64 characters */
var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");

/* vector of base 64 character codes */
var base64codes = [];
base64chars.forEach(function(char){
  base64codes.push(char.charCodeAt(0));
});

// The UTF8 algorithms.
exports.utf8 = {
    encode : function(chars) {
      var bytes = [];
      chars.forEach(function(char){
        if(char >= 0 && char <= 0x7f){
          bytes.push(char);
        }else if(char <= 0x7ff){
          bytes.push(0xc0 + ((char >> 6) & mask[5]));
          bytes.push(0x80 + (char & mask[6]));
        }else if(char < 0xD800 || (char > 0xDFFF && char <= 0xffff)){
          bytes.push(0xe0 + ((char >> 12) & mask[4]));
          bytes.push(0x80 + ((char >> 6) & mask[6]));
          bytes.push(0x80 + (char & mask[6]));
        }else if(char >= 0x10000 && char <= 0x10ffff){
          var u = (char >> 16) & mask[5];
          bytes.push(0xf0 + (u >> 2));
          bytes.push(0x80 + ((u & mask[2]) << 4) + ((char >> 12) & mask[4]));
          bytes.push(0x80 + ((char >> 6) & mask[6]));
          bytes.push(0x80 + (char & mask[6]));
        }else{
          throw new RangeError("utf8.encode: character out of range: char: " + char);
        }
      });
      return Buffer.from(bytes);
    },
  decode : function(buf, bom) {
    /* bytes functions return error for non-shortest forms & values out of range */
    function bytes2(b1, b2){
      /*U+0080..U+07FF */
      /* 00000000 00000yyy yyxxxxxx | 110yyyyy 10xxxxxx */
      if((b2 & 0xC0) !== 0x80){
        return TRAILING;
      }
      var x = ((b1 & mask[5]) << 6) + (b2 & mask[6]);
      if(x < 0x80){
        return NON_SHORTEST;
      }
      return x;
    }
    function bytes3(b1, b2, b3){
      /*U+0800..U+FFFF */
      /* 00000000 zzzzyyyy yyxxxxxx | 1110zzzz 10yyyyyy 10xxxxxx */
      if(((b3 & 0xC0) !== 0x80) || ((b2 & 0xC0) !== 0x80)){
        return TRAILING;
      }
      var x = ((b1 & mask[4]) << 12) + ((b2 & mask[6]) << 6) + (b3 & mask[6]);
      if(x < 0X800){
        return NON_SHORTEST;
      }
      if((x >= 0xD800) && (x <= 0xDFFF)){
        return RANGE;
      }
      return x;
    }
    function bytes4(b1, b2, b3, b4){
      /*U+10000..U+10FFFF */
      /* 000uuuuu zzzzyyyy yyxxxxxx | 11110uuu 10uuzzzz 10yyyyyy 10xxxxxx */
      if(((b4 & 0xC0) !== 0x80) || ((b3 & 0xC0) !== 0x80) || ((b2 & 0xC0) !== 0x80)){
        return TRAILING;
      }
      var x = ((((b1 & mask[3]) << 2)
          + ((b2 >> 4) & mask[2])) << 16)
          + ((b2 & mask[4]) << 12)
          + ((b3 & mask[6]) << 6)
          + (b4 & mask[6]);
      if(x < 0x10000){
        return NON_SHORTEST;
      }
      if(x > 0x10FFFF){
        return RANGE;
      }
      return x;
    }
    var c, b1, i1, i2, i3, inc;
    var len = buf.length;
    var i = bom ? 3 : 0;
    var chars = [];
    while(i < len){
      b1 = buf[i];
      c = ILL_FORMED;
      while(true){
        if(b1 >=0 && b1 <=0x7f){
          /*U+0000..U+007F 00..7F*/
          c = b1;
          inc = 1;
          break;
        }
        i1 = i + 1;
        if((i1 < len) && (b1 >= 0xc2 && b1 <= 0xdf)){
          /*U+0080..U+07FF C2..DF 80..BF*/
          c = bytes2(b1, buf[i1]);
          inc = 2;
          break;
        }
        i2 = i + 2
        if((i2 < len) && (b1 >= 0xe0 && b1 <= 0xef)){
          /*U+0800..U+FFFF */
          c = bytes3(b1, buf[i1], buf[i2]);
          inc = 3;
          break;
        }
        i3 = i + 3
        if((i3 < len) && (b1 >= 0xf0 && b1 <= 0xf4)){
          /*U+10000..U+10FFFF */
          c = bytes4(b1, buf[i1], buf[i2], buf[i3]);
          inc = 4;
          break;
        }
        /* if we fall through to here, it is an ill-formed sequence*/
        break;
      }
      if(c > 0x10FFFF){
        var at = "byte["+i+"]";
        if(c === ILL_FORMED){
          throw new RangeError("utf8.decode: ill-formed UTF8 byte sequence found at: "+at);
        }
        if(c === TRAILING){
          throw new RangeError("utf8.decode: illegal trailing byte found at: "+at);
        }
        if(c === RANGE){
          throw new RangeError("utf8.decode: code point out of range found at: "+at);
        }
        if(c === NON_SHORTEST){
          throw new RangeError("utf8.decode: non-shortest form found at: "+at);
        }
        throw new RangeError("utf8.decode: unrecognized error found at: "+at);
      }
      chars.push(c);
      i += inc;
    }
    return chars;
  },
}

//The UTF16BE algorithms.
exports.utf16be = {
  encode : function(chars) {
    var bytes = [];
    var char, h, l;
    for(var i = 0; i < chars.length; i += 1){
      char = chars[i];
      if( ((char >= 0) && (char <= 0xD7FF)) || ((char >= 0xE000) && (char <= 0xFFFF)) ){
        bytes.push((char >> 8) & mask[8]);
        bytes.push(char & mask[8]);
      }else if(char >= 0x10000 && char <= 0x10FFFF){
        l = char - 0x10000;
        h = 0xD800 + (l >> 10);
        l = 0xDC00 + (l & mask[10]);
        bytes.push((h >> 8) & mask[8]);
        bytes.push(h & mask[8]);
        bytes.push((l >> 8) & mask[8]);
        bytes.push(l & mask[8]);
      }else{
        throw new RangeError("utf16be.encode: UTF16BE value out of range: char["+i+"]: "+char);
      }
    }
    return Buffer.from(bytes);
  },
  decode : function(buf, bom) {
    /* assumes caller has insured that buf is a Buffer of bytes */
    if(buf.length % 2 > 0){
      throw new RangeError("utf16be.decode: data length must be even multiple of 2: length: "+buf.length);
    }
    var chars = [];
    var len = buf.length;
    var i = bom ? 2 : 0;
    var j = 0;
    var c, inc, i1, i3, high, low;
    while(i < len){
      while(true){
        i1 = i + 1;
        if(i1 < len){
          high = (buf[i] << 8) + buf[i1];
          if((high < 0xD800) || (high > 0xDFFF)){
            c = high;
            inc = 2;
            break;
          }
          i3 = i + 3;
          if(i3 < len){
            low = (buf[i + 2] << 8) + buf[i3];
            if((high <= 0xDBFF) && (low >= 0xDC00) && (low <= 0xDFFF)){
              c = 0x10000 + ((high - 0xD800) << 10) + (low - 0xDC00);
              inc = 4;
              break;
            }
          }
        }
        /* if we fall through to here, it is an ill-formed sequence*/
        throw new RangeError("utf16be.decode: ill-formed UTF16BE byte sequence found: byte["+i+"]");
      }
      chars[j++] = c;
      i += inc;
    }
    return chars;
  },
}

//The UTF16LE algorithms.
exports.utf16le = {
  encode : function(chars) {
    var bytes = [];
    var char, h, l;
    for(var i = 0; i < chars.length; i += 1){
      char = chars[i];
      if( ((char >= 0) && (char <= 0xD7FF)) || ((char >= 0xE000) && (char <= 0xFFFF)) ){
        bytes.push(char & mask[8]);
        bytes.push((char >> 8) & mask[8]);
      }else if(char >= 0x10000 && char <= 0x10FFFF){
        l = char - 0x10000;
        h = 0xD800 + (l >> 10);
        l = 0xDC00 + (l & mask[10]);
        bytes.push(h & mask[8]);
        bytes.push((h >> 8) & mask[8]);
        bytes.push(l & mask[8]);
        bytes.push((l >> 8) & mask[8]);
      }else{
        throw new RangeError("utf16le.encode: UTF16LE value out of range: char["+i+"]: "+char);
      }
    }
    return Buffer.from(bytes);
  },
  decode : function(buf, bom) {
    /* assumes caller has insured that buf is a Buffer of bytes */
    if(buf.length % 2 > 0){
      throw new RangeError("utf16le.decode: data length must be even multiple of 2: length: "+buf.length);
    }
    var chars = [];
    var len = buf.length;
    var i = bom ? 2 : 0;
    var j = 0;
    var c, inc, i1, i3, high, low;
    while(i < len){
      while(true){
        i1 = i + 1;
        if(i1 < len){
          high = (buf[i1] << 8) + buf[i];
          if((high < 0xD800) || (high > 0xDFFF)){
            c = high;
            inc = 2;
            break;
          }
          i3 = i + 3;
          if(i3 < len){
            low = (buf[i3] << 8) + buf[i + 2];
            if((high <= 0xDBFF) && (low >= 0xDC00) && (low <= 0xDFFF)){
              c = 0x10000 + ((high - 0xD800) << 10) + (low - 0xDC00);
              inc = 4;
              break;
            }
          }
        }
        /* if we fall through to here, it is an ill-formed sequence*/
        throw new RangeError("utf16le.decode: ill-formed UTF16LE byte sequence found: byte["+i+"]");
      }
      chars[j++] = c;
      i += inc;
    }
    return chars;
  },
}

//The UTF32BE algorithms.
exports.utf32be = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length * 4);
    var i = 0;
    chars.forEach(function(char){
      if(((char >= 0xD800) && (char <= 0xDFFF)) || (char > 0x10FFFF)){
        throw new RangeError("utf32be.encode: UTF32BE character code out of range: char["+i/4+"]: " + char);
      }
      buf[i++] = (char >> 24) & mask[8];
      buf[i++] = (char >> 16) & mask[8];
      buf[i++] = (char >> 8) & mask[8];
      buf[i++] = char & mask[8];
    });
    return buf;
  },
  decode : function(buf, bom) {
    /* caller to insure buf is a Buffer of bytes */
    if(buf.length % 4 > 0 ){
      throw new RangeError("utf32be.decode: UTF32BE byte length must be even multiple of 4: length: " + buf.length);
    }
    var chars = [];
    var i = bom ? 4 : 0;
    for(; i < buf.length; i += 4){
      var char = (buf[i]<<24) + (buf[i+1]<<16) + (buf[i+2]<<8) + buf[i+3];
      if(((char >= 0xD800) && (char <= 0xDFFF)) || (char > 0x10FFFF)){
        throw new RangeError("utf32be.decode: UTF32BE character code out of range: char["+i/4+"]: " + char);
      }
      chars.push(char);
    }
    return chars;
  }
}

//The UTF32LE algorithms.
exports.utf32le = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length * 4);
    var i = 0;
    chars.forEach(function(char){
      if(((char >= 0xD800) && (char <= 0xDFFF)) || (char > 0x10FFFF)){
        throw new RangeError("utf32le.encode: UTF32LE character code out of range: char["+i/4+"]: " + char);
      }
      buf[i++] = char & mask[8];
      buf[i++] = (char >> 8) & mask[8];
      buf[i++] = (char >> 16) & mask[8];
      buf[i++] = (char >> 24) & mask[8];
    });
    return buf;
  },
  decode : function(buf, bom) {
    /* caller to insure buf is a Buffer of bytes */
    if(buf.length % 4 > 0 ){
      throw new RangeError("utf32be.decode: UTF32LE byte length must be even multiple of 4: length: " + buf.length);
    }
    var chars = [];
    var i = bom ? 4 : 0;
    for(; i < buf.length; i += 4){
      var char = (buf[i+3]<<24) + (buf[i+2]<<16) + (buf[i+1]<<8) + buf[i];
      if(((char >= 0xD800) && (char <= 0xDFFF)) || (char > 0x10FFFF)){
        throw new RangeError("utf32le.encode: UTF32LE character code out of range: char["+i/4+"]: " + char);
      }
      chars.push(char);
    }
    return chars;
  }
}

//The UINT7 algorithms. ASCII or 7-bit unsigned integers.
exports.uint7 = {
    encode : function(chars) {
      var buf = Buffer.alloc(chars.length);
      for(var i = 0; i < chars.length; i += 1){
        if(chars[i] > 0x7f){
          throw new RangeError("uint7.encode: UINT7 character code out of range: char["+i+"]: " + chars[i]);
        }
        buf[i] = chars[i];
      }
      return buf;
    },
    decode : function(buf) {
      var chars = [];
      for(var i = 0; i < buf.length; i += 1){
        if(buf[i] > 0x7f){
          throw new RangeError("uint7.decode: UINT7 character code out of range: byte["+i+"]: " + buf[i]);
        }
        chars[i] = buf[i];
      }
      return chars;
    }
  }

//The UINT8 algorithms. BINARY, Latin 1 or 8-bit unsigned integers.
exports.uint8 = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length);
    for(var i = 0; i < chars.length; i += 1){
      if(chars[i] > 0xff){
        throw new RangeError("uint8.encode: UINT8 character code out of range: char["+i+"]: " + chars[i]);
      }
      buf[i] = chars[i];
    }
    return buf;
  },
  decode : function(buf) {
    var chars = [];
    for(var i = 0; i < buf.length; i += 1){
      chars[i] = buf[i];
    }
    return chars;
  }
}

//The UINT16BE algorithms. Big-endian 16-bit unsigned integers.
exports.uint16be = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length * 2);
    var i = 0;
    chars.forEach(function(char){
      if(char > 0xffff){
        throw new RangeError("uint16be.encode: UINT16BE character code out of range: char["+(i/2)+"]: " + char);
      }
      buf[i++] = (char >> 8) & mask[8];
      buf[i++] = char & mask[8];
    });
    return buf;
  },
  decode : function(buf) {
    if(buf.length % 2 > 0 ){
      throw new RangeError("uint16be.decode: UINT16BE byte length must be even multiple of 2: length: " + buf.length);
    }
    var chars = [];
    for(var i = 0; i < buf.length; i += 2){
      chars.push((buf[i]<<8) + buf[i+1]);
    }
    return chars;
  }
}

//The UINT16LE algorithms. Little-endian 16-bit unsigned integers.
exports.uint16le = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length * 2);
    var i = 0;
    chars.forEach(function(char){
      if(char > 0xffff){
        throw new RangeError("uint16le.encode: UINT16LE character code out of range: char["+(i/2)+"]: " + char);
      }
      buf[i++] = char & mask[8];
      buf[i++] = (char >> 8) & mask[8];
    });
    return buf;
  },
  decode : function(buf) {
    if(buf.length % 2 > 0 ){
      throw new RangeError("uint16le.decode: UINT16LE byte length must be even multiple of 2: length: " + buf.length);
    }
    var chars = [];
    for(var i = 0; i < buf.length; i += 2){
      chars.push((buf[i+1]<<8) + buf[i]);
    }
    return chars;
  }
}

//The UINT32BE algorithms. Big-endian 32-bit unsigned integers.
exports.uint32be = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length * 4);
    var i = 0;
    chars.forEach(function(char){
      buf[i++] = (char >> 24) & mask[8];
      buf[i++] = (char >> 16) & mask[8];
      buf[i++] = (char >> 8) & mask[8];
      buf[i++] = char & mask[8];
    });
    return buf;
  },
  decode : function(buf) {
    if(buf.length % 4 > 0 ){
      throw new RangeError("uint32be.decode: UINT32BE byte length must be even multiple of 4: length: " + buf.length);
    }
    var chars = [];
    for(var i = 0; i < buf.length; i += 4){
      chars.push((buf[i]<<24) + (buf[i+1]<<16) + (buf[i+2]<<8) + buf[i+3]);
    }
    return chars;
  }
}

//The UINT32LE algorithms. Little-endian 32-bit unsigned integers.
exports.uint32le = {
  encode : function(chars) {
    var buf = Buffer.alloc(chars.length * 4);
    var i = 0;
    chars.forEach(function(char){
      buf[i++] = char & mask[8];
      buf[i++] = (char >> 8) & mask[8];
      buf[i++] = (char >> 16) & mask[8];
      buf[i++] = (char >> 24) & mask[8];
    });
    return buf;
  },
  decode : function(buf) {
    /* caller to insure buf is a Buffer of bytes */
    if(buf.length % 4 > 0 ){
      throw new RangeError("uint32le.decode: UINT32LE byte length must be even multiple of 4: length: " + buf.length);
    }
    var chars = [];
    for(var i = 0; i < buf.length; i += 4){
      chars.push((buf[i+3]<<24) + (buf[i+2]<<16) + (buf[i+1]<<8) + buf[i]);
    }
    return chars;
  }
}

// The STRING algorithms. Converts JavaScript strings to Array of 32-bit integers and vice versa. 
// Uses the node.js Buffer's native "utf16le" capabilites.
exports.string = {
  encode: function(chars){
    return _this.utf16le.encode(chars).toString("utf16le");
  },
  decode: function(str){
    return _this.utf16le.decode(Buffer.from(str, "utf16le"), 0);
  }
}

//The ESCAPED algorithms. 
// Note that ESCAPED format contains only ASCII characters.
// The characters are always in the form of a Buffer of bytes.
exports.escaped = {
// Encodes an Array of 32-bit integers into ESCAPED format.
  encode : function(chars) {
    var bytes = [];
    for (var i = 0; i < chars.length; i += 1) {
      var char = chars[i];
      if (char === 96) {
        bytes.push(char);
        bytes.push(char);
      } else if (char === 10) {
        bytes.push(char);
      } else if (char >= 32 && char <= 126) {
        bytes.push(char);
      } else{
        var str = "";
        if (char >= 0 && char <= 31) {
          str += "`x" + ascii[char];
        } else if (char >= 127 && char <= 255) {
          str += "`x" + ascii[char];
        } else if (char >= 0x100 && char <= 0xffff) {
          str += "`u" + ascii[(char >> 8) & mask[8]] + ascii[char & mask[8]];
        } else if (char >= 0x10000 && char <= 0xffffffff) {
          str += "`u{";
          var digit = (char >> 24) & mask[8];
          if (digit > 0) {
            str += ascii[digit];
          }
          str += ascii[(char >> 16) & mask[8]] + ascii[(char >> 8) & mask[8]] + ascii[char & mask[8]] + "}";
        } else {
          throw new Error("escape.encode(char): char > 0xffffffff not allowed");
        }
        var buf = Buffer.from(str);
        buf.forEach(function(b){
          bytes.push(b);
        });
      }
    }
    return Buffer.from(bytes);
  },
  // Decodes ESCAPED format from a Buffer of bytes to an Array of 32-bit integers.
  decode : function(buf) {
    function isHex(hex){
      if((hex >= 48 && hex <= 57) || (hex >= 65 && hex <= 70) || (hex >= 97 && hex <= 102)){
        return true;
      }
      return false;
    }
    function getx(i, len, buf){
      var ret = {char: null, nexti: i + 2, error: true};
      if(i + 1 < len ){
        if(isHex(buf[i]) && isHex(buf[i+1])){
          var str = String.fromCodePoint(buf[i], buf[i+1]);
          ret.char = parseInt(str, 16);
          if(!isNaN(ret.char)){
            ret.error = false;
          }
        }
      }
      return ret;
    }
    function getu(i, len, buf){
      var ret = {char: null, nexti: i + 4, error: true};
      if(i + 3 < len ){
        if(isHex(buf[i]) && isHex(buf[i+1]) && isHex(buf[i+2]) && isHex(buf[i+3])){
          var str = String.fromCodePoint(buf[i], buf[i+1], buf[i+2], buf[i+3]);
          ret.char = parseInt(str, 16);
          if(!isNaN(ret.char)){
            ret.error = false
          }
        }
      }
      return ret;
    }
    function getU(i, len, buf){
      var ret = {char: null, nexti: i + 4, error: true};
      var str = "";
      while(i < len && isHex(buf[i])){
        str += String.fromCodePoint(buf[i]);
        i += 1;
      }
      ret.char = parseInt(str, 16);
      if(buf[i] === 125 && !isNaN(ret.char)){
        ret.error = false
      }
      ret.nexti = i + 1;
      return ret;
    }
    var chars = [];
    var len = buf.length;
    var i1, ret, error;
    var i = 0;
    while(i < len){
      while(true){
        error = true;
        if(buf[i] !== 96){
          /* unescaped character */
          chars.push(buf[i]);
          i += 1;
          error = false;
          break;
        }
        i1 = i + 1;
        if(i1 >= len){
          break;
        }
        if(buf[i1] === 96){
          /* escaped grave accent */
          chars.push(96);
          i += 2;
          error = false;
          break;
        }
        if(buf[i1] === 120){
          ret = getx(i1+1, len, buf);
          if(ret.error){
            break;
          }
          /* escaped hex */
          chars.push(ret.char);
          i = ret.nexti;
          error = false;
          break;
        }
        if(buf[i1] === 117){
          if(buf[i1+1] === 123){
            ret = getU(i1 + 2, len, buf);
            if(ret.error){
              break;
            }
            /* escaped utf-32 */
            chars.push(ret.char);
            i = ret.nexti;
            error = false;
            break;
          }
          ret = getu(i1 + 1, len, buf);
          if(ret.error){
            break;
          }
          /* escaped utf-16 */
          chars.push(ret.char);
          i = ret.nexti;
          error = false;
          break;
        }
        break;
      }
      if(error){
        throw new Error("escaped.decode: ill-formed escape sequence at buf["+i+"]");
      }
    }
    return chars;
  }
}

// The line end conversion algorigthms.
var CR = 13;
var LF = 10;
exports.lineEnds = {
    crlf: function(chars){
      var lfchars = [];
      var i = 0;
      while(i < chars.length){
        switch(chars[i]){
        case CR:
          if((i + 1) < chars.length && chars[i + 1] === LF){
            i += 2;
          }else{
            i += 1
          }
          lfchars.push(CR);
          lfchars.push(LF);
          break;
        case LF:
          lfchars.push(CR);
          lfchars.push(LF);
          i += 1;
          break;
        default:
          lfchars.push(chars[i]);
          i += 1;
          break;
        }
      }
      if(lfchars.length > 0 && lfchars[lfchars.length - 1] !== LF){
        lfchars.push(CR);
        lfchars.push(LF);
      }
      return lfchars;
    },
    lf: function(chars){
      var lfchars = [];
      var i = 0;
      while(i < chars.length){
        switch(chars[i]){
        case CR:
          if((i + 1) < chars.length && chars[i + 1] === LF){
            i += 2;
          }else{
            i += 1
          }
          lfchars.push(LF);
          break;
        case LF:
          lfchars.push(LF);
          i += 1;
          break;
        default:
          lfchars.push(chars[i]);
          i += 1;
          break;
        }
      }
      if(lfchars.length > 0 && lfchars[lfchars.length - 1] !== LF){
        lfchars.push(LF);
      }
      return lfchars;
    }
}

// The base 64 algorithms.
exports.base64 = {
  encode : function(buf) {
    if(buf.length === 0){
      return Buffer.alloc(0);
    }
    var i, j, n;
    var tail = buf.length % 3;
    tail = (tail > 0) ? 3-tail : 0;
    var units = (buf.length + tail)/3;
    var base64 = Buffer.alloc(units * 4);
    if(tail > 0){
      units -= 1;
    }
    i = 0;
    j = 0;
    for(var u = 0; u < units; u += 1){
      n = buf[i++] << 16;
      n += buf[i++] << 8;
      n += buf[i++];
      base64[j++] = base64codes[(n >> 18) & mask[6]];
      base64[j++] = base64codes[(n >> 12) & mask[6]];
      base64[j++] = base64codes[(n >> 6) & mask[6]];
      base64[j++] = base64codes[n & mask[6]];
    }
    if (tail === 0) {
      return base64;
    }
    if (tail === 1) {
      n = buf[i++] << 16;
      n += buf[i] << 8;
      base64[j++] = base64codes[(n >> 18) & mask[6]];
      base64[j++] = base64codes[(n >> 12) & mask[6]];
      base64[j++] = base64codes[(n >> 6) & mask[6]];
      base64[j] = base64codes[64];
      return base64;
    }
    if (tail === 2) {
      n = buf[i] << 16;
      base64[j++] = base64codes[(n >> 18) & mask[6]];
      base64[j++] = base64codes[(n >> 12) & mask[6]];
      base64[j++] = base64codes[64];
      base64[j] = base64codes[64];
      return base64;
    }
  },
  decode: function(codes){
    /* remove white space and ctrl characters, validate & translate characters */
    function validate(buf){
      var chars = [];
      var tail = 0;
      for (var i = 0; i < buf.length; i += 1) {
        var char = buf[i];
        while(true){
          if (char === 32 || char === 9 || char === 10 || char === 13) {
            break;
          }
          if (char >= 65 && char <= 90) {
            chars.push(char - 65);
            break;
          }
          if (char >= 97 && char <= 122) {
            chars.push(char - 71);
            break;
          }
          if (char >= 48 && char <= 57) {
            chars.push(char + 4);
            break;
          }
          if (char === 43) {
            chars.push(62);
            break;
          }
          if (char === 47) {
            chars.push(63);
            break;
          }
          if (char === 61) {
            chars.push(64);
            tail += 1;
            break;
          }
          /* invalid character */
          throw new RangeError("base64.decode: invalid character buf[" + i + "]: " + char);
        }
      }
      /* validate length */
      if (chars.length % 4 > 0) {
        throw new RangeError("base64.decode: string length not integral multiple of 4: " + chars.length);
      }
      /* validate tail */
      switch(tail){
      case 0:
        break;
      case 1:
        if (chars[chars.length - 1] !== 64) {
          throw new RangeError("base64.decode: one tail character found: not last character");
        }
        break;
      case 2:
        if ((chars[chars.length - 1] !== 64) || (chars[chars.length - 2] !== 64)) {
          throw new RangeError("base64.decode: two tail characters found: not last characters");
        }
        break;
      default:
        throw new RangeError("base64.decode: more than two tail characters found: " + tail);
      }
      return {tail: tail, buf: Buffer.from(chars)}
    }
    
    if(codes.length === 0){
      return Buffer.alloc(0);
    }
    var val = validate(codes);
    var tail = val.tail;
    var base64 = val.buf;
    var i, j, n;
    var units = base64.length / 4;
    var buf = Buffer.alloc((units*3) - tail);
    if(tail > 0){
      units -= 1;
    }
    j = 0;
    i = 0;
    for(var u = 0; u < units; u += 1) {
      n = base64[i++] << 18;
      n += base64[i++] << 12;
      n += base64[i++] << 6;
      n += base64[i++];
      buf[j++] = (n >> 16) & mask[8];
      buf[j++] = (n >> 8) & mask[8];
      buf[j++] = n & mask[8];
    }
    if (tail === 1) {
      n = base64[i++] << 18;
      n += base64[i++] << 12;
      n += base64[i] << 6;
      buf[j++] = (n >> 16) & mask[8];
      buf[j] = (n >> 8) & mask[8];
    }
    if (tail === 2) {
      n = base64[i++] << 18;
      n += base64[i++] << 12;
      buf[j] = (n >> 16) & mask[8];
    }
    return buf;
    
  },
  // Converts a base 64 Buffer of bytes to a JavaScript string with line breaks.
  toString: function(buf){
    if(buf.length % 4 > 0){
      throw new RangeError("base64.toString: input buffer length not multiple of 4: " + buf.length);
    }
    var str = "";
    var lineLen = 0;
    function buildLine(c1, c2, c3, c4) {
      switch (lineLen) {
      case 76:
        str += "\r\n" + c1 + c2 + c3 + c4;
        lineLen = 4;
        break;
      case 75:
        str += c1 + "\r\n" + c2 + c3 + c4;
        lineLen = 3;
        break;
      case 74:
        str += c1 + c2 + "\r\n" + c3 + c4;
        lineLen = 2;
        break;
      case 73:
        str += c1 + c2 + c3 + "\r\n" + c4;
        lineLen = 1;
        break;
      default:
        str += c1 + c2 + c3 + c4;
        lineLen += 4;
        break;
      }
    }
    function validate(c){
      if(c >= 65 && c <= 90){
        return true
      }
      if(c >= 97 && c <= 122){
        return true
      }
      if(c >= 48 && c <= 57){
        return true
      }
      if(c === 43){
        return true
      }
      if(c === 47){
        return true
      }
      if(c === 61){
        return true
      }
      return false;
    }
    for(var i = 0; i < buf.length; i += 4){
      for(var j = i; j < i+4; j +=1){
        if(!validate(buf[j])){
          throw new RangeError("base64.toString: buf["+j+"]: "+buf[j]+" : not valid base64 character code");
        }
      }
      buildLine(String.fromCharCode(buf[i]), String.fromCharCode(buf[i+1]), String.fromCharCode(buf[i+2]), String.fromCharCode(buf[i+3]));
      
    }
    return str;
  },
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// This module defines all of the display functions. Text and HTML displays of
// the grammar source, the result object and the `apg-exp` "last match" object.
"use strict;"
var apglib = __webpack_require__(0);
var utils = apglib.utils;
var style = apglib.style;
var MODE_HEX = 16;
var MODE_DEC = 10;
var MODE_ASCII = 8;
var MODE_UNICODE = 32;
/* add style to HTML phrases */
var phraseStyle = function(phrase, phraseStyle) {
  if (phrase === "") {
    return '<span class="' + style.CLASS_EMPTY + '">&#120634;</span>';
  }
  if (phrase === undefined) {
    return '<span class="' + style.CLASS_REMAINDER + '">undefined</span>';
  }
  var classStyle = style.CLASS_REMAINDER;
  if (typeof (phraseStyle) === "string") {
    if (phraseStyle.toLowerCase() === "match") {
      classStyle = style.CLASS_MATCH;
    } else if (phraseStyle.toLowerCase() === "nomatch") {
      classStyle = style.CLASS_NOMATCH;
    }
  }
  var chars = apglib.utils.stringToChars(phrase);
  var html = '<span class="' + classStyle + '">';
  html += apglib.utils.charsToAsciiHtml(chars);
  return html + "</span>";
}
/* result object - string phrases to ASCII text */
var sResultToText = function(result) {
  var txt = "";
  txt += "    result:\n";
  txt += "       [0]: ";
  txt += result[0];
  txt += "\n";
  txt += "     input: " + result.input
  txt += "\n";
  txt += "     index: " + result.index
  txt += "\n";
  txt += "    length: " + result.length
  txt += "\n";
  txt += "tree depth: " + result.treeDepth
  txt += "\n";
  txt += " node hits: " + result.nodeHits
  txt += "\n";
  txt += "     rules: "
  var prefix = "";
  var indent = "          : ";
  var rules = result.rules;
  for ( var name in rules) {
    var rule = rules[name];
    if (rule) {
      for (var i = 0; i < rule.length; i += 1) {
        var ruleobj = rule[i];
        txt += prefix + name + " : " + ruleobj.index + ": ";
        txt += ruleobj.phrase;
        txt += "\n";
        prefix = indent;
      }
    } else {
      txt += prefix + name + ": ";
      txt += "undefined";
      txt += "\n";
    }
    prefix = indent;
  }
  return txt;
}
/* result object - string to HTML text */
var sResultToHtml = function(result) {
  var html = "";
  var caption = "result:";
  html += '<table class="' + style.CLASS_STATE + '">\n';
  html += '<caption>' + caption + '</caption>\n';
  html += '<tr>';
  html += '<th>item</th><th>value</th><th>phrase</th>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>[0]</td>';
  html += '<td>' + result.index + '</td>';
  html += '<td>' + phraseStyle(result[0], "match") + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>input</td>';
  html += '<td>0</td>';
  html += '<td>' + phraseStyle(result.input) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>index</td><td>' + result.index + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>length</td><td>' + result.length + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>tree depth</td><td>' + result.treeDepth + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>node hits</td><td>' + result.nodeHits + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<th>rules</th><th>index</th><th>phrase</th>';
  html += '</tr>\n';

  var rules = result.rules;
  for ( var name in rules) {
    var rule = rules[name];
    if (rule) {
      for (var i = 0; i < rule.length; i += 1) {
        var ruleobj = rule[i];
        html += '<tr>';
        html += "<td>" + name + "</td>";
        html += "<td>" + ruleobj.index + "</td>";
        html += "<td>" + phraseStyle(ruleobj.phrase, "match") + "</td>";
        html += "\n";
      }
    } else {
      html += '<tr>';
      html += "<td>" + name + "</td>";
      html += "<td></td>";
      html += "<td>" + phraseStyle(undefined) + "</td>";
      html += "\n";
    }
  }
  html += '</table>\n';
  return html;
}
/* result object - string to HTML page */
var sResultToHtmlPage = function(result) {
  return utils.htmlToPage(sResultToHtml(result), "apg-exp result");
}
/* apg-exp object - string to ASCII text */
var sLastMatchToText = function(exp) {
  var txt = '';
  txt += "  last match:\n";
  txt += "   lastIndex: ";
  txt += exp.lastIndex;
  txt += "\n";
  txt += '       flags: "';
  txt += exp.flags + '"';
  txt += "\n";
  txt += "      global: ";
  txt += exp.global;
  txt += "\n";
  txt += "      sticky: ";
  txt += exp.sticky;
  txt += "\n";
  txt += "     unicode: ";
  txt += exp.unicode;
  txt += "\n";
  txt += "       debug: ";
  txt += exp.debug;
  txt += "\n";
  if (exp["$&"] === undefined) {
    txt += "   last match: undefined";
    txt += "\n";
    return txt;
  }
  txt += "       input: ";
  txt += exp.input;
  txt += "\n";
  txt += " leftContext: ";
  txt += exp.leftContext;
  txt += "\n";
  txt += "   lastMatch: ";
  txt += exp.lastMatch;
  txt += "\n";
  txt += "rightContext: ";
  txt += exp.rightContext;
  txt += "\n";
  txt += "       rules: ";
  var prefix = "";
  var indent = "            : ";
  for ( var name in exp.rules) {
    txt += prefix + name + " : "
    txt += exp.rules[name];
    txt += "\n";
    prefix = indent;
  }
  txt += "\n";
  txt += "alias:\n";
  txt += ' ["$_"]: ';
  txt += exp['$_'];
  txt += "\n";
  txt += ' ["$`"]: ';
  txt += exp['$`'];
  txt += '\n';
  txt += ' ["$&"]: ';
  txt += exp['$&'];
  txt += '\n';
  txt += ' ["$\'"]: ';
  txt += exp["$'"];
  txt += '\n';
  for ( var name in exp.rules) {
    txt += ' ["${' + name + '}"]: '
    txt += exp['${' + name + '}'];
    txt += "\n";
  }
  return txt;
}
/* apg-exp object - string to HTML text */
var sLastMatchToHtml = function(exp) {
  var html = "";
  var caption = "last match:";
  html += '<table class="' + style.CLASS_STATE + '">\n';
  html += '<caption>' + caption + '</caption>\n';
  html += '<tr>';
  html += '<th>item</th><th>value</th>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>lastIndex</td>';
  html += '<td>' + exp.lastIndex + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>flags</td>';
  html += '<td>&#34;' + exp.flags + '&#34;</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>global</td>';
  html += '<td>' + exp.global + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>sticky</td>';
  html += '<td>' + exp.sticky + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>unicode</td>';
  html += '<td>' + exp.unicode + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>debug</td>';
  html += '<td>' + exp.debug + '</td>';
  html += '</tr>\n';

  if (exp["$&"] === undefined) {
    html += '<tr>';
    html += '<td>lastMatch</td>';
    html += '<td>' + phraseStyle(undefined) + '</td>';
    html += '</tr>\n';
    html += '</table>\n';
    return html;
  }
  html += '<th>item</th><th>phrase</th>';
  html += '</tr>\n';
  html += '<tr>';
  html += '<td>input</td>';
  html += '<td>' + phraseStyle(exp.input) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>leftContext</td>';
  html += '<td>' + phraseStyle(exp.leftContext) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>lastMatch</td>';
  html += '<td>' + phraseStyle(exp.lastMatch, "match") + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>rightContext</td>';
  html += '<td>' + phraseStyle(exp.rightContext) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<th>rule</th><th>phrase</th>';
  html += '</tr>\n';

  for ( var name in exp.rules) {
    html += '<tr>';
    html += '<td>' + name + '</td>';
    html += '<td>' + phraseStyle(exp.rules[name]) + '</td>';
    html += '</tr>\n';
  }

  html += '<tr>';
  html += '<th>alias</th><th>phrase</th>';
  html += '</tr>\n';
  html += '<tr>';
  html += '<td>["$_"]</td>';
  html += '<td>' + phraseStyle(exp['$_']) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>["$`"]</td>';
  html += '<td>' + phraseStyle(exp['$`']) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>["$&"]</td>';
  html += '<td>' + phraseStyle(exp['$&'], "match") + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>["$\'"]</td>';
  html += '<td>' + phraseStyle(exp['$\'']) + '</td>';
  html += '</tr>\n';

  for ( var name in exp.rules) {
    html += '<tr>';
    html += '<td>["${' + name + '}"]</td>';
    html += '<td>' + phraseStyle(exp['${' + name + '}']) + '</td>';
    html += '</tr>\n';
  }
  html += '</table>\n';
  return html;
}
/* apg-exp object - string to HTML page */
var sLastMatchToHtmlPage = function(exp) {
  return utils.htmlToPage(sLastMatchToHtml(exp), "apg-exp last result");
}
/* translates ASCII string to integer mode identifier - defaults to ASCII */
var getMode = function(modearg) {
  var mode = MODE_ASCII;
  if (typeof (modearg) === "string" && modearg.length >= 3) {
    var modein = modearg.toLowerCase().slice(0, 3);
    if (modein === 'hex') {
      mode = MODE_HEX;
    } else if (modein === 'dec') {
      mode = MODE_DEC;
    } else if (modein === 'uni') {
      mode = MODE_UNICODE;
    }
  }
  return mode;
}
/* translate integer mode identifier to standard text string */
var modeToText = function(mode) {
  var txt;
  switch (mode) {
  case MODE_ASCII:
    txt = "ascii";
    break;
  case MODE_HEX:
    txt = "hexidecimal";
    break;
  case MODE_DEC:
    txt = "decimal";
    break;
  case MODE_UNICODE:
    txt = "Unicode";
    break;
  }
  return txt;
}
/* convert integer to hex with leading 0 if necessary */
var charToHex = function(char) {
  var ch = char.toString(16);
  if (ch.length % 2 !== 0) {
    ch = "0" + ch;
  }
  return ch;
}
/* convert integer character code array to formatted text string */
var charsToMode = function(chars, mode) {
  var txt = '';
  if (mode === MODE_ASCII) {
    txt += apglib.utils.charsToString(chars);
  } else if (mode === MODE_DEC) {
    txt += "[";
    if (chars.length > 0) {
      txt += chars[0];
      for (var i = 1; i < chars.length; i += 1) {
        txt += "," + chars[i];
      }
    }
    txt += "]";
  } else if (mode === MODE_HEX) {
    txt += "[";
    if (chars.length > 0) {
      txt += "\\x" + charToHex(chars[0]);
      for (var i = 1; i < chars.length; i += 1) {
        txt += ",\\x" + charToHex(chars[i]);
      }
    }
    txt += "]";
  } else if (mode === MODE_UNICODE) {
    txt += "[";
    if (chars.length > 0) {
      txt += "\\u" + charToHex(chars[0]);
      for (var i = 1; i < chars.length; i += 1) {
        txt += ",\\u" + charToHex(chars[i]);
      }
    }
    txt += "]";
  }
  return txt;
}
/* result object - Unicode mode to ASCII text */
var uResultToText = function(result, mode) {
  mode = getMode(mode);
  var txt = "";
  txt += "    result(" + modeToText(mode) + ")\n";
  txt += "       [0]: ";
  txt += charsToMode(result[0], mode);
  txt += "\n";
  txt += "     input: " + charsToMode(result.input, mode);
  txt += "\n";
  txt += "     index: " + result.index
  txt += "\n";
  txt += "    length: " + result.length
  txt += "\n";
  txt += "tree depth: " + result.treeDepth
  txt += "\n";
  txt += " node hits: " + result.nodeHits
  txt += "\n";
  txt += "     rules: "
  txt += "\n";
  var rules = result.rules;
  for ( var name in rules) {
    var rule = rules[name];
    if (rule) {
      for (var i = 0; i < rule.length; i += 1) {
        var ruleobj = rule[i];
        txt += "          :" + name + " : " + ruleobj.index + ": ";
        txt += charsToMode(ruleobj.phrase, mode);
        txt += "\n";
      }
    } else {
      txt += "          :" + name + ": ";
      txt += "undefined";
      txt += "\n";
    }
  }
  return txt;
}
/* result object - Unicode mode to HTML text */
var uResultToHtml = function(result, mode) {
  mode = getMode(mode);
  var html = "";
  var caption = "result:";
  caption += "(" + modeToText(mode) + ")";
  html += '<table class="' + style.CLASS_STATE + '">\n';
  html += '<caption>' + caption + '</caption>\n';
  html += '<tr>';
  html += '<th>item</th><th>value</th><th>phrase</th>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>[0]</td>';
  html += '<td>' + result.index + '</td>';
  html += '<td>' + phraseStyle(charsToMode(result[0], mode), "match") + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>input</td>';
  html += '<td>0</td>';
  html += '<td>' + phraseStyle(charsToMode(result.input, mode)) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>index</td><td>' + result.index + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>length</td><td>' + result.length + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>tree depth</td><td>' + result.treeDepth + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>node hits</td><td>' + result.nodeHits + '</td>';
  html += '<td></td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<th>rules</th><th>index</th><th>phrase</th>';
  html += '</tr>\n';

  var rules = result.rules;
  for ( var name in rules) {
    var rule = rules[name];
    if (rule) {
      for (var i = 0; i < rule.length; i += 1) {
        var ruleobj = rule[i];
        html += '<tr>';
        html += "<td>" + name + "</td>";
        html += "<td>" + ruleobj.index + "</td>";
        html += "<td>" + phraseStyle(charsToMode(ruleobj.phrase, mode), "match") + "</td>";
        html += "\n";
      }
    } else {
      html += '<tr>';
      html += "<td>" + name + "</td>";
      html += "<td></td>";
      html += "<td>" + phraseStyle(undefined) + "</td>";
      html += "\n";
    }
  }
  html += '</table>\n';
  return html;

}
/* result object - Unicode mode to HTML page */
var uResultToHtmlPage = function(result, mode) {
  return utils.htmlToPage(uResultToHtml(result, mode));
}
/* apg-exp object - Unicode mode to ASCII text */
var uLastMatchToText = function(exp, mode) {
  mode = getMode(mode);
  var txt = '';
  txt += "  last match(" + modeToText(mode) + ")\n";
  txt += "   lastIndex: " + exp.lastIndex;
  txt += "\n";
  txt += '       flags: "' + exp.flags + '"';
  txt += "\n";
  txt += "      global: " + exp.global;
  txt += "\n";
  txt += "      sticky: " + exp.sticky;
  txt += "\n";
  txt += "     unicode: " + exp.unicode;
  txt += "\n";
  txt += "       debug: " + exp.debug;
  txt += "\n";
  if (exp["$&"] === undefined) {
    txt += "   lastMatch: undefined";
    txt += "\n";
    return txt;
  }
  txt += "       input: ";
  txt += charsToMode(exp.input, mode);
  txt += "\n";
  txt += " leftContext: ";
  txt += charsToMode(exp.leftContext, mode);
  txt += "\n";
  txt += "   lastMatch: ";
  txt += charsToMode(exp.lastMatch, mode);
  txt += "\n";
  txt += "rightContext: ";
  txt += charsToMode(exp.rightContext, mode);
  txt += "\n";

  txt += "       rules:";
  var prefix = "";
  var indent = "            :";
  for ( var name in exp.rules) {
    txt += prefix + name + " : "
    txt += (exp.rules[name]) ? charsToMode(exp.rules[name], mode) : "undefined";
    txt += "\n";
    prefix = indent;
  }
  txt += "\n";
  txt += "  alias:\n";
  txt += '   ["$_"]: ';
  txt += charsToMode(exp['$_'], mode);
  txt += "\n";
  txt += '   ["$`"]: ';
  txt += charsToMode(exp['$`'], mode);
  txt += "\n";
  txt += '   ["$&"]: ';
  txt += charsToMode(exp['$&'], mode);
  txt += "\n";
  txt += '   ["$\'"]: ';
  txt += charsToMode(exp["$'"], mode);
  txt += "\n";
  for ( var name in exp.rules) {
    txt += '   ["${' + name + '}"]: '
    txt += (exp['${' + name + '}']) ? charsToMode(exp['${' + name + '}'], mode) : "undefined";
    txt += "\n";
  }
  return txt;
}
/* apg-exp object - Unicode mode to HTML text */
var uLastMatchToHtml = function(exp, mode) {
  mode = getMode(mode);
  var html = "";
  var caption = "last match:";
  caption += "(" + modeToText(mode) + ")";
  html += '<table class="' + style.CLASS_STATE + '">\n';
  html += '<caption>' + caption + '</caption>\n';
  html += '<tr>';
  html += '<th>item</th><th>value</th>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>lastIndex</td>';
  html += '<td>' + exp.lastIndex + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>flags</td>';
  html += '<td>&#34;' + exp.flags + '&#34;</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>global</td>';
  html += '<td>' + exp.global + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>sticky</td>';
  html += '<td>' + exp.sticky + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>unicode</td>';
  html += '<td>' + exp.unicode + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>debug</td>';
  html += '<td>' + exp.debug + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<th>item</th><th>phrase</th>';
  html += '</tr>\n';
  if (exp["$&"] === undefined) {
    html += '<tr>';
    html += '<td>lastMatch</td>';
    html += '<td>' + phraseStyle(undefined) + '</td>';
    html += '</tr>\n';
    html += '</table>\n';
    return html;
  }
  html += '<tr>';
  html += '<td>input</td>';
  html += '<td>' + phraseStyle(charsToMode(exp.input, mode)) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>leftContext</td>';
  html += '<td>' + phraseStyle(charsToMode(exp.leftContext, mode)) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>lastMatch</td>';
  html += '<td>' + phraseStyle(charsToMode(exp.lastMatch, mode), "match") + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>rightContext</td>';
  html += '<td>' + phraseStyle(charsToMode(exp.rightContext, mode)) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<th>rules</th><th>phrase</th>';
  html += '</tr>\n';

  for ( var name in exp.rules) {
    html += '<tr>';
    html += '<td>' + name + '</td>';
    if (exp.rules[name]) {
      html += '<td>' + phraseStyle(charsToMode(exp.rules[name], mode)) + '</td>';
    } else {
      html += '<td>' + phraseStyle(undefined) + '</td>';
    }
    html += '</tr>\n';
  }

  html += '<tr>';
  html += '<th>alias</th><th>phrase</th>';
  html += '</tr>\n';
  html += '<tr>';
  html += '<td>["$_"]</td>';
  html += '<td>' + phraseStyle(charsToMode(exp['$_'], mode)) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>["$`"]</td>';
  html += '<td>' + phraseStyle(charsToMode(exp['$`'], mode)) + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>["$&"]</td>';
  html += '<td>' + phraseStyle(charsToMode(exp['$&'], mode), "match") + '</td>';
  html += '</tr>\n';

  html += '<tr>';
  html += '<td>["$\'"]</td>';
  html += '<td>' + phraseStyle(charsToMode(exp['$\''], mode)) + '</td>';
  html += '</tr>\n';

  for ( var name in exp.rules) {
    html += '<tr>';
    html += '<td>["${' + name + '}"]</td>';
    if (exp['${' + name + '}']) {
      html += '<td>' + phraseStyle(charsToMode(exp['${' + name + '}'], mode)) + '</td>';
    } else {
      html += '<td>' + phraseStyle(undefined) + '</td>';
    }
    html += '</tr>\n';
  }
  html += '</table>\n';
  return html;
}
/* apg-exp object - Unicode mode to HTML page */
var uLastMatchToHtmlPage = function(exp, mode) {
  return utils.htmlToPage(uLastMatchToHtml(exp, mode));
}
/* SABNF grammar souce to ASCII text */
var sourceToText = function(exp) {
  return exp.source;
}
/* SABNF grammar souce to HTML */
var sourceToHtml = function(exp) {
  var rx = /.*(\r\n|\n|\r)/g;
  var result, chars, html;
  html = "<pre>\n";
  while (true) {
    result = rx.exec(exp.source);
    if (result === null || result[0] === "") {
      break;
    }
    chars = apglib.utils.stringToChars(result[0]);
    html += apglib.utils.charsToAsciiHtml(chars);
    html += "\n";
  }
  html += "</pre>\n";
  return html;
}
/* SABNF grammar souce to HTML page */
var sourceToHtmlPage = function(exp) {
  return apglib.utils.htmlToPage(sourceToHtml(exp), "apg-exp source");
}
/* export modules needed by the apg-exp and result objects to display their values */
module.exports = {
  s : {
    resultToText : sResultToText,
    resultToHtml : sResultToHtml,
    resultToHtmlPage : sResultToHtmlPage,
    expToText : sLastMatchToText,
    expToHtml : sLastMatchToHtml,
    expToHtmlPage : sLastMatchToHtmlPage,
    sourceToText : sourceToText,
    sourceToHtml : sourceToHtml,
    sourceToHtmlPage : sourceToHtmlPage
  },
  u : {
    resultToText : uResultToText,
    resultToHtml : uResultToHtml,
    resultToHtmlPage : uResultToHtmlPage,
    expToText : uLastMatchToText,
    expToHtml : uLastMatchToHtml,
    expToHtmlPage : uLastMatchToHtmlPage
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// This module acts as a "circular buffer". It is used to keep track
// only the last N records in an array of records. If more than N records
// are saved, each additional record overwrites the previously oldest record.
// This module deals only with the record indexes and does not save
// any actual records. It is used by [`trace.js`](./trace.html) for limiting the number of 
// trace records saved.
module.exports = function() {
  "use strict;"
  var thisFileName = "circular-buffer.js: ";
  var itemIndex = -1;
  var maxListSize = 0;
  // Initialize buffer.<br>
  // *size* is `maxListSize`, the maximum number of records saved before overwriting begins.
  this.init = function(size) {
    if (typeof (size) !== "number" || size <= 0) {
      throw new Error(thisFileName + "init: circular buffer size must an integer > 0")
    }
    maxListSize = Math.ceil(size);
    itemIndex = -1;
  };
  // Call this to increment the number of records collected.<br>
  // Returns the array index number to store the next record in.
  this.increment = function() {
    itemIndex += 1;
    return (itemIndex + maxListSize) % maxListSize;
  };
  // Returns `maxListSize` - the maximum number of records to keep in the buffer.
  this.maxSize = function() {
    return maxListSize;
  }
  // Returns the highest number of items saved.<br>
  // (The number of items is the actual number of records processed
  // even though only `maxListSize` records are actually retained.)
  this.items = function() {
    return itemIndex + 1;
  }
  // Returns the record number associated with this item index.
  this.getListIndex = function(item) {
    if (itemIndex === -1) {
      return -1;
    }
    if (item < 0 || item > itemIndex) {
      return -1;
    }
    if (itemIndex - item >= maxListSize) {
      return -1;
    }
    return (item + maxListSize) % maxListSize;
  }
  // The iterator over the circular buffer.
  // The user's function, `fn`, will be called with arguments `fn(listIndex, itemIndex)`
  // where `listIndex` is the saved record index and `itemIndex` is the actual item index.
  this.forEach = function(fn) {
    if (itemIndex === -1) {
      /* no records have been collected */
      return;
    }
    if (itemIndex < maxListSize) {
      /* fewer than maxListSize records have been collected - number of items = number of records */
      for (var i = 0; i <= itemIndex; i += 1) {
        fn(i, i);
      }
      return;
    }
    /* start with the oldest record saved and finish with the most recent record saved */
    for (var i = itemIndex - maxListSize + 1; i <= itemIndex; i += 1) {
      var listIndex = (i + maxListSize) % maxListSize;
      fn(listIndex, i);
    }
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// This module has been developed programmatically in the `apg-lib` build process.
// It is used by the `apg.html` application to build web pages on the fly.

module.exports = function(){
return '/* This file automatically generated by toless() and LESS. */\n.apg-mono {\n  font-family: monospace;\n}\n.apg-active {\n  font-weight: bold;\n  color: #000000;\n}\n.apg-match {\n  font-weight: bold;\n  color: #264BFF;\n}\n.apg-empty {\n  font-weight: bold;\n  color: #0fbd0f;\n}\n.apg-nomatch {\n  font-weight: bold;\n  color: #FF4000;\n}\n.apg-lh-match {\n  font-weight: bold;\n  color: #1A97BA;\n}\n.apg-lb-match {\n  font-weight: bold;\n  color: #5F1687;\n}\n.apg-remainder {\n  font-weight: bold;\n  color: #999999;\n}\n.apg-ctrl-char {\n  font-weight: bolder;\n  font-style: italic;\n  font-size: .6em;\n}\n.apg-line-end {\n  font-weight: bold;\n  color: #000000;\n}\n.apg-error {\n  font-weight: bold;\n  color: #FF4000;\n}\n.apg-phrase {\n  color: #000000;\n  background-color: #8caae6;\n}\n.apg-empty-phrase {\n  color: #0fbd0f;\n}\ntable.apg-state {\n  font-family: monospace;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 130%;\n  text-align: left;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-state th,\ntable.apg-state td {\n  text-align: left;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-state th:nth-last-child(2),\ntable.apg-state td:nth-last-child(2) {\n  text-align: right;\n}\ntable.apg-state caption {\n  font-size: 125%;\n  line-height: 130%;\n  font-weight: bold;\n  text-align: left;\n}\ntable.apg-stats {\n  font-family: monospace;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 130%;\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-stats th,\ntable.apg-stats td {\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-stats caption {\n  font-size: 125%;\n  line-height: 130%;\n  font-weight: bold;\n  text-align: left;\n}\ntable.apg-trace {\n  font-family: monospace;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 130%;\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-trace caption {\n  font-size: 125%;\n  line-height: 130%;\n  font-weight: bold;\n  text-align: left;\n}\ntable.apg-trace th,\ntable.apg-trace td {\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-trace th:last-child,\ntable.apg-trace th:nth-last-child(2),\ntable.apg-trace td:last-child,\ntable.apg-trace td:nth-last-child(2) {\n  text-align: left;\n}\ntable.apg-grammar {\n  font-family: monospace;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 130%;\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-grammar caption {\n  font-size: 125%;\n  line-height: 130%;\n  font-weight: bold;\n  text-align: left;\n}\ntable.apg-grammar th,\ntable.apg-grammar td {\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-grammar th:last-child,\ntable.apg-grammar td:last-child {\n  text-align: left;\n}\ntable.apg-rules {\n  font-family: monospace;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 130%;\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-rules caption {\n  font-size: 125%;\n  line-height: 130%;\n  font-weight: bold;\n  text-align: left;\n}\ntable.apg-rules th,\ntable.apg-rules td {\n  text-align: right;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-rules a {\n  color: #003399 !important;\n}\ntable.apg-rules a:hover {\n  color: #8caae6 !important;\n}\ntable.apg-attrs {\n  font-family: monospace;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 130%;\n  text-align: center;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-attrs caption {\n  font-size: 125%;\n  line-height: 130%;\n  font-weight: bold;\n  text-align: left;\n}\ntable.apg-attrs th,\ntable.apg-attrs td {\n  text-align: center;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\ntable.apg-attrs th:nth-child(1),\ntable.apg-attrs th:nth-child(2),\ntable.apg-attrs th:nth-child(3) {\n  text-align: right;\n}\ntable.apg-attrs td:nth-child(1),\ntable.apg-attrs td:nth-child(2),\ntable.apg-attrs td:nth-child(3) {\n  text-align: right;\n}\ntable.apg-attrs a {\n  color: #003399 !important;\n}\ntable.apg-attrs a:hover {\n  color: #8caae6 !important;\n}\n';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// This is the `apg-exp` object constructor.
// `apg-exp` functions similarly to the built-in JavaScript `RegExp` pattern matching engine.
// However, patterns are described with an [SABNF]()
// syntax and matching is done with an
// [`apg`](https://github.com/ldthomas/apg-js2) parser.
// See the [README](./README.html) file for a more detailed description.
//
// The input parameters are:
//<pre><code>
// input - required, type "string" or "object"
//         if it is a string, it must be a
//           valid SABNF grammar (see note(&#42;) below) 
//         if it is an object, it must be a
//           valid APG-generated grammar object.
// flags - optional, string of flag characters,
//         g - global search, advances lastIndex to end of
//             matched phrase. Repeated calls to exec()
//             will find all matches in the input string.
//         y - sticky, similar to g but lastIndex acts
//             as an anchor - a match must be found beginning
//             at lastIndex. Repeated calls to exec() will
//             find all *consecutive* matches in the string. 
//         u - unicode, does not change the behavior of the
//             pattern matching, only the form of the results.
//             With the u flag set all resulting matched phrases
//             are returned as arrays of integer character codes
//             rather than JavaScript strings.
//         d - debug, when set the **APG** trace object is
//             available to the user to trace steps the parser
//             took. Handy for debugging syntax and phrases that
//             aren't behaving as expected.
//         defaults are all false
// nodeHits -  optional, the maximum number of node hits the parser
//             is allowed (default Infinity)
// treeDepth - optional, the maximum parse tree depth allowed
//             (default Infinity)
//             (see note (**) below)
//</code></pre>
// To skip over default values, enter `null` or `undefined`. e.g.
//<pre>
//<code>
// var abnfexp = require("abnf-exp");
// var exp = new abnfexp('rule = "abc"\n', null, null, 100);
//</code>
//</pre>
// This will set the maximum tree depth to 100 and leave `flags` and `nodeHits` at their default.
//
// **Note(\*):**
// For longer, more complex grammars, it is recommended to use [APG](https://github.com/ldthomas/apg-js2)
// to generate the grammar object
// in advance.
// In addition to saving the compile time each time you run the application,
// its error reporting is much more complete and getting the grammar right is much easier.
//
// **Note(\*\*):** 
// Some pathological grammars can push a recursive-decent parser to exponential behavior
// with an exceptionally large number of parse tree node operations (node hits) and/or
// an exceptionally large parse tree depth. For most grammars this is not a problem.
// But if you want to protect against this kind of behavior you can set limits on either or both of these.
// The parser will throw an exception with a message telling you that the maximum number was exceeded.
// You would probably get an exception anyway (or a hung application), but with these exceptions it should
// be a little easier to figure out what went wrong.
module.exports = function(input, flags, nodeHits, treeDepth) {
  "use strict;"
  var _this = this;
  var thisFileName = "apg-exp: ";
  var errorName = thisFileName;
  var apglib = __webpack_require__(0);
  var execFuncs = __webpack_require__(28);
  var replaceFuncs = __webpack_require__(32);
  var resultFuncs = __webpack_require__(7);
  var splitFuncs = __webpack_require__(34);
  var setFlags = __webpack_require__(29);
  var sabnfGenerator = __webpack_require__(33);
  var readonly = {
    writable : false,
    enumerable : false,
    configurable : true
  };
  /* private object data that needs to be passed around to supporting modules */
  var priv = {
    _this : this,
    grammarObject : null,
    ruleNames : [],
    str : null,
    chars : null,
    parser : null,
    result : null,
    charsToString : null,
    match : function(state) {
      return (state === apglib.ids.MATCH || state === apglib.ids.EMPTY);
    }
  }
  // This is a custom exception object.
  // Derived from Error, it is named `ApgExpError` and in addition to the error `message`
  // it has two functions, `toText()` and `toHtml()` which will display the errors
  // in a user-friendly ASCII text format or HTML format like the formats used by APG.
  // e. g.
  //```
  // try{
  //   ...
  // }catch(e){
  //   if(e.name === "ApgExpError"){
  //     console.log(e.toText());
  //   }else{
  //     console.log(e.message);
  //   }
  //```
  // All errors from the constructor and all object functions are reported by throwing an `ApgExpError` Error object.
  var ApgExpError = function(msg, t, h){
    this.message = msg;
    this.name = "ApgExpError";
    var text = t;
    var html = h;
    this.toText = function(){
      var ret = "";
      ret += this.message;
      ret += "\n";
      if(text){
        ret += text;
      }
      return ret;
    }
    this.toHtml = function(){
      var ret = "";
      ret += "<h3>" + apglib.utils.stringToAsciiHtml(this.message) + "</h3>";
      ret += "\n";
      if(html){
        ret += html;
      }
      return ret;
    }
  }
  ApgExpError.prototype = new Error();
  
  /* verifies that all UDT callback functions have been defined */
  var checkParserUdts = function(errorName) {
    var udterrors = []
    var error = null;
    for (var i = 0; i < priv.grammarObject.udts.length; i += 1) {
      var lower = priv.grammarObject.udts[i].lower;
      if (typeof (priv.parser.callbacks[lower]) !== "function") {
        udterrors.push(priv.ruleNames[lower]);
      }
    }
    if (udterrors.length > 0) {
      error = "undefined UDT callback functions: " + udterrors;
    }
    return error;
  }
  
  /* the constructor */
  errorName = thisFileName + "constructor: ";
  var error = null;
  var result = null;
  try {
    while (true) {
      /* flags */
      error = setFlags(this, flags);
      if (error) {
        error = new ApgExpError(error);
        break;
      }
      /* grammar object for the defining SABNF grammar */
      if (typeof (input) === "string") {
        this.source = input;
        result = sabnfGenerator(input);
        if (result.error) {
          error = new ApgExpError(result.error, result.text, result.html);
          break;
        }
        priv.grammarObject = result.obj;
      } else if (typeof (input) === "object" && typeof (input.grammarObject) === "string"
          && input.grammarObject === "grammarObject") {
        priv.grammarObject = input;
        this.source = priv.grammarObject.toString();
      } else {
        error = new ApgExpError(thisFileName + "invalid SABNF grammar input");
        this.source = "";
        break;
      }
      Object.defineProperty(this, "source", readonly);
      /* the parser & AST */
      priv.charsToString = apglib.utils.charsToString;
      priv.parser = new apglib.parser();
      this.ast = new apglib.ast();
      this.trace = this.debug ? (new apglib.trace()) : null;
      for (var i = 0; i < priv.grammarObject.rules.length; i += 1) {
        var rule = priv.grammarObject.rules[i];
        priv.ruleNames[rule.lower] = rule.name
        priv.parser.callbacks[rule.lower] = false;
        this.ast.callbacks[rule.lower] = true;
      }
      for (var i = 0; i < priv.grammarObject.udts.length; i += 1) {
        var rule = priv.grammarObject.udts[i];
        priv.ruleNames[rule.lower] = rule.name
        priv.parser.callbacks[rule.lower] = false;
        this.ast.callbacks[rule.lower] = true;
      }
      /* nodeHit and treeDepth limits */
      if (typeof (nodeHits) === "number") {
        this.nodeHits = Math.floor(nodeHits);
        if (this.nodeHits > 0) {
          priv.parser.setMaxNodeHits(this.nodeHits);
        } else {
          error = new ApgExpError(thisFileName + "nodeHits must be integer > 0: " + nodeHits);
          this.nodeHits = Infinity;
          break;
        }
      } else {
        this.nodeHits = Infinity;
      }
      if (typeof (treeDepth) === "number") {
        this.treeDepth = Math.floor(treeDepth);
        if (this.treeDepth > 0) {
          priv.parser.setMaxTreeDepth(this.treeDepth);
        } else {
          error = new ApgExpError(thisFileName + "treeDepth must be integer > 0: " + treeDepth);
          this.treeDepth = Infinity;
          break;
        }
      } else {
        this.treeDepth = Infinity;
      }
      Object.defineProperty(this, "nodeHits", readonly);
      Object.defineProperty(this, "treeDepth", readonly);
      /* success */
      this.lastIndex = 0;
      break;
    }
  } catch (e) {
    error = new ApgExpError(e.name + ": " + e.message);
  }
  if (error) {
    throw error;
  }
  // <pre><code>
  // str - the input string to find the patterns in
  // may be a JavaScript string or an array of
  // character codes
  // </code></pre>

  // Find the SABNF-defined pattern in the input string.
  // Can be called multiple times with the `g` or `y` flags.
  // If both `g` and `y` are specified, `g` is ignored.
  // Be aware that SABNF grammars, like regular expressions,
  // can define empty string (`""`) patterns.
  // This oft-given global example can lead to an infinite loop:
  // <pre>
  // <code>
  // var exp = /a*/g;
  // while((result = exp.exec("aaba")) !== null){
  // /* do something */
  // }
  // </code>
  // </pre>
  // A better solution would be
  // <pre>
  // <code>
  // var grammar = "rule = *a\n";
  // var exp = new `apg-exp`(grammar, "g");
  // while(true){
  // result = exp.exec("aaba");
  // if(result === null){break;}
  // /* do something */
  // /* bump-along mode */
  // if(result[0].length === 0){lastIndex += 1;}
  // }
  // </code>
  // </pre>
  /* public API */
  this.exec = function(str) {
    var result = null;
    var error;
    errorName = thisFileName = "exec(): ";
    if (typeof (str) === "string") {
      priv.str = str;
      priv.chars = apglib.utils.stringToChars(str);
    } else if (Array.isArray(str)) {
      priv.str = null;
      priv.chars = str;
    } else {
      return result;
    }
    priv.parser.ast = this.ast;
    priv.parser.trace = this.trace;
    error = checkParserUdts(errorName);
    if(error){
      throw new ApgExpError(errorName + error);
    }
    if (this.sticky) {
      result = execFuncs.execAnchor(priv);
    } else {
      result = execFuncs.execForward(priv);
    }
    return result;
  }
  // Test for a match of the SABNF-defined pattern in the input string.
  // Can be called multiple times with the `g` or `y` flags.
  // However, see caution above for `exec()`.
  this.test = function(str) {
    var result = null;
    var error;
    errorName = thisFileName + "test(): ";
    if (typeof (str) === "string") {
      priv.str = str;
      priv.chars = apglib.utils.stringToChars(str);
    } else if (Array.isArray(str)) {
      priv.str = null;
      priv.chars = str;
    } else {
      return result;
    }
    priv.parser.ast = null;
    priv.parser.trace = null;
    this.ast = null;
    this.trace = null;
    error = checkParserUdts(errorName);
    if(error){
      throw new ApgExpError(errorName + error);
    }
    if (this.sticky) {
      result = execFuncs.testAnchor(priv);
    } else {
      result = execFuncs.testForward(priv);
    }
    return result;
  }
  // <pre>
  // <code>
  // str - the string to find patterns to be replaced in
  // replacement - a string or function defining replacement
  // phrases for the matched phrases.
  // returns str with the matched phrases replaced
  // </code>
  // </pre>
  // This is roughly equivalent to the JavaScript string replacement function, `str.replace(regex, replacement)`.
  // (It follows closely the
  // [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) description.)
  // If the global flag `g` is set, all matched phrases will be replaced,
  // otherwise, only the first.
  // If the sticky flag `y` is set, all matched 'consecutive' phrases will be replaced,
  // otherwise, only the first.
  // If the unicode flag `u` is set, an exception will be thrown. `replace()` only works on strings, not character code arrays.
  // The `replacement` string may contain the patterns patterns.
  // <pre>
  // <code>
  // $$ - insert the character $
  // the escape sequence for the $ character
  // $&#96; - insert the prefix to the matched pattern
  // $&#38; - insert the matched pattern
  // $' - insert the suffix of the matched pattern
  // ${name} - insert the last match to the rule "name"
  // </code>
  // </pre>
  // `replacement` may also be a user-written function of the form
  // <pre>
  // <code>
  // var replacement = function(result, exp){}
  // result - the result object from the pattern match
  // exp - the apg-exp object
  // </code>
  // </pre>
  // There is quite a bit of redundancy here with both the `result` object and the `apg-exp` object being passed to the
  // replacement function. However, this provides the user with a great deal of flexibility in what might be the
  // most convenient way to create the replacement. Also, the `apg-exp` object has the AST which is a powerful
  // translation tool for really tough replacement jobs. See the [ast.js]() example.

  this.replace = function(str, replacement) {
    errorName = thisFileName + "replace(): ";
    if (this.unicode) {
      throw new ApgExpError(errorName + "cannot do string replacement in 'unicode' mode. Insure that 'u' flag is absent.");
    }
    if (typeof (str) !== "string") {
      throw new ApgExpError(errorName + "input type error: str not a string");
    }
    if (typeof (replacement) === "string") {
      return replaceFuncs.replaceString(priv, str, replacement);
    }
    if (typeof (replacement) === "function") {
      return replaceFuncs.replaceFunction(priv, str, replacement);
    }
    throw new ApgExpError(errorName + "input type error: replacement not a string or function");
  }
  // <pre>
  // <code>
  // str - the string to split
  // limit - optional limit on the number of splits
  // </code>
  // </pre>
  // Mimics the JavaScript `String.split(regexp)` function. That is,
  // `split(str[, limit])` is roughly equivalent to `str.split(regexp[, limit])`
  // Returns an array of strings.
  // If `str` is undefined or empty the returned array
  // contains a single, empty string.
  // Otherwise, `exp.exec(str)` is called in global mode. If a one or more matched phrases are found, they are removed from the
  // string
  // and the substrings are returned in an array.
  // If no matched phrases are found, the array contains one element consisting of the entire string, `["str"]`.
  // Empty string matches will split the string and advance `lastIndex` by one character (bump-along mode).
  // That means, for example, the grammar `rule=""\n` would match the empty string at every character
  // and an array of all characters would be returned. It would be similar to calling the JavaScript function `str.split("")`.
  // Unlike the JavaScript function, capturing parentheses (rules) are not spliced into the output string.
  // An exception is thrown if the unicode flag is set. `split()` works only on strings, not integer arrays of character codes.
  // If the `limit` argument is used, it must be a positive number and no more than `limit` matches will be returned.
  this.split = function(str, limit) {
    errorName = thisFileName + "split(): ";
    if (this.unicode) {
      throw new ApgExpError(errorName + "cannot do string split in 'unicode' mode. Insure that 'u' flag is absent.");
    }
    if (str === undefined || str === null || str === "") {
      return [ "" ];
    }
    if (typeof (str) !== "string") {
      throw new ApgExpError(errorName + "argument must be a string: typeof(arg): " + typeof (str));
    }
    if (typeof (limit) !== "number") {
      limit = Infinity;
    } else {
      limit = Math.floor(limit);
      if (limit <= 0) {
        throw new ApgExpError(errorName + "limit must be >= 0: limit: " + limit);
      }
    }
    return splitFuncs.split(priv, str, limit);
  }
  // Select specific rule/UDT names to include in the result object.
  // `list` is an array of rule/UDT names to include.
  // All other names, not in the array, are excluded.
  // Excluding a rule/UDT name does not affect the operation of any functions,
  // it simply excludes its phrases from the results.
  this.include = function(list) {
    errorName = thisFileName + "include(): ";
    if (list === undefined || list == null || (typeof (list) === "string" && list.toLowerCase() === "all")) {
      /* set all to true */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = true;
      }
      return;
    }
    if (Array.isArray(list)) {
      /* set all to false */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = false;
      }
      /* then set those in the list to true */
      for (var i = 0; i < list.length; i += 1) {
        var l = list[i];
        if (typeof (l) !== "string") {
          throw new ApgExpError(errorName + "invalid name type in list");
        }
        l = l.toLowerCase();
        if (_this.ast.callbacks[l] === undefined) {
          throw new ApgExpError(errorName + "unrecognized name in list: " + list[i]);
        }
        _this.ast.callbacks[l] = true;
      }
      return;
    }
    throw new ApgExpError(errorName + "unrecognized list type");
  }
  // Select specific rule/UDT names to exclude in the result object.
  // `list` is an array of rule/UDT names to exclude.
  // All other names, not in the array, are included.
  // Excluding a rule/UDT name does not affect the operation of any functions,
  // it simply excludes its phrases from the results.
  this.exclude = function(list) {
    errorName = thisFileName + "exclude(): ";
    if (list === undefined || list == null || (typeof (list) === "string" && list.toLowerCase() === "all")) {
      /* set all to false */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = false;
      }
      return;
    }
    if (Array.isArray(list)) {
      /* set all to true */
      for ( var name in priv.grammarObject.callbacks) {
        _this.ast.callbacks[name] = true;
      }
      /* then set all in list to false */
      for (var i = 0; i < list.length; i += 1) {
        var l = list[i];
        if (typeof (l) !== "string") {
          throw new ApgExpError(errorName + "invalid name type in list");
        }
        l = l.toLowerCase();
        if (_this.ast.callbacks[l] === undefined) {
          throw new ApgExpError(errorName + "unrecognized name in list: " + list[i]);
        }
        _this.ast.callbacks[l] = false;
      }
      return;
    }
    throw new ApgExpError(errorName + "unrecognized list type");
  }
  // Defines a UDT callback function. *All* UDTs appearing in the SABNF phrase syntax must be defined here.
  // <pre><code>
  // name - the (case-insensitive) name of the UDT
  // func - the UDT callback function
  // </code></pre>
  // See the <a href="#">udt example</a> for the callback function details.
  this.defineUdt = function(name, func) {
    errorName = thisFileName + "defineUdt(): ";
    if (typeof (name) !== "string") {
      throw new ApgExpError(errorName + "'name' must be a string");
    }
    if (typeof (func) !== "function") {
      throw new ApgExpError(errorName + "'func' must be a function reference");
    }
    var lowerName = name.toLowerCase();
    for (var i = 0; i < priv.grammarObject.udts.length; i += 1) {
      if (priv.grammarObject.udts[i].lower === lowerName) {
        priv.parser.callbacks[lowerName] = func;
        return;
      }
    }
    throw new ApgExpError(errorName + "'name' not a UDT name: " + name);
  }
  // Estimates the upper bound of the call stack depth for this JavaScript
  // engine. Taken from [here](http://www.2ality.com/2014/04/call-stack-size.html)
  this.maxCallStackDepth = function() {
    try {
      return 1 + this.maxCallStackDepth();
    } catch (e) {
      return 1;
    }
  }
  // Returns the "last match" information in the `apg-exp` object in ASCII text.
  // Patterned after and similar to the JavaScript
  // [`RegExp` properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
  this.toText = function(mode) {
    if (this.unicode) {
      return resultFuncs.u.expToText(this, mode);
    }
    return resultFuncs.s.expToText(this);
  }
  // Returns the "last match" information in the `apg-exp` object formatted as an HTML table.
  this.toHtml = function(mode) {
    if (this.unicode) {
      return resultFuncs.u.expToHtml(this, mode);
    }
    return resultFuncs.s.expToHtml(this);
  }
  // Same as `toHtml()` except the output is a complete HTML page.
  this.toHtmlPage = function(mode) {
    if (this.unicode) {
      return resultFuncs.u.expToHtmlPage(this, mode);
    }
    return resultFuncs.s.expToHtmlPage(this);
  }
  // Returns the SABNF syntax or grammar defining the pattern in ASCII text format.
  this.sourceToText = function() {
    return resultFuncs.s.sourceToText(this);
  }
  // Returns the SABNF syntax or grammar defining the pattern in HTML format.
  this.sourceToHtml = function() {
    return resultFuncs.s.sourceToHtml(this);
  }
  // Returns the SABNF syntax or grammar defining the pattern as a complete HTML page.
  this.sourceToHtmlPage = function() {
    return resultFuncs.s.sourceToHtmlPage(this);
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// This module is the **APG** API.
//
// *Note on teminology.*
// APG is a parser generator.
// However, it really only generates a "grammar object" (see below) from the defining SABNF grammar.
// The generated parser is incomplete at this stage.
// Remaining, it is the job of the user to develop the generated parser from the grammar object and the **APG** Library (**apg-lib**).
// 
// The following terminology my help clear up any confusion between the idea of a "generated parser" versus a "generated grammar object".

// - The generating parser: **APG** is an **APG** parser (yes, there is a circular dependence between **apg-api** and **apg-lib**). We'll call it the generating parser.
// - The target parser: **APG**'s goal is to generate a parser. We'll call it the target parser.
// - The target grammar: this is the (ASCII) SABNF grammar defining the target parser.
// - The target grammar object: **APG** parses the SABNF grammar and generates the JavaScript source for a target grammar object constructor function
// and/or an actual grammar object.
// - The final target parser: The user then develops the final target parser using the generated target grammar
// object and the **APG** parsing library, **apg-lib**.
// Throws execeptions on fatal errors.
//
// src: the input SABNF grammar<br>
// may be one of:
// - Buffer of bytes
// - JavaScript string
// - Array of integer character codes
module.exports = function(src) {
  /* PRIVATE PROPERTIES */
  var thisFileName = "api.js: ";
  var _this = this;
  var apglib = __webpack_require__(0);
  var scanner = __webpack_require__(24);
  var parser = new (__webpack_require__(20))();
  var attrsObj = new (__webpack_require__(19))();
  var converter = __webpack_require__(5).converter;
  var lineMap;

  /* PUBLIC PROPERTIES */
  // The input SABNF grammar as a JavaScript string.
  this.sabnf;
  // The input SABNF grammar as an array of character codes.
  this.chars;
  // An array of line objects, defining each line of the input SABNF grammar
  // - lineNo : the zero-based line number
  // - beginChar : offset (into `this.chars`) of the first character in the line
  // - length : the number of characters in the line
  // - textLength : the number of characters of text in the line, excluding the line ending characters
  // - endType : "CRLF", "LF", "CR" or "none" if the last line has no line ending characters
  // - invalidChars : `true` if the line contains invalid characters, `false` otherwise
  this.lines;
  // An array of rule names and data.
  // - name : the rule name
  // - lower : the rule name in lower case
  // - index : the index of the rule (ordered by appearance in SABNF grammar)
  // - isBkr : `true` if this rule has been back referenced, `false` otherwise
  // - opcodes : array of opcodes for this rule
  // - attrs : the rule attributes
  // - ctrl : system data
  this.rules;
  // An array of UDT names and data.
  this.udts;
  // An array of errors, if any.
  // - line : the line number containing the error
  // - char : the character offset of the error
  //- msg : the error message
  this.errors = [];

  /* CONSTRUCTOR */
  if (Buffer.isBuffer(src)) {
    this.chars = converter.decode("BINARY", src);
  } else if (Array.isArray(src)) {
    this.chars = src.slice();
  } else if (typeof (src) === "string") {
    this.chars = converter.decode("STRING", src);
  } else {
    throw new TypeError(thisFileName + "input source is not a string, byte Buffer or character array");
  }
  this.sabnf = converter.encode("STRING", this.chars)

  /* PUBLIC MEMBERS (FUNCTIONS) */
  // Scan the input SABNF grammar for invalid characters and catalog the lines via `this.lines`.
  // - strict : (optional) if `true`, all lines, including the last must end with CRLF (\r\n),
  // if `false` (in any JavaScript sense) then line endings may be any mix of CRLF, LF, CR, or end-of-file.
  // - trace (*) : (optional) a parser trace object, which will trace the parser that does the scan
  this.scan = function(strict, trace) {
    this.lines = scanner(this.chars, this.errors, strict, trace);
  }
  // Parse the input SABNF grammar for correct syntax.
  // - strict : (optional) if `true`, the input grammar must be strict ABNF, conforming to [RFC 5234](https://tools.ietf.org/html/rfc5234)
  // and [RFC 7405](https://tools.ietf.org/html/rfc7405). No superset features allowed.
  // - trace (\*) : (optional) a parser trace object, which will trace the syntax parser
  //
  // <i>(*)NOTE: the trace option was used primarily during development.
  // Error detection and reporting is now fairly robust and tracing should be unnecessary. Use at your own peril.</i> 
  this.parse = function(strict, trace) {
    parser.syntax(this.chars, this.lines, this.errors, strict, trace);
  }
  // Translate the SABNF grammar syntax into the opcodes that will guide the parser for this grammar.
  this.translate = function() {
    var ret = parser.semantic(this.chars, this.lines, this.errors);
    if (this.errors.length === 0) {
      this.rules = ret.rules;
      this.udts = ret.udts;
      lineMap = ret.lineMap;
    }
  }
  // Compute the attributes of each rule.
  this.attributes = function() {
    attrsObj.getAttributes(this.rules, this.udts, lineMap, this.errors)
  }
  // This function will perform the full suite of steps required to generate a parser grammar object
  // from the input SABNF grammar.
  this.generate = function(strict) {
    this.lines = scanner(this.chars, this.errors, strict);
    if (this.errors.length) {
      return;
    }
    parser.syntax(this.chars, this.lines, this.errors, strict);
    if (this.errors.length) {
      return;
    }
    var ret = parser.semantic(this.chars, this.lines, this.errors);
    if (this.errors.length) {
      return;
    } else {
      this.rules = ret.rules;
      this.udts = ret.udts;
      lineMap = ret.lineMap;
    }
    attrsObj.getAttributes(this.rules, this.udts, lineMap, this.errors)
  }
  // Returns a parser grammar object constructor function as a JavaScript string.
  this.toSource = function(name){
    return parser.generateSource(this.chars, this.lines, this.rules, this.udts, name);
  }
  // Returns a parser grammar object.
  this.toObject = function(){
    return parser.generateObject(this.sabnf, this.rules, this.udts);
  }
  // Display errors in text format, suitable for `console.log()`.
  this.errorsToAscii = function() {
    return errorsToAscii(this.errors, this.lines, this.chars);
  }
  // Display errors in HTML format, suitable for web page display.
  // (`apg-lib.css` required for proper styling)
  this.errorsToHtml = function(title) {
    return errorsToHtml(this.errors, this.lines, this.chars, title);
  }
  // Gnerate an annotated the SABNF grammar display in text format.
  this.linesToAscii = function() {
    return linesToAscii(this.lines);
  }
  // Gnerate an annotated the SABNF grammar display in HTML format.
  // (`apg-lib.css` required for proper styling)
  this.linesToHtml = function() {
    return linesToHtml(this.lines);
  }
  // Returns the attributes object. Used by `apg.html`. You will probably never need this.
  this.getAttributesObject = function(){
    return attrsObj;
  }

  /* PRIVATE MEMBERS (FUNCTIONS) */
  /* traslate lines (SABNF grammar) to ASCII text */
  var linesToAscii = function(lines) {
    var str = "";
    str += "Annotated Input Grammar";
    lines.forEach(function(val, index) {
      str += "\n";
      str += "line no: " + val.lineNo;
      str += " : char index: " + val.beginChar;
      str += " : length: " + val.length;
      str += " : abnf: " + abnfToAscii(_this.chars, val.beginChar, val.length);
    });
    str += "\n";
    return str;
  }
  /* traslate lines (SABNF grammar) to HTML */
  var linesToHtml = function(lines) {
    var html = "";
    html += '<table class="' + apglib.style.CLASS_GRAMMAR + '">\n';
    var title = "Annotated Input Grammar";
    html += '<caption>' + title + '</caption>\n';
    html += '<tr>';
    html += '<th>line<br>no.</th><th>first<br>char</th><th><br>length</th><th><br>text</th>';
    html += '</tr>\n';
    lines.forEach(function(val, index) {
      html += '<tr>';
      html += '<td>' + val.lineNo;
      html += '</td><td>' + val.beginChar;
      html += '</td><td>' + val.length;
      html += '</td><td>' + abnfToHtml(_this.chars, val.beginChar, val.length);
      html += '</td>';
      html += '</tr>\n';
    });

    html += '</table>\n';
    return html;
  }
  /* Format the error messages to HTML, for page display. */
  var errorsToHtml = function(errors, lines, chars, title) {
    var style = apglib.style;
    var html = "";
    var errorArrow = '<span class="' + style.CLASS_NOMATCH + '">&raquo;</span>';
    html += '<p><table class="' + style.CLASS_GRAMMAR + '">\n';
    if(title && typeof(title) === "string"){
      html += '<caption>'+title+'</caption>\n';
    }
    html += '<tr><th>line<br>no.</th><th>line<br>offset</th><th>error<br>offset</th><th><br>text</th></tr>\n';
    errors.forEach(function(val) {
      var line, relchar, beg, end, text, prefix = "", suffix = "";
      if (lines.length === 0) {
        text = errorArrow;
        relchar = 0;
      } else {
        line = lines[val.line];
        beg = line.beginChar;
        if (val.char > beg) {
          prefix = abnfToHtml(chars, beg, val.char - beg);
        }
        beg = val.char;
        end = line.beginChar + line.length;
        if (beg < end) {
          suffix = abnfToHtml(chars, beg, end - beg);
        }
        text = prefix + errorArrow + suffix;
        relchar = val.char - line.beginChar;
        html += '<tr>';
        html += '<td>' + val.line + '</td><td>' + line.beginChar + '</td><td>' + relchar + '</td><td>' + text + '</td>';
        html += '</tr>\n';
        html += '<tr>';
        html += '<td colspan="3"></td>' + '<td>&uarr;:&nbsp;' + apglib.utils.stringToAsciiHtml(val.msg) + '</td>'
        html += '</tr>\n';
      }
    });
    html += '</table></p>\n';
    return html;
  }
  /* Display an array of errors in ASCII text */
  var errorsToAscii = function(errors, lines, chars) {
    var str, line, beg, len;
    str = "";
    errors.forEach(function(error) {
      line = lines[error.line];
      str += line.lineNo + ": ";
      str += line.beginChar + ": ";
      str += error.char - line.beginChar + ": ";
      beg = line.beginChar;
      len = error.char - line.beginChar;
      str += abnfToAscii(chars, beg, len);
      str += " >> ";
      beg = error.char;
      len = line.beginChar + line.length - error.char;
      str += abnfToAscii(chars, beg, len);
      str += "\n";
      str += line.lineNo + ": ";
      str += line.beginChar + ": ";
      str += error.char - line.beginChar + ": ";
      str += "error: ";
      str += error.msg;
      str += "\n";
    });
    return str;
  }
  /* Convert a phrase (array of character codes) to HTML. */
  var abnfToHtml = function(chars, beg, len) {
    var NORMAL = 0;
    var CONTROL = 1;
    var INVALID = 2;
    var CONTROL_BEG = '<span class="' + apglib.style.CLASS_CTRLCHAR + '">';
    var CONTROL_END = "</span>";
    var INVALID_BEG = '<span class="' + apglib.style.CLASS_NOMATCH + '">';
    var INVALID_END = "</span>";
    var end;
    var html = '';
    while (true) {
      if (!Array.isArray(chars) || chars.length === 0) {
        break;
      }
      if (typeof (beg) !== "number") {
        beg = 0;
      }
      if (beg >= chars.length) {
        break;
      }
      if (typeof (len) !== 'number' || beg + len >= chars.length) {
        end = chars.length;
      } else {
        end = beg + len;
      }
      var state = NORMAL
      for (var i = beg; i < end; i += 1) {
        var ch = chars[i];
        if (ch >= 32 && ch <= 126) {
          /* normal - printable ASCII characters */
          if (state === CONTROL) {
            html += CONTROL_END;
            state = NORMAL;
          } else if (state === INVALID) {
            html += INVALID_END;
            state = NORMAL;
          }
          /* handle reserved HTML entity characters */
          switch (ch) {
          case 32:
            html += '&nbsp;';
            break;
          case 60:
            html += '&lt;';
            break;
          case 62:
            html += '&gt;';
            break;
          case 38:
            html += '&amp;';
            break;
          case 34:
            html += '&quot;';
            break;
          case 39:
            html += '&#039;';
            break;
          case 92:
            html += '&#092;';
            break;
          default:
            html += String.fromCharCode(ch);
            break;
          }
        } else if (ch === 9 || ch === 10 || ch === 13) {
          /* control characters */
          if (state === NORMAL) {
            html += CONTROL_BEG;
            state = CONTROL;
          } else if (state === INVALID) {
            html += INVALID_END + CONTROL_BEG;
            state = CONTROL;
          }
          if (ch === 9) {
            html += "TAB";
          }
          if (ch === 10) {
            html += "LF";
          }
          if (ch === 13) {
            html += "CR";
          }
        } else {
          /* invalid characters */
          if (state === NORMAL) {
            html += INVALID_BEG;
            state = INVALID;
          } else if (state === CONTROL) {
            html += CONTROL_END + INVALID_BEG;
            state = INVALID;
          }
          /* display character as hexidecimal value */
          html += "\\x" + apglib.utils.charToHex(ch);
        }
      }
      if (state === INVALID) {
        html += INVALID_END;
      }
      if (state === CONTROL) {
        html += CONTROL_END;
      }
      break;
    }
    return html;
  }
  /* Convert a phrase (array of character codes) to ASCII text. */
  var abnfToAscii = function(chars, beg, len) {
    var str = "";
    for (var i = beg; i < beg + len; i += 1) {
      var ch = chars[i];
      if (ch >= 32 && ch <= 126) {
        str += String.fromCharCode(ch);
      } else {
        switch (ch) {
        case 9:
          str += '\\t';
          break;
        case 10:
          str += '\\n';
          break;
        case 13:
          str += '\\r';
          break;
        default:
          str += '\\unknown';
          break;
        }
      }
    }
    return str;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// This module is used by [`attributes.js`](./attributes.html) to determine rule dependencies
// (which rules are referenced by the given rule)
// and the attribute type of each rule.
// In general, rules are either recursive (the rule refers to itself)
// or non-recursive (the rule never refers to itself).
// However, for the purposes of determining these types, several refinements of these types are required.
//
// Sometimes it happens that several rules my refer to one another. e.g.
// ````
// S = "x" A / "y"
// A = "a" S / "b"
// ````
// These are called "mutually recursive sets".
// Note that within a mutually recursive set, each rule in the set refers to *all* other rules in the set
// directly or indirectly.
//Additionally, and important to the algorithms internally, are
// non-recursive rules that refer to mutually recursive sets, and simple recursive rules
// that refer to mutually recursive sets.
module.exports = function(rules) {
  "use strict";
  var id = __webpack_require__(0).ids;
  /* scan a specific rule */
  /* see if it refers to itself (recursive) */
  /* see which other rules it refers to */
  var scan = function(rule, index) {
    rule.ctrl.isScanned[index] += 1;
    rules[index].opcodes.forEach(function(op) {
      if (op.type === id.RNM) {
        rule.ctrl.refCount[op.index] += 1;
        if (rule.ctrl.isScanned[op.index] === 0)
          scan(rule, op.index);
      }
      if (op.type === id.UDT) {
        rule.ctrl.udtRefCount[op.index] += 1;
      }
    });
  }
  rules.forEach(function(rule) {
    scan(rule, rule.index);
  });
  /* Determine which rules are recursive. */
  for (var i = 0; i < rules.length; i += 1) {
    if (rules[i].ctrl.refCount[i] > 0) {
      rules[i].ctrl.type = id.ATTR_R;
    }
  }
  /* Discover the mutually-recursive sets of rules. */
  rules.mrGroups = [];
  for (var i = 0; i < rules.length; i += 1) {
    var ctrli = rules[i].ctrl;
    if (ctrli.type === id.ATTR_R) {
      var group = [];
      for (var j = 0; j < rules.length; j += 1) {
        if (i !== j) {
          var ctrlj = rules[j].ctrl;
          if (ctrlj.type === id.ATTR_R && ctrli.refCount[j] > 0
              && ctrlj.refCount[i]) {
            if (group.length == 0) {
              group.push(i);
              ctrli.type = id.ATTR_MR;
              ctrli.mrGroupId = rules.mrGroups.length;
            }
            group.push(j);
            ctrlj.type = id.ATTR_MR;
            ctrlj.mrGroupId = rules.mrGroups.length;
          }
        }
      }
      if (group.length > 0) {
        rules.mrGroups.push(group);
      }
    }
  }
  /* Discover the rules that refer to mutually-recursive sets. */
  for (var i = 0; i < rules.length; i += 1) {
    var ctrli = rules[i].ctrl;
    for (var j = 0; j < rules.length; j += 1) {
      var ctrlj = rules[j].ctrl;
      if (ctrli.refCount[j] > 0 && ctrlj.type === id.ATTR_MR) {
        if (ctrli.type === id.ATTR_N) {
          ctrli.type = id.ATTR_NMR;
        } else if (ctrli.type === id.ATTR_R) {
          ctrli.type = id.ATTR_RMR;
        }
      }
    }
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// This module is used by [`attributes.js`](./attributes.html) to determine non-recursive attributes
// (`finite`, `empty` and `not empty`) of each rule.
// The non-recursive attributes of all rules are needed by the algorithms which determine the recursive attributes.
//
// In a nut shell, the general algorithm is to generate a "single-expansion parse tree" (`SEPT`).
// That is, each rule name in a rule definition
// is expanded once. If any rule name appears a second time on any branch of the `SEPT` (e.g. it is a recursive rule),
// the second occurrence is considered a terminal leaf node with initial leaf properties.
// Those leaf properties are then modified by the various `ALT`, `CAT`, `REP`, etc. operators as the algorithm
// walks back up to the root node of the `SEPT`.
module.exports = function(rules, Attr, NameList) {
  "use strict";
  var id = __webpack_require__(0).ids;
  /* Walks through the `SEPT` of opcodes for non-recursive and recursive rules. */
  var ruleAttr = function(rule, attr) {
    while (true) {
      if (rule.ctrl.isOpen === true || rule.ctrl.isComplete === true) {
        /* rule is complete - use previously computed values */
        /* or rule is open - use leaf values which have been previously initialized to this rule */
        attr.finite = rule.attr.finite;
        attr.empty = rule.attr.empty;
        attr.notEmpty = rule.attr.notEmpty;
        break;
      }
      /* open the rule an traverse its opcodes */
      rule.ctrl.isOpen = true;
      opcodeAttr(rule, 0, attr);
      rule.ctrl.isOpen = false;
      rule.ctrl.isComplete = true;
      rule.attr.finite = attr.finite;
      rule.attr.empty = attr.empty;
      rule.attr.notEmpty = attr.notEmpty;
      break;
    }
  }
  /* Walks through the `SEPT` of opcodes for mutually-recursive sets of rules. */
  var mrRuleAttr = function(rule, attr) {
    while (true) {
      var branchName = branchNames[branchNames.length - 1] + rule.lower;
      if (rule.ctrl.isOpen === true || rule.ctrl.isComplete === true) {
        /* rule is complete - use previously computed values */
        /* or rule is open - use leaf values which have been previously initialized to this rule */
        attr.finite = rule.attr.finite;
        attr.empty = rule.attr.empty;
        attr.notEmpty = rule.attr.notEmpty;
        break;
      }
      var found = nameList.find(branchName);
      if (found !== -1) {
        /* use attributes of competed rule */
        attr.finite = found.finite;
        attr.empty = found.empty;
        attr.notEmpty = found.notEmpty;
        break;
      }
      /* branch name not found, open the rule an traverse its opcodes */
      branchNames.push(branchName);
      rule.ctrl.isOpen = true;
      opcodeAttr(rule, 0, attr);
      rule.ctrl.isOpen = false;
      rule.attr.finite = attr.finite;
      rule.attr.empty = attr.empty;
      rule.attr.notEmpty = attr.notEmpty;
      nameList.add(branchName, attr);
      branchNames.pop();
      break;
    }
  }
  /* process attributes through an ALT node */
  var altAttr = function(rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    var childAttrs = [];
    for (var i = 0; i < opcode.children.length; i += 1) {
      var attri = new Attr();
      childAttrs.push(attri);
      opcodeAttr(rule, opcode.children[i], attri);
    }
    attr.finite = false;
    attr.empty = false;
    attr.notEmpty = false;
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (child.finite === true) {
        attr.finite = true;
      }
      if (child.empty === true) {
        attr.empty = true;
      } else {
        attr.notEmpty = true;
      }
    }
  }
  /* process attributes through a CAT node */
  var catAttr = function(rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    var childAttrs = [];
    for (var i = 0; i < opcode.children.length; i += 1) {
      var attri = new Attr();
      childAttrs.push(attri);
      opcodeAttr(rule, opcode.children[i], attri);
    }
    attr.finite = true;
    attr.empty = true;
    attr.notEmpty = false;
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (child.finite === false) {
        attr.finite = false;
      }
      if (child.empty === false) {
        attr.empty = false;
        attr.notEmpty = true;
      }
    }
  }
  /* process attributes through a REP node */
  var repAttr = function(rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    opcodeAttr(rule, opIndex + 1, attr);
    if (opcode.min === 0) {
      attr.finite = true;
      attr.empty = true;
    }
  }
  /* process attributes through an opcode */
  var opcodeAttr = function(rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    switch (opcode.type) {
    case id.ALT:
      altAttr(rule, opIndex, attr);
      break;
    case id.CAT:
      catAttr(rule, opIndex, attr);
      break;
    case id.REP:
      repAttr(rule, opIndex, attr);
      break;
    case id.RNM:
      ruleAttrFunc(rules[opcode.index], attr);
      break;
    case id.UDT:
      attr.finite = true;
      attr.empty = opcode.empty;
      attr.notEmpty = true;
      break;
    case id.AND:
    case id.NOT:
    case id.BKA:
    case id.BKN:
    case id.ABG:
    case id.AEN:
      attr.finite = true;
      attr.empty = true;
      attr.notEmpty = false;
      break;
    case id.TLS:
      attr.finite = true;
      attr.empty = opcode.string.length > 0 ? false : true;
      attr.notEmpty = !attr.empty;
      break;
    case id.TBS:
      attr.finite = true;
      attr.empty = false;
      attr.notEmpty = true;
      break;
    case id.BKR:
      attr.finite = true;
      attr.empty = true;
      attr.notEmpty = true;
      break;
    case id.TRG:
      attr.finite = true;
      attr.empty = false;
      attr.notEmpty = true;
      break;
    }

  }
  /* Initialize the attributes and attribute controls for all rules. */
  var branchNames = [];
  var nameList = new NameList();
  var ruleAttrFunc = ruleAttr;
  var workAttr = new Attr();
  rules.forEach(function(rule) {
    rule.ctrl.isOpen = false;
    rule.ctrl.isComplete = false;
  });
  /* Get the attributes of the recursive and non-recursive rules. */ 
  rules.forEach(function(rule) {
    if (rule.ctrl.type === id.ATTR_N || rule.ctrl.type === id.ATTR_R) {
      if (rule.ctrl.isComplete === false) {
        ruleAttrFunc(rule, workAttr);
      }
    }
  });
  /* Get the attributes of the mutually-recursive sets of rules. */ 
  ruleAttrFunc = mrRuleAttr;
  rules.mrGroups.forEach(function(group) {
    group.forEach(function(ruleIndex) {
      var rule = rules[ruleIndex];
      nameList.clear();
      branchNames.length = 0;
      branchNames.push("");
      ruleAttrFunc(rule, workAttr);
      rule.ctrl.isComplete = true;
    });
  });
  /* Get the attributes of the recursive and non-recursive rules the refer to mutually recursive sets. */
  ruleAttrFunc = ruleAttr;
  var workAttr = new Attr();
  rules.forEach(function(rule) {
    if (rule.ctrl.type === id.ATTR_NMR || rule.ctrl.type === id.ATTR_RMR) {
      if (rule.ctrl.isComplete === false) {
        ruleAttrFunc(rule, workAttr);
      }
    }
  });
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// This module is used by [`attributes.js`](./attributes.html) to determine recursive attributes
// (`left`, `nested`, `right` & `cyclic`) of each rule.
//
// Assumes non-recursive attributes, `finite`, `empty` & `not empty` have already been determined.
// Follows the same logic of walking the `SEPT` as with the non-recursive attributes
// (*see the `SEPT` discussion [there](./attributes-non-recursive.html)*)
// but with different rules of discovery as it goes.
// Knowing the non-recursive attributes of the recursive rules in advance
// is required by this algorithm.
module.exports = function(rules, Attr, NameList) {
  "use strict";
  var id = __webpack_require__(0).ids;
  /* Walk the `SEPT` for one specific rule. */
  var ruleAttr = function(startIndex, rule, attr) {
    while (true) {
      if (rule.index === startIndex && rule.ctrl.isOpen === true) {
        /* start rule is open, use previously initialized (leaf) values */
        attr.left = rule.attr.left;
        attr.nested = rule.attr.nested;
        attr.right = rule.attr.right;
        attr.cyclic = rule.attr.cyclic;
        attr.finite = rule.attr.finite;
        attr.empty = rule.attr.empty;
        attr.notEmpty = rule.attr.notEmpty;
        break;
      }
      if (rule.ctrl.refCount[startIndex] === 0) {
        /* rule does not refer to start rule - use terminal leaf values */
        attr.left = false;
        attr.nested = false;
        attr.right = false;
        attr.cyclic = false;
        attr.finite = rule.attr.finite;
        attr.empty = rule.attr.empty;
        attr.notEmpty = rule.attr.notEmpty;
        break;
      }
      if (rule.ctrl.isOpen === true) {
        /* rule refers to start rule and is open - use terminal leaf values */
        attr.left = false;
        attr.nested = false;
        attr.right = false;
        attr.cyclic = false;
        attr.finite = rule.attr.finite;
        attr.empty = rule.attr.empty;
        attr.notEmpty = rule.attr.notEmpty;
        break;
      }
      /* rule refers to the start rule and is NOT open -
         look it up to see if it has been traversed in this branch configuration before */
      var branchName = branchNames[branchNames.length - 1] + rule.lower;
      var found = nameList.find(branchName);
      if (found !== -1) {
        /* use attributes of completed branch rule */
        attr.left = found.left;
        attr.nested = found.nested;
        attr.right = found.right;
        attr.cyclic = found.cyclic;
        attr.finite = found.finite;
        attr.empty = found.empty;
        attr.notEmpty = found.notEmpty;
        break;
      }
      /* rule refers to start rule and has not been traversed in this branch configuration
         - open the rule an traverse its opcodes */
      branchNames.push(branchName);
      rule.ctrl.isOpen = true;
      opcodeAttr(startIndex, rule, 0, attr);
      rule.ctrl.isOpen = false;
      nameList.add(branchName, attr);
      branchNames.pop();
      break;
    }
  }
  /* process the attributes through an ALT operator */
  var altAttr = function(startIndex, rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    var childAttrs = [];
    for (var i = 0; i < opcode.children.length; i += 1) {
      var attri = new Attr();
      childAttrs.push(attri);
      opcodeAttr(startIndex, rule, opcode.children[i], attri);
    }
    attr.left = false;
    attr.nested = false;
    attr.right = false;
    attr.cyclic = false;
    attr.finite = false;
    attr.empty = false;
    attr.notEmpty = false;
    /* if any child attribute is true, that ALT attribute is true */
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (child.left === true) {
        attr.left = true;
      }
      if (child.nested === true) {
        attr.nested = true;
      }
      if (child.right === true) {
        attr.right = true;
      }
      if (child.cyclic === true) {
        attr.cyclic = true;
      }
      if (child.finite === true) {
        attr.finite = true;
      }
      if (child.empty === true) {
        attr.empty = true;
      } else {
        attr.notEmpty = true;
      }
    }
  }
  /* is CAT nested? Very complicated question. We must consider 4 cases separately. */
  var isCatNested = function(childAttrs) {
    var child, found, foundLeft, foundRecursive;
    /* 1.) if any child is nested, CAT is nested */
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (child.nested === true) {
        return true;
      }
    }
    /* 2.) the left-most, right recursive child is followed by a non-empty child */
    foundRecursive = false;
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (foundRecursive) {
        if (child.notEmpty === true) {
          return true;
        }
      } else {
        if (child.right === true && child.left === false
            && child.notEmpty === true) {
          foundRecursive = true;
        }
      }
    }
    /* 3.) the right-most, left recursive child is followed by a non-empty child */
    foundRecursive = false;
    for (var i = childAttrs.length - 1; i >= 0; i -= 1) {
      var child = childAttrs[i];
      if (foundRecursive) {
        if (child.notEmpty === true) {
          return true;
        }
      } else {
        if (child.left === true && child.right === false
            && child.notEmpty === true) {
          foundRecursive = true;
        }
      }
    }
    /* 4.) there is at least one recursive term between the left-most and right-most non-empty-only terms */
    foundLeft = false;
    foundRecursive = false;
    found = false;
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (foundLeft === false) {
        if (child.notEmpty === true) {
          foundLeft = true;
        }
      } else {
        if (foundRecursive === false) {
          if (child.left === true || child.right === true
              || child.cyclic === true) {
            foundRecursive = true;
          }
        } else {
          if (child.notEmpty === true) {
            return true;
          }
        }
      }
    }
    return false;
  }
  /* is CAT left recursive */
  var isCatLeft = function(childAttrs) {
    var ret = false;
    for (var i = 0; i < childAttrs.length; i += 1) {
      if (childAttrs[i].left === true) {
        ret = true; /* left-most non-empty is left - CAT is left */
        break;
      }
      if (childAttrs[i].empty === false) {
        ret = false; /* non-empty child - CAT is not left */
        break;
      }
      /* else keep looking */
    }
    return ret;
  }
  /* is CAT right recursive */
  var isCatRight = function(childAttrs) {
    var ret = false;
    for (var i = childAttrs.length - 1; i >= 0; i -= 1) {
      if (childAttrs[i].right === true) {
        ret = true; /* right-most non-empty is right - CAT is right */
        break;
      }
      if (childAttrs[i].empty === false) {
        ret = false; /* non-empty child - CAT is not right */
        break;
      }
      /* else keep looking */
    }
    return ret;
  }
  /* is CAT cyclic */
  var isCatCyclic = function(childAttrs) {
    var ret = true;
    for (var i = 0; i < childAttrs.length; i += 1) {
      if (childAttrs[i].cyclic === false) {
        ret = false; /* if any child is NOT cyclic, CAT is not cyclic */
        break;
      }
    }
    return ret;
  }
  /* process the attribute through a CAT operator */
  var catAttr = function(startIndex, rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    var childAttrs = [];
    for (var i = 0; i < opcode.children.length; i += 1) {
      var attri = new Attr();
      childAttrs.push(attri);
      opcodeAttr(startIndex, rule, opcode.children[i], attri);
    }
    attr.finite = true;
    attr.empty = true;
    attr.notEmpty = false;
    for (var i = 0; i < childAttrs.length; i += 1) {
      var child = childAttrs[i];
      if (child.finite === false) {
        attr.finite = false;
      }
      if (child.empty === false) {
        attr.empty = false;
        attr.notEmpty = true;
      }
    }
    attr.left = isCatLeft(childAttrs);
    attr.nested = isCatNested(childAttrs);
    attr.right = isCatRight(childAttrs);
    attr.cyclic = isCatCyclic(childAttrs);
  }
  /* process the attribute through a REP operator */
  var repAttr = function(startIndex, rule, opIndex, attr) {
    opcodeAttr(startIndex, rule, opIndex + 1, attr);
  }
  /* process the attributes through the opcodes */
  var opcodeAttr = function(startIndex, rule, opIndex, attr) {
    var opcode = rule.opcodes[opIndex];
    attr.left = false;
    attr.nested = false;
    attr.right = false;
    attr.cyclic = false;
    switch (opcode.type) {
    case id.ALT:
      altAttr(startIndex, rule, opIndex, attr);
      break;
    case id.CAT:
      catAttr(startIndex, rule, opIndex, attr);
      break;
    case id.REP:
      repAttr(startIndex, rule, opIndex, attr);
      break;
    case id.RNM:
      ruleAttr(startIndex, rules[opcode.index], attr);
      break;
    case id.UDT:
      attr.finite = true;
      attr.empty = opcode.empty;
      attr.notEmpty = true;
      break;
    case id.AND:
    case id.NOT:
    case id.BKA:
    case id.BKN:
    case id.ABG:
    case id.AEN:
      attr.finite = true;
      attr.empty = true;
      attr.notEmpty = false;
      break;
    case id.TLS:
      attr.finite = true;
      attr.empty = opcode.string.length > 0 ? false : true;
      attr.notEmpty = !attr.empty;
      break;
    case id.TBS:
      attr.finite = true;
      attr.empty = false;
      attr.notEmpty = true;
      break;
    case id.BKR:
      attr.finite = true;
      attr.empty = true;
      attr.notEmpty = true;
      break;
    case id.TRG:
      attr.finite = true;
      attr.empty = false;
      attr.notEmpty = true;
      break;
    }
  }
  /* Initialize the attribute and controls of all rules. */
  var branchNames = [];
  var nameList = new NameList();
  var workAttr = new Attr();
  rules.forEach(function(rule) {
    rule.ctrl.isOpen = false;
    rule.ctrl.isComplete = false;
  });
  /* Walk through the `SEPT`, determining attributes as we go. */
  for (var i = 0; i < rules.length; i += 1) {
    if (rules[i].ctrl.type === id.ATTR_R || rules[i].ctrl.type === id.ATTR_MR
        || rules[i].ctrl.type === id.ATTR_RMR) {
      var rule = rules[i];
      nameList.clear();
      branchNames.length = 0;
      branchNames.push("");
      ruleAttr(i, rules[i], workAttr);
      rule.attr.left = workAttr.left;
      rule.attr.nested = workAttr.nested;
      rule.attr.right = workAttr.right;
      rule.attr.cyclic = workAttr.cyclic;
    }
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// This module, along with
// [`attribute-types.js`](./attribute-types.html), 
// [`attributes-recursive.js`](./attributes-recursive.html),
//  and [`attributes-non-recursive.js`](./attributes-non-recursive.html)
// determines the rule dependencies (the list of rules referenced by each rule)
// and rule attributes.
//
// It is well known that recursive-descent parsers will fail if a rule is left recursive.
// e.g.<br>
// `S = S / "y"`<br>
// Left recursion, here, is considered to be a fatal attribute of the grammar.
// There are a couple of other fatal attributes that need to be disclosed
// but, in addition, there are several non-fatal attributes that are of interest as well.
// This module will determine seven different attributes:
// 1. left recursion(fatal)<br>
//    `S = S "x" / "y"`
// 2. nested recursion(OK)<br>
// `S = "a" S "b" / "y"`
// 3. right recursion(OK)<br>
// `S = "x" S / "y"`
// 4. cyclic(fatal)<br>
// `S = S`
// 5. finite(fatal if not finite)<br>
// `S = "y" S` (defines only infinite strings)
// 6. empty(OK, but very important to know about)<br>
// `S = "x" S / ""`
// 7. not empty(OK, *see below*)<br>
// `S = "x" S / "y"`
//
// Note that these are "aggregate" attributes, in that if the attribute is true it only means that it *can* be true,
// not that it will always be true for every input string. It also means that more than one attribute may be true for a given rule.
//
// You may wonder why we would be interested in both `empty` and `not empty` as separate attributes. First of all note that<br>
// `S = "" / "y"`<br>
// demonstrates a rule that is both empty and non-empty. 
// You can't infer one from the other.
// The importance is not apparent here, and won't be explained
// in detail, but both attributes turn out to be important to the algorithms that determine the recursiveness of a rule.
// But if your really, really want to know, take a look at the function `catAttr()` and how it is used in 
// [`attributes-recursive.js`](./attributes-recursive.html).
module.exports = function() {
  "use strict";
  var apglib = __webpack_require__(0);
  var id = apglib.ids;
  var attrTypes = __webpack_require__(16);
  var attrNonRecursive = __webpack_require__(17);
  var attrRecursive = __webpack_require__(18);
  var rules = null;
  var udts = null;
  var ruleErrorCount = 0;
  /* convert the attribute ID to a human-readable string */
  var attrTypeToString = function(ctrl) {
    var ret = 'unknown';
    switch (ctrl.type) {
    case id.ATTR_N:
      ret = 'N';
      break;
    case id.ATTR_R:
      ret = 'R';
      break;
    case id.ATTR_MR:
      ret = 'MR(' + ctrl.mrGroupId + ')';
      break;
    case id.ATTR_NMR:
      ret = 'NMR';
      break;
    case id.ATTR_RMR:
      ret = 'RMR';
      break;
    }
    return ret;
  }
  /* Array.sort() callback, sort putting errors at top. */
  var sortByError = function(r, l) {
    var rerror = (r.attr.left === true || r.attr.cyclic === true || r.attr.finite === false) ? true : false;
    var lerror = (l.attr.left === true || l.attr.cyclic === true || l.attr.finite === false) ? true : false;

    if (rerror === false && lerror === true) {
      return 1;
    }
    if (rerror === true && lerror === false) {
      return -1;
    }
    return 0;
  }
  /* Array.sort() callback, sort by rule index. */
  var sortByIndex = function(r, l) {
    if (r.index < l.index) {
      return -1;
    }
    if (r.index > l.index) {
      return 1;
    }
    return 0;
  }
  /* Array.sort() callback, sort by rule name. */
//  var sortByName = function(r, l) {
//    if (r.lower < l.lower) {
//      return -1;
//    }
//    if (r.lower > l.lower) {
//      return 1;
//    }
//    return 0;
//  }
  /* Array.sort() callback, sort by rule type. */
//  var sortByType = function(r, l) {
//    var ar = r.ctrl;
//    var al = l.ctrl;
//    if (ar.type < al.type) {
//      return -1;
//    }
//    if (ar.type > al.type) {
//      return 1;
//    }
//    if (ar.type === id.ATTR_MR) {
//      if (ar.mrGroupId < al.mrGroupId) {
//        return -1;
//      }
//      if (ar.mrGroupId < al.mrGroupId) {
//        return 1;
//      }
//    }
//    return sortByName(r, l);
//  }
  /* converts attributes to HTML JavaScript data */
  /* Used by the click-to-sort anchors. */
  var attrsToHtml = function(rules) {
    var html = '';
    var error, attr;
    var hasErrors = false;
    html += '<script type="text/javascript">\n';
    html += 'var attrSortCol = "index"\n';
    html += 'var attrSortErrors = true\n';
    html += 'var attrSortDir = 0\n';
    html += 'var attrDirs = {index: 0, rule: 0, type: 0, left: 0, nested: 0, right: 0, cyclic: 0, finite: 0, empty: 0, notempty: 0}\n';
    html += 'var attrRows = [\n';
    var rcount = 0;
    rules.forEach(function(rule) {
      if (rcount === 0) {
        rcount += 1;
      } else {
        html += ',\n';
      }
      attr = rule.attr;
      error = false;
      if (attr.left === true || attr.cyclic === true || attr.finite === false) {
        error = true;
        hasErrors = true;
      }
      html += '{error: ' + error + ', index: ' + rule.index + ', rule: "' + rule.name + '", lower: "' + rule.lower + '"';
      html += ', type: ' + rule.ctrl.type + ', typename: "' + attrTypeToString(rule.ctrl) + '"';
      html += ', left: ' + attr.left + ', nested: ' + attr.nested + ', right: ' + attr.right + ', cyclic: ' + attr.cyclic;
      html += ', finite: ' + attr.finite + ', empty: ' + attr.empty + ', notempty: ' + attr.notEmpty;
      html += '}';
    });
    html += '\n]\n';
    html += 'var attrHasErrors = ' + hasErrors + '\n';
    html += "<\/script>\n";
    html += '<div id="sort-links" >\n';
    html += "</div>\n";
    return html;
  }
  var attrsData = function(rules){
    var error, attr;
    var data = [];
    rules.forEach(function(rule) {
      attr = rule.attr;
      error = false;
      if (attr.left === true || attr.cyclic === true || attr.finite === false) {
        error = true;
      }
      var row = {};
      row.error = error;
      row.index = rule.index;
      row.name = rule.name;
      row.lower = rule.lower;
      row.type = rule.ctrl.type;
      row.typename = attrTypeToString(rule.ctrl);
      row.left = attr.left;
      row.nested = attr.nested;
      row.right = attr.right;
      row.cyclic = attr.cyclic;
      row.finite = attr.finite;
      row.empty = attr.empty;
      row.notempty = attr.notEmpty;
      data.push(row);
    });
    return data;
  }
  /* Attribute control object constructor. */
  var AttrCtrl = function(emptyRules, emptyUdts) {
    this.isOpen = false;
    this.isComplete = false;
    this.type = id.ATTR_N;
    this.mrGroupId = -1;
    this.refCount = emptyRules.slice(0);
    this.udtRefCount = emptyUdts.slice(0);
    this.isScanned = emptyRules.slice(0);
  }
  /* Attribute object constructor. */
  var Attr = function(recursive) {
    if (recursive === true) {
      this.left = true;
      this.nested = false;
      this.right = true;
      this.cyclic = true;
    } else {
      this.left = false;
      this.nested = false;
      this.right = false;
      this.cyclic = false;
    }
    this.finite = false;
    this.empty = true;
    this.notEmpty = false;
    this.error = false;
    this.copy = function(attr) {
      attr.left = this.left;
      attr.nested = this.nested;
      attr.right = this.right;
      attr.cyclic = this.cyclic;
      attr.finite = this.finite;
      attr.empty = this.empty;
      attr.notEmpty = this.notEmpty;
      attr.error = this.error;
    }
    this.copyNR = function(attr) {
      attr.finite = this.finite;
      attr.empty = this.empty;
    }
    this.copyR = function(attr) {
      attr.left = this.left;
      attr.nested = this.nested;
      attr.right = this.right;
      attr.cyclic = this.cyclic;
    }
  };
  /* Name list object constructor. */
  /* Used to keep the list of rule names referenced by each rule. */
  var NameList = function() {
    var list = [];
    this.add = function(name, attr) {
      var ret = -1;
      var find = this.find(name);
      if (find === -1) {
        ret = {
          name : name,
          left : attr.left,
          nested : attr.nested,
          right : attr.right,
          cyclic : attr.cyclic,
          finite : attr.finite,
          empty : attr.empty,
          notEmpty : attr.notEmpty
        };
        list.push(ret);
      }
      return ret;
    }
    this.find = function(name) {
      var ret = -1;
      for (var i = 0; i < list.length; i += 1) {
        if (list[i].name === name) {
          ret = list[i];
          break;
        }
      }
      return ret;
    }
    this.clear = function() {
      list.length = 0;
    }
  };
  /* Convert a list of rule dependencies to a human-readable list. */
  this.ruleDependenciesToString = function() {
    var ret = "";
    rules.forEach(function(rule) {
      ret += "\n";
      ret += "\nRULE: " + rule.name;
      for (var i = 0; i < rules.length; i += 1) {
        if (rule.attr.refCount[i] > 0) {
          ret += "\n          " + rules[i].name;
        }
      }
    });
    return ret;
  }
  /* convert rule dependencies to HTML JavaScript data */
  /* Used by the click-to-hide/show anchors. */
  this.rulesWithReferencesToHtml = function() {
    var html = '';
    html += '<script type="text/javascript">\n';
    html += 'var tableData= {indexSort: "up", nameSort: "up", rows: [\n';
    var rcount = 0;
    rules.forEach(function(rule) {
      if (rcount === 0) {
        rcount += 1;
      } else {
        html += ',';
      }
      html += '{name: "' + rule.name + '", lower: "' + rule.lower + '", index: ' + rule.index;
      html += ', indexSort: "up", nameSort: "up", visible: true, dependents: [';
      var icount = 0;
      for (var i = 0; i < rules.length; i += 1) {
        if (rule.ctrl.refCount[i] > 0) {
          if (icount === 0) {
            html += '{name: "' + rules[i].name + '", index: ' + i + '}';
            icount += 1;
          } else {
            html += ',';
            html += '{name: "' + rules[i].name + '", index: ' + i + '}';
          }
        }
      }
      html += ']}\n';
    });
    html += ']};\n';
    html += "<\/script>\n";
    html += '<div id="sort-links" >\n';
    html += "</div>\n";
    return html;
  }
  this.rulesWithReferencesData = function(){
    var data = {indexSort: "up", nameSort: "none", rows: []};
    rules.forEach(function(rule){
      var row = {};
      row.name = rule.name;
      row.lower = rule.lower;
      row.index = rule.index;
      row.show = true;
      row.dependents = [];
      for(var i = 0; i < rules.length; i += 1){
        if(rule.ctrl.refCount[i] > 0){
          var dependent = {};
          dependent.name = rules[i].name;
          dependent.index = i;
          row.dependents.push(dependent);
        }
      }
      for(var i = 0; i < udts.length; i += 1){
        if(rule.ctrl.udtRefCount[i] > 0){
          var dependent = {};
          dependent.name = udts[i].name;
          dependent.index = udts[i].index;
          row.dependents.push(dependent);
        }
      }
      data.rows.push(row);
    });
    return data;
  }

  /* Perform the initial sorting of the rule names. */
  this.ruleAttrsToHtml = function() {
    var html = "";
    rules.sort(sortByIndex);
    if (ruleErrorCount > 0) {
      rules.sort(sortByError);
    }
    html += attrsToHtml(rules, "Attributes by Rule Index");
    rules.sort(sortByIndex); // make sure rules are left sorted by index - errors may change this
    return html;
  }
  this.ruleAttrsData = function() {
    rules.sort(sortByIndex);
    if (ruleErrorCount > 0) {
      rules.sort(sortByError);
    }
    var data = attrsData(rules);
    rules.sort(sortByIndex); // make sure rules are left sorted by index - errors may change this
    return data;
  }
  this.udtAttrsData = function() {
    return attrsData(udts);
  }
  // The main, driver function that controls the flow of attribute generation.
  // - determine rule dependencies and types (recursive, non-recursive, etc.)
  // - determine all of the non-recursive attributes first(finite, empty & non-empty).
  // These are required by the alogrithms that determine the recursive attributes.
  // - finally, determine the recursive attributes (left, nested, right & cyclic)
  this.getAttributes = function(grammarRules, grammarUdts, rulesLineMap, attrErrors) {
    rules = grammarRules;
    udts = grammarUdts;
    var emptyRules = [];
    var emptyUdts = [];
    rules.forEach(function() {
      emptyRules.push(0);
    });
    udts.forEach(function(udt){
      emptyUdts.push(0);
    });
    rules.forEach(function(rule) {
      rule.ctrl = new AttrCtrl(emptyRules, emptyUdts);
    });
    attrTypes(rules);
    rules.forEach(function(rule) {
      if (rule.ctrl.type === id.ATTR_R || rule.ctrl.type === id.ATTR_MR || rule.ctrl.type === id.ATTR_RMR) {
        rule.attr = new Attr(true);
      } else {
        rule.attr = new Attr();
      }
    });
    udts.forEach(function(udt){
      udt.ctrl = {type: id.ATTR_N};
      udt.attr = {
          left: false,
          nested: false,
          right: false,
          cyclic: false,
          finite: true,
          empty: udt.empty,
          notEmpty: true,
          error: false
      }
    });
    attrNonRecursive(rules, Attr, NameList);
    attrRecursive(rules, Attr, NameList);
    ruleErrorCount = 0;
    rules.forEach(function(rule) {
      rule.error = false;
      if (rule.attr.left === true) {
        rule.error = true;
        ruleErrorCount += 1;
        attrErrors.push({
          line: rulesLineMap[rule.index].line,
          char : rulesLineMap[rule.index].char,
          msg : "left recursive"
        });
      }
      if (rule.attr.finite === false) {
        rule.error = true;
        ruleErrorCount += 1;
        attrErrors.push({
          line: rulesLineMap[rule.index].line,
          char : rulesLineMap[rule.index].char,
          msg : "infinite"
        });
      }
      if (rule.attr.cyclic === true) {
        rule.error = true;
        ruleErrorCount += 1;
        attrErrors.push({
          line: rulesLineMap[rule.index].line,
          char : rulesLineMap[rule.index].char,
          msg : "cyclic"
        });
      }
    });
    return attrErrors;
  };
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// This module converts an input SABNF grammar text file into a 
// grammar object that can be used with [`apg-lib`](https://github.com/ldthomas/apg-js2-lib) in an application parser.
// **apg** is, in fact itself, an ABNF parser that generates and SABNF parser.
// It is based on the grammar<br>
//`abnf/abnf-for-sabnf-grammar.bnf`.<br>
// In its syntax phase, **apg** analyzes the user's input SABNF grammar for correct syntax, generating an AST as it goes.
// In its semantic phase, **apg** translates the AST to generate the parser for the input grammar.
module.exports = function() {
  "use strict";
  var thisFileName = "parser.js: ";
  var apglib = __webpack_require__(0);
  var id = apglib.ids;
  var syn = new (__webpack_require__(26))();
  var sem = new (__webpack_require__(25))();
  var sabnfGrammar = new (__webpack_require__(21))();
  var parser = new apglib.parser();
  parser.ast = new apglib.ast();
  parser.callbacks = syn.callbacks;
  parser.ast.callbacks = sem.callbacks;

  /* find the line containing the given character index */
  var findLine = function(lines, charIndex, charLength) {
    if (charIndex < 0 || charIndex >= charLength) {
      /* return error if out of range */
      return -1;
    }
    for (var i = 0; i < lines.length; i += 1) {
      if (charIndex >= lines[i].beginChar && charIndex < (lines[i].beginChar + lines[i].length)) {
        return i;
      }
    }
    /* should never reach here */
    return -1;
  }
  var translateIndex = function(map, index) {
    var ret = -1;
    if (index < map.length) {
      for (var i = index; i < map.length; i += 1) {
        if (map[i] !== null) {
          ret = map[i];
          break;
        }
      }
    }
    return ret;
  }
  /* helper function when removing redundant opcodes */
  var reduceOpcodes = function(rules) {
    rules.forEach(function(rule, ir) {
      var opcodes = [];
      var map = [];
      var reducedIndex = 0;
      rule.opcodes.forEach(function(op, iop) {
        if (op.type === id.ALT && op.children.length === 1) {
          map.push(null);
        } else if (op.type === id.CAT && op.children.length === 1) {
          map.push(null);
        } else if (op.type === id.REP && op.min === 1 && op.max === 1) {
          map.push(null);
        } else {
          map.push(reducedIndex);
          opcodes.push(op);
          reducedIndex += 1;
        }
      });
      map.push(reducedIndex);
      /* translate original opcode indexes to the reduced set. */
      opcodes.forEach(function(op, iop) {
        if (op.type === id.ALT || op.type === id.CAT) {
          for (var i = 0; i < op.children.length; i += 1) {
            op.children[i] = translateIndex(map, op.children[i]);
          }
        }
      });
      rule.opcodes = opcodes;
    });
  }
  /* Parse the grammar - the syntax phase. */
  /* SABNF grammar syntax errors are caught and reported here. */
  this.syntax = function(chars, lines, errors, strict, trace) {
    if (trace) {
      if (trace.traceObject !== "traceObject") {
        throw new TypError(thisFileName + "trace argument is not a trace object");
      }
      parser.trace = trace;
    }
    var data = {};
    data.errors = errors;
    data.strict = strict ? true : false;
    data.lines = lines;
    data.findLine = findLine;
    data.charsLength = chars.length;
    data.ruleCount = 0;
    var result = parser.parse(sabnfGrammar, 'file', chars, data);
    if (!result.success) {
      errors.push({
        line : 0,
        char : 0,
        msg : "syntax analysis of input grammar failed"
      });
    }
  }
  /* Parse the grammar - the semantic phase, translates the AST. */
  /* SABNF grammar syntax errors are caught and reported here. */
  this.semantic = function(chars, lines, errors) {
    var data = {};
    data.errors = errors;
    data.lines = lines;
    data.findLine = findLine;
    data.charsLength = chars.length;
    parser.ast.translate(data);
    if(errors.length){
      return null;
    }
    /* Remove unneeded operators. */
    /* ALT operators with a single alternate */
    /* CAT operators with a single phrase to concatenate */
    /* REP(1,1) operators (`1*1RuleName` or `1RuleName` is the same as just `RuleName`.) */
    reduceOpcodes(data.rules);
    return {
      rules: data.rules,
      udts: data.udts,
      lineMap: data.rulesLineMap
    }
  }
  // Generate a grammar constructor function.
  // An object instantiated from this constructor is used with the `apg-lib` `parser()` function.
  this.generateSource = function(chars, lines, rules, udts, name) {
    var source = "";
    var i;
    var bkrname;
    var bkrlower;
    var opcodeCount = 0;
    var charCodeMin = Infinity;
    var charCodeMax = 0;
    var ruleNames = [];
    var udtNames = [];
    var alt = 0, cat = 0, rnm = 0, udt = 0, rep = 0, and = 0, not = 0, tls = 0, tbs = 0, trg = 0;
    var bkr = 0, bka = 0, bkn = 0, abg = 0, aen = 0;
    rules.forEach(function(rule) {
      ruleNames.push(rule.lower);
      opcodeCount += rule.opcodes.length;
      rule.opcodes.forEach(function(op, iop) {
        switch (op.type) {
        case id.ALT:
          alt += 1;
          break;
        case id.CAT:
          cat += 1;
          break;
        case id.RNM:
          rnm += 1;
          break;
        case id.UDT:
          udt += 1;
          break;
        case id.REP:
          rep += 1;
          break;
        case id.AND:
          and += 1;
          break;
        case id.NOT:
          not += 1;
          break;
        case id.BKA:
          bka += 1;
          break;
        case id.BKN:
          bkn += 1;
          break;
        case id.BKR:
          bkr += 1;
          break;
        case id.ABG:
          abg += 1;
          break;
        case id.AEN:
          aen += 1;
          break;
        case id.TLS:
          tls += 1;
          for (i = 0; i < op.string.length; i += 1) {
            if (op.string[i] < charCodeMin) {
              charCodeMin = op.string[i];
            }
            if (op.string[i] > charCodeMax) {
              charCodeMax = op.string[i];
            }
          }
          break;
        case id.TBS:
          tbs += 1;
          for (i = 0; i < op.string.length; i += 1) {
            if (op.string[i] < charCodeMin) {
              charCodeMin = op.string[i];
            }
            if (op.string[i] > charCodeMax) {
              charCodeMax = op.string[i];
            }
          }
          break;
        case id.TRG:
          trg += 1;
          if (op.min < charCodeMin) {
            charCodeMin = op.min;
          }
          if (op.max > charCodeMax) {
            charCodeMax = op.max;
          }
          break;
        }
      });
    });
    ruleNames.sort();
    if (udts.length > 0) {
      udts.forEach(function(udt) {
        udtNames.push(udt.lower);
      });
      udtNames.sort();
    }
    var funcname = "module.exports";
    if(name && typeof(name) === "string"){
      funcname = "var " +name;
    }
    source += "// Generated by JavaScript APG, Version [`apg-js2`](https://github.com/ldthomas/apg-js2)\n";
    source += funcname + " = function(){\n";
    source += "\"use strict\";\n";
    source += "  //```\n";
    source += "  // SUMMARY\n";
    source += "  //      rules = " + rules.length + "\n";
    source += "  //       udts = " + udts.length + "\n";
    source += "  //    opcodes = " + opcodeCount + "\n";
    source += "  //        ---   ABNF original opcodes\n";
    source += "  //        ALT = " + alt + "\n";
    source += "  //        CAT = " + cat + "\n";
    source += "  //        REP = " + rep + "\n";
    source += "  //        RNM = " + rnm + "\n";
    source += "  //        TLS = " + tls + "\n";
    source += "  //        TBS = " + tbs + "\n";
    source += "  //        TRG = " + trg + "\n";
    source += "  //        ---   SABNF superset opcodes\n";
    source += "  //        UDT = " + udt + "\n";
    source += "  //        AND = " + and + "\n";
    source += "  //        NOT = " + not + "\n";
    source += "  //        BKA = " + bka + "\n";
    source += "  //        BKN = " + bkn + "\n";
    source += "  //        BKR = " + bkr + "\n";
    source += "  //        ABG = " + abg + "\n";
    source += "  //        AEN = " + aen + "\n";
    source += "  // characters = [";
    if ((tls + tbs + trg) === 0) {
      source += " none defined ]";
    } else {
      source += charCodeMin + " - " + charCodeMax + "]";
    }
    if (udt > 0) {
      source += " + user defined";
    }
    source += "\n";
    source += "  //```\n";
    source += "  /* OBJECT IDENTIFIER (for internal parser use) */\n";
    source += "  this.grammarObject = 'grammarObject';\n";
    source += "\n";
    source += "  /* RULES */\n";
    source += "  this.rules = [];\n";
    rules.forEach(function(rule, i) {
      var thisRule = "  this.rules[";
      thisRule += i;
      thisRule += "] = {name: '";
      thisRule += rule.name;
      thisRule += "', lower: '";
      thisRule += rule.lower;
      thisRule += "', index: ";
      thisRule += rule.index;
      thisRule += ", isBkr: ";
      thisRule += rule.isBkr;
      thisRule += "};\n";
      source += thisRule;
    });
    source += "\n";
    source += "  /* UDTS */\n";
    source += "  this.udts = [];\n";
    if (udts.length > 0) {
      udts.forEach(function(udt, i) {
        var thisUdt = "  this.udts[";
        thisUdt += i;
        thisUdt += "] = {name: '";
        thisUdt += udt.name;
        thisUdt += "', lower: '";
        thisUdt += udt.lower;
        thisUdt += "', index: ";
        thisUdt += udt.index;
        thisUdt += ", empty: ";
        thisUdt += udt.empty;
        thisUdt += ", isBkr: ";
        thisUdt += udt.isBkr;
        thisUdt += "};\n";
        source += thisUdt;
      });
    }
    source += "\n";
    source += "  /* OPCODES */\n";
    rules.forEach(function(rule, ruleIndex) {
      if (ruleIndex > 0) {
        source += "\n";
      }
      source += "  /* " + rule.name + " */\n";
      source += "  this.rules[" + ruleIndex + "].opcodes = [];\n";
      rule.opcodes.forEach(function(op, opIndex) {
        switch (op.type) {
        case id.ALT:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", children: [" + op.children.toString() + "]};// ALT\n";
          break;
        case id.CAT:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", children: [" + op.children.toString() + "]};// CAT\n";
          break;
        case id.RNM:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", index: " + op.index + "};// RNM(" + rules[op.index].name + ")\n";
          break;
        case id.BKR:
          if (op.index >= rules.length) {
            bkrname = udts[op.index - rules.length].name;
            bkrlower = udts[op.index - rules.length].lower;
          } else {
            bkrname = rules[op.index].name;
            bkrlower = rules[op.index].lower;
          }
          var prefix = "%i";
          if (op.bkrCase === id.BKR_MODE_CS) {
            prefix = "%s";
          }
          if (op.bkrMode === id.BKR_MODE_UM) {
            prefix += "%u";
          } else {
            prefix += "%p";
          }
          bkrname = prefix + bkrname;
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", index: " + op.index + ", lower: '" + bkrlower + "'" + ", bkrCase: " + op.bkrCase + ", bkrMode: "
              + op.bkrMode + "};// BKR(\\" + bkrname + ")\n";
          break;
        case id.UDT:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", empty: " + op.empty + ", index: " + op.index + "};// UDT(" + udts[op.index].name + ")\n";
          break;
        case id.REP:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type + ", min: "
              + op.min + ", max: " + op.max + "};// REP\n";
          break;
        case id.AND:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + "};// AND\n";
          break;
        case id.NOT:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + "};// NOT\n";
          break;
        case id.ABG:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + "};// ABG(%^)\n";
          break;
        case id.AEN:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + "};// AEN(%$)\n";
          break;
        case id.BKA:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + "};// BKA\n";
          break;
        case id.BKN:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + "};// BKN\n";
          break;
        case id.TLS:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", string: [" + op.string.toString() + "]};// TLS\n";
          break;
        case id.TBS:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type
              + ", string: [" + op.string.toString() + "]};// TBS\n";
          break;
        case id.TRG:
          source += "  this.rules[" + ruleIndex + "].opcodes[" + opIndex + "] = {type: " + op.type + ", min: "
              + op.min + ", max: " + op.max + "};// TRG\n";
          break;
        }
      });
    });
    source += "\n";
    source +=
        "  // The `toString()` function will display the original grammar file(s) that produced these opcodes.\n";
    source += "  this.toString = function(){\n";
    source += '    var str = "";\n';
    var str;
    lines.forEach(function(line, index) {
      var end = line.beginChar + line.length;
      str = "";
      source += '    str += "';
      for (var i = line.beginChar; i < end; i += 1) {
        switch (chars[i]) {
        case 9:
          str = ' ';
          break;
        case 10:
          str = '\\n';
          break;
        case 13:
          str = '\\r';
          break;
        case 34:
          str = '\\"';
          break;
        case 92:
          str = '\\\\';
          break;
        default:
          str = String.fromCharCode(chars[i]);
          break;
        }
        source += str;
      }
      source += '";\n';
    });
    source += '    return str;\n';
    source += '  }\n';
    source += "}\n";
    return source;
  }
  // Generate a grammar file object.
  // Returns the same object as instantiating the constructor function returned by<br>
  //`this.generateSource()`.<br>
  this.generateObject = function(string, rules, udts) {
    var obj = {};
    var ruleNames = [];
    var udtNames = [];
    var string = string.slice(0);
    obj.grammarObject = 'grammarObject';
    rules.forEach(function(rule) {
      ruleNames.push(rule.lower);
    });
    ruleNames.sort();
    if (udts.length > 0) {
      udts.forEach(function(udt) {
        udtNames.push(udt.lower);
      });
      udtNames.sort();
    }
    obj.callbacks = [];
    ruleNames.forEach(function(name) {
      obj.callbacks[name] = false;
    });
    if (udts.length > 0) {
      udtNames.forEach(function(name) {
        obj.callbacks[name] = false;
      });
    }
    obj.rules = rules;
    obj.udts = udts;
    obj.toString = function() {
      return string;
    }
    return obj;
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Generated by JavaScript APG, Version [`apg-js2`](https://github.com/ldthomas/apg-js2)
module.exports = function(){
"use strict";
  //```
  // SUMMARY
  //      rules = 95
  //       udts = 0
  //    opcodes = 372
  //        ---   ABNF original opcodes
  //        ALT = 43
  //        CAT = 48
  //        REP = 34
  //        RNM = 149
  //        TLS = 2
  //        TBS = 61
  //        TRG = 35
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  //        BKA = 0
  //        BKN = 0
  //        BKR = 0
  //        ABG = 0
  //        AEN = 0
  // characters = [9 - 126]
  //```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'File', lower: 'file', index: 0, isBkr: false};
  this.rules[1] = {name: 'BlankLine', lower: 'blankline', index: 1, isBkr: false};
  this.rules[2] = {name: 'Rule', lower: 'rule', index: 2, isBkr: false};
  this.rules[3] = {name: 'RuleLookup', lower: 'rulelookup', index: 3, isBkr: false};
  this.rules[4] = {name: 'RuleNameTest', lower: 'rulenametest', index: 4, isBkr: false};
  this.rules[5] = {name: 'RuleName', lower: 'rulename', index: 5, isBkr: false};
  this.rules[6] = {name: 'RuleNameError', lower: 'rulenameerror', index: 6, isBkr: false};
  this.rules[7] = {name: 'DefinedAsTest', lower: 'definedastest', index: 7, isBkr: false};
  this.rules[8] = {name: 'DefinedAsError', lower: 'definedaserror', index: 8, isBkr: false};
  this.rules[9] = {name: 'DefinedAs', lower: 'definedas', index: 9, isBkr: false};
  this.rules[10] = {name: 'Defined', lower: 'defined', index: 10, isBkr: false};
  this.rules[11] = {name: 'IncAlt', lower: 'incalt', index: 11, isBkr: false};
  this.rules[12] = {name: 'RuleError', lower: 'ruleerror', index: 12, isBkr: false};
  this.rules[13] = {name: 'LineEndError', lower: 'lineenderror', index: 13, isBkr: false};
  this.rules[14] = {name: 'Alternation', lower: 'alternation', index: 14, isBkr: false};
  this.rules[15] = {name: 'Concatenation', lower: 'concatenation', index: 15, isBkr: false};
  this.rules[16] = {name: 'Repetition', lower: 'repetition', index: 16, isBkr: false};
  this.rules[17] = {name: 'Modifier', lower: 'modifier', index: 17, isBkr: false};
  this.rules[18] = {name: 'Predicate', lower: 'predicate', index: 18, isBkr: false};
  this.rules[19] = {name: 'BasicElement', lower: 'basicelement', index: 19, isBkr: false};
  this.rules[20] = {name: 'BasicElementErr', lower: 'basicelementerr', index: 20, isBkr: false};
  this.rules[21] = {name: 'Group', lower: 'group', index: 21, isBkr: false};
  this.rules[22] = {name: 'GroupError', lower: 'grouperror', index: 22, isBkr: false};
  this.rules[23] = {name: 'GroupOpen', lower: 'groupopen', index: 23, isBkr: false};
  this.rules[24] = {name: 'GroupClose', lower: 'groupclose', index: 24, isBkr: false};
  this.rules[25] = {name: 'Option', lower: 'option', index: 25, isBkr: false};
  this.rules[26] = {name: 'OptionError', lower: 'optionerror', index: 26, isBkr: false};
  this.rules[27] = {name: 'OptionOpen', lower: 'optionopen', index: 27, isBkr: false};
  this.rules[28] = {name: 'OptionClose', lower: 'optionclose', index: 28, isBkr: false};
  this.rules[29] = {name: 'RnmOp', lower: 'rnmop', index: 29, isBkr: false};
  this.rules[30] = {name: 'BkrOp', lower: 'bkrop', index: 30, isBkr: false};
  this.rules[31] = {name: 'bkrModifier', lower: 'bkrmodifier', index: 31, isBkr: false};
  this.rules[32] = {name: 'cs', lower: 'cs', index: 32, isBkr: false};
  this.rules[33] = {name: 'ci', lower: 'ci', index: 33, isBkr: false};
  this.rules[34] = {name: 'um', lower: 'um', index: 34, isBkr: false};
  this.rules[35] = {name: 'pm', lower: 'pm', index: 35, isBkr: false};
  this.rules[36] = {name: 'bkr-name', lower: 'bkr-name', index: 36, isBkr: false};
  this.rules[37] = {name: 'rname', lower: 'rname', index: 37, isBkr: false};
  this.rules[38] = {name: 'uname', lower: 'uname', index: 38, isBkr: false};
  this.rules[39] = {name: 'ename', lower: 'ename', index: 39, isBkr: false};
  this.rules[40] = {name: 'UdtOp', lower: 'udtop', index: 40, isBkr: false};
  this.rules[41] = {name: 'udt-non-empty', lower: 'udt-non-empty', index: 41, isBkr: false};
  this.rules[42] = {name: 'udt-empty', lower: 'udt-empty', index: 42, isBkr: false};
  this.rules[43] = {name: 'RepOp', lower: 'repop', index: 43, isBkr: false};
  this.rules[44] = {name: 'AltOp', lower: 'altop', index: 44, isBkr: false};
  this.rules[45] = {name: 'CatOp', lower: 'catop', index: 45, isBkr: false};
  this.rules[46] = {name: 'StarOp', lower: 'starop', index: 46, isBkr: false};
  this.rules[47] = {name: 'AndOp', lower: 'andop', index: 47, isBkr: false};
  this.rules[48] = {name: 'NotOp', lower: 'notop', index: 48, isBkr: false};
  this.rules[49] = {name: 'BkaOp', lower: 'bkaop', index: 49, isBkr: false};
  this.rules[50] = {name: 'BknOp', lower: 'bknop', index: 50, isBkr: false};
  this.rules[51] = {name: 'AbgOp', lower: 'abgop', index: 51, isBkr: false};
  this.rules[52] = {name: 'AenOp', lower: 'aenop', index: 52, isBkr: false};
  this.rules[53] = {name: 'TrgOp', lower: 'trgop', index: 53, isBkr: false};
  this.rules[54] = {name: 'TbsOp', lower: 'tbsop', index: 54, isBkr: false};
  this.rules[55] = {name: 'TlsOp', lower: 'tlsop', index: 55, isBkr: false};
  this.rules[56] = {name: 'TlsCase', lower: 'tlscase', index: 56, isBkr: false};
  this.rules[57] = {name: 'TlsOpen', lower: 'tlsopen', index: 57, isBkr: false};
  this.rules[58] = {name: 'TlsClose', lower: 'tlsclose', index: 58, isBkr: false};
  this.rules[59] = {name: 'TlsString', lower: 'tlsstring', index: 59, isBkr: false};
  this.rules[60] = {name: 'StringTab', lower: 'stringtab', index: 60, isBkr: false};
  this.rules[61] = {name: 'ClsOp', lower: 'clsop', index: 61, isBkr: false};
  this.rules[62] = {name: 'ClsOpen', lower: 'clsopen', index: 62, isBkr: false};
  this.rules[63] = {name: 'ClsClose', lower: 'clsclose', index: 63, isBkr: false};
  this.rules[64] = {name: 'ClsString', lower: 'clsstring', index: 64, isBkr: false};
  this.rules[65] = {name: 'ProsVal', lower: 'prosval', index: 65, isBkr: false};
  this.rules[66] = {name: 'ProsValOpen', lower: 'prosvalopen', index: 66, isBkr: false};
  this.rules[67] = {name: 'ProsValString', lower: 'prosvalstring', index: 67, isBkr: false};
  this.rules[68] = {name: 'ProsValClose', lower: 'prosvalclose', index: 68, isBkr: false};
  this.rules[69] = {name: 'rep-min', lower: 'rep-min', index: 69, isBkr: false};
  this.rules[70] = {name: 'rep-min-max', lower: 'rep-min-max', index: 70, isBkr: false};
  this.rules[71] = {name: 'rep-max', lower: 'rep-max', index: 71, isBkr: false};
  this.rules[72] = {name: 'rep-num', lower: 'rep-num', index: 72, isBkr: false};
  this.rules[73] = {name: 'dString', lower: 'dstring', index: 73, isBkr: false};
  this.rules[74] = {name: 'xString', lower: 'xstring', index: 74, isBkr: false};
  this.rules[75] = {name: 'bString', lower: 'bstring', index: 75, isBkr: false};
  this.rules[76] = {name: 'Dec', lower: 'dec', index: 76, isBkr: false};
  this.rules[77] = {name: 'Hex', lower: 'hex', index: 77, isBkr: false};
  this.rules[78] = {name: 'Bin', lower: 'bin', index: 78, isBkr: false};
  this.rules[79] = {name: 'dmin', lower: 'dmin', index: 79, isBkr: false};
  this.rules[80] = {name: 'dmax', lower: 'dmax', index: 80, isBkr: false};
  this.rules[81] = {name: 'bmin', lower: 'bmin', index: 81, isBkr: false};
  this.rules[82] = {name: 'bmax', lower: 'bmax', index: 82, isBkr: false};
  this.rules[83] = {name: 'xmin', lower: 'xmin', index: 83, isBkr: false};
  this.rules[84] = {name: 'xmax', lower: 'xmax', index: 84, isBkr: false};
  this.rules[85] = {name: 'dnum', lower: 'dnum', index: 85, isBkr: false};
  this.rules[86] = {name: 'bnum', lower: 'bnum', index: 86, isBkr: false};
  this.rules[87] = {name: 'xnum', lower: 'xnum', index: 87, isBkr: false};
  this.rules[88] = {name: 'alphanum', lower: 'alphanum', index: 88, isBkr: false};
  this.rules[89] = {name: 'owsp', lower: 'owsp', index: 89, isBkr: false};
  this.rules[90] = {name: 'wsp', lower: 'wsp', index: 90, isBkr: false};
  this.rules[91] = {name: 'space', lower: 'space', index: 91, isBkr: false};
  this.rules[92] = {name: 'comment', lower: 'comment', index: 92, isBkr: false};
  this.rules[93] = {name: 'LineEnd', lower: 'lineend', index: 93, isBkr: false};
  this.rules[94] = {name: 'LineContinue', lower: 'linecontinue', index: 94, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* File */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[0].opcodes[2] = {type: 4, index: 1};// RNM(BlankLine)
  this.rules[0].opcodes[3] = {type: 4, index: 2};// RNM(Rule)
  this.rules[0].opcodes[4] = {type: 4, index: 12};// RNM(RuleError)

  /* BlankLine */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,5,7]};// CAT
  this.rules[1].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[1].opcodes[2] = {type: 1, children: [3,4]};// ALT
  this.rules[1].opcodes[3] = {type: 6, string: [32]};// TBS
  this.rules[1].opcodes[4] = {type: 6, string: [9]};// TBS
  this.rules[1].opcodes[5] = {type: 3, min: 0, max: 1};// REP
  this.rules[1].opcodes[6] = {type: 4, index: 92};// RNM(comment)
  this.rules[1].opcodes[7] = {type: 4, index: 93};// RNM(LineEnd)

  /* Rule */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 2, children: [1,2,3,4]};// CAT
  this.rules[2].opcodes[1] = {type: 4, index: 3};// RNM(RuleLookup)
  this.rules[2].opcodes[2] = {type: 4, index: 89};// RNM(owsp)
  this.rules[2].opcodes[3] = {type: 4, index: 14};// RNM(Alternation)
  this.rules[2].opcodes[4] = {type: 1, children: [5,8]};// ALT
  this.rules[2].opcodes[5] = {type: 2, children: [6,7]};// CAT
  this.rules[2].opcodes[6] = {type: 4, index: 89};// RNM(owsp)
  this.rules[2].opcodes[7] = {type: 4, index: 93};// RNM(LineEnd)
  this.rules[2].opcodes[8] = {type: 2, children: [9,10]};// CAT
  this.rules[2].opcodes[9] = {type: 4, index: 13};// RNM(LineEndError)
  this.rules[2].opcodes[10] = {type: 4, index: 93};// RNM(LineEnd)

  /* RuleLookup */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[3].opcodes[1] = {type: 4, index: 4};// RNM(RuleNameTest)
  this.rules[3].opcodes[2] = {type: 4, index: 89};// RNM(owsp)
  this.rules[3].opcodes[3] = {type: 4, index: 7};// RNM(DefinedAsTest)

  /* RuleNameTest */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[4].opcodes[1] = {type: 4, index: 5};// RNM(RuleName)
  this.rules[4].opcodes[2] = {type: 4, index: 6};// RNM(RuleNameError)

  /* RuleName */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 4, index: 88};// RNM(alphanum)

  /* RuleNameError */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[6].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[6].opcodes[2] = {type: 5, min: 33, max: 60};// TRG
  this.rules[6].opcodes[3] = {type: 5, min: 62, max: 126};// TRG

  /* DefinedAsTest */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[7].opcodes[1] = {type: 4, index: 9};// RNM(DefinedAs)
  this.rules[7].opcodes[2] = {type: 4, index: 8};// RNM(DefinedAsError)

  /* DefinedAsError */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 3, min: 1, max: 2};// REP
  this.rules[8].opcodes[1] = {type: 5, min: 33, max: 126};// TRG

  /* DefinedAs */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[9].opcodes[1] = {type: 4, index: 11};// RNM(IncAlt)
  this.rules[9].opcodes[2] = {type: 4, index: 10};// RNM(Defined)

  /* Defined */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {type: 6, string: [61]};// TBS

  /* IncAlt */
  this.rules[11].opcodes = [];
  this.rules[11].opcodes[0] = {type: 6, string: [61,47]};// TBS

  /* RuleError */
  this.rules[12].opcodes = [];
  this.rules[12].opcodes[0] = {type: 2, children: [1,6]};// CAT
  this.rules[12].opcodes[1] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[12].opcodes[2] = {type: 1, children: [3,4,5]};// ALT
  this.rules[12].opcodes[3] = {type: 5, min: 32, max: 126};// TRG
  this.rules[12].opcodes[4] = {type: 6, string: [9]};// TBS
  this.rules[12].opcodes[5] = {type: 4, index: 94};// RNM(LineContinue)
  this.rules[12].opcodes[6] = {type: 4, index: 93};// RNM(LineEnd)

  /* LineEndError */
  this.rules[13].opcodes = [];
  this.rules[13].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[13].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[13].opcodes[2] = {type: 5, min: 32, max: 126};// TRG
  this.rules[13].opcodes[3] = {type: 6, string: [9]};// TBS
  this.rules[13].opcodes[4] = {type: 4, index: 94};// RNM(LineContinue)

  /* Alternation */
  this.rules[14].opcodes = [];
  this.rules[14].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[14].opcodes[1] = {type: 4, index: 15};// RNM(Concatenation)
  this.rules[14].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[14].opcodes[3] = {type: 2, children: [4,5,6]};// CAT
  this.rules[14].opcodes[4] = {type: 4, index: 89};// RNM(owsp)
  this.rules[14].opcodes[5] = {type: 4, index: 44};// RNM(AltOp)
  this.rules[14].opcodes[6] = {type: 4, index: 15};// RNM(Concatenation)

  /* Concatenation */
  this.rules[15].opcodes = [];
  this.rules[15].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[15].opcodes[1] = {type: 4, index: 16};// RNM(Repetition)
  this.rules[15].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[15].opcodes[3] = {type: 2, children: [4,5]};// CAT
  this.rules[15].opcodes[4] = {type: 4, index: 45};// RNM(CatOp)
  this.rules[15].opcodes[5] = {type: 4, index: 16};// RNM(Repetition)

  /* Repetition */
  this.rules[16].opcodes = [];
  this.rules[16].opcodes[0] = {type: 2, children: [1,3]};// CAT
  this.rules[16].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[16].opcodes[2] = {type: 4, index: 17};// RNM(Modifier)
  this.rules[16].opcodes[3] = {type: 1, children: [4,5,6,7]};// ALT
  this.rules[16].opcodes[4] = {type: 4, index: 21};// RNM(Group)
  this.rules[16].opcodes[5] = {type: 4, index: 25};// RNM(Option)
  this.rules[16].opcodes[6] = {type: 4, index: 19};// RNM(BasicElement)
  this.rules[16].opcodes[7] = {type: 4, index: 20};// RNM(BasicElementErr)

  /* Modifier */
  this.rules[17].opcodes = [];
  this.rules[17].opcodes[0] = {type: 1, children: [1,5]};// ALT
  this.rules[17].opcodes[1] = {type: 2, children: [2,3]};// CAT
  this.rules[17].opcodes[2] = {type: 4, index: 18};// RNM(Predicate)
  this.rules[17].opcodes[3] = {type: 3, min: 0, max: 1};// REP
  this.rules[17].opcodes[4] = {type: 4, index: 43};// RNM(RepOp)
  this.rules[17].opcodes[5] = {type: 4, index: 43};// RNM(RepOp)

  /* Predicate */
  this.rules[18].opcodes = [];
  this.rules[18].opcodes[0] = {type: 1, children: [1,2,3,4]};// ALT
  this.rules[18].opcodes[1] = {type: 4, index: 49};// RNM(BkaOp)
  this.rules[18].opcodes[2] = {type: 4, index: 50};// RNM(BknOp)
  this.rules[18].opcodes[3] = {type: 4, index: 47};// RNM(AndOp)
  this.rules[18].opcodes[4] = {type: 4, index: 48};// RNM(NotOp)

  /* BasicElement */
  this.rules[19].opcodes = [];
  this.rules[19].opcodes[0] = {type: 1, children: [1,2,3,4,5,6,7,8,9,10]};// ALT
  this.rules[19].opcodes[1] = {type: 4, index: 40};// RNM(UdtOp)
  this.rules[19].opcodes[2] = {type: 4, index: 29};// RNM(RnmOp)
  this.rules[19].opcodes[3] = {type: 4, index: 53};// RNM(TrgOp)
  this.rules[19].opcodes[4] = {type: 4, index: 54};// RNM(TbsOp)
  this.rules[19].opcodes[5] = {type: 4, index: 55};// RNM(TlsOp)
  this.rules[19].opcodes[6] = {type: 4, index: 61};// RNM(ClsOp)
  this.rules[19].opcodes[7] = {type: 4, index: 30};// RNM(BkrOp)
  this.rules[19].opcodes[8] = {type: 4, index: 51};// RNM(AbgOp)
  this.rules[19].opcodes[9] = {type: 4, index: 52};// RNM(AenOp)
  this.rules[19].opcodes[10] = {type: 4, index: 65};// RNM(ProsVal)

  /* BasicElementErr */
  this.rules[20].opcodes = [];
  this.rules[20].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[20].opcodes[1] = {type: 1, children: [2,3,4,5]};// ALT
  this.rules[20].opcodes[2] = {type: 5, min: 33, max: 40};// TRG
  this.rules[20].opcodes[3] = {type: 5, min: 42, max: 46};// TRG
  this.rules[20].opcodes[4] = {type: 5, min: 48, max: 92};// TRG
  this.rules[20].opcodes[5] = {type: 5, min: 94, max: 126};// TRG

  /* Group */
  this.rules[21].opcodes = [];
  this.rules[21].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[21].opcodes[1] = {type: 4, index: 23};// RNM(GroupOpen)
  this.rules[21].opcodes[2] = {type: 4, index: 14};// RNM(Alternation)
  this.rules[21].opcodes[3] = {type: 1, children: [4,5]};// ALT
  this.rules[21].opcodes[4] = {type: 4, index: 24};// RNM(GroupClose)
  this.rules[21].opcodes[5] = {type: 4, index: 22};// RNM(GroupError)

  /* GroupError */
  this.rules[22].opcodes = [];
  this.rules[22].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[22].opcodes[1] = {type: 1, children: [2,3,4,5]};// ALT
  this.rules[22].opcodes[2] = {type: 5, min: 33, max: 40};// TRG
  this.rules[22].opcodes[3] = {type: 5, min: 42, max: 46};// TRG
  this.rules[22].opcodes[4] = {type: 5, min: 48, max: 92};// TRG
  this.rules[22].opcodes[5] = {type: 5, min: 94, max: 126};// TRG

  /* GroupOpen */
  this.rules[23].opcodes = [];
  this.rules[23].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[23].opcodes[1] = {type: 6, string: [40]};// TBS
  this.rules[23].opcodes[2] = {type: 4, index: 89};// RNM(owsp)

  /* GroupClose */
  this.rules[24].opcodes = [];
  this.rules[24].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[24].opcodes[1] = {type: 4, index: 89};// RNM(owsp)
  this.rules[24].opcodes[2] = {type: 6, string: [41]};// TBS

  /* Option */
  this.rules[25].opcodes = [];
  this.rules[25].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[25].opcodes[1] = {type: 4, index: 27};// RNM(OptionOpen)
  this.rules[25].opcodes[2] = {type: 4, index: 14};// RNM(Alternation)
  this.rules[25].opcodes[3] = {type: 1, children: [4,5]};// ALT
  this.rules[25].opcodes[4] = {type: 4, index: 28};// RNM(OptionClose)
  this.rules[25].opcodes[5] = {type: 4, index: 26};// RNM(OptionError)

  /* OptionError */
  this.rules[26].opcodes = [];
  this.rules[26].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[26].opcodes[1] = {type: 1, children: [2,3,4,5]};// ALT
  this.rules[26].opcodes[2] = {type: 5, min: 33, max: 40};// TRG
  this.rules[26].opcodes[3] = {type: 5, min: 42, max: 46};// TRG
  this.rules[26].opcodes[4] = {type: 5, min: 48, max: 92};// TRG
  this.rules[26].opcodes[5] = {type: 5, min: 94, max: 126};// TRG

  /* OptionOpen */
  this.rules[27].opcodes = [];
  this.rules[27].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[27].opcodes[1] = {type: 6, string: [91]};// TBS
  this.rules[27].opcodes[2] = {type: 4, index: 89};// RNM(owsp)

  /* OptionClose */
  this.rules[28].opcodes = [];
  this.rules[28].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[28].opcodes[1] = {type: 4, index: 89};// RNM(owsp)
  this.rules[28].opcodes[2] = {type: 6, string: [93]};// TBS

  /* RnmOp */
  this.rules[29].opcodes = [];
  this.rules[29].opcodes[0] = {type: 4, index: 88};// RNM(alphanum)

  /* BkrOp */
  this.rules[30].opcodes = [];
  this.rules[30].opcodes[0] = {type: 2, children: [1,2,4]};// CAT
  this.rules[30].opcodes[1] = {type: 6, string: [92]};// TBS
  this.rules[30].opcodes[2] = {type: 3, min: 0, max: 1};// REP
  this.rules[30].opcodes[3] = {type: 4, index: 31};// RNM(bkrModifier)
  this.rules[30].opcodes[4] = {type: 4, index: 36};// RNM(bkr-name)

  /* bkrModifier */
  this.rules[31].opcodes = [];
  this.rules[31].opcodes[0] = {type: 1, children: [1,7,13,19]};// ALT
  this.rules[31].opcodes[1] = {type: 2, children: [2,3]};// CAT
  this.rules[31].opcodes[2] = {type: 4, index: 32};// RNM(cs)
  this.rules[31].opcodes[3] = {type: 3, min: 0, max: 1};// REP
  this.rules[31].opcodes[4] = {type: 1, children: [5,6]};// ALT
  this.rules[31].opcodes[5] = {type: 4, index: 34};// RNM(um)
  this.rules[31].opcodes[6] = {type: 4, index: 35};// RNM(pm)
  this.rules[31].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[31].opcodes[8] = {type: 4, index: 33};// RNM(ci)
  this.rules[31].opcodes[9] = {type: 3, min: 0, max: 1};// REP
  this.rules[31].opcodes[10] = {type: 1, children: [11,12]};// ALT
  this.rules[31].opcodes[11] = {type: 4, index: 34};// RNM(um)
  this.rules[31].opcodes[12] = {type: 4, index: 35};// RNM(pm)
  this.rules[31].opcodes[13] = {type: 2, children: [14,15]};// CAT
  this.rules[31].opcodes[14] = {type: 4, index: 34};// RNM(um)
  this.rules[31].opcodes[15] = {type: 3, min: 0, max: 1};// REP
  this.rules[31].opcodes[16] = {type: 1, children: [17,18]};// ALT
  this.rules[31].opcodes[17] = {type: 4, index: 32};// RNM(cs)
  this.rules[31].opcodes[18] = {type: 4, index: 33};// RNM(ci)
  this.rules[31].opcodes[19] = {type: 2, children: [20,21]};// CAT
  this.rules[31].opcodes[20] = {type: 4, index: 35};// RNM(pm)
  this.rules[31].opcodes[21] = {type: 3, min: 0, max: 1};// REP
  this.rules[31].opcodes[22] = {type: 1, children: [23,24]};// ALT
  this.rules[31].opcodes[23] = {type: 4, index: 32};// RNM(cs)
  this.rules[31].opcodes[24] = {type: 4, index: 33};// RNM(ci)

  /* cs */
  this.rules[32].opcodes = [];
  this.rules[32].opcodes[0] = {type: 6, string: [37,115]};// TBS

  /* ci */
  this.rules[33].opcodes = [];
  this.rules[33].opcodes[0] = {type: 6, string: [37,105]};// TBS

  /* um */
  this.rules[34].opcodes = [];
  this.rules[34].opcodes[0] = {type: 6, string: [37,117]};// TBS

  /* pm */
  this.rules[35].opcodes = [];
  this.rules[35].opcodes[0] = {type: 6, string: [37,112]};// TBS

  /* bkr-name */
  this.rules[36].opcodes = [];
  this.rules[36].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[36].opcodes[1] = {type: 4, index: 38};// RNM(uname)
  this.rules[36].opcodes[2] = {type: 4, index: 39};// RNM(ename)
  this.rules[36].opcodes[3] = {type: 4, index: 37};// RNM(rname)

  /* rname */
  this.rules[37].opcodes = [];
  this.rules[37].opcodes[0] = {type: 4, index: 88};// RNM(alphanum)

  /* uname */
  this.rules[38].opcodes = [];
  this.rules[38].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[38].opcodes[1] = {type: 6, string: [117,95]};// TBS
  this.rules[38].opcodes[2] = {type: 4, index: 88};// RNM(alphanum)

  /* ename */
  this.rules[39].opcodes = [];
  this.rules[39].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[39].opcodes[1] = {type: 6, string: [101,95]};// TBS
  this.rules[39].opcodes[2] = {type: 4, index: 88};// RNM(alphanum)

  /* UdtOp */
  this.rules[40].opcodes = [];
  this.rules[40].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[40].opcodes[1] = {type: 4, index: 42};// RNM(udt-empty)
  this.rules[40].opcodes[2] = {type: 4, index: 41};// RNM(udt-non-empty)

  /* udt-non-empty */
  this.rules[41].opcodes = [];
  this.rules[41].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[41].opcodes[1] = {type: 6, string: [117,95]};// TBS
  this.rules[41].opcodes[2] = {type: 4, index: 88};// RNM(alphanum)

  /* udt-empty */
  this.rules[42].opcodes = [];
  this.rules[42].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[42].opcodes[1] = {type: 6, string: [101,95]};// TBS
  this.rules[42].opcodes[2] = {type: 4, index: 88};// RNM(alphanum)

  /* RepOp */
  this.rules[43].opcodes = [];
  this.rules[43].opcodes[0] = {type: 1, children: [1,5,8,11,12]};// ALT
  this.rules[43].opcodes[1] = {type: 2, children: [2,3,4]};// CAT
  this.rules[43].opcodes[2] = {type: 4, index: 69};// RNM(rep-min)
  this.rules[43].opcodes[3] = {type: 4, index: 46};// RNM(StarOp)
  this.rules[43].opcodes[4] = {type: 4, index: 71};// RNM(rep-max)
  this.rules[43].opcodes[5] = {type: 2, children: [6,7]};// CAT
  this.rules[43].opcodes[6] = {type: 4, index: 69};// RNM(rep-min)
  this.rules[43].opcodes[7] = {type: 4, index: 46};// RNM(StarOp)
  this.rules[43].opcodes[8] = {type: 2, children: [9,10]};// CAT
  this.rules[43].opcodes[9] = {type: 4, index: 46};// RNM(StarOp)
  this.rules[43].opcodes[10] = {type: 4, index: 71};// RNM(rep-max)
  this.rules[43].opcodes[11] = {type: 4, index: 46};// RNM(StarOp)
  this.rules[43].opcodes[12] = {type: 4, index: 70};// RNM(rep-min-max)

  /* AltOp */
  this.rules[44].opcodes = [];
  this.rules[44].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[44].opcodes[1] = {type: 6, string: [47]};// TBS
  this.rules[44].opcodes[2] = {type: 4, index: 89};// RNM(owsp)

  /* CatOp */
  this.rules[45].opcodes = [];
  this.rules[45].opcodes[0] = {type: 4, index: 90};// RNM(wsp)

  /* StarOp */
  this.rules[46].opcodes = [];
  this.rules[46].opcodes[0] = {type: 6, string: [42]};// TBS

  /* AndOp */
  this.rules[47].opcodes = [];
  this.rules[47].opcodes[0] = {type: 6, string: [38]};// TBS

  /* NotOp */
  this.rules[48].opcodes = [];
  this.rules[48].opcodes[0] = {type: 6, string: [33]};// TBS

  /* BkaOp */
  this.rules[49].opcodes = [];
  this.rules[49].opcodes[0] = {type: 6, string: [38,38]};// TBS

  /* BknOp */
  this.rules[50].opcodes = [];
  this.rules[50].opcodes[0] = {type: 6, string: [33,33]};// TBS

  /* AbgOp */
  this.rules[51].opcodes = [];
  this.rules[51].opcodes[0] = {type: 6, string: [37,94]};// TBS

  /* AenOp */
  this.rules[52].opcodes = [];
  this.rules[52].opcodes[0] = {type: 6, string: [37,36]};// TBS

  /* TrgOp */
  this.rules[53].opcodes = [];
  this.rules[53].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[53].opcodes[1] = {type: 6, string: [37]};// TBS
  this.rules[53].opcodes[2] = {type: 1, children: [3,8,13]};// ALT
  this.rules[53].opcodes[3] = {type: 2, children: [4,5,6,7]};// CAT
  this.rules[53].opcodes[4] = {type: 4, index: 76};// RNM(Dec)
  this.rules[53].opcodes[5] = {type: 4, index: 79};// RNM(dmin)
  this.rules[53].opcodes[6] = {type: 6, string: [45]};// TBS
  this.rules[53].opcodes[7] = {type: 4, index: 80};// RNM(dmax)
  this.rules[53].opcodes[8] = {type: 2, children: [9,10,11,12]};// CAT
  this.rules[53].opcodes[9] = {type: 4, index: 77};// RNM(Hex)
  this.rules[53].opcodes[10] = {type: 4, index: 83};// RNM(xmin)
  this.rules[53].opcodes[11] = {type: 6, string: [45]};// TBS
  this.rules[53].opcodes[12] = {type: 4, index: 84};// RNM(xmax)
  this.rules[53].opcodes[13] = {type: 2, children: [14,15,16,17]};// CAT
  this.rules[53].opcodes[14] = {type: 4, index: 78};// RNM(Bin)
  this.rules[53].opcodes[15] = {type: 4, index: 81};// RNM(bmin)
  this.rules[53].opcodes[16] = {type: 6, string: [45]};// TBS
  this.rules[53].opcodes[17] = {type: 4, index: 82};// RNM(bmax)

  /* TbsOp */
  this.rules[54].opcodes = [];
  this.rules[54].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[54].opcodes[1] = {type: 6, string: [37]};// TBS
  this.rules[54].opcodes[2] = {type: 1, children: [3,10,17]};// ALT
  this.rules[54].opcodes[3] = {type: 2, children: [4,5,6]};// CAT
  this.rules[54].opcodes[4] = {type: 4, index: 76};// RNM(Dec)
  this.rules[54].opcodes[5] = {type: 4, index: 73};// RNM(dString)
  this.rules[54].opcodes[6] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[54].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[54].opcodes[8] = {type: 6, string: [46]};// TBS
  this.rules[54].opcodes[9] = {type: 4, index: 73};// RNM(dString)
  this.rules[54].opcodes[10] = {type: 2, children: [11,12,13]};// CAT
  this.rules[54].opcodes[11] = {type: 4, index: 77};// RNM(Hex)
  this.rules[54].opcodes[12] = {type: 4, index: 74};// RNM(xString)
  this.rules[54].opcodes[13] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[54].opcodes[14] = {type: 2, children: [15,16]};// CAT
  this.rules[54].opcodes[15] = {type: 6, string: [46]};// TBS
  this.rules[54].opcodes[16] = {type: 4, index: 74};// RNM(xString)
  this.rules[54].opcodes[17] = {type: 2, children: [18,19,20]};// CAT
  this.rules[54].opcodes[18] = {type: 4, index: 78};// RNM(Bin)
  this.rules[54].opcodes[19] = {type: 4, index: 75};// RNM(bString)
  this.rules[54].opcodes[20] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[54].opcodes[21] = {type: 2, children: [22,23]};// CAT
  this.rules[54].opcodes[22] = {type: 6, string: [46]};// TBS
  this.rules[54].opcodes[23] = {type: 4, index: 75};// RNM(bString)

  /* TlsOp */
  this.rules[55].opcodes = [];
  this.rules[55].opcodes[0] = {type: 2, children: [1,2,3,4]};// CAT
  this.rules[55].opcodes[1] = {type: 4, index: 56};// RNM(TlsCase)
  this.rules[55].opcodes[2] = {type: 4, index: 57};// RNM(TlsOpen)
  this.rules[55].opcodes[3] = {type: 4, index: 59};// RNM(TlsString)
  this.rules[55].opcodes[4] = {type: 4, index: 58};// RNM(TlsClose)

  /* TlsCase */
  this.rules[56].opcodes = [];
  this.rules[56].opcodes[0] = {type: 3, min: 0, max: 1};// REP
  this.rules[56].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[56].opcodes[2] = {type: 7, string: [37,105]};// TLS
  this.rules[56].opcodes[3] = {type: 7, string: [37,115]};// TLS

  /* TlsOpen */
  this.rules[57].opcodes = [];
  this.rules[57].opcodes[0] = {type: 6, string: [34]};// TBS

  /* TlsClose */
  this.rules[58].opcodes = [];
  this.rules[58].opcodes[0] = {type: 6, string: [34]};// TBS

  /* TlsString */
  this.rules[59].opcodes = [];
  this.rules[59].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[59].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[59].opcodes[2] = {type: 5, min: 32, max: 33};// TRG
  this.rules[59].opcodes[3] = {type: 5, min: 35, max: 126};// TRG
  this.rules[59].opcodes[4] = {type: 4, index: 60};// RNM(StringTab)

  /* StringTab */
  this.rules[60].opcodes = [];
  this.rules[60].opcodes[0] = {type: 6, string: [9]};// TBS

  /* ClsOp */
  this.rules[61].opcodes = [];
  this.rules[61].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[61].opcodes[1] = {type: 4, index: 62};// RNM(ClsOpen)
  this.rules[61].opcodes[2] = {type: 4, index: 64};// RNM(ClsString)
  this.rules[61].opcodes[3] = {type: 4, index: 63};// RNM(ClsClose)

  /* ClsOpen */
  this.rules[62].opcodes = [];
  this.rules[62].opcodes[0] = {type: 6, string: [39]};// TBS

  /* ClsClose */
  this.rules[63].opcodes = [];
  this.rules[63].opcodes[0] = {type: 6, string: [39]};// TBS

  /* ClsString */
  this.rules[64].opcodes = [];
  this.rules[64].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[64].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[64].opcodes[2] = {type: 5, min: 32, max: 38};// TRG
  this.rules[64].opcodes[3] = {type: 5, min: 40, max: 126};// TRG
  this.rules[64].opcodes[4] = {type: 4, index: 60};// RNM(StringTab)

  /* ProsVal */
  this.rules[65].opcodes = [];
  this.rules[65].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[65].opcodes[1] = {type: 4, index: 66};// RNM(ProsValOpen)
  this.rules[65].opcodes[2] = {type: 4, index: 67};// RNM(ProsValString)
  this.rules[65].opcodes[3] = {type: 4, index: 68};// RNM(ProsValClose)

  /* ProsValOpen */
  this.rules[66].opcodes = [];
  this.rules[66].opcodes[0] = {type: 6, string: [60]};// TBS

  /* ProsValString */
  this.rules[67].opcodes = [];
  this.rules[67].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[67].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[67].opcodes[2] = {type: 5, min: 32, max: 61};// TRG
  this.rules[67].opcodes[3] = {type: 5, min: 63, max: 126};// TRG
  this.rules[67].opcodes[4] = {type: 4, index: 60};// RNM(StringTab)

  /* ProsValClose */
  this.rules[68].opcodes = [];
  this.rules[68].opcodes[0] = {type: 6, string: [62]};// TBS

  /* rep-min */
  this.rules[69].opcodes = [];
  this.rules[69].opcodes[0] = {type: 4, index: 72};// RNM(rep-num)

  /* rep-min-max */
  this.rules[70].opcodes = [];
  this.rules[70].opcodes[0] = {type: 4, index: 72};// RNM(rep-num)

  /* rep-max */
  this.rules[71].opcodes = [];
  this.rules[71].opcodes[0] = {type: 4, index: 72};// RNM(rep-num)

  /* rep-num */
  this.rules[72].opcodes = [];
  this.rules[72].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[72].opcodes[1] = {type: 5, min: 48, max: 57};// TRG

  /* dString */
  this.rules[73].opcodes = [];
  this.rules[73].opcodes[0] = {type: 4, index: 85};// RNM(dnum)

  /* xString */
  this.rules[74].opcodes = [];
  this.rules[74].opcodes[0] = {type: 4, index: 87};// RNM(xnum)

  /* bString */
  this.rules[75].opcodes = [];
  this.rules[75].opcodes[0] = {type: 4, index: 86};// RNM(bnum)

  /* Dec */
  this.rules[76].opcodes = [];
  this.rules[76].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[76].opcodes[1] = {type: 6, string: [68]};// TBS
  this.rules[76].opcodes[2] = {type: 6, string: [100]};// TBS

  /* Hex */
  this.rules[77].opcodes = [];
  this.rules[77].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[77].opcodes[1] = {type: 6, string: [88]};// TBS
  this.rules[77].opcodes[2] = {type: 6, string: [120]};// TBS

  /* Bin */
  this.rules[78].opcodes = [];
  this.rules[78].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[78].opcodes[1] = {type: 6, string: [66]};// TBS
  this.rules[78].opcodes[2] = {type: 6, string: [98]};// TBS

  /* dmin */
  this.rules[79].opcodes = [];
  this.rules[79].opcodes[0] = {type: 4, index: 85};// RNM(dnum)

  /* dmax */
  this.rules[80].opcodes = [];
  this.rules[80].opcodes[0] = {type: 4, index: 85};// RNM(dnum)

  /* bmin */
  this.rules[81].opcodes = [];
  this.rules[81].opcodes[0] = {type: 4, index: 86};// RNM(bnum)

  /* bmax */
  this.rules[82].opcodes = [];
  this.rules[82].opcodes[0] = {type: 4, index: 86};// RNM(bnum)

  /* xmin */
  this.rules[83].opcodes = [];
  this.rules[83].opcodes[0] = {type: 4, index: 87};// RNM(xnum)

  /* xmax */
  this.rules[84].opcodes = [];
  this.rules[84].opcodes[0] = {type: 4, index: 87};// RNM(xnum)

  /* dnum */
  this.rules[85].opcodes = [];
  this.rules[85].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[85].opcodes[1] = {type: 5, min: 48, max: 57};// TRG

  /* bnum */
  this.rules[86].opcodes = [];
  this.rules[86].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[86].opcodes[1] = {type: 5, min: 48, max: 49};// TRG

  /* xnum */
  this.rules[87].opcodes = [];
  this.rules[87].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[87].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[87].opcodes[2] = {type: 5, min: 48, max: 57};// TRG
  this.rules[87].opcodes[3] = {type: 5, min: 65, max: 70};// TRG
  this.rules[87].opcodes[4] = {type: 5, min: 97, max: 102};// TRG

  /* alphanum */
  this.rules[88].opcodes = [];
  this.rules[88].opcodes[0] = {type: 2, children: [1,4]};// CAT
  this.rules[88].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[88].opcodes[2] = {type: 5, min: 97, max: 122};// TRG
  this.rules[88].opcodes[3] = {type: 5, min: 65, max: 90};// TRG
  this.rules[88].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[88].opcodes[5] = {type: 1, children: [6,7,8,9]};// ALT
  this.rules[88].opcodes[6] = {type: 5, min: 97, max: 122};// TRG
  this.rules[88].opcodes[7] = {type: 5, min: 65, max: 90};// TRG
  this.rules[88].opcodes[8] = {type: 5, min: 48, max: 57};// TRG
  this.rules[88].opcodes[9] = {type: 6, string: [45]};// TBS

  /* owsp */
  this.rules[89].opcodes = [];
  this.rules[89].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[89].opcodes[1] = {type: 4, index: 91};// RNM(space)

  /* wsp */
  this.rules[90].opcodes = [];
  this.rules[90].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[90].opcodes[1] = {type: 4, index: 91};// RNM(space)

  /* space */
  this.rules[91].opcodes = [];
  this.rules[91].opcodes[0] = {type: 1, children: [1,2,3,4]};// ALT
  this.rules[91].opcodes[1] = {type: 6, string: [32]};// TBS
  this.rules[91].opcodes[2] = {type: 6, string: [9]};// TBS
  this.rules[91].opcodes[3] = {type: 4, index: 92};// RNM(comment)
  this.rules[91].opcodes[4] = {type: 4, index: 94};// RNM(LineContinue)

  /* comment */
  this.rules[92].opcodes = [];
  this.rules[92].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[92].opcodes[1] = {type: 6, string: [59]};// TBS
  this.rules[92].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[92].opcodes[3] = {type: 1, children: [4,5]};// ALT
  this.rules[92].opcodes[4] = {type: 5, min: 32, max: 126};// TRG
  this.rules[92].opcodes[5] = {type: 6, string: [9]};// TBS

  /* LineEnd */
  this.rules[93].opcodes = [];
  this.rules[93].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[93].opcodes[1] = {type: 6, string: [13,10]};// TBS
  this.rules[93].opcodes[2] = {type: 6, string: [10]};// TBS
  this.rules[93].opcodes[3] = {type: 6, string: [13]};// TBS

  /* LineContinue */
  this.rules[94].opcodes = [];
  this.rules[94].opcodes[0] = {type: 2, children: [1,5]};// CAT
  this.rules[94].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[94].opcodes[2] = {type: 6, string: [13,10]};// TBS
  this.rules[94].opcodes[3] = {type: 6, string: [10]};// TBS
  this.rules[94].opcodes[4] = {type: 6, string: [13]};// TBS
  this.rules[94].opcodes[5] = {type: 1, children: [6,7]};// ALT
  this.rules[94].opcodes[6] = {type: 6, string: [32]};// TBS
  this.rules[94].opcodes[7] = {type: 6, string: [9]};// TBS

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function(){
    var str = "";
    str += ";\n";
    str += "; ABNF for JavaScript APG 2.0 SABNF\n";
    str += "; RFC 5234 with some restrictions and additions.\n";
    str += "; Updated 11/24/2015 for RFC 7405 case-sensitive literal string notation\n";
    str += ";  - accepts %s\"string\" as a case-sensitive string\n";
    str += ";  - accepts %i\"string\" as a case-insensitive string\n";
    str += ";  - accepts \"string\" as a case-insensitive string\n";
    str += ";\n";
    str += "; Some restrictions:\n";
    str += ";   1. Rules must begin at first character of each line.\n";
    str += ";      Indentations on first rule and rules thereafter are not allowed.\n";
    str += ";   2. Relaxed line endings. CRLF, LF or CR are accepted as valid line ending.\n";
    str += ";   3. Prose values, i.e. <prose value>, are accepted as valid grammar syntax.\n";
    str += ";      However, a working parser cannot be generated from them.\n";
    str += ";\n";
    str += "; Super set (SABNF) additions:\n";
    str += ";   1. Look-ahead (syntactic predicate) operators are accepted as element prefixes.\n";
    str += ";      & is the positive look-ahead operator, succeeds and backtracks if the look-ahead phrase is found\n";
    str += ";      ! is the negative look-ahead operator, succeeds and backtracks if the look-ahead phrase is NOT found\n";
    str += ";      e.g. &%d13 or &rule or !(A / B)\n";
    str += ";   2. User-Defined Terminals (UDT) of the form, u_name and e_name are accepted.\n";
    str += ";      'name' is alpha followed by alpha/num/hyphen just like a rule name.\n";
    str += ";      u_name may be used as an element but no rule definition is given.\n";
    str += ";      e.g. rule = A / u_myUdt\n";
    str += ";           A = \"a\"\n";
    str += ";      would be a valid grammar.\n";
    str += ";   3. Case-sensitive, single-quoted strings are accepted.\n";
    str += ";      e.g. 'abc' would be equivalent to %d97.98.99\n";
    str += ";      (kept for backward compatibility, but superseded by %s\"abc\")  \n";
    str += "; New 12/26/2015\n";
    str += ";   4. Look-behind operators are accepted as element prefixes.\n";
    str += ";      && is the positive look-behind operator, succeeds and backtracks if the look-behind phrase is found\n";
    str += ";      !! is the negative look-behind operator, succeeds and backtracks if the look-behind phrase is NOT found\n";
    str += ";      e.g. &&%d13 or &&rule or !!(A / B)\n";
    str += ";   5. Back reference operators, i.e. \\rulename, are accepted.\n";
    str += ";      A back reference operator acts like a TLS or TBS terminal except that the phrase it attempts\n";
    str += ";      to match is a phrase previously matched by the rule 'rulename'.\n";
    str += ";      There are two modes of previous phrase matching - the parent-frame mode and the universal mode.\n";
    str += ";      In universal mode, \\rulename matches the last match to 'rulename' regardless of where it was found.\n";
    str += ";      In parent-frame mode, \\rulename matches only the last match found on the parent's frame or parse tree level.\n";
    str += ";      Back reference modifiers can be used to specify case and mode.\n";
    str += ";      \\A defaults to case-insensitive and universal mode, e.g. \\A === \\%i%uA\n";
    str += ";      Modifiers %i and %s determine case-insensitive and case-sensitive mode, respectively.\n";
    str += ";      Modifiers %u and %p determine universal mode and parent frame mode, respectively.\n";
    str += ";      Case and mode modifiers can appear in any order, e.g. \\%s%pA === \\%p%sA. \n";
    str += ";   7. String begin anchor, ABG(%^) matches the beginning of the input string location.\n";
    str += ";      Returns EMPTY or NOMATCH. Never consumes any characters.\n";
    str += ";   8. String end anchor, AEN(%$) matches the end of the input string location.\n";
    str += ";      Returns EMPTY or NOMATCH. Never consumes any characters.\n";
    str += ";\n";
    str += "File            = *(BlankLine / Rule / RuleError)\n";
    str += "BlankLine       = *(%d32/%d9) [comment] LineEnd\n";
    str += "Rule            = RuleLookup owsp Alternation ((owsp LineEnd)\n";
    str += "                / (LineEndError LineEnd))\n";
    str += "RuleLookup      = RuleNameTest owsp DefinedAsTest\n";
    str += "RuleNameTest    = RuleName/RuleNameError\n";
    str += "RuleName        = alphanum\n";
    str += "RuleNameError   = 1*(%d33-60/%d62-126)\n";
    str += "DefinedAsTest   = DefinedAs / DefinedAsError\n";
    str += "DefinedAsError  = 1*2%d33-126\n";
    str += "DefinedAs       = IncAlt / Defined\n";
    str += "Defined         = %d61\n";
    str += "IncAlt          = %d61.47\n";
    str += "RuleError       = 1*(%d32-126 / %d9  / LineContinue) LineEnd\n";
    str += "LineEndError    = 1*(%d32-126 / %d9  / LineContinue)\n";
    str += "Alternation     = Concatenation *(owsp AltOp Concatenation)\n";
    str += "Concatenation   = Repetition *(CatOp Repetition)\n";
    str += "Repetition      = [Modifier] (Group / Option / BasicElement / BasicElementErr)\n";
    str += "Modifier        = (Predicate [RepOp])\n";
    str += "                / RepOp\n";
    str += "Predicate       = BkaOp\n";
    str += "                / BknOp\n";
    str += "                / AndOp\n";
    str += "                / NotOp\n";
    str += "BasicElement    = UdtOp\n";
    str += "                / RnmOp\n";
    str += "                / TrgOp\n";
    str += "                / TbsOp\n";
    str += "                / TlsOp\n";
    str += "                / ClsOp\n";
    str += "                / BkrOp\n";
    str += "                / AbgOp\n";
    str += "                / AenOp\n";
    str += "                / ProsVal\n";
    str += "BasicElementErr = 1*(%d33-40/%d42-46/%d48-92/%d94-126)\n";
    str += "Group           = GroupOpen  Alternation (GroupClose / GroupError)\n";
    str += "GroupError      = 1*(%d33-40/%d42-46/%d48-92/%d94-126) ; same as BasicElementErr\n";
    str += "GroupOpen       = %d40 owsp\n";
    str += "GroupClose      = owsp %d41\n";
    str += "Option          = OptionOpen Alternation (OptionClose / OptionError)\n";
    str += "OptionError     = 1*(%d33-40/%d42-46/%d48-92/%d94-126) ; same as BasicElementErr\n";
    str += "OptionOpen      = %d91 owsp\n";
    str += "OptionClose     = owsp %d93\n";
    str += "RnmOp           = alphanum\n";
    str += "BkrOp           = %d92 [bkrModifier] bkr-name\n";
    str += "bkrModifier     = (cs [um / pm]) / (ci [um / pm]) / (um [cs /ci]) / (pm [cs / ci])\n";
    str += "cs              = '%s'\n";
    str += "ci              = '%i'\n";
    str += "um              = '%u'\n";
    str += "pm              = '%p'\n";
    str += "bkr-name        = uname / ename / rname\n";
    str += "rname           = alphanum\n";
    str += "uname           = %d117.95 alphanum\n";
    str += "ename           = %d101.95 alphanum\n";
    str += "UdtOp           = udt-empty\n";
    str += "                / udt-non-empty\n";
    str += "udt-non-empty   = %d117.95 alphanum\n";
    str += "udt-empty       = %d101.95 alphanum\n";
    str += "RepOp           = (rep-min StarOp rep-max)\n";
    str += "                / (rep-min StarOp)\n";
    str += "                / (StarOp rep-max)\n";
    str += "                / StarOp\n";
    str += "                / rep-min-max\n";
    str += "AltOp           = %d47 owsp\n";
    str += "CatOp           = wsp\n";
    str += "StarOp          = %d42\n";
    str += "AndOp           = %d38\n";
    str += "NotOp           = %d33\n";
    str += "BkaOp           = %d38.38\n";
    str += "BknOp           = %d33.33\n";
    str += "AbgOp           = %d37.94\n";
    str += "AenOp           = %d37.36\n";
    str += "TrgOp           = %d37 ((Dec dmin %d45 dmax) / (Hex xmin %d45 xmax) / (Bin bmin %d45 bmax))\n";
    str += "TbsOp           = %d37 ((Dec dString *(%d46 dString)) / (Hex xString *(%d46 xString)) / (Bin bString *(%d46 bString)))\n";
    str += "TlsOp           = TlsCase TlsOpen TlsString TlsClose\n";
    str += "TlsCase         = [\"%i\" / \"%s\"]\n";
    str += "TlsOpen         = %d34\n";
    str += "TlsClose        = %d34\n";
    str += "TlsString       = *(%d32-33/%d35-126/StringTab)\n";
    str += "StringTab       = %d9\n";
    str += "ClsOp           = ClsOpen ClsString ClsClose\n";
    str += "ClsOpen         = %d39\n";
    str += "ClsClose        = %d39\n";
    str += "ClsString       = *(%d32-38/%d40-126/StringTab)\n";
    str += "ProsVal         = ProsValOpen ProsValString ProsValClose\n";
    str += "ProsValOpen     = %d60\n";
    str += "ProsValString   = *(%d32-61/%d63-126/StringTab)\n";
    str += "ProsValClose    = %d62\n";
    str += "rep-min         = rep-num\n";
    str += "rep-min-max     = rep-num\n";
    str += "rep-max         = rep-num\n";
    str += "rep-num         = 1*(%d48-57)\n";
    str += "dString         = dnum\n";
    str += "xString         = xnum\n";
    str += "bString         = bnum\n";
    str += "Dec             = (%d68/%d100)\n";
    str += "Hex             = (%d88/%d120)\n";
    str += "Bin             = (%d66/%d98)\n";
    str += "dmin            = dnum\n";
    str += "dmax            = dnum\n";
    str += "bmin            = bnum\n";
    str += "bmax            = bnum\n";
    str += "xmin            = xnum\n";
    str += "xmax            = xnum\n";
    str += "dnum            = 1*(%d48-57)\n";
    str += "bnum            = 1*%d48-49\n";
    str += "xnum            = 1*(%d48-57 / %d65-70 / %d97-102)\n";
    str += ";\n";
    str += "; Basics\n";
    str += "alphanum        = (%d97-122/%d65-90) *(%d97-122/%d65-90/%d48-57/%d45)\n";
    str += "owsp            = *space\n";
    str += "wsp             = 1*space\n";
    str += "space           = %d32\n";
    str += "                / %d9\n";
    str += "                / comment\n";
    str += "                / LineContinue\n";
    str += "comment         = %d59 *(%d32-126 / %d9)\n";
    str += "LineEnd         = %d13.10\n";
    str += "                / %d10\n";
    str += "                / %d13\n";
    str += "LineContinue    = (%d13.10 / %d10 / %d13) (%d32 / %d9)\n";
    return str;
  }
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* AST translation callback functions used to analyze the lines. */
var apglib = __webpack_require__(0);
var id = apglib.ids;
function semLine(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.endLength = 0;
    data.textLength = 0;
    data.invalidCount = 0;
  } else {
    data.lines.push({
      lineNo : data.lines.length,
      beginChar : phraseIndex,
      length : phraseCount,
      textLength : data.textLength,
      endType : data.endType,
      invalidChars : data.invalidCount
    });
  }
  return id.SEM_OK;
}
function semLineText(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.textLength = phraseCount;
  }
  return id.SEM_OK;
}
function semLastLine(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.endLength = 0;
    data.textLength = 0;
    data.invalidCount = 0;
  } else {
    if(data.strict){
      data.lines.push({
        lineNo : data.lines.length,
        beginChar : phraseIndex,
        length : phraseCount,
        textLength : phraseCount,
        endType : "none",
        invalidChars : data.invalidCount
      });
      data.errors.push({
        line : data.lineNo,
        char : phraseIndex + phraseCount,
        msg : "no line end on last line - strict ABNF specifies CRLF(\\r\\n, \\x0D\\x0A)"
      });
    }else{
      /* add a line ender */
      chars.push(10);
      data.lines.push({
        lineNo : data.lines.length,
        beginChar : phraseIndex,
        length : phraseCount+1,
        textLength : phraseCount,
        endType : "LF",
        invalidChars : data.invalidCount
      });
    }
  }
  return id.SEM_OK;
}
function semInvalid(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.errors.push({
      line : data.lineNo,
      char : phraseIndex,
      msg : "invalid character found '\\x" + apglib.utils.charToHex(chars[phraseIndex]) + "'"
    });
  }
  return id.SEM_OK;
}
function semEnd(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_POST) {
    data.lineNo += 1;
  }
  return id.SEM_OK;
}
function semLF(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.endType = "LF";
    if (data.strict) {
      data.errors.push({
        line : data.lineNo,
        char : phraseIndex,
        msg : "line end character LF(\\n, \\x0A) - strict ABNF specifies CRLF(\\r\\n, \\x0D\\x0A)"
      });
    }
  }
  return id.SEM_OK;
}
function semCR(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.endType = "CR";
    if (data.strict) {
      data.errors.push({
        line : data.lineNo,
        char : phraseIndex,
        msg : "line end character CR(\\r, \\x0D) - strict ABNF specifies CRLF(\\r\\n, \\x0D\\x0A)"
      });
    }
  }
  return id.SEM_OK;
}
function semCRLF(state, chars, phraseIndex, phraseCount, data) {
  if (state == id.SEM_PRE) {
    data.endType = "CRLF";
  }
  return id.SEM_OK;
}
var callbacks = [];
callbacks["line"] = semLine;
callbacks["line-text"] = semLineText;
callbacks["last-line"] = semLastLine;
callbacks["invalid"] = semInvalid;
callbacks["end"] = semEnd;
callbacks["lf"] = semLF;
callbacks["cr"] = semCR;
callbacks["crlf"] = semCRLF;
exports.callbacks = callbacks;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Generated by JavaScript APG, Version [`apg-js2`](https://github.com/ldthomas/apg-js2)
module.exports = function(){
"use strict";
  //```
  // SUMMARY
  //      rules = 10
  //       udts = 0
  //    opcodes = 31
  //        ---   ABNF original opcodes
  //        ALT = 5
  //        CAT = 2
  //        REP = 4
  //        RNM = 11
  //        TLS = 0
  //        TBS = 4
  //        TRG = 5
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  //        BKA = 0
  //        BKN = 0
  //        BKR = 0
  //        ABG = 0
  //        AEN = 0
  // characters = [0 - 4294967295]
  //```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'file', lower: 'file', index: 0, isBkr: false};
  this.rules[1] = {name: 'line', lower: 'line', index: 1, isBkr: false};
  this.rules[2] = {name: 'line-text', lower: 'line-text', index: 2, isBkr: false};
  this.rules[3] = {name: 'last-line', lower: 'last-line', index: 3, isBkr: false};
  this.rules[4] = {name: 'valid', lower: 'valid', index: 4, isBkr: false};
  this.rules[5] = {name: 'invalid', lower: 'invalid', index: 5, isBkr: false};
  this.rules[6] = {name: 'end', lower: 'end', index: 6, isBkr: false};
  this.rules[7] = {name: 'CRLF', lower: 'crlf', index: 7, isBkr: false};
  this.rules[8] = {name: 'LF', lower: 'lf', index: 8, isBkr: false};
  this.rules[9] = {name: 'CR', lower: 'cr', index: 9, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* file */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 2, children: [1,3]};// CAT
  this.rules[0].opcodes[1] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[2] = {type: 4, index: 1};// RNM(line)
  this.rules[0].opcodes[3] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[4] = {type: 4, index: 3};// RNM(last-line)

  /* line */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[1].opcodes[1] = {type: 4, index: 2};// RNM(line-text)
  this.rules[1].opcodes[2] = {type: 4, index: 6};// RNM(end)

  /* line-text */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[2].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[2].opcodes[2] = {type: 4, index: 4};// RNM(valid)
  this.rules[2].opcodes[3] = {type: 4, index: 5};// RNM(invalid)

  /* last-line */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[3].opcodes[1] = {type: 1, children: [2,3]};// ALT
  this.rules[3].opcodes[2] = {type: 4, index: 4};// RNM(valid)
  this.rules[3].opcodes[3] = {type: 4, index: 5};// RNM(invalid)

  /* valid */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[4].opcodes[1] = {type: 5, min: 32, max: 126};// TRG
  this.rules[4].opcodes[2] = {type: 6, string: [9]};// TBS

  /* invalid */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 1, children: [1,2,3,4]};// ALT
  this.rules[5].opcodes[1] = {type: 5, min: 0, max: 8};// TRG
  this.rules[5].opcodes[2] = {type: 5, min: 11, max: 12};// TRG
  this.rules[5].opcodes[3] = {type: 5, min: 14, max: 31};// TRG
  this.rules[5].opcodes[4] = {type: 5, min: 127, max: 4294967295};// TRG

  /* end */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[6].opcodes[1] = {type: 4, index: 7};// RNM(CRLF)
  this.rules[6].opcodes[2] = {type: 4, index: 8};// RNM(LF)
  this.rules[6].opcodes[3] = {type: 4, index: 9};// RNM(CR)

  /* CRLF */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 6, string: [13,10]};// TBS

  /* LF */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 6, string: [10]};// TBS

  /* CR */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 6, string: [13]};// TBS

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function(){
    var str = "";
    str += "file = *line [last-line]\n";
    str += "line = line-text end\n";
    str += "line-text = *(valid/invalid)\n";
    str += "last-line = 1*(valid/invalid)\n";
    str += "valid = %d32-126 / %d9\n";
    str += "invalid = %d0-8 / %d11-12 /%d14-31 / %x7f-ffffffff\n";
    str += "end = CRLF / LF / CR\n";
    str += "CRLF = %d13.10\n";
    str += "LF = %d10\n";
    str += "CR = %d13\n";
    return str;
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// This module reads the input grammar file and does a preliminary analysis
//before attempting to parse it into a grammar object.
// See:<br> `abnf/input-analysis-grammar.bnf`<br>for the grammar file this parser is based on.
//
// It has two primary functions.
// - verify the character codes - no non-printing ASCII characters
// - catalog the lines - create an array with a line object for each line.
// The object carries information about the line number and character length which is used
// by the parser generator primarily for error reporting.
module.exports = function(chars, errors, strict, trace) {
  "use strict";
  var thisFileName = "scanner.js: ";
  var apglib = __webpack_require__(0);
  var grammar = new (__webpack_require__(23))();
  var callbacks = __webpack_require__(22).callbacks;
  
  /* Scan the grammar for character code errors and catalog the lines. */
  var lines = [];
  var parser = new apglib.parser();
  parser.ast = new apglib.ast();
  parser.ast.callbacks = callbacks;
  if (trace) {
    if (trace.traceObject !== "traceObject") {
      throw new TypError(thisFileName + "trace argument is not a trace object");
    }
    parser.trace = trace;
  }

  /* parse the input SABNF grammar */
  var test = parser.parse(grammar, 'file', chars);
  if (test.success !== true) {
    errors.push({
      line : 0,
      char : 0,
      msg : "syntax analysis error analyzing input SABNF grammar"
    });
    return;
  }
  var data = {
    lines : lines,
    lineNo : 0,
    errors : errors,
    strict : (strict ? true : false)
  };

  /* translate (analyze) the input SABNF grammar */
  parser.ast.translate(data);
  return lines;
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// This module has all of the semantic callback functions for the [ABNF for SABNF parser](./abnf-for-sabnf-parser.html).
// See:<br> `abnf/abnf-for-sabnf-grammar.bnf`<br>
//for the grammar file these callback functions are based on.
// These functions are called by the parser's AST translation function (see `apg-lib` documentation).
module.exports = function(grammar) {
  "use strict";
  var apglib = __webpack_require__(0);
  var id = apglib.ids;

  /* Some helper functions. */
  var NameList = function() {
    this.names = [];
    /* Adds a new rule name object to the list. Returns -1 if the name already exists. */
    /* Returns the added name object if the name does not already exist. */
    this.add = function(name) {
      var ret = -1;
      var find = this.get(name);
      if (find === -1) {
        ret = {
          name : name,
          lower : name.toLowerCase(),
          index : this.names.length
        };
        this.names.push(ret);
      }
      return ret;
    }
    /* Brute-force look up. */
    this.get = function(name) {
      var ret = -1;
      var lower = name.toLowerCase();
      for (var i = 0; i < this.names.length; i += 1) {
        if (this.names[i].lower === lower) {
          ret = this.names[i];
          break;
        }
      }
      return ret;
    }
  }
  /* converts text decimal numbers from, e.g. %d99, to an integer */
  var decnum = function(chars, beg, len) {
    var num = 0;
    for (var i = beg; i < beg + len; i += 1) {
      num = 10 * num + chars[i] - 48;
    }
    return num;
  }
  /* converts text binary numbers from, e.g. %b10, to an integer */
  var binnum = function(chars, beg, len) {
    var num = 0;
    for (var i = beg; i < beg + len; i += 1) {
      num = 2 * num + chars[i] - 48;
    }
    return num;
  }
  /* converts text hexidecimal numbers from, e.g. %xff, to an integer */
  var hexnum = function(chars, beg, len) {
    var num = 0;
    for (var i = beg; i < beg + len; i += 1) {
      var digit = chars[i];
      if (digit >= 48 && digit <= 57) {
        digit -= 48;
      } else if (digit >= 65 && digit <= 70) {
        digit -= 55;
      } else if (digit >= 97 && digit <= 102) {
        digit -= 87;
      } else {
        throw "hexnum out of range";
      }
      num = 16 * num + digit;
    }
    return num;
  }

  // This is the prototype for all semantic analysis callback functions.
  //````
  // state - the translator state
  //   id.SEM_PRE for downward (pre-branch) traversal of the AST
  //   id.SEM_POST for upward (post branch) traversal of the AST
  // chars - the array of character codes for the input string
  // phraseIndex - index into the chars array to the first
  //               character of the phrase
  // phraseCount - the number of characters in the phrase
  // data - user-defined data passed to the translator
  //        for use by the callback functions.
  // @return id.SEM_OK, normal return.
  //         id.SEM_SKIP in state id.SEM_PRE will
  //         skip the branch below.
  //         Any thing else is an error which will
  //         stop the translation.
  //````
  /*
  function semCallbackPrototype(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
    }
    return ret;
  }
  */
  // The AST callback functions.
  function semFile(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.ruleNames = new NameList();
      data.udtNames = new NameList();
      data.rules = [];
      data.udts = [];
      data.rulesLineMap = [];
      data.opcodes = [];
      data.altStack = [];
      data.topStack = null;
      data.topRule = null;
    } else if (state == id.SEM_POST) {
      /* validate RNM rule names and set opcode rule index */
      var nameObj;
      data.rules.forEach(function(rule, index) {
        rule.isBkr = false;
        rule.opcodes.forEach(function(op, iop) {
          if (op.type === id.RNM) {
            nameObj = data.ruleNames.get(op.index.name);
            if (nameObj === -1) {
              data.errors.push({
                line : data.findLine(data.lines, op.index.phraseIndex, data.charsLength),
                char : op.index.phraseIndex,
                msg : "Rule name '" + op.index.name + "' used but not defined."
              });
              op.index = -1;
            } else {
              op.index = nameObj.index;
            }
          }
        });
      });
      /* validate BKR rule names and set opcode rule index */
      data.udts.forEach(function(udt) {
        udt.isBkr = false;
      });
      data.rules.forEach(function(rule, index) {
        rule.opcodes.forEach(function(op, iop) {
          if (op.type === id.BKR) {
            rule.hasBkr = true;
            nameObj = data.ruleNames.get(op.index.name);
            if (nameObj !== -1) {
              data.rules[nameObj.index].isBkr = true;
              op.index = nameObj.index;
            } else {
              nameObj = data.udtNames.get(op.index.name);
              if (nameObj !== -1) {
                data.udts[nameObj.index].isBkr = true;
                op.index = data.rules.length + nameObj.index;
              } else {
                data.errors.push({
                  line : data.findLine(data.lines, op.index.phraseIndex, data.charsLength),
                  char : op.index.phraseIndex,
                  msg : "Back reference name '" + op.index.name + "' refers to undefined rule or unamed UDT."
                });
                op.index = -1;
              }
            }
          }
        });
      });
    }
    return ret;
  }
  function semRule(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.altStack.length = 0;
      data.topStack = null;
      data.rulesLineMap.push({
        line : data.findLine(data.lines, phraseIndex, data.charsLength),
        char : phraseIndex,
      });
    } else if (state == id.SEM_POST) {
    }
    return ret;
  }
  function semRuleLookup(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.ruleName = "";
      data.definedas = "";
    } else if (state == id.SEM_POST) {
      var ruleName;
      if (data.definedas === "=") {
        ruleName = data.ruleNames.add(data.ruleName);
        if (ruleName === -1) {
          data.definedas = null;
          data.errors.push({
            line : data.findLine(data.lines, phraseIndex, data.charsLength),
            char : phraseIndex,
            msg : "Rule name '" + data.ruleName + "' previously defined."
          });
        } else {
          /* start a new rule */
          data.topRule = {
            name : ruleName.name,
            lower : ruleName.lower,
            opcodes : [],
            index : ruleName.index
          };
          data.rules.push(data.topRule);
          data.opcodes = data.topRule.opcodes;
        }
      } else {
        ruleName = data.ruleNames.get(data.ruleName);
        if (ruleName === -1) {
          data.definedas = null;
          data.errors.push({
            line : data.findLine(data.lines, phraseIndex, data.charsLength),
            char : phraseIndex,
            msg : "Rule name '" + data.ruleName + "' for incremental alternate not previously defined."
          });
        } else {
          data.topRule = data.rules[ruleName.index];
          data.opcodes = data.topRule.opcodes;
        }
      }
    }
    return ret;
  }
  function semAlternation(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      while (true) {
        if (data.definedas === null) {
          /* rule error - skip opcode generation */
          ret = id.SEM_SKIP;
          break;
        }
        if (data.topStack === null) {
          /* top-level ALT */
          if (data.definedas === "=") {
            /* "=" new rule */
            data.topStack = {
              alt : {
                type : id.ALT,
                children : []
              },
              cat : null
            };
            data.altStack.push(data.topStack);
            data.opcodes.push(data.topStack.alt);
            break
          }
          /* "=/" incremental alternate */
          data.topStack = {
            alt : data.opcodes[0],
            cat : null
          };
          data.altStack.push(data.topStack);
          break;
        }
        /* lower-level ALT */
        data.topStack = {
          alt : {
            type : id.ALT,
            children : []
          },
          cat : null
        };
        data.altStack.push(data.topStack);
        data.opcodes.push(data.topStack.alt);
        break;
      }
    } else if (state == id.SEM_POST) {
      data.altStack.pop();
      if (data.altStack.length > 0) {
        data.topStack = data.altStack[data.altStack.length - 1];
      } else {
        data.topStack = null;
      }
    }
    return ret;
  }
  function semConcatenation(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.topStack.alt.children.push(data.opcodes.length);
      data.topStack.cat = {
        type : id.CAT,
        children : [],
      };
      data.opcodes.push(data.topStack.cat);
    } else if (state == id.SEM_POST) {
      data.topStack.cat = null;
    }
    return ret;
  }
  function semRepetition(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.topStack.cat.children.push(data.opcodes.length);
    } else if (state == id.SEM_POST) {
    }
    return ret;
  }
  function semOptionOpen(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.REP,
        min : 0,
        max : 1,
        char : phraseIndex
      });
    }
    return ret;
  }
  function semRuleName(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.ruleName = apglib.utils.charsToString(chars, phraseIndex, phraseCount);
    } else if (state == id.SEM_POST) {
    }
    return ret;
  }
  function semDefined(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.definedas = "=";
    }
    return ret;
  }
  function semIncAlt(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.definedas = "=/";
    }
    return ret;
  }
  function semRepOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.min = 0;
      data.max = Infinity;
      data.topRep = {
        type : id.REP,
        min : 0,
        max : Infinity,
      };
      data.opcodes.push(data.topRep);
    } else if (state == id.SEM_POST) {
      if (data.min > data.max) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "repetition min cannot be greater than max: min: " + data.min + ": max: " + data.max
        });
      }
      data.topRep.min = data.min;
      data.topRep.max = data.max;
    }
    return ret;
  }
  function semRepMin(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.min = decnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semRepMax(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.max = decnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semRepMinMax(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.max = decnum(chars, phraseIndex, phraseCount);
      data.min = data.max;
    }
    return ret;
  }
  function semAndOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.AND,
      });
    }
    return ret;
  }
  function semNotOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.NOT,
      });
    }
    return ret;
  }
  function semRnmOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.RNM,
        /* NOTE: this is temporary info, index will be replaced with integer later. */
        /* Probably not the best coding practice but here you go. */
        index : {
          phraseIndex : phraseIndex,
          name : apglib.utils.charsToString(chars, phraseIndex, phraseCount)
        }
      });
    }
    return ret;
  }
  function semAbgOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.ABG,
      });
    }
    return ret;
  }
  function semAenOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.AEN,
      });
    }
    return ret;
  }
  function semBkaOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.BKA,
      });
    }
    return ret;
  }
  function semBknOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.BKN,
      });
    }
    return ret;
  }
  function semBkrOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.ci = true; /* default to case insensitive */
      data.cs = false;
      data.um = true;
      data.pm = false;
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.BKR,
        bkrCase : (data.cs === true) ? id.BKR_MODE_CS : id.BKR_MODE_CI,
        bkrMode : (data.pm === true) ? id.BKR_MODE_PM : id.BKR_MODE_UM,
            /* NOTE: this is temporary info, index will be replaced with integer later. */
            /* Probably not the best coding practice but here you go. */
        index : {
          phraseIndex : data.bkrname.phraseIndex,
          name : apglib.utils.charsToString(chars, data.bkrname.phraseIndex, data.bkrname.phraseLength)
        }
      });
    }
    return ret;
  }
  function semBkrCi(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.ci = true;
    }
    return ret;
  }
  function semBkrCs(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.cs = true;
    }
    return ret;
  }
  function semBkrUm(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.um = true;
    }
    return ret;
  }
  function semBkrPm(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.pm = true;
    }
    return ret;
  }
  function semBkrName(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.bkrname = {
        phraseIndex : phraseIndex,
        phraseLength : phraseCount
      };
    }
    return ret;
  }
  function semUdtEmpty(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      var name = apglib.utils.charsToString(chars, phraseIndex, phraseCount);
      var udtName = data.udtNames.add(name);
      if (udtName === -1) {
        udtName = data.udtNames.get(name);
        if (udtName === -1) {
          throw new Error("semUdtEmpty: name look up error");
        }
      } else {
        data.udts.push({
          name : udtName.name,
          lower : udtName.lower,
          index : udtName.index,
          empty : true
        });
      }
      data.opcodes.push({
        type : id.UDT,
        empty : true,
        index : udtName.index,
      });
    }
    return ret;
  }
  function semUdtNonEmpty(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      var name = apglib.utils.charsToString(chars, phraseIndex, phraseCount);
      var udtName = data.udtNames.add(name);
      if (udtName === -1) {
        udtName = data.udtNames.get(name);
        if (udtName === -1) {
          throw new Error("semUdtNonEmpty: name look up error");
        }
      } else {
        data.udts.push({
          name : udtName.name,
          lower : udtName.lower,
          index : udtName.index,
          empty : false
        });
      }
      data.opcodes.push({
        type : id.UDT,
        empty : false,
        index : udtName.index,
        syntax : null,
        semantic : null,
      });
    }
    return ret;
  }
  function semTlsOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.tlscase = true; /* default to case insensitive */
    } else if (state == id.SEM_POST) {
    }
    return ret;
  }
  function semTlsCase(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      if (phraseCount > 0 && (chars[phraseIndex + 1] === 83 || chars[phraseIndex + 1] === 115)) {
        data.tlscase = false; /* set to case sensitive */
      }
    }
    return ret;
  }
  function semTlsString(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      if (data.tlscase) {
        var str = chars.slice(phraseIndex, phraseIndex + phraseCount);
        for (var i = 0; i < str.length; i += 1) {
          if (str[i] >= 65 && str[i] <= 90) {
            str[i] += 32;
          }
        }
        data.opcodes.push({
          type : id.TLS,
          string : str,
        });
      } else {
        data.opcodes.push({
          type : id.TBS,
          string : chars.slice(phraseIndex, (phraseIndex + phraseCount))
        });
      }
    }
    return ret;
  }
  function semClsOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      if (phraseCount <= 2) {
        /* only TLS is allowed to be empty */
        data.opcodes.push({
          type : id.TLS,
          string : []
        });
      } else {
        data.opcodes.push({
          type : id.TBS,
          string : chars.slice((phraseIndex + 1), (phraseIndex + phraseCount - 1))
        });
      }
    }
    return ret;
  }
  function semTbsOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.tbsstr = [];
    } else if (state == id.SEM_POST) {
      data.opcodes.push({
        type : id.TBS,
        string : data.tbsstr,
      });
    }
    return ret;
  }
  function semTrgOp(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
      data.min = 0;
      data.max = 0;
    } else if (state == id.SEM_POST) {
      if (data.min > data.max) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "TRG, (%dmin-max), min cannot be greater than max: min: " + data.min + ": max: " + data.max
        });
      }
      data.opcodes.push({
        type : id.TRG,
        min : data.min,
        max : data.max,
      });
    }
    return ret;
  }
  function semDmin(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.min = decnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semDmax(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.max = decnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semBmin(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.min = binnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semBmax(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.max = binnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semXmin(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.min = hexnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semXmax(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.max = hexnum(chars, phraseIndex, phraseCount);
    }
    return ret;
  }
  function semDstring(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.tbsstr.push(decnum(chars, phraseIndex, phraseCount));
    }
    return ret;
  }
  function semBstring(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.tbsstr.push(binnum(chars, phraseIndex, phraseCount));
    }
    return ret;
  }
  function semXstring(state, chars, phraseIndex, phraseCount, data) {
    var ret = id.SEM_OK;
    if (state == id.SEM_PRE) {
    } else if (state == id.SEM_POST) {
      data.tbsstr.push(hexnum(chars, phraseIndex, phraseCount));
    }
    return ret;
  }
  // Define the callback functions to the AST object.
  this.callbacks = [];
  this.callbacks['abgop'] = semAbgOp;
  this.callbacks['aenop'] = semAenOp;
  this.callbacks['alternation'] = semAlternation;
  this.callbacks['andop'] = semAndOp;
  this.callbacks['bmax'] = semBmax;
  this.callbacks['bmin'] = semBmin;
  this.callbacks['bkaop'] = semBkaOp;
  this.callbacks['bknop'] = semBknOp;
  this.callbacks['bkrop'] = semBkrOp;
  this.callbacks['bkr-name'] = semBkrName;
  this.callbacks['bstring'] = semBstring;
  this.callbacks['clsop'] = semClsOp;
  this.callbacks['ci'] = semBkrCi;
  this.callbacks['cs'] = semBkrCs;
  this.callbacks['um'] = semBkrUm;
  this.callbacks['pm'] = semBkrPm;
  this.callbacks['concatenation'] = semConcatenation;
  this.callbacks['defined'] = semDefined;
  this.callbacks['dmax'] = semDmax;
  this.callbacks['dmin'] = semDmin;
  this.callbacks['dstring'] = semDstring;
  this.callbacks['file'] = semFile;
  this.callbacks['incalt'] = semIncAlt;
  this.callbacks['notop'] = semNotOp;
  this.callbacks['optionopen'] = semOptionOpen;
  this.callbacks['rep-max'] = semRepMax;
  this.callbacks['rep-min'] = semRepMin;
  this.callbacks['rep-min-max'] = semRepMinMax;
  this.callbacks['repetition'] = semRepetition;
  this.callbacks['repop'] = semRepOp;
  this.callbacks['rnmop'] = semRnmOp;
  this.callbacks['rule'] = semRule;
  this.callbacks['rulelookup'] = semRuleLookup;
  this.callbacks['rulename'] = semRuleName;
  this.callbacks['tbsop'] = semTbsOp;
  this.callbacks['tlscase'] = semTlsCase;
  this.callbacks['tlsstring'] = semTlsString;
  this.callbacks['tlsop'] = semTlsOp;
  this.callbacks['trgop'] = semTrgOp;
  this.callbacks['udt-empty'] = semUdtEmpty;
  this.callbacks['udt-non-empty'] = semUdtNonEmpty;
  this.callbacks['xmax'] = semXmax;
  this.callbacks['xmin'] = semXmin;
  this.callbacks['xstring'] = semXstring;
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// This module has all of the syntax callback functions for the [ABNF for SABNF parser](./abnf-for-sabnf-parser.html).
// See:<br> `abnf/abnf-for-sabnf-grammar.bnf`<br>
//for the grammar file these callback functions are based on.
// These functions are called by the parser's RNM operators (see `apg-lib` documentation).
module.exports = function() {
  "use strict";
  var thisFileName = "syntax-callbacks.js: ";
  var apglib = __webpack_require__(0);
  var id = apglib.ids;
  var topAlt;
  /* syntax, RNM, callback functions */
  var synFile = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      data.altStack = [];
      data.repCount = 0;
      break;
    case id.EMPTY:
      data.errors.push({
        line : 0,
        char : 0,
        msg : "grammar file is empty"
      });
      break;
    case id.MATCH:
      if (data.ruleCount === 0) {
        data.errors.push({
          line : 0,
          char : 0,
          msg : "no rules defined"
        });
      }
      break;
    case id.NOMATCH:
      throw new Error(thisFileName + "synFile: grammar file NOMATCH: design error: should never happen.");
    }
  }
  var synRule = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      data.altStack.length = 0;
      topAlt = {
        groupOpen : null,
        groupError : false,
        optionOpen : null,
        optionError : false,
        tlsOpen : null,
        clsOpen : null,
        prosValOpen : null,
        basicError : false
      }
      data.altStack.push(topAlt);
      break;
    case id.EMPTY:
      throw new Error(thisFileName + "synRule: EMPTY: rule cannot be empty");
    case id.NOMATCH:
      break;
    case id.MATCH:
      data.ruleCount += 1;
      break;
    }
  }
  var synRuleError = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      data.errors.push({
        line : data.findLine(data.lines, phraseIndex, data.charsLength),
        char : phraseIndex,
        msg : "Unrecognized SABNF line. Invalid rule, comment or blank line."
      });
      break;
    }
  }
  var synRuleNameError = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      data.errors.push({
        line : data.findLine(data.lines, phraseIndex, data.charsLength),
        char : phraseIndex,
        msg : "Rule names must be alphanum and begin with alphabetic character."
      });
      break;
    }
  }
  var synDefinedAsError = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      data.errors.push({
        line : data.findLine(data.lines, phraseIndex, data.charsLength),
        char : phraseIndex,
        msg : "Expected '=' or '=/'. Not found."
      });
      break;
    }
  }
  var synAndOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "AND operator(&) found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synNotOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "NOT operator(!) found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synBkaOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "Positive look-behind operator(&&) found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synBknOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "Negative look-behind operator(!!) found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synAbgOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "Beginning of string anchor(%^) found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synAenOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "End of string anchor(%$) found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synBkrOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        var name = apglib.utils.charsToString(chars, phraseIndex, result.phraseLength);
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "Back reference operator(" + name + ") found - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synUdtOp = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.strict) {
        var name = apglib.utils.charsToString(chars, phraseIndex, result.phraseLength);
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "UDT operator found("+name+") - strict ABNF specified."
        });
      }
      break;
    }
  }
  var synTlsOpen = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      topAlt.tlsOpen = phraseIndex;
      break;
    }
  }
  var synTlsString = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      data.stringTabChar = false;
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.stringTabChar !== false) {
        data.errors.push({
          line : data.findLine(data.lines, data.stringTabChar),
          char : data.stringTabChar,
          msg : "Tab character (\\t, x09) not allowed in literal string (see 'quoted-string' definition, RFC 7405.)"
        });
      }
      break;
    }
  }
  var synStringTab = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      data.stringTabChar = phraseIndex;
      break;
    }
  }
  var synTlsClose = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      data.errors.push({
        line : data.findLine(data.lines, topAlt.tlsOpen),
        char : topAlt.tlsOpen,
        msg : 'Case-insensitive literal string("...") opened but not closed.'
      });
      topAlt.basicError = true;
      topAlt.tlsOpen = null;
      break;
    case id.MATCH:
      topAlt.tlsOpen = null;
      break;
    }
  }
  var synClsOpen = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      topAlt.clsOpen = phraseIndex;
      break;
    }
  }
  var synClsString = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      data.stringTabChar = false;
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.stringTabChar !== false) {
        data.errors.push({
          line : data.findLine(data.lines, data.stringTabChar),
          char : data.stringTabChar,
          msg : "Tab character (\\t, x09) not allowed in literal string."
        });
      }
      break;
    }
  }
  var synClsClose = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      data.errors.push({
        line : data.findLine(data.lines, topAlt.clsOpen),
        char : topAlt.clsOpen,
        msg : "Case-sensitive literal string('...') opened but not closed."
      });
      topAlt.clsOpen = null;
      topAlt.basicError = true;
      break;
    case id.MATCH:
      if (data.strict) {
        data.errors.push({
          line : data.findLine(data.lines, topAlt.clsOpen),
          char : topAlt.clsOpen,
          msg : "Case-sensitive string operator('...') found - strict ABNF specified."
        });
      }
      topAlt.clsOpen = null;
      break;
    }
  }
  var synProsValOpen = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      topAlt.prosValOpen = phraseIndex;
      break;
    }
  }
  var synProsValString = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      data.stringTabChar = false;
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (data.stringTabChar !== false) {
        data.errors.push({
          line : data.findLine(data.lines, data.stringTabChar),
          char : data.stringTabChar,
          msg : "Tab character (\\t, x09) not allowed in prose value string."
        });
      }
      break;
    }
  }
  var synProsValClose = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      data.errors.push({
        line : data.findLine(data.lines, topAlt.prosValOpen),
        char : topAlt.prosValOpen,
        msg : "Prose value operator(<...>) opened but not closed."
      });
      topAlt.basicError = true;
      topAlt.prosValOpen = null;
      break;
    case id.MATCH:
      data.errors
          .push({
            line : data.findLine(data.lines, topAlt.prosValOpen),
            char : topAlt.prosValOpen,
            msg : "Prose value operator(<...>) found. The ABNF syntax is valid, but a parser cannot be generated from this grammar."
          });
      topAlt.prosValOpen = null;
      break;
    }
  }
  var synGroupOpen = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      topAlt = {
        groupOpen : phraseIndex,
        groupError : false,
        optionOpen : null,
        optionError : false,
        tlsOpen : null,
        clsOpen : null,
        prosValOpen : null,
        basicError : false
      }
      data.altStack.push(topAlt);
      break;
    }
  }
  var synGroupClose = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      data.errors.push({
        line : data.findLine(data.lines, topAlt.groupOpen),
        char : topAlt.groupOpen,
        msg : "Group \"(...)\" opened but not closed."
      });
      topAlt = data.altStack.pop();
      topAlt.groupError = true;
      break;
    case id.MATCH:
      topAlt = data.altStack.pop();
      break;
    }
  }
  var synOptionOpen = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      topAlt = {
        groupOpen : null,
        groupError : false,
        optionOpen : phraseIndex,
        optionError : false,
        tlsOpen : null,
        clsOpen : null,
        prosValOpen : null,
        basicError : false
      }
      data.altStack.push(topAlt);
      break;
    }
  }
  var synOptionClose = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      data.errors.push({
        line : data.findLine(data.lines, topAlt.optionOpen),
        char : topAlt.optionOpen,
        msg : "Option \"[...]\" opened but not closed."
      });
      topAlt = data.altStack.pop();
      topAlt.optionError = true;
      break;
    case id.MATCH:
      topAlt = data.altStack.pop();
      break;
    }
  }
  var synBasicElementError = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if (topAlt.basicError === false) {
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "Unrecognized SABNF element."
        });
      }
      break;
    }
  }
  var synLineEnd = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      if(result.phraseLength === 1 && data.strict){
        var end = (chars[phraseIndex] === 13) ? "CR" : "LF";
        data.errors.push({
          line : data.findLine(data.lines, phraseIndex, data.charsLength),
          char : phraseIndex,
          msg : "Line end '"+end+"' found - strict ABNF specified, only CRLF allowed."
        });
      }
      break;
    }
  }
  var synLineEndError = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      break;
    case id.MATCH:
      data.errors.push({
        line : data.findLine(data.lines, phraseIndex, data.charsLength),
        char : phraseIndex,
        msg : "Unrecognized grammar element or characters."
      });
      break;
    }
  }
  var synRepetition = function(result, chars, phraseIndex, data) {
    switch (result.state) {
    case id.ACTIVE:
      break;
    case id.EMPTY:
      break;
    case id.NOMATCH:
      data.repCount += 1;
      break;
    case id.MATCH:
      data.repCount += 1;
      break;
    }
  }
  // Define the list of callback functions.
  this.callbacks = [];
  this.callbacks['andop'] = synAndOp;
  this.callbacks['basicelementerr'] = synBasicElementError;
  this.callbacks['clsclose'] = synClsClose;
  this.callbacks['clsopen'] = synClsOpen;
  this.callbacks['clsstring'] = synClsString;
  this.callbacks['definedaserror'] = synDefinedAsError;
  this.callbacks['file'] = synFile;
  this.callbacks['groupclose'] = synGroupClose;
  this.callbacks['groupopen'] = synGroupOpen;
  this.callbacks['lineenderror'] = synLineEndError;
  this.callbacks['lineend'] = synLineEnd;
  this.callbacks['notop'] = synNotOp;
  this.callbacks['optionclose'] = synOptionClose;
  this.callbacks['optionopen'] = synOptionOpen;
  this.callbacks['prosvalclose'] = synProsValClose;
  this.callbacks['prosvalopen'] = synProsValOpen;
  this.callbacks['prosvalstring'] = synProsValString;
  this.callbacks['repetition'] = synRepetition;
  this.callbacks['rule'] = synRule;
  this.callbacks['ruleerror'] = synRuleError;
  this.callbacks['rulenameerror'] = synRuleNameError;
  this.callbacks['stringtab'] = synStringTab;
  this.callbacks['tlsclose'] = synTlsClose;
  this.callbacks['tlsopen'] = synTlsOpen;
  this.callbacks['tlsstring'] = synTlsString;
  this.callbacks['udtop'] = synUdtOp;
  this.callbacks['bkaop'] = synBkaOp;
  this.callbacks['bknop'] = synBknOp;
  this.callbacks['bkrop'] = synBkrOp;
  this.callbacks['abgop'] = synAbgOp;
  this.callbacks['aenop'] = synAenOp;
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// This module exposes the public encoding, decoding and conversion functions.
// Its private functions provide the disassembling and interpetation of the source and destination encoding types.
// In the case of Unicode encodings, private functions determine the presence of Byte Order Marks (BOMs), if any.
//
// Throws "TypeError" exceptions on input errors.
//
"use strict;"
var _this = this;
var trans = __webpack_require__(6);

/* types */
var UTF8     = "UTF8";
var UTF16    = "UTF16";
var UTF16BE  = "UTF16BE";
var UTF16LE  = "UTF16LE";
var UTF32    = "UTF32";
var UTF32BE  = "UTF32BE";
var UTF32LE  = "UTF32LE";
var UINT7    = "UINT7";
var ASCII    = "ASCII";
var BINARY   = "BINARY";
var UINT8    = "UINT8";
var UINT16   = "UINT16";
var UINT16LE = "UINT16LE";
var UINT16BE = "UINT16BE";
var UINT32   = "UINT32";
var UINT32LE = "UINT32LE";
var UINT32BE = "UINT32BE";
var ESCAPED  = "ESCAPED";
var STRING   = "STRING";

/* private functions */
// Find the UTF8 BOM, if any.
var bom8 = function(src) {
  src.type = UTF8;
  var buf = src.data;
  src.bom = 0;
  if(buf.length >= 3){
    if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
      src.bom = 3;
    }
  }
}
// Find the UTF16 BOM, if any, and determine the UTF16 type.
// Defaults to UTF16BE.
// Throws TypeError exception if BOM does not match the specified type.
var bom16 = function(src) {
  var buf = src.data;
  src.bom = 0;
  switch (src.type) {
  case UTF16:
    src.type = UTF16BE;
    if(buf.length >= 2){
      if (buf[0] === 0xFE && buf[1] === 0xFF) {
        src.bom = 2;
      }else if (buf[0] === 0xFF && buf[1] === 0xFE) {
        src.type = UTF16LE;
        src.bom = 2;
      }
    }
    break;
  case UTF16BE:
    src.type = UTF16BE;
    if(buf.length >= 2){
      if (buf[0] === 0xFE && buf[1] === 0xFF) {
        src.bom = 2;
      }else if (buf[0] === 0xFF && buf[1] === 0xFE) {
        throw new TypeError('src type: "' + UTF16BE + '" specified but BOM is for "' + UTF16LE + '"');
      }
    }
    break;
  case UTF16LE:
    src.type = UTF16LE;
    if(buf.length >= 0){
      if (buf[0] === 0xFE && buf[1] === 0xFF) {
        throw new TypeError('src type: "' + UTF16LE + '" specified but BOM is for "' + UTF16BE + '"');
      }else if (buf[0] === 0xFF && buf[1] === 0xFE) {
        src.bom = 2;
      }
    }
    break;
  default:
    throw new TypeError('UTF16 BOM: src type "' + src.type + '" unrecognized');
  }
}
//Find the UTF32 BOM, if any, and determine the UTF32 type.
//Defaults to UTF32BE.
//Throws exception if BOM does not match the specified type.
var bom32 = function(src) {
  var buf = src.data;
  src.bom = 0;
  switch (src.type) {
  case UTF32:
    src.type = UTF32BE;
    if(buf.length >= 4){
      if (buf[0] === 0 && buf[1] === 0 && buf[2] === 0xFE && buf[3] === 0xFF) {
        src.bom = 4;
      }
      if (buf[0] === 0xFF && buf[1] === 0xFE && buf[2] === 0 && buf[3] === 0) {
        src.type = UTF32LE;
        src.bom = 4;
      }
    }
    break;
  case UTF32BE:
    src.type = UTF32BE;
    if(buf.length >= 4){
      if (buf[0] === 0 && buf[1] === 0 && buf[2] === 0xFE && buf[3] === 0xFF) {
        src.bom = 4;
      }
      if (buf[0] === 0xFF && buf[1] === 0xFE && buf[2] === 0 && buf[3] === 0) {
        throw new TypeError('src type: ' + UTF32BE + ' specified but BOM is for ' + UTF32LE + '"');
      }
    }
    break;
  case UTF32LE:
    src.type = UTF32LE;
    if(buf.length >= 4){
      if (buf[0] === 0 && buf[1] === 0 && buf[2] === 0xFE && buf[3] === 0xFF) {
        throw new TypeError('src type: "' + UTF32LE + '" specified but BOM is for "' + UTF32BE + '"');
      }
      if (buf[0] === 0xFF && buf[1] === 0xFE && buf[2] === 0 && buf[3] === 0) {
        src.bom = 4;
      }
    }
    break;
  default:
    throw new TypeError('UTF32 BOM: src type "' + src.type + '" unrecognized');
  }
}
// Validates the source encoding type and matching data.
// If the BASE64: prefix is present, the base 64 decoding is done here as the initial step.
// - For type STRING, data must be a JavaScript string.
// - For type BASE64:*, data may be a string or Buffer.
// - For all other types, data must be a Buffer.
// - The BASE64: prefix is not allowed for type STRING.
var validateSrc = function(type, data){
  function getType(type){
    var ret = {
        type: "",
        base64: false
    }
    var rx = /^(base64:)?([a-zA-Z0-9]+)$/i;
    var result = rx.exec(type);
    if (result) {
      if (result[2]) {
        ret.type = result[2].toUpperCase();
      }
      if (result[1]) {
        ret.base64 = true;
      }
    }
    return ret;
  }
  if (typeof(type) !== "string" || type === "") {
    throw new TypeError('type: "' + type + '" not recognized');
  }
  var ret = getType(type.toUpperCase());
  if(ret.base64){
    /* handle base 64 */
    if(ret.type === STRING){
      throw new TypeError('type: "' + type + ' "BASE64:" prefix not allowed with type '+STRING);
    }
    if(Buffer.isBuffer(data)){
      ret.data = trans.base64.decode(data);
    }else if(typeof(data) === "string"){
      var buf = Buffer.from(data, "ascii");
      ret.data = trans.base64.decode(buf);
    }else{
      throw new TypeError('type: "' + type + ' unrecognized data type: typeof(data): ' + typeof(data));
    }
  }else{
    ret.data = data;
  }
  switch (ret.type) {
  case UTF8:
    bom8(ret);
    break;
  case UTF16:
  case UTF16BE:
  case UTF16LE:
    bom16(ret);
    break;
  case UTF32:
  case UTF32BE:
  case UTF32LE:
    bom32(ret);
    break;
  case UINT16:
    ret.type = UINT16BE;
    break;
  case UINT32:
    ret.type = UINT32BE;
    break;
  case ASCII:
    ret.type = UINT7;
    break;
  case BINARY:
    ret.type = UINT8;
    break;
  case UINT7:
  case UINT8:
  case UINT16LE:
  case UINT16BE:
  case UINT32LE:
  case UINT32BE:
  case STRING:
  case ESCAPED:
    break;
  default:
    throw new TypeError('type: "' + type + '" not recognized');
  }
  if(ret.type === STRING){
    if(typeof(ret.data) !== "string"){
      throw new TypeError('type: "' + type + '" but data is not a string');
    }
  }else{
    if(!Buffer.isBuffer(ret.data)){
      throw new TypeError('type: "' + type + '" but data is not a Buffer');
    }
  }
  return ret;
}
// Disassembles and validates the destination type.
// `chars` must be an Array of integers.
// The :BASE64 suffix is not allowed for type STRING.
var validateDst = function(type, chars){
  function getType(type){
    var fix, rem;
    var ret = {
        crlf: false,
        lf: false,
        base64: false,
        type: ""
    }
    /*prefix, if any */
    while(true){
      rem = type;
      fix = type.slice(0, 5);
      if(fix === "CRLF:"){
        ret.crlf = true;
        rem = type.slice(5);
        break;
      }
      fix = type.slice(0, 3);
      if(fix === "LF:"){
        ret.lf = true;
        rem = type.slice(3);
        break;
      }
      break;
    }
    /*suffix, if any */
    fix = rem.split(":");
    if(fix.length === 1){
      ret.type = fix[0];
      
    }else if(fix.length === 2 && fix[1] === "BASE64"){
      ret.base64 = true;
      ret.type = fix[0];
    }
    return ret;
  }
  if(!Array.isArray(chars)){
    throw new TypeError('dst chars: not array: "' + typeof(chars));
  }
  if (typeof(type) !== "string") {
    throw new TypeError('dst type: not string: "' + typeof(type));
  }
  ret = getType(type.toUpperCase());
  switch (ret.type) {
  case UTF8:
  case UTF16BE:
  case UTF16LE:
  case UTF32BE:
  case UTF32LE:
  case UINT7:
  case UINT8:
  case UINT16LE:
  case UINT16BE:
  case UINT32LE:
  case UINT32BE:
  case ESCAPED:
    break;
  case STRING:
    if(ret.base64){
      throw new TypeError('":BASE64" suffix not allowed with type '+STRING);
    }
    break;
  case ASCII:
    ret.type = UINT7;
    break;
  case BINARY:
    ret.type = UINT8;
    break;
  case UTF16:
    ret.type = UTF16BE;
    break;
  case UTF32:
    ret.type = UTF32BE;
    break;
  case UINT16:
    ret.type = UINT16BE;
    break;
  case UINT32:
    ret.type = UINT32BE;
    break;
  default:
    throw new TypeError('dst type unrecognized: "' + type + '" : must have form [crlf:|lf:]type[:base64]');
  }
  return ret;
}
// Select and call the requested encoding function.
var encode = function(type, chars){
  switch(type){
  case UTF8:
    return trans.utf8.encode(chars);
  case UTF16BE:
    return trans.utf16be.encode(chars);
  case UTF16LE:
    return trans.utf16le.encode(chars);
  case UTF32BE:
    return trans.utf32be.encode(chars);
  case UTF32LE:
    return trans.utf32le.encode(chars);
  case UINT7:
    return trans.uint7.encode(chars);
  case UINT8:
    return trans.uint8.encode(chars);
  case UINT16BE:
    return trans.uint16be.encode(chars);
  case UINT16LE:
    return trans.uint16le.encode(chars);
  case UINT32BE:
    return trans.uint32be.encode(chars);
  case UINT32LE:
    return trans.uint32le.encode(chars);
  case STRING:
    return trans.string.encode(chars);
  case ESCAPED:
    return trans.escaped.encode(chars);
  default:
    throw new TypeError('encode type "'+type+'" not recognized')
  }
}
// Select and call the requested decoding function.
// `src` contains BOM information as well as the source type and data.
var decode = function(src){
  switch(src.type){
  case UTF8:
    return trans.utf8.decode(src.data, src.bom);
  case UTF16LE:
    return trans.utf16le.decode(src.data, src.bom);
  case UTF16BE:
    return trans.utf16be.decode(src.data, src.bom);
  case UTF32BE:
    return trans.utf32be.decode(src.data, src.bom);
  case UTF32LE:
    return trans.utf32le.decode(src.data, src.bom);
  case UINT7:
    return trans.uint7.decode(src.data);
  case UINT8:
    return trans.uint8.decode(src.data);
  case UINT16BE:
    return trans.uint16be.decode(src.data);
  case UINT16LE:
    return trans.uint16le.decode(src.data);
  case UINT32BE:
    return trans.uint32be.decode(src.data);
  case UINT32LE:
    return trans.uint32le.decode(src.data);
  case STRING:
    return trans.string.decode(src.data);
  case ESCAPED:
    return trans.escaped.decode(src.data);
  default:
    throw new TypeError('decode type "'+src.type+'" not recognized')
  }
}

// The public decoding function. Returns an array of integers.
exports.decode = function(type, data) {
  var src = validateSrc(type, data);
  return decode(src);
}
// The public encoding function. Returns a Buffer-typed byte array.
exports.encode = function(type, chars) {
  var c, buf;
  var dst = validateDst(type, chars);
  if(dst.crlf){
    /* prefix with CRLF line end conversion, don't contaminate caller's chars array */
    c = trans.lineEnds.crlf(chars);
    buf = encode(dst.type, c);
  }else if(dst.lf){
    /* prefix with LF line end conversion, don't contaminate caller's chars array */
    c = trans.lineEnds.lf(chars);
    buf = encode(dst.type, c);
  }else{
    buf = encode(dst.type, chars);
  }
  if(dst.base64){
    /* post base 64 encoding */
    buf = trans.base64.encode(buf);
  }
  return buf;
}
// Converts data of type `srcType` to data of type `dstType`.
// `srcData` may be a JavaScript String, or node.js Buffer, depending on the corresponding type.
exports.convert = function(srcType, srcData, dstType) {
  return _this.encode(dstType, _this.decode(srcType, srcData));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// This module implements the `exec()` function.
"use strict;"
var funcs = __webpack_require__(7);
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
      var ret = parserResult.index;
      /* bump-along mode - increment is never zero */
      ret += (parserResult.length > 0) ? parserResult.length : 1;
      return ret;
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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
  var grammar = new (__webpack_require__(31))();
  var apglib = __webpack_require__(0);
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

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// Generated by JavaScript APG, Version [`apg-js2`](https://github.com/ldthomas/apg-js2)
module.exports = function(){
"use strict";
  //```
  // SUMMARY
  //      rules = 11
  //       udts = 0
  //    opcodes = 39
  //        ---   ABNF original opcodes
  //        ALT = 4
  //        CAT = 4
  //        REP = 4
  //        RNM = 12
  //        TLS = 7
  //        TBS = 2
  //        TRG = 6
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  //        BKA = 0
  //        BKN = 0
  //        BKR = 0
  //        ABG = 0
  //        AEN = 0
  // characters = [10 - 65535]
  //```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'rule', lower: 'rule', index: 0, isBkr: false};
  this.rules[1] = {name: 'error', lower: 'error', index: 1, isBkr: false};
  this.rules[2] = {name: 'escape', lower: 'escape', index: 2, isBkr: false};
  this.rules[3] = {name: 'match', lower: 'match', index: 3, isBkr: false};
  this.rules[4] = {name: 'prefix', lower: 'prefix', index: 4, isBkr: false};
  this.rules[5] = {name: 'suffix', lower: 'suffix', index: 5, isBkr: false};
  this.rules[6] = {name: 'xname', lower: 'xname', index: 6, isBkr: false};
  this.rules[7] = {name: 'name', lower: 'name', index: 7, isBkr: false};
  this.rules[8] = {name: 'alpha', lower: 'alpha', index: 8, isBkr: false};
  this.rules[9] = {name: 'digit', lower: 'digit', index: 9, isBkr: false};
  this.rules[10] = {name: 'any-other', lower: 'any-other', index: 10, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* rule */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[1] = {type: 2, children: [2,4]};// CAT
  this.rules[0].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[3] = {type: 4, index: 10};// RNM(any-other)
  this.rules[0].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[5] = {type: 1, children: [6,7,8,9,10,11]};// ALT
  this.rules[0].opcodes[6] = {type: 4, index: 2};// RNM(escape)
  this.rules[0].opcodes[7] = {type: 4, index: 3};// RNM(match)
  this.rules[0].opcodes[8] = {type: 4, index: 4};// RNM(prefix)
  this.rules[0].opcodes[9] = {type: 4, index: 5};// RNM(suffix)
  this.rules[0].opcodes[10] = {type: 4, index: 6};// RNM(xname)
  this.rules[0].opcodes[11] = {type: 4, index: 1};// RNM(error)

  /* error */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[1].opcodes[1] = {type: 7, string: [36]};// TLS
  this.rules[1].opcodes[2] = {type: 4, index: 10};// RNM(any-other)

  /* escape */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 7, string: [36,36]};// TLS

  /* match */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 7, string: [36,38]};// TLS

  /* prefix */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 7, string: [36,96]};// TLS

  /* suffix */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 7, string: [36,39]};// TLS

  /* xname */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[6].opcodes[1] = {type: 7, string: [36,123]};// TLS
  this.rules[6].opcodes[2] = {type: 4, index: 7};// RNM(name)
  this.rules[6].opcodes[3] = {type: 7, string: [125]};// TLS

  /* name */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[7].opcodes[1] = {type: 4, index: 8};// RNM(alpha)
  this.rules[7].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[7].opcodes[3] = {type: 1, children: [4,5,6,7]};// ALT
  this.rules[7].opcodes[4] = {type: 4, index: 8};// RNM(alpha)
  this.rules[7].opcodes[5] = {type: 4, index: 9};// RNM(digit)
  this.rules[7].opcodes[6] = {type: 6, string: [45]};// TBS
  this.rules[7].opcodes[7] = {type: 6, string: [95]};// TBS

  /* alpha */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[8].opcodes[1] = {type: 5, min: 97, max: 122};// TRG
  this.rules[8].opcodes[2] = {type: 5, min: 65, max: 90};// TRG

  /* digit */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  /* any-other */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[10].opcodes[1] = {type: 5, min: 32, max: 35};// TRG
  this.rules[10].opcodes[2] = {type: 5, min: 37, max: 65535};// TRG
  this.rules[10].opcodes[3] = {type: 5, min: 10, max: 13};// TRG

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function(){
    var str = "";
    str += ";\n";
    str += "; SABNF grammar for parsing out the replacement string parameters\n";
    str += ";\n";
    str += "rule = *(*any-other [(escape / match / prefix/ suffix/ xname / error)])\n";
    str += "error = \"$\" any-other\n";
    str += "escape = \"$$\"\n";
    str += "match  = \"$&\"\n";
    str += "prefix = \"$`\"\n";
    str += "suffix = \"$'\"\n";
    str += "xname = \"${\" name \"}\"\n";
    str += "name = alpha *(alpha/digit/%d45/%d95)\n";
    str += "alpha = %d97-122 / %d65-90\n";
    str += "digit = %d48-57\n";
    str += "any-other = %x20-23 / %x25-FFFF / %xA-D\n";
    return str;
  }
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// This module implements the `replace()` function.
"use strict;"
var errorName = "apg-exp: replace(): ";
var parseReplacementString = __webpack_require__(30);
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


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

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
  var api = __webpack_require__(15);
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

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// This module implements the `split()` function.
"use strict;"
/* called by split() to split the string */
exports.split = function(p, str, limit) {
  var exp = p._this;
  var result, endi, beg, end, last;
  var phrases = [];
  var splits = [];
  var count = 0;
  exp.lastIndex = 0;
  while (true) {
    last = exp.lastIndex;
    result = exp.exec(str);
    if (result === null) {
      break;
    }
    phrases.push({
      phrase : result[0],
      index : result.index
    });
    /* ignore flags, uses bump-along mode (increment one character on empty string matches) */
    if (result[0].length === 0) {
      exp.lastIndex = last + 1;
    } else {
      exp.lastIndex = result.index + result[0].length;
    }
    count += 1;
    if (count > limit) {
      break;
    }
  }
  if (phrases.length === 0) {
    /* no phrases found, return array with the original string */
    return [ str.slice(0) ];
  }
  if (phrases.length === 1 || phrases[0].phrase.length === str.length) {
    /* one phrase found and it is the entire string */
    return [ "" ];
  }
  /* first segment, if any */
  if (phrases[0].index > 0) {
    beg = 0;
    end = phrases[0].index;
    splits.push(str.slice(beg, end));
  }
  /* middle segments, if any */
  endi = phrases.length - 1;
  for (var i = 0; i < endi; i++) {
    beg = phrases[i].index + phrases[i].phrase.length;
    end = phrases[i + 1].index;
    splits.push(str.slice(beg, end));
  }
  /* last segment, if any */
  last = phrases[phrases.length - 1];
  beg = last.index + last.phrase.length;
  if (beg < str.length) {
    end = str.length;
    splits.push(str.slice(beg, end));
  }
  return splits;
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  this.ApgExp = __webpack_require__(10);
  this.apglib = __webpack_require__(0);
})()


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// This module is used by the parser to build an [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST).
// The AST can be thought of as a subset of the full parse tree.
// Each node of the AST holds the phrase that was matched at the corresponding, named parse tree node.
// It is built as the parser successfully matches phrases to the rule names
// (`RNM` operators) and `UDT`s as it parses an input string.
// The user controls which `RNM` or `UDT` names to keep on the AST.
// The user can also associate callback functions with some or all of the retained
// AST nodes to be used to translate the node phrases. That is, associate semantic
// actions to the matched phrases.
// Translating the AST rather that attempting to apply semantic actions during
// the parsing process, has the advantage that there is no backtracking and that the phrases
// are known while traversing down tree as will as up.
//
// Let `ast` be an `ast.js` object. To identify a node to be kept on the AST:
//```
// ast.callbacks["rulename"] = true; (all nodes default to false)
//```
// To associate a callback function with a node:
//```
// ast.callbacks["rulename"] = fn
//```
// `rulename` is any `RNM` or `UDT` name defined by the associated grammar
// and `fn` is a user-written callback function.
// (See [`apg-examples`](https://github.com/ldthomas/apg-js2-examples/tree/master/ast) for examples of how to create an AST,
// define the nodes and callback functions and attach it to a parser.)
module.exports = function() {
  "use strict";
  var thisFileName = "ast.js: ";
  var id = __webpack_require__(1);
  var utils = __webpack_require__(2);
  var that = this;
  var rules = null;
  var udts = null;
  var chars = null;
  var nodeCount = 0;
  var nodesDefined = [];
  var nodeCallbacks = [];
  var stack = [];
  var records = [];
  this.callbacks = [];
  this.astObject = "astObject";
  /* called by the parser to initialize the AST with the rules, UDTs and the input characters */
  this.init = function(rulesIn, udtsIn, charsIn) {
    stack.length = 0;
    records.length = 0;
    nodesDefined.length = 0;
    nodeCount = 0;
    rules = rulesIn;
    udts = udtsIn;
    chars = charsIn;
    var i, list = [];
    for (i = 0; i < rules.length; i += 1) {
      list.push(rules[i].lower);
    }
    for (i = 0; i < udts.length; i += 1) {
      list.push(udts[i].lower);
    }
    nodeCount = rules.length + udts.length;
    for (i = 0; i < nodeCount; i += 1) {
      nodesDefined[i] = false;
      nodeCallbacks[i] = null;
    }
    for ( var index in that.callbacks) {
      var lower = index.toLowerCase();
      i = list.indexOf(lower);
      if (i < 0) {
        throw new Error(thisFileName + "init: " + "node '" + index + "' not a rule or udt name");
      }
      if (typeof (that.callbacks[index]) === "function") {
        nodesDefined[i] = true;
        nodeCallbacks[i] = that.callbacks[index];
      }
      if (that.callbacks[index] === true) {
        nodesDefined[i] = true;
      }
    }
  }
  /* AST node definitions - called by the parser's `RNM` operator */
  this.ruleDefined = function(index) {
    return nodesDefined[index] === false ? false : true;
  }
  /* AST node definitions - called by the parser's `UDT` operator */
  this.udtDefined = function(index) {
    return nodesDefined[rules.length + index] === false ? false : true;
  }
  /* called by the parser's `RNM` & `UDT` operators */
  /* builds a record for the downward traversal of the node */
  this.down = function(callbackIndex, name) {
    var thisIndex = records.length;
    stack.push(thisIndex);
    records.push({
      name : name,
      thisIndex : thisIndex,
      thatIndex : null,
      state : id.SEM_PRE,
      callbackIndex : callbackIndex,
      phraseIndex : null,
      phraseLength : null,
      stack : stack.length
    });
    return thisIndex;
  };
  /* called by the parser's `RNM` & `UDT` operators */
  /* builds a record for the upward traversal of the node */
  this.up = function(callbackIndex, name, phraseIndex, phraseLength) {
    var thisIndex = records.length;
    var thatIndex = stack.pop();
    records.push({
      name : name,
      thisIndex : thisIndex,
      thatIndex : thatIndex,
      state : id.SEM_POST,
      callbackIndex : callbackIndex,
      phraseIndex : phraseIndex,
      phraseLength : phraseLength,
      stack : stack.length
    });
    records[thatIndex].thatIndex = thisIndex;
    records[thatIndex].phraseIndex = phraseIndex;
    records[thatIndex].phraseLength = phraseLength;
    return thisIndex;
  };
  // Called by the user to translate the AST.
  // Translate means to associate or apply some semantic action to the
  // phrases that were syntactically matched to the AST nodes according
  // to the defining grammar.
  //```
  // data - optional user-defined data
  //        passed to the callback functions by the translator
  //```
  this.translate = function(data) {
    var ret, callback, record;
    for (var i = 0; i < records.length; i += 1) {
      record = records[i];
      callback = nodeCallbacks[record.callbackIndex];
      if (record.state === id.SEM_PRE) {
        if (callback !== null) {
          ret = callback(id.SEM_PRE, chars, record.phraseIndex, record.phraseLength, data);
          if (ret === id.SEM_SKIP) {
            i = record.thatIndex;
          }
        }
      } else {
        if (callback !== null) {
          callback(id.SEM_POST, chars, record.phraseIndex, record.phraseLength, data);
        }
      }
    }
  }
  /* called by the parser to reset the length of the records array */
  /* necessary on backtracking */
  this.setLength = function(length) {
    records.length = length;
    if (length > 0) {
      stack.length = records[length - 1].stack;
    } else {
      stack.length = 0;
    }
  };
  /* called by the parser to get the length of the records array */
  this.getLength = function() {
    return records.length;
  };
  /* helper for XML display */
  function indent(n) {
    var ret = "";
    for (var i = 0; i < n; i += 1) {
      ret += " ";
    }
    return ret;
  }
  // Generate an `XML` version of the AST.
  // Useful if you want to use a special or favorite XML parser to translate the
  // AST.
  //```
  // mode - the display mode of the captured phrases
  //      - default mode is "ascii"
  //      - can be: "ascii"
  //                "decimal"
  //                "hexidecimal"
  //                "unicode"
  //```
  this.toXml = function(mode) {
    var display = utils.charsToDec;
    var caption = "decimal integer character codes";
    if (typeof (mode) === "string" && mode.length >= 3) {
      mode = mode.slice(0, 3).toLowerCase();
      if (mode === "asc") {
        display = utils.charsToAscii;
        caption = "ASCII for printing characters, hex for non-printing";
      } else if (mode === "hex") {
        display = utils.charsToHex;
        caption = "hexidecimal integer character codes"
      } else if (mode === "uni") {
        display = utils.charsToUnicode;
        caption = "Unicode UTF-32 integer character codes"
      }
    }
    var xml = "";
    var depth = 0;
    xml += '<?xml version="1.0" encoding="utf-8"?>\n';
    xml += '<root nodes="' + records.length / 2 + '" characters="' + chars.length + '">\n';
    xml += '<!-- input string, '+caption+' -->\n';
    xml += indent(depth + 2);
    xml += display(chars);
    xml += "\n";
    records.forEach(function(rec, index) {
      if (rec.state === id.SEM_PRE) {
        depth += 1;
        xml += indent(depth);
        xml += '<node name="' + rec.name + '" index="' + rec.phraseIndex + '" length="' + rec.phraseLength + '">\n';
        xml += indent(depth + 2);
        xml += display(chars, rec.phraseIndex, rec.phraseLength);
        xml += "\n";
      } else {
        xml += indent(depth);
        xml += '</node><!-- name="' + rec.name + '" -->\n'
        depth -= 1;
      }
    });

    xml += '</root>\n';
    return xml;
  }
  /* generate a JavaScript object version of the AST */
  /* for the phrase-matching engine apg-exp */
  this.phrases = function() {
    var obj = {};
    var i, record;
    for (i = 0; i < records.length; i += 1) {
      record = records[i];
      if (record.state === id.SEM_PRE) {
        if (!Array.isArray(obj[record.name])) {
          obj[record.name] = [];
        }
        obj[record.name].push({
          index : record.phraseIndex,
          length : record.phraseLength
        });
      }
    }
    return obj;
  }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// This is the primary object of `apg-lib`. Calling its `parse()` member function 
// walks the parse tree of opcodes, matching phrases from the input string as it goes.
// The working code for all of the operators, `ALT`, `CAT`, etc. is in this module.
/*
 * COPYRIGHT: Copyright (c) 2016 Lowell D. Thomas, all rights reserved
 *   LICENSE: BSD-3-Clause
 *    AUTHOR: Lowell D. Thomas
 *     EMAIL: lowell@coasttocoastresearch.com
 *   WEBSITE: http://coasttocoastresearch.com/
 */
module.exports = function() {
  "use strict";
  var thisFileName = "parser.js: "
  var _this = this;
  var id = __webpack_require__(1);
  var utils = __webpack_require__(2);
  this.ast = null;
  this.stats = null;
  this.trace = null;
  this.callbacks = [];
  var startRule = 0;
  var opcodes = null;
  var chars = null;
  var charsBegin, charsLength, charsEnd;
  var lookAround;
  var treeDepth = 0;
  var maxTreeDepth = 0;
  var nodeHits = 0;
  var ruleCallbacks = null;
  var udtCallbacks = null;
  var rules = null;
  var udts = null;
  var syntaxData = null;
  var maxMatched = 0;
  var limitTreeDepth = Infinity;
  var limitNodeHits = Infinity;
  // Evaluates any given rule. This can be called from the syntax callback
  // functions to evaluate any rule in the grammar's rule list. Great caution
  // should be used. Use of this function will alter the language that the
  // parser accepts.
  var evaluateRule = function(ruleIndex, phraseIndex, sysData) {
    var functionName = thisFileName + "evaluateRule(): ";
    var length;
    if (ruleIndex >= rules.length) {
      throw new Error(functionName + "rule index: " + ruleIndex + " out of range");
    }
    if ((phraseIndex >= charsEnd)) {
      throw new Error(functionName + "phrase index: " + phraseIndex + " out of range");
    }
    length = opcodes.length;
    opcodes.push({
      type : id.RNM,
      index : ruleIndex
    });
    opExecute(length, phraseIndex, sysData);
    opcodes.pop();
  };
  // Evaluates any given UDT. This can be called from the syntax callback
  // functions to evaluate any UDT in the grammar's UDT list. Great caution
  // should be used. Use of this function will alter the language that the
  // parser accepts.
  var evaluateUdt = function(udtIndex, phraseIndex, sysData) {
    var functionName = thisFileName + "evaluateUdt(): ";
    var length;
    if (udtIndex >= udts.length) {
      throw new Error(functionName + "udt index: " + udtIndex + " out of range");
    }
    if ((phraseIndex >= charsEnd)) {
      throw new Error(functionName + "phrase index: " + phraseIndex + " out of range");
    }
    length = opcodes.length;
    opcodes.push({
      type : id.UDT,
      empty : udts[udtIndex].empty,
      index : udtIndex
    });
    opExecute(length, phraseIndex, sysData);
    opcodes.pop();
  };
  /* Clears this object of any/all data that has been initialized or added to it. */
  /* Called by parse() on initialization, allowing this object to be re-used for multiple parsing calls. */
  var clear = function() {
    startRule = 0;
    treeDepth = 0;
    maxTreeDepth = 0;
    nodeHits = 0;
    maxMatched = 0;
    lookAround = [ {
      lookAround : id.LOOKAROUND_NONE,
      anchor : 0,
      charsEnd : 0,
      charsLength : 0
    } ];
    rules = null;
    udts = null;
    chars = null;
    charsBegin = 0;
    charsLength = 0;
    charsEnd = 0;
    ruleCallbacks = null;
    udtCallbacks = null;
    syntaxData = null;
    opcodes = null;
  };
  /* object for maintaining a stack of back reference frames */
  var backRef = function() {
    var stack = [];
    var init = function() {
      var obj = {};
      rules.forEach(function(rule) {
        if (rule.isBkr) {
          obj[rule.lower] = null;
        }
      });
      if (udts.length > 0) {
        udts.forEach(function(udt) {
          if (udt.isBkr) {
            obj[udt.lower] = null;
          }
        });
      }
      stack.push(obj);
    }
    var copy = function() {
      var top = stack[stack.length - 1];
      var obj = {};
      for ( var name in top) {
        obj[name] = top[name];
      }
      return obj;
    }
    this.push = function() {
      stack.push(copy());
    }
    this.pop = function(length) {
      if (!length) {
        length = stack.length - 1;
      }
      if (length < 1 || length > stack.length) {
        throw new Error(thisFileName + "backRef.pop(): bad length: " + length);
      }
      stack.length = length;
      return stack[stack.length - 1];
    }
    this.length = function() {
      return stack.length;
    }
    this.savePhrase = function(name, index, length) {
      stack[stack.length - 1][name] = {
        phraseIndex : index,
        phraseLength : length
      }
    }
    this.getPhrase = function(name) {
      return stack[stack.length - 1][name];
    }
    /* constructor */
    init();
  }
  // The system data structure that relays system information to and from the rule and UDT callback functions.
  // - *state* - the state of the parser, ACTIVE, MATCH, EMPTY or NOMATCH (see the `identifiers` object in
  // [`apg-lib`](https://github.com/ldthomas/apg-js2-lib))
  // - *phraseLength* - the number of characters matched if the state is MATCHED or EMPTY
  // - *lookaround* - the top of the stack holds the current look around state,
  // LOOKAROUND_NONE, LOOKAROUND_AHEAD or LOOKAROUND_BEHIND,
  // - *uFrame* - the "universal" back reference frame.
  // Holds the last matched phrase for each of the back referenced rules and UDTs.
  // - *pFrame* - the stack of "parent" back reference frames.
  // Holds the matched phrase from the parent frame of each back referenced rules and UDTs.
  // - *evaluateRule* - a reference to this object's `evaluateRule()` function.
  // Can be called from a callback function (use with extreme caution!)
  // - *evaluateUdt* - a reference to this object's `evaluateUdt()` function.
  // Can be called from a callback function (use with extreme caution!)
  var systemData = function() {
    var _this = this;
    this.state = id.ACTIVE;
    this.phraseLength = 0;
    this.lookAround = lookAround[lookAround.length - 1];
    this.uFrame = new backRef();
    this.pFrame = new backRef();
    this.evaluateRule = evaluateRule;
    this.evaluateUdt = evaluateUdt;
    /* refresh the parser state for the next operation */
    this.refresh = function() {
      _this.state = id.ACTIVE;
      _this.phraseLength = 0;
      _this.lookAround = lookAround[lookAround.length - 1];
    }
  }
  /* some look around helper functions */
  var lookAroundValue = function() {
    return lookAround[lookAround.length - 1];
  }
  /* return true if parser is in look around (ahead or behind) state */
  var inLookAround = function() {
    return (lookAround.length > 1);
  }
  /* return true if parser is in look behind state */
  var inLookBehind = function() {
    return lookAround[lookAround.length - 1].lookAround === id.LOOKAROUND_BEHIND ? true : false;
  }
  /* called by parse() to initialize the AST object, if one has been defined */
  var initializeAst = function() {
    var functionName = thisFileName + "initializeAst(): ";
    while (true) {
      if (_this.ast === undefined) {
        _this.ast = null;
        break;
      }
      if (_this.ast === null) {
        break;
      }
      if (_this.ast.astObject !== "astObject") {
        throw new Error(functionName + "ast object not recognized");
      }
      break;
    }
    if (_this.ast !== null) {
      _this.ast.init(rules, udts, chars);
    }
  }
  /* called by parse() to initialize the trace object, if one has been defined */
  var initializeTrace = function() {
    var functionName = thisFileName + "initializeTrace(): ";
    while (true) {
      if (_this.trace === undefined) {
        _this.trace = null;
        break;
      }
      if (_this.trace === null) {
        break;
      }
      if (_this.trace.traceObject !== "traceObject") {
        throw new Error(functionName + "trace object not recognized");
      }
      break;
    }
    if (_this.trace !== null) {
      _this.trace.init(rules, udts, chars);
    }

  }
  /* called by parse() to initialize the statistics object, if one has been defined */
  var initializeStats = function() {
    var functionName = thisFileName + "initializeStats(): ";
    while (true) {
      if (_this.stats === undefined) {
        _this.stats = null;
        break;
      }
      if (_this.stats === null) {
        break;
      }
      if (_this.stats.statsObject !== "statsObject") {
        throw new Error(functionName + "stats object not recognized");
      }
      break;
    }
    if (_this.stats !== null) {
      _this.stats.init(rules, udts);
    }
  }
  /* called by parse() to initialize the rules & udts from the grammar object */
  /* (the grammar object generated previously by apg) */
  var initializeGrammar = function(grammar) {
    var functionName = thisFileName + "initializeGrammar(): ";
    if (!grammar) {
      throw new Error(functionName + "grammar object undefined");
    }
    if (grammar.grammarObject !== "grammarObject") {
      throw new Error(functionName + "bad grammar object");
    }
    rules = grammar.rules;
    udts = grammar.udts;
  }
  /* called by parse() to initialize the start rule */
  var initializeStartRule = function(startRule) {
    var functionName = thisFileName + "initializeStartRule(): ";
    var start = null;
    if (typeof (startRule) === "number") {
      if (startRule >= rules.length) {
        throw new Error(functionName + "start rule index too large: max: " + rules.length + ": index: " + startRule);
      }
      start = startRule;
    } else if (typeof (startRule) === "string") {
      var lower = startRule.toLowerCase();
      for (var i = 0; i < rules.length; i += 1) {
        if (lower === rules[i].lower) {
          start = rules[i].index;
          break;
        }
      }
      if (start === null) {
        throw new Error(functionName + "start rule name '" + startRule + "' not recognized");
      }
    } else {
      throw new Error(functionName + "type of start rule '" + typeof (startRule) + "' not recognized");
    }
    return start;
  }
  /* called by parse() to initialize the array of characters codes representing the input string */
  var initializeInputChars = function(input, beg, len) {
    var functionName = thisFileName + "initializeInputChars(): ";
    /* varify and normalize input */
    if (input === undefined) {
      throw new Error(functionName + "input string is undefined");
    }
    if (input === null) {
      throw new Error(functionName + "input string is null");
    }
    if (typeof (input) === "string") {
      input = utils.stringToChars(input);
    } else if (!Array.isArray(input)) {
      throw new Error(functionName + "input string is not a string or array");
    }
    if (input.length > 0) {
      if (typeof (input[0]) !== "number") {
        throw new Error(functionName + "input string not an array of integers");
      }
    }
    /* verify and normalize beginning index */
    if (typeof (beg) !== "number") {
      beg = 0;
    } else {
      beg = Math.floor(beg);
      if (beg < 0 || beg > input.length) {
        throw new Error(functionName + "input beginning index out of range: " + beg);
      }
    }
    /* verify and normalize input length */
    if (typeof (len) !== "number") {
      len = input.length - beg;
    } else {
      len = Math.floor(len);
      if (len < 0 || len > (input.length - beg)) {
        throw new Error(functionName + "input length out of range: " + len);
      }
    }
    chars = input;
    charsBegin = beg;
    charsLength = len;
    charsEnd = charsBegin + charsLength;
  }
  /* called by parse() to initialize the user-written, syntax callback functions, if any */
  var initializeCallbacks = function() {
    var functionName = thisFileName + "initializeCallbacks(): ";
    var i;
    ruleCallbacks = [];
    udtCallbacks = [];
    for (i = 0; i < rules.length; i += 1) {
      ruleCallbacks[i] = null;
    }
    for (i = 0; i < udts.length; i += 1) {
      udtCallbacks[i] = null;
    }
    var func, list = [];
    for (i = 0; i < rules.length; i += 1) {
      list.push(rules[i].lower);
    }
    for (i = 0; i < udts.length; i += 1) {
      list.push(udts[i].lower);
    }
    for ( var index in _this.callbacks) {
      i = list.indexOf(index.toLowerCase());
      if (i < 0) {
        throw new Error(functionName + "syntax callback '" + index + "' not a rule or udt name");
      }
      func = _this.callbacks[index];
      if (!func) {
        func = null;
      }
      if (typeof (func) === "function" || func === null) {
        if (i < rules.length) {
          ruleCallbacks[i] = func;
        } else {
          udtCallbacks[i - rules.length] = func;
        }
      } else {
        throw new Error(functionName + "syntax callback[" + index + "] must be function reference or 'false' (false/null/undefined/etc.)");
      }
    }
    /* make sure all udts have been defined - the parser can't work without them */
    for (i = 0; i < udts.length; i += 1) {
      if (udtCallbacks[i] === null) {
        throw new Error(functionName + "all UDT callbacks must be defined. UDT callback[" + udts[i].lower
            + "] not a function reference");
      }
    }
  }
  // Set the maximum parse tree depth allowed. The default is `Infinity`.
  // A limit is not normally needed, but can be used to protect against an
  // exponentual or "catastrophically backtracking" grammar.
  //<ul>
  //<li>
  // depth - max allowed parse tree depth. An exception is thrown if exceeded.
  //</li>
  //</ul>
  this.setMaxTreeDepth = function(depth) {
    if (typeof (depth) !== "number") {
      throw new Error("parser: max tree depth must be integer > 0: " + depth);
    }
    limitTreeDepth = Math.floor(depth);
    if (limitTreeDepth <= 0) {
      throw new Error("parser: max tree depth must be integer > 0: " + depth);
    }
  }
  // Set the maximum number of node hits (parser unit steps or opcode function calls) allowed.
  // The default is `Infinity`.
  // A limit is not normally needed, but can be used to protect against an
  // exponentual or "catastrophically backtracking" grammar.
  //<ul>
  //<li>
  // hits - maximum number of node hits or parser unit steps allowed.
  // An exception thrown if exceeded.
  //</li>
  //</ul>
  this.setMaxNodeHits = function(hits) {
    if (typeof (hits) !== "number") {
      throw new Error("parser: max node hits must be integer > 0: " + hits);
    }
    limitNodeHits = Math.floor(hits);
    if (limitNodeHits <= 0) {
      throw new Error("parser: max node hits must be integer > 0: " + hits);
    }
  }
  // This is the main function, called to parse an input string.
  // <ul>
  // <li>*grammar* - an instantiated grammar object - the output of `apg` for a
  // specific SABNF grammar</li>
  // <li>*startRule* - the rule name or rule index to be used as the root of the
  // parse tree. This is usually the first rule, index = 0, of the grammar
  // but can be any rule defined in the above grammar object.</li>
  // <li>*inputChars* - the input string. Can be a string or an array of integer character codes representing the
  // string.</li>
  // <li>*callbackData* - user-defined data object to be passed to the user's
  // callback functions.
  // This is not used by the parser in any way, merely passed on to the user.
  // May be `null` or omitted.</li>
  // </ul>
  this.parse = function(grammar, startRule, inputChars, callbackData) {
    clear();
    initializeInputChars(inputChars, 0, inputChars.length);
    return privateParse(grammar, startRule, callbackData);
  }
  // This form allows parsing of a sub-string of the full input string.
  // <ul>
  // <li>*inputIndex* - index of the first character in the sub-string</li>
  // <li>*inputLength* - length of the sub-string</li>
  // </ul>
  // All other parameters as for the above function `parse()`.
  this.parseSubstring = function(grammar, startRule, inputChars, inputIndex, inputLength, callbackData) {
    clear();
    initializeInputChars(inputChars, inputIndex, inputLength);
    return privateParse(grammar, startRule, callbackData);
  }
  /* the main parser function */
  var privateParse = function(grammar, startRule, callbackData) {
    var functionName, sysData, success;
    functionName = thisFileName + "parse(): ";
    initializeGrammar(grammar);
    startRule = initializeStartRule(startRule);
    initializeCallbacks();
    initializeTrace();
    initializeStats();
    initializeAst();
    sysData = new systemData();
    if (!(callbackData === undefined || callbackData === null)) {
      syntaxData = callbackData;
    }
    /* create a dummy opcode for the start rule */
    opcodes = [ {
      type : id.RNM,
      index : startRule
    } ];
    /* execute the start rule */
    opExecute(0, charsBegin, sysData);
    opcodes = null;
    /* test and return the sysData */
    switch (sysData.state) {
    case id.ACTIVE:
      throw new Error(functionName + "final state should never be 'ACTIVE'");
    case id.NOMATCH:
      success = false;
      break;
    case id.EMPTY:
    case id.MATCH:
      if (sysData.phraseLength === charsLength) {
        success = true;
      } else {
        success = false;
      }
      break;
    }
    return {
      success : success,
      state : sysData.state,
      length : charsLength,
      matched : sysData.phraseLength,
      maxMatched : maxMatched,
      maxTreeDepth : maxTreeDepth,
      nodeHits : nodeHits,
      inputLength : chars.length,
      subBegin : charsBegin,
      subEnd : charsEnd,
      subLength : charsLength
    };
  };

  // The `ALT` operator.<br>
  // Executes its child nodes, from left to right, until it finds a match.
  // Fails if *all* of its child nodes fail.
  var opALT = function(opIndex, phraseIndex, sysData) {
    var op = opcodes[opIndex];
    for (var i = 0; i < op.children.length; i += 1) {
      opExecute(op.children[i], phraseIndex, sysData);
      if (sysData.state !== id.NOMATCH) {
        break;
      }
    }
  };
  // The `CAT` operator.<br>
  // Executes all of its child nodes, from left to right,
  // concatenating the matched phrases.
  // Fails if *any* child nodes fail.
  var opCAT = function(opIndex, phraseIndex, sysData) {
    var op, success, astLength, catCharIndex, catPhrase;
    op = opcodes[opIndex];
    var ulen = sysData.uFrame.length();
    var plen = sysData.pFrame.length();
    if (_this.ast) {
      astLength = _this.ast.getLength();
    }
    success = true;
    catCharIndex = phraseIndex;
    catPhrase = 0;
    for (var i = 0; i < op.children.length; i += 1) {
      opExecute(op.children[i], catCharIndex, sysData);
      if (sysData.state === id.NOMATCH) {
        success = false;
        break;
      } else {
        catCharIndex += sysData.phraseLength;
        catPhrase += sysData.phraseLength;
      }
    }
    if (success) {
      sysData.state = catPhrase === 0 ? id.EMPTY : id.MATCH;
      sysData.phraseLength = catPhrase;
    } else {
      sysData.state = id.NOMATCH;
      sysData.phraseLength = 0;
      /* reset the back referencing frames on failure */
      sysData.uFrame.pop(ulen);
      sysData.pFrame.pop(plen);
      if (_this.ast) {
        _this.ast.setLength(astLength);
      }
    }
  };
  // The `REP` operator.<br>
  // Repeatedly executes its single child node,
  // concatenating each of the matched phrases found.
  // The number of repetitions executed and its final sysData depends
  // on its `min` & `max` repetition values.
  var opREP = function(opIndex, phraseIndex, sysData) {
    var op, astLength, repCharIndex, repPhrase, repCount;
    op = opcodes[opIndex];
    repCharIndex = phraseIndex;
    repPhrase = 0;
    repCount = 0;
    var ulen = sysData.uFrame.length();
    var plen = sysData.pFrame.length();
    if (_this.ast) {
      astLength = _this.ast.getLength();
    }
    while (true) {
      if (repCharIndex >= charsEnd) {
        /* exit on end of input string */
        break;
      }
      opExecute(opIndex + 1, repCharIndex, sysData);
      if (sysData.state === id.NOMATCH) {
        /* always end if the child node fails */
        break;
      }
      if (sysData.state === id.EMPTY) {
        /* REP always succeeds when the child node returns an empty phrase */
        /* this may not seem obvious, but that's the way it works out */
        break;
      }
      repCount += 1;
      repPhrase += sysData.phraseLength;
      repCharIndex += sysData.phraseLength;
      if (repCount === op.max) {
        /* end on maxed out reps */
        break;
      }
    }
    /* evaluate the match count according to the min, max values */
    if (sysData.state === id.EMPTY) {
      sysData.state = (repPhrase === 0) ? id.EMPTY : id.MATCH;
      sysData.phraseLength = repPhrase;
    } else if (repCount >= op.min) {
      sysData.state = (repPhrase === 0) ? id.EMPTY : id.MATCH;
      sysData.phraseLength = repPhrase;
    } else {
      sysData.state = id.NOMATCH;
      sysData.phraseLength = 0;
      /* reset the back referencing frames on failure */
      sysData.uFrame.pop(ulen);
      sysData.pFrame.pop(plen);
      if (_this.ast) {
        _this.ast.setLength(astLength);
      }
    }
  };
  // Validate the callback function's returned sysData values.
  // It's the user's responsibility to get them right
  // but `RNM` fails if not.
  var validateRnmCallbackResult = function(rule, sysData, charsLeft, down) {
    if (sysData.phraseLength > charsLeft) {
      var str = thisFileName + "opRNM(" + rule.name + "): callback function error: "
      str += "sysData.phraseLength: " + sysData.phraseLength;
      str += " must be <= remaining chars: " + charsLeft;
      throw new Error(str);
    }
    switch (sysData.state) {
    case id.ACTIVE:
      if (down === true) {
      } else {
        throw new Error(thisFileName + "opRNM(" + rule.name + "): callback function return error. ACTIVE state not allowed.");
      }
      break;
    case id.EMPTY:
      sysData.phraseLength = 0;
      break;
    case id.MATCH:
      if (sysData.phraseLength === 0) {
        sysData.state = id.EMPTY;
      }
      break;
    case id.NOMATCH:
      sysData.phraseLength = 0;
      break;
    default:
      throw new Error(thisFileName + "opRNM(" + rule.name + "): callback function return error. Unrecognized return state: "
          + sysData.state);
    }
  }
  // The `RNM` operator.<br>
  // This operator will acts as a root node for a parse tree branch below and
  // returns the matched phrase to its parent.
  // However, its larger responsibility is handling user-defined callback functions, back references and `AST` nodes.
  // Note that the `AST` is a separate object, but `RNM` calls its functions to create its nodes.
  // See [`ast.js`](./ast.html) for usage.
  var opRNM = function(opIndex, phraseIndex, sysData) {
    var op, rule, callback, astLength, astDefined, downIndex, savedOpcodes;
    var ulen, plen, saveFrame;
    op = opcodes[opIndex];
    rule = rules[op.index];
    callback = ruleCallbacks[op.index];
    var notLookAround = !inLookAround();
    /* ignore AST and back references in lookaround */
    if (notLookAround) {
      /* begin AST and back references */
      astDefined = _this.ast && _this.ast.ruleDefined(op.index);
      if (astDefined) {
        astLength = _this.ast.getLength();
        downIndex = _this.ast.down(op.index, rules[op.index].name);
      }
      ulen = sysData.uFrame.length();
      plen = sysData.pFrame.length();
      sysData.uFrame.push();
      sysData.pFrame.push();
      saveFrame = sysData.pFrame;
      sysData.pFrame = new backRef();
    }
    if (callback === null) {
      /* no callback - just execute the rule */
      savedOpcodes = opcodes;
      opcodes = rule.opcodes;
      opExecute(0, phraseIndex, sysData);
      opcodes = savedOpcodes;
    } else {
      /* call user's callback */
      var charsLeft = charsEnd - phraseIndex;
      callback(sysData, chars, phraseIndex, syntaxData);
      validateRnmCallbackResult(rule, sysData, charsLeft, true);
      if (sysData.state === id.ACTIVE) {
        savedOpcodes = opcodes;
        opcodes = rule.opcodes;
        opExecute(0, phraseIndex, sysData);
        opcodes = savedOpcodes;
        callback(sysData, chars, phraseIndex, syntaxData);
        validateRnmCallbackResult(rule, sysData, charsLeft, false);
      }/* implied else clause: just accept the callback sysData - RNM acting as UDT */
    }
    if (notLookAround) {
      /* end AST */
      if (astDefined) {
        if (sysData.state === id.NOMATCH) {
          _this.ast.setLength(astLength);
        } else {
          _this.ast.up(op.index, rules[op.index].name, phraseIndex, sysData.phraseLength);
        }
      }
      /* end back reference */
      sysData.pFrame = saveFrame;
      if (sysData.state === id.NOMATCH) {
        sysData.uFrame.pop(ulen);
        sysData.pFrame.pop(plen);
      } else {
        if (rules[op.index].isBkr) {
          /* save phrase on both the parent and universal frames */
          /* BKR operator will decide which to use later */
          sysData.pFrame.savePhrase(rules[op.index].lower, phraseIndex, sysData.phraseLength);
          sysData.uFrame.savePhrase(rules[op.index].lower, phraseIndex, sysData.phraseLength);
        }
      }
    }
  };
  // Validate the callback function's returned sysData values.
  // It's the user's responsibility to get it right but `UDT` fails if not.
  var validateUdtCallbackResult = function(udt, sysData, charsLeft) {
    if (sysData.phraseLength > charsLeft) {
      var str = thisFileName + "opUDT(" + udt.name + "): callback function error: "
      str += "sysData.phraseLength: " + sysData.phraseLength;
      str += " must be <= remaining chars: " + charsLeft;
      throw new Error(str);
    }
    switch (sysData.state) {
    case id.ACTIVE:
      throw new Error(thisFileName + "opUDT(" + udt.name + "): callback function return error. ACTIVE state not allowed.");
    case id.EMPTY:
      if (udt.empty === false) {
        throw new Error(thisFileName + "opUDT(" + udt.name + "): callback function return error. May not return EMPTY.");
      } else {
        sysData.phraseLength = 0;
      }
      break;
    case id.MATCH:
      if (sysData.phraseLength === 0) {
        if (udt.empty === false) {
          throw new Error(thisFileName + "opUDT(" + udt.name + "): callback function return error. May not return EMPTY.");
        } else {
          sysData.state = id.EMPTY;
        }
      }
      break;
    case id.NOMATCH:
      sysData.phraseLength = 0;
      break;
    default:
      throw new Error(thisFileName + "opUDT(" + udt.name + "): callback function return error. Unrecognized return state: "
          + sysData.state);
    }
  }
  // The `UDT` operator.<br>
  // Simply calls the user's callback function, but operates like `RNM` with regard to the `AST`
  // and back referencing.
  // There is some ambiguity here. `UDT`s act as terminals for phrase recognition but as named rules
  // for `AST` nodes and back referencing.
  // See [`ast.js`](./ast.html) for usage.
  var opUDT = function(opIndex, phraseIndex, sysData) {
    var downIndex, astLength, astIndex, op, udt, astDefined;
    var ulen, plen, saveFrame;
    op = opcodes[opIndex];
    var notLookAround = !inLookAround();
    /* ignore AST and back references in lookaround */
    if (notLookAround) {
      /* begin AST and back reference */
      astDefined = _this.ast && _this.ast.udtDefined(op.index);
      if (astDefined) {
        astIndex = rules.length + op.index;
        astLength = _this.ast.getLength();
        downIndex = _this.ast.down(astIndex, udts[op.index].name);
      }
      /* NOTE: push and pop of the back reference frame is normally not necessary */
      /* only in the case that the UDT calls evaluateRule() or evaluateUdt() */
      ulen = sysData.uFrame.length();
      plen = sysData.pFrame.length();
      sysData.uFrame.push();
      sysData.pFrame.push();
      saveFrame = sysData.pFrame;
      sysData.pFrame = new backRef();
    }
    /* call the UDT */
    var charsLeft = charsEnd - phraseIndex;
    udtCallbacks[op.index](sysData, chars, phraseIndex, syntaxData);
    validateUdtCallbackResult(udts[op.index], sysData, charsLeft);
    if (notLookAround) {
      /* end AST */
      if (astDefined) {
        if (sysData.state === id.NOMATCH) {
          _this.ast.setLength(astLength);
        } else {
          _this.ast.up(astIndex, udts[op.index].name, phraseIndex, sysData.phraseLength);
        }
      }
      /* end back reference */
      sysData.pFrame = saveFrame;
      if (sysData.state === id.NOMATCH) {
        sysData.uFrame.pop(ulen);
        sysData.pFrame.pop(plen);
      } else {
        if (udts[op.index].isBkr) {
          /* save phrase on both the parent and universal frames */
          /* BKR operator will decide which to use later */
          sysData.pFrame.savePhrase(udt[op.index].lower, phraseIndex, sysData.phraseLength);
          sysData.uFrame.savePhrase(udt[op.index].lower, phraseIndex, sysData.phraseLength);
        }
      }
    }
  };
  // The `AND` operator.<br>
  // This is the positive `look ahead` operator.
  // Executes its single child node, returning the EMPTY state
  // if it succeedsand NOMATCH if it fails.
  // *Always* backtracks on any matched phrase and returns EMPTY on success.
  var opAND = function(opIndex, phraseIndex, sysData) {
    lookAround.push({
      lookAround : id.LOOKAROUND_AHEAD,
      anchor : phraseIndex,
      charsEnd : charsEnd,
      charsLength : charsLength
    });
    charsEnd = chars.length;
    charsLength = chars.length - charsBegin;
    opExecute(opIndex + 1, phraseIndex, sysData);
    var pop = lookAround.pop();
    charsEnd = pop.charsEnd;
    charsLength = pop.charsLength;
    sysData.phraseLength = 0;
    switch (sysData.state) {
    case id.EMPTY:
      sysData.state = id.EMPTY;
      break;
    case id.MATCH:
      sysData.state = id.EMPTY;
      break;
    case id.NOMATCH:
      sysData.state = id.NOMATCH;
      break;
    default:
      throw new Error('opAND: invalid state ' + sysData.state);
    }
  };
  // The `NOT` operator.<br>
  // This is the negative `look ahead` operator.
  // Executes its single child node, returning the EMPTY state
  // if it *fails* and NOMATCH if it succeeds.
  // *Always* backtracks on any matched phrase and returns EMPTY
  // on success (failure of its child node).
  var opNOT = function(opIndex, phraseIndex, sysData) {
    lookAround.push({
      lookAround : id.LOOKAROUND_AHEAD,
      anchor : phraseIndex,
      charsEnd : charsEnd,
      charsLength : charsLength
    });
    charsEnd = chars.length;
    charsLength = chars.length - charsBegin;
    opExecute(opIndex + 1, phraseIndex, sysData);
    var pop = lookAround.pop();
    charsEnd = pop.charsEnd;
    charsLength = pop.charsLength;
    sysData.phraseLength = 0;
    switch (sysData.state) {
    case id.EMPTY:
    case id.MATCH:
      sysData.state = id.NOMATCH;
      break;
    case id.NOMATCH:
      sysData.state = id.EMPTY;
      break;
    default:
      throw new Error('opNOT: invalid state ' + sysData.state);
    }
  };
  // The `TRG` operator.<br>
  // Succeeds if the single first character of the phrase is
  // within the `min - max` range.
  var opTRG = function(opIndex, phraseIndex, sysData) {
    var op = opcodes[opIndex];
    sysData.state = id.NOMATCH;
    if (phraseIndex < charsEnd) {
      if (op.min <= chars[phraseIndex] && chars[phraseIndex] <= op.max) {
        sysData.state = id.MATCH;
        sysData.phraseLength = 1;
      }
    }
  };
  // The `TBS` operator.<br>
  // Matches its pre-defined phrase against the input string.
  // All characters must match exactly.
  // Case-sensitive literal strings (`'string'` & `%s"string"`) are translated to `TBS`
  // operators by `apg`.
  // Phrase length of zero is not allowed.
  // Empty phrases can only be defined with `TLS` operators.
  var opTBS = function(opIndex, phraseIndex, sysData) {
    var i, op, len;
    op = opcodes[opIndex];
    len = op.string.length;
    sysData.state = id.NOMATCH;
    if ((phraseIndex + len) <= charsEnd) {
      for (i = 0; i < len; i += 1) {
        if (chars[phraseIndex + i] !== op.string[i]) {
          return;
        }
      }
      sysData.state = id.MATCH;
      sysData.phraseLength = len;
    } /* implied else NOMATCH */
  };
  // The `TLS` operator.<br>
  // Matches its pre-defined phrase against the input string.
  // A case-insensitive match is attempted for ASCII alphbetical characters.
  // `TLS` is the only operator that explicitly allows empty phrases.
  // `apg` will fail for empty `TBS`, case-sensitive strings (`''`) or
  // zero repetitions (`0*0RuleName` or `0RuleName`).
  var opTLS = function(opIndex, phraseIndex, sysData) {
    var i, code, len, op;
    op = opcodes[opIndex];
    sysData.state = id.NOMATCH;
    len = op.string.length;
    if (len === 0) {
      /* EMPTY match allowed for TLS */
      sysData.state = id.EMPTY;
      return;
    }
    if ((phraseIndex + len) <= charsEnd) {
      for (i = 0; i < len; i += 1) {
        code = chars[phraseIndex + i];
        if (code >= 65 && code <= 90) {
          code += 32;
        }
        if (code !== op.string[i]) {
          return;
        }
      }
      sysData.state = id.MATCH;
      sysData.phraseLength = len;
    } /* implied else NOMATCH */
  };
  // The `ABG` operator.<br>
  // This is an "anchor" for the beginning of the string, similar to the familiar regex `^` anchor.
  // An anchor matches a position rather than a phrase.
  // Returns EMPTY if `phraseIndex` is 0, NOMATCH otherwise.
  var opABG = function(opIndex, phraseIndex, sysData) {
    sysData.state = id.NOMATCH;
    sysData.phraseLength = 0;
    sysData.state = (phraseIndex === 0) ? id.EMPTY : id.NOMATCH;
  };
  // The `AEN` operator.<br>
  // This is an "anchor" for the end of the string, similar to the familiar regex `$` anchor.
  // An anchor matches a position rather than a phrase.
  // Returns EMPTY if `phraseIndex` equals the input string length, NOMATCH otherwise.
  var opAEN = function(opIndex, phraseIndex, sysData) {
    sysData.state = id.NOMATCH;
    sysData.phraseLength = 0;
    sysData.state = (phraseIndex === chars.length) ? id.EMPTY : id.NOMATCH;
  };
  // The `BKR` operator.<br>
  // The back reference operator.
  // Matches the last matched phrase of the named rule or UDT against the input string.
  // For ASCII alphbetical characters the match may be case sensitive (`%s`) or insensitive (`%i`),
  // depending on the back reference definition.
  // For `universal` mode (`%u`) matches the last phrase found anywhere in the grammar.
  // For `parent frame` mode (`%p`) matches the last phrase found in the parent rule only.
  var opBKR = function(opIndex, phraseIndex, sysData) {
    var i, code, len, op, lmIndex, lmcode, lower, frame, insensitive;
    op = opcodes[opIndex];
    sysData.state = id.NOMATCH;
    if (op.index < rules.length) {
      lower = rules[op.index].lower;
    } else {
      lower = udts[op.index - rules.length].lower;
    }
    frame = (op.bkrMode === id.BKR_MODE_PM) ? sysData.pFrame.getPhrase(lower) : sysData.uFrame.getPhrase(lower);
    insensitive = (op.bkrCase === id.BKR_MODE_CI) ? true : false;
    if (frame === null) {
      return;
    }
    lmIndex = frame.phraseIndex;
    len = frame.phraseLength;
    if (len === 0) {
      sysData.state = id.EMPTY;
      return;
    }
    if ((phraseIndex + len) <= charsEnd) {
      if (insensitive) {
        /* case-insensitive match */
        for (i = 0; i < len; i += 1) {
          code = chars[phraseIndex + i];
          lmcode = chars[lmIndex + i];
          if (code >= 65 && code <= 90) {
            code += 32;
          }
          if (lmcode >= 65 && lmcode <= 90) {
            lmcode += 32;
          }
          if (code !== lmcode) {
            return;
          }
        }
        sysData.state = id.MATCH;
        sysData.phraseLength = len;
      } else {
        /* case-sensitive match */
        for (i = 0; i < len; i += 1) {
          code = chars[phraseIndex + i];
          lmcode = chars[lmIndex + i];
          if (code !== lmcode) {
            return;
          }
        }
      }
      sysData.state = id.MATCH;
      sysData.phraseLength = len;
    }
  };
  // The `BKA` operator.<br>
  // This is the positive `look behind` operator.
  // It's child node is parsed right-to-left.
  // Returns the EMPTY state if a match is found, NOMATCH otherwise.
  // Like the look ahead operators, it always backtracks to `phraseIndex`.
  var opBKA = function(opIndex, phraseIndex, sysData) {
    var op;
    op = opcodes[opIndex];
    lookAround.push({
      lookAround : id.LOOKAROUND_BEHIND,
      anchor : phraseIndex
    });
    opExecute(opIndex + 1, phraseIndex, sysData);
    lookAround.pop();
    sysData.phraseLength = 0;
    switch (sysData.state) {
    case id.EMPTY:
      sysData.state = id.EMPTY;
      break;
    case id.MATCH:
      sysData.state = id.EMPTY;
      break;
    case id.NOMATCH:
      sysData.state = id.NOMATCH;
      break;
    default:
      throw new Error('opBKA: invalid state ' + sysData.state);
    }
  }
  // The `BKN` operator.<br>
  // This is the negative `look behind` operator.
  // It's child node is parsed right-to-left.
  // Returns the EMPTY state if a match is *not* found, NOMATCH otherwise.
  // Like the look ahead operators, it always backtracks to `phraseIndex`.
  var opBKN = function(opIndex, phraseIndex, sysData) {
    var op;
    op = opcodes[opIndex];
    lookAround.push({
      lookAround : id.LOOKAROUND_BEHIND,
      anchor : phraseIndex
    });
    opExecute(opIndex + 1, phraseIndex, sysData);
    lookAround.pop();
    sysData.phraseLength = 0;
    switch (sysData.state) {
    case id.EMPTY:
    case id.MATCH:
      sysData.state = id.NOMATCH;
      break;
    case id.NOMATCH:
      sysData.state = id.EMPTY;
      break;
    default:
      throw new Error('opBKN: invalid state ' + sysData.state);
    }
  }
  // The right-to-left `CAT` operator.<br>
  // Called for `CAT` operators when in look behind mode.
  // Calls its child nodes from right to left concatenating matched phrases right to left.
  var opCATBehind = function(opIndex, phraseIndex, sysData) {
    var op, success, astLength, catCharIndex, catPhrase, catMatched;
    var ulen, plen;
    op = opcodes[opIndex];
    ulen = sysData.uFrame.length();
    plen = sysData.pFrame.length();
    if (_this.ast) {
      astLength = _this.ast.getLength();
    }
    success = true;
    catCharIndex = phraseIndex;
    catMatched = 0;
    catPhrase = 0;
    for (var i = op.children.length - 1; i >= 0; i -= 1) {
      opExecute(op.children[i], catCharIndex, sysData);
      catCharIndex -= sysData.phraseLength;
      catMatched += sysData.phraseLength;
      catPhrase += sysData.phraseLength;
      if (sysData.state === id.NOMATCH) {
        success = false;
        break;
      }
    }
    if (success) {
      sysData.state = catMatched === 0 ? id.EMPTY : id.MATCH;
      sysData.phraseLength = catMatched;
    } else {
      sysData.state = id.NOMATCH;
      sysData.phraseLength = 0;
      sysData.uFrame.pop(ulen);
      sysData.pFrame.pop(plen);
      if (_this.ast) {
        _this.ast.setLength(astLength);
      }
    }
  };
  // The right-to-left `REP` operator.<br>
  // Called for `REP` operators in look behind mode.
  // Makes repeated calls to its child node, concatenating matched phrases right to left.
  var opREPBehind = function(opIndex, phraseIndex, sysData) {
    var op, astLength, repCharIndex, repPhrase, repCount;
    var ulen, plen;
    op = opcodes[opIndex];
    repCharIndex = phraseIndex;
    repPhrase = 0;
    repCount = 0;
    ulen = sysData.uFrame.length();
    plen = sysData.pFrame.length();
    if (_this.ast) {
      astLength = _this.ast.getLength();
    }
    while (true) {
      if (repCharIndex <= 0) {
        /* exit on end of input string */
        break;
      }
      opExecute(opIndex + 1, repCharIndex, sysData);
      if (sysData.state === id.NOMATCH) {
        /* always end if the child node fails */
        break;
      }
      if (sysData.state === id.EMPTY) {
        /* REP always succeeds when the child node returns an empty phrase */
        /* this may not seem obvious, but that's the way it works out */
        break;
      }
      repCount += 1;
      repPhrase += sysData.phraseLength;
      repCharIndex -= sysData.phraseLength;
      if (repCount === op.max) {
        /* end on maxed out reps */
        break;
      }
    }
    /* evaluate the match count according to the min, max values */
    if (sysData.state === id.EMPTY) {
      sysData.state = (repPhrase === 0) ? id.EMPTY : id.MATCH;
      sysData.phraseLength = repPhrase;
    } else if (repCount >= op.min) {
      sysData.state = (repPhrase === 0) ? id.EMPTY : id.MATCH;
      sysData.phraseLength = repPhrase;
    } else {
      sysData.state = id.NOMATCH;
      sysData.phraseLength = 0;
      sysData.uFrame.pop(ulen);
      sysData.pFrame.pop(plen);
      if (_this.ast) {
        _this.ast.setLength(astLength);
      }
    }
  }
  // The right-to-left `TRG` operator.<br>
  // Called for `TRG` operators in look behind mode.
  // Matches a single character at `phraseIndex - 1` to the `min` - `max` range.
  var opTRGBehind = function(opIndex, phraseIndex, sysData) {
    var op = opcodes[opIndex];
    sysData.state = id.NOMATCH;
    sysData.phraseLength = 0;
    if (phraseIndex > 0) {
      var char = chars[phraseIndex - 1];
      if (op.min <= char && char <= op.max) {
        sysData.state = id.MATCH;
        sysData.phraseLength = 1;
      }
    }
  }
  // The right-to-left `TBS` operator.<br>
  // Called for `TBS` operators in look behind mode.
  // Matches the `TBS` phrase to the left of `phraseIndex`.
  var opTBSBehind = function(opIndex, phraseIndex, sysData) {
    var i, op, len, beg;
    op = opcodes[opIndex];
    sysData.state = id.NOMATCH;
    len = op.string.length;
    beg = phraseIndex - len;
    if (beg >= 0) {
      for (i = 0; i < len; i += 1) {
        if (chars[beg + i] !== op.string[i]) {
          return;
        }
      }
      sysData.state = id.MATCH;
      sysData.phraseLength = len;
    }
  }
  // The right-to-left `TLS` operator.<br>
  // Called for `TLS` operators in look behind mode.
  // Matches the `TLS` phrase to the left of `phraseIndex`.
  var opTLSBehind = function(opIndex, phraseIndex, sysData) {
    var op, char, beg, len;
    op = opcodes[opIndex];
    sysData.state = id.NOMATCH;
    len = op.string.length;
    if (len === 0) {
      /* EMPTY match allowed for TLS */
      sysData.state = id.EMPTY;
      return;
    }
    beg = phraseIndex - len;
    if (beg >= 0) {
      for (var i = 0; i < len; i += 1) {
        char = chars[beg + i];
        if (char >= 65 && char <= 90) {
          char += 32;
        }
        if (char !== op.string[i]) {
          return;
        }
      }
      sysData.state = id.MATCH;
      sysData.phraseLength = len;
    }
  }
  // The right-to-left back reference operator.<br>
  // Matches the back referenced phrase to the left of `phraseIndex`.
  var opBKRBehind = function(opIndex, phraseIndex, sysData) {
    var i, code, len, op, lmIndex, lmcode, lower, beg, frame, insensitive;
    op = opcodes[opIndex];
    /* NOMATCH default */
    sysData.state = id.NOMATCH;
    sysData.phraseLength = 0;
    if (op.index < rules.length) {
      lower = rules[op.index].lower;
    } else {
      lower = udts[op.index - rules.length].lower;
    }
    frame = (op.bkrMode === id.BKR_MODE_PM) ? sysData.pFrame.getPhrase(lower) : sysData.uFrame.getPhrase(lower);
    insensitive = (op.bkrCase === id.BKR_MODE_CI) ? true : false;
    if (frame === null) {
      return;
    }
    lmIndex = frame.phraseIndex;
    len = frame.phraseLength;
    if (len === 0) {
      sysData.state = id.EMPTY;
      sysData.phraseLength = 0;
      return;
    }
    beg = phraseIndex - len;
    if (beg >= 0) {
      if (insensitive) {
        /* case-insensitive match */
        for (i = 0; i < len; i += 1) {
          code = chars[beg + i];
          lmcode = chars[lmIndex + i];
          if (code >= 65 && code <= 90) {
            code += 32;
          }
          if (lmcode >= 65 && lmcode <= 90) {
            lmcode += 32;
          }
          if (code !== lmcode) {
            return;
          }
        }
        sysData.state = id.MATCH;
        sysData.phraseLength = len;
      } else {
        /* case-sensitive match */
        for (i = 0; i < len; i += 1) {
          code = chars[beg + i];
          lmcode = chars[lmIndex + i];
          if (code !== lmcode) {
            return;
          }
        }
      }
      sysData.state = id.MATCH;
      sysData.phraseLength = len;
    }
  }
  // Generalized execution function.<br>
  // Having a single, generalized function, allows a single location
  // for tracing and statistics gathering functions to be called.
  // Tracing and statistics are handled in separate objects.
  // However, the parser calls their API to build the object data records.
  // See [`trace.js`](./trace.html) and [`stats.js`](./stats.html) for their
  // usage.
  var opExecute = function(opIndex, phraseIndex, sysData) {
    var op, ret = true;
    op = opcodes[opIndex];
    nodeHits += 1;
    if (nodeHits > limitNodeHits) {
      throw new Error("parser: maximum number of node hits exceeded: " + limitNodeHits);
    }
    treeDepth += 1;
    if (treeDepth > maxTreeDepth) {
      maxTreeDepth = treeDepth;
      if (maxTreeDepth > limitTreeDepth) {
        throw new Error("parser: maximum parse tree depth exceeded: " + limitTreeDepth);
      }
    }
    sysData.refresh();
    if (_this.trace !== null) {
      /* collect the trace record for down the parse tree */
      var lk = lookAroundValue();
      _this.trace.down(op, sysData.state, phraseIndex, sysData.phraseLength, lk.anchor, lk.lookAround);
    }
    if (inLookBehind()) {
      switch (op.type) {
      case id.ALT:
        opALT(opIndex, phraseIndex, sysData);
        break;
      case id.CAT:
        opCATBehind(opIndex, phraseIndex, sysData);
        break;
      case id.REP:
        opREPBehind(opIndex, phraseIndex, sysData);
        break;
      case id.RNM:
        opRNM(opIndex, phraseIndex, sysData);
        break;
      case id.UDT:
        opUDT(opIndex, phraseIndex, sysData);
        break;
      case id.AND:
        opAND(opIndex, phraseIndex, sysData);
        break;
      case id.NOT:
        opNOT(opIndex, phraseIndex, sysData);
        break;
      case id.TRG:
        opTRGBehind(opIndex, phraseIndex, sysData);
        break;
      case id.TBS:
        opTBSBehind(opIndex, phraseIndex, sysData);
        break;
      case id.TLS:
        opTLSBehind(opIndex, phraseIndex, sysData);
        break;
      case id.BKR:
        opBKRBehind(opIndex, phraseIndex, sysData);
        break;
      case id.BKA:
        opBKA(opIndex, phraseIndex, sysData);
        break;
      case id.BKN:
        opBKN(opIndex, phraseIndex, sysData);
        break;
      case id.ABG:
        opABG(opIndex, phraseIndex, sysData);
        break;
      case id.AEN:
        opAEN(opIndex, phraseIndex, sysData);
        break;
      default:
        ret = false;
        break;
      }
    } else {
      switch (op.type) {
      case id.ALT:
        opALT(opIndex, phraseIndex, sysData);
        break;
      case id.CAT:
        opCAT(opIndex, phraseIndex, sysData);
        break;
      case id.REP:
        opREP(opIndex, phraseIndex, sysData);
        break;
      case id.RNM:
        opRNM(opIndex, phraseIndex, sysData);
        break;
      case id.UDT:
        opUDT(opIndex, phraseIndex, sysData);
        break;
      case id.AND:
        opAND(opIndex, phraseIndex, sysData);
        break;
      case id.NOT:
        opNOT(opIndex, phraseIndex, sysData);
        break;
      case id.TRG:
        opTRG(opIndex, phraseIndex, sysData);
        break;
      case id.TBS:
        opTBS(opIndex, phraseIndex, sysData);
        break;
      case id.TLS:
        opTLS(opIndex, phraseIndex, sysData);
        break;
      case id.BKR:
        opBKR(opIndex, phraseIndex, sysData);
        break;
      case id.BKA:
        opBKA(opIndex, phraseIndex, sysData);
        break;
      case id.BKN:
        opBKN(opIndex, phraseIndex, sysData);
        break;
      case id.ABG:
        opABG(opIndex, phraseIndex, sysData);
        break;
      case id.AEN:
        opAEN(opIndex, phraseIndex, sysData);
        break;
      default:
        ret = false;
        break;
      }
    }
    if (!inLookAround() && (phraseIndex + sysData.phraseLength > maxMatched)) {
      maxMatched = phraseIndex + sysData.phraseLength;
    }
    if (_this.stats !== null) {
      /* collect the statistics */
      _this.stats.collect(op, sysData);
    }
    if (_this.trace !== null) {
      /* collect the trace record for up the parse tree */
      var lk = lookAroundValue();
      _this.trace.up(op, sysData.state, phraseIndex, sysData.phraseLength, lk.anchor, lk.lookAround);
    }
    treeDepth -= 1;
    return ret;
  };
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// This module is the constructor for the statistics gathering object.
// The statistics are nothing more than keeping a count of the 
// number of times each node in the parse tree is traversed.
//
// Counts are collected for each of the individual types of operators.
// Additionally, counts are collected for each of the individually named
// `RNM` and `UDT` operators.
module.exports = function() {
  "use strict";
  var thisFileName = "stats.js: ";
  var id = __webpack_require__(1);
  var utils = __webpack_require__(2);
  var style = __webpack_require__(3);
  var rules = [];
  var udts = [];
  var stats = [];
  var totals;
  var ruleStats = [];
  var udtStats = [];
  this.statsObject = "statsObject";
  var nameId = 'stats';
  /* `Array.sort()` callback function for sorting `RNM` and `UDT` operators alphabetically by name. */
  var sortAlpha = function(lhs, rhs) {
    if (lhs.lower < rhs.lower) {
      return -1;
    }
    if (lhs.lower > rhs.lower) {
      return 1;
    }
    return 0;
  }
  /* `Array.sort()` callback function for sorting `RNM` and `UDT` operators by hit count. */
  var sortHits = function(lhs, rhs) {
    if (lhs.total < rhs.total) {
      return 1;
    }
    if (lhs.total > rhs.total) {
      return -1;
    }
    return sortAlpha(lhs, rhs);
  }
  /* `Array.sort()` callback function for sorting `RNM` and `UDT` operators by index */
  /* (in the order in which they appear in the SABNF grammar). */
  var sortIndex = function(lhs, rhs) {
    if (lhs.index < rhs.index) {
      return -1;
    }
    if (lhs.index > rhs.index) {
      return 1;
    }
    return 0;
  }
  var emptyStat = function(){
    this.empty = 0;
    this.match = 0;
    this.nomatch = 0;
    this.total = 0;
  }
  /* Zero out all stats */
  var clear = function() {
    stats.length = 0;
    totals = new emptyStat();
    stats[id.ALT] = new emptyStat();
    stats[id.CAT] = new emptyStat();
    stats[id.REP] = new emptyStat();
    stats[id.RNM] = new emptyStat();
    stats[id.TRG] = new emptyStat();
    stats[id.TBS] = new emptyStat();
    stats[id.TLS] = new emptyStat();
    stats[id.UDT] = new emptyStat();
    stats[id.AND] = new emptyStat();
    stats[id.NOT] = new emptyStat();
    stats[id.BKR] = new emptyStat();
    stats[id.BKA] = new emptyStat();
    stats[id.BKN] = new emptyStat();
    stats[id.ABG] = new emptyStat();
    stats[id.AEN] = new emptyStat();
    ruleStats.length = 0;
    for (var i = 0; i < rules.length; i += 1) {
      ruleStats.push({
        empty : 0,
        match : 0,
        nomatch : 0,
        total : 0,
        name : rules[i].name,
        lower : rules[i].lower,
        index : rules[i].index
      });
    }
    if (udts.length > 0) {
      udtStats.length = 0;
      for (var i = 0; i < udts.length; i += 1) {
        udtStats.push({
          empty : 0,
          match : 0,
          nomatch : 0,
          total : 0,
          name : udts[i].name,
          lower : udts[i].lower,
          index : udts[i].index
        });
      }
    }
  };
  /* increment the designated operator hit count by one*/
  var incStat = function(stat, state, phraseLength) {
    stat.total += 1;
    switch (state) {
    case id.EMPTY:
      stat.empty += 1;
      break;
    case id.MATCH:
      stat.match += 1;
      break;
    case id.NOMATCH:
      stat.nomatch += 1;
      break;
    default:
      throw thisFileName + "collect(): incStat(): unrecognized state: " + state;
    }
  }
  /* helper for toHtml() */
  var displayRow = function(name, stat){
    var html = '';
    html += '<tr>';
    html += '<td class="'+style.CLASS_ACTIVE+'">'+name+'</td>';
    html += '<td class="'+style.CLASS_EMPTY+'">' + stat.empty + '</td>';
    html += '<td class="'+style.CLASS_MATCH+'">' + stat.match + '</td>';
    html += '<td class="'+style.CLASS_NOMATCH+'">' + stat.nomatch + '</td>';
    html += '<td class="'+style.CLASS_ACTIVE+'">' + stat.total + '</td>';
    html += '</tr>\n';
    return html;
  }
  var displayOpsOnly = function() {
    var html = '';
    html += displayRow("ALT", stats[id.ALT]);
    html += displayRow("CAT", stats[id.CAT]);
    html += displayRow("REP", stats[id.REP]);
    html += displayRow("RNM", stats[id.RNM]);
    html += displayRow("TRG", stats[id.TRG]);
    html += displayRow("TBS", stats[id.TBS]);
    html += displayRow("TLS", stats[id.TLS]);
    html += displayRow("UDT", stats[id.UDT]);
    html += displayRow("AND", stats[id.AND]);
    html += displayRow("NOT", stats[id.NOT]);
    html += displayRow("BKR", stats[id.BKR]);
    html += displayRow("BKA", stats[id.BKA]);
    html += displayRow("BKN", stats[id.BKN]);
    html += displayRow("ABG", stats[id.ABG]);
    html += displayRow("AEN", stats[id.AEN]);
    html += displayRow("totals", totals);
    return html;
  }
  /* helper for toHtml() */
  var displayRules = function() {
    var html = "";
    html += '<tr><th></th><th></th><th></th><th></th><th></th></tr>\n';
    html += '<tr><th>rules</th><th></th><th></th><th></th><th></th></tr>\n';
    for (var i = 0; i < rules.length; i += 1) {
      if (ruleStats[i].total > 0) {
        html += '<tr>';
        html += '<td class="'+style.CLASS_ACTIVE+'">' + ruleStats[i].name + '</td>';
        html += '<td class="'+style.CLASS_EMPTY+'">' + ruleStats[i].empty + '</td>';
        html += '<td class="'+style.CLASS_MATCH+'">' + ruleStats[i].match + '</td>';
        html += '<td class="'+style.CLASS_NOMATCH+'">' + ruleStats[i].nomatch + '</td>';
        html += '<td class="'+style.CLASS_ACTIVE+'">' + ruleStats[i].total + '</td>';
        html += '</tr>\n';
      }
    }
    if (udts.length > 0) {
      html += '<tr><th></th><th></th><th></th><th></th><th></th></tr>\n';
      html += '<tr><th>udts</th><th></th><th></th><th></th><th></th></tr>\n';
      for (var i = 0; i < udts.length; i += 1) {
        if (udtStats[i].total > 0) {
          html += '<tr>';
          html += '<td class="'+style.CLASS_ACTIVE+'">' + udtStats[i].name + '</td>';
          html += '<td class="'+style.CLASS_EMPTY+'">' + udtStats[i].empty + '</td>';
          html += '<td class="'+style.CLASS_MATCH+'">' + udtStats[i].match + '</td>';
          html += '<td class="'+style.CLASS_NOMATCH+'">' + udtStats[i].nomatch + '</td>';
          html += '<td class="'+style.CLASS_ACTIVE+'">' + udtStats[i].total + '</td>';
          html += '</tr>\n';
        }
      }
    }
    return html;
  }
  /* called only by the parser to validate a stats object*/
  this.validate = function(name) {
    var ret = false;
    if (typeof (name) === 'string' && nameId === name) {
      ret = true;
    }
    return ret;
  }
  /* no verification of input - only called by parser() */
  this.init = function(inputRules, inputUdts) {
    rules = inputRules;
    udts = inputUdts;
    clear();
  }
  /* This function is the main interaction with the parser. */
  /* The parser calls it after each node has been traversed. */
  this.collect = function(op, result) {
    incStat(totals, result.state, result.phraseLength);
    incStat(stats[op.type], result.state, result.phraseLength);
    if (op.type === id.RNM) {
      incStat(ruleStats[op.index], result.state, result.phraseLength);
    }
    if (op.type === id.UDT) {
      incStat(udtStats[op.index], result.state, result.phraseLength);
    }
  };
  // Display the statistics as an HTML table.
  // - *type*
  //   - "ops" - (default) display only the total hit counts for all operator types.
  //   - "index" - additionally, display the hit counts for the individual `RNM` and `UDT` operators ordered by index.
  //   - "hits" - additionally, display the hit counts for the individual `RNM` and `UDT` operators by hit count.
  //   - "alpha" - additionally, display the hit counts for the individual `RNM` and `UDT` operators by name alphabetically.
  // - *caption* - optional caption for the table
  this.toHtml = function(type, caption) {
    var html = "";
    html += '<table class="'+style.CLASS_STATS+'">\n';
    if (typeof (caption) === "string") {
      html += '<caption>' + caption + '</caption>\n';
    }
    html += '<tr><th class="'+style.CLASS_ACTIVE+'">ops</th>\n';
    html += '<th class="'+style.CLASS_EMPTY+'">EMPTY</th>\n';
    html += '<th class="'+style.CLASS_MATCH+'">MATCH</th>\n';
    html += '<th class="'+style.CLASS_NOMATCH+'">NOMATCH</th>\n';
    html += '<th class="'+style.CLASS_ACTIVE+'">totals</th></tr>\n';
    while (true) {
      if (type === undefined) {
        html += displayOpsOnly();
        break;
      }
      if (type === null) {
        html += displayOpsOnly();
        break;
      }
      if (type === "ops") {
        html += displayOpsOnly();
        break;
      }
      if (type === "index") {
        ruleStats.sort(sortIndex);
        if (udtStats.length > 0) {
          udtStats.sort(sortIndex);
        }
        html += displayOpsOnly();
        html += displayRules();
        break;
      }
      if (type === "hits") {
        ruleStats.sort(sortHits);
        if (udtStats.length > 0) {
          udtStats.sort(sortIndex);
        }
        html += displayOpsOnly();
        html += displayRules();
        break;
      }
      if (type === "alpha") {
        ruleStats.sort(sortAlpha);
        if (udtStats.length > 0) {
          udtStats.sort(sortAlpha);
        }
        html += displayOpsOnly();
        html += displayRules();
        break;
      }
      break;
    }
    html += "</table>\n";
    return html;
  }
  // Display the stats table in a complete HTML5 page.
  this.toHtmlPage = function(type, caption, title) {
    return utils.htmlToPage(this.toHtml(type, caption), title);
  }
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// This module provides a means of tracing the parser through the parse tree as it goes.
// It is the primary debugging facility for debugging both the SABNF grammar syntax
// and the input strings that are supposed to be valid grammar sentences.
// It is also a very informative and educational tool for understanding
// how a parser actually operates for a given language.
//
// Tracing is the process of generating and saving a record of information for each passage
// of the parser through a parse tree node. And since it traverses each node twice, once down the tree
// and once coming back up, there are two records for each node.
// This, obviously, has the potential of generating lots of records.
// And since these records are normally displayed on a web page
// it is important to have a means to limit the actual number of records generated to
// probably no more that a few thousand. This is almost always enough to find any errors.
// The problem is to get the *right* few thousand records.
// Therefore, this module has a number of ways of limiting and/or filtering, the number and type of records.
// Considerable effort has been made to make this filtering of the trace output as simple
// and intuitive as possible. In [previous versions](http://coasttocoastresearch.com/)
// of the APG library this has admittedly not been very clean.
//
// However, the ability to filter the trace records, or for that matter even understand what they are
// and the information they contain, does require a minimum amount of understanding of the APG parsing
// method. The parse tree nodes are all represented by APG operators. They break down into two natural groups.
// - The `RNM` operators and `UDT` operators are named phrases.
// These are names chosen by the writer of the SABNF grammar to represent special phrases of interest.
// - All others collect, concatenate and otherwise manipulate various intermediate phrases along the way.
//
// There are separate means of filtering which of these operators in each of these two groups get traced.
// Let `trace` be an instantiated `trace.js` object.
// Prior to parsing the string, filtering the rules and UDTs can be defined as follows:
//```
// trace.filter.rules["rulename"] = true;
//     /* trace rule name "rulename" */
// trace.filter.rules["udtname"]  = true;
//     /* trace UDT name "udtname" */
// trace.filter.rules["<ALL>"]    = true;
//     /* trace all rules and UDTs (the default) */
// trace.filter.rules["<NONE>"]   = true;
//     /* trace no rules or UDTS */
//```
// If any rule or UDT name other than "&lt;ALL>" or "&lt;NONE>" is specified, all other names are turned off.
// Therefore, to be selective of rule names, a filter statement is required for each rule/UDT name desired.
//
// Filtering of the other operators follows a similar procedure.
//```
// trace.filter.operators["TRG"] = true;
//     /* trace the terminal range, TRG, operators */
// trace.filter.operators["CAT"]  = true;
//     /* trace the concatenations, CAT, operators */
// trace.filter.operators["<ALL>"]    = true;
//     /* trace all operators */
// trace.filter.operators["<NONE>"]   = true;
//     /* trace no operators (the default) */
//```
// If any operator name other than "&lt;ALL>" or "&lt;NONE>" is specified, all other names are turned off.
// Therefore, to be selective of operator names, a filter statement is required for each name desired.
//
// There is, additionally, a means for limiting the total number of filtered or saved trace records.
// See the function, `setMaxRecords(max)` below. This will result in only the last `max` records being saved. 
// 
// (See [`apg-examples`](https://github.com/ldthomas/apg-js2-examples) for examples of using `trace.js`.)
module.exports = function() {
  "use strict";
  var thisFileName = "trace.js: ";
  var that = this;
  var MODE_HEX = 16;
  var MODE_DEC = 10;
  var MODE_ASCII = 8;
  var MODE_UNICODE = 32;
  var MAX_PHRASE = 80;
  var MAX_TLS = 5;
  var utils = __webpack_require__(2);
  var style = __webpack_require__(3);
  var circular = new (__webpack_require__(8))();
  var id = __webpack_require__(1);
  var records = [];
  var maxRecords = 5000;
  var lastRecord = -1;
  var filteredRecords = 0;
  var treeDepth = 0;
  var recordStack = [];
  var chars = null;
  var rules = null;
  var udts = null;
  var operatorFilter = [];
  var ruleFilter = [];
  /* special trace table phrases */
  var PHRASE_END = '<span class="' + style.CLASS_LINEEND + '">&bull;</span>';
  var PHRASE_CONTINUE = '<span class="' + style.CLASS_LINEEND + '">&hellip;</span>';
  var PHRASE_EMPTY = '<span class="' + style.CLASS_EMPTY + '">&#120634;</span>';
  /* filter the non-RNM & non-UDT operators */
  var initOperatorFilter = function() {
    var setOperators = function(set) {
      operatorFilter[id.ALT] = set;
      operatorFilter[id.CAT] = set;
      operatorFilter[id.REP] = set;
      operatorFilter[id.TLS] = set;
      operatorFilter[id.TBS] = set;
      operatorFilter[id.TRG] = set;
      operatorFilter[id.AND] = set;
      operatorFilter[id.NOT] = set;
      operatorFilter[id.BKR] = set;
      operatorFilter[id.BKA] = set;
      operatorFilter[id.BKN] = set;
      operatorFilter[id.ABG] = set;
      operatorFilter[id.AEN] = set;
    }
    var items = 0;
    for ( var name in that.filter.operators) {
      items += 1;
    }
    if (items === 0) {
      /* case 1: no operators specified: default: do not trace any operators */
      setOperators(false);
      return;
    }
    for ( var name in that.filter.operators) {
      var upper = name.toUpperCase();
      if (upper === '<ALL>') {
        /* case 2: <all> operators specified: trace all operators ignore all other operator commands */
        setOperators(true);
        return;
      }
      if (upper === '<NONE>') {
        /* case 3: <none> operators specified: trace NO operators ignore all other operator commands */
        setOperators(false);
        return;
      }
    }
    setOperators(false);
    for ( var name in that.filter.operators) {
      var upper = name.toUpperCase();
      /* case 4: one or more individual operators specified: trace 'true' operators only */
      if (upper === 'ALT') {
        operatorFilter[id.ALT] = (that.filter.operators[name] === true) ? true: false;
      } else if (upper === 'CAT') {
        operatorFilter[id.CAT] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'REP') {
        operatorFilter[id.REP] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'AND') {
        operatorFilter[id.AND] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'NOT') {
        operatorFilter[id.NOT] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'TLS') {
        operatorFilter[id.TLS] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'TBS') {
        operatorFilter[id.TBS] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'TRG') {
        operatorFilter[id.TRG] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'BKR') {
        operatorFilter[id.BKR] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'BKA') {
        operatorFilter[id.BKA] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'BKN') {
        operatorFilter[id.BKN] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'ABG') {
        operatorFilter[id.ABG] = (that.filter.operators[name] === true) ? true: false;;
      } else if (upper === 'AEN') {
        operatorFilter[id.AEN] = (that.filter.operators[name] === true) ? true: false;;
      } else {
        throw new Error(thisFileName + "initOpratorFilter: '" + name + "' not a valid operator name."
            + " Must be <all>, <none>, alt, cat, rep, tls, tbs, trg, and, not, bkr, bka or bkn");
      }
    }
  }
  /* filter the rule and `UDT` named operators */
  var initRuleFilter = function() {
    var setRules = function(set) {
      operatorFilter[id.RNM] = set;
      operatorFilter[id.UDT] = set;
      var count = rules.length + udts.length
      ruleFilter.length = 0;
      for (var i = 0; i < count; i += 1) {
        ruleFilter.push(set);
      }
    }
    var items, i, list = [];
    for (i = 0; i < rules.length; i += 1) {
      list.push(rules[i].lower);
    }
    for (i = 0; i < udts.length; i += 1) {
      list.push(udts[i].lower);
    }
    ruleFilter.length = 0;
    items = 0;
    for ( var name in that.filter.rules) {
      items += 1;
    }
    if (items === 0) {
      /* case 1: default to all rules & udts */
      setRules(true);
      return;
    }
    for ( var name in that.filter.rules) {
      var lower = name.toLowerCase();
      if (lower === '<all>') {
        /* case 2: trace all rules ignore all other rule commands */
        setRules(true);
        return;
      }
      if (lower === '<none>') {
        /* case 3: trace no rules */
        setRules(false);
        return;
      }
    }
    /* case 4: trace only individually specified rules */
    setRules(false);
    operatorFilter[id.RNM] = true;
    operatorFilter[id.UDT] = true;
    for ( var name in that.filter.rules) {
      var lower = name.toLowerCase();
      i = list.indexOf(lower);
      if (i < 0) {
        throw new Error(thisFileName + "initRuleFilter: '" + name + "' not a valid rule or udt name");
      }
      ruleFilter[i] = (that.filter.rules[name] === true) ? true: false;;
    }
  }
  /* used by other APG components to verify that they have a valid trace object */
  this.traceObject = "traceObject";
  this.filter = {
    operators : [],
    rules : []
  }
  // Set the maximum number of records to keep (default = 5000).
  // Each record number larger than `maxRecords`
  // will result in deleting the previously oldest record.
  this.setMaxRecords = function(max, last) {
    if (typeof (max) === "number" && max > 0) {
      maxRecords = Math.ceil(max);
    }
    if(typeof(last) === "number"){
      lastRecord = Math.floor(last);
      if(lastRecord < 0){
        lastRecord = -1;
      }else if(lastRecord < maxRecords){
        lastRecord = maxRecords;
      }
    }
  }
  // Returns `maxRecords` to the caller.
  this.getMaxRecords = function() {
    return maxRecords;
  }
  /* Called only by the `parser.js` object. No verification of input. */
  this.init = function(rulesIn, udtsIn, charsIn) {
    records.length = 0;
    recordStack.length = 0;
    filteredRecords = 0;
    treeDepth = 0;
    chars = charsIn;
    rules = rulesIn;
    udts = udtsIn;
    initOperatorFilter();
    initRuleFilter();
    circular.init(maxRecords);
  };
  /* returns true if this records passes through the designated filter, false if the record is to be skipped */
  var filterOps = function(op) {
    var ret = false;
    if (op.type === id.RNM) {
      if (operatorFilter[op.type] && ruleFilter[op.index]) {
        ret = true;
      } else {
        ret = false;
      }
    } else if (op.type === id.UDT) {
      if (operatorFilter[op.type] && ruleFilter[rules.length + op.index]) {
        ret = true;
      } else {
        ret = false;
      }
    } else {
      ret = operatorFilter[op.type];
    }
    return ret;
  }
  var filterRecords = function(record){
    if((lastRecord === -1) || (record <= lastRecord)){
      return true;
    }
    return false;
  }
  /* Collect the "down" record. */
  this.down = function(op, state, offset, length, anchor, lookAround) {
    if (filterRecords(filteredRecords) && filterOps(op)) {
      recordStack.push(filteredRecords);
      records[circular.increment()] = {
        dirUp : false,
        depth : treeDepth,
        thisLine : filteredRecords,
        thatLine : undefined,
        opcode : op,
        state : state,
        phraseIndex : offset,
        phraseLength : length,
        lookAnchor : anchor,
        lookAround : lookAround
      };
      filteredRecords += 1;
      treeDepth += 1;
    }
  };
  /* Collect the "up" record. */
  this.up = function(op, state, offset, length, anchor, lookAround) {
    if (filterRecords(filteredRecords) && filterOps(op)) {
      var thisLine = filteredRecords;
      var thatLine = recordStack.pop();
      var thatRecord = circular.getListIndex(thatLine);
      if (thatRecord !== -1) {
        records[thatRecord].thatLine = thisLine;
      }
      treeDepth -= 1;
      records[circular.increment()] = {
        dirUp : true,
        depth : treeDepth,
        thisLine : thisLine,
        thatLine : thatLine,
        opcode : op,
        state : state,
        phraseIndex : offset,
        phraseLength : length,
        lookAnchor : anchor,
        lookAround : lookAround
      };
      filteredRecords += 1;
    }
  };
  // Translate the trace records to HTML format.
  // - *modearg* - can be `"ascii"`, `"decimal"`, `"hexidecimal"` or `"unicode"`.
  // Determines the format of the string character code display.
  // - *caption* - optional caption for the HTML table.
  this.toHtml = function(modearg, caption) {
    /* writes the trace records as a table in a complete html page */
    var mode = MODE_ASCII;
    if (typeof (modearg) === "string" && modearg.length >= 3) {
      var modein = modearg.toLowerCase().slice(0, 3);
      if (modein === 'hex') {
        mode = MODE_HEX;
      } else if (modein === 'dec') {
        mode = MODE_DEC;
      } else if (modein === 'uni') {
        mode = MODE_UNICODE;
      }
    }
    var html = "";
    html += htmlHeader(mode, caption);
    html += htmlTable(mode);
    html += htmlFooter();
    return html;
  }
  // Translate the trace records to HTML format and create a complete HTML page for browser display.
  this.toHtmlPage = function(mode, caption, title){
    return utils.htmlToPage(this.toHtml(mode, caption), title);
  }

  /* From here on down, these are just helper functions for `toHtml()`. */
  var htmlHeader = function(mode, caption) {
    /* open the page */
    /* write the HTML5 header with table style */
    /* open the <table> tag */
    var modeName;
    switch (mode) {
    case MODE_HEX:
      modeName = "hexidecimal";
      break;
    case MODE_DEC:
      modeName = "decimal";
      break;
    case MODE_ASCII:
      modeName = "ASCII";
      break;
    case MODE_UNICODE:
      modeName = "UNICODE";
      break;
    default:
      throw new Error(thisFileName + "htmlHeader: unrecognized mode: " + mode);
    }
    var header = '';
    header += '<p>display mode: ' + modeName + '</p>\n';
    header += '<table class="'+style.CLASS_TRACE+'">\n';
    if (typeof (caption) === "string") {
      header += '<caption>' + caption + '</caption>';
    }
    return header;
  }
  var htmlFooter = function() {
    var footer = "";
    /* close the </table> tag */
    footer += '</table>\n';
    /* display a table legend */
    footer += '<p class="'+style.CLASS_MONOSPACE+'">legend:<br>\n';
    footer += '(a)&nbsp;-&nbsp;line number<br>\n';
    footer += '(b)&nbsp;-&nbsp;matching line number<br>\n';
    footer += '(c)&nbsp;-&nbsp;phrase offset<br>\n';
    footer += '(d)&nbsp;-&nbsp;phrase length<br>\n';
    footer += '(e)&nbsp;-&nbsp;tree depth<br>\n';
    footer += '(f)&nbsp;-&nbsp;operator state<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_ACTIVE + '">&darr;</span>&nbsp;&nbsp;phrase opened<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_MATCH + '">&uarr;M</span> phrase matched<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_EMPTY + '">&uarr;E</span> empty phrase matched<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_NOMATCH + '">&uarr;N</span> phrase not matched<br>\n';
    footer += 'operator&nbsp;-&nbsp;ALT, CAT, REP, RNM, TRG, TLS, TBS<sup>&dagger;</sup>, UDT, AND, NOT, BKA, BKN, BKR, ABG, AEN<sup>&Dagger;</sup><br>\n';
    footer += 'phrase&nbsp;&nbsp;&nbsp;-&nbsp;up to ' + MAX_PHRASE + ' characters of the phrase being matched<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_MATCH
    + '">matched characters</span><br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_LOOKAHEAD
    + '">matched characters in look ahead mode</span><br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_LOOKBEHIND
    + '">matched characters in look behind mode</span><br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_REMAINDER
        + '">remainder characters(not yet examined by parser)</span><br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="' + style.CLASS_CTRLCHAR
        + '">control characters, TAB, LF, CR, etc. (ASCII mode only)</span><br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;' + PHRASE_EMPTY + ' empty string<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;' + PHRASE_END + ' end of input string<br>\n';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;' + PHRASE_CONTINUE
        + ' input string display truncated<br>\n';
    footer += '</p>\n';
    footer += '<p class="'+style.CLASS_MONOSPACE+'">\n';
    footer += '<sup>&dagger;</sup>original ABNF operators:<br>\n';
    footer += 'ALT - alternation<br>\n';
    footer += 'CAT - concatenation<br>\n';
    footer += 'REP - repetition<br>\n';
    footer += 'RNM - rule name<br>\n';
    footer += 'TRG - terminal range<br>\n';
    footer += 'TLS - terminal literal string (case insensitive)<br>\n';
    footer += 'TBS - terminal binary string (case sensitive)<br>\n';
    footer += '<br>\n';
    footer += '<sup>&Dagger;</sup>super set SABNF operators:<br>\n';
    footer += 'UDT - user-defined terminal<br>\n';
    footer += 'AND - positive look ahead<br>\n';
    footer += 'NOT - negative look ahead<br>\n';
    footer += 'BKA - positive look behind<br>\n';
    footer += 'BKN - negative look behind<br>\n';
    footer += 'BKR - back reference<br>\n';
    footer += 'ABG - anchor - begin of input string<br>\n';
    footer += 'AEN - anchor - end of input string<br>\n';
    footer += '</p>\n';
    return footer;
  }
  /* Returns the filtered records, formatted as an HTML table. */
  var htmlTable = function(mode) {
    if (rules === null) {
      return "";
    }
    var html = '';
    var thisLine, thatLine, lookAhead, lookBehind, lookAround, anchor;
    html += '<tr><th>(a)</th><th>(b)</th><th>(c)</th><th>(d)</th><th>(e)</th><th>(f)</th>';
    html += '<th>operator</th><th>phrase</th></tr>\n';
    circular.forEach(function(lineIndex, index) {
      var line = records[lineIndex];
      thisLine = line.thisLine;
      thatLine = (line.thatLine !== undefined) ? line.thatLine : '--';
      lookAhead = false;
      lookBehind = false;
      lookAround = false;
      if (line.lookAround === id.LOOKAROUND_AHEAD) {
        lookAhead = true;
        lookAround = true;
        anchor = line.lookAnchor;
      }
      if (line.opcode.type === id.AND ||
          line.opcode.type === id.NOT) {
        lookAhead = true;
        lookAround = true;
        anchor = line.phraseIndex;
      }
      if (line.lookAround === id.LOOKAROUND_BEHIND){
        lookBehind = true;
        lookAround = true;
        anchor = line.lookAnchor;
      }
      if (line.opcode.type === id.BKA ||
          line.opcode.type === id.BKN) {
        lookBehind = true;
        lookAround = true;
        anchor = line.phraseIndex;
      }
      html += '<tr>';
      html += '<td>' + thisLine + '</td><td>' + thatLine + '</td>';
      html += '<td>' + line.phraseIndex + '</td>';
      html += '<td>' + line.phraseLength + '</td>';
      html += '<td>' + line.depth + '</td>';
      html += '<td>';
      switch (line.state) {
      case id.ACTIVE:
        html += '<span class="' + style.CLASS_ACTIVE + '">&darr;&nbsp;</span>';
        break;
      case id.MATCH:
        html += '<span class="' + style.CLASS_MATCH + '">&uarr;M</span>';
        break;
      case id.NOMATCH:
        html += '<span class="' + style.CLASS_NOMATCH + '">&uarr;N</span>';
        break;
      case id.EMPTY:
        html += '<span class="' + style.CLASS_EMPTY + '">&uarr;E</span>';
        break;
      default:
        html += '<span class="' + style.CLASS_ACTIVE + '">--</span>';
        break;
      }
      html += '</td>';
      html += '<td>';
      html += that.indent(line.depth);
      if (lookAhead) {
        html += '<span class="' + style.CLASS_LOOKAHEAD + '">';
      }else  if (lookBehind) {
        html += '<span class="' + style.CLASS_LOOKBEHIND + '">';
      }
      html += utils.opcodeToString(line.opcode.type);
      if (line.opcode.type === id.RNM) {
        html += '(' + rules[line.opcode.index].name + ') ';
      }
      if (line.opcode.type === id.BKR) {
        var casetype = line.opcode.bkrCase === id.BKR_MODE_CI ? "%i" : "%s";
        var modetype = line.opcode.bkrMode === id.BKR_MODE_UM ? "%u" : "%p";
        html += '(\\' + casetype + modetype + rules[line.opcode.index].name + ') ';
      }
      if (line.opcode.type === id.UDT) {
        html += '(' + udts[line.opcode.index].name + ') ';
      }
      if (line.opcode.type === id.TRG) {
        html += '(' + displayTrg(mode, line.opcode) + ') ';
      }
      if (line.opcode.type === id.TBS) {
        html += '(' + displayTbs(mode, line.opcode) + ') ';
      }
      if (line.opcode.type === id.TLS) {
        html += '(' + displayTls(mode, line.opcode) + ') ';
      }
      if (line.opcode.type === id.REP) {
        html += '(' + displayRep(mode, line.opcode) + ') ';
      }
      if (lookAround) {
        html += '</span>';
      }
      html += '</td>';
      html += '<td>';
      if (lookBehind) {
        html += displayBehind(mode, chars, line.state, line.phraseIndex, line.phraseLength, anchor);
      } else if(lookAhead){
        html += displayAhead(mode, chars, line.state, line.phraseIndex, line.phraseLength);
      }else{
        html += displayNone(mode, chars, line.state, line.phraseIndex, line.phraseLength);
      }
      html += '</td></tr>\n';

    });
    html += '<tr><th>(a)</th><th>(b)</th><th>(c)</th><th>(d)</th><th>(e)</th><th>(f)</th>';
    html += '<th>operator</th><th>phrase</th></tr>\n';
    html += '</table>\n';
    return html;
  };
  this.indent = function(depth) {
    var html = '';
    for (var i = 0; i < depth; i += 1) {
      html += '.';
    }
    return html;
  };
  /* format the TRG operator */
  var displayTrg = function(mode, op) {
    var html = "";
    if (op.type === id.TRG) {
      if (mode === MODE_HEX || mode === MODE_UNICODE) {
        var hex = op.min.toString(16).toUpperCase();
        if (hex.length % 2 !== 0) {
          hex = "0" + hex;
        }
        html += (mode === MODE_HEX) ? "%x" : "U+";
        html += hex;
        hex = op.max.toString(16).toUpperCase();
        if (hex.length % 2 !== 0) {
          hex = "0" + hex;
        }
        html += "&ndash;" + hex;
      } else {
        html = "%d" + op.min.toString(10) + "&ndash;" + op.max.toString(10);
      }
    }
    return html;
  }
  /* format the REP operator */
  var displayRep = function(mode, op) {
    var html = "";
    if (op.type === id.REP) {
      if (mode === MODE_HEX) {
        var hex = op.min.toString(16).toUpperCase();
        if (hex.length % 2 !== 0) {
          hex = "0" + hex;
        }
        html = "x" + hex;
        if (op.max < Infinity) {
          hex = op.max.toString(16).toUpperCase();
          if (hex.length % 2 !== 0) {
            hex = "0" + hex;
          }
        } else {
          hex = "inf";
        }
        html += "&ndash;" + hex;
      } else {
        if (op.max < Infinity) {
          html = op.min.toString(10) + "&ndash;" + op.max.toString(10);
        } else {
          html = op.min.toString(10) + "&ndash;" + "inf";
        }
      }
    }
    return html;
  }
  /* format the TBS operator */
  var displayTbs = function(mode, op) {
    var html = "";
    if (op.type === id.TBS) {
      var len = Math.min(op.string.length, MAX_TLS * 2);
      if (mode === MODE_HEX || mode === MODE_UNICODE) {
        html += (mode === MODE_HEX) ? "%x" : "U+";
        for (var i = 0; i < len; i += 1) {
          var hex;
          if (i > 0) {
            html += ".";
          }
          hex = op.string[i].toString(16).toUpperCase();
          if (hex.length % 2 !== 0) {
            hex = "0" + hex;
          }
          html += hex;
        }
      } else {
        html = "%d";
        for (var i = 0; i < len; i += 1) {
          if (i > 0) {
            html += ".";
          }
          html += op.string[i].toString(10);
        }
      }
      if (len < op.string.length) {
        html += PHRASE_CONTINUE;
      }
    }
    return html;
  }
  /* format the TLS operator */
  var displayTls = function(mode, op) {
    var html = "";
    if (op.type === id.TLS) {
      var len = Math.min(op.string.length, MAX_TLS);
      if (mode === MODE_HEX || mode === MODE_DEC) {
        var charu, charl, base;
        if (mode === MODE_HEX) {
          html = "%x";
          base = 16;
        } else {
          html = "%d";
          base = 10;
        }
        for (var i = 0; i < len; i += 1) {
          if (i > 0) {
            html += ".";
          }
          charl = op.string[i];
          if (charl >= 97 && charl <= 122) {
            charu = charl - 32;
            html += (charu.toString(base) + '/' + charl.toString(base)).toUpperCase();
          } else if (charl >= 65 && charl <= 90) {
            charu = charl;
            charl += 32;
            html += (charu.toString(base) + '/' + charl.toString(base)).toUpperCase();
          } else {
            html += charl.toString(base).toUpperCase();
          }
        }
        if (len < op.string.length) {
          html += PHRASE_CONTINUE;
        }
      } else {
        html = '"';
        for (var i = 0; i < len; i += 1) {
          html += utils.asciiChars[op.string[i]];
        }
        if (len < op.string.length) {
          html += PHRASE_CONTINUE;
        }
        html += '"';
      }
    }
    return html;
  }
  /* display phrases matched in look-behind mode */
  var displayBehind = function(mode, chars, state, index, length, anchor) {
    var html = '';
    var beg1, len1, beg2, len2;
    var lastchar = PHRASE_END;
    var spanBehind = '<span class="' + style.CLASS_LOOKBEHIND + '">';
    var spanRemainder = '<span class="' + style.CLASS_REMAINDER + '">'
    var spanend = '</span>';
    var prev = false;
    switch (state) {
    case id.EMPTY:
      html += PHRASE_EMPTY;
    case id.NOMATCH:
    case id.MATCH:
    case id.ACTIVE:
      beg1 = index - length;
      len1 = anchor - beg1;
      beg2 = anchor;
      len2 = chars.length - beg2;
      break;
    }
    lastchar = PHRASE_END;
    if (len1 > MAX_PHRASE) {
      len1 = MAX_PHRASE;
      lastchar = PHRASE_CONTINUE;
      len2 = 0;
    } else if (len1 + len2 > MAX_PHRASE) {
      lastchar = PHRASE_CONTINUE;
      len2 = MAX_PHRASE - len1;
    }
    if(len1 > 0){
      html += spanBehind;
      html += subPhrase(mode, chars, beg1, len1, prev);
      html += spanend;
      prev = true;
    }
    if(len2 > 0){
      html += spanRemainder;
      html += subPhrase(mode, chars, beg2, len2, prev);
      html += spanend;
    }
    return html + lastchar;
  }
  /* display phrases matched in look-ahead mode */
  var displayAhead = function(mode, chars, state, index, length) {
    var spanAhead = '<span class="' + style.CLASS_LOOKAHEAD + '">';
    return displayForward(mode, chars, state, index, length, spanAhead);
  }
  /* display phrases matched in normal parsing mode */
  var displayNone = function(mode, chars, state, index, length) {
    var spanAhead = '<span class="' + style.CLASS_MATCH + '">';
    return displayForward(mode, chars, state, index, length, spanAhead);
  }
  var displayForward = function(mode, chars, state, index, length, spanAhead) {
    var html = '';
    var beg1, len1, beg2, len2;
    var lastchar = PHRASE_END;
    var spanRemainder = '<span class="' + style.CLASS_REMAINDER + '">'
    var spanend = '</span>';
    var prev = false;
    switch (state) {
    case id.EMPTY:
      html += PHRASE_EMPTY;
    case id.NOMATCH:
    case id.ACTIVE:
      beg1 = index;
      len1 = 0;
      beg2 = index;
      len2 = chars.length - beg2;
      break;
    case id.MATCH:
      beg1 = index;
      len1 = length;
      beg2 = index + len1;
      len2 = chars.length - beg2;
      break;
    }
    lastchar = PHRASE_END;
    if (len1 > MAX_PHRASE) {
      len1 = MAX_PHRASE;
      lastchar = PHRASE_CONTINUE;
      len2 = 0;
    } else if (len1 + len2 > MAX_PHRASE) {
      lastchar = PHRASE_CONTINUE;
      len2 = MAX_PHRASE - len1;
    }
    if(len1 > 0){
      html += spanAhead;
      html += subPhrase(mode, chars, beg1, len1, prev);
      html += spanend;
      prev = true;
    }
    if(len2 > 0){
      html += spanRemainder;
      html += subPhrase(mode, chars, beg2, len2, prev);
      html += spanend;
    }
    return html + lastchar;
  }
  var subPhrase = function(mode, chars, index, length, prev) {
    if (length === 0) {
      return "";
    }
    var phrase = "";
    var comma = prev ? "," : "";
    switch (mode) {
    case MODE_HEX:
      phrase = comma + utils.charsToHex(chars, index, length);
      break;
    case MODE_DEC:
      if(prev){
        return "," + utils.charsToDec(chars, index, length);
      }
      phrase = comma + utils.charsToDec(chars, index, length);
      break;
    case MODE_UNICODE:
      phrase = comma + utils.charsToUnicode(chars, index, length);
      break;
    case MODE_ASCII:
    default:
    phrase = utils.charsToAsciiHtml(chars, index, length);
      break;
    }
    return phrase;
  }
}


/***/ })
/******/ ]);