var swiper = new Swiper(".top__slider", {
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
   },
});
var swiper2 = new Swiper(".product__slider", {
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
   },
});
var swiper3 = new Swiper(".companies__slider", {
  slidesPerView: 5,
  spaceBetween: 0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 1
   },
   480: {
     slidesPerView: 2
   },
   // when window width is >= 480px
   790: {
     slidesPerView: 3
   },
   // when window width is >= 640px
   1000: {
     slidesPerView: 4
   },
   1300: {
     slidesPerView: 5
   },
 }
});

var swiper4 = new Swiper(".preview__slider", {
   spaceBetween: 0,
   slidesPerView: 3,
   watchSlidesProgress: true,
   breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
   }
});
var swiper5 = new Swiper(".slider__all_items", {
   spaceBetween: 10,
   slidesPerView: 1,
   thumbs: {
      swiper: swiper4,
   },
   
});