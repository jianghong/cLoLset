'use strict';

/* Controllers */
function ChampGridCtrl($scope, Square) {
	$scope.squares = Square.query();
	/*
	$scope.submit = function () {
		if (this.squares.length == 1) {

		}
	}*/
}
ChampGridCtrl.$inject = ['$scope', 'Square'];


function ChampDetailCtrl($scope, Champ, $window, $routeParams, autoCompleteDataService) {
	$scope.champName = $routeParams.champName;

	$scope.availableTags = autoCompleteDataService.getSource();
	$scope.submitted = false;
	$scope.name = "";
	$scope.submitChoice = function() {
		$window.location.assign("index.html#/"+$scope.name);
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
		$scope.mainSkin = $scope.mainImg.substring(17, ($scope.mainImg.length-4));
		$scope.imageList = champs[$scope.champName].splashes;
		$scope.setImage = function(imageUrl){
			var indexLen = imageUrl.length - 6; 
			// index is the last 6 letters of imageUrl, i.e _0.jpg, _1.jpg
			var index = imageUrl.substring(indexLen);
			// find the corresponding splash image
			var splashArray = champs[$routeParams.champName].splashes;
			for (var i=0; i<splashArray.length; i++){
				if (splashArray[i].indexOf(index) !== -1) {
					$scope.mainImg = splashArray[i];
					$scope.mainSkin = $scope.mainImg.substring(17, ($scope.mainImg.length-4));
					break;
				}
			}
		}
	});
}
ChampDetailCtrl.$inject = ['$scope', 'Champ', '$window', '$routeParams', 'autoCompleteDataService']; 
