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

	(() => {
		let target = document.querySelectorAll('.block-social__item');
		target.forEach((i, ind) => {
			window.addEventListener('scroll', () => {
				let winHeight = window.innerHeight,
					targetPos = target[ind].getBoundingClientRect(),
					targetPosBottom = targetPos.bottom;
				if (targetPosBottom < winHeight || targetPosBottom < 200) {
					target[ind].classList.add('social-show');
				}
			});
		});
	})();
});