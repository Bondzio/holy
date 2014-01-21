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
		}    
	}
}

function subomega_process_zone(&$vars) {
if ($vars['elements']['#zone'] == 'content') {
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
function subomega_breadcrumb($breadcrumb) {
   if (!empty($breadcrumb)) {
       $length = count($breadcrumb["breadcrumb"]);
       if(isset($breadcrumb["breadcrumb"][$length-1])){
        $breadcrumb["breadcrumb"][$length-1] = '<span class="last">'.$breadcrumb["breadcrumb"][$length-1].'</span>';
       }
     return '<div class="breadcrumb">'. implode(' <span class="breadcrumb_sep">>></span> ', $breadcrumb["breadcrumb"]) .'</div>';
   }
}