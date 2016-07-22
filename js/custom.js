$(document).ready(function(){
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

    var slider = document.getElementById('test5');
    noUiSlider.create(slider, {
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

    var sedan_car_list =  {
        bmw328i : {
            image: "../328i.jpg",
            safety: "A",
            comfort: "A"
        },

        bmw528i : {
            image: "../528i.jpg",
            safety: "A",
            comfort: "A"
        }
    };
});
