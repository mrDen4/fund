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

    //Scroll up
    (function($) {
        $(function() {
        
            $('.footer .out__link').click(function() {
                $('html, body').animate({scrollTop: 0},500);
                return false;
            })
        
        })
        })(jQuery)
});