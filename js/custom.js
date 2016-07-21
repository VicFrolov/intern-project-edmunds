$(document).ready(function(){
    $('body').removeClass('fade-out');
    $('.slider').slider({full_width: true});

    var $gal = $('#gallery'),
        $sli = $('#slider'),
        $box = $('div',$sli),
        W    = $gal.width(), // 500
        N    = 3,//$box.length,  // 3
        C    = 0;            // a counter

    $sli.width(W*N);

    $('#prev, #next').click(function(){
      C = (this.id=='next' ? ++C : --C) <0 ? N-1 : C%N;
      $sli.stop().animate({left: -C*W },900);
    }); 

    var H = $('#gallery').height(),
        N2 = 3, //how many vertical cards are there
        C2 = 0; //which card is currently selected


    $sli.height(H*N2)

    $('#up, #down').click(function(){
      // C2 = (this.id='down' ? ++C2 : --C2) <0 ? N2-1 : C2%N2;
      if(this.id=='down') {
        ++C2;
        if (C2 >= N2) {C2 = 0; $sli.stop().animate({top: 0}, 500);}
        else {$sli.stop().animate({top: -C2*H}, 500);}
        //alert('moving downwards');
      } else {
        --C2;
        if (C2 < 0) {C2 = 0; $sli.stop().animate({top: 0}, 500);}
        else {$sli.stop().animate({top: C2*H}, 500);}
      }
    });


    $(".research-categories").click( function() {
        $(this).toggleClass("clicked");
    })
});