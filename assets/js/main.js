$(window).scroll(function(){
    if($(this).scrollTop()>=300){
       $('.btn-top').fadeIn(500); 
    }else{
        $('.btn-top').fadeOut();
    }
    
});

$('.btn-top').on('click', function(){
    $('html').stop().animate({scrollTop:0},500);
});



