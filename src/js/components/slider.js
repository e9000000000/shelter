import Swiper, { Navigation, Scrollbar } from "swiper";
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper(".our__content", {
  slidesPerView: 3,
  spaceBetween: 90,
  navigation: {
    nextEl: ".our__slider-btn--next",
    prevEl: ".our__slider-btn--prev",
  },
});
