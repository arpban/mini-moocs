'use strict';

function openDrawer() {
    $('.drawer-handle').toggleClass('open');
    $('.dropdown-menu').toggleClass('open');
    $('header').toggleClass('open');
}

function scrollpage(str) {
    $('html,body').animate({
        scrollTop: $(str).offset().top
    }, 'slow');
}

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("active");
    }
});