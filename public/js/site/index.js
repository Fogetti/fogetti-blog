(function ($) {
    'use strict';

    $(document).ready(function () {

        /*-------------------------------------------------------------------*/
        /*  Background slider
        /*-------------------------------------------------------------------*/
        $('#ptsection-one').backstretch([
            '../../images/desktop-with-coffee-desaturated.jpg',
            '../../images/desktop-with-ipad-desaturated.jpg'
        ], {duration: 10000, fade: 750});

        /*-------------------------------------------------------------------*/
        /*  Progress Tracker
        /*-------------------------------------------------------------------*/
        (function () {
            $('body').progressTracker({

                // Allows for navigating between content sections
                linking: true,

                // "constant" = always visiable
                // "hover" = shows on mouse hover
                tooltip: "hover",

                // The number specified is added to the default value at which the tracker changes to the next section.
                positiveTolerance: 0,

                // The number specified is subtracted from the default value at which the tracker changes to the next section.
                negativeTolerance: 60,

                // Only displays the progress tracker when the user is between the top of the first section and the bottom of the last;
                // It is only shown when the tracker sections are in view.
                // Specify false if you want the tracker to always show.
                displayWhenActive: false,

                // Specify the value (in pixels) that you wish the progress tracker to be hidden when it is below that.
                disableBelow: 0,

                // Specifies what the plugin takes into account when deciding when to switch to the next section.
                // "tracker" or "viewport"
                tracking: "viewport"

            });

            // Register custom scrollTop
            $('.progress-tracker ul li a.pt-circle').off('click').on('click', function(e) {
                softScroll(this, e);
            });

        })();

        /*-------------------------------------------------------------------*/
        /*  Back to top
        /*-------------------------------------------------------------------*/
        (function () {
            $("#back-top").hide();

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        })();

    
        /*-------------------------------------------------------------------*/
        /*  Experience
        /*-------------------------------------------------------------------*/
        (function (){
            /*-------------------------------------------------------------------*/
            /*  Collapse
            /*-------------------------------------------------------------------*/
            var ww = Math.max($(window).width(), window.innerWidth),
            workItem = $('.collapse:not(:first)', '#work');
            
            if (ww < 768){
                workItem.collapse('show');
            }
            else{
                workItem.collapse('hide');
            }

            /*-------------------------------------------------------------------*/
            /*  Animate
            /*-------------------------------------------------------------------*/
            $('#work').find('.resume-item:not(:first)').each(function(i){            
                var element = $(this),
                itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
                element.css('opacity', 0).one('inview', function(isInView) {
                    if (isInView){
                        setTimeout(function(){
                            element.addClass('animated bounceInUp').css('opacity', 1);
                        } , itemsDelay * (i * 2));
                    }
                });
            });
        
        })();
        
    });

    // Soft scroll
    var softScroll = function(target, event) {
        event.preventDefault();
        var targetNavElem = $(target).attr('href');
        if (targetNavElem[0] != '#') {
            window.open(targetNavElem);
            return false;
        }

        var targetScrollPos = $(targetNavElem).offset().top - $('header .mp-nav').height() + 40;

        if (window.pageYOffset > targetScrollPos) {
            $('html, body').animate({
                scrollTop: targetScrollPos - 60
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: targetScrollPos + 60
            }, 1000);
        }

        $('html, body').animate({
            scrollTop: targetScrollPos
        }, 600);
    };

})(jQuery);