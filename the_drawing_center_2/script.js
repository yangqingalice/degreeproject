$(document).ready(function(){

if(window.innerWidth > 800){
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

} else {


	var x = 0, y = 0,
	    vx = 0, vy = 0,
		ax = 0, ay = 0;

	var sphere = document.getElementById("circle");

	if (window.DeviceMotionEvent != undefined) {
		window.ondevicemotion = function(e) {
			ax = event.accelerationIncludingGravity.x * 5;
			ay = event.accelerationIncludingGravity.y * 5;
			document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
			document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
			document.getElementById("accelerationZ").innerHTML = e.accelerationIncludingGravity.z;

			if ( e.rotationRate ) {
				document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
				document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
				document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
			}
		}

		setInterval( function() {
			var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
			if ( landscapeOrientation) {
				vx = vx + ay;
				vy = vy + ax;
			} else {
				vy = vy - ay;
				vx = vx + ax;
			}
			vx = vx * 0.98;
			vy = vy * 0.98;
			y = parseInt(y + vy / 50);
			x = parseInt(x + vx / 50);

			boundingBoxCheck();

			sphere.style.top = y + "px";
			sphere.style.left = x + "px";

		}, 25);
	}


	function boundingBoxCheck(){
		if (x<0) { x = 0; vx = -vx; }
		if (y<0) { y = 0; vy = -vy; }
		if (x>document.documentElement.clientWidth-50) { x = document.documentElement.clientWidth-50; vx = -vx; }
		if (y>document.documentElement.clientHeight-50) { y = document.documentElement.clientHeight-50; vy = -vy; }

	}

}

});
