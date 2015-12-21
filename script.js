/**
 * Created by raamz_000 on 8/21/2015.
 */

/**
function changeImage() {
    var image = document.getElementById('changeArrow');
    if (image.src.match("arrowOff")) {
        image.src = "img/download.png";
    } else {
        image.src = "img/lion.png";
    }
} */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
            $('.fadein :first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo('.fadein');},
        3000);
});

$("p").click(function(){
    $("p").hide();
});