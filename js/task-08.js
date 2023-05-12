// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

//     Обработка отправки формы form.login - form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением 
// о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения 
// полей в обьект, где имя поля будет именем свойства, а значение поля -
//     значением свойства.Для доступа к элементам формы используй свойство
// elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей 
// формы методом reset.


const form = document.querySelector('form');
const mail = document.querySelector('input[type="email"]');
const passwords = document.querySelector('input[type="password"]');



form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    if (0 === mail.value.length) {
        mail.style.border = '3px solid #f44336';
        mail.placeholder = "Все поля должны быть заполнены!";
        alert( "Все поля должны быть заполнены!" );
    } else {
         mail.style.border = '';
        mail.placeholder = ""

    }
    if (0 === passwords.value.length) {
        passwords.style.border = '3px solid #f44336';
        passwords.placeholder = "Все поля должны быть заполнены!";
        alert( "Все поля должны быть заполнены!" );
    } else {
         passwords.style.border = '';
        passwords.placeholder = ""

    }

    const {email, password} = event.currentTarget.elements
console. log (`email: ${email.value}`);
console. log (`password: ${password.value}`);

    const data = {
        name: email.value,
        password: password.value,
    };
    console.log(data)
    
    form.reset();
};



