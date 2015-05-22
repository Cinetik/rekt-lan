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
        });
    }
    //TODO Implement detail view and edit view
    // https://angular-ui.github.io/ui-router/sample/#/contacts/1/item/a
    // get fucking inspired please
})();
