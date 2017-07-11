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
		
    $('.header__main').toggleClass('nav--open');
		$("#logo").attr('src',src);
		$(this).toggleClass('reverse');
		$(this).parents('.nav-holder').toggleClass('nav-open');

	});

	// $("body").on('click', '.nav-open li a', function(e){
	// 	$(this).parents('nav').toggle();
	// 	$(this).parents(".nav-holder").toggleClass('orange');
	// });



})(window, jQuery);


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });