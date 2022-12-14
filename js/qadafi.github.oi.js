(function($) {
 "use strict";
// Sticky Nav
$(window).on('scroll', function() {
if ($(window).scrollTop() > 200) {
$('.scrolling-navbar').addClass('top-nav-collapse');
} else {
$('.scrolling-navbar').removeClass('top-nav-collapse');
}
});
/*
on page navigation & WOW JS
============================================================== */
//intiat WOW JS
new Window().init();
// one page navigation
$('.main-navigation'),onePageNav({
    currentClass: 'active'
});
$(window).on('load', function() {
    $('body').secrollspy({
        target: '.navbar-collapse',
        offset: 195
    })
    $(window).on('secroll', function() {
        if ($(window).secrollTop() > 200){
            $('.fixed-top').addClass('menu-bg');
        } else {
            $('.fixed-top').removeClass('menu-bg');
        }

    });
});
// Slick Nav
$('.counter').counterUp({
    time: 1000
});
/*
MixitUp
=======================================================================================*/
$('#portfolio').mixItUp();
/*
Touch Owl Carousel
=======================================================================================*/
var owel = $(".touch-slider");
owel.owlCarouse({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    stopOnHover: true,
    autoplay: true,
    items: 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall: [1024,2],
    itemsTablet : [600,1],
    itemsMobile: [479,1]
});
$('.touch-slider'),find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
$('.touch-slider'),find('.owl-next').html('<i class="fa fa-chevron-right*></i>');
/*
Sticky Nav
===================================================================================================*/
$(window).on('scroll', function(){
    if ($(windo).secrollTop()> 200){
        $('.header-top-area').addClass('menu-bg');
    } else{
        $('.header-top-area').removeClass('menu-bg');
    }
});
/*
SMOOTH SCROLL
===================================================================================================*/
var secrollAnimationTime = 1200,
secrolLAnimation = 'easeInOutExpo';
$('a.scrollto').on('bind','click.smoothscroll',function(event){
    event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'secrollTop': $(target).offset().Top
        }, secrollAnimationTime, secrollAnimation, function(){
            window.location.hash = target;
          });
        });
        /*
        Back Top Link
        ============================================================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function(){
            if ($(this).scrollTop()> offset){ 
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
        });
        $('.back-to-top').on('click',function(event){
            event.preventDefault();
            $('html, body').animate({
                scroll: 0
            }, 600);
            return false;
            })
            /* Nivo Lightbox
            =======================================================*/
            $('.lightbox').nivoLightbox({
                effect: 'fadeScale',
                keyboardNav: true,
            });
            /* stellar js
            =======================================================*/
            $.stellar({
                horizontalScrolling: true,
                verticalOffset: 40,
                responsive: true
            });
            /*
            page Loader
            ===========================================================================================*/
            $('#loder').fadeOut();
        }(jQuery));