(function() {
    'use strict';

    angular
        .module('rektlan.home')
        .config(config);

        config.$inject = ['$stateProvider','$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'home/home.html',
                controllerAs: 'HomeController as vm'
            });
        }
})();
