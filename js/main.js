(function($) {
  
  /*skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large:  '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small:  '(max-width: 736px)',
    xsmall: '(max-width: 480px)'
  });*/

  /*  */
  $(function() {
    var $window = $(window),
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
      var t = jQuery(this),
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

    //Footer
    $footer.each(function() {
      var t = jQuery(this),
          inner = t.find('.inner'),
          info = t.find('.info');
      info.click(function(event) {
        t.toggleClass('show');
        event.preventDefault();
      });
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
