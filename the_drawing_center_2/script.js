$(document).ready(function(){

	  $(document).bind('mousemove', function(e){

	  var w = window.innerWidth / 2;
	  var h = window.innerHeight / 2;
	  var x1 = e.pageX;
	  var y1 = e.pageY;
	  var a1 = 0;
	  var b = 0;
	  var c = 0;
	  var d = 0;

	  a1 = w - x1;
	  b = h - y1;

	  c = a1 / 20;
	  d = b / 20;

		c = -c;
		d = -d;

	  a1 = a1 / 10;
	  b = b / 10;

	  c = w - c;
	  d = h - d;

	  a1 = w - a1;
	  b = h - b;

	  $('#center').css({
	    left: a1 - 25 ,
	    top:  b - 25
	  });

	  $('#circle').css({
	    left: c - 50,
	    top:  d - 50
	  });

	  });


});
