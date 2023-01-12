import Swiper, { Navigation, Scrollbar } from "swiper";
Swiper.use([Navigation, Scrollbar]);

function getPerView() {
  const width = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
  return width < 600 ? 1 : width < 900 ? 2 : 3
}


const swiper = new Swiper(".our__content", {
  slidesPerView: getPerView(),
  spaceBetween: 90,
  navigation: {
    nextEl: ".our__slider-btn--next",
    prevEl: ".our__slider-btn--prev",
  },
});


addEventListener("resize", () => {
  swiper.params.slidesPerView = getPerView()
})