$(document).ready(function(){

window.scrollTo(0, 500);

		$(window).scroll(function() {
				 $("#mydiv1").css({
				 "top": window.innerHeight/2 + $(window).scrollTop()*0.1 + "px"
				 });
				 $("#mydiv2").css({
				 "top": window.innerHeight/3 + $(window).scrollTop()*0.5 + "px"
				 });
				 $("#mydiv3").css({
				 "top": window.innerHeight/7 + $(window).scrollTop()*1.2 + "px"
				 });
				 $("#mydiv4").css({
				 "top": window.innerHeight/9 + $(window).scrollTop()*1.4 + "px"
				 });
				 $("#mydiv5").css({
				 "top": window.innerHeight/6 + $(window).scrollTop()*1.1 + "px"
				 });
		});



	});
