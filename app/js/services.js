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
            "Darius", "Diana", "Draven", "Mundo", "Elise", "Evelynn", "Ezreal", 
            "Fiddlesticks", "Fiora", "Fizz", "Galio", 
            "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", 
            "Janna", "Jarvan", "Jax", "Jayce", "Karma", "Karthus", "Kassadin", "Katarina", 
            "Kayle", "Kennen", "Khazix", "KogMaw", "LeBlanc", "Lee Sin", "Leona", "Lulu", 
            "Lux", 
            "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "Mordekaiser", 
            "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", 
            "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Rengar", "Riven", 
            "Rumble", 
            "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", 
            "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Talon", "Taric", "Teemo", "Tristana", 
            "Trundle", "Trydamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", 
            "Vayne", "Veigar", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", 
            "Xerath", "Xin Zhao", "Yorick", "Zed", "Ziggs", "Zilean", "Zyra"];
        },
        getSourcelc: function() {
            return ['ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'blitzcrank', 'brand', 'caitlyn', 'cassiopeia', "chogath", 'corki', 'darius', 'diana', 'mundo', 'draven', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gragas', 'graves', 'hecarim', 'heimerdinger', 'irelia', 'janna', 'jarvan', 'jax', 'jayce', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kennen', 'khazix', "kogmaw", 'leblanc', 'leesin', 'leona', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'pantheon', 'poppy', 'rammus', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'syndra', 'talon', 'taric', 'teemo', 'tristana', 'trundle', 'trydamere', 'twisted fate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'vi', 'viktor', 'vladimir', 'volibear', 'warwick', 'wukong', 'xerath', 'xinzhao', 'yorick', 'zed', 'ziggs', 'zilean', 'zyra'];
        }
    }
});