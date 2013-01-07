'use strict';

/* Controllers */
function ChampGridCtrl($scope, Square, autoCompleteDataService, $location) {
	$scope.squares = Square.query();
	$scope.champArray = autoCompleteDataService.getSourcelc();
	$scope.submit = function () {
		if ($scope.query.name !== ""){
			$scope.convertCap = angular.uppercase($scope.query.name[0])+
				$scope.query.name.substring(1);
			if ($scope.champArray.indexOf($scope.query.name) !== -1) {
				$location.path("/"+$scope.convertCap);
			}
		}
	}
}
//ChampGridCtrl.$inject = ['$scope', 'Square', "autoCompleteDataService", '$location'];


function ChampDetailCtrl($scope, Champ, $routeParams, autoCompleteDataService, $location) {
	$scope.champName = $routeParams.champName;

	$scope.availableTags = autoCompleteDataService.getSource();
	$scope.submitted = false;
	$scope.name = "";
	$scope.submitChoice = function() {
		if ($scope.name !== ""){
			$location.path("/"+$scope.name);
		}
	}

	$scope.hideValue = true;
	$scope.showInfo = function() {
		$scope.hideValue = false;
	}
	$scope.hideInfo = function() {
		$scope.hideValue = true;
	}
	$scope.champs = Champ.get({}, function(champs){
		$scope.mainImg = champs[$routeParams.champName].splashes[0];
		$scope.mainSkin = $scope.mainImg.substring(17, ($scope.mainImg.length-11));
		$scope.imageList = champs[$scope.champName].splashes;
		$scope.setImage = function(imageUrl){
			var indexLen = imageUrl.length - 10; 
			// index is the last 6 letters of imageUrl, i.e _0.jpg, _1.jpg
			var index = imageUrl.substring(17, indexLen);
			// find the corresponding splash image
			var splashArray = champs[$routeParams.champName].splashes;
			for (var i=0; i<splashArray.length; i++){
				if (splashArray[i].indexOf(index) !== -1) {
					$scope.mainImg = splashArray[i];
					$scope.mainSkin = $scope.mainImg.substring(17, ($scope.mainImg.length-11));
					break;
				}
			}
		}
	});
}
//ChampDetailCtrl.$inject = ['$scope', 'Champ', '$routeParams', 'autoCompleteDataService', '$location']; 
