$(window).on('load', function () {
  setTimeout( () => {
		$(".s-preloader").delay(100).fadeOut().remove();
  }, 0);
});

$(document).ready(function () {
		svg4everybody({});


	const portfSlider = () => {
		$('.slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: '.slider-arrow__next',
			prevArrow: '.slider-arrow__prev',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						arrows: false,
						slidesToShow: 3
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 561,
					settings: {
						slidesToShow: 1
					}
				}
				// {
				// 	breakpoint: 321,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		slidesToScroll: 1
				// 	}
				// }
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

	const animProgressBar = (time) => {
		let check = 1,
				bar = document.querySelectorAll('.skill-block__progress'),
				start = 0,
				target = $('.skills'),
				targetPos = target.offset().top,
				winHeight = $(window).height(),
				scrollToElem = targetPos - winHeight;

		$(window).scroll( () => {
			let winScrollTop = $(this).scrollTop();
			if (winScrollTop > scrollToElem && check) {
				bar.forEach((i, ind) => {
					const interval = setInterval(() => {
						start > bar[ind].max ? clearInterval(interval) : bar[ind].value = start;
						start++;
					}, time);
				});
				check = 0;
			}
		});
	};


	portfSlider();
	setAnchors();
	animProgressBar(50);
});


window.addEventListener('DOMContentLoaded', () => {

});