const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const elementBodyColor = document.querySelector('.widget');

buttonColor.addEventListener('click', handleClick);

function handleClick(event) {
  const newColor = getRandomHexColor();
  elementBodyColor.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
