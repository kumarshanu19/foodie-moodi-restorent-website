/**** Parallax Script ****/


$(document).ready(function() {
        
		
		$('.parralx-nav').onePageNav({
		filter: ':not(.external)',
		scrollThreshold: 0.25,
		scrollOffset: 90,
	});
      });


			  
// Animation Effects
    
    	(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)
		
		jQuery(window).scroll(function(event) {
  
		  jQuery(".animate").each(function(i, el) {
			var el = jQuery(el);
			if (el.visible(true)) {
			  el.addClass("start"); 
			}
		  });
		  
		});
    	  
	  
	