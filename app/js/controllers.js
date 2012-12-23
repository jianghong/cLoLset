'use strict';

/* Controllers */


function ChampGridCtrl($scope, $http) {
	$http.get('champs/champs.json').success(function(data) {
		$scope.champs = data
	});
}
ChampGridCtrl.$inject = ['$scope', '$http'];


function ChampDetailCtrl($scope, $http, $routeParams) {
	$scope.champName = $routeParams.champName;

}
ChampDetailCtrl.$inject = ['$scope', '$http', '$routeParams']; 
