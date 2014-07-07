# AngularJS Ticker Text (Stock Exchange information scroller)

A very simple AngularJS scrolling text directive implementation.

Comments and all contributions welcomed.

Developed by [@MartinWhittingt](http://twitter.com/MartinWhittingt)

## Usage:

- Download the ticker-text.js file from the directive folder.
- Add a reference in your index.html.
'''html
<script src="js/ticker-text.js"></script>
'''

- Add a dependency to the ticker text module in you application.
'''js
angular.module('app', ['ngTickerText']);
'''

- In your controller ensure you have an array of objects in this structure:
'''js
$scope.items = [{ info : 'Whatever' }, { info : 'more whatever' }];
'''

- Then in your partial add this line of code with the following options:
'''html
<ticker-text data="items" ...></ticker-text>
'''

## Options:
 - 'behaviour': slide (once only), scroll (repeat) or alternate (bounce).
 - 'direction': up, down, left or right.
 - 'scrollamount': 1-20 (slow to fast scroll speed).
 - 'spaceCount': spaces between each element (Keep this number even).
 - 'showDate' : TRUE/FALSE whether to append the current date on to the end of the items list which is then displayed.
 - 'interval' : In seconds. How often the date object is updated and rendered onto the scrolling text.
 - NOTE: Make sure to use the partial included or use your own and alter the directive. (partials/ScrollingText.html)