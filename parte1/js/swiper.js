import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper.hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'coverflow',
  autoplay: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})



const swiperProduct = new Swiper('.swiper.showcase__slider', {
  direction: 'horizontal',
  slidesPerView: 4,
  autoplay: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      centerMode: true
    },
    480: {
      slidesPerView: 1,
      centerMode: true
    },
    960: {
      slidesPerView: 2,
    },
    1170: {
      slidesPerView: 4
    }
  }
})