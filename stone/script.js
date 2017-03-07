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


});
