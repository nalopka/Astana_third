$(document).ready(function(){

	inView.offset(300);
	// inView.threshold(0.8);
	inView(".security").on("enter", function() {
		var securityImageURL = "img/store/bg_store_2.JPG";
		$(".cover").css("background-image", "url(" + securityImageURL + ")");
	});

	inView(".store_section").on("enter", function() {
		var store_sectionImageURL = "img/store/bg_store_1.JPG";
		$(".cover").css("background-image", "url(" + store_sectionImageURL + ")");
	});

	inView(".logistic").on("enter", function() {
		var logisticImageURL = "img/logistic/bg_logistic.JPG";
		$(".cover").css("background-image", "url(" + logisticImageURL + ")");
	});
	inView(".territory").on("enter", function() {
		var territoryImageURL = "img/territory/scheme.png";
		$(".cover").css("background-image", "url(" + territoryImageURL + ")");
	});
});

$(document).ready(function(){
  // $(window).scroll(function() {
  	var territoryImageURL = "img/territory/scheme.png";
    var scrollHeight = $(".home").height();
    var scrollTop = $(document).scrollTop();
    console.log(scrollHeight + "height");
    console.log(scrollTop);

    inView.offset(500);
    inView(".home").on("exit", function(){
    	$(".zoom").css("transform", "scale(3)");
    	setTimeout(function(){
    		$(".zoom").removeClass("zoom");
    	},1000);
    	
    	});


});

    //     inView(".home").on("enter", function(){
//     	$(".zoom").css("transform", "scale(1)").delay(1000).fadeToggle();
//     	 });

// $(".zoom").fadeOut(2000, "linear");
    		// $(".zoom").removeClass("zoom");

    	// setTimeout(function(){
    	// 	$(".zoom").removeClass(".zoom");
    	// },500);






// inView.offset(300);
// inView(".home").on("enter", function() {
// 	var homeImageURL = "img/home/home.jpg";
// 	// $(".cover div").addClass("test1");
// 	$(".cover").css("background-image", "url(" + homeImageURL + ")");
	
// });
// inView(".territory").on("enter", function() {
// 	var territoryImageURL = "img/territory/scheme.png";
// 	$(".cover").css("background-image", "url(" + territoryImageURL + ")");
// });


  //   if ($(document).scrollTop() < scrollHeight - 400 ) {
  //     // $(".cover").addClass("test1");
  //     // $(".cover").css("transform","scale(2)");
  //     setTimeout(function(){
  //     	$(".cover").animate({scale:"2"})}
  //     	, 1000);
		// // $(".cover").css("background-image", "url(" + territoryImageURL + ")");
  //   } else {
  //     $(".cover").removeClass("test1");
  //   }


