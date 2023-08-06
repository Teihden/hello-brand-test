/* eslint-disable no-unused-vars */
import { Swiper } from '../../vendor/swiper/swiper-bundle.min.mjs';

const initSwiper = () => {
  const feedbackSwiper = new Swiper('#feedback-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#feedback-swiper-button-prev',
      prevEl: '#feedback-swiper-button-next',
    },
  });

  const interiorSwiper = new Swiper('#interior-swiper', {
    effect: 'fade',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    updateOnWindowResize: true,
    resizeObserver: true,
    navigation: {
      nextEl: '#interior-swiper-button-prev',
      prevEl: '#interior-swiper-button-next',
    },
  });
};

export { initSwiper };
