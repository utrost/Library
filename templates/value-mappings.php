<?php
declare(strict_types=1);
/** @var array $_ */
$field = $_['field'];
$base = $_['baseUrl'];
$preview = $_['preview'];
?>
<div id="app-content" style="overflow:auto;padding:24px;max-width:1040px">
    <p><a href="<?php p($_['catalogueUrl']); ?>">← <?php p($l->t('Library')); ?></a></p>
    <h1 title="<?php p($l->t('Mappings group values for browsing and search. Each book keeps its original metadata. Removing a mapping immediately restores separate results.')); ?>"><?php p($l->t('Group publisher and subject variants')); ?></h1>
    <?php if ($_['message'] !== ''): ?><p role="status"><?php p(match ($_['message']) { 'saved'=>$l->t('Mapping saved.'), 'removed'=>$l->t('Mapping removed.'), default=>$l->t('Choose two different values used by your library.') }); ?></p><?php endif; ?>
    <nav aria-label="<?php p($l->t('Metadata values')); ?>">
        <a class="button <?php p($field === 'publisher' ? 'primary' : 'secondary'); ?>" href="<?php p($base . '?field=publisher'); ?>"><?php p($l->t('Publishers')); ?></a>
        <a class="button <?php p($field === 'subject' ? 'primary' : 'secondary'); ?>" href="<?php p($base . '?field=subject'); ?>"><?php p($l->t('Subjects')); ?></a>
    </nav>
    <section style="border:1px solid var(--color-border);border-radius:10px;padding:16px;margin:18px 0">
        <h2><?php p($l->t('Preview a mapping')); ?></h2>
        <form action="<?php p($base . '/preview'); ?>" method="post">
            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
            <input type="hidden" name="field" value="<?php p($field); ?>">
            <label title="<?php p($l->t('Enter a value already used by at least one book.')); ?>"><?php p($l->t('Source value')); ?>
                <input name="source" type="text" maxlength="255" required list="library-source-values" value="<?php p($preview['source'] ?? ''); ?>" placeholder="<?php p($l->t('Existing spelling')); ?>">
            </label>
            <label title="<?php p($l->t('Books keep their source value; this label groups them for browsing.')); ?>"><?php p($l->t('Preferred label')); ?>
                <input name="target" type="text" maxlength="255" required list="library-source-values" value="<?php p($preview['target'] ?? ''); ?>" placeholder="<?php p($l->t('Name to browse under')); ?>">
            </label>
            <datalist id="library-source-values"><?php foreach ($_['values'] as $entry): ?><option value="<?php p($entry['facet_value']); ?>"></option><?php endforeach; ?></datalist>
            <button type="submit"><?php p($l->t('Preview affected books')); ?></button>
        </form>
        <?php if ($preview !== null): ?>
            <p role="status"><?php p($l->n('%n book uses this source value.', '%n books use this source value.', $preview['count'])); ?></p>
            <?php if ($preview['books'] !== []): ?><ul><?php foreach ($preview['books'] as $book): ?><li><?php p($book['title']); ?></li><?php endforeach; ?></ul><?php endif; ?>
            <?php if ($preview['count'] > 0): ?><form action="<?php p($base . '/save'); ?>" method="post">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                <input type="hidden" name="field" value="<?php p($field); ?>">
                <input type="hidden" name="source" value="<?php p($preview['source']); ?>">
                <input type="hidden" name="target" value="<?php p($preview['target']); ?>">
                <button class="primary" type="submit"><?php p($l->t('Save mapping')); ?></button>
            </form><?php endif; ?>
        <?php endif; ?>
    </section>
    <section>
        <h2><?php p($l->t('Find existing values')); ?></h2>
        <form action="<?php p($base); ?>" method="get"><input type="hidden" name="field" value="<?php p($field); ?>">
            <label><?php p($l->t('Search values (at least three characters)')); ?> <input name="search" type="search" value="<?php p($_['search']); ?>"></label>
            <button type="submit"><?php p($l->t('Search')); ?></button>
        </form>
        <?php if ($_['values'] !== []): ?><ul><?php foreach ($_['values'] as $entry): ?><li><?php p($entry['facet_value']); ?> · <?php p($l->n('%n book', '%n books', (int)$entry['book_count'])); ?></li><?php endforeach; ?></ul><?php endif; ?>
    </section>
    <section>
        <h2><?php p($l->t('Saved mappings')); ?></h2>
        <?php if ($_['mappings'] === []): ?><p><?php p($l->t('No mappings yet.')); ?></p><?php endif; ?>
        <?php foreach (array_slice($_['mappings'], 0, 200) as $mapping): ?>
            <article style="border:1px solid var(--color-border);border-radius:8px;padding:12px;margin:8px 0">
                <bdi dir="auto"><?php p($mapping['source_value']); ?></bdi> → <bdi dir="auto"><?php p($mapping['target_value']); ?></bdi>
                <form action="<?php p($base . '/' . $mapping['source_key'] . '/remove'); ?>" method="post" style="display:inline-block;margin-inline-start:12px">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                    <input type="hidden" name="field" value="<?php p($field); ?>">
                    <button type="submit"><?php p($l->t('Remove mapping')); ?></button>
                </form>
            </article>
        <?php endforeach; ?>
        <?php if (count($_['mappings']) > 200): ?><p><?php p($l->t('Showing the first 200 mappings.')); ?></p><?php endif; ?>
    </section>
</div>
