angular.module('tltApp')

.controller('AppCtrl', function($scope) {

})

.controller('QuotesCtrl', function($scope, $http, $rootScope, $timeout) {
    $http.get('json/quotes.json').success(function(res) {
        $scope.cards = res;
    });

    $scope.doRefresh = function() {
        $timeout(function() {
            $http.get('json/quotes.json').success(function(res) {
                $scope.cards = res;
            });
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };

    $scope.cardSwiped = function(index) {
        // var newCard = $scope.cards.push(newCard);

        var newCard = $scope.cards[Math.floor(Math.random() * $scope.cards.length)];
        // newCard.id = Math.random();
        $scope.cards.push(newCard);
    };

    $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
    };

    $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
    };

    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    };
    $scope.houseTargaryen = function() {
        $rootScope.targaryen = true;
        $rootScope.stark = false;
        $rootScope.baratheon = false;
    };
    $scope.houseStark = function() {
        $rootScope.stark = true;
        $rootScope.targaryen = false;
        $rootScope.baratheon = false;
    };
    $scope.houseBaratheon = function() {
        $rootScope.baratheon = true;
        $rootScope.stark = false;
        $rootScope.targaryen = false;
    }
});
