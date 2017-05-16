$(document).ready(function(){

window.scrollTo(0, 1000);
$(".l10").animate({left: "10vw"}, 1600);
$(".l15").animate({left: "15vw"}, 1550);
$(".l25").animate({left: "25vw"}, 1450);
$(".l35").animate({left: "35vw"}, 1400);
$(".l40").animate({left: "40vw"}, 1350);
$(".l45").animate({left: "45vw"}, 1300);
$(".l50").animate({left: "50vw"}, 1250);
$(".l65").animate({left: "65vw"}, 1200);

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

$(".image").mouseover(function(){
	$(this).next().show();
});
$(".image").mouseout(function(){
	$(this).next().hide();
});


$(".exhibition").click(function(){
	$(".l80").animate({left: "80vw"}, 500);
	$(".l75").animate({left: "75vw"}, 700);
	$(".info").hide();
	$(".info").animate({left: "-1000px"}, 700);
	$(this).next().show();
	$(this).next().animate({left: "140px"}, 700);
	$("#menu").hide();
	x = 2;
});

$(".close").click(function(){
	$(".info").animate({left: "-1000px"}, 600);
	$(".info").hide();
	$(".l10").animate({left: "10vw"}, 800);
	$(".l15").animate({left: "15vw"}, 750);
	$(".l25").animate({left: "25vw"}, 650);
	$(".l35").animate({left: "35vw"}, 600);
	$(".l40").animate({left: "40vw"}, 550);
	$(".l45").animate({left: "45vw"}, 500);
	$(".l50").animate({left: "50vw"}, 450);
	$(".l65").animate({left: "65vw"}, 400);
	$("#menu").hide();
	x = 2;
});






});
