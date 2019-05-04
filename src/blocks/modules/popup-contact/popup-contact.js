import $ from 'jquery';
import 'magnific-popup';
import 'jquery-validation';

$(document).ready(() => {
	(() => {
		$('.js-popup').magnificPopup({
			showCloseBtn: false,
			focus: 'input',
			fixedContentPos: false,
			callbacks: {
				beforeOpen: function () {
					if ($(window).height() > 560) {
						$('body').addClass('popup-no-scroll-m');
					}
				},
				close: function () {
					$('body').removeClass('popup-no-scroll-m');
				}
			}
		});
		$(document).on('click', '.popup-close', () => {
			$.magnificPopup.close();
		});
	})();

	(() => {
		$('#cont-form').each(function() {
			$(this).validate({
				rules: {
					name : {
						required: true
					},
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: {
						required: 'Укажите имя'
					},
					email: {
						required: 'Укажите e-mail',
						email: 'Укажите верный формат'
					}
				},
				errorPlacement: function (error, element) {
					element.attr('placeholder', error[0].outerText);
				}
			});
			$(this).on('submit', function() {
				if ($(this).valid()) {
					let wrap = $(this).closest('.hide-on-success');
					if (wrap) {
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide();
					}
				}
				return false;
			});
		});
	})();
});