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

	
});



$(document).ready(function(){
inView.offset(400);
inView(".home").on("enter", function() {
	var homeImageURL = "img/home/home.jpg";
	$(".cover div").addClass("test1");
	$(".cover .test1").css("background-image", "url(" + homeImageURL + ")");
	
});
inView(".territory").on("enter", function() {
	var territoryImageURL = "img/territory/scheme.png";
	$(".cover").css("background-image", "url(" + territoryImageURL + ")");
});
// inView(".home").on("enter", function() {
// 	var homeImageURL = "img/home/home.jpg";
// 	$(".cover").css("background-image", "url(" + homeImageURL + ")");
// });
});

// inView('.section').on('exit', function(){
// // var blockName = $(el).attr('id');
// // $('.header-menu').find('a[href="#'+blockName+'"]').removeClass("active");
// $(".territory").fadeOut("slow", 0);
// });
