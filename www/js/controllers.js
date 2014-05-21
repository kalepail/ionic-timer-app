angular.module('controllers', [])

// Homepage Set-A-Goal Controller
.controller('GoalCtrl', function($scope, $ionicSideMenuDelegate, $ionicScrollDelegate) {
  $scope.range = 5400;
  
  $scope.$watch(function () {
    $scope.duration = moment.duration($scope.range*100, "milliseconds").format("mm:ss", { trim: false });
  });
  
	$scope.submit = function() {
	  if ($scope.range) {
	    range = this.range;
	    window.location.href = '#/timer?goal='+range+'';
	  }
	}
})

// Timer Controller
.controller('TimerCtrl', function($scope, $stateParams) {
	$scope.duration = moment.duration(parseFloat($stateParams.goal*100), "milliseconds").format("mm:ss", { trim: false });
	$scope.class = "button-energized";
	
	if (!eventAdded) {
	  window.addEventListener('shake', shakeEventDidOccur, false);
	  eventAdded = true;
	}
  
  // Shake 'dat booty/phone
  function shakeEventDidOccur() {
    var items = document.getElementById('clock-timer').getElementsByTagName('timer');
    var btn = document.getElementsByClassName('button')[0];
    
    if (btn.innerHTML === 'Pause') {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = 'Resume';
        items[i].stop();
      }
      $scope.$apply(function () {
        $scope.class = 'button-balanced';
      });
    }
    else {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = 'Pause';
        items[i].resume();
      }
      $scope.$apply(function () {
        $scope.class = 'button-energized';
      });
    }
  }
  
  // Click that button
  $scope.timerToggle = function(sectionId, btn) {  
    var items = document.getElementById(sectionId).getElementsByTagName('timer');
    
    if (btn.innerHTML === 'Pause') {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = 'Resume';
        items[i].stop();
      }
      $scope.class = "button-balanced";
    }
    else {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = 'Pause';
        items[i].resume();
      }
      $scope.class = "button-energized";
    }
  }
  
  $scope.goBack = function() {
    window.location.href = '#/app';
  }
})