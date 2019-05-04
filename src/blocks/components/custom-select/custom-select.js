import $ from 'jquery';

$(document).ready(() => {
	(() => {
		$('.select .option').on('click', function() {
			let val = $(this).attr('data-value'),
				$select = $('.select'),
				comment = $('.js-mar-bot'),
				prevActive = $('.select .option.active').attr('data-value'),
				options = $('.select .option').length;

			$select.find('.option.active').addClass('mini-hack');
			comment.toggleClass('mar-bot');
			$select.toggleClass('visible');
			$select.removeClass('withBG');
			$(this).css('top');
			$select.toggleClass('opacity');
			$('.mini-hack').removeClass('mini-hack');

			if ($select.hasClass('visible')) {
				setTimeout(() => {
					$select.addClass('withBG');
				}, 400 + options*100);
			}

			if (val !== 'placeholder' || prevActive === 'placeholder') {
				$('.select .option').removeClass('active');
				$(this).addClass('active');
			}
		});
	})();
});