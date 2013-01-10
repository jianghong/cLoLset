'use strict';

/* Filters */

angular.module('clolset.filters', []).
  filter('cleanName', function() {
    return function(input) {
      var result;
      var underlineIndex = input.indexOf("_");
      result = input.substring(underlineIndex+1)
      return result;   
  	}
  }).
  filter('spaceName', function() {
  	return function(input) {
  		return input.match(/[A-Z][a-z]+/g).join(" ");
  	}
  })
