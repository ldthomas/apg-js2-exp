// This module implements the `split()` function.
"use strict;"
var thisFunction = "split.js: split: ";
var apglib = require("apg-lib");
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
