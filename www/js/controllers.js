angular.module('controllers', [])

// Homepage Set-A-Goal Controller
.controller('GoalCtrl', function($scope, $ionicSideMenuDelegate, $ionicScrollDelegate) {
  // Prefill the slider to 9:30
  $scope.range = 5400;
  
  // Add one second to the slider
  $scope.upOne = function() {
    $scope.range = parseFloat($scope.range) + 10;
  }
  // Remove one second from the slider
  $scope.downOne = function() {
    $scope.range = parseFloat($scope.range) - 10;
  }
  // Format the time to something readable
  $scope.$watch(function() {
    $scope.duration = moment.duration($scope.range*100, "milliseconds").format("mm:ss", { trim: false });
  });
  
  // Alright, let's get this timer timing!
	$scope.submit = function() {
    var range = $scope.range;
    window.location.href = '#/timer?goal='+range+'';
	}
})

// Timer Controller
.controller('TimerCtrl', function($scope, $stateParams) {
  // Some presents and variables
	$scope.duration = moment.duration(parseFloat($stateParams.goal*100), "milliseconds").format("mm:ss", { trim: false });
	
	// Look out for the shakes and insomnia
	if (!eventAdded) {
	  window.addEventListener('shake', shakeEventDidOccur, false);
	  if (window.plugins !== undefined) {
	    window.plugins.insomnia.keepAwake();
	  }
	  eventAdded = true;
	}
  
  // Shake 'dat booty/phone
  function shakeEventDidOccur() {
    var items = document.getElementsByTagName('timer');
    var btn = document.getElementsByClassName('button')[0];
    
    if (btn.innerHTML === '◼︎') {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = '▶︎';
        items[i].stop();
      }
    }
    else {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = '◼︎';
        items[i].resume();
      }
    }
  }
  
  // Click that button
  $scope.timerToggle = function(btn) {  
    var items = document.getElementsByTagName('timer');
    
    if (btn.innerHTML === '◼︎') {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = '▶︎';
        items[i].stop();
      }
    }
    else {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = '◼︎';
        items[i].resume();
      }
    }
  }
  
  // Go home Buddy, I work(out) alone.
  $scope.goBack = function() {
    window.location.href = '#/app';
  }
})