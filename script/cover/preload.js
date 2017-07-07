$(document).ready(function(){
	var images = new Array()
	function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image();
			images[i].src = preload.arguments[i];
		};
	};
	preload(
			"img/store/bg_store_1.JPG",
			"img/store/bg_store_2.JPG",
			"img/logistic/bg_logistic.JPG",
			"img/home/home.jpg",
			"img/territory/scheme.png");
});
