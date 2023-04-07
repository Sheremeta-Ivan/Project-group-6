import Swiper from 'swiper/bundle';
const mySwiper = new Swiper('.myswiper', {
  // Optional parameters
  slidesPerView: 4,
  loop: true,
  spaceBetween: 18,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // mousewheel: {
  //   sensitivity: 2,
  // },
  // loopedSlides: 4,
  // speed: 800,

  // breakpoints: {
  //   768: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  //   1200: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //   },
  // },
});