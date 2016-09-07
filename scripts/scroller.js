// Global variable to use
var btn1 = $('.section-1-btn');
var btn2 = $('.section-2-btn');
var btn3 = $('.section-3-btn');
var btn4 = $('.section-4-btn');

// Validation on scrolling
function validateOnScroll() {
	/* Change text color for header */
	var menuPanel = $('.header-menu');
	if (document.body.scrollTop >= $('.section-4').offset().top) {
		addDarkHeader(menuPanel);
	} else if (document.body.scrollTop >= $('.section-4').offset().top
			&& document.body.scrollTop < $('.section-5').offset().top) {
		addLightHeader(menuPanel);
	} else if (document.body.scrollTop >= $('.section-3').offset().top
			&& document.body.scrollTop < $('.section-4').offset().top) {
		addDarkHeader(menuPanel);
	} else if (document.body.scrollTop >= $('.section-2').offset().top
			&& document.body.scrollTop < $('.section-3').offset().top) {
		addLightHeader(menuPanel);
	} else if (!menuPanel.hasClass("title-menu-dark")) {
		addDarkHeader(menuPanel);
	}
	
	/* Change logo opacity and color */
	var logo = $('.page-logo');
	if (document.body.scrollTop >= $('.section-2').offset().top) {
		if (logo.css("opacity") != 1) {
			logo.css("opacity", 1);
		}
		if (document.body.scrollTop >= $('.section-4').offset().top) {
			if (logo.hasClass("invert")) {
				logo.removeClass("invert");
			}
		} else if (document.body.scrollTop >= $('.section-3').offset().top
				&& document.body.scrollTop < $('.section-4').offset().top) {
			if (!logo.hasClass("invert")) {
				logo.addClass("invert");
			}
		} else if (document.body.scrollTop >= $('.section-2').offset().top
				&& document.body.scrollTop < $('.section-3').offset().top) {
			if (!logo.hasClass("invert")) {
				logo.addClass("invert");
			}
		}
	} else {
		logo.css("opacity", 0);
	}
	
	/* Change text color for footer */
	var footerPanel = $('.footer-menu');
	var scrollBottom = $(window).scrollTop() + $(window).height();
	if (scrollBottom > $('.section-5').offset().top) {
		addLightFooter(footerPanel);
	} else if (scrollBottom > $('.section-4').offset().top
			&& scrollBottom <= $('.section-5').offset().top) {
		addLightFooter(footerPanel);
	} else if (scrollBottom > $('.section-3').offset().top
			&& scrollBottom <= $('.section-4').offset().top) {
		addDarkFooter(footerPanel);
	} else if (scrollBottom > $('.section-2').offset().top
			&& scrollBottom <= $('.section-3').offset().top) {
		addDarkFooter(footerPanel);
	} else if (footerPanel.hasClass("footer-menu-dark")) {
		addLightFooter(footerPanel);
	}
	
	/* Change style to always active if in the section */
	if (document.body.scrollTop >= $('.section-5').offset().top) {
		removeAllBut(5);
	} else if (document.body.scrollTop >= $('.section-4').offset().top
			&& document.body.scrollTop < $('.section-5').offset().top) {
		removeAllBut(4);
	} else if (document.body.scrollTop >= $('.section-3').offset().top
			&& document.body.scrollTop < $('.section-4').offset().top) {
		removeAllBut(3);
	} else if (document.body.scrollTop >= $('.section-2').offset().top
			&& document.body.scrollTop < $('.section-3').offset().top) {
		removeAllBut(2);
	} else {
		removeAllBut(1);
	}
}

/********************HEADER STYLE*********************/
function addLightHeader(menuPanel) {
	if (!menuPanel.hasClass("title-menu-light")) {
		menuPanel.addClass("title-menu-light");
		btn1.addClass("btn-non-active-light");
		btn2.addClass("btn-non-active-light");
		btn3.addClass("btn-non-active-light");
		btn4.addClass("btn-non-active-light");
	}
	while (menuPanel.hasClass("title-menu-dark")) {
		menuPanel.removeClass("title-menu-dark");
		btn1.removeClass("btn-non-active-dark");
		btn2.removeClass("btn-non-active-dark");
		btn3.removeClass("btn-non-active-dark");
		btn4.removeClass("btn-non-active-dark");
	}
}

function addDarkHeader(menuPanel) {
	if (!menuPanel.hasClass("title-menu-dark")) {
		menuPanel.addClass("title-menu-dark");
		btn1.addClass("btn-non-active-dark");
		btn2.addClass("btn-non-active-dark");
		btn3.addClass("btn-non-active-dark");
		btn4.addClass("btn-non-active-dark");
	}
	while (menuPanel.hasClass("title-menu-light")) {
		menuPanel.removeClass("title-menu-light");
		btn1.removeClass("btn-non-active-light");
		btn2.removeClass("btn-non-active-light");
		btn3.removeClass("btn-non-active-light");
		btn4.removeClass("btn-non-active-light");
	}
}

/********************FOOTER STYLE*********************/
function addLightFooter(footerPanel) {
	if (!footerPanel.hasClass("footer-menu-light")) {
		footerPanel.addClass("footer-menu-light");
	}
	while (footerPanel.hasClass("footer-menu-dark")) {
		footerPanel.removeClass("footer-menu-dark");
	}
}

function addDarkFooter(footerPanel) {
	if (!footerPanel.hasClass("footer-menu-dark")) {
		footerPanel.addClass("footer-menu-dark");
	}
	while (footerPanel.hasClass("footer-menu-light")) {
		footerPanel.removeClass("footer-menu-light");
	}
}

/********************BUTTON STYLE*********************/
function removeAllBut(n) {
	switch(n) {
		case 1:
			if (!btn1.hasClass("btn-active"))
			{
				btn1.addClass("btn-active");
				btn2.removeClass("btn-active");
				btn3.removeClass("btn-active");
				btn4.removeClass("btn-active");
			}
			break;
		case 2:
			if (!btn2.hasClass("btn-active"))
			{
				btn1.removeClass("btn-active");
				btn2.addClass("btn-active");
				btn3.removeClass("btn-active");
				btn4.removeClass("btn-active");
			}
			break;
		case 3:
			if (!btn3.hasClass("btn-active"))
			{
				btn1.removeClass("btn-active");
				btn2.removeClass("btn-active");
				btn3.addClass("btn-active");
				btn4.removeClass("btn-active");
			}
			break;
		case 4:
			if (!btn4.hasClass("btn-active"))
			{
				btn1.removeClass("btn-active");
				btn2.removeClass("btn-active");
				btn3.removeClass("btn-active");
				btn4.addClass("btn-active");
			}
			break;
		default:
			btn1.removeClass("btn-active");
			btn2.removeClass("btn-active");
			btn3.removeClass("btn-active");
			btn4.removeClass("btn-active");
			break;
	}
}

// Event handlers
$(document).ready(function() {
	validateOnScroll();
});

$(document).scroll(function (e) {	
	validateOnScroll();
});