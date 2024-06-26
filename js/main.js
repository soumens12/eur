(function () {
  "use strict";


  //testimonial slider js
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1400: {
          items: 3,
          nav: true
        }
      }
    });
 

//gallery slider js
    $(".gallery-carousel").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        900: {
          items: 3,
          nav: false,
          loop: false
        },
        1400: {
          items: 5,
          nav: true
        }
      }
    });

    //client-carousel slider js
    $(".client-carousel").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive: {
        0: {
          items: 2,
          nav: false
        },
        900: {
          items: 4,
          nav: false,
          loop: false
        },
        1400: {
          items: 7,
          nav: true
        }
      }
    });

//client gallery carousel
    $(".client-gallery-carousel").owlCarousel({
      loop: true,
      center: true,
      margin: 15,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        900: {
          items: 3,
          nav: true,
          loop: true
        },
        1400: {
          items: 5,
          nav: true,
          loop:true,
        }
      }
      
    });



      $('.navbar .dropdown').hover(function () {
              $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
          }, function () {
              $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
      });
  


  $(".event-dream-data .event-drive-dream").hover(function () {
    $(this).addClass("active");  //Add the active class to the area is hovered
  }, function () {
      $(this).removeClass("active");
  });

  $(".flex-slide").hover(function () {
      $(this).addClass("active");  //Add the active class to the area is hovered
  }, function () {
      $(this).removeClass("active");
  });

  $('a[href^="#"]').on('click',function (e) {
    var target = this.hash,
        $target = $(target);
  
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-85
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });


})(jQuery);