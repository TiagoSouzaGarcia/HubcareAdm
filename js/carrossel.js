const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
