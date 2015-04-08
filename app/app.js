(function() {
    'use strict';

    angular.module(
            'rketlan', [
                'ngRoute',
                'ngTouch',
            ])
        .config(appRouteProvider)
        .run(appInitialization);

    function appRouteProvider($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }

    function appInitialization($rootScope) {
        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    }

})();
