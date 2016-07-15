$(document).ready(function(){    
    $('.slider').slider({full_width: true});

    var $gal = $('#gallery');
    var $sli = $('#slider');
    var horizontalSections = $('div.horizontal-section').length;
    var verticalSections = $('div.vertical-section').length;
    var WIDTH = $gal.width(); // 500
    var horizontalCounter = 0;            // a counter
    var verticalCounter = 0;

    $sli.width(WIDTH * horizontalSections);

    console.log(horizontalSections)


    $('#prev, #next').click(function() {
        console.log(horizontalCounter)
        horizontalCounter = (this.id === 'next' ? ++horizontalCounter : --horizontalCounter) < 0 ? 
            horizontalSections - 1 : horizontalCounter%horizontalSections;
        $sli.stop().animate({left: -horizontalCounter * WIDTH}, 400);
    });  

});