(function($) {
  
  /*  */
  let $window = $(window),
      $body = $('body'),
      $header = $('#header'),
      $footer = $('#footer');

  $body.addClass('is-loading');
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-loading');
    }, 100);
  });

  //Header
  $header.each(function() {
    let t = jQuery(this),
        button = t.find('.button');
    button.click(function(event) {
      t.toggleClass('hide');
      if (t.hasClass('preview')) {
        return true;
      } else {
        event.preventDefault();
      }
    });
  });



  /* scroll to top */
  $(".gototop").hide();
  $(function() {
	  $(window).scroll(function(e) {
	    if($(window).scrollTop() >= 100) {
	      $(".gototop").fadeIn();
	    } else {
	      $(".gototop").fadeOut();
	    }
	  });
  });
  $(".gototop").click(function(e) {
    $("html, body").animate({scrollTop: 0}, 300); 
    return false; 
  }); 

})(jQuery);
