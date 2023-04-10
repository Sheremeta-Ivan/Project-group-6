import Swiper from 'swiper/bundle';
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 28,

  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  loopedSlides: 3,
  speed: 800,
  //   effect: 'cube',
  //   cubeEffect: {
  //     slideShadows: true,
  //     shadow: true,
  //     shadowOffset: 10,
  //     shadowScale: 0.94,
  //   },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
