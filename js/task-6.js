const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let sizes = 30;

createButton.addEventListener('click', createClick);
destroyButton.addEventListener('click', handleDestroy);

function createClick() {
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 100) {
    console.log('error');
    return;
  }

  createBoxes(+inputNumber.value);
}

function createBoxes(amount) {
  box.innerHTML = '';
  sizes = 30;

  const arr = [];

  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);

    sizes += 10;

    box.append(...arr);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleDestroy() {
  box.innerHTML = '';
  inputNumber.value = '';
  sizes = 30;
}
