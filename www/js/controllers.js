angular.module('controllers', [])

// Homepage Set-A-Goal Controller
.controller('GoalCtrl', function($scope, $ionicSideMenuDelegate, $ionicScrollDelegate) {
  $scope.range = 5400;
  
  $scope.upOne = function() {
    $scope.range = parseFloat($scope.range) + 10;
  }
  $scope.downOne = function() {
    $scope.range = parseFloat($scope.range) - 10;
  }
  
  $scope.$watch(function() {
    $scope.duration = moment.duration($scope.range*100, "milliseconds").format("mm:ss", { trim: false });
  });
  
	$scope.submit = function() {
    var range = $scope.range;
    window.location.href = '#/timer?goal='+range+'';
	}
})

// Timer Controller
.controller('TimerCtrl', function($scope, $stateParams) {
	$scope.duration = moment.duration(parseFloat($stateParams.goal*100), "milliseconds").format("mm:ss", { trim: false });
	$scope.class = "button-energized";
	
	if (!eventAdded) {
	  window.addEventListener('shake', shakeEventDidOccur, false);
	  // works as application but breaks in development
	  window.plugins.insomnia.keepAwake();
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
      $scope.$apply(function () {
        $scope.class = 'button-balanced';
      });
    }
    else {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = '◼︎';
        items[i].resume();
      }
      $scope.$apply(function () {
        $scope.class = 'button-energized';
      });
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
      $scope.class = "button-balanced";
    }
    else {
      for (var i=0; i < items.length; i++) {
        btn.innerHTML = '◼︎';
        items[i].resume();
      }
      $scope.class = "button-energized";
    }
  }
  
  $scope.goBack = function() {
    window.location.href = '#/app';
  }
})