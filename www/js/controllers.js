angular.module('controllers', [])

.controller('GoalCtrl', function($scope, $ionicSideMenuDelegate, $ionicScrollDelegate) {
	$scope.submit = function() {
	  if ($scope.text) {
	    query = this.text;
	    $scope.text = '';
	    window.location.href = '#/timer?goal='+query+'';
	  }
	};
})

.controller('TimerCtrl', function($scope, $stateParams) {
	$scope.result = parseFloat($stateParams.goal);
	$scope.class = "stop";
  
  $scope.timerToggle = function(sectionId, btn) {  
    var items = document.getElementById(sectionId).getElementsByTagName('timer');
    
    if (btn.innerHTML === 'Stop') {
      for (var i=0; i < items.length; i++) {
        items[i].stop();
        btn.innerHTML = 'Resume';
        $scope.class = "start";
      }
    }
    else {
      for (var i=0; i < items.length; i++) {
        items[i].resume();
        btn.innerHTML = 'Stop';
        $scope.class = "stop";
      }
    }
  };
})