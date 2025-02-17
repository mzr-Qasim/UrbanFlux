
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


// Product Detail Swiper

var swiper = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
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


// Related Products Swiper
var mySwiper_related_product = new Swiper(".mySwiper_related_products", {
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




// Search Bar

document.getElementById('search-bar-close').addEventListener('click', function () {
  document.getElementById('search-top-bar').classList.toggle('search-bar-activate');
});

document.getElementById('search-btn').addEventListener('click', function () {
  document.getElementById('search-top-bar').classList.toggle('search-bar-activate');
});









// Filter


// document.getElementById('filter_close_button').addEventListener('click', function () {
//   document.getElementById('filters-sidebar').classList.toggle('open');
// });

// document.getElementById('filter_button').addEventListener('click', function () {
//   document.getElementById('filters-sidebar').classList.toggle('open');
// });


