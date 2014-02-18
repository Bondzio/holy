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
;
(function ($) {

/**
 * Show/hide the 'Email site administrator when updates are available' checkbox
 * on the install page.
 */
Drupal.hideEmailAdministratorCheckbox = function () {
  // Make sure the secondary box is shown / hidden as necessary on page load.
  if ($('#edit-update-status-module-1').is(':checked')) {
    $('.form-item-update-status-module-2').show();
  }
  else {
    $('.form-item-update-status-module-2').hide();
  }

  // Toggle the display as necessary when the checkbox is clicked.
  $('#edit-update-status-module-1').change( function () {
    $('.form-item-update-status-module-2').toggle();
  });
};

/**
 * Internal function to check using Ajax if clean URLs can be enabled on the
 * settings page.
 *
 * This function is not used to verify whether or not clean URLs
 * are currently enabled.
 */
Drupal.behaviors.cleanURLsSettingsCheck = {
  attach: function (context, settings) {
    // This behavior attaches by ID, so is only valid once on a page.
    // Also skip if we are on an install page, as Drupal.cleanURLsInstallCheck will handle
    // the processing.
    if (!($('#edit-clean-url').length) || $('#edit-clean-url.install').once('clean-url').length) {
      return;
    }
    var url = settings.basePath + 'admin/config/search/clean-urls/check';
    $.ajax({
      url: location.protocol + '//' + location.host + url,
      dataType: 'json',
      success: function () {
        // Check was successful. Redirect using a "clean URL". This will force the form that allows enabling clean URLs.
        location = settings.basePath +"admin/config/search/clean-urls";
      }
    });
  }
};

/**
 * Internal function to check using Ajax if clean URLs can be enabled on the
 * install page.
 *
 * This function is not used to verify whether or not clean URLs
 * are currently enabled.
 */
Drupal.cleanURLsInstallCheck = function () {
  var url = location.protocol + '//' + location.host + Drupal.settings.basePath + 'admin/config/search/clean-urls/check';
  // Submit a synchronous request to avoid database errors associated with
  // concurrent requests during install.
  $.ajax({
    async: false,
    url: url,
    dataType: 'json',
    success: function () {
      // Check was successful.
      $('#edit-clean-url').attr('value', 1);
    }
  });
};

/**
 * When a field is filled out, apply its value to other fields that will likely
 * use the same value. In the installer this is used to populate the
 * administrator e-mail address with the same value as the site e-mail address.
 */
Drupal.behaviors.copyFieldValue = {
  attach: function (context, settings) {
    for (var sourceId in settings.copyFieldValue) {
      $('#' + sourceId, context).once('copy-field-values').bind('blur', function () {
        // Get the list of target fields.
        var targetIds = settings.copyFieldValue[sourceId];
        // Add the behavior to update target fields on blur of the primary field.
        for (var delta in targetIds) {
          var targetField = $('#' + targetIds[delta]);
          if (targetField.val() == '') {
            targetField.val(this.value);
          }
        }
      });
    }
  }
};

/**
 * Show/hide custom format sections on the regional settings page.
 */
Drupal.behaviors.dateTime = {
  attach: function (context, settings) {
    for (var fieldName in settings.dateTime) {
      if (settings.dateTime.hasOwnProperty(fieldName)) {
        (function (fieldSettings, fieldName) {
          var source = '#edit-' + fieldName;
          var suffix = source + '-suffix';

          // Attach keyup handler to custom format inputs.
          $('input' + source, context).once('date-time').keyup(function () {
            var input = $(this);
            var url = fieldSettings.lookup + (/\?q=/.test(fieldSettings.lookup) ? '&format=' : '?format=') + encodeURIComponent(input.val());
            $.getJSON(url, function (data) {
              $(suffix).empty().append(' ' + fieldSettings.text + ': <em>' + data + '</em>');
            });
          });
        })(settings.dateTime[fieldName], fieldName);
      }
    }
  }
};

 /**
 * Show/hide settings for page caching depending on whether page caching is
 * enabled or not.
 */
Drupal.behaviors.pageCache = {
  attach: function (context, settings) {
    $('#edit-cache-0', context).change(function () {
      $('#page-compression-wrapper').hide();
      $('#cache-error').hide();
    });
    $('#edit-cache-1', context).change(function () {
      $('#page-compression-wrapper').show();
      $('#cache-error').hide();
    });
    $('#edit-cache-2', context).change(function () {
      $('#page-compression-wrapper').show();
      $('#cache-error').show();
    });
  }
};

})(jQuery);
;
