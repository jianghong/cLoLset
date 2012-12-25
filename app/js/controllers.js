'use strict';

/* Controllers */


function ChampGridCtrl($scope, Square) {
	$scope.squares = Square.query();
}
ChampGridCtrl.$inject = ['$scope', 'Square'];


function ChampDetailCtrl($scope, Champ, $routeParams) {
	$scope.champName = $routeParams.champName;
	$scope.champs = Champ.get({}, function(champs){
		$scope.mainImg = champs[$routeParams.champName].splashes[0];
		
		$scope.setImage = function(imageUrl){
			var indexLen = imageUrl.length - 6; 
			// index is the last 6 letters of imageUrl, i.e _0.jpg, _1.jpg
			var index = imageUrl.substring(indexLen);
			// find the corresponding splash image
			var splashArray = champs[$routeParams.champName].splashes;
			for (var i=0; i<splashArray.length; i++){
				if (splashArray[i].indexOf(index) !== -1) {
					$scope.mainImg = splashArray[i];
					break;
				}
			}
		}
	});
}
ChampDetailCtrl.$inject = ['$scope', 'Champ', '$routeParams']; 
