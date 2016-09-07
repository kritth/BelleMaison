$(document).ready(function() {
	// Init Full page
	$('#fullpage').fullpage({
		// Scrolling
		scrollingSpeed: 700,
		autoScrolling: true,
		scrollBar: true
	});
	// Check height on ready
	toggleTitle();
	
	// Make the page appear when javascript is enabled
	$("#script-required").css('visibility', 'visible');
});

// Init skrollr for parallax
(function($) {
	var s = skrollr.init({
		forceHeight: false
	});
}) (jQuery);

// Functions run on resizing window
$(window).resize(function(){
	location.reload();
	toggleTitle();
});

// Visibility of each section according to height of the window
function toggleTitle() {
	var win = $(window);
	if (win.height() <= 600) {
		$('.section-2-title').css('visibility', 'hidden');
		$('.text-title').css('visibility', 'hidden');
		$('.avail_title_text').css('visibility', 'hidden');
		$('.contact-title').css('visibility', 'hidden');
	} else {
		$('.section-2-title').css('visibility', 'visible');
		$('.text-title').css('visibility', 'visible');
		$('.avail_title_text').css('visibility', 'visible');
		$('.contact-title').css('visibility', 'visible');
	}
}

// Time handling
function updateTime() {
	var today = new Date();
	document.getElementById('date-time').innerHTML = today;
}

// Set time update per second
setInterval(updateTime, 1000);