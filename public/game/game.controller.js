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
        vm.editionButton = 'Edit';
        vm.formFunction = formFunction;
        activate();

        function activate() {
            console.log($state.get());
            if($state.is('edit')){
                console.log('edit');
                return gameService.getGame($stateParams.gameId).then(function(game){
                    console.log(game);
                    vm.game = game;
                    console.info('edition View');
                });
            }
            else{
                console.log('view');
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
                $state.go('detail', { gameName : result.data.game, gameId : result.data._id });
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
            console.log(vm.game);
            return gameService.saveGame(vm.game).then(function(result){

            })
        }

        function formFunction(){
            if($state.is('add')){
                return vm.addGame();
            }
            return vm.editGame();
        }
    }
})();
