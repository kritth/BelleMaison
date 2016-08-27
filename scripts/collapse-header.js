$(document).scroll(function (e) {
    if (document.body.scrollTop > 0 && document.body.scrollTop < 200) {
		$('.top-menu').css({'top': -1 * document.body.scrollTop / 6 + 'px'});
    } else if (document.body.scrollTop <= 0) {
		$('.top-menu').css({'top': '0px'});
	} else if (document.body.scrollTop >= 200) {
		$('.top-menu').css({'top': '-35px'});
	}
});