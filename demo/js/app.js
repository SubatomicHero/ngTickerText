'use strict';

var app = angular.module('TickerApp',['ngTickerText']);

app.controller('TickerController', ['$scope',
function($scope) {
	console.log("TickerController created!");
	
	$scope.items = [
		{ info : 'Information 1' },
		{ info : 'Information 2' },
		{ info : 'Information 3' },
		{ info : 'Information 4' },
		{ info : 'Information 5' },
		{ info : 'Information 6' }
	];
}]);