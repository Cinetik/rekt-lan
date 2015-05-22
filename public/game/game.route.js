(function() {
    'use strict';

    angular
    .module('rektlan.game', ['ui.router'])
    .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('games', {
            url: '/game',
            templateUrl: 'game/games.html',
            controller: 'GameController as vm',
        })
        .state('games.detail',{
            url: '/:gameId',
            templateUrl: 'game/game-detail.html',
            controller: 'GameDetailController as vm',
        });
    }
    //TODO Implement detail view and edit view
    // https://angular-ui.github.io/ui-router/sample/#/contacts/1/item/a
    // get fucking inspired please
    // Edit: Let's have a game list as a view on the side, the middle content will be that game page with an edit button

})();
