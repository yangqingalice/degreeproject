$(document).ready(function(){

window.scrollTo(0, 1000);

		$(window).scroll(function() {

			var s = $(window).scrollTop();

				 $("#exploratory_works").css({
				 "top": s*1.2 - 1050 + "px"
				 });
				 $("#marginalia").css({
				 "top": s*1.8 - 1550 + "px"
				 });
				 $("#jackie_ferrara").css({
				 "top": s*1.1 - 950 + "px"
				 });
				 $("#gary_simmons").css({
				"top": s*0.8 - 750 + "px"
				});
				$("#amy_sillman").css({
				"top": s*1.2 + 100 + "px"
				});
				$("#jackson_mac_low").css({
				"top": s*1.8 + 400 + "px"
				});
				$("#mateo").css({
				"top": s*1.1 + 200 + "px"
				});
				$("#where").css({
			 "top": s*0.8 - 1250 + "px"
			 });


		});

$(".image").mouseover(function(){
	$(this).next().show();
});
$(".image").mouseout(function(){
	$(this).next().hide();
});


});
