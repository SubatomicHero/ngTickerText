# AngularJS Ticker Text (Stock Exchange information scroller)

A very simple AngularJS scrolling text directive implementation.

Comments and all contributions welcomed.

Developed by [@MartinWhittingt](http://twitter.com/MartinWhittingt)

## Usage:

- Download the ticker-text.js file from the directive folder.
- Add a reference in your index.html.
```html
<script src="js/ticker-text.js"></script>
```

- Add a dependency to the ticker text module in you application.
```js
angular.module('app', ['ngTickerText']);
```

- In your controller ensure you have an array of objects in this structure:
```js
$scope.items = [{ info : 'Whatever' }, { info : 'more whatever' }];
```

- Then in your partial add this line of code with the following options:
```html
<ticker-text data="items" ...></ticker-text>
```

## Options:
 - 'behaviour': slide (once only), scroll (repeat) or alternate (bounce).
 - 'direction': up, down, left or right.
 - 'scrollamount': 1-20 (slow to fast scroll speed).
 - 'spaceCount': spaces between each element (Keep this number even).
 - 'showDate' : TRUE/FALSE whether to append the current date on to the end of the items list which is then displayed.
 - 'interval' : In seconds. How often the date object is updated and rendered onto the scrolling text.
 
## Notes:
 - Make sure to use the partial included or use your own and alter the directive. (partials/ScrollingText.html)
 - To have this working 'out of the box' make sure to include the angular sanitze script files:
 ```html
 <script src=".../angular-sanitize.js"></script>
 ```
 - This allows the safe output of the html that is built in the directive.
 
 ## License
 
 The MIT License
    
    Copyright (c) 2014, Martin Whittington
     
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.