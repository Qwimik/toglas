//Swiper

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.clientsLogosSwiper', {
  grid: {
    rows: 2,
  },
  spaceBetween: 0,
  slidesPerColumn: 2,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 5.2,
    },
    1000: {
      slidesPerView: 7,
    },
    1900: {
      slidesPerView: 10,
    },
  },
});

new Swiper('.clientsCardsSwiper', {
  slidesPerView: 1,

  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
