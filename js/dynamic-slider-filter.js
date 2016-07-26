$(document).ready(function () {
    var filter_count = 0;
    var ranking = [];       //This is the order the ranking is displayed in the side panel.
                            //Changing this should change the ranking on refresh.

    $("#sedan-button").click(function () {
        $("#car-panel-info-text").remove();
        $("#car-panel-info").remove();
        add_info_panel();
        for (car in sedan_car_list) {
            add_car_to_panel(car, sedan_car_list, ["rank"]);
        }
    });

    $("#suv-button").click(function() {
        $("#car-panel-info-text").remove();
        $("#car-panel-info").remove();
        add_info_panel();
        for(car in suv_car_list) {
            add_car_to_panel(car, suv_car_list, ["rank"])
        }
    })

    $("#car-panel").on("mouseenter", ".car-row", function (event) {
        $(this).addClass('z-depth-1');
    }).on("mouseleave", ".car-row", function (event) {
        $(this).removeClass('z-depth-1');
    })


    $("")

    var add_info_panel = function (flags) {
        var flag_count = 0;
        var row_to_add = "";
        
        if (flags !== undefined) {
            filter_count = flags.length;
        }
        
        row_to_add = '<div class="row valign-wrapper" id="car-panel-info" style="display:none;">' + 
            '<div class="col s3">&nbsp;</div>' + 
            '<div class="col s3 left-align">Make</div>';

        //general panel, with overall rating, and most searched
        if (flags === undefined) {
            row_to_add += '<div class="col s6 left-align">Overall Rank</div>';
            flag_count += 3;
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
        $(row_to_add).prependTo("#car-panel").fadeIn(1500);
    };

    //add individual car, with optional flags to display
    var add_car_to_panel = function (car_model, car_type, flags) {
        var car_to_add = car_type[car_model];
        var car_safety = "&nbsp;";
        var car_comfort = "&nbsp;";
        var car_mpg = "&nbsp;";
        var car_rank = "&nbsp;";
        var total_flags = 0;
        var row_to_add = "";

        if ($.inArray("safety", flags) > -1) {
            car_safety = car_to_add["safety"];
        }

        if ($.inArray("comfort", flags) > -1) {
            car_comfort = car_to_add["comfort"];
        }

        if ($.inArray("mpg", flags) > -1) {
            car_mpg = car_to_add["mpg"];
        }

        if ($.inArray("rank", flags) > -1) {
            car_rank = car_to_add["rank"];
        }

        row_to_add = '<div class="row car-row valign-wrapper">' + 
            '<div class="col s3"><img class="responsive-img" src="../img/car-panel/' + car_to_add["image"] + 
            '"/></div>' +
            '<div class="col s3" style="font-weight: bold">' + car_to_add["car_name"] + '</div>';

        ranking.push(car_type[car_model]);  //add to the sorted array for later processing.

        if ($.inArray("rank", flags) > -1) {
            row_to_add += '<div class="col s6 left-align">#' + car_rank + '</div>';
            total_flags += 3
        } else {
            for (var i = 0; i < flags.length; i += 1) {
                console.log(flags[i])
                if (flags[i] === "mpg") {
                    row_to_add += '<div class="col s2 left-align">' + car_mpg + '</div>';
                    total_flags += 1;
                } else if (flags[i] === "comfort") {
                    row_to_add += '<div class="col s2 left-align">' + car_comfort + '</div>'
                    total_flags += 1;
                } else if (flags[i] === "safety") {
                    row_to_add += '<div class="col s2 left-align">' + car_safety + '</div>'
                    total_flags += 1;
                }
            }
        }
        
        for (var i = total_flags; i < 3; i++) {
            row_to_add += '<div class="col s2">&nbsp;</div>';
        }

        row_to_add += '</div>'
        $(row_to_add).appendTo("#car-panel").fadeIn(1500);
    }

    //Call this function every time the array 'ranking' is changed. This will paint
    //the ranking side panel.
    var print_ranking = function (ranking) {

    }

    //removes cars that do not have the following filter flag
    var remove_cars_from_panel = function (filter) {
        $("#car-row").each(function (event) {
            if ("#safety" === "C") {
                jqueryCommand.remove()
            }
        });
    }

    $('#car-panel').on('click', '.car-row', function() {
        $(this).fadeOut('slow', function(){ this.remove(); });
    });

    var sedan_car_list =  {
        bmw328i: {
            car_name: "BMW 328i",
            image: "bmw-3.png",
            safety: "A",
            comfort: "A",
            mpg: "A-",
            rank: 1
        },
        bmw528i: {
            car_name: "BMW 528i",
            image: "bmw-5.png",
            safety: "A",
            comfort: "A",
            mpg: "A-",
            rank: 2
        },
        bmw728i: {
            car_name: "BMW 728i",
            image: "bmw-7.png",
            safety: "A",
            comfort: "A",
            mpg: "B",
            rank: 3
        },
        bmwi3: {
            car_name: "BMW i3",
            image: "bmw-i3.png",
            safety: "A-",
            comfort: "C",
            mpg: "A",
            rank: 4
        },
        buickLacrosse: {
            car_name: "Buick Lacrosse",
            image: "buick-lacrosse.png",
            safety: "B",
            comfort: "B-",
            mpg: "B",
            rank: 5
        },
        buickRegal: {
            car_name: "Buick Regal",
            image: "buick-regal.png",
            safety: "B",
            comfort: "C",
            mpg: "A-",
            rank: 6
        },
        cadillacAts: {
            car_name: "Cadillac ATS",
            image: "cadillac-ats.png",
            safety: "A",
            comfort: "A",
            mpg: "C",
            rank: 7
        },
        cadillacCt6: {
            car_name: "Cadillac CT6",
            image: "cadillac-ct6.png",
            safety: "B",
            comfort: "C",
            mpg: "A-",
            rank: 8
        },
        chyrsler200: {
            car_name: "Chrysler 200",
            image: "chrysler-200.png",
            safety: "A-",
            comfort: "B",
            mpg: "B-",
            rank: 9
        },
        chyrsler200: {
            car_name: "Chrysler 300",
            image: "chrysler-300.png",
            safety: "A-",
            comfort: "B",
            mpg: "B-",
            rank: 10
        },
        dodgecharger: {
            car_name: "Dodge Charger",
            image: "dodge-charger.png",
            safety: "A-",
            comfort: "B",
            mpg: "B-",
            rank: 11
        }                                           
    };   

    var suv_car_list =  {
        bmwx6: {
            car_name: "BMW X6",
            image: "bmw-x6.png",
            safety: "A",
            comfort: "A",
            mpg: "A-",
            rank: 1
        },
        bmwx5: {
            car_name: "BMW X5",
            image: "bmw-x5.png",
            safety: "A-",
            comfort: "A-",
            mpg: "A-",
            rank: 2
        },
        bmwx4: {
            car_name: "BMW X4",
            image: "bmw-x4.png",
            safety: "A-",
            comfort: "B+",
            mpg: "A-",
            rank: 3
        },
        bmwx3: {
            car_name: "BMW X3",
            image: "bmw-x3.png",
            safety: "B",
            comfort: "A",
            mpg: "A-",
            rank: 4
        },
        cadillacescaladeesc: {
            car_name: "Cadillac Escalade ESC",
            image: "cadillac-escalade-esv.png",
            safety: "B",
            comfort: "A",
            mpg: "B-",
            rank: 5
        },
        cadillacsrx: {
            car_name: "Cadillac SRX",
            image: "cadillac-srx.png",
            safety: "B",
            comfort: "A-",
            mpg: "C+",
            rank: 6
        },
        cadillacxt5: {
            car_name: "Cadillac XT5",
            image: "cadillac-xt5.png",
            safety: "C+",
            comfort: "A-",
            mpg: "A-",
            rank: 7
        }
    };

    var slider_panel_expanded = false;
    $("#shell").on('click', '#car-panel-info', function () {
        slider_panel_expanded = !slider_panel_expanded;

        if (slider_panel_expanded) {
            $("#gallery").animate({
                width: "1%"
            }, 300)
            $("#car-panel").animate({
                width: "97%"
            }, 300);
        } else {
            $("#gallery").animate({
                width: "70%"
            }, 300)
            $("#car-panel").animate({
                width: "29%"
            }, 300);
        }
    });

    $("#expand-button").on("click", function() {
        $(this).toggleClass("rotate-180");
    });
    // add_car_to_panel("bmw328i", sedan_car_list, ["mpg", "comfort"]);
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety"]);
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety", "comfort", "mpg"]);
});
