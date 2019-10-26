var pics = new Array('pic1', 'pic2', 'pic3');

var cards = new Array(
  './images/freak.png',
  './images/delivery-truck.png',
  './images/student.png',
);
function random_num() {
  var win = true;
  for (i = 0; i < 3; i++) {
    var idpic = 'pic' + (i + 1);
    var random = Math.floor(Math.random() * 3);
    if (i == 0) {
      var res = random;
    }
    if (i > 0 && random != res) {
      win = false;
    }
    document.getElementById(idpic).src = cards[random];
  }
  //if (!win) {alert("You're a looser !..");}
  if (win) {
    document.getElementById('random-answer').innerHTML += '<h3>WOOOON!</h3>';
  } else {
  }
}
