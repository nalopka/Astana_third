$(document).ready(function(){
	$(window).on('scroll', function() {
	   var x = $(window).scrollTop();
	   var scale = 1 + parseInt(x / 10, 0);
	    $(".test1").css('background-size', 100 + scale + '%'); 
	    // $('.cover').css("transform", "scale("+ scale + ")");
	    
	    inView(".home").on("exit", function() {
	    	$(".cover div").removeClass("test1");
	    	// $(".cover").toggleClass("test1");
	    	// $('.cover').css("background-size", "100%"); 
		// $('.cover').css("transform", "scale(1)");
		});
	});

});