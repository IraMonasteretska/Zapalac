var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
  },
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

$(document).ready(function() {
  $('.location__header').click(function() {
      $('.location__title').toggleClass('title_active');
      $('.location__title').toggleClass('title_close');
      $('.location__adres').toggleClass('none');
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