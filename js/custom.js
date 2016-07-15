$(document).ready(function(){
    
    $('.slider').slider({full_width: true});
<<<<<<< HEAD

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

=======
    
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
>>>>>>> 89f2e3a35583b720af874af7a286693e52142b6f

});