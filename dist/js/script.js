window.addEventListener("DOMContentLoaded", () => {
  $(".about__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".clients__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  $(".menu__bars").on("click", () => {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
