//TASK 5

//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', () => {
    if (nameInput.value) {
      nameOutput.textContent = nameInput.value;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });

