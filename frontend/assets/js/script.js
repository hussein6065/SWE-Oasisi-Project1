(function($) {
	
	"use strict";


    // Back to top
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
     
    // Bootstrap Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
	// Date Picker
    $( function() {
        $( "#datepicker" ).datepicker();
    });

    //js code for mobile menu toggle
   $(".menu-toggle").on("click", function() {
       $(this).toggleClass("is-active");
   });

    // Hero Slider
    $('.hero-slider').owlCarousel({
        loop:true,
        dots: false,
        autoplay: false,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            576:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

 

    //App Carousel
	$('.app-content-slider').owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayTimeout:6000,
        navSpeed:800,
        autoplaySpeed:1500,
        responsive: true,
            responsive : {
                0 : {
                    items: 1
                },
                480 : {
                    items: 1,
                },
                768 : {
                    items: 1,
                },
                1024 : {
                    items: 1,
                }
            }
    }); 

    
    // screenshot popup

    $(".screenshot-gallery").each(function () {
        $(this).find(".popup-screenshot").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }); 

    $('.video-popup').magnificPopup({
        type: 'iframe',
    });

    //Counter-JS
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });




    // Preloader Js
    $(window).on('load', function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // Wow js active
    // new WOW().init(); 


    // Full Screen Search
    $(".search-btn").on('click', function(){
        $(".search-full").removeClass("close");
        $(".search-full").addClass("open");
    })

    $(".search-close").on('click', function(){
        $(".search-full").removeClass("open");
        $(".search-full").addClass("close");
    })
    


 

	
})(jQuery);