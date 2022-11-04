const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNo = 1;
let imagesLength = images.length;

for (let i = 0; i < imagesLength; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = 'gray';

const resetButtons = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = 'transparent';
  });
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetButtons();
    slider.style.transform = `translateX(-${index * 800}px)`;
    slideNo = index + 1;
    button.style.backgroundColor = 'gray';
  });
});

right.addEventListener('click', () => {
  if (slideNo < imagesLength) {
    slider.style.transform = `translateX(-${slideNo * 800}px)`;
    resetButtons();
    buttons[slideNo].style.backgroundColor = 'gray';
    slideNo++;
  } else {
    slider.style.transform = `translateX(0px)`;
    resetButtons();
    slideNo = 1;
    buttons[slideNo - 1].style.backgroundColor = 'gray';
  }
});

left.addEventListener('click', () => {
  if (slideNo > 1) {
    slider.style.transform = `translateX(-${(slideNo - 2) * 800}px)`;
    resetButtons();
    buttons[slideNo - 2].style.backgroundColor = 'gray';
    slideNo--;
  } else {
    slider.style.transform = `translateX(-${(imagesLength - 1) * 800}px)`;
    slideNo = imagesLength;
    resetButtons();
    buttons[slideNo - 1].style.backgroundColor = 'gray';
  }
});
