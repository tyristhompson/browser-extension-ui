const body = document.querySelector('body');
const lightButton = document.querySelector('.lighting-mode');
const allButton = document.querySelector('.all');
const activeButton = document.querySelector('.active');
const inactiveButton = document.querySelector('.inactive');
const removeButtons = document.querySelectorAll('.remove');
const parent = document.querySelector('.main-content');

const activeArray = [];
const inactiveArray = [];
const allArray = [];

async function getExtensions() {
  try {
    const resp = await fetch('data.json');
    const data = await resp.json();
    
    for(let i = 0; i < data.length; i++) {
      const newDiv = document.createElement('div');
      newDiv.className = 'extension-container';
      newDiv.innerHTML = `
      <div class="extension-description">
        <img src="${data[i].logo}" alt="">
        <div class="description-container">
          <p class="extension-name">${data[i].name}</p>
          <p class="extension-text">${data[i].description}</p>
        </div>
      </div>

      <div class="extension-settings">
        <button class="remove">Remove</button>
        <label class="toggle" for="checkbox${i}">
          <input type="checkbox" id="checkbox${i}" ${data[i].isActive == true ? 'checked' : ''}>
          <span class="slider"></span>
        </label>
      </div>`;

      parent.appendChild(newDiv);
      allArray.push(newDiv);
    };
    const extensionToggles = document.querySelectorAll('input');
    extensionToggles.forEach(((input) => {
      input.checked == true ? activeArray.push(input.parentElement.parentElement.parentElement) : inactiveArray.push(input.parentElement.parentElement.parentElement)
      input.addEventListener('change', changeActiveToggle)
    }))
    
    }

   catch (error) {
    console.log(error);
  }
}




function changeActiveToggle() {
  const container = this.parentElement.parentElement.parentElement;
  if(this.checked == false) {
    activeArray.splice(activeArray.indexOf(container), 1);
    inactiveArray.push(container);
  }
  else if(this.checked == true) {
    inactiveArray.splice(inactiveArray.indexOf(container), 1);
    activeArray.push(container);
  }

  if(activeButton.classList.contains('pressed') & inactiveArray.includes(container)) {
    parent.removeChild(container);
  }
  else if(inactiveButton.classList.contains('pressed') & activeArray.includes(container)) {
    parent.removeChild(container);
  }
 
}






























function buttonPressed() {
  const filters = [allButton, activeButton, inactiveButton];
  filters.forEach((button) => {button.classList.remove('pressed')});
  this.classList.toggle('pressed');

  if(this == activeButton) {
    parent.innerHTML = '';
    activeArray.forEach((element) => parent.appendChild(element));
  }
  else if(this == inactiveButton) {
    parent.innerHTML = '';
    inactiveArray.forEach((element) => parent.appendChild(element));
  }
  else {
    allArray.forEach((element) => parent.appendChild(element));
  }
};

function changeLighting() {
  body.classList.toggle('light');
  
  if(body.classList.contains('light')) {
    lightButton.innerHTML = '<img class="lighting-icon" src="assets/images/icon-moon.svg" alt="">';
  } else {
    lightButton.innerHTML = '<img class="lighting-icon" src="assets/images/icon-sun.svg" alt="">';
  }
  
};

getExtensions();
lightButton.addEventListener('click', changeLighting);
allButton.addEventListener('click', buttonPressed);
activeButton.addEventListener('click', buttonPressed);
inactiveButton.addEventListener('click', buttonPressed);

