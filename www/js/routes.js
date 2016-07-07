angular.module('tltApp')

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.quotes', {
        url: '/quotes',
        views: {
            'menuContent': {
                templateUrl: 'templates/quotes.html',
                controller: 'QuotesCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/quotes');
})
