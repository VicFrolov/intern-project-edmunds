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

    // button hovers change background


    // display or hide important topics

    $("#gas-mileage-button").click(function () {
        console.log("test")
        $(".mpg-panel").css("visibility", "visible").hide().fadeIn(1000);
    });

    $("#comfort-button").click(function () {
        console.log("test")
        $(".comfort-panel").css("visibility", "visible").hide().fadeIn(1000);
    });

    $("#safety-button").click(function () {
        console.log("test")
        $(".safety-panel").css("visibility", "visible").hide().fadeIn(1000);
    });       

    //round slider
    $("#slider").roundSlider({
        sliderType: "range",
        min: 0,
        max: 50000,
        value: "15000,32000"
    });

    $("#slider2").roundSlider({
        sliderType: "range",
        value: "30,60",
        min: 0,
        max: 2000,
        value: "150, 700"
    });
    
   
});
