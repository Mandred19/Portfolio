window.addEventListener('DOMContentLoaded', () => {
	(() => {
		let btnWrap = document.querySelector('.sandwich'),
			btn = document.querySelector('.sandwich__btn'),
			nav = document.querySelector('.top-menu'),
			itemMenu = document.querySelectorAll('.top-menu__item'),
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
			let target = event.target || event.target.closest('.sandwich__btn');
			if (target) {
				toggleClass();
			}
		});

		nav.addEventListener('click', (event) => {
			let target = event.target && event.target.closest('.top-menu__item');
			if (target) {
				toggleClass();
			}
		});
	})();
});