window.addEventListener('DOMContentLoaded', () => {
	(() => {
		let aboutToggle = document.querySelector('.block-history__toggle'),
			text = document.querySelectorAll('.turn');
		aboutToggle.addEventListener('click', function() {
			this.classList.toggle('expand');
			this.classList.contains('expand') ? this.innerHTML = 'Развернуть' :
				this.innerHTML = 'Свернуть';
			text.forEach((i, ind) => {
				text[ind].classList.toggle('hide');
			});
		});
	})();
});