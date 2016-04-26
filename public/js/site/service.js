(function($) {
    'use strict';

    $(document).ready(function() {

        /*-------------------------------------------------------------------*/
        /*  Preloader
        /*-------------------------------------------------------------------*/
        $(window).load(function() {
            $('#status').fadeOut();
            $('#preloader').fadeOut('fast');
        });

        $('.slick-slider').on('init', function(event, slick, currentSlide, nextSlide) {
            $(".slick-current+div").addClass('hidden');
        });

        $('.slick-slider').slick({
            fade: true,
            cssEase: "ease",
            autoplay: true,
            autoplaySpeed: 2000,
            slide: '.slide',
            pauseOnHover: true,
            arrows: false
        });

        $('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(".slick-current").removeClass('animated fadeInDown bounceInUp slideInLeft');
            // Restart animation in Safari
            $(".slick-current")[0].style.webkitAnimationName = 'animated';
            $(".slick-current").addClass('animated fadeOutDown');
        });

        $('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(".slick-current").removeClass('hidden animated fadeOutDown');
            // Restart animation in Safari
            $(".slick-current")[0].style.webkitAnimationName = 'animated';
            $(".slick-current").addClass('animated fadeInDown');
            $(".slick-current+div").addClass('hidden');
        });

    });

})(jQuery);
