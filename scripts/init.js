$(document).ready(function() {
	$('#fullpage').fullpage({
		// Scrolling
		scrollingSpeed: 700,
		autoScrolling: true,
		scrollBar: true
	});
	toggleTitle();
});

(function($) {
	// Init
	var s = skrollr.init({
		forceHeight: false
	});
}) (jQuery);

$(window).resize(function(){
	location.reload();
	toggleTitle();
});

function toggleTitle() {
	var win = $(window);
	if (win.height() <= 600) {
		console.log("here");
		$('.section-2-title').css('visibility', 'hidden');
		$('.text-title').css('visibility', 'hidden');
		$('.avail_title_text').css('visibility', 'hidden');
	} else {
		$('.section-2-title').css('visibility', 'visible');
		$('.text-title').css('visibility', 'visible');
		$('.avail_title_text').css('visibility', 'visible');
	}
}