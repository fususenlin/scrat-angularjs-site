$routeProvider.when('/test', {
    resource: 'pages/test'
});

$routeProvider.when('/test1', {
    resource: 'pages/test'
});

$routeProvider.run("app.route");