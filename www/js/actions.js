function startTimer(sectionId) {
  document.getElementById(sectionId).getElementsByTagName('timer')[0].start();
}

function stopTimer(sectionId) {
  document.getElementById(sectionId).getElementsByTagName('timer')[0].stop();
}


function addCDSeconds(sectionId, extraTime) {
  document.getElementById(sectionId).getElementsByTagName('timer')[0].addCDSeconds(extraTime);
}

function stopResumeTimer(sectionId, btn) {
  
  var items = document.getElementById(sectionId).getElementsByTagName('timer');
  
  if (btn.innerHTML === 'Start') {
    for (var i=0; i < items.length; i++) {
      items[i].start();
      btn.innerHTML = 'Stop';
    }
  }
  else if (btn.innerHTML === 'Stop') {
    for (var i=0; i < items.length; i++) {
      items[i].stop();
      btn.innerHTML = 'Resume';
    }
  }
  else {
    for (var i=0; i < items.length; i++) {
      items[i].resume();
      btn.innerHTML = 'Stop';
    }
  }
}