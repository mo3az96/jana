$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    ///////// **cats** /////////
    if ($(window).width() <= 1199) {
        $(".cats").addClass("swiper-container");
        $(".cats .cat").wrap("<div class='swiper-slide'></div>");
        $(".cats .swiper-slide").wrapAll("<div class='swiper-wrapper'></div>");
        var cats_swiper = new Swiper('.cats', {
            loop: true,
            pagination: {
                el: '.cats .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
        });
    }
    ///////// **products Slider** ///////// 
    var bestseller_Slider = new Swiper('.bestseller .swiper-container', {
        loop: true,
        pagination: {
            el: '.bestseller .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller .swiper-button-next',
            prevEl: '.bestseller .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// **products Slider** ///////// 
    var specials_Slider = new Swiper('.specials .swiper-container', {
        loop: true,
        pagination: {
            el: '.specials .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.specials .swiper-button-next',
            prevEl: '.specials .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// **products Slider** ///////// 
    var new_Slider = new Swiper('.new .swiper-container', {
        loop: true,
        pagination: {
            el: '.new .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// **Brands Slider** ///////// 
    var brands_Slider = new Swiper('.brandsSlider .swiper-container', {
        loop: true,
        pagination: {
            el: '.brandsSlider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 29,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 29,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 29,
            },
        },
    });
    ///////// **feats** /////////
    if ($(window).width() <= 1199) {
        $(".feats").addClass("swiper-container");
        $(".feats .feat").wrap("<div class='swiper-slide'></div>");
        $(".feats .swiper-slide").wrapAll("<div class='swiper-wrapper'></div>");
        var feats_swiper = new Swiper('.feats', {
            pagination: {
                el: '.feats .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **search** /////////
    if ($(window).width() <= 991) {
        $(".search-icon").click(function () {
            $(".search-cont").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-form").addClass("open");
        })
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").fadeOut(500);
            $(".search-form").removeClass("open");
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **menu** /////////
    if ($(window).width() <= 991) {
        $('.menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});