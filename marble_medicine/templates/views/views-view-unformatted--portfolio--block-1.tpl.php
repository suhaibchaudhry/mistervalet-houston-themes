<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<div id="owl-portfolio2" class="owl-carousel owl-theme">
	<?php $i = 0; ?>
	<?php foreach ($rows as $id => $row): ?>
		<?php if ($i%2 == 0): ?>
	  	<div class="item">	  		
	  		<?php print $row; ?>
	  <?php else: ?>
	  		<?php print $row; ?>
	  	</div>
		<?php endif; ?>	    
		<?php $i++; ?>
	<?php endforeach; ?>
</div>