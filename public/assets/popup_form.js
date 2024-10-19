/* global document */

document.querySelectorAll('.join').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#register').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
  });
});

document.querySelectorAll('.sign').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#login').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
  });
});

let touchstartY = 0;
let touchendY = 0;

function checkDirection() {
  if (touchendY > touchstartY) {
    document.querySelector('.popup').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('#login').classList.remove('active');
  }
}

const bd = document.body;

bd.addEventListener('touchstart', (e) => {
  touchstartY = e.changedTouches[0].screenX;
});

bd.addEventListener('touchend', (e) => {
  touchendY = e.changedTouches[0].screenX;
  checkDirection();
});
