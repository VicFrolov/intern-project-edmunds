(function() {

    var animation_speed = 800;
    var number_of_horizontal_slides = $("span.horizontal-section").length;
    var number_of_vertical_slides = $("span.vertical-section").length;

    var horizontal_shifts = 0;
    var vertical_shifts = -1;
    var total_horizontal_movement = 0;
    var total_vertical_movement = 0;


    $("#right").click(function() {
        var gallery_width = $("#gallery").width();
        horizontal_shifts += 1;
        
        if (horizontal_shifts === number_of_horizontal_slides) {
            $("span.horizontal-section").animate({ 
                "left": "+=" + (total_horizontal_movement) + "px"
            }, animation_speed);
            horizontal_shifts = 0;
            total_horizontal_movement = 0;
        } else {
            total_horizontal_movement += gallery_width;
            $("span.horizontal-section").animate({ "left": "-=" + gallery_width + "px"}, animation_speed);
        }
    });
   
 
    $("#left").click(function() {
        var gallery_width = $("#gallery").width();
        horizontal_shifts -= 1;

        if (horizontal_shifts < 0) {
            $("span.horizontal-section").animate({ 
                "left": "-=" + (gallery_width * number_of_horizontal_slides - gallery_width) + "px"
            }, animation_speed);
            horizontal_shifts = number_of_horizontal_slides - 1;
            total_horizontal_movement = gallery_width * number_of_horizontal_slides - gallery_width;
        } else {
            total_horizontal_movement -= gallery_width;
            $("span.horizontal-section").animate({ "left": "+=" + gallery_width + "px" }, animation_speed);
        }
    });


    $("#up").click(function() {
        var gallery_height = $("#gallery").height();
        vertical_shifts -= 1;
        if (vertical_shifts < -1) {
            $("span.vertical-section").animate({ 
                "top": "-=" + (gallery_height * number_of_vertical_slides) + "px"
            }, animation_speed);
            vertical_shifts = number_of_vertical_slides - 1;
            total_vertical_movement = gallery_height * number_of_vertical_slides;
        } else {
            total_vertical_movement -= gallery_height;
            $("span.vertical-section").animate({"top": "+=" + gallery_height + "px"}, animation_speed);
            $("span.horizontal-section").animate({"top": "+=" + gallery_height + "px"}, animation_speed);

        }        

    });    

    $("#down, .steve_makes, .steve_models").click(function() {
        var gallery_height = $("#gallery").height();
        vertical_shifts += 1;
        if (vertical_shifts === number_of_vertical_slides) {
            $("span.vertical-section").animate({ 
                "top": "-=" + (- total_vertical_movement) + "px"
            }, animation_speed);
            vertical_shifts = -1;
            total_vertical_movement = 0;
        } else {
            total_vertical_movement += gallery_height;
            $("span.vertical-section").animate({"top": "-=" + gallery_height + "px"}, animation_speed);
            $("span.horizontal-section").animate({"top": "-=" + gallery_height + "px"}, animation_speed);

        }
    });        

})();