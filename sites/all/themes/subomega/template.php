<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */


function subomega_page_alter(&$vars) {
	if(isset( $vars["header"]["menu"]["menu"])){
		if(isset( $vars["header"]["menu"]["menu"]["system_main-menu"])){
			$vars["footer"]["footer"]["footer_first"]["footer_main-menu"] = $vars["header"]["menu"]["menu"]["system_main-menu"];
			$vars["footer"]["footer"]["footer_first"]["footer_main-menu"]['#weight'] = 100;
			if(drupal_is_front_page()){
				$vars["content"]["menu"] = $vars["header"]["menu"];
				//$vars["content"]["menu"]["system_main-menu"]['#weight'] = 100;
				unset($vars["header"]["menu"]["menu"]["system_main-menu"]);
				unset($vars["content"]["menu"]["menu"]["block_6"]);
			}	
		}    
	}
}

function subomega_process_zone(&$vars) {
if ($vars['elements']['#zone'] == 'branding') {
	 $theme = alpha_get_theme();

    $vars['site_name'] = $theme->page['site_name'];
        $vars['linked_site_name'] = l($vars['site_name'], '<front>', array('attributes' => array('title' => t('Home')), 'html' => TRUE));
        $vars['site_slogan'] = $theme->page['site_slogan'];
        $vars['site_name_hidden'] = $theme->page['site_name_hidden'];
        $vars['site_slogan_hidden'] = $theme->page['site_slogan_hidden'];
        $vars['logo'] = $theme->page['logo'];
        $vars['logo_img'] = $vars['logo'] ? '<img src="' . $vars['logo'] . '" alt="' . check_plain($vars['site_name']) . '" id="logo" />' : '';
        $vars['linked_logo_img'] = $vars['logo'] ? l($vars['logo_img'], '<front>', array('attributes' => array('rel' => 'home', 'title' => check_plain($vars['site_name'])), 'html' => TRUE)) : '';
  }
	
}
function subomega_process_region(&$vars) {
if ($vars['elements']['#region'] == 'content') {
	 $theme = alpha_get_theme();

    $vars['site_name'] = $theme->page['site_name'];
        $vars['linked_site_name'] = l($vars['site_name'], '<front>', array('attributes' => array('title' => t('Home')), 'html' => TRUE));
        $vars['site_slogan'] = $theme->page['site_slogan'];
        $vars['site_name_hidden'] = $theme->page['site_name_hidden'];
        $vars['site_slogan_hidden'] = $theme->page['site_slogan_hidden'];
        $vars['logo'] = $theme->page['logo'];
        $vars['logo_img'] = $vars['logo'] ? '<img src="' . $vars['logo'] . '" alt="' . check_plain($vars['site_name']) . '" id="logo" />' : '';
        $vars['linked_logo_img'] = $vars['logo'] ? l($vars['logo_img'], '<front>', array('attributes' => array('rel' => 'home', 'title' => check_plain($vars['site_name'])), 'html' => TRUE)) : '';
  }
	
}
/* function subomega_process_zone(&$vars) {
	if ($vars['elements']['#zone'] == 'branding') {
	 $theme = alpha_get_theme();

	 $vars['site_name'] = $theme->page['site_name'];
	 $vars['linked_site_name'] = l($vars['site_name'], '<front>', array('attributes' => array('title' => t('Home')), 'html' => TRUE));
	 $vars['site_slogan'] = $theme->page['site_slogan'];
	 $vars['site_name_hidden'] = $theme->page['site_name_hidden'];
	 $vars['site_slogan_hidden'] = $theme->page['site_slogan_hidden'];
	 $vars['logo'] = $theme->page['logo'];
	 $vars['logo_img'] = $vars['logo'] ? '<img src="' . $vars['logo'] . '" alt="' . check_plain($vars['site_name']) . '" id="logo" />' : '';
	 $vars['linked_logo_img'] = $vars['logo'] ? l($vars['logo_img'], '<front>', array('attributes' => array('rel' => 'home', 'title' => check_plain($vars['site_name'])), 'html' => TRUE)) : '';
	}

} */
function subomega_breadcrumb($breadcrumb) {
   if (!empty($breadcrumb)) {
       $length = count($breadcrumb["breadcrumb"]);
       if(isset($breadcrumb["breadcrumb"][$length-1])){
        $breadcrumb["breadcrumb"][$length-1] = '<span class="last">'.$breadcrumb["breadcrumb"][$length-1].'</span>';
       }
     return '<div class="breadcrumb">'. implode(' <span class="breadcrumb_sep">>></span> ', $breadcrumb["breadcrumb"]) .'</div>';
   }
}

 if (module_exists('libraries')) {
    $path = libraries_get_path('jquery.cycle');
    if (file_exists($path . '/jquery.cycle.all.min.js')) drupal_add_js($path . '/jquery.cycle.all.min.js');
    elseif (file_exists($path . '/jquery.cycle.all.js')) drupal_add_js($path . '/jquery.cycle.all.js');
 }


function subomega_preprocess_node(&$variables){
	if( $variables["type"] == "sites" && isset($variables["field_background"]) ){
		hide($variables["content"]["field_background"]);
		$image = file_create_url($variables["field_background"][0]['uri']);
		drupal_add_css('#section-content{background-image: url('.$image.') !important;}', "inline");
		
	}
}
function subomega_preprocess_html(&$vars) {
	// Setup IE meta tag to force IE rendering mode
	$meta_ie_render_engine = array(
			'#type' => 'html_tag',
			'#tag' => 'meta',
			'#attributes' => array(
					'content' =>  'IE=9',
					'http-equiv' => 'X-UA-Compatible',
			)
	);

	// Add header meta tag for IE to head
	drupal_add_html_head($meta_ie_render_engine, 'meta_ie_render_engine');
}