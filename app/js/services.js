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

servicesModule.
  factory('autoCompleteDataService', function() {
    return {
        getSource: function() {
            return ["Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", 
            "Blitzcrank", "Brand", "Caitlyn", "Cassiopeia", "Chogath", "Corki", 
            "Darius", "Diana", "Draven", "DrMundo", "Elise", "Evelynn", "Ezreal", 
            "Fiddlesticks", "Fiora", "Fizz", "Galio", 
            "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", 
            "Janna", "Jarvan IV", "Jax", "Jayce", "Karma", "Karthus", "Kassadin", "Katarina", 
            "Kayle", "Kennen", "Khazix", "KogMaw", "LeBlanc", "Lee Sin", "Leona", "Lulu", 
            "Lux", 
            "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", 
            "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", 
            "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Rengar", "Riven", 
            "Rumble", 
            "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", 
            "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Talon", "Taric", "Teemo", "Tristana", 
            "Trundle", "Trydamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", 
            "Vayne", "Veigar", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", 
            "Xerath", "Xin Zhao", "Yorick", "Zed", "Ziggs", "Zilean", "Zyra"];
        }
    }
});