window.addEventListener('DOMContentLoaded', () => {
	((scrollHeigth) => {
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
	})(500);

	(() => {
		let btnDown = document.querySelector('.header-main__btn');
		btnDown.addEventListener('click', () => {
			let screenHeight = window.innerHeight;
			window.scroll({
				top: screenHeight,
				left: 0,
				behavior: 'smooth'
			});
		});
	})();
});