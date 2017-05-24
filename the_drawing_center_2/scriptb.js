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
			$("#menu").show();
		} else {
			$("#menu").hide();
		}
		});

		var a = 0;
		$(".cover").click(function(){
			a++;
			if (a % 2 !== 0) {
			$(this).next().show();
		} else {
			$(this).next().hide();
		}
		$(this).style.filter = "grayscale(0%)";
		});



		$(".close").click(function(){
			$(".info").hide();
			a = 0;
		});







});
