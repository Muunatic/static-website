// © 2022 Muunatic. All rights reserved.

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  mousewheel: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

let i = 0;
let txt = '> println("Hello, World!");';
let speed = 50;

if (screen.width <= 380) {
  alert('Your resolution under website system requirements, use desktop view to access all content.');
}

function typewriter() {
  if (i < txt.length) {
    document.getElementById('additionalinfo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

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

$(window).on('load', () => {
  return document.getElementById('welcomeassets').src = 'assets/img/welcome.mp4';
});

function start() {
  $(document).ready(() => {
    setTimeout(() => {
      $("#welcomeid").fadeOut();
      typewriter();
    }, 13000);
  });
}

const page1 = document.getElementById('pageid');
const page2 = document.getElementById('page2id');
const page3 = document.getElementById('page3id');

function houseIcon() {
  page1.style.display = 'block';
  page2.style.display = 'none';
  page3.style.display = 'none';
}

function imageIcon() {
  page1.style.display = 'none';
  page2.style.display = 'block';
  page3.style.display = 'none';
}

function playIcon() {
  page1.style.display = 'none';
  page2.style.display = 'none';
  page3.style.display = 'block';

  const postwrapper = document.querySelector('.postwrapper');
  const media = document.getElementById('mainvideo');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        media.play();
        return;
      }
      media.pause();
    });
  });
  
  observer.observe(postwrapper);
}