console.log("Hi! Welcome to My Portfolio Site")
var text2 = "Hello, My name is Josephine!"


function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    x.className += ' responsive'; 
}

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

