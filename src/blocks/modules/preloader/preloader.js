import $ from 'jquery';

$(window).on('load', () => {
	setTimeout( () => {
		$('.s-preloader').delay(100).fadeOut().remove();
	}, 0);
});