(function ($) {
    "use strict"
    jQuery(document).ready(function () {
        /* start point */

        // Scroll To Top 
        $('.scrollup').on('click', function () {
            $("html").animate({
                "scrollTop": '0'
            }, 500);
        });
        $(window).on('scroll', function () {
            var toTopVisible = $('html').scrollTop();
            if (toTopVisible > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        // nice-select
        $('select').niceSelect();

        var numSlick = 0;
        $('.slider-products').each(function () {
            numSlick++;
            $(this).addClass('slider-' + numSlick).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav.slider-' + numSlick
            });
        });

        var numSlick = 0;
        $('.slider-nav').each(function () {
            numSlick++;
            $(this).addClass('slider-' + numSlick).slick({
                vertical: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.slider-products.slider-' + numSlick,
                arrow: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                        }
                    }
                ]
            });
        });


        /* end point */
    });

    jQuery(window).on('load', function () {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });
})(jQuery);
