$(window).on('load', () => {
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
				scrollSpeed: 600
			});
		});
	};


	const animProgressBar = (time) => {
		let check = 1,
				bar = $('.skill-block__progress'),
				start = 0,
				target = $('.skills'),
				targetPos = target.offset().top,
				winHeight = $(window).height(),
				scrollToElem = targetPos - winHeight;

		$(window).scroll( () => {
			let winScrollTop = $(this).scrollTop();
			if (winScrollTop > scrollToElem && check) {
				bar.each((ind) => {
					const interval = setInterval(() => {
						start > bar[ind].max ? clearInterval(interval) : bar[ind].value = start;
						start++;
					}, time);
				});
				check = 0;
			}
		});
	};


	const btnScrollTop = (scrollHeigth, animDuration) => {
		let btnTop = $('.btn-scroll-top');

		$(window).scroll( () => {
			$(this).scrollTop() > scrollHeigth ?
			btnTop.addClass('btn-scroll-top-active') :
			btnTop.removeClass('btn-scroll-top-active');
		});
		btnTop.on('click', () => {
			$('body, html').animate({
				scrollTop: 0
			}, animDuration);
		});
	};


	const btnScrollDown = (animDuration) => {
		let btnDown = $('.header-main__btn'),
				screenHeight = $(window).height();

		btnDown.on('click', () => {
			$('body, html').animate({
				scrollTop: screenHeight
			}, animDuration);
		});
	};


	portfSlider();
	setAnchors();
	animProgressBar(70);
	btnScrollTop(500, 600);
	btnScrollDown(600);
});


window.addEventListener('DOMContentLoaded', () => {


	const sandwichBtn = () => {
		let btnWrap = document.querySelector('.header-top__sandwich'),
				btn = document.querySelector('.sandwich-btn'),
				nav = document.querySelector('.header-top__menu'),
				itemMenu = document.querySelectorAll('.header-top__item'),
				body = document.querySelector('body');
		btnWrap.addEventListener('click', (event) => {
			let target = event.target || event.target.closest('.sandwich-btn');
			if (target) {
				btnWrap.classList.toggle('sandWrap-open');
				btn.classList.toggle('sand-open');
				nav.classList.toggle('menu-open');
				itemMenu.forEach((i, ind) => {
					itemMenu[ind].classList.toggle('li-open');
				});
				// body.classList.toggle('magnific-popup-no-scroll');
			}
		});
		// btnWrap.addEventListener('mouseover', (event) => {
		// 	console.log(1);
		// 	let target = event.target || event.target.closest('.sandwich-btn');
		// 	if (target && ! btn.classList.contains('.sandWrap-open')) {
		// 		btn.classList.toggle('sand-hover');
		// 	}
		// });
		// btnWrap.addEventListener('mouseout', (event) => {
		// 	console.log(1);
		// 	let target = event.target || event.target.closest('.sandwich-btn');
		// 	if (target && ! btn.classList.contains('.sandWrap-open')) {
		// 		btn.classList.toggle('sand-hover');
		// 	}
		// });

		nav.addEventListener('click', (event) => {
			let target = event.target && event.target.closest('.header-top__item');
			if (target) {
				btnWrap.classList.toggle('sandWrap-open');
				btn.classList.toggle('sand-open');
				nav.classList.toggle('menu-open');
				itemMenu.forEach((i, ind) => {
					itemMenu[ind].classList.toggle('li-open');
				});
				// body.classList.toggle('magnific-popup-no-scroll');
			}
		});
	};

	sandwichBtn();
});