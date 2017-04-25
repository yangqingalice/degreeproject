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


$(".exhibition").click(function(){
	$(".l80").animate({left: "80vw"}, 500);
	$(".l75").animate({left: "75vw"}, 800);
	$(".info").animate({left: "-40vw"}, 800);
	$(this).next().animate({left: "20vw"}, 800);
});

$(".time").click(function(){
	$(".info").animate({left: "-40vw"}, 800);
	$(".l10").animate({left: "10vw"}, 800);
	$(".l15").animate({left: "15vw"}, 750);
	$(".l25").animate({left: "25vw"}, 650);
	$(".l35").animate({left: "35vw"}, 600);
	$(".l40").animate({left: "40vw"}, 550);
	$(".l45").animate({left: "45vw"}, 500);
	$(".l50").animate({left: "50vw"}, 450);
	$(".l65").animate({left: "65vw"}, 400);

});

});
