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

			var e = 0;
			var f = 0;

			var g = 0;
			var m = 0;

			var i = 0;
			var j = 0;

			var k = 0;
			var l = 0;

		  a = x - w;
		  b = y - h;

		  c = a / 3;
		  d = b / 3;

			e = a / 2;
			f = b / 2;

			g = a;
			m = b;

			i = a / 0.5;
			j = b / 0.5;

			k = a / 1.2;
		  l = b / 1.2;


		  c = w - c;
		  d = h - d;

			e = w / 0.9 - e;
			f = h / 0.9 - f;

			g = w  - g;
		  m = h / 0.8 - m;

			i = w / 3 - i;
			j = h / 0.8 - j;

			k = w / 1.2 - k;
			l = h / 1.2 - l;




		  $('#mydiv1').css({
		    left: c - 15 ,
		    top:  d - 15
		  });

		  $('#mydiv2').css({
		    left: e - 50,
		    top:  f - 50
		  });

			$('#mydiv3').css({
				left: g - 125,
				top:  m - 125
			});

			$('#mydiv4').css({
				left: i - 200,
				top:  j - 200
			});

			$('#mydiv5').css({
				left: k - 100,
				top:  l - 100
			});

		  });


	});
