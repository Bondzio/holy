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
