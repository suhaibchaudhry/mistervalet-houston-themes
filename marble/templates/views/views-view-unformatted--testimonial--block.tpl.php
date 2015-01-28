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
<?php $i = 0; ?>
<div class="container">
	<ul class="bxslider">
		<?php foreach ($rows as $id => $row): ?>
			<?php if ($i%3 == 0): ?>
				<li>
					<div class="row">
		  			<div class="col-sm-4">
		  				<?php print $row; ?>
						</div>
		  <?php else: ?>
			  		<div class="col-sm-4">
		  				<?php print $row; ?>
						</div>
		  	<?php if ($i%3 == 2): ?>
		  			</div>
		  		</li>
				<?php endif; ?>
			<?php endif; ?>	    
			<?php $i++; ?>
		<?php endforeach; ?>	
	</ul>
</div>		
