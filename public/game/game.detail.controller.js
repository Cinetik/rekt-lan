(function() {
    'use strict';

    angular
        .module('rektlan.game')
        .controller('GameDetailController', GameDetailController);

    GameDetailController.$inject = ['gameService','$stateParams'];

    function GameDetailController(gameService, $stateParams) {
        var vm = this;
        vm.game = {};
        activate();

        function activate() {
            return getGameDetail().then(function(){
                console.log('[GameDetail]', 'View activated');
            });
        }

        function getGameDetail(){
            return gameService.getGame($stateParams.gameId).then(function(data){
                vm.game = data;
                return vm.game;
            });
        }
    }
})();
