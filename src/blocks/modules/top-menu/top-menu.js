window.addEventListener('DOMContentLoaded', () => {
	(() => {
		let anchors = document.querySelectorAll('.js-anchor');
		for (let anchor of anchors) {
			anchor.addEventListener('click', (e) => {
				e.preventDefault();
				let itemId = anchor.getAttribute('href');
				document.querySelector(` ${itemId}`).scrollIntoView({
					block: 'start',
					behavior: 'smooth'
				});
			});
		}
	})();
});