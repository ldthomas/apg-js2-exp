(function(){
  var header = '';
  header += '<h1 id="logo">apg-exp User\'s Guide</h1>';
  header += '<ul>';
  header += '<li id="current"><a href="http://coasttocoastresearch.com/"><span>Home</span></a></li>';
  header += '<li id=""><a href="https://github.com/ldthomas?tab=repositories"><span>GitHub</span></a></li>';
  header += '<li id=""><a href="https://www.npmjs.com/~ldthomas"><span>npm</span></a></li>';
  header += '<li id=""><a href="http://codepen.io/apg-exp/"><span>CodePen</span></a></li></ul>';
  
  var footer = '';
  footer += '<div class="footer-left">';
  footer += '<p class="align-left">';
  footer += '&copy; 2016 <strong>Lowell D. Thomas</strong> | Design by <a href="http://www.styleshout.com/">styleshout</a>';
  footer += '</p></div>';
  footer += '<div class="footer-right">';
  footer += '<p class="align-right">';
  footer += '<a href="http://coasttocoastresearch.com/">Home</a>&nbsp;&nbsp;|&nbsp;';
  footer += '<a href="https://github.com/ldthomas?tab=repositories">GitHub</a>&nbsp;&nbsp;|&nbsp;';
  footer += '<a href="https://www.npmjs.com/~ldthomas">npm</a>&nbsp;&nbsp;|&nbsp; <a href="http://codepen.io/apg-exp/">CodePen</a>';
  footer += '</p></div>';

  var menu = '';
  menu += '<h1>';
  menu += '  <a id="sitemapanchor"></a>Properties';
  menu += '</h1>';
  menu += '<ul class="sidemenu">';
  menu += '<li><a href="./index.html">ApgExp Constructor</a></li>';
  menu += '<li class="subtoc"><a href="./ast.html">ApgExp.ast</a></li>';
  menu += '<li class="subtoc"><a href="./debug.html">ApgExp.debug</a></li>';
  menu += '<li class="subtoc"><a href="./input.html">ApgExp.input ($_)</a></li>';
  menu += '<li class="subtoc"><a href="./flags.html">ApgExp.flags</a></li>';
  menu += '<li class="subtoc"><a href="./global.html">ApgExp.global</a></li>';
  menu += '<li class="subtoc"><a href="./lastIndex.html">ApgExp.lastIndex</a></li>';
  menu += '<li class="subtoc"><a href="./lastMatch.html">ApgExp.lastMatch ($&)</a></li>';
  menu += '<li class="subtoc"><a href="./leftContext.html">ApgExp.leftContext ($`)</a></li>';
  menu += '<li class="subtoc"><a href="./nodeHits.html">ApgExp.nodeHits</a></li>';
  menu += '<li class="subtoc"><a href="./rightContext.html">ApgExp.rightContext ($\')</a></li>';
  menu += '<li class="subtoc"><a href="./rules.html">ApgExp.rules (${rule})</a></li>';
  menu += '<li class="subtoc"><a href="./source.html">ApgExp.source</a></li>';
  menu += '<li class="subtoc"><a href="./sticky.html">ApgExp.sticky</a></li>';
  menu += '<li class="subtoc"><a href="./trace.html">ApgExp.trace</a></li>';
  menu += '<li class="subtoc"><a href="./treeDepth.html">ApgExp.treeDepth</a></li>';
  menu += '<li class="subtoc"><a href="./unicode.html">ApgExp.unicode</a></li>';
  menu += '</ul><h1><a id="sitemapanchor"></a>Methods</h1>';

  menu += '<ul class="sidemenu">';
  menu += '<li><a href="./methods.html">ApgExp Methods</a></li>';
  menu += '<li class="subtoc"><a href="./defineUdt.html">ApgExp.defineUdt()</a></li>';
  menu += '<li class="subtoc"><a href="./exclude.html">ApgExp.exclude()</a></li>';
  menu += '<li class="subtoc"><a href="./exec.html">ApgExp.exec()</a></li>';
  menu += '<li class="subtoc"><a href="./include.html">ApgExp.include()</a></li>';
  menu += '<li class="subtoc"><a href="./maxCallStackDepth.html">ApgExp.maxCallStackDepth()</a></li>';
  menu += '<li class="subtoc"><a href="./replace.html">ApgExp.replace()</a></li>';
  menu += '<li class="subtoc"><a href="./sourceToHtml.html">ApgExp.sourceToHtml()</a></li>';
  menu += '<li class="subtoc"><a href="./sourceToHtmlPage.html">ApgExp.sourceToHtmlPage()</a></li>';
  menu += '<li class="subtoc"><a href="./sourceToText.html">ApgExp.sourceToText()</a></li>';
  menu += '<li class="subtoc"><a href="./split.html">ApgExp.split()</a></li>';
  menu += '<li class="subtoc"><a href="./test.html">ApgExp.test()</a></li>';
  menu += '<li class="subtoc"><a href="./toHtml.html">ApgExp.toHtml()</a></li>';
  menu += '<li class="subtoc"><a href="./toHtmlPage.html">ApgExp.toHtmlPage()</a></li>';
  menu += '<li class="subtoc"><a href="./toText.html">ApgExp.toText()</a></li>';
  menu += '</ul><h1><a id="sitemapanchor"></a>Other</h1>';
  menu += '<ul class="sidemenu">';
  menu += '<li><a href="./apgExpError.html">ApgExpError</a></li>';
  menu += '<li><a href="./result.html">result</a></li>';
  menu += '</ul>';
  
  var element;
  window.onload = function(){
    element = document.getElementById("header");
    element.innerHTML = header;
    element = document.getElementById("sidebar");
    element.innerHTML = menu;
    element = document.getElementById("footer");
    element.innerHTML = footer;
  }
})()