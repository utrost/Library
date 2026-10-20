<?php
declare(strict_types=1);
/** @var array $_ */
$review = $_['review'];
$base = $_['baseUrl'];
$_['maintenanceActive'] = 'languages';
?>
<div id="app-content" class="library-maintenance-shell">
    <?php include __DIR__ . '/maintenance-navigation.php'; ?>
    <main class="library-maintenance-main">
        <p class="library-maintenance-back"><a href="<?php p($_['catalogueUrl']); ?>">← <?php p($l->t('Library')); ?></a></p>
        <header class="library-maintenance-header">
            <h1><?php p($l->t('Review source languages')); ?></h1>
            <p class="library-muted"><?php p($l->t('Clear language names and codes are normalized automatically. Review only values Library could not interpret safely. Original source values are retained.')); ?></p>
        </header>
        <?php if ($_['message'] !== ''): ?><p class="library-maintenance-notice" role="status"><?php p(match ($_['message']) { 'saved'=>$l->t('Decision saved.'), 'invalid'=>$l->t('Enter one or more valid language codes.'), 'discovered'=>$l->t('Discovery advanced.'), 'applied'=>$l->t('Approved mappings advanced.'), default=>'' }); ?></p><?php endif; ?>
        <div class="library-maintenance-toolbar">
            <p><?php p($l->n('%n book still needs language discovery.', '%n books still need language discovery.', (int)$review['remaining'])); ?></p>
            <div class="library-maintenance-actions">
                <form action="<?php p($base . '/discover'); ?>" method="post"><input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>"><button class="button secondary" type="submit" <?php if ((int)$review['remaining'] === 0) print_unescaped('disabled'); ?>><?php p($l->t('Discover existing books')); ?></button></form>
                <form action="<?php p($base . '/apply'); ?>" method="post"><input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>"><button class="button secondary" type="submit"><?php p($l->t('Continue applying saved mappings')); ?></button></form>
            </div>
        </div>
        <?php if ($review['suggestions'] === []): ?><p class="library-maintenance-empty"><?php p($l->t('No language values need review.')); ?></p><?php endif; ?>
        <div class="library-maintenance-card-list">
        <?php foreach ($review['suggestions'] as $suggestion): ?>
            <section class="library-maintenance-card">
                <div class="library-maintenance-card-heading"><h2><bdi dir="auto"><?php p($suggestion['source_value']); ?></bdi></h2><span class="library-maintenance-count"><?php p($l->n('%n matching book', '%n matching books', (int)$suggestion['book_count'])); ?></span></div>
                <form class="library-maintenance-decision" action="<?php p($base . '/' . $suggestion['source_key'] . '/decide'); ?>" method="post">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                    <div class="library-review-values"><div><strong><?php p($l->t('Current value')); ?></strong><p><bdi dir="auto"><?php p($suggestion['source_value']); ?></bdi></p></div><div><strong><?php p($l->t('Proposed value')); ?></strong>
                    <div data-library-language-picker hidden></div>
                    <label><?php p($l->t('Map to language codes, separated by semicolons')); ?><input name="codes" type="text" maxlength="64" placeholder="<?php p($l->t('en; de')); ?>" required></label></div></div>
                    <button class="button primary" name="action" value="map" type="submit"><?php p($l->t('Save mapping and apply next 100 books')); ?></button>
                    <button class="button secondary" name="action" value="ignore" type="submit" formnovalidate><?php p($l->t('Ignore value')); ?></button>
                </form>
            </section>
        <?php endforeach; ?>
        </div>
        <?php if ($review['hasNext']): ?><p class="library-muted"><?php p($l->t('Review these values to reveal more suggestions.')); ?></p><?php endif; ?>
    </main>
</div>
