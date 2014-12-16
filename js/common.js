head.ready(function() {

	//menu
	$('.js-menu').click(function() {
		$('.menu').addClass('is-active');
		return false;
	});

	$('.js-close').click(function() {
		$('.menu').removeClass('is-active');
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