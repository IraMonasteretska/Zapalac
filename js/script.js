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
      $('.header__block').toggleClass('menu__open');
      $('.header__list').toggleClass('menu__open');
      $('.header__tel').toggleClass('menu__open');
      $('.header__burder-img').toggleClass('menu__img');
      $('body').toggleClass('fixed');
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        $(this).next().slideToggle()
    });
}