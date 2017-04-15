[<span style="font-size: 150%;font-weight:bold;">&#8962;</span> home](http://coasttocoastresearch.com/)

**Annotated Table of Contents**<br>
*apg-exp - APG Expressions*<br>

0. The GitHub & npm README page.
> [README.md](./README.html)

0. The user interface. Here is were all of the functions that the user will call are defined and explained.
> [apg-exp.js](./apg-exp.html)<br>

0. The `exec()` and `test()` functions are implemented in this file.
> [exec.js](./exec.html)<br>

0. The `replace()` function is implemented in this file.
> [replace.js](./replace.html)<br>

0. The `split()` function is implemented in this file.
matching phrases from the input string as it goes.
> [split.js](./split.html)<br>

0. The text and HTML display functions are implemented in this file.
> [result.js](./result.html)<br>

0. When the input is SABNF syntax text, this file will call the APG functions necessary to generate a parser from it.
> [sabnf-generator.js](./sabnf-generator.html)<br>

0. Parses the replacement string of the `replace()` function, coding the replacement phrase shorthands for the phrase parts,
such as the left context (<code>$&#96;</code>), matched phrase (`$&`), etc.
> [parse-replacement.js](./parse-replacement.html)<br>

