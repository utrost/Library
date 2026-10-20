<?php
declare(strict_types=1);
/** @var array $_ */
$field = $_['field'];
$base = $_['baseUrl'];
$preview = $_['preview'];
$_['maintenanceActive'] = 'mappings';
?>
<div id="app-content" class="library-maintenance-shell">
    <?php include __DIR__ . '/maintenance-navigation.php'; ?>
    <main class="library-maintenance-main">
        <p class="library-maintenance-back"><a href="<?php p($_['catalogueUrl']); ?>">← <?php p($l->t('Library')); ?></a></p>
        <header class="library-maintenance-header">
            <h1><?php p($l->t('Group publisher and subject variants')); ?></h1>
            <p class="library-muted"><?php p($l->t('Mappings group values for browsing and search. Each book keeps its original metadata. Removing a mapping immediately restores separate results.')); ?></p>
        </header>
        <?php if ($_['message'] !== ''): ?><p class="library-maintenance-notice" role="status"><?php p(match ($_['message']) { 'saved'=>$l->t('Mapping saved.'), 'removed'=>$l->t('Mapping removed.'), default=>$l->t('Choose two different values used by your library.') }); ?></p><?php endif; ?>
        <nav class="library-maintenance-tabs" aria-label="<?php p($l->t('Metadata values')); ?>">
            <a class="button <?php p($field === 'publisher' ? 'primary' : 'secondary'); ?>" href="<?php p($base . '?field=publisher'); ?>"<?php if ($field === 'publisher') print_unescaped(' aria-current="page"'); ?>><?php p($l->t('Publishers')); ?></a>
            <a class="button <?php p($field === 'subject' ? 'primary' : 'secondary'); ?>" href="<?php p($base . '?field=subject'); ?>"<?php if ($field === 'subject') print_unescaped(' aria-current="page"'); ?>><?php p($l->t('Subjects')); ?></a>
        </nav>
        <section class="library-maintenance-card" aria-labelledby="library-mapping-find-heading">
            <h2 id="library-mapping-find-heading"><?php p($l->t('1. Find an existing value')); ?></h2>
            <form class="library-maintenance-search" action="<?php p($base); ?>" method="get">
                <input type="hidden" name="field" value="<?php p($field); ?>">
                <label><?php p($l->t('Search values (at least three characters)')); ?><input name="search" type="search" minlength="3" value="<?php p($_['search']); ?>" placeholder="<?php p($l->t('Search publishers')); ?>"></label>
                <button class="button secondary" type="submit"><?php p($l->t('Search')); ?></button>
            </form>
            <?php if ($_['values'] !== []): ?><ul class="library-maintenance-value-list"><?php foreach ($_['values'] as $entry): ?><li><span><bdi dir="auto"><?php p($entry['facet_value']); ?></bdi> <small><?php p($l->n('%n book', '%n books', (int)$entry['book_count'])); ?></small></span><a class="button secondary" href="<?php p($base . '?field=' . rawurlencode($field) . '&search=' . rawurlencode($_['search']) . '&source=' . rawurlencode($entry['facet_value']) . '#library-mapping-preview-heading'); ?>"><?php p($l->t('Use as source')); ?></a></li><?php endforeach; ?></ul><?php endif; ?>
            <?php if ($_['search'] !== '' && $_['values'] === []): ?><p class="library-muted"><?php p($l->t('No matching values found.')); ?></p><?php endif; ?>
        </section>
        <section class="library-maintenance-card" aria-labelledby="library-mapping-preview-heading">
            <h2 id="library-mapping-preview-heading"><?php p($l->t('2. Preview a mapping')); ?></h2>
            <form class="library-maintenance-mapping-form" action="<?php p($base . '/preview'); ?>" method="post">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                <input type="hidden" name="field" value="<?php p($field); ?>">
                <label title="<?php p($l->t('Enter a value already used by at least one book.')); ?>"><?php p($l->t('Source value')); ?><input name="source" type="text" maxlength="255" required list="library-source-values" value="<?php p($preview['source'] ?? $_['selectedSource']); ?>" placeholder="<?php p($l->t('Existing spelling')); ?>"></label>
                <label title="<?php p($l->t('Books keep their source value; this label groups them for browsing.')); ?>"><?php p($l->t('Preferred label')); ?><input name="target" type="text" maxlength="255" required list="library-source-values" value="<?php p($preview['target'] ?? ''); ?>" placeholder="<?php p($l->t('Name to browse under')); ?>"></label>
                <datalist id="library-source-values"><?php foreach ($_['values'] as $entry): ?><option value="<?php p($entry['facet_value']); ?>"></option><?php endforeach; ?></datalist>
                <button class="button secondary" type="submit"><?php p($l->t('Preview affected books')); ?></button>
            </form>
            <?php if ($preview !== null): ?>
                <div class="library-maintenance-preview" role="status">
                    <dl class="library-review-values"><div><dt><?php p($l->t('Current value')); ?></dt><dd><bdi dir="auto"><?php p($preview['source']); ?></bdi></dd></div><div><dt><?php p($l->t('Proposed value')); ?></dt><dd><bdi dir="auto"><?php p($preview['target']); ?></bdi></dd></div></dl>
                    <strong><?php p($l->n('%n book uses this source value.', '%n books use this source value.', $preview['count'])); ?></strong>
                    <?php if ($preview['books'] !== []): ?><ul><?php foreach ($preview['books'] as $book): ?><li><?php p($book['title']); ?></li><?php endforeach; ?></ul><?php endif; ?>
                    <?php if ($preview['count'] > 0): ?><form action="<?php p($base . '/save'); ?>" method="post">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                        <input type="hidden" name="field" value="<?php p($field); ?>">
                        <input type="hidden" name="source" value="<?php p($preview['source']); ?>">
                        <input type="hidden" name="target" value="<?php p($preview['target']); ?>">
                        <button class="button primary" type="submit"><?php p($l->t('Save mapping')); ?></button>
                    </form><?php endif; ?>
                </div>
            <?php endif; ?>
        </section>
        <section class="library-maintenance-card" aria-labelledby="library-mapping-saved-heading">
            <h2 id="library-mapping-saved-heading"><?php p($l->t('Saved mappings')); ?></h2>
            <?php if ($_['mappings'] === []): ?><p class="library-muted"><?php p($l->t('No mappings yet.')); ?></p><?php endif; ?>
            <?php foreach (array_slice($_['mappings'], 0, 200) as $mapping): ?>
                <div class="library-maintenance-mapping-row">
                    <span><bdi dir="auto"><?php p($mapping['source_value']); ?></bdi> → <bdi dir="auto"><?php p($mapping['target_value']); ?></bdi></span>
                    <form action="<?php p($base . '/' . $mapping['source_key'] . '/remove'); ?>" method="post">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                        <input type="hidden" name="field" value="<?php p($field); ?>">
                        <button class="button secondary" type="submit"><?php p($l->t('Remove mapping')); ?></button>
                    </form>
                </div>
            <?php endforeach; ?>
            <?php if (count($_['mappings']) > 200): ?><p class="library-muted"><?php p($l->t('Showing the first 200 mappings.')); ?></p><?php endif; ?>
        </section>
    </main>
</div>
