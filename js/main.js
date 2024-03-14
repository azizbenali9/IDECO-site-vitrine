
    //smooth scrool //
    $(document).ready(function(){
    $('.page-scroll').click(function(e){
       var linkhref = $(this).attr('href');
       $('html, body').animate({
           scrollTop: $(linkhref).offset().top
       }, 1000);
       e.preventDefault();
    });
    
    });
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('on');
        } else {
            $('nav').removeClass('on');
        }
        
    
        
    });

   

	// Hide nav on click
   
	
  	//  active isotope filter//
      
     
      $(window).load(function(){
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
     
        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        }); 
    });


// When the browser is ready...



/* contact  */

$(document).ready(function(){
$("#form").validate({
  rules: {
          username: {
            minlenght:4,
              required:true

          },
          email: {
              required:true,
              email:true
          },
          message:{
            
              required: true                    
          },
 
     },
     
     

});
});

