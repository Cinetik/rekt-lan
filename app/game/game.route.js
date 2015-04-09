(function() {
    'use strict';

    angular
        .module('rektlan')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('#/game', {
                templateUrl: 'games.html',
                controller: 'GameController',
                controllerAs: 'vm',

            });
    }
})();
