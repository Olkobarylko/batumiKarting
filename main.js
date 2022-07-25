var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,

    },
    769: {
      slidesPerView: 2,
    },
    1281: {
      slidesPerView: 3,
    }
  }
});