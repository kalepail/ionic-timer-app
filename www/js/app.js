angular.module('basic-timer', ['ionic', 'timer', 'controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if(window.StatusBar) {
      StatusBar.styleLightContent();
      StatusBar.show();
    }
    eventAdded = false;
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    // The app pages
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