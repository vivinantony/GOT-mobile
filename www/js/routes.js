angular.module('tltApp')

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.board', {
        url: '/board',
        views: {
            'menuContent': {
                templateUrl: 'templates/board.html',
                controller: 'BoardCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/board');
})
