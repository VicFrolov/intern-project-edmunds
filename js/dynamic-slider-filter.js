$(document).ready(function () {
    var ranking = [];       //This is the order the ranking is displayed in the side panel.
                            //Changing this should change the ranking on refresh.

    $("#sedan-button").click(function () {
        $("#car-panel-info-text").remove();
        add_info_panel();
        for (var i = 0; i < sedan_car_list.length; i += 1) {
            add_car_to_panel(sedan_car_list[i]);
        }
    });

    $("#suv-button").click(function() {
        $("#car-panel-info-text").remove();
        $("#car-panel-info").remove();
        add_info_panel();
        for(car in suv_car_list) {
            add_car_to_panel(car, suv_car_list, ["rank"]);
        }
    });

    $("#car-panel").on("mouseenter", ".car-row", function (event) {
        $(this).addClass('z-depth-1');
    }).on("mouseleave", ".car-row", function (event) {
        $(this).removeClass('z-depth-1');
    });

    var info_panel_content = ["Make", "Price", "Most Popular", "Comfort", "MPG", "Safety", "High Tech", 
        "Sound System", "Acceleration"];

    var add_info_panel = function (flags) {
        var flag_count = 0;
        var row_to_add = "<tr>" + "<th data-field='id' id='fixed-panel-width'>" + 
            "<img id='expand-button' src='../img/car-panel/expand-button.png'/></th>";

        for (var i = 0; i < info_panel_content.length; i +=1) {
            row_to_add += "<th data-field='header' id='fixed-panel-width'>" + info_panel_content[i] + "</th>";
        }

        $(row_to_add).hide().prependTo("#car-panel-info").fadeIn(1000);
    };

    var fade_delay = 0
    // add individual car, with optional flags to display
    var add_car_to_panel = function (car_array) {
        var row_to_add = "<tr>"; 

        for (var i = 0; i < car_array.length; i += 1) {
            if (i === 0) {
                row_to_add += "<td><img class='responsive-img' src='../img/car-panel/" + car_array[0] + "'></td>";
            } else {
                row_to_add += "<td"
                if (car_array[i] === "A" || car_array[i] === "A-") {
                    row_to_add += " class='green-review'";
                } else if (car_array[i] === "B" || car_array[i] === "B-") {
                    row_to_add += " class='orange-review'";
                } else if (car_array[i] === "C" || car_array[i] === "C-") {
                    row_to_add += " class='red-review'";
                }

               row_to_add += ">" + car_array[i] + "</td>"
            }
        }

        row_to_add += '</tr>'

        fade_delay += 100;
        $(row_to_add).hide().delay(fade_delay).appendTo("#car-panel-list").fadeIn(3000);
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

    var sedan_car_list =  [
        ["bmw-3.png", "BMW 328i", "$52,450", 1, "A", "A", "A-", "A-", "B", "A"],
        ["bmw-5.png", "BMW 528i", "$54,950", 2, "A", "A", "A-", "A", "A", "A"],
        ["bmw-7.png", "BMW 728i", "$57,350", 3, "A", "A", "B", "B-", "A", "B"],
        ["bmw-i3.png", "BMW i3", "$32,000", 4, "A-", "C", "A", "A-", "B", "A"], 
        ["buick-lacrosse.png", "Buick Lacrosse", "$28,999", 5, "B", "B-", "B", "A-", "B", "A"],
        ["buick-regal.png", "Buick Regal", "$32,999", 6, "B", "C", "A-", "C-", "C", "B"],
        ["cadillac-ats.png", "Cadillac ATS", "$29,950", 7, "A", "A", "C", "A-", "C", "A"],
        ["cadillac-ct6.png", "Cadillac CT6", "$32,499", 8, "B", "C", "A-", "B-", "B", "B"],
        ["chrysler-200.png", "Chrysler 200", "$28,450", 9, "A-", "B", "B-", "C", "C", "C" ],
        ["chrysler-300.png", "Chrysler 300", "$38,999", 10, "A-", "B", "B-" , "C-", "C", "B"],
        ["dodge-charger.png", "Dodge Charger", "$22,450", 11, "A-", "B", "B-", "B-", "B", "B-"]
    ];

    var suv_car_list = [
        ["bmw-x6.png", "BMW X6", "$60,600", 1, "A", "A", "A-", "A", "A", "A"],
        ["bmw-x5.png", "BMW X5", "$54,700", 2, "A-", "A-", "A-", "A", "A", "A"],
        ["bmw-x4.png", "BMW X4", "$52,350", 3, "A-", "A-", "A-", "A-", "A-", "A-"],
        ["bmw-x3.png", "BMW X3", "$52,350", 4, "B+", "A-", "B+", "B+", "A", "A-"],
        ["cadillac-escalade-esv.png", "Cadillac Escalade ESC", "$72,970", 5, "B+", "B+", "B+", "B+", "A", "A-"],
        ["cadillac-srx.png", "Cadillac SRX", "$37,695", 6, "B", "B", "B+", "A-", "B+", "A-"],
        ["cadillac-xt5.png", "Cadillac XT5", "$42,125", 7, "B-", "A-", "B+", "B+", "B+", "A-"],
    ];

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
        } else {
            $("#gallery").animate({
                width: "70%"
            }, 350)
            $("#car-panel").animate({
                width: "29%"
            }, 350);
        }
    });

    // add_car_to_panel("bmw328i", sedan_car_list, ["mpg", "comfort"]);
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety"]);
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety", "comfort", "mpg"]);
});
