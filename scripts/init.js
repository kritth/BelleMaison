$(document).ready(function() {
	$('#fullpage').fullpage({
		// Scrolling
		scrollingSpeed: 700,
		autoScrolling: true,
		scrollBar: true
	});
});

(function($) {
	// Init
	var s = skrollr.init({
		forceHeight: false
	});
}) (jQuery);