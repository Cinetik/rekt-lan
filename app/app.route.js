(function() {
    'use strict';

    angular
        .module('rektlan')
        .config(config);

    function config($routeProvider){
      $routeProvider
      .when('/',{
        templateUrl: 'app/test.html'
      });
    }
})();
