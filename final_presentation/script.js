$(document).ready(function(){

var x = 0;
$("#click").click(function(){
  x++;
  if(x%2==1){
  $("#menu").animate({left: "10px"}, 300);
} else {
  $("#menu").animate({left: "-200px"}, 300);
}
});

$(window).scroll(function() {
	var s = $(window).scrollTop();
  $("#height").text("height:"+ s);
	if (s<350) {
		$("#footnote").text("Alice Yang Degree Project | Advisor : Tom Ockerse | Spring 2017 @ RISD GD");
  } if (s>=350 && s<1000) {
    $("#footnote").text("What's Z Axis?");
  } if (s>=1000 && s<1600) {
    $("#footnote").text("Main Inquiry");
  } if (s>=1600 && s<2300) {
    $("#footnote").text("Experiment : Stone");
  } if (s>=2300 && s<3000) {
    $("#footnote").text("Behaviors");
  } if (s>=3000 && s<3900) {
    $("#footnote").text("Behaviors List");
  } if (s>=3900 && s<4600) {
    $("#footnote").text("Experiment : Behaviors");
  } if (s>=4600 && s<5300) {
    $("#footnote").text("The Drawing Center");
  } if (s>=5300 && s<6000) {
    $("#footnote").text("Starting Point");
  } if (s>=6000 && s<6700) {
    $("#footnote").text("First Edition");
  } if (s>=6700 && s<7400) {
    $("#footnote").text("Second Edition");
  } if (s>=7400 && s<8100) {
    $("#footnote").text("Third Edition");
  } if (s>=8100 && s<8313) {
    $("#footnote").text("Alice Yang Degree Project | Advisor : Tom Ockerse | Spring 2017 @ RISD GD");
  }
});



$("#question1").click(function(){
  $("#question1").text("What Is The Z Axis Of The Web?");
});

$(".xyline").click(function(){
  $("#zline").fadeIn(300);
  $("#zline").animate({top: "830px"}, 300);
});

$("#button1").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/stone/");
});

$("#button2").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/stone2/");
});

$("#click3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/click/");
});

$("#click4").click(function(){
  window.open("https://andrewleclair.github.io/gdfortheweb-fall2016/alice/4/");
});

$("#hover3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/mousemove/");
});

$("#hover4").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/hover2/");
});

$("#find3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/circle/index.html");
});

$("#gravity3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/sphere/demo.html");
});

$("#position3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/follow/index.html");
});

$("#position4").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/space/index.html");
});

$("#scroll3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/distance/index.html");
});

$("#tdc1").click(function(){
  window.open("http://www.drawingcenter.org/");
});

$("#tdc_el").click(function(){
  window.open("https://andrewleclair.github.io/gdfortheweb-fall2016/elizabeth/3/");
});

$("#tdc_al").click(function(){
  window.open("https://andrewleclair.github.io/gdfortheweb-fall2016/alice/5/index.html");
});

$("#tdc2").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/the_drawing_center/index.html");
});

$("#tdc3").click(function(){
  window.open("https://yangqingalice.github.io/degreeproject/the_drawing_center_2/index.html");
});





$("#dbclick1").click(function(){
  $("#dbclick2").show();
});

$("#click1").click(function(){
  $("#click2").show();
});

$("#drag1").click(function(){
  $("#drag2").show();
});

$("#scroll1").click(function(){
  $("#scroll2").show();
});

$("#title").click(function (){
  $('html, body').animate({
    scrollTop: 0},1000);
});

$("#q1").click(function (){
  $('html, body').animate({
    scrollTop: 600},1000);
});

$("#q2").click(function (){
  $('html, body').animate({
    scrollTop: 1200},1000);
});

$("#stone").click(function (){
  $('html, body').animate({
    scrollTop: 1900},1000);
});

$("#behavior").click(function (){
  $('html, body').animate({
    scrollTop: 2650},1000);
});

$("#blist").click(function (){
  $('html, body').animate({
    scrollTop: 3380},1000);
});

$("#experiment").click(function (){
  $('html, body').animate({
    scrollTop: 4250},1000);
});

$("#tdc").click(function (){
  $('html, body').animate({
    scrollTop: 5000},1000);
});

$("#tdcs").click(function (){
  $('html, body').animate({
    scrollTop: 5700},1000);
});

$("#tdcn1").click(function (){
  $('html, body').animate({
    scrollTop: 6400},1000);
});

$("#tdcn2").click(function (){
  $('html, body').animate({
    scrollTop: 7100},1000);
});

$("#tdcn3").click(function (){
  $('html, body').animate({
    scrollTop: 7800},1000);
});

});
