'use strict';

angular.module('myApp', [
  'ngRoute','ngAnimate', 'duScroll', 'angular-scroll-toggle', 'ui.bootstrap'
])
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'views/site.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    }])

    .directive('scrollPosition', function($window) {
    return {
        scope: {
            scroll: '=scrollPosition'
        },
        link: function(scope, element, attrs) {
            var windowEl = angular.element($window);
            var handler = function() {
                scope.scroll = windowEl.scrollTop();
            }
            windowEl.on('scroll', scope.$apply.bind(scope, handler));
            handler();
        }
    };
})

    .controller('MainCtrl', function($scope, $document){
        $scope.scroll = 0;

        }
    ).value('duScrollOffset', 30);


