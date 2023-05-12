// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
// и количество элементов в категории(всех вложенных в него < li >).
// Для выполнения этой задачи нужно использовать метод forEach() 
// и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5





        const linkEl = document.querySelector('ul#categories');

   const linkNumberEl = document.querySelectorAll('li.item').length
   

    const titleNumberListEl = [];

    const titleNameLinkEl = document.querySelectorAll('h2');
    for (let title of titleNameLinkEl) {
        titleNumberListEl.push(title.textContent);
    };

    const linkNumEl = [];

const linkTotalsEl = linkEl.querySelectorAll('li.item');
    for (let el of linkTotalsEl) {
       linkNumEl.push(el.querySelectorAll('li').length);
};

    
 console.log(`Number of categories: ${linkNumberEl}`)

console.log(`Category: ${titleNumberListEl[0]}
Elements: ${linkNumEl[0]}`)
    
console.log(`Category: ${titleNumberListEl[1]}
Elements: ${linkNumEl[1]}`)
    
console.log(`Category: ${titleNumberListEl[2]}
Elements: ${linkNumEl[2]}`)

