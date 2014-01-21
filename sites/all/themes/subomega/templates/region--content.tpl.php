<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>  
    <?php print render($title_prefix); ?>

<?php  
  if (arg(0) == 'node' && is_numeric(arg(1)) ) {
  // Get the nid
  $nid = arg(1);

  // Load the node if you need to
  $node = node_load($nid);
	if($node->type =="participants"){
	  print '<h2 class="title node_type" id="page-title">'.$node->type.'</h2>';
	}else {
  	 print '<h2 class="title node_type" id="page-title">'.$node->title.'</h2>';  	 
	}
  } else {
  	 print '<h1 class="title" id="page-title">'.$title.'</h1>';
  }
?>
 <?php print render($title_suffix); ?>

  <?php if ($tabs && !empty($tabs['#primary'])): ?><div class="tabs clearfix"><?php print render($tabs); ?></div><?php endif; ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>

<?php
print $content; 
?>
</div>
</div>

