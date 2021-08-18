var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function() {
  $('.header__burder-img').click(function() {
      $('.header__list').toggleClass('menu__open');
      $('.header__tel').toggleClass('menu__open');
      $('.header__burder-img').toggleClass('menu__img');
      $('body').toggleClass('fixed');
  });
});