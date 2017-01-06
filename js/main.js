$(document).ready(function() {
  
  /*  */
  

  /* scroll to top */
  $(".fixed-btn").hide();
  $(function() {
	  $(window).scroll(function(e) {
	    if($(window).scrollTop() >= 100) {
	      $(".fixed-btn").fadeIn();
	    } else {
	      $(".fixed-btn").fadeOut();
	    }
	  });
  });
  $(".fixed-btn").click(function(e) {
    $("html, body").animate({scrollTop: 0}, 300); 
    return false; 
  }); 

});
