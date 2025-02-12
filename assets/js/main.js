
// Home Page

var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});




var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});




var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }, 
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

// Product Detail Page

// $(function(){
//   var slider = new Swiper ('.gallery-slider', {
  
//     slidesPerView: 1,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//   });
  

//   var thumbs = new Swiper ('.gallery-thumbs', {
//     slidesPerView: 3,
//             centeredSlides: true,
//             slideToClickedSlide: true,
//           });
  
//           slider.controller.control = thumbs;
//           thumbs.controller.control = slider;
//     });


var swiper = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

