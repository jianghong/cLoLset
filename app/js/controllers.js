'use strict';

/* Controllers */
function ChampGridCtrl($scope, Square, autoCompleteDataService, $location) {
	$scope.squares = Square.query();
	$scope.availableTags = autoCompleteDataService.getSource();
	$scope.submit = function () {
		if ($scope.query.name !== ""){
			$location.path("/"+$scope.query.name);
		}
	}
}
//ChampGridCtrl.$inject = ['$scope', 'Square', "autoCompleteDataService", '$location'];

function ChampDetailCtrl($scope, Champ, Skin, $routeParams, autoCompleteDataService, $location, $filter) {
	$scope.champName = $routeParams.champName;
	$scope.availableTags = autoCompleteDataService.getSource();
	$scope.neighbors = autoCompleteDataService.getNeighbors($scope.champName);
	$scope.previousChamp = $scope.availableTags[$scope.neighbors[0]];
	$scope.nextChamp = $scope.availableTags[$scope.neighbors[1]];
	$scope.submitted = false;
	$scope.typeaheadValue = "";
	$scope.submitChoice = function() {
		if ($scope.typeaheadValue !== ""){
			$location.path("/"+$scope.typeaheadValue);
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
		$scope.mainImg = champs[$scope.champName].splashes[0];
		$scope.ms = $scope.mainImg.substring(17, ($scope.mainImg.length-11));
		$scope.mainSkin = $filter('spaceName')($scope.ms);
	/*$scope.skinDetails = Skin.get({}, function(skins){
		$scope.mainRP = $scope.skinDetails[$scope.ms].rp;
		$scope.mainIP = $scope.skinDetails[$scope.ms].ip;
		$scope.hideIPValue = false;
	});*/
	$scope.showResponse = function(response) {
		var responseString = response["items"][0]["id"]["videoId"];
		var responseString2 = response["items"][1]["id"]["videoId"];
		$scope.response = "http://www.youtube.com/embed/"+ responseString; 
		$scope.response2 = "http://www.youtube.com/embed/"+ responseString2;
	};
	$scope.request = search($scope.mainSkin);
	$scope.request.execute($scope.showResponse);

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
					$scope.ms= $scope.mainImg.substring(17, ($scope.mainImg.length-11));
					$scope.mainSkin = $filter('spaceName')($scope.ms);
					$scope.request = search($scope.mainSkin);
					$scope.request.execute($scope.showResponse);
					/*$scope.mainRP = $scope.skinDetails[$scope.ms].rp;
					if ($scope.skinDetails[$scope.ms].ip === 0){
						$scope.hideIPValue = true;
					}
					else {
						$scope.mainIP = $scope.skinDetails[$scope.ms].ip;
						$scope.hideIPValue = false;
					}*/
					break;
				}
			}
		}
	});
}
//ChampDetailCtrl.$inject = ['$scope', 'Champ', 'Skin', $routeParams', 'autoCompleteDataService', '$location']; 
