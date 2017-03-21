$(document).ready( function() {
  var x = 0, y = 0,
      vx = 0, vy = 0,
      ax = 0, ay = 0;

  var sphere = $("#sphere");

  if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = function(e) {
      ax = event.accelerationIncludingGravity.x * 5;
      ay = event.accelerationIncludingGravity.y * 5;
      $("#accelerationX").innerHTML = e.accelerationIncludingGravity.x;
      $("#accelerationY").innerHTML = e.accelerationIncludingGravity.y;
      $("#accelerationZ").innerHTML = e.accelerationIncludingGravity.z;

      if (e.rotationRate) {
        $("rotationAlpha").innerHTML = e.rotationRate.alpha;
        $("rotationBeta").innerHTML = e.rotationRate.beta;
        $("#rotationGamma").innerHTML = e.rotationRate.gamma;
      }
    }

    setInterval (function(){
      var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
      if (landscapeOrientation) {
        vx = vx + ay;
        vy = vy + ax;
      } else {
        vy = vy - ay;
        vx = vx + ax;
      }
      vx = vx * 0.98;
      vy = vy * 0.98;
      y = parseInt (y + vy / 50);
      x = parseInt (x + vx / 50);

      boundingBoxCheck();

      sphere.style.top = y + "px";
      sphere.style.left= x + "px";

    }, 25);
  }
    function boundingBoxCheck() {
      if (x<0) {x = 0; vx = -vx;}
      if (y<0) {y = 0; vy = -vy;}
      if (x>window.innerWidth - 20) {x = window.innerWidth - 20; vx = -vx;}
      if (y>window.innerHeight - 20) {y = window.innerHeight - 20; vy = - vy;}
    }



});
