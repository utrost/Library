<?php
/** @var array $_ */
$settings = $_['thumbnailSettings'];
?>
<div class="section">
    <h2><?php p($l->t('Cover thumbnail cache')); ?></h2>
    <form method="post" action="<?php p($_['saveUrl']); ?>">
        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
        <p><label for="library-thumbnail-budget"><?php p($l->t('Cache budget per account (MiB)')); ?></label><span data-library-help><?php p($l->t('Maximum thumbnail data per account, divided across 256 shards. Set 0 to disable disk caching. Existing entries are trimmed gradually by maintenance.')); ?></span>
        <input id="library-thumbnail-budget" type="number" name="budgetMiB" min="0" max="1024" required value="<?php p($settings['budgetMiB']); ?>"></p>
        <p><label for="library-thumbnail-retention"><?php p($l->t('Retention (hours)')); ?></label><span data-library-help><?php p($l->t('Expired thumbnails are regenerated on demand and removed gradually by maintenance. Originals remain intact.')); ?></span>
        <input id="library-thumbnail-retention" type="number" name="retentionHours" min="1" max="720" required value="<?php p($settings['retentionHours']); ?>"></p>
        <button type="submit"><?php p($l->t('Save')); ?></button>
    </form>
</div>
