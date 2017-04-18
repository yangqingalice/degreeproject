$(document).ready(function(){


	  $(document).bind('mousemove', function(e){

	  var w = window.innerWidth / 2;
	  var h = window.innerHeight / 2;
	  var x = e.pageX;
	  var y = e.pageY;
	  var a = 0;
	  var b = 0;
	  var c = 0;
	  var d = 0;

	  a = w - x;
	  b = h - y;

	  c = a / 20;
	  d = b / 20;

		c = -c;
		d = -d;

	  a = a / 10;
	  b = b / 10;

	  c = w - c;
	  d = h - d;

	  a = w - a;
	  b = h - b;



	  $('#center').css({
	    left: a - 25 ,
	    top:  b - 25
	  });

	  $('#circle').css({
	    left: c - 50,
	    top:  d - 50
	  });

	  });

		$(window).scroll(function() {
				 $("#exploratory_works").css({
				 "top": window.innerHeight/7 + $(window).scrollTop()*1.2 - 550+ "px"
				 });
				 $("#marginalia").css({
				 "top": window.innerHeight/9 + $(window).scrollTop()*1.8 - 650+ "px"
				 });
				 $("#jackie_ferrara").css({
				 "top": window.innerHeight/6 + $(window).scrollTop()*1.1 - 450+ "px"
				 });
				 $("#gary_simmons").css({
				"top": window.innerHeight/6 + $(window).scrollTop()*0.8 - 450+ "px"
				});

				if($(window).scrollTop() > 350 && $(window).scrollTop() < 700){
					$(".section").hide();
					$("#current").show();
				}

				else {
					$(".section").hide();
				}
		});

$(".image").mouseover(function(){
	$(this).next().show();
});
$(".image").mouseout(function(){
	$(this).next().hide();
});


});
