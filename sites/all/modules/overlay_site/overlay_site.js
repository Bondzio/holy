jQuery(document).ready(function(){    




jQuery('body:not(.ie) #zone-branding').css('position','relative').append('<div id="overlay_site"></div><div id="overlay_controls_wrap"><div id="overlay_control" class="overlay_controls_box">*</div><div id="overlay_control_dark" class="overlay_controls_box">-</div><div id="overlay_control_light" class="overlay_controls_box">+</div><div id="overlay_control_opacity" class="overlay_controls_box"></div></div>');//+

// '<div id="ruler" style="position:fixed;top:0px;left:20px;background:red;width:1px;height:100%"></div>');
 jQuery('#overlay_control').bind("click", function(e){
    jQuery('#overlay_site').toggle();
//    jQuery('body').toggleClass("overflow");
 });
 jQuery('#overlay_control_light').bind("click", function(e){
    overlay_control_light();
 });
 jQuery('#overlay_control_dark').bind("click", function(e){
    
     overlay_control_dark();
 });
 
 function overlay_control_light(){
     jQuery('#overlay_site').css("opacity", function(index,val) {
        var overlay_control_opacity = val * 1.1;
        jQuery('#overlay_control_opacity').html(Math.floor(overlay_control_opacity*100));
        return overlay_control_opacity;
    });
 }
 function overlay_control_dark(){
     jQuery('#overlay_site').css("opacity", function(index,val) {
        var overlay_control_opacity =  val - (val * .1);
        jQuery('#overlay_control_opacity').html(Math.floor(overlay_control_opacity*100));
        return overlay_control_opacity;
     });
     
 };
 jQuery(window).bind("keyup", function(e){
     console.log(e.which);
     if(e.ctrlKey){
        if(e.which == 40 ){
//            console.log("down");
            overlay_control_dark();
        }
        if(e.which == 38 ){
//            console.log("up");
            overlay_control_light();
        }
        if(e.which == 32 ){
            jQuery('#overlay').toggle();
        }
     }
     
 });
 
 jQuery('body.front #overlay_site').css("background","url(/sites/all/modules/overlay_site/front.jpg)");
  jQuery('body.page-node-1 #overlay_site').css("background","url(/sites/all/modules/overlay_site/about1css.jpg )");
 jQuery('body.page-participants #overlay_site').css("background","url(/sites/all/modules/overlay_site/participants.jpg)");
 jQuery('body.node-type-participants #overlay_site').css({
	 "background":"url(/sites/all/modules/overlay_site/participants2css.jpg)",
	 "top" : "-4px"
 });
 
 jQuery('body.node-type-sites #overlay_site').css("background","url(/sites/all/modules/overlay_site/siteoftheprojects-fildsnote.jpg)");

});
