// Напиши скрипт создания и очистки коллекции элементов.Пользователь 
// вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр -
//   число.Функция создает столько < div >, сколько указано в amount и 
//   добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего 
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, т
// ем самым удаляя все созданные элементы.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  

const form = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const boxes = document.querySelector('[id="boxes"]');


console.log(form);
console.log(buttons[1]);
console.log(buttons[0]);
console.log(boxes);

form.addEventListener('input', createBoxes);
buttons[0].addEventListener('click', onCreateButton);
buttons[1].addEventListener('click', onDestroyButton);



function createBoxes(amount) {

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = 30 + (10 * i) + 'px';
    box.style.height = 30 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    
    boxes.append(box);
  }
};


function onCreateButton(greate) {
  greate.preventDefault();
  greate = form.value;
  if(greate > 0) {
    createBoxes(greate);
  }
};



  function onDestroyButton(destroy) {
    destroy.preventDefault(); 
    boxes.innerHTML = '';
};


