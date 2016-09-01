// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : main.js 
// System       : New Website for ANVR (aka Don Nero aka Clifton Donnelly!)
// Date         : September  2016
// Author       : Mark Addinall
// Synopsis     : This system is going to be coded using HTML5, Bootstrap 
//                and CSS3.  I am going to keep it as simple as possible
//                to maintain speed and ease of maintenance.  I am not
//                going to tie it to any frameworks at the moment.  KISS
//                until we see a need to add complexity.  This is a fairly
//                standard but pretty business/services rendeed type of
//                site.  RESPONSIVE and FLUID.  I may tie it to a CMS
//                of mine in the future.  Or I can just spend a few moments
//                a few times a year and do small mods myself as requested.
//                A HUGE CMS is overkill.
//
//                Just a small amount of Javascript mostly to handle
//                the contact form

(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	    
		//carousel active
        $(".carousel-inner .item:first-child").addClass("active");
		
		//Fixed nav on scroll
		$(document).scroll(function(e){
			var scrollTop = $(document).scrollTop();
			if(scrollTop > $('nav').height()){
				//console.log(scrollTop);
				$('nav').addClass('navbar-fixed-top');
			}
			else {
				$('nav').removeClass('navbar-fixed-top');
			}
		});
			
		//Portfolio Popup
		$('.magnific-popup').magnificPopup({type:'image'});
		
		
		
			
    });

	

    jQuery(window).load(function(){
		
		//Numaric Counter
		$('.counter').counterUp({
          delay: 10,
          time: 1000
        });		
				
		//Portfolio container			
		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
 
		$('.portfolioFilter a').on('click', function(){
			$('.portfolioFilter a').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 

	});

    //CONTACT FORM 
      
    $("#contact").submit(function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var subject = $("#cf-subject").val();
        var message = $("#cf-message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: dataString,
                success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                }
            });
        }
        else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }
        return false;
    });
	
	//Wow js
	new WOW().init();
	 
}(jQuery));	
