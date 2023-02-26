//TASK 7


const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

inputRef.value = 16;

function onInputChange(event) {
textRef.style.fontSize = '${event.target.value}px';
}