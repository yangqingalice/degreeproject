$(document).ready(function(){

  var x = 0;
  $("#button").click(function(){
    x++;
    if(x==1){
      $("#button").text(".hover()");
    } if(x==2){
      $("#button").text(".click()");
    } if(x==3){
      $("#button").text(".scroll()");
    } if(x==4){
      $("#button").text("e.pageX");
    } if(x==5){
      $("#button").text("e.PageY");
    } if(x==6){
      $("#button").text(".mouseover()");
    } if(x==7){
      $("#button").text(".mouseout()");
    } if(x==8){
      $("#button").text(".keydown()");
    } if(x==10){
      $("#button").text(".keyup()");
    } if(x==11){
      $("#button").text(".text()");
    } if(x==12){
      $("#button").text(".drag()");
    } if(x==13){
      $("#button").text(".drop()");
    } if(x==14){
      $("#button").text(".play()");
    } if(x==15){
      $("#button").text("");
    } if(x==18){
      $("#button").text("End");
    }
  });

});
