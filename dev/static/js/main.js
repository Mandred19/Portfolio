$(window).on('load', function () {
  setTimeout( () => {
		$(".s-preloader").delay(100).fadeOut().remove();
  }, 1000);
});

$(document).ready(function () {
		svg4everybody({});

	const stickyMenu = (resolution) => {
		let screenHeight = document.querySelector('.product').clientHeight;
		if (window.innerWidth > resolution) {
			$(window).scroll( () => {
				if ($(this).scrollTop() >= screenHeight) {
					$(".header-top").addClass("js-header-top-sticky");
				} else {
					$(".header-top").removeClass("js-header-top-sticky");
				}
			});
		}
		else {
			$(window).scroll( () => {
				if ($(this).scrollTop() >= 70) {
					$(".header-top").addClass("js-header-top-sticky");
				} else {
					$(".header-top").removeClass("js-header-top-sticky");
				}
			});
		}
	};

	const toggleHamburger = () => {
		let $hamb = $('.hamburger'),
				menu = $('.js-nav'),
				linkMenu = $('.js-anchor--top');
		$hamb.on('click', () => {
			$hamb.toggleClass('is-active');
			menu.toggleClass('header-top__nav-mobile-active');
		});
		if ($(window).width() < 1024) {
			linkMenu.on('click', () => {
				$hamb.toggleClass('is-active');
				menu.toggleClass('header-top__nav-mobile-active');
			});
		}
	};

	const headerSlider = () => {
		$('.js-header-slider').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			dots: false,
			easing: 'ease-in-out',
			fade: true,
			infinite: true,
			speed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
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

	const pizzaSlider = () => {
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

	const saladSlider = () => {
		$('.js-salad-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow: '.salad-main__arrow__prev',
			prevArrow: '.salad-main__arrow__next',
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

	const drinkSlider = () => {
		$('.js-drink-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: '.drink-main__arrow__prev',
			prevArrow: '.drink-main__arrow__next',
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
				scrollSpeed: 600
			});
		});
	};

	const validateForm = () => {
		$("form").each(function() {
			$(this).validate({
				rules: {
					firstname: 'required',
					lastname: 'required',
					address: 'required',
					phone: 'required',
					date: 'required',
					time: 'required'
				},
				messages: {
					firstname: "Укажите имя",
					lastname: "Укажите фамилию",
					address: "Укажите адрес",
					phone: "Укажите телефон",
					date: "Укажите дату",
					time: "Укажите время"
				},
				errorPlacement: function (error, element) {
					element.attr("placeholder", error[0].outerText);
				}
			});
		});
	};

	const showGallery = () => {
		$('.js-gallery').magnificPopup({
			type: 'image',
			delegate: 'a',
			gallery:{
				enabled:true
			}
		});
	};


	stickyMenu(1024);
	toggleHamburger();
	headerSlider();
	pizzaSlider();
	saladSlider();
	drinkSlider();
	setAnchors();
	validateForm();
	showGallery();
});


window.addEventListener('DOMContentLoaded', () => {

	const scrollOneScreen = () => {
		let btn = document.querySelector('.next-screen-button'),
				screenHeight = document.querySelector('.product').clientHeight;
		btn.addEventListener('click', () => {
			for (let i = screenHeight; i < screenHeight * 5; i++) {
				scrollBy({
					top: screenHeight,
					behavior: 'smooth'
				});
				break;
			}
		});
	};

	const banScroll = (resolution) => {
		let page = document.querySelector('.wrapper');
		if (window.innerWidth > resolution) {
			page.addEventListener("onwhell", page.onwheel = (e) => {
				e.preventDefault();
			});
		}
	};

	const togglePizzaBlocks = () => {
		let btnBlock = document.querySelector('.product-main__choice'),
				btn = document.querySelectorAll('.js-btn'),
				toggle = document.querySelectorAll('.js-block'),
				arrows = document.querySelector('.pizza-main__arrow');

		btnBlock.addEventListener('click', (e) => {
			if (e.target && e.target.classList.contains('js-hide')) {
				for (let i = 0; i < btn.length; i++) {
					btn[i].classList.toggle('js-hide');
					btn[i].classList.toggle('product__title--active');
				}
				for (let j = 0; j < toggle.length; j++) {
					toggle[j].classList.toggle('js-toggle');
				}
				arrows.classList.toggle('js-toggle');
			}
		});
	};

	const toggleColorProdSize= () => {
		let sizeSmall = document.querySelectorAll('.product-main__header__dimension--small'),
				sizeBig = document.querySelectorAll('.product-main__header__dimension--big'),
				prodSize = document.querySelectorAll('.js-prod-size');

		for (let i = 0; i < sizeSmall.length; i++) {
			sizeSmall[i].classList.add('size-active');
		}


	};

	const createOrderInSlides = () => {
		let container = document.querySelectorAll('.js-container'),
				prodSize = document.querySelectorAll('.js-prod-size'),
				prodAmount = document.querySelectorAll('.js-prod-amount'),
				formAmount = document.querySelectorAll('.js-form-amount'),
				prodSubmit = document.querySelectorAll('.js-prod-subm');

	};


	scrollOneScreen();
	banScroll(1024);
	togglePizzaBlocks();
	toggleColorProdSize();
	createOrderInSlides();
});