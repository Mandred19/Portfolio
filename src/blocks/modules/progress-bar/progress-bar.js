window.addEventListener('DOMContentLoaded', () => {
	((time) => {
		let start = 0,
			bar = document.querySelectorAll('.skills-item__progress'),
			target = document.querySelector('.skills');
		window.addEventListener('scroll', () => {
			let winHeight = window.innerHeight,
				targetPos = target.getBoundingClientRect(),
				targetPosTop = targetPos.top,
				targetPosBottom = targetPos.bottom;
			if (targetPosTop < 81 || targetPosBottom < winHeight) {
				setTimeout(() => {
					bar.forEach((i, ind) => {
						const interval = setInterval(() => {
							start > bar[ind].max ? clearInterval(interval) :
								bar[ind].value = start;
							start++;
						}, time);
					});
				}, 1000);
			}
		});
	})(70);
});