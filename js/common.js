head.ready(function() {

	//menu
	$('.js-menu').click(function() {
		$('.menu').addClass('is-active');
	});

	$('.js-close').click(function() {
		$('.menu').removeClass('is-active');
	});

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