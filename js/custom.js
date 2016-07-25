$(document).ready(function () {
    $('body').removeClass('fade-out');
    $('.slider').slider({full_width: true});

    /*Steve*/
    $(".steve_makes").click(function() {
        $(this).attr('class', 'steve_makes_selected');
    });

    $(".steve_models").click(function() {
        $(this).attr('class', 'steve_models_selected');
    });

    $(".research-categories").click( function() {
        $(this).toggleClass("clicked");
    });
});
