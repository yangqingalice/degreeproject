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

  c = a / 3;
  d = b / 3;

  a = a / 10;
  b = b / 10;

  c = w - c;
  d = h - d;

  a = w - a;
  b = h - b;



  $('#follow1').css({
    left: a - 25 ,
    top:  b - 25
  });

  $('#follow2').css({
    left: c - 50,
    top:  d - 50
  });

  });

});
