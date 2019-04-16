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
	};


	const setAnchors = () => {
		$(window).on("load",function(){
			$(".js-anchor").mPageScroll2id({
				scrollSpeed: 600
			});
		});
	};


	portfSlider();
	setAnchors();
});


window.addEventListener('DOMContentLoaded', () => {


	const btnScrollTop = (scrollHeigth) => {
		let btnTop = document.querySelector('.btn-scroll-top');

		window.addEventListener('scroll', () => {
			window.pageYOffset > scrollHeigth ?
			btnTop.classList.add('btn-scroll-top-active') :
			btnTop.classList.remove('btn-scroll-top-active');

			btnTop.addEventListener('click', () => {
				window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth'
				});
			});
		});
	};


	const btnScrollDown = () => {
		let btnDown = document.querySelector('.header-main__btn'),
				screenHeight = window.innerHeight;

		btnDown.addEventListener('click', () => {
			window.scroll({
				top: screenHeight,
				left: 0,
				behavior: 'smooth'
			});
		});
	};


	const animProgressBar = (time) => {
		let check = 1,
				start = 0,
				bar = document.querySelectorAll('.skill-block__progress'),
				target = document.querySelector('.skills'),
				winHeight = window.innerHeight;
		window.addEventListener('scroll', () => {
			let targetPos = target.getBoundingClientRect(),
					targetPosTop = targetPos.top,
					targetPosBottom = targetPos.bottom;
			if (targetPosTop >= 0 && targetPosBottom <= winHeight + 300 && check) {
				setTimeout(() => {
					bar.forEach((i, ind) => {
						const interval = setInterval(() => {
							start > bar[ind].max ? clearInterval(interval) :
							bar[ind].value = start;
							start++;
						}, time);
					});
				}, 1000);
				check = 0;
			}
		});
	};


	const sandwichBtn = () => {
		let btnWrap = document.querySelector('.header-top__sandwich'),
				btn = document.querySelector('.sandwich-btn'),
				nav = document.querySelector('.header-top__menu'),
				itemMenu = document.querySelectorAll('.header-top__item'),
				body = document.querySelector('body');

		const toggleClass = () => {
			btnWrap.classList.toggle('sandWrap-open');
			btn.classList.toggle('sand-open');
			nav.classList.toggle('menu-open');
			itemMenu.forEach((i, ind) => {
				itemMenu[ind].classList.toggle('li-open');
			});
			if (window.innerWidth < 768) {
				body.classList.toggle('popup-no-scroll');
			}
		};

		btnWrap.addEventListener('click', (event) => {
			let target = event.target || event.target.closest('.sandwich-btn');
			if (target) {
				toggleClass();
			}
		});

		nav.addEventListener('click', (event) => {
			let target = event.target && event.target.closest('.header-top__item');
			if (target) {
				toggleClass();
			}
		});
	};


	btnScrollTop(500);
	btnScrollDown();
	animProgressBar(70);
	sandwichBtn();
});