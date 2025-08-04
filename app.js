const body = document.querySelector('body');
const lightButton = document.querySelector('.lighting-mode');
const allButton = document.querySelector('.all');
const activeButton = document.querySelector('.active');
const inactiveButton = document.querySelector('.inactive');
const removeButtons = document.querySelectorAll('.remove');
const extensionToggles = document.querySelectorAll('.toggle');

function changeLighting() {
  body.classList.toggle('light');
  
  if(body.classList.contains('light')) {
    lightButton.innerHTML = '<img class="lighting-icon" src="assets/images/icon-moon.svg" alt="">';
  } else {
    lightButton.innerHTML = '<img class="lighting-icon" src="assets/images/icon-sun.svg" alt="">';
  }
  
};

lightButton.addEventListener('click', changeLighting);
