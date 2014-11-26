angular.module("app", ['ngRoute', 'app.route', 'app.run', 'app.config']).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/test'
        });
}]);