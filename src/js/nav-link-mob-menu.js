const links = document.querySelectorAll('.mob-menu-nav-list a');
const menu = document.querySelector('.mob-menu');
const menuContainer = document.querySelector('.mob-menu-container');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Удаляем класс у всех ссылок
    links.forEach(otherLink => otherLink.classList.remove('current-link'));

    // Добавляем класс текущей ссылке
    link.classList.add('current-link');

    // Получаем атрибут href текущей ссылки
    const href = link.getAttribute('href');

    // Проверяем, есть ли в href якорь
    const anchor = href.indexOf('#');

    if (anchor !== -1) {
      // Получаем id якоря
      const id = href.slice(anchor + 1);

      // Находим элемент с id якоря
      const element = document.getElementById(id);

      if (element) {
        // Вычисляем координату Y элемента с учетом прокрутки страницы
        const y = element.getBoundingClientRect().top + window.pageYOffset;

        // Плавно скроллим к элементу
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });

        // Закрываем меню
        menu.classList.remove('is-open');
        menuContainer.classList.remove('is-open');

        // Восстанавливаем скролл на всей странице
        document.body.style.overflow = 'auto';
      }
    } else {
      // Если якоря нет, переходим на страницу по ссылке
      window.location.href = href;

      // Закрываем меню
      menu.classList.remove('is-open');
      menuContainer.classList.remove('is-open');

      // Восстанавливаем скролл на всей странице
      document.body.style.overflow = 'auto';
    }
  });
});

// Закрытие меню после скролла до нужной секции
window.addEventListener('scroll', () => {
  const currentLink = document.querySelector('.current-link');
  const href = currentLink.getAttribute('href');
  const anchor = href.indexOf('#');

  if (anchor !== -1) {
    const id = href.slice(anchor + 1);
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom >= 0 || rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) {
      menu.classList.remove('is-open');
      menuContainer.classList.remove('is-open');
    }
  }
});
