'use strict';


// Declare app level module which depends on filters, and services
angular.module('clolset', ['clolset.filters', 'clolset.services', 'clolset.directives', '$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/champs', {templateUrl: 'partials/champ-grid.html', controller: ChampGridCtrl});
    $routeProvider.when('/', {redirectTo: '/champs'});
    $routeProvider.when('/:champName', {templateUrl: 'partials/champ-detail.html', controller: ChampDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/champs'});
  }]);
