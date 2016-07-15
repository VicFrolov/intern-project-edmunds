$(document).ready(function(){
    
    $('.slider').slider({full_width: true});

    var $gal = $('#gallery'),
        $sli = $('#slider'),
        $box = $('div',$sli),
        W    = $gal.width(), // 500
        N    = $box.length,  // 3
        C    = 0;            // a counter

    $sli.width(W*N);


    $('#prev, #next').click(function(){
      C = (this.id=='next' ? ++C : --C) <0 ? N-1 : C%N;
      $sli.stop().animate({left: -C*W },900);
    }); 


});