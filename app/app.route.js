(function() {
    'use strict';
    
    angular
    .module('rektlan')
    .config(config);
    
    config.$inject = ['$stateProvider','$urlRouterProvider'];
    
    
    function config($stateProvider, $urlRouteProvider){
        $urlRouteProvider.otherwise('/');
        
        $stateProvider.state('home',{
            url: '/',
            templateUrl: 'app/test.html'
        });
    }
})();
