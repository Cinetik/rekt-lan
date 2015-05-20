(function() {
    'use strict';

    angular
        .module('rektlan.game')
        .factory('gameService', gameService);

    gameService.$inject = ['$http'];

    function gameService($http) {
        var service =  {
            getGames: getGames,
            addGame: addGame,
        };
        /* TODO Create a mock service that allows CRUD for games.
        *	This will give us the possibility to add games with description, rules and other informations.
        *	Since every game is different, we need to define a mechanism to make game management as flexible as
        *	possible.
        *	Also, we'll tweak a bit for popular games like CSGO, LoL, Dota, Hearthstone, ...
        */
        function getGames() {
            return $http.get('/api/game')
              .then(function(response){
                return response.data;
              })
              .catch(function(error){
                return error;
              });
        }

        function addGame(game){
            return $http.post('/api/game', game)
            .then(function(response){
                return response;
            })
            .catch(function(error){
                return error;
            });
        }

        return service;
    }
})();
