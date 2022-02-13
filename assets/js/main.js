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

        //scroll height
        // $(window).bind('scroll', function () {
        //     if ($(window).scrollTop() > 200) {
        //         $('.header-section').addClass('fixed');
        //         $('.header-info-wrapper').addClass('shoe');
        //         // console.log('crosed 200 px');
        //     } else {
        //         $('.header-section').removeClass('fixed');
        //         $('.header-info-wrapper').removeClass('show');
        //     }
        // });

        // nice-select
        $('select').niceSelect();

        // hero slider activation
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            swipe: true,
            touchMove: true
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: false,
            arrows: false,
            swipe: true,
            touchMove: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,

                    }
                },
            ]
        });

        // input focus btn
        $("#location").focus(function () {
            $(this).parent().removeClass("hide");
            $(this).parent().addClass("show");
        }).blur(function () {
            $(this).parent().removeClass("show");
            $(this).parent().addClass("hide");
        });

        // date input
        $("#check_in").focus(function () {
            $(this).attr('type', 'date');

        }).blur(function () {
            $(this).attr('type', 'text');
        });

        $("#check_out").focus(function () {
            $(this).attr('type', 'date');

        }).blur(function () {
            $(this).attr('type', 'text');
        });

        // add guest
        $("#add_guest").click(function () {
            $(this).parent().toggleClass("show");
            $('.cancel-guest').toggleClass("show");
        })

        $('.cancel-guest').click(function () {
            $("#add_guest").parent().removeClass('show');
            $(this).removeClass('show');
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
