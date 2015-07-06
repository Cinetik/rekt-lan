(function() {
    'use strict';

    angular
    .module('rektlan.game')
    .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('games', {
            url: '/game',
            templateUrl: 'game/games.html',
            controller: 'GameController as vm',
        })
        .state('add',{
            parent:'games',
            url:'/add',
            templateUrl: 'game/game-add.html',
        })
        .state('edit',{
            parent:'games',
            url:'/edit/:gameId',
            templateUrl: 'game/game-add.html',
            controller: 'GameController as vm',
        })
        .state('detail',{
            parent: 'games',
            url: '/:gameId',
            templateUrl: 'game/game-detail.html',
            controller: 'GameDetailController as vm',
        });
    }
    //TODO Implement edit view
    // https://angular-ui.github.io/ui-router/sample/#/contacts/1/item/a
    // get fucking inspired please
    // Edit: Let's have a game list as a view on the side, the middle content will be that game page with an edit button
    // Edit 2: For the edit view, just use the detail view and explore
    // the possibility of using a directive that transform elements
    // into input when triggered

})();
