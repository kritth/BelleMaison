
$(document).ready(function () {
  $('.top-menu').hide();
  
});
$(document).scroll(function (e) {
	var loc = $(".explore-div").offset().top - 100;
	console.log(loc);
    if (document.body.scrollTop >= loc) {
       $('.top-menu').fadeIn()
    } else {
      $('.top-menu').fadeOut();
    }
});