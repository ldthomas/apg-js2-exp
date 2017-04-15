# apg-exp - APG Expressions

**apg-exp** is a regex-like pattern-matching engine that uses a superset of the [ABNF syntax](https://tools.ietf.org/html/rfc5234) for the pattern definitions and [**APG**](https://github.com/ldthomas/apg-js2) to create and apply the pattern-matching parser.

**Tutorial:** Don't miss the [tutorial](https://www.sitepoint.com/alternative-to-regular-expressions/) on [sitepoint.com](https://www.sitepoint.com/).
It will walk you through the basics from simple to some fairly sophisticated pattern matching of nested, paired parentheses and other brackets. (Something you can't do with RegExp.) It's all laid out for you with nine (9), hands-on, [CodePen](http://codepen.io/) examples.

**Complete User's Guide:** A complete user's guide can be found at `./guide/index.html` 
or the [**APG** website](http://coasttocoastresearch.com/docjs2/apg-exp-guide/index.html).

**v2.1.0 release notes:** There are no functional changes in version 2.1.0.
Its dependency on **apg** has been modified to depend instead on the new **apg** API,
[**apg-api**](https://github.com/ldthomas/apg-js2-api).
This removes all dependency on the node.js file system module "fs".
Some development frameworks are incompatible with "fs".

**apg-exp:** By way of introduction, the [regex Wikipedia article](https://en.wikipedia.org/wiki/Regular_expression) would be a good start and Jeffrey Friedl's book, [*Mastering Regular Expressions*](http://www.amazon.com/Mastering-Regular-Expressions-Jeffrey-Friedl/dp/0596528124) would be a lot better and more complete. This introduction will just mention features, a little on motivation and try to point out some possible advantages to **apg-exp**.

**Features:**  
<ol>
<li>
The pattern syntax is a superset of ABNF (<a href="https://github.com/ldthomas/apg-js2/blob/master/SABNF.md">SABNF</a>.) The ABNF syntax is standardized for and used to describe most Internet technical specifications.
</li>
<li>
<b>APG</b> provides error checking and analysis for easy development of an accurate syntax for the desired pattern.
</li>
<li>
Pattern syntax may be input as SABNF text or as an instantiated, <b>APG</b> parser object.
</li>
<li>
Gives the user complete control over the pattern's character codes and their interpretation.
</li>
<li>
Easy access to the full UTF-32 range of Unicode is provided naturally through the integer arrays that make up the character-coded strings and phrases. 
</li>
<li>
Results provide named access to all matched sub-phrases and the indexes where they were found, not just the last matched.
</li>
<li>
Results can be returned as JavaScript strings or raw integer arrays of character codes.
</li>
<li>
Global and "sticky" flags operate nearly identically to the same-named <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">JavaScript RegExp</a> flags.
</li>
<li>
Recursive patterns are natural to the SABNF syntax for easy pair matching of opening and closing parentheses, brackets, HTML tags, etc.
</li>
<li>
Fully implemented lookaround &ndash; positive and negative forms of both look-ahead and infinite-length look-behind.
</li>
<li>
Back referencing &ndash; two modes, universal and parent. See the definitions in the 
<a href="https://github.com/ldthomas/apg-js2/blob/master/SABNF.md">SABNF documentation</a>.
For example, parent mode used with recursion can match not only the opening and closing tags of HTML but also the tag names in them. (See the <a href="https://github.com/ldthomas/apg-js2-examples/tree/master/back-reference">back reference example</a>.)
</li>
<li>
Word and line boundaries are not pre-defined. By making them user-defined they are very flexible but nonetheless very easy to define and use. The user does not have to rely on or guess about what the engine considers a boundary to be.
</li>
<li>
Character classes such as <code>\w</code>, <code>\s</code> and <code>.</code> are not pre-defined, providing greater flexibility and certainty to the meaning of any needed character classes.
</li>
<li>
The syntax allows <b>APG</b>'s User-Defined Terminals (UDTs) &ndash; write your own code for special phrase matching requirements. They make the phrase matching power of <code>apg-exp</code> essentially Turing complete.
</li>
<li>
Provides the user with access to the <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">Abstract Syntax Tree</a> (AST) of the pattern match. The AST can be used for complex translations of the matched phrase.
(See the <a href="https://github.com/ldthomas/apg-js2-examples/blob/master/apg-exp/dangling-else.js">dangling-else</a> example.)
</li>
<li>
Provides the user with access to <b>APG</b>'s trace object which gives a complete, step-by-step picture of the parser's matching process for debugging purposes.
</li>
<li>
A very flexible replacement function for replacing patterns in strings.
</li>
<li>
A split function for using patterns to split strings.
</li>
<li>
A test function for a quick yes/no answer.
</li>
<li>
Tree depth and parser step controls to limit or "put the brakes on" an exponential or "catastrophic backtracking" syntax.
</li>
<li>
Numerous display functions for a quick view of the results as text or HTML tables.
</li>
</ol>

**Introduction:**  
The motivation was originally twofold.
<ol>
<li>
I wanted to replace the pattern syntax with ABNF, which to me at least, is much easier to read, write and debug than the conventional regex syntax.
</li>
<li>
I felt (mistakenly) that a recursive-descent parser like <b>APG</b> would prove to be much more a powerful pattern matcher than regular expressions.
</li>
</ol>

Hardly any programmer has not needed regexes at some point, more likely lots of points, and it doesn't take much reading of the Internet forums to note that many others, like me, find the regex syntax to be quite cryptic. Additionally, because regexes have such a long, rich history with many versions from many (excellent) developers, there are many different syntax variations as you move from system to system and language to language. By contrast ABNF is standardized (although my non-standard superset additions are starting to pile up.) Whether or not the ABNF syntax is preferable to conventional regex syntax will always be a personal preference. But, for me and possibly others, ABNF offers a more transparent syntax to work with.

At the outset I naively thought that the regular expressions of regexes were just that &ndash; the Chomsky hierarchy variety. Therefore, I thought that using an **APG** parser for the pattern matching would add a great deal of parsing power to the problem. I soon discovered that not only were regexes not real "regular expressions", they were powerful, recursive-descent parsers, loaded with features that went well beyond that of **APG**. I had to play a little catch up to add look behind, back referencing and anchors. That being done, however, I think there is still a case for claiming some added power. I'm not a regex expert and I won't be making any big claims here, but there are a couple of points I will mention. I think the way that **apg-exp** gives the user nearly full control over the input, output and interpretation of the character codes goes a long way to address a number of the cautions mentioned in Jeffrey Friedl's book, for example on pages 92 and 106. I also think it addresses a number of the things Larry Wall finds wrong with the regex culture in his [Apocalypse 5](http://perl6.org/archive/doc/design/apo/A05.html) page. For example, back referencing, support for named capture, nested patterns (recursive rules), capture of all matches to a sub-phrase and others.

But the best thing to do, probably, is to head over to the 
[examples](https://github.com/ldthomas/apg-js2-examples/tree/master/apg-exp) and take a look.
See and compare for yourself. I would suggest starting with the `flags`, `display` and `rules` examples to get your bearings and go from there.

**Installation:**    
**GitHub:** In your project directory,
```
git clone https://github.com/ldthomas/apg-js2-exp.git apgexp
npm install apgexp --save
```
**npm:** In your project directory,
```
npm install apg-exp --save
```
**web page:**
```
git clone https://github.com/ldthomas/apg-js2-exp.git apgexp
```
Then, in the header of your web page include,
```
<link rel="stylesheet" href="./apgexp/apgexp.css">
<script src="./apgexp/apgexp.js" charset="utf-8"></script>
```
or,
```
<link rel="stylesheet" href="./apgexp/apgexp-min.css">
<script src="./apgexp/apgexp-min.js" charset="utf-8"></script>
```
(Note that some **apg-exp** output is in HTML format and apgexp.css is needed to properly style it.
Also, it is simply a copy of [apglib.css](https://github.com/ldthomas/apg-js2-lib).)

Now access **apg-exp** as,
```
<script>
var exp = new ApgExp(pattern);
</script>

```
See, specifically, the [email](https://github.com/ldthomas/apg-js2-examples/tree/master/apg-exp/email) example.

**Examples:**  
See <a href="https://github.com/ldthomas/apg-js2-examples/tree/master/apg-exp">apg-js2-examples/apg-exp</a> for many more examples of using
**apg-exp**.
  
**Documentation:**  
The full documentation is in the code in [`docco`](https://jashkenas.github.io/docco/) format.
To generate the documentation, from the package directory:
```
npm install -g docco
./docco-gen
```
View `docs/index.html` in any web browser to get started.
Or view it on the [APG website](http://coasttocoastresearch.com/docjs2/apg-exp/index.html)

**Copyright:**  
  *Copyright &copy; 2017 Lowell D. Thomas, all rights reserved*  

**License:**  
Released under the BSD-3-Clause license.
      
