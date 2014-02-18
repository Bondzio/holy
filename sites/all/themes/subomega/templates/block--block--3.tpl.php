<?php $tag = $block->subject ? 'section' : 'div'; ?>
<<?php print $tag; ?><?php print $attributes; ?>>
  <div class="block-inner clearfix">
    <?php print render($title_prefix); ?>
    <?php if ($block->subject): ?>
      <h2<?php print $title_attributes; ?>><?php print $block->subject; ?></h2>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    
    <div<?php print $content_attributes; ?>>
      	<?php 
	$date = preg_replace('/\//i', '.', variable_get("last_modified"));
	print preg_replace('/<span id="last_mod">Last Modified/i', '<span id="last_mod">Last Modified '.$date , $content);
	?>
    </div>
  </div>
</<?php print $tag; ?>>
