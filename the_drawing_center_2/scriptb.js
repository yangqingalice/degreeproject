$(document).ready(function(){


		$(window).scroll(function() {
			var s = $(window).scrollTop();
				 $("#exploratory_works").css({
				 "top": s*1.2 - 1050 + "px"
				 });
		});


		var x = 0;
		$("#menuicon").click(function(){
		  x++;
			if (x % 2 !== 0) {
			$(".info").animate({left: "+=100px"}, 400);
			$(".exhibition").animate({left: "+=100px"}, 400);
			$("#menu").show();
		} else {
			$(".info").animate({left: "-=100px"}, 400);
			$(".exhibition").animate({left: "-=100px"}, 400);
			$("#menu").hide();
		}
		});







});
