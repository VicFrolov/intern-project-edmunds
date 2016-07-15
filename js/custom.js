$(document).ready(function(){
    
    $('.slider').slider({full_width: true});


    var $ct = $('#container-search');
    
    $("#trigger").click(function(){
        console.log('trigger works')

        $('#content1, #content2').animate({width: '0px'}, 1000, function() {
                    $(this).hide();
                    $('#content1, #content2').animate({width: '573px'}, 1000, function() {
                            $(this).show();
                        }
                    );
                }
            );
    });

});