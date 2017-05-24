$(document).ready(function(){

  var x = 0;
  $("#button").click(function(){
    x++;
    if(x==1){
      $("#button").text("Z Axis");
    } if(x==2){
      $("#button").text("Alice Yang");
    } if(x==3){
      $("#button").text("Tom Ockerse");
      x=0;
    }
  });

});
