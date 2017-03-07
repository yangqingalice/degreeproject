$(document).ready( function() {

$('#track1').click(function(){
   $('#wrap').append('<embed id="embed_player" src="roll.mp3" autostart="true" hidden="true"></embed>');
});

$('#track2').click(function(){
   $('#wrap').append('<embed id="embed_player" src="tap1.mp3" autostart="true" hidden="true"></embed>');
});

$('#track3').click(function(){
   $('#wrap').append('<embed id="embed_player" src="tap2.mp3" autostart="true" hidden="true"></embed>');
});

$('#track4').click(function(){
   $('#wrap').append('<embed id="embed_player" src="tap22.mp3" autostart="true" hidden="true"></embed>');
});

$('#track5').click(function(){
   $('#wrap').append('<embed id="embed_player" src="tickle.mp3" autostart="true" hidden="true"></embed>');
});

$('#track6').click(function(){
   $('#wrap').append('<embed id="embed_player" src="touch.mp3" autostart="true" hidden="true"></embed>');
});

$(".track").click(function(e){
   var x = e.pageX - 20 + "px";
   var y = e.pageY - 20 + "px";
   var div = $("<div>").css({
       "position": "absolute",
       "left": x,
       "top": y,
       "height": "40px",
       "width": "40px",
       "background-color": "white",
       "border-radius": "20px",
       "opacity": "0.5"
   });
   $(document.body).append(div);
   $("div").last().fadeOut("slow");

});

});
