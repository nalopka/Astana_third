$(document).ready(function(){

inView.offset(100);
// inView.threshold(0.8);
inView(".security").on("enter", function() {
	var nextImageURL = "img/store/bg_store_2.JPG";
	$(".cover").css("background-image", "url(" + nextImageURL + ")");
});

inView(".store_section").on("enter", function() {
	var nextImageURL = "img/store/bg_store_1.JPG";
	$(".cover").css("background-image", "url(" + nextImageURL + ")");
});

inView(".logistic").on("enter", function() {
	var logisticImageURL = "img/logistic/bg_logistic.JPG";
	$(".cover").css("background-image", "url(" + logisticImageURL + ")");
});


// inView(".test1").on("exit", function() {
// 	var prevImageURL= "img/store/bg_store_1.JPG";
// 	$(".cover").css("background-image", "url(" + prevImageURL + ")");
// });



// inView('.store').on('enter', function(){
	
// // var blockName = $(el).attr('id');
// // $('.header-menu').find('a[href="#'+blockName+'"]').addClass("active");
// $(".territory").fadeIn("slow", 1);
});

// inView('.section').on('exit', function(){
// // var blockName = $(el).attr('id');
// // $('.header-menu').find('a[href="#'+blockName+'"]').removeClass("active");
// $(".territory").fadeOut("slow", 0);
// });
