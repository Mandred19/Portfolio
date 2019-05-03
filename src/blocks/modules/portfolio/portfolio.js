import $ from 'jquery';
import 'slick-carousel';
import 'vue';

(() => {
	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '.slider-arrow__next',
		prevArrow: '.slider-arrow__prev',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					arrows: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 561,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 321,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
})();