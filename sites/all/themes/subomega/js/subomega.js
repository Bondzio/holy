Drupal.avishay = {};
Drupal.avishay.isMSIE = /*@cc_on!@*/0;



jQuery(document).ready(function(){
jQuery('[href^=http]').attr("target","_blank");
//var sitename = jQuery(".front .site-name a").text().replace(/Sacred Sites in a/i, "");
var sitename = jQuery(".front .site-name a").text().replace(/Sacred Sites in /i, "");
jQuery(".front .site-name a").text(sitename).prepend('<hr/>').prepend('Sacred Sites in');
	jQuery(".view-participants.view-display-id-block_1").prepend(jQuery('<div/>').css({
	  "border-top": "1px dotted",
	    "height": "2px",
	    "width": "90%"}));
	jQuery(".field-name-body .field-item ").jScrollPane();
	
	if(jQuery(".page-participants").length){
		if(jQuery("#block-system-main").height() > 680){
			var h =jQuery("#block-system-main").width();
			jQuery("#block-system-main").width(h+20).height(680).jScrollPane();

		}
	}
/* 
 * sites of project -- ## start
 * */
var node_type_sites = jQuery(".node-type-sites");
if(node_type_sites.length ){
		
	/* field notes & videos*/ 	
	var buttons = jQuery('<div class="buttons"><div id="field_notes"></div><div id="video"></div></div>');
	jQuery('#field_notes', buttons).bind("click", function(e){				
		jQuery('body').removeClass("video").toggleClass("field_notes");		
		Drupal.avishay.scroll("article");
	});
	jQuery('#video', buttons).bind("click", function(e){				
		jQuery('body').removeClass("field_notes").toggleClass("video");		
		Drupal.avishay.scroll("article");
	});	
	jQuery("article.node-sites", node_type_sites ).append(buttons);
	
	/*	
	 
	*/
	jQuery(".field-name-field-location").wrap('<div class="location_and_dates_wrap">').append(jQuery('.field-name-field-speical-dates'));
	
	
	/* sites of project - slideshow */ 
	var dialog = jQuery("article .field-name-field-images ");
	jQuery(dialog).append(jQuery('<div id="nav"></div>')).prepend(jQuery('<div id="controls"><div id="next">next</div><div id="prev">prev</div></div>'));
				jQuery(" .field-items", dialog).cycle({
					fx : 'scrollHorz',
					//pagerAnchorBuilder : pagerFactory,
					prev: '#next',
					next: '#prev', 
					//pager : '#nav',
					//timeout : 0,
					// rev : true,
					 nowrap: 1,
					   //before: onAfter,
					   after: 
//						   Drupal.avishay.fixSlideshow(dialog), 
						   function(){
						   var h = jQuery(" img:visible", dialog).height();
						   jQuery(".field-items", dialog).animate({"height":h},"fast");
						 //  .css("max-height", h+'px');
						   console.log("after");
					   },
					   slideResize: 1,
					   containerResize: 1
					   
				});
}
jQuery(".page-node-36").addClass("node-type-sites");

/* 
 * sites of project -- ## END
 * */	
/*
// Full body scroll
	jQuery(function()
			{
				var win = jQuery(window);
				// Full body scroll
				var isResizing = false;
				win.bind(
					'resize',
					function()
					{
						if (!isResizing) {
							isResizing = true;
							var container = jQuery('#page');
							// Temporarily make the container tiny so it doesn't influence the
							// calculation of the size of the document
							container.css(
								{
									'width': 1,
									'height': 1
								}
							);
							// Now make it the size of the window...
							container.css(
								{
									'width': win.width(),
									'height': win.height()
								}
							);
							isResizing = false;
							container.jScrollPane(
								{
									'showArrows': true
								}
							);
						}
					}
				).trigger('resize');

				// Workaround for known Opera issue which breaks demo (see
				// http://jscrollpane.kelvinluck.com/known_issues.html#opera-scrollbar )
				jQuery('body').css('overflow', 'hidden');

				// IE calculates the width incorrectly first time round (it
				// doesn't count the space used by the native scrollbar) so
				// we re-trigger if necessary.
				if (jQuery('#page').width() != win.width()) {
					win.trigger('resize');
				}

				// Internal scrollpanes
				jQuery('.scroll-pane').jScrollPane({showArrows: true});
			});*/
});


Drupal.avishay.fixSlideshow = function(dialog){
	var count = 0 ;
	timer = window.setInterval(function(){		
		if(count < 20){
			var h = jQuery(" img", dialog).first().height();
			if(h > 100){
				jQuery(".field-items", dialog).once().animate({
					"height" : jQuery("div.field-items img", dialog).first().height()
				},"slow",function(){
					jQuery("#nav").show("fast").css("display", "inline");
					window.clearInterval(timer);
				});	
			}
			//console.log(h);
//			jQuery(".field-name-field-gallery .field-items", dialog).height();
//			console.log("tick");
			count++;
		} else {
			window.clearInterval(timer);
		}
			
	},100);
}
Drupal.avishay.scroll = function(elm){
	jQuery(window).scrollTop(jQuery(elm).offset().top-50);
}
function onAfter(curr, next, opts, fwd) {
     var ht = jQuery(this).height();

     //set the container's height to that of the current slide
//     jQuery(this).parent().animate({height: ht});
}
