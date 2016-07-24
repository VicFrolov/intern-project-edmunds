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

    $('.car-row').hover(
       function(){ $(this).addClass('z-depth-1') },
       function(){ $(this).removeClass('z-depth-1') }
    );    

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


    var sedan_car_list =  {
        bmw328i: {
            car_name: "BMW 328i",
            image: "bmw-3.png",
            safety: "A",
            comfort: "A",
            mpg: "A"
        },

        bmw528i: {
            car_name: "BMW 528i",
            image: "bmw-5.png",
            safety: "A",
            comfort: "A",
            mpg: "B"
        },

        bmw528i: {
            car_name: "BMW 528i",
            image: "bmw-5.png",
            safety: "A",
            comfort: "A",
            mpg: "B"
        }        
    };

    $("#sedan-button").click(function () {
        for (car in sedan_car_list) {
            add_car_to_panel(car, sedan_car_list);
        }
    });

    //add individual car, with optional flags to display
    var add_car_to_panel = function (car_model, car_type, flags) {
        var car_to_add = car_type[car_model];
        var car_safety = "&nbsp;";
        var car_comfort = "&nbsp;";
        var car_mpg = "&nbsp;";

        if ($.inArray("safety", flags) > -1) {
            car_safety = car_to_add["safety"];
        }

        if ($.inArray("comfort", flags) > -1) {
            car_comfort = car_to_add["comfort"];
        }

        if ($.inArray("mpg", flags) > -1) {
            car_mpg = car_to_add["mpg"];
        }

        $('#car-panel').append('<div class="row car-row valign-wrapper">' + 
            '<div class="col s3"><img class="responsive-img" src="../img/car-panel/' + car_to_add["image"] + 
            '"/></div>' +
            '<div class="col s3">' + car_to_add["car_name"] + 
            '</div>' + 
            '<div class="col s2 center-align">' + car_safety + 
            '</div>' + 
            '<div class="col s2 center align">' + car_comfort + 
            '</div>' + 
            '<div class="col s2 center align">' + car_mpg + 
            '</div>' + 
            '</div>');
    }

    // testing its use
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety", "comfort"]);
    // add_car_to_panel("bmw528i", sedan_car_list, ["mpg", "comfort"]);


    //removes cars that do not have the following filter flag
    var remove_cars_from_panel = function (filter) {

    }

});
