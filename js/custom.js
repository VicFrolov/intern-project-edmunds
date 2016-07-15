$(document).ready(function(){
    
    $('.slider').slider({full_width: true});
    
    $("#trigger").click(function(){
        console.log('trigger works')

        //$(".content:first").animate({width: '0px'}, 1000, function() {
        $(".content:first").animate({"margin-left": "-5000px"}, function() {
            $(this).remove();
            // $('#content1, #content2').animate({width: '573px'}, 1000, function() {
            //         $(this).remove();
            //     }
            // );
        });
    });

});