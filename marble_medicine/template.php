<?php

/**
 * @file
 * template.php
 */
function marble_medicine_js_alter(&$js) {
  $bootstrap_js_path = drupal_get_path('theme', 'bootstrap') . '/js/bootstrap.js';
  unset($js[$bootstrap_js_path]);  
  $isotope_js_path = drupal_get_path('module', 'views_isotope') . '/views_isotope.js';
  if (isset($js[$isotope_js_path])) {    
    unset($js[$isotope_js_path]);
    drupal_add_js(drupal_get_path('theme', 'marble') . '/js/views_isotope.js');
  } 
}

function marble_medicine_menu_tree__primary(&$variables) {
 return '<ul class="nav navbar-nav navbar-right">' . $variables['tree'] . '</ul>';
}

function marble_medicine_preprocess_page (&$variables) {
	$alias_parts = explode('/', drupal_get_path_alias());
  $theme_path = drupal_get_path('theme', 'marble');

  if (count($alias_parts) && $alias_parts[0] == 'home-page-two') {
    $variables['theme_hook_suggestions'][] = 'page__front';
    drupal_add_css($theme_path . '/css/owl.carousel.css');
    drupal_add_js($theme_path . '/js/owl.carousel.min.js');
  }
  elseif (count($alias_parts) && $alias_parts[0] == 'home-page-three') {
    $variables['theme_hook_suggestions'][] = 'page__front';    
    drupal_add_css($theme_path . '/css/owl.carousel.css');
    drupal_add_js($theme_path . '/js/owl.carousel.min.js');
  }
  elseif (count($alias_parts) && $alias_parts[0] == 'home-page-four') {
    $variables['theme_hook_suggestions'][] = 'page__front';    
  }
  elseif (count($alias_parts) && $alias_parts[0] == 'home-page-five') {
    $variables['theme_hook_suggestions'][] = 'page__front';    
  }
  elseif (count($alias_parts) && $alias_parts[0] == 'contact') {
    drupal_add_js('http://maps.google.com/maps/api/js?sensor=false', array('type' => 'external'));
    drupal_add_js($theme_path . '/js/gmap3.min.js');
  } 	

  // 404 redirect
  $status = drupal_get_http_header("status");  
  if($status == "404 Not Found") {    
    // get the configured 404 error page url :
    $not_found_url = variable_get('site_404');
    unset($_GET['destination']);
    drupal_goto($not_found_url);
  }

  // Add information about the number of sidebars.
  if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-md-6"';
  }
  elseif (!empty($variables['page']['sidebar_first']) || !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-md-9"';
  }
  else {
    $variables['content_column_class'] = ' class="col-md-12"';
  }
}

function marble_medicine_menu_link(array $variables) {
   $element = $variables['element'];
  $sub_menu = '';
  
  if ($element['#below']) {
   
    // Prevent dropdown functions from being added to management menu as to not affect navbar module.
    if (($element['#original_link']['menu_name'] == 'management') && (module_exists('navbar'))) {
      $sub_menu = drupal_render($element['#below']);
    }
    else {
     
      // Add our own wrapper
      unset($element['#below']['#theme_wrappers']);
      if ($element['#original_link']['depth'] >= 2) {
      	$sub_menu = '<ul class="drop-down level3">' . drupal_render($element['#below']) . '</ul>';
      }
      else {
      	$sub_menu = '<ul class="drop-down">' . drupal_render($element['#below']) . '</ul>';	
      }
      
      $element['#localized_options']['attributes']['class'][] = 'dropdown-toggle';
      $element['#localized_options']['attributes']['data-toggle'] = 'dropdown';
     
      // Check if this element is nested within another
      if ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] > 1)) {
        // Generate as dropdown submenu
        $element['#attributes']['class'][] = 'drop';
        $sub_menu = '<i class="fa fa-angle-right pull-right"></i>' . $sub_menu;
      }
      else {
        // Generate as standard dropdown
        $element['#attributes']['class'][] = 'drop';
        $element['#localized_options']['html'] = TRUE;        
      }
     
      // Set dropdown trigger element to # to prevent inadvertant page loading with submenu click
      $element['#localized_options']['attributes']['data-target'] = '#';       
    }
  }
  // Issue #1896674 - On primary navigation menu, class 'active' is not set on active menu item.
  // @see http://drupal.org/node/1896674
  if (($element['#href'] == $_GET['q'] || ($element['#href'] == '<front>' && drupal_is_front_page())) && (empty($element['#localized_options']['language']) || $element['#localized_options']['language']->language == $language_url->language)) {
     $element['#attributes']['class'][] = 'active';
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/**
 * Implements hook_form_alter().
 */
function marble_medicine_form_alter(array &$form, array &$form_state = array(), $form_id = NULL) {
  if ($form_id) {
    // IDs of forms that should be ignored. Make this configurable?
    // @todo is this still needed?
    $form_ids = array(
      'node_form',
      'system_site_information_settings',
      'user_profile_form',
      'node_delete_confirm',
    );
    // Only wrap in container for certain form.
    if (!in_array($form_id, $form_ids) && !isset($form['#node_edit_form']) && isset($form['actions']) && isset($form['actions']['#type']) && ($form['actions']['#type'] == 'actions')) {
      $form['actions']['#theme_wrappers'] = array();
    }

    switch ($form_id) {      
      case 'search_block_form':      	
      	foreach ($form['#attributes']['class'] as $key => $value) {
      		if ($value == 'form-search') {
      			unset($form['#attributes']['class'][$key]);      			
      		}
      	}                    	
        break;
    }

  }
}

function marble_medicine_theme() {
  return array(
    'contact_site_form' => array(
    'render element' => 'form',
    'template' => 'contact-site-form',
    'path' => drupal_get_path('theme', 'marble').'/templates/block',
    ),
  );
}