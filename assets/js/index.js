// © 2022 Muunatic. All rights reserved.

let i = 0;
let txt = '> println("Hello, World!");';
let speed = 50;

if (screen.width < 880) {
  alert('Your resolution under website system requirements, use desktop view to access all content.');
};

function typewriter() {
  if (i < txt.length) {
    document.getElementById('additionalinfo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  };
};

document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
  });
};