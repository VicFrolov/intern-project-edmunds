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
            image: "../328i.jpg",
            safety: "A",
            comfort: "A",
            mpg: "A"
        },

        bmw528i: {
            image: "../528i.jpg",
            safety: "A",
            comfort: "A",
            mpg: "B"
        }
    };

    var add_car_to_panel = function (car_model, car_type) {
        var car_to_add = car_type[car_model];
        console.log(car_to_add);
    }

    // testing its use
    add_car_to_panel("bmw328i", sedan_car_list);


    //removes cars that do not have the following filter flag
    var remove_cars_from_panel = function (filter) {

    }

    $('.car-row').hover(
           function(){ $(this).addClass('z-depth-1') },
           function(){ $(this).removeClass('z-depth-1') }
    )    


    // for (car in sedan_car_list) {
    //     var current_car = sedan_car_list[car];
    //     for (description in current_car) {
    //         if (description === "mpg" && current_car[description] === "A") {
    //             console.log(current_car[description]);
    //         }
    //     }
    // }
});
