$(document).ready(function(){
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.prev'), 
        nextArrow: $('.next'),
    });
})