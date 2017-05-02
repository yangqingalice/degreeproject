$(document).ready(function(){

window.scrollTo(0, 1000);

$(window).scroll(function() {
	var s = $(window).scrollTop();

	if (s<284) {
		$("#year").text("April 13 2017");
		$("#time").text("6-8PM");
	} if (s>=370 && s<794) {
		$("#year").text("April 15 2017");
		$("#time").text("2:00PM & 4:00PM");
	} if (s>=880 && s<1304) {
		$("#year").text("April 25 2017");
		$("#time").text("6:30PM");
  } if (s>=1390 && s<1814) {
		$("#year").text("April 27 2017");
		$("#time").text("6:30M");
  } if (s>=1900 && s<2324) {
		$("#year").text("April 29 2017");
		$("#time").text("12-6PM");
  } if (s>=2410 && s<2834) {
		$("#year").text("May 04 2017");
		$("#time").text("6:30PM");
  } if (s>=2920 && s<3344) {
		$("#year").text("May 18 2017");
		$("#time").text("6:30PM");
  } if (s>=3430 && s<3854) {
		$("#year").text("May 24 2017");
		$("#time").text("6:30PM");
  } if (s>=3940 && s<4364) {
		$("#year").text("May 31 2017");
		$("#time").text("6:30PM");
  } 

});

});
