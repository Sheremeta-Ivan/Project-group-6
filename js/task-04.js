// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue



const buttonsEl = document.querySelectorAll('button');
const counterValue = document.querySelector('span');



const buttonsClick = {
    value: 0,
    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    },
};


buttonsEl[0].addEventListener('click', function () {
    buttonsClick.decrement();
    counterValue.textContent = buttonsClick.value;
   

});


buttonsEl[1].addEventListener('click', function () {
    buttonsClick.increment();
    counterValue.textContent = buttonsClick.value;


});