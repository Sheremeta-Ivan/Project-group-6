// Напиши скрипт для создания галереи изображений по массиву данных. 
// В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

//   Используй массив объектов images для создания элементов < img > вложенных в < li >. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const findListEl = document.querySelector('ul.gallery');

// const catEl = document.createElement('li');
// const catImegEl = document.createElement('img');
// catImegEl.src = images[0].url;
// catImegEl.alt = images[0].alt;
// catImegEl.width = 320;
// catEl.append(catImegEl);
// catImegEl.insertAdjacentHTML("afterend", `${images[0].alt}`);


// const fishEl = document.createElement('li');
// const fishImegEl = document.createElement('img');
// fishImegEl.src = images[1].url;
// fishImegEl.alt = images[1].alt;
// fishImegEl.width = 320;
// fishEl.append(fishImegEl);
// fishImegEl.insertAdjacentHTML("afterend", `${images[1].alt}`);


// const runningEl = document.createElement('li');
// const runningImegEl = document.createElement('img');
// runningImegEl.src = images[2].url;
// runningImegEl.alt = images[2].alt;
// runningImegEl.width = 320;
// runningEl.append(runningImegEl);
// runningImegEl.insertAdjacentHTML("afterend", `${images[2].alt}`);


// findListEl.append(catEl, fishEl, runningEl);



const elements = images.map(option => {
  const linkEl = document.createElement('li');
const catImegEl = document.createElement('img');

  catImegEl.src = option.url;
  catImegEl.alt = option.alt;
  catImegEl.style.backgroundColor = 'black';
  catImegEl.style.width = '500px';
  catImegEl.style.padding = '20px';
  catImegEl.style.display = 'flex';
  catImegEl.style.borderRadius = '5px';
catImegEl.style.outline = '5px solid tomato';
  linkEl.append(catImegEl);
findListEl.append(linkEl);
catImegEl.insertAdjacentHTML("afterend", `<p href="">${option.alt}</p>`);

  
}
);

  