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
        $(window).bind('scroll', function () {
            $('.header-section').removeClass('add-padding');
            if ($(window).scrollTop() > 200) {
                $('.header-section').addClass('fixed');
                $('.header-info-wrapper').addClass('hide-nav');
                $('.header-info-wrapper').parent().removeClass('my-4');
                $('.header-input').addClass('show');
                // console.log('crosed 200 px');
            } else {
                $('.header-section').removeClass('fixed');
                $('.header-info-wrapper').removeClass('hide-nav');
                $('.header-input').removeClass('show');
                $('.header-info-wrapper').parent().addClass('my-4');
            }
        });

        // header scroll nav effect
        $('.header-input').click(function () {
            $('.header-info-wrapper').removeClass('hide-nav');
            $('.header-input').removeClass('show');
            $('.header-section').addClass('add-padding');

        });


        // nice-select
        $('select').niceSelect();

        // swipper slider
        var swiper = new Swiper(".travelSwiper", {
            loop: true,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                375: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    spaceBetween: 10,
                    slidesPerView: 5,
                },
            }
        });
        var swiper2 = new Swiper(".tarvelSwiper2", {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
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

        // vdo popup activation
        $('.popup-link').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }

                },

                srcAction: 'iframe_src',
            }
        });

        // single page slider
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                },
            }
        });

        // sidebar navbar
        const mobileScreen = window.matchMedia("(max-width: 990px )");
        $(document).ready(function () {
            $(".dashboard-nav-dropdown-toggle").click(function () {
                $(this).closest(".dashboard-nav-dropdown")
                    .toggleClass("show")
                    .find(".dashboard-nav-dropdown")
                    .removeClass("show");
                $(this).parent()
                    .siblings()
                    .removeClass("show");
            });
            $(".menu-toggle").click(function () {
                if (mobileScreen.matches) {
                    $(".dashboard-nav").toggleClass("mobile-show");
                } else {
                    $(".dashboard").toggleClass("dashboard-compact");
                }
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
