var $routeSet = function ($controllerProvider, options) {
    if (!$controllerProvider) {
        throw new Error("$controllerProvider is not set!");
    }

    var $routeSet_js = require.alias(options.resource);
    var importUrl = $routeSet_js;
    var d = /\.[^\.]+$/.exec(importUrl);
    var $routeSet_html = importUrl.slice(0, d.index).concat(".html");

    return {
        templateUrl: "public/c/" + $routeSet_html,
        resolve: {
            delay: ['$q', '$rootScope',
            function ($q, $rootScope) {
                    var defer = $q.defer();

                    require.async($routeSet_js, function (e) {

                        if (typeof (e) == "object") {
                            $controllerProvider.register(e[1].name, e);
                        } else if (typeof (e) == "function") {
                            $controllerProvider.register(e.name, e);
                        } else {
                            //Do Nothing
                        }
                        defer.resolve();
                    });

                    return defer.promise;
        }]
        }
    };
};

var $routeProvider = {
    routes: [],
    when: function (url, options) {
        options.url = url;
        $routeProvider.routes.push(options);
        return $routeProvider;
    },
    run: function (module_name) {
        var routes = $routeProvider.routes;
        var module = angular.module(module_name, ['ngRoute'], ['$routeProvider', '$controllerProvider',
        function ($routeProvider, $controllerProvider) {

                angular.forEach(routes, function (route) {
                    $routeProvider.when(route.url, $routeSet($controllerProvider, {
                        resource: route.resource
                    }));
                });

        }]);
        return module;
    }
};