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
    }
})();
