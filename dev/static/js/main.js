$(window).on('load', function () {
  setTimeout( () => {
		$(".s-preloader").delay(100).fadeOut().remove();
  }, 0);
});

$(document).ready(function () {
		svg4everybody({});


	const portfSlider = () => {
		$('.js-pizza-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: '.pizza-main__arrow__prev',
			prevArrow: '.pizza-main__arrow__next',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 321,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};


	const setAnchors = () => {
		$(window).on("load",function(){
			$(".js-anchor").mPageScroll2id({
				scrollSpeed: 600,
				offset: 70
			});
		});
	};


	portfSlider();
	setAnchors();
});


window.addEventListener('DOMContentLoaded', () => {


});