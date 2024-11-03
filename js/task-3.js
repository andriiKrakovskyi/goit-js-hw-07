const inputName = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

inputName.addEventListener('input', handleInput);

function handleInput(event) {
  const trimInput = event.target.value.trim();
  spanOutput.textContent = trimInput || 'Anonymous';
}
