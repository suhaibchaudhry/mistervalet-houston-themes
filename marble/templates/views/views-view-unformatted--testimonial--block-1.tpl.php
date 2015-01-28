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

<div class="container">
	<ul class="bxslider">
		<?php foreach ($rows as $id => $row): ?>			
				<li>
					<div class="testimonial-post triggerAnimation animated" data-animate="flipInX">					
  					<?php print $row; ?>
  				</div>
				</li>		  
		<?php endforeach; ?>	
	</ul>
</div>		
