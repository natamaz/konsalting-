$(document).ready(function(){
    $('.phone_mask').mask('+7 (900) 000 00 00');
    $(function() {
        jcf.replaceAll();
    });
    $("a.gallery").fancybox();

    $('.menu_btn').on('click', function(){
        $('.menu_list').toggleClass('active');
    });
    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            });
        }

    })();


    $('.menu_btn_address').on('click', function(){
        $('.address').toggleClass('active');
    });
    $('.FAQ_slider').slick({
        infinite: false,
        draggable:true,
        arrows:false,
        dots:true,
        dotsClass:'my_dots',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.reviews_slider').slick({
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
    });
    $('.manager_slider').slick({

        draggable:true,
        dots:true,
        dotsClass:'my_dots',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        centerMode:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.office_slider').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
    });
    $('.open_heading').on('click', function(){
        $(this).toggleClass('active');
        $('.heading').toggleClass('active');
    });

    $('.open-order').on("click", function () {
        $('.overlay-order').addClass('active');

    });
    $('.overlay-order .close,.close-popup').on("click", function () {
        $('.overlay-order').removeClass('active');
    });


    $('.open-request').on("click", function () {
        $('.overlay-request').addClass('active');

    });
    $('.overlay-request .close,.close-popup').on("click", function () {
        $('.overlay-request').removeClass('active');
    });

    $('.open-info').on("click", function () {
        $('.overlay-info').addClass('active');

    });
    $('.overlay-info .close,.close-popup').on("click", function () {
        $('.overlay-info').removeClass('active');
    });

    $('.open-result').on("click", function () {
        $('.overlay-result').addClass('active');

    });
    $('.overlay-result .close,.close-popup').on("click", function () {
        $('.overlay-result').removeClass('active');
    });

    $('.open-confidentiality').on("click", function () {
        $('.overlay-confidentiality').addClass('active');

    });
    $('.overlay-confidentiality .close,.close-popup').on("click", function () {
        $('.overlay-confidentiality').removeClass('active');
    });

    $('.open-registration').on("click", function () {
        $('.overlay-registration').addClass('active');

    });
    $('.overlay-registration .close,.close-popup,.clos_registration').on("click", function () {
        $('.overlay-registration').removeClass('active');
    });

    $('.open-login').on("click", function () {
        $('.overlay-login').addClass('active');

    });
    $('.overlay-login .close,.close-popup,.clos_login').on("click", function () {
        $('.overlay-login').removeClass('active');
    });

    $('.open-recommendations_video').on("click", function () {
        $('.overlay-recommendations_video').addClass('active');

    });
    $('.overlay-recommendations_video .close,.close-popup').on("click", function () {
        $('.overlay-recommendations_video').removeClass('active');
    });
    $('.open-reviews').on("click", function () {
        $('.overlay-reviews').addClass('active');

    });
    $('.overlay-reviews .close,.close-popup').on("click", function () {
        $('.overlay-reviews').removeClass('active');
    });
});

(function($){
    $(window).on("load",function(){
        $(".scroll").mCustomScrollbar({
            axis: "x",

        });
    });
})(jQuery);

! function(i) {
    var o, n;
    i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp())
    })
}(jQuery);



