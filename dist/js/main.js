;(function(window, $) {
	
	var navStart = 1;
	$(".nav-toggle").on('click', function(){
		navStart *= -1;
		$(this).next("nav").toggle();
		$(this).parents(".nav-holder").toggleClass('orange');

			if(navStart == -1)
				var src = "dist/img/BuiltBetter-Type.png"
			else
				var src = "dist/img/bb-logo.svg";
		
		$("#logo").attr('src',src);
		$(this).toggleClass('reverse');

	});




})(window, jQuery);