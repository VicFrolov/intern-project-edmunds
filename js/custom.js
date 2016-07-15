$(document).ready(function(){
    
    $('.slider').slider({full_width: true});


    var $ct = $('#container-search');
    
    $("#trigger").click(function(){
        console.log('trigger works')

        $ct.children(".content:first").animate({ "margin-left": "-800px" }, "slow", function(){
            console.log("lol")
            $(this).remove();
        });
    });

});