$(document).ready(function () {
    "use strict";
    var navbar = $('.navbar-default')
        , html_body = $('html, body')
        , btn_top = $(".btn_top");
    // Hide Loading Icon
    $(window).on('load', function () {
        $('#loader').fadeOut(500);
    });
    // Start btn scroll to top
    if ($(window).scrollTop() > 200) {
        btn_top.fadeIn();
    }
    else {
        btn_top.fadeOut();
    };
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
            btn_top.fadeIn();
        }
        else {
            btn_top.fadeOut();
        };
    });
    btn_top.on("click", function () {
        html_body.animate({
            scrollTop: 0
        }, 1500);
    });
    // Change Opacity Navigation bar background On Windows Refresh
    if ($(window).scrollTop() >= 150) {
        navbar.css('opacity', '0.9')
    }
    else {
        navbar.css('opacity', '1')
    }
    // Change Opacity Navigation bar background On Scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            navbar.css('opacity', '0.9')
        }
        else {
            navbar.css('opacity', '1')
        }
    });
    // Navbar Add Current Class & Move To Section
    $('.navbar-default .navbar-nav > li > a').on('click', function (e) {
        e.preventDefault();
        var section_id = $(this).attr('href');
        $(this).parent().addClass('current > a').siblings().removeClass('current > a');
        html_body.animate({
            scrollTop: $(section_id).offset().top
        }, 1500);
    });
    // Success Story Counter
    $('.success_story_counter').counterUp({
        delay: 10
        , time: 1000
    });
    // Skills bar state animate
    // ##### window on refresh #####
    var progress_bar = $('.progress-bar')
        , skills_top = $('#skills').offset().top - 200
        , window_top = $(window).scrollTop();
    if (window_top >= skills_top) {
        progress_bar.each(function () {
            var data_percent = $(this).attr('data-percent');
            $(this).css('width', data_percent)
        });
    };
    // ##### window on scroll #####
    $(window).on('scroll', function () {
        var skills_top = $('#skills').offset().top - 200
            , window_top = $(window).scrollTop();
        if (window_top >= skills_top) {
            progress_bar.each(function () {
                var data_percent = $(this).attr('data-percent');
                $(this).css('width', data_percent)
            });
        };
    });
    // MixitUp Plugin Run
    $('.controls .control').on('click', function () {
        $(this).addClass('actived').siblings().removeClass('actived');
    })
    var containerEl = document.querySelector('#da-thumbs');
    var mixer = mixitup(containerEl);
    // HoverDir Plugin Run
    $('#da-thumbs > .hover').hoverdir();
    // plugin slick slider for section client 
    $('#my_team').slick({
        dots: true
        , infinite: true
        , autoplay: true
        , speed: 300
        , slidesToShow: 3
        , slidesToScroll: 1
        , adaptiveHeight: true
        , responsive: [
            {
                breakpoint: 1024
                , settings: {
                    slidesToShow: 2
                    , slidesToScroll: 1
                    , infinite: true
                    , dots: true
                }
    }
            , {
                breakpoint: 640
                , settings: {
                    slidesToShow: 2
                    , slidesToScroll: 2
                }
    }
            , {
                breakpoint: 480
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    // FreeLance Button Contact
    $('.contact_me').on('click', function () {
        html_body.animate({
            scrollTop: $('#contact').offset().top
        }, 1500);
    });
});