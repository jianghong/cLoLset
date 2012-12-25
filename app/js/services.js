'use strict';

/* Services */

var servicesModule = angular.module('clolset.services', ['ngResource']);

servicesModule.
  factory('Champ', function($resource){
  	return $resource('champs/champs.json')
  });

servicesModule.
  factory('Square', function($resource){
  	return $resource('champs/squares.json')
  });