$(document).ready(function(){
    $('body').removeClass('fade-out');
    $('.slider').slider({full_width: true});


    $(".research-categories").click( function() {
        $(this).toggleClass("clicked");
    })
});