// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const findListEl = document.querySelector('ul#ingredients');

const potatoesEl = document.createElement('li');
potatoesEl.classList.add('item')
potatoesEl.textContent = ingredients[0];
findListEl.append(potatoesEl);



const mushroomsEl = document.createElement('li');
mushroomsEl.classList.add('item')
mushroomsEl.textContent = ingredients[1];
findListEl.append(mushroomsEl);


const garlicEl = document.createElement('li');
garlicEl.classList.add('item')
garlicEl.textContent = ingredients[2];
findListEl.append(garlicEl);


const tomatosEl = document.createElement('li');
tomatosEl.classList.add('item')
tomatosEl.textContent = ingredients[3];
findListEl.append(tomatosEl);


const herbsEl = document.createElement('li');
herbsEl.classList.add('item')
herbsEl.textContent = ingredients[4];
findListEl.append(herbsEl);


const condimentsEl = document.createElement('li');
condimentsEl.classList.add('item')
condimentsEl.textContent = ingredients[5];
findListEl.append(condimentsEl);
