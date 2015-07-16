(function() {
    'use strict';

    angular
    .module('rektlan.game')
    .controller('GameController', GameController);

    GameController.$inject = ['gameService', '$state', '$stateParams'];

    function GameController(gameService, $state, $stateParams) {
        var vm = this;
        vm.game = {};
        vm.errorMessage = {};
        vm.games = [];
        vm.addGame = addGame;
        vm.deleteGame = deleteGame;
        vm.editGame = editGame;
        vm.formFunction = formFunction;

        activate();

        function activate() {
            if($state.is('edit')){
                return gameService.getGame($stateParams.gameId).then(function(game){
                    vm.game = game;
                    console.info('edition View');
                });
            }
            else{
                return getGames().then(function() {
                    console.info('Activated Games View');
                });
            }
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
        function editGame(){
            return gameService.saveGame(vm.game).then(function(result){
            });
        }

        function formFunction(){
            if($state.is('add')){
                return vm.addGame();
            }
            return vm.editGame();
        }
    }
})();
