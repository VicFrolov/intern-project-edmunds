$(document).ready(function () {
    var filter_count = 0;

    $("#sedan-button").click(function () {
        $("#car-panel-info-text").remove();
        add_info_panel();
        for (car in sedan_car_list) {
            add_car_to_panel(car, sedan_car_list);
        }
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

    //add individual car, with optional flags to display

    var add_info_panel = function (flags) {
        var column_width = 0;
        var flag_count = 0;
        
        if (flags !== undefined) {
            filter_count = flags.length;
        }
        
        var row_to_add = '<div class="row valign-wrapper" id="car-panel-info" style="display:none;">' + 
            '<div class="col s3">&nbsp;</div>' + 
            '<div class="col s3 left-align">Make</div>';

        //general panel, with overall rating, and most searched
        if (flags === undefined) {
            row_to_add += '<div class="col s6 left-align">Overall Rank</div>';
            flag_count = 4;
        } else {
            $(flags).each(function (index, value) {
                row_to_add += '<div class="col s2">' + value + '</div>';
                flag_count += 1;
            })
        }

        //adding whitespace in columns for proper alignment
        for (var i = flag_count; i < 3; i += 1) {
            row_to_add += '<div class="col s2">&nbsp;</div>';
        }

        row_to_add += '</div>';
        $(row_to_add).appendTo("#car-panel").fadeIn(1500);
    };

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
            '</div>'
        );
    }

    // testing its use
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety", "comfort"]);
    // add_car_to_panel("bmw528i", sedan_car_list, ["mpg", "comfort"]);


    //removes cars that do not have the following filter flag
    var remove_cars_from_panel = function (filter) {

    }

});
