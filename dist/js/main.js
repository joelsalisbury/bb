;(function(window, $) {
	

	$(".nav-toggle").on('click', function(){
		$(this).next("nav").toggle();
		$(this).parents("nav").toggle();
	});




})(window, jQuery);