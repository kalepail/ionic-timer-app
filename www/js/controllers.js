angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.stopResumeTimer = function() {  
    if (this.innerHTML === 'Start') {
      document.getElementsByTagName('timer')[0].start();
      this.innerHTML = 'Stop';
    }
    else if (this.innerHTML === 'Stop') {
      document.getElementsByTagName('timer')[0].stop();
      this.innerHTML = 'Resume';
    }
    else {
      document.getElementsByTagName('timer')[0].resume();
      this.innerHTML = 'Stop';
    }  
  }
});