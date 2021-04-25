$(document).ready(function () {
    $('.work .work__slider').slick({
        prevArrow: $('.work .wrap-slider__arrows .arrow__btn--left'),
        nextArrow: $('.work .wrap-slider__arrows .arrow__btn--right')
    });
      
    $('.gallery .gallery__slider').slick({
        prevArrow: $('.gallery .gallery__top .gallery__arrows .arrow__btn--left'),
        nextArrow: $('.gallery .gallery__top .gallery__arrows .arrow__btn--right')
    });

    $('.reviews .reviews__slider').slick({
        prevArrow: $('.reviews .reviews__arrows .arrow__btn--left'),
        nextArrow: $('.reviews .reviews__arrows .arrow__btn--right')
    });

    $('.new .new__slider').slick({
        prevArrow: $('.new .new__arrows .arrow__btn--left'),
        nextArrow: $('.new .new__arrows .arrow__btn--right')
    });

    //Scroll up
    (function($) {
        $(function() {
        
            $('.footer .out__link').click(function() {
                $('html, body').animate({scrollTop: 0},500);
                return false;
            })
        
        })
    })(jQuery)

    $('.header__burger').on('click', function () {
        $('.menu').addClass('menu--active');
    });

    $('.menu .menu__btn').on('click', function () {
        $('.menu').removeClass('menu--active');
    });
});