<?php
/** @var array $_ */
declare(strict_types=1);

$preview = is_array($_['preview'] ?? null) ? $_['preview'] : [];
$mode = (string)($_['mode'] ?? 'preview');
$valid = (bool)($preview['valid'] ?? false);
$items = is_array($preview['items'] ?? null) ? array_slice($preview['items'], 0, 20) : [];
$metric = static fn (string $key): string => (string)(int)($preview[$key] ?? 0);
$error = (string)($preview['error'] ?? '');
$display = static fn ($value): string => is_array($value) ? (string)json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) : (is_bool($value) ? ($value ? $l->t('Yes') : $l->t('No')) : (string)($value ?? '—'));
?>
<div id="app-content" class="library-maintenance-shell">
    <?php include __DIR__ . '/maintenance-navigation.php'; ?>
    <main class="library-maintenance-main library-metadata-import-result">
    <section class="library-panel" aria-labelledby="library-metadata-import-result-heading">
        <p class="library-muted library-catalogue-eyebrow"><?php p($mode === 'apply' ? $l->t('Metadata import applied') : $l->t('Metadata import preview')); ?></p>
        <h1 id="library-metadata-import-result-heading"><?php p($mode === 'apply' ? $l->t('Import result') : $l->t('Review metadata import')); ?></h1>
        <?php if (!$valid): ?>
            <p class="library-warning" role="alert"><?php p($error === 'invalid_json' ? $l->t('This is not valid JSON. Correct the pasted text below and preview it again.') : $l->t('The pasted metadata could not be imported. Check that it is a Library corrected metadata JSON export.')); ?></p>
        <?php else: ?>
            <?php if ($mode !== 'apply'): ?>
                <p class="library-muted"><?php p($l->t('Review these counts before applying. Source files are not changed.')); ?></p>
            <?php endif; ?>
        <?php endif; ?>
        <?php if (!$valid): ?>
            <form method="post" action="<?php p($_['metadataImportPreviewUrl']); ?>" class="library-form">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken']); ?>">
                <label><?php p($l->t('Metadata JSON')); ?><textarea name="metadataJson" rows="8"><?php p($_['metadataJson']); ?></textarea></label>
                <button class="button primary" type="submit"><?php p($l->t('Preview metadata import')); ?></button>
            </form>
        <?php endif; ?>
        <dl class="library-import-preview-summary">
            <div><dt><?php p($l->t('Total items')); ?></dt><dd><?php p($metric('totalItems')); ?></dd></div>
            <div><dt><?php p($l->t('Matched items')); ?></dt><dd><?php p($metric('matchedItems')); ?></dd></div>
            <div><dt><?php p($l->t('Missing items')); ?></dt><dd><?php p($metric('missingItems')); ?></dd></div>
            <div><dt><?php p($l->t('Invalid items')); ?></dt><dd><?php p($metric('invalidItems')); ?></dd></div>
            <div><dt><?php p($l->t('Changed fields')); ?></dt><dd><?php p($metric('changedFields')); ?></dd></div>
            <?php if ($mode === 'apply'): ?>
                <div><dt><?php p($l->t('Applied items')); ?></dt><dd><?php p($metric('appliedItems')); ?></dd></div>
                <div><dt><?php p($l->t('Skipped items')); ?></dt><dd><?php p($metric('skippedItems')); ?></dd></div>
            <?php endif; ?>
        </dl>
        <?php if ($items !== []): ?>
            <h3><?php p($l->t('Representative item changes')); ?></h3>
            <ol class="library-import-preview-items">
                <?php foreach ($items as $item): ?>
                    <?php $changes = is_array($item['changes'] ?? null) ? $item['changes'] : (is_array($item['changedFields'] ?? null) ? $item['changedFields'] : []); ?>
                    <li>
                        <strong><bdi class="library-bidi-human" dir="auto"><?php p((string)($item['title'] ?? $item['path'] ?? $item['itemId'] ?? $l->t('Untitled'))); ?></bdi></strong>
                        <?php if ($changes !== []): ?>
                            <ul>
                                <?php foreach (array_slice($changes, 0, 8) as $field => $change): ?>
                                    <li>
                                        <?php if (is_array($change)): ?>
                                            <strong><?php p((string)($change['field'] ?? $field)); ?></strong>
                                            <dl class="library-review-values"><div><dt><?php p($l->t('Current value')); ?></dt><dd><bdi dir="auto"><?php p($display($change['before'] ?? null)); ?></bdi></dd></div><div><dt><?php p($l->t('Proposed value')); ?></dt><dd><bdi dir="auto"><?php p($display($change['after'] ?? null)); ?></bdi></dd></div></dl>
                                        <?php else: ?><bdi dir="auto"><?php p(is_string($field) ? $field : (string)$change); ?></bdi><?php endif; ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ol>
        <?php endif; ?>
        <div class="library-detail-actions">
            <a class="button secondary" href="<?php p((string)$_['settingsUrl']); ?>"><?php p($mode === 'apply' ? $l->t('Back to settings') : $l->t('Cancel and go back')); ?></a>
            <?php if ($mode !== 'apply' && $valid): ?>
                <form method="post" action="<?php p((string)$_['metadataImportApplyUrl']); ?>" class="library-form library-metadata-import-apply-reviewed-form">
                    <input type="hidden" name="requesttoken" value="<?php p((string)($_['requesttoken'] ?? '')); ?>" />
                    <textarea name="metadataJson" hidden><?php p((string)$_['metadataJson']); ?></textarea>
                    <button type="submit" class="button primary"><?php p($l->t('Apply this reviewed import')); ?></button>
                </form>
            <?php endif; ?>
        </div>
    </section>
    </main>
</div>
