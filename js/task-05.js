// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), подставляет его 
// текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder=
// "Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>




const input = document.querySelector('input#name-input');
const title = document.querySelector('span#name-output');


input.addEventListener('input', onInputChange);


function onInputChange(event) {
    title.textContent = event.currentTarget.value;
};


