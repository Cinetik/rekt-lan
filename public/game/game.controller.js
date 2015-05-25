(function() {
    'use strict';

    angular
    .module('rektlan.game')
    .controller('GameController', GameController);

    GameController.$inject = ['gameService', '$state'];

    function GameController(gameService, $state) {
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
                vm.games.push(result.data);
                vm.game = {};
                $state.go('detail', { gameId : result.data._id });
            });
        }

        function deleteGame(game){
            return gameService.deleteGame(game).then(function(result){
                vm.games.splice(vm.games.indexOf(game),1);
                if($state.is('detail',{gameId : game._id})){
                    $state.go('games');
                }
                return result;
            });
        }
    }
})();
