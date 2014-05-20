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
})