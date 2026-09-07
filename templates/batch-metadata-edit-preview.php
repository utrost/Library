<?php
/** @var array<string, mixed> $_ */
$result = $_['result'] ?? [];
$examples = is_array($result['examples'] ?? null) ? $result['examples'] : [];
$backUrl = (string)($_['backUrl'] ?? '');
?>
<div id="app-content" class="library-app-content">
    <main id="library-app" class="library-batch-metadata-edit-preview-page" aria-labelledby="library-batch-metadata-edit-preview-heading">
        <section class="library-panel">
            <p><a href="<?php p($backUrl); ?>" class="button secondary">← Back to catalogue</a></p>
            <h2 id="library-batch-metadata-edit-preview-heading">Batch metadata edit preview</h2>
            <p class="library-muted">No changes are written during preview. This page estimates what a one-field metadata edit would do to the current filter result before any apply path exists.</p>

            <?php if (!empty($result['invalidField'])): ?>
                <p class="library-warning">The selected metadata field is not supported for batch preview.</p>
            <?php endif; ?>

            <dl class="library-detail-meta-list library-batch-metadata-edit-preview-counts">
                <dt>Field</dt>
                <dd><?php p((string)($result['field'] ?? '')); ?></dd>
                <dt>Preview value</dt>
                <dd><?php p((string)($result['value'] ?? '')); ?></dd>
                <dt>Requested items</dt>
                <dd><?php p((string)($result['requestedItems'] ?? 0)); ?></dd>
                <dt>Would change</dt>
                <dd><?php p((string)($result['changedItems'] ?? 0)); ?></dd>
                <dt>Already matching</dt>
                <dd><?php p((string)($result['unchangedItems'] ?? 0)); ?></dd>
                <dt>Skipped</dt>
                <dd><?php p((string)($result['skippedItems'] ?? 0)); ?></dd>
            </dl>

            <h3>Example matched items</h3>
            <?php if ($examples === []): ?>
                <p class="library-muted">No matching items were found for this preview.</p>
            <?php else: ?>
                <ul class="library-batch-metadata-edit-preview-examples">
                    <?php foreach ($examples as $example): ?>
                        <li>
                            <strong><?php p((string)($example['title'] ?? 'Untitled publication')); ?></strong>
                            <span class="library-muted">Item <?php p((string)($example['itemId'] ?? '')); ?></span>
                            <dl class="library-detail-meta-list">
                                <dt>currentValue</dt>
                                <dd><?php p((string)($example['currentValue'] ?? '')); ?></dd>
                                <dt>newValue</dt>
                                <dd><?php p((string)($example['newValue'] ?? '')); ?></dd>
                                <dt>willChange</dt>
                                <dd><?php p(!empty($example['willChange']) ? 'yes' : 'no'); ?></dd>
                            </dl>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </section>
    </main>
</div>
