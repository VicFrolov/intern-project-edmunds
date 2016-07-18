$(document).ready(function(){    
    $('body').removeClass('fade-out');
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

    $('#prev, #next, #personalized-button').click(function() {
        if (this.id === 'personalized-button' || this.id === 'next') {
            horizontalCounter += 1;
        } else {
            horizontalCounter -= 1;
        }

        if (horizontalCounter >= horizontalSections) {
            horizontalCounter = 0;
        }

        $sli.stop().animate({left: - (horizontalCounter * WIDTH) }, 400);
    });  

    $('#up, #down, #mmy-button').click(function() {
        if (this.id === 'mmy-button' || this.id === "down") {
            verticalCounter += 1;
        } else {
            verticalCounter -= 1;
        }

        if (verticalCounter >= verticalSections) {
            verticalCounter = 0;
        }

        $sli.stop().animate({top: - (verticalCounter * HEIGHT) }, 400);
    });
    

});