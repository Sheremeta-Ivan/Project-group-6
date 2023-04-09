const modalLeaveAReview = document.getElementById('modal-leave-a-review');
const field1 = modalLeaveAReview.querySelector(
  'input[name="username__modal-leave-a-review"]'
);
const field2 = modalLeaveAReview.querySelector(
  'input[name="email__modal-leave-a-review"]'
);
const field3 = modalLeaveAReview.querySelector(
  'input[name="tel__modal-leave-a-review"]'
);

const submitButton = modalLeaveAReview.querySelector('#submitButton');

// Додайте слухачі подій на поля вводу даних
field1.addEventListener('input', checkFields);
field2.addEventListener('input', checkFields);
field3.addEventListener('input', checkFields);

// Функція перевірки стану полів вводу
function checkFields() {
  // Перевірте, чи всі поля вводу заповнені
  if (field1.value !== '' && field2.value !== '' && field3.value !== '') {
    // Якщо так, то активуйте кнопку відправлення
    submitButton.removeAttribute('disabled');
  } else {
    // Якщо ні, то дезактивуйте кнопку відправлення
    submitButton.setAttribute('disabled', 'disabled');
  }
}
