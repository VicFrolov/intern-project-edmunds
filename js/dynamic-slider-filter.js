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

    $("#car-panel").on("mouseenter", ".car-panel-card", function (event) {
        $(this).addClass('z-depth-1');
    }).on("mouseleave", ".car-panel-card", function (event) {
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
        var card_panel = "";

        card_panel = "";
        card_panel += "<div class='car-panel-card'>";
        
        card_panel += "<div class='car-panel-left'>";
        card_panel += "<img class='car-thumbnail' src='../img/car-panel/" + car_array[0] + "'/>";
        card_panel += "<div class='match-suffix'>match</div>";
        card_panel += "<div class='match-percent'>" + car_array[10] + "%</div></div>";
        
        card_panel += "<div class='car-panel-middle'>" + "<div class='car-make'>" + car_array[1] + "</div>";
        card_panel += "<div class='car-price'>" + car_array[2] + "</div>";
        card_panel += "<div class='car-info'>" + "<div class='panel-selection'>" + "mileage: " + 
            "<span class='panel-inject-1'>45</span>" + "</div>";
        card_panel += "<div class='panel-selection'> safety: <span class='panel-inject-2'>A</span> + </div>";
        card_panel += "<div class='panel-selection'> comfort: <span class='panel-inject-3'>A-</span> </div>";
        card_panel += "</div></div>";

        card_panel += "<div class='car-panel-right'>";
        card_panel += "<p class='edmunds-rating-suffix'>Edmund's Rating:</p>";
        card_panel += "<p class='edmunds-rating'>" +  car_array[4] + "</p>";
        card_panel += "<div class='blurb-suffix'> Our take:" + "<div class='blurb'> " + 
            "This car drives like it looks, Amazing. The interior has a brand new (...)";
        card_panel += "</div></div></div></div>"



        fade_delay += 100;
        $(card_panel).hide().delay(fade_delay).appendTo("#car-panel").fadeIn(3000);
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
        ["bmw-3.png", "BMW 328i", "$52,450", 1, "A", "A", "A-", "A-", "B", "A", 50],
        ["bmw-5.png", "BMW 528i", "$54,950", 2, "A", "A", "A-", "A", "A", "A", 50],
        ["bmw-7.png", "BMW 728i", "$57,350", 3, "A", "A", "B", "B-", "A", "B", 50],
        ["bmw-i3.png", "BMW i3", "$32,000", 4, "A-", "C", "A", "A-", "B", "A", 50], 
        ["buick-lacrosse.png", "Buick Lacrosse", "$28,999", 5, "B", "B-", "B", "A-", "B", "A", 50],
        ["buick-regal.png", "Buick Regal", "$32,999", 6, "B", "C", "A-", "C-", "C", "B", 50],
        ["cadillac-ats.png", "Cadillac ATS", "$29,950", 7, "A", "A", "C", "A-", "C", "A", 50],
        ["cadillac-ct6.png", "Cadillac CT6", "$32,499", 8, "B", "C", "A-", "B-", "B", "B", 50],
        ["chrysler-200.png", "Chrysler 200", "$28,450", 9, "A-", "B", "B-", "C", "C", "C", 50],
        ["chrysler-300.png", "Chrysler 300", "$38,999", 10, "A-", "B", "B-" , "C-", "C", "B", 50],
        ["dodge-charger.png", "Dodge Charger", "$22,450", 11, "A-", "B", "B-", "B-", "B", "B-", 50]
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
            $(".car-panel-card").animate({
                width: "35%"
            }, 350);            
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
        }
    });

    // add_car_to_panel("bmw328i", sedan_car_list, ["mpg", "comfort"]);
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety"]);
    // add_car_to_panel("bmw328i", sedan_car_list, ["safety", "comfort", "mpg"]);
});
