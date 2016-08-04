$(document).ready(function () {
    var sedan_car_list =  [
        ["chrysler-200.png", "Chrysler 200", "$28,450", 9, "B-", "B", "B-", "C", "C", "C", 50, 28],
        ["buick-lacrosse.png", "Buick Lacrosse", "$28,999", 5, "B", "B-", "B", "A-", "B", "A", 50, 35],
        ["bmw-3.png", "BMW 328i", "$52,450", 1, "A", "A", "A-", "A-", "B", "A", 50, 42],
        ["bmw-5.png", "BMW 528i", "$54,950", 2, "A", "A", "A-", "A", "A", "A", 50, 18],        
        ["dodge-charger.png", "Dodge Charger", "$22,450", 11, "C-", "B", "B-", "B-", "B", "B-", 50, 25],
        ["buick-regal.png", "Buick Regal", "$32,999", 6, "C-", "C", "A-", "C-", "C", "B", 50, 26],
        ["bmw-i3.png", "BMW i3", "$32,000", 4, "A-", "B", "A", "A-", "B", "A", 50, 27], 
        ["cadillac-ats.png", "Cadillac ATS", "$29,950", 7, "C", "A", "C", "A-", "C", "A", 50, 28],
        ["cadillac-ct6.png", "Cadillac CT6", "$32,499", 8, "B", "C", "B-", "B-", "", "B", 50, 29]
    ];

    var suv_car_list = [
        ["cadillac-srx.png", "Cadillac SRX", "$37,695", 6, "B", "B", "B+", "A-", "B+", "A-", 50, 18],
        ["bmw-x6.png", "BMW X6", "$60,600", 1, "A", "A", "A-", "A", "A", "A", 50, 22],
        ["cadillac-xt5.png", "Cadillac XT5", "$42,125", 7, "B-", "A-", "B+", "B+", "B+", "A-", 50, 23]
    ];
    
    //terrible coding practice, but this is for a deadline
    var car_extra_one = [
        "<div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Driving Experience:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Acceleration</li> <li>MPG</li> <li>Handle</li> <li>Turn Radius</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>A</li> <li>A</li> <li>B</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Safety:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Driver</li> <li>Passenger</li> <li>Side Pole Rating</li> <li>Risk of Rollover </li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>B</li> <li>A</li> <li>16%</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Leg Room</li> <li>Head Room</li> <li>Shoulder Room</li> <li>Seat comfort</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>B</li> <li>A</li> <li>B</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <ul class='car-details'> <li>22 combined MPG</li> <li>3.5L 6-cylinder</li> <li>9 Speed Automatic</li> <li>Front Wheel Drive</li> <li>Basic 4 year warranty</li> </ul> <a href='http://www.edmunds.com/bmw/i3/2016/' class='waves-effect waves-light btn read-more-button'>Read More</a> </div>",
        "<div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Driving Experience:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Acceleration</li> <li>MPG</li> <li>Handle</li> <li>Turn Radius</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>B</li> <li>C</li> <li>B</li> <li>B</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Safety:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Driver</li> <li>Passenger</li> <li>Side Pole Rating</li> <li>Risk of Rollover </li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>B</li> <li>C</li> <li>19%</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Leg Room</li> <li>Head Room</li> <li>Shoulder Room</li> <li>Seat comfort</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>B</li> <li>B</li> <li>A</li> <li>B</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <ul class='car-details'> <li>26 combined MPG</li> <li>2.0L 4-cylinder</li> <li>6 Speed Automatic</li> <li>Front Wheel Drive</li> <li>2 year warranty</li> </ul> <a href='http://www.edmunds.com/bmw/i3/2016/' class='waves-effect waves-light btn read-more-button'>Read More</a> </div>",
        "<div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Driving Experience:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Acceleration</li> <li>MPG</li> <li>Handle</li> <li>Turn Radius</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>D</li> <li>A</li> <li>C</li> <li>B</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Safety:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Driver</li> <li>Passenger</li> <li>Side Pole Rating</li> <li>Risk of Rollover </li> </ul> </div> <div class='expanded-table-data'> <ul> <li>B</li> <li>B</li> <li>B</li> <li>17%</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Leg Room</li> <li>Head Room</li> <li>Shoulder Room</li> <li>Seat comfort</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>C</li> <li>B</li> <li>B</li> <li>C</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <ul class='car-details'> <li>26 combined MPG</li> <li>1.8L 4-cylinder Hybrid</li> <li>2 Speed Automatic</li> <li>Front Wheel Drive</li> <li>2 year limited warranty</li> </ul> <a href='http://www.edmunds.com/bmw/i3/2016/' class='waves-effect waves-light btn read-more-button'>Read More</a> </div>",
        "<div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Driving Experience:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Acceleration</li> <li>MPG</li> <li>Handle</li> <li>Turn Radius</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>D</li> <li>B</li> <li>B</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Safety:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Driver</li> <li>Passenger</li> <li>Side Pole Rating</li> <li>Risk of Rollover </li> </ul> </div> <div class='expanded-table-data'> <ul> <li>B</li> <li>C</li> <li>A</li> <li>11%</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Leg Room</li> <li>Head Room</li> <li>Shoulder Room</li> <li>Seat comfort</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>B</li> <li>B</li> <li>A</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <ul class='car-details'> <li>18 combined MPG</li> <li>4.8L 8-cylinder</li> <li>6 Speed Manual</li> <li>Rear Wheel Drive</li> <li>no warranty</li> </ul> <a href='http://www.edmunds.com/bmw/i3/2016/'class='waves-effect waves-light btn read-more-button'>Read More</a> </div>",
        "<div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Driving Experience:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Acceleration</li> <li>MPG</li> <li>Handle</li> <li>Turn Radius</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>C</li> <li>B</li> <li>C</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Safety:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Driver</li> <li>Passenger</li> <li>Side Pole Rating</li> <li>Risk of Rollover </li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>A</li> <li>B</li> <li>20%</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <div class='expanded-table'> <div class='expanded-table-text'> <ul> <li>Leg Room</li> <li>Head Room</li> <li>Shoulder Room</li> <li>Seat comfort</li> </ul> </div> <div class='expanded-table-data'> <ul> <li>A</li> <li>A</li> <li>A</li> <li>A</li> </ul> </div> </div> </div> <div class='car-panel-extra'> <p class='edmunds-rating-suffix-expanded'>Comfort:</p> <ul class='car-details'> <li>22 combined MPG</li> <li>4.8L 8-cylinder supercharged</li> <li>6 Speed Automatic</li> <li>All Wheel Drive</li> <li>4 year warranty</li> </ul> <a href='http://www.edmunds.com/bmw/i3/2016/' class='waves-effect waves-light btn read-more-button'>Read More</a> </div>"
    ];

    var car_extra_index = 0;

    $("#sedan-button").click(function () {
        $("#car-panel-info-text").remove();
        $("#car-panel-topbar").remove();
        add_info_panel();
        for (var i = 0; i < sedan_car_list.length; i += 1) {
            add_car_to_panel(sedan_car_list[i]);
        }
    });

    $("#suv-button").click(function() {
        $("#car-panel-info-text").remove();
        $("#car-panel-topbar").remove();
        add_info_panel();
        for(var i = 0; i < suv_car_list.length; i += 1) {
            add_car_to_panel(suv_car_list[i]);
        }
    });

    $("#car-panel").on("mouseenter", ".car-panel-card", function (event) {
        $(this).addClass('z-depth-1');
    }).on("mouseleave", ".car-panel-card", function (event) {
        $(this).removeClass('z-depth-1');
    });

    var add_info_panel = function (flags) {
        var row_to_add = "<div id='car-panel-topbar'>" + "Your Top Matches" + 
            "<img id='expand-button' src='../img/car-panel/expand-button.png'/>" + "</div>";

        $(row_to_add).hide().prependTo("#car-panel").fadeIn(1000);
    };

    var fade_delay = 0
    // add individual car, with optional flags to display
    var add_car_to_panel = function (car_array) {
        var card_panel = "";

        card_panel = "";
        card_panel += "<div class='car-panel-card'>";
        
        card_panel += "<div class='car-panel-left'>";
        card_panel += "<img class='car-thumbnail' src='../img/car-panel/" + car_array[0] + "'/>";
        card_panel += "<div class='match-suffix'>match</div>";
        card_panel += "<div class='match-percent'>" + car_array[10] + "%</div></div>";
        
        card_panel += "<div class='car-panel-middle'>" + "<div class='car-make'>" + car_array[1] + "</div>";
        card_panel += "<div class='car-price'>" + car_array[2] + "</div>";
        card_panel += "<div class='car-info'>";

        card_panel += "<div class='panel-selection mpg-panel'>" + "Mileage: " + "<span";
        if (car_array[11] >= 28) {
            card_panel += " class='green-review'";
        } else if (car_array[11] > 22 && car_array[11] < 28) {
            card_panel += " class='orange-review'";
        } else if (car_array[11] < 22) {
            card_panel += " class='red-review'";
        }
        card_panel += ">" + car_array[11] + " MPG</span> </div>";
        
        card_panel += "<div class='panel-selection safety-panel'> Safety: <span";
        if (car_array[5] === "A" || car_array[5] === "A-") {
            card_panel += " class='green-review'";
        } else if (car_array[5] === "B" || car_array[5] === "B-") {
            card_panel += " class='orange-review'";
        } else if (car_array[5] === "C" || car_array[5] === "C-") {
            card_panel += " class='red-review'";
        }
        card_panel += ">" + car_array[5] + "</span> </div>";

        card_panel += "<div class='panel-selection comfort-panel'> Comfort: <span";
        if (car_array[6] === "A" || car_array[6] === "A-") {
            card_panel += " class='green-review'";
        } else if (car_array[6] === "B" || car_array[6] === "B-") {
            card_panel += " class='orange-review'";
        } else if (car_array[6] === "C" || car_array[6] === "C-") {
            card_panel += " class='red-review'";
        }
        card_panel += ">" + car_array[6] + "</span> </div>";

        card_panel += "</div></div>";

        card_panel += "<div class='car-panel-right'>";
        card_panel += "<p class='edmunds-rating-suffix'>Edmund's Rating:</p>";
        card_panel += "<p class='edmunds-rating'>" +  car_array[4] + "</p>";
        card_panel += "<div class='blurb-suffix'> Our take:" + "<div class='blurb'> " + 
            "This car drives like it looks, Amazing. The interior has a brand new (...)";
        card_panel += "</div></div></div>"

        //extra panels
        car_extra_index = car_extra_index === 5 ? 0 : car_extra_index;
        card_panel += car_extra_one[car_extra_index];
        car_extra_index += 1;

        card_panel += "</div>"

        fade_delay += 100;
        $(card_panel).hide().delay(fade_delay).appendTo("#car-panel-list").fadeIn(3000);
    }

    //Call this function every time the array 'ranking' is changed. This will paint
    //the ranking side panel.
    var print_ranking = function (ranking) {
        $("#car-panel-info-text").remove();
        add_info_panel();
        for (var i = 0; i < ranking.length; i += 1) {
            add_car_to_panel(ranking[i]);
        }
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

    var slider_panel_expanded = false;
    $("#shell").on('click', '#expand-button', function () {
        slider_panel_expanded = !slider_panel_expanded;
        $(this).toggleClass("rotate-180");
        if (slider_panel_expanded) {
            $("#gallery").animate({
                width: "1%"
            }, 350)
            $("#car-panel").animate({
                width: "98%"
            }, 350);
            $(".car-panel-card").animate({
                width: "100%"
            }, 150);             
            $(".car-panel-extra").css("display", "block");
        } else {
            $("#gallery").animate({
                width: "67%"
            }, 350)
            $("#car-panel").animate({
                width: "32%"
            }, 350);
            $(".car-panel-card").animate({
                width: "100%"
            }, 350);     
            $(".car-panel-extra").css("display", "none");
        }
    });    




});
