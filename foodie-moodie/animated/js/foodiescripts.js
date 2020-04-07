
$(document).on("ready", function() {
/* - Parallax - */
		'use strict';
		$('.parralax-nav').onePageNav({
			filter: ':not(.external)',
			scrollThreshold: 0.25,
			scrollOffset: 90,
		});
/* - Parallax - end */


/* - Navbar Scroll Fixed - */
	(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

	$(window).scroll (function () {
		var sT = $(this).scrollTop();
			if (sT >= 150) {
				$('.navbar-fixed-top').addClass('foodieup')
			}else {
				$('.navbar-fixed-top').removeClass('foodieup')
		}
/* - Navbar Scroll Fixed - ends */
		
/* - Animate Function - */
		jQuery(".animate").each(function(i, el) {
			var el = jQuery(el);
			if (el.visible(true)) {
			  el.addClass("start"); 
			}
		  });

	})
	
/* - Carausels - */
		$('.carousel').carousel({interval: 10000}); /* - Slider -*/
		
		var owl = $("#owl-demo"); /* - Team one by one Scroll - */
		 
		  owl.owlCarousel({
			items : 4, //10 items above 1000px browser width
			itemsDesktop : [1000,3], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,2], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [380,1], // itemsMobile disabled - inherit from itemsTablet option
			  
			slideSpeed : [200],
			paginationSpeed : [2000],
			rewindSpeed : [1],
			autoPlay : true,
			stopOnHover : true,
		
			pagination : false,

			  
			  
		  });
		 
		  // Custom Navigation Events
		  $(".next").on("click", function(){
			owl.trigger('owl.next');
		  })
		  $(".prev").on("click", function(){
			owl.trigger('owl.prev');
		  })

});
