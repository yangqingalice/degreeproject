$(document).ready(function() {

    $("#circle").click(function(){
      $(this).toggleClass("click");
    });

    $("#circle").dblclick(function(){
      $(this).toggleClass("dblclick");
    });

    $("#circle").swipe(function(){
      $(this).toggleClass("swipe");
    });

});
