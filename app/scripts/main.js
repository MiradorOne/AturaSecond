/*Owl carousel*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
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

});
