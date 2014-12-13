head.ready(function() {

	//menu
	$('.js-menu').click(function() {
		$('.menu').addClass('is-active');
	});

	$('.js-close').click(function() {
		$('.menu').removeClass('is-active');
	});
});