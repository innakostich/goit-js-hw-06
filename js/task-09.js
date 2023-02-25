//TASK 9

//Напиши скрипт, который изменяет цвета фона элемента <body> через
// инлайн стиль при клике на button.change-color 
//и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const button = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});

