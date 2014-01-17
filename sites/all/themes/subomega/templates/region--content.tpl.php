<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>  
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
print $content; 
?>
</div>
</div>

