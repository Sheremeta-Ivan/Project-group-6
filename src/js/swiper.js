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
  //   sensitivity: 1,
  // },
  loopedSlides: 4,
  speed: 800,


  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },
});