var pics = new Array('pic1', 'pic2', 'pic3');

var cards = new Array('images/DISCO.png', 'images/HAND.png', 'images/LIPS.png');

function random_num() {
  var win = true;
  for (i = 0; i < 3; i++) {
    var idpic = 'pic' + (i + 1);
    var random = Math.floor(Math.random() * 3);
    if (i === 0) {
      var result = random;
    }
    if (i > 0 && random != result) {
      win = false;
    }
    document.getElementById(idpic).src = cards[random];
  }
  if (win) {
    // document.getElementById('random-answer').innerHTML += '<h3>WOOOON!</h3>';
    const pauseDiv = document.getElementById('random-answer');
    const toggleSpin = document.getElementById('btn-pause');

    pauseDiv.style.visibility = 'visible';
    toggleSpin.style.visibility = 'hidden';
  }
}

function validateForm() {
  var inputName = document.forms['myForm']['fname'].value;
  var inputEmail = document.forms['myForm']['femail'].value;

  if (inputName == '') {
    alert('Name must be filled out');
    return false;
  }

  if (!inputEmail.includes('@')) {
    alert('@ must be filled out');
    return false;
  }
}

const btnPauseOff = document.getElementById('hide-pause');
btnPauseOff.onclick = function() {
  const pauseDiv = document.getElementById('random-answer');
  const toggleSpin = document.getElementById('btn-pause');

  pauseDiv.style.visibility = 'hidden';
  toggleSpin.style.visibility = 'visible';
};
