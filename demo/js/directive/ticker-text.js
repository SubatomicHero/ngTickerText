var module;

module = angular.module('ngTickerText', []);

/*
	Author: Martin Whittington
	Attrs are:
	behaviour: slide (once only), scroll (repeat), alternate (bounce)
	direction: left, up, down, right (do not specify if using alternate behaviour)
	scrollamount: 1-20 (slow to fast scroll speed)
	spaceCount: spaces between each element (keep this even if possible)
	
	The array this directive reads must have objects like so:
	
	{ info : 'Whatever goes here' }
*/
module.directive('tickerText', function($timeout) {
	return {
		restrict: 'E',	// Element
		scope : { data: "=" },
		templateUrl: 'partials/ScrollingText.html', // Cross origin may prevent this working in demos
		link: function(scope, element, attrs) {
			// checks on attributes to set defaults
			if (attrs.behaviour == null) {
				attrs.behaviour = 'slide';
			}			
			if (attrs.direction == null) {
				attrs.direction = 'left';
			}
			if (attrs.scrollamount == null) {
				attrs.scrollamount = '5';
			}
			if (attrs.spaceCount == null || attrs.spaceCount == 0) {
				attrs.spaceCount = 40;
			}
			if (attrs.showDate == null) {
				attrs.showDate = false;
			} else if (attrs.showDate) {
				if (attrs.interval == null) {
					attrs.interval = 60;	// one minute
				}
			}
			scope.behaviour = attrs.behaviour;
			scope.direction = attrs.direction;
			scope.scrollAmount = attrs.scrollamount;
			var spaceCount = attrs.spaceCount;
			var showDate = attrs.showDate;
			var interval = attrs.interval;
			
			// build the html the directive needs
			var timer;
			var counter;
			function buildHTML(alreadyBuilt) {
				scope.htmlText = "";
				var length = scope.data.length;
				for (var i = 0; i < length; i++) {
					scope.htmlText = scope.htmlText + scope.data[i].info;
					if (i < (scope.data.length - 1)) {
						scope.htmlText = padText(scope.htmlText, spaceCount);
					} else {
						// we are at the last element
						if (showDate && !alreadyBuilt) {
							scope.htmlText = padText(scope.htmlText, spaceCount);					
							scope.data[length] = {};
							scope.data[length].info = new Date().toLocaleString();
							scope.htmlText = scope.htmlText + scope.data[length].info;
							counter = 0;
							timer = $timeout(addDate, 1000);
						}
					}
				}
			}
			
			// pad spaces and pipe seperator to the text
			function padText(text, spaceCount) { 
				for (var i = 0; i < spaceCount; i++) {
					if (i == (spaceCount * 0.5)) {
						text = text + "|";
					}
					text = text + "&nbsp;";
				}
				return text;
			}
			
			// add a date to the data array
			function addDate() {
				counter++;
				if (counter == interval) {
					$timeout.cancel(timer);
					var length = scope.data.length;
					scope.data[length - 1].info = new Date().toLocaleString();
					counter = 0;
					buildHTML(true);
				}
				timer = $timeout(addDate, 1000);
			}			
			buildHTML(false);
		}		
	};
});