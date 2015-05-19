(function() {
    'use strict';

    angular
        .module('rektlan.game')
        .service('GameService', GameService);

    Service.$inject = [''];

    function GameService() {
        var gameService =  {
            getGames: getGames,
        };

        function getGames() {
            return false;
        }
    }
})();
