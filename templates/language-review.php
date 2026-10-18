<?php
declare(strict_types=1);
/** @var array $_ */
$review = $_['review'];
$base = $_['baseUrl'];
?>
<div id="app-content" style="overflow:auto;padding:24px;max-width:1040px">
    <p><a href="<?php p($_['catalogueUrl']); ?>">← <?php p($l->t('Library')); ?></a></p>
    <h1><?php p($l->t('Review source languages')); ?></h1>
    <p><?php p($l->t('Clear language names and codes are normalized automatically. Review only values Library could not interpret safely. Original source values are retained.')); ?></p>
    <?php if ($_['message'] !== ''): ?><p role="status"><?php p(match ($_['message']) { 'saved'=>$l->t('Decision saved.'), 'invalid'=>$l->t('Enter one or more valid language codes.'), 'discovered'=>$l->t('Discovery advanced.'), 'applied'=>$l->t('Approved mappings advanced.'), default=>'' }); ?></p><?php endif; ?>
    <p><?php p($l->n('%n book still needs language discovery.', '%n books still need language discovery.', (int)$review['remaining'])); ?></p>
    <form action="<?php p($base . '/discover'); ?>" method="post" style="display:inline-block;margin:0 8px 16px 0"><input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>"><button type="submit"><?php p($l->t('Discover existing books')); ?></button></form>
    <form action="<?php p($base . '/apply'); ?>" method="post" style="display:inline-block;margin:0 0 16px"><input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>"><button type="submit"><?php p($l->t('Apply approved mappings')); ?></button></form>
    <?php if ($review['suggestions'] === []): ?><p><?php p($l->t('No language values need review.')); ?></p><?php endif; ?>
    <?php foreach ($review['suggestions'] as $suggestion): ?>
        <section style="border:1px solid var(--color-border);border-radius:10px;padding:16px;margin:12px 0">
            <h2><?php p($suggestion['source_value']); ?></h2>
            <p><?php p($l->n('%n matching book', '%n matching books', (int)$suggestion['book_count'])); ?></p>
            <form action="<?php p($base . '/' . $suggestion['source_key'] . '/decide'); ?>" method="post">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                <label><?php p($l->t('Map to language codes, separated by semicolons')); ?> <input name="codes" type="text" maxlength="64" placeholder="en; de" required></label>
                <button name="action" value="map" type="submit"><?php p($l->t('Apply to matching books')); ?></button>
                <button name="action" value="ignore" type="submit" formnovalidate><?php p($l->t('Ignore value')); ?></button>
            </form>
        </section>
    <?php endforeach; ?>
    <?php if ($review['hasNext']): ?><p><?php p($l->t('Review these values to reveal more suggestions.')); ?></p><?php endif; ?>
</div>
