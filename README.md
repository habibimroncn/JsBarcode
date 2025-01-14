[![Build Status](https://secure.travis-ci.org/lindell/JsBarcode.png)](http://travis-ci.org/lindell/JsBarcode)
[![Coverage Status](https://coveralls.io/repos/github/lindell/JsBarcode/badge.svg?branch=master)](https://coveralls.io/github/lindell/JsBarcode?branch=master)

Introduction
----
**JsBarcode** is a **barcode generator** written in JavaScript. It supports multiple barcode formats and works in browsers and on the server (with *Node.js*). It has *no dependencies* when it is used for the web but works with *jQuery* if you are into that.

Demo
----
#### [Barcode Generator](http://lindell.github.io/JsBarcode/)
#### [Simple CodePen Demo](http://codepen.io/lindell/pen/eZKBdO?editors=1010)
#### [Settings CodePen Demo](http://codepen.io/lindell/pen/mPvLXx?editors=1010)

Supported barcodes:
----
* [CODE128](https://github.com/lindell/JsBarcode/wiki/CODE128)
 * CODE128 (automatic mode switching)
 * CODE128 A/B/C (force mode)
* [EAN](https://github.com/lindell/JsBarcode/wiki/EAN)
  * EAN-13
  * EAN-8
  * EAN-5
  * EAN-2
  * UPC (A)
* [CODE39](https://github.com/lindell/JsBarcode/wiki/CODE39)
* [ITF-14](https://github.com/lindell/JsBarcode/wiki/ITF-14)
* [MSI](https://github.com/lindell/JsBarcode/wiki/MSI)
 * MSI10
 * MSI11
 * MSI1010
 * MSI1110
* [Pharmacode](https://github.com/lindell/JsBarcode/wiki/pharmacode)

Examples for browsers:
----

#### First create an canvas (or image)
````html
<svg id="barcode"></svg>
<!-- or -->
<canvas id="canvas"></canvas>
<!-- or -->
<img id="barcode"/>
````



#### Simple example:
````javascript
JsBarcode("#barcode", "Hi!");
// or with jQuery
$("#barcode").JsBarcode("Hi!");
````

##### Result:
![Result](http://i.imgur.com/TIp2tk5.png)


#### Example with options:
````javascript
JsBarcode("#barcode", "1234", {
  format: "pharmacode",
  lineColor: "#0aa",
  width:4,
  height:40,
  displayValue: false
});
````
##### Result:
![Result](http://i.imgur.com/Y2IrjUi.png)


#### More advanced use case:
````javascript
JsBarcode("#barcode")
  .options({font: "OCR-B"}) // Will affect all barcodes
  .EAN13("1234567890128", {fontSize: 18, textMargin: 0})
  .blank(20) // Create space between the barcodes
  .EAN5("12345", {height: 85, textPosition: "top", fontSize: 16, marginTop: 15})
  .render();
````
##### Result:
![Result](http://i.imgur.com/pp2lvYe.png)


Setup for browsers:
----
### Step 1:
##### [Download the library](https://github.com/lindell/JsBarcode/releases)

### Step 2:
Include the script in your code:


````html
<script src="JsBarcode.all.min.js"></script>
````

Bower:
----
You can also use [Bower](http://bower.io) to install and manage the library.
````
bower install jsbarcode --save
````

Node.js:
----
#### Install with npm:
````
npm install jsbarcode
npm install canvas
````

#### Use:
```` javascript
var JsBarcode = require('jsbarcode');
var Canvas = require("canvas");

var canvas = new Canvas();
JsBarcode(canvas, "Hello");

// Do what you want with the canvas
// See https://github.com/Automattic/node-canvas for more information
````



Options:
----
For information about how to use the options, see [the wiki page](https://github.com/lindell/JsBarcode/wiki/Options).

| Option | Default value | Type |
|--------|---------------|------|
| [`format`](https://github.com/lindell/JsBarcode/wiki/Options#format) | `"auto" (CODE128)` | `String` |
| [`width`](https://github.com/lindell/JsBarcode/wiki/Options#width) | `2` | `Number` |
| [`height`](https://github.com/lindell/JsBarcode/wiki/Options#height) | `100` | `Number` |
| [`displayValue`](https://github.com/lindell/JsBarcode/wiki/Options#display-value) | `true` | `Boolean` |
| [`fontOptions`](https://github.com/lindell/JsBarcode/wiki/Options#font-options) | `""` | `String` |
| [`font`](https://github.com/lindell/JsBarcode/wiki/Options#font) | `"monospace"` | `String` |
| [`textAlign`](https://github.com/lindell/JsBarcode/wiki/Options#text-align) | `"center"` | `String` |
| [`textPosition`](https://github.com/lindell/JsBarcode/wiki/Options#text-position) | `"bottom"` | `String` |
| [`textMargin`](https://github.com/lindell/JsBarcode/wiki/Options#text-margin) | `2` | `Number` |
| [`fontSize`](https://github.com/lindell/JsBarcode/wiki/Options#font-size) | `20` | `Number` |
| [`background`](https://github.com/lindell/JsBarcode/wiki/Options#background)  | `"#ffffff"` | `String (CSS color)` |
| [`lineColor`](https://github.com/lindell/JsBarcode/wiki/Options#line-color) | `"#000000"` | `String (CSS color)` |
| [`margin`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `10` | `Number` |
| [`marginTop`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginBottom`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginLeft`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginRight`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`valid`](https://github.com/lindell/JsBarcode/wiki/Options#valid) | `function(valid){}` | `Function` |
