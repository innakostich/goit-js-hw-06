//TASK 6

//Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
//проверяет его содержимое на правильное количество введённых символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
const inputLength = Number(inputRef.getAttribute('data-length'));
const inputValueLength = event.target.value.length;

if (inputValueLength === inputLength) {
inputRef.classList.add('valid');
inputRef.classList.remove('invalid');
} else {
inputRef.classList.add('invalid');
inputRef.classList.remove('valid');
}
}

