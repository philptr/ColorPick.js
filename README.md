# ColorPick.js

ColorPick.js is a simple and minimal jQuery color picker plugin for the modern web.

## Features

* The recently used colors are automatically saved to local storage
* Simplicity of integration
* Gorgeous modern design that will suit almost every website

## Usage

You can clone [this repository](https://github.com/philzet/ColorPick.js) or download the latest build as a zip [from here](http://github.com/philzet/ColorPick.js/zipball/master).

ColorPick.js requires jQuery. This is the only dependency. Make sure to load it before ColorPick.js.

Basic example:

```html
<head>
  <link rel="stylesheet" href="css/colorPick.min.css">
</head>
<body>
  <div class="colorPickSelector"></div>
  
  <script src="js/jquery.min.js"></script>
  <script src="js/colorPick.min.js"></script>
  <script>
    $(".colorPickSelector").colorPick();
  </script>
</body>
```

Result:

![alt tag](https://raw.githubusercontent.com/philzet/ColorPick.js/master/demo/screenshot.png?token=ALMWaIz-dwolfOXaNQN_dKqgIH5vLglNks5YjJj9wA%3D%3D)

## Options

**Initial color**

By default, the initial color is #3498db.

```javascript
$(".picker").colorPick({ 'initialColor': '#27ae60' });
```

**Custom action**

You can specify your own action event which will be called as soon as the color is selected. 
The hex color which has been selected can be referred to as "this.color".

```javascript
$(".picker").colorPick({ 
  'onColorSelected': function() {
    console.log("The user has selected the color: " + this.color)
    this.element.css({'backgroundColor': this.color, 'color': this.color});
  } 
});
```

**Allowing saving recent colors and specifying their number**

By default, recent colors are allowed, and their max number is 5.

```javascript
$(".picker").colorPick({ 'allowRecent': true, 'recentMax': 5 });
```

**Custom colors database**

By default, we use Flat UI color database.

```javascript
$(".picker").colorPick({ 'palette': ["#1abc9c", "#16a085", "#2ecc71"] });
```

## License

MIT License

Copyright (c) 2017 Phil Zet (a.k.a. Philipp Zakharchenko)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
