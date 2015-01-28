<div class="<?php print $classes ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if ($content['top']): ?>
    <div class="row-fluid">
      <?php print $content['top']; ?>
    </div>
  <?php endif ?>

  <?php if ($content['left'] || $content['middle'] || $content['right']): ?>
    <div class="row-fluid"> <!-- @TODO: Add extra classes -->
      <?php if (!empty($content['left'])): ?>
        <div class="col-md-3">
          <div class="sidebar">
            <?php print $content['left']; ?>
          </div>
        </div>
      <?php endif; ?>
      <?php 
        $middle_class = 'col-md-12'; 
        if (!empty($content['left'])) {
          if (!empty($content['right'])) {
            $middle_class = 'col-md-6';
          }
          else {
            $middle_class = 'col-md-9'; 
          }
        }
        else {
          if (!empty($content['right'])) {
            $middle_class = 'col-md-9';
          }
          else {
            $middle_class = 'col-md-12'; 
          }
        }
      ?>
      <div class="<?php print $middle_class; ?>">
        <?php print $content['middle']; ?>
      </div>
      <?php if (!empty($content['right'])): ?>
        <div class="col-md-3">
          <div class="sidebar">
            <?php print $content['right']; ?>
          </div>
        </div>
      <?php endif; ?>
    </div>
  <?php endif ?>

  <?php if ($content['bottom']): ?>
    <div class="row-fluid">
      <?php print $content['bottom']; ?>
    </div>
  <?php endif ?>
</div>
