window.addEventListener('DOMContentLoaded', () => {
	(() => {
		let block = document.querySelectorAll('.skill-service__descr');
		block.forEach((i, ind) => {
			window.addEventListener('scroll', () => {
				let winHeight = window.innerHeight,
					blockPos = block[ind].getBoundingClientRect(),
					blockPosTop = blockPos.top,
					blockPosBottom = blockPos.bottom;
				if (blockPosTop < 81 || blockPosBottom < winHeight) {
					block[ind].classList.add('show-service');
				}
			});
		});
	})();
});