head.ready(function() {

	//menu
	$('.js-menu').click(function() {
		$('body').addClass('menu-opened');
		$('.menu').addClass('is-active');
		$('.js-overlay').css('display', 'block');

		if ($('body').hasClass('index')){
			$('body').css('padding-right', '0');
		};
		return false;
	});

	$('.js-close').click(function() {
		$('body').removeClass('menu-opened');
		$('.menu').removeClass('is-active');
		$('.js-overlay').css('display', 'none');
		return false;
	});

	// var windowsize = $(window).width();

	// $(window).resize(function() {
	// 	windowsize = $(window).width();
	// 		if (windowsize < 1025) {
	// 			$('.inner').addClass('is-fixed');
	// 		}
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

});