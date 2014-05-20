angular.module('navy-timer', ['ionic', 'timer', 'controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    // All the pages and states of the app
    .state('app', {
      url: '/app',
      views: {
        'template': {
          templateUrl: 'templates/app.html',
          controller: 'GoalCtrl'
        }
      }
    })
    .state('timer', {
      url: '/timer?goal',
      views: {
        'template': {
          templateUrl: 'templates/timer.html',
          controller: 'TimerCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');

});