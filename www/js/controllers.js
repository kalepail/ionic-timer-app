angular.module('controllers', [])

// Homepage Set-A-Goal Controller
.controller('GoalCtrl', function($scope, $ionicSideMenuDelegate, $ionicScrollDelegate, $timeout) {
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
  window.addEventListener('shake', shakeEventDidOccur, false);
	$scope.duration = moment.duration(parseFloat($stateParams.goal*100), "milliseconds").format("mm:ss", { trim: false });
	
	$scope.class = "pause";
  
  // Click that button
  $scope.timerToggle = function(sectionId, btn) {  
    var items = document.getElementById(sectionId).getElementsByTagName('timer');
    
    if (btn.innerHTML === 'Pause') {
      for (var i=0; i < items.length; i++) {
        items[i].stop();
        btn.innerHTML = 'Resume';
        $scope.class = "resume";
      }
    }
    else {
      for (var i=0; i < items.length; i++) {
        items[i].resume();
        btn.innerHTML = 'Pause';
        $scope.class = "pause";
      }
    }
  }
  
  // Shake 'dat booty/phone
  function shakeEventDidOccur() {
    var items = document.getElementById('clock-timer').getElementsByTagName('timer');
    var btn = document.getElementsByTagName('button')[0];
    
    if (btn.innerHTML === 'Pause') {
      for (var i=0; i < items.length; i++) {
        items[i].stop();
        btn.innerHTML = 'Resume';
        
        $scope.$apply(function () {
          $scope.class = 'resume';
        });
      }
    }
    else {
      for (var i=0; i < items.length; i++) {
        items[i].resume();
        btn.innerHTML = 'Pause';
        
        $scope.$apply(function () {
          $scope.class = 'pause';
        });
      }
    }
  }
})