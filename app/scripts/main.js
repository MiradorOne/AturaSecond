/*Owl carousel*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
      },
      768:{
        items:1,
        lup:true,
        nav:false,
        fallbackEasing: true,
      },
      1000:{
        items:1,
        nav:true,
        loop:true,
        dots:true,
        animateIn: true,
      }
    }
  });

  $(".img-slider").slick({

    accessibility: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    variableWidth:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false,
          autoplay:true,
          autoplaySpeed: 2000,
          infinite:true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});

