$(document).ready(function(){
    $('.banner').slick({
        accessibility: true,
        adaptiveHeight: true,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        asNavFor: '.banner__text'
    });
    $('.banner__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner',
        dots: false,
        focusOnSelect: true
    })
});