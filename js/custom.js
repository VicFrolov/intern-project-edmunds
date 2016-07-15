$(document).ready(function(){    
    $('.slider').slider({full_width: true});

    var $gal = $('#gallery');
    var $sli = $('#slider');
    var horizontalSections = $('div.horizontal-section').length;
    var verticalSections = $('div.vertical-section').length;
    var WIDTH = $gal.width();
    var HEIGHT = $gal.height();
    var horizontalCounter = 0;
    var verticalCounter = 0;

    $sli.width(WIDTH * horizontalSections);
    $sli.height(HEIGHT * verticalSections);

    $('#prev, #next').click(function() {
        horizontalCounter = (this.id === 'next' ? ++horizontalCounter : --horizontalCounter) < 0 ? 
            horizontalSections - 1 : horizontalCounter%horizontalSections;
        $sli.stop().animate({left: - (horizontalCounter * WIDTH) }, 400);
    });  

    $('#up, #down').click(function() {
        verticalCounter = (this.id === 'down' ? ++verticalCounter : --verticalCounter) < 0 ? 
            verticalSections - 1 : verticalCounter % verticalSections;
        $sli.stop().animate({top: - (verticalCounter * HEIGHT) }, 400);
    });

});