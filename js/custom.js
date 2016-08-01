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

    var rangeSlider = document.getElementById('test5');
    noUiSlider.create(rangeSlider, {
        start: [20, 80],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 100
        },
            format: wNumb({
            decimals: 0
        })
    });

    $(".research-categories").click(function() {
        $(this).toggleClass("clicked");
    });

    $("#sedan-button").click(function() {
        $(this).toggleClass("clicked");
    });
    
    $("#suv-button").click(function() {
        $(this).toggleClass("clicked");
    });

    //round slider
    $("#slider").roundSlider({
        sliderType: "range",
        value: "20,40"
    });

    $("#slider2").roundSlider({
        sliderType: "range",
        value: "30,60"
    });

    $("#slider3").roundSlider({
        sliderType: "range",
        value: "40,80"
    });
    
   
});
