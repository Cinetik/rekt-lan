(function() {
    'use strict';

    angular
        .module('rektlan.game')
        .controller('GameController', GameController);

    GameController.$inject = ['gameService'];

    function GameController(gameService) {
        var vm = this;
        vm.game = {};
        vm.errorMessage = {};
        vm.games = [];
        vm.addGame = addGame;
        vm.deleteGame = deleteGame;
        activate();

        function activate() {
          return getGames().then(function() {
              console.info('Activated Games View');
          });
        }

        function getGames(){
          return gameService.getGames().then(function(data){
            vm.games = data;
            return vm.games;
          });
        }

        function addGame(){
            return gameService.addGame(vm.game).then(function(result){
                vm.games.push(vm.game);
                vm.game = {};
            });
        }
        /* TODO Fix the delete
        * It doesn't delete the good entry in the database.... (#WTF)
        */
        function deleteGame(game){
            var toDelete = game;
            return gameService.deleteGame(game).then(function(result){
                console.log(game);
                console.log(toDelete);
                console.log(vm.games.indexOf(toDelete));
                vm.games.splice(vm.games.indexOf(toDelete),1);
                return result;
            });
        }
    }
})();
