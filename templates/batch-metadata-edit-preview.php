<?php
/** @var array<string, mixed> $_ */
$result = $_['result'] ?? [];
$examples = is_array($result['examples'] ?? null) ? $result['examples'] : [];
$filters = is_array($_['filters'] ?? null) ? $_['filters'] : [];
$backUrl = (string)($_['backUrl'] ?? '');
$applyUrl = (string)($_['applyUrl'] ?? '');
$changedItems = (int)($result['changedItems'] ?? 0);
$invalidField = !empty($result['invalidField']);
?>
<div id="app-content" class="library-app-content">
    <main id="library-app" class="library-batch-metadata-edit-preview-page" aria-labelledby="library-batch-metadata-edit-preview-heading">
        <section class="library-panel library-batch-preview-hero">
            <p class="library-settings-action-strip"><a href="<?php p($backUrl); ?>" class="button secondary">← Back to catalogue</a></p>
            <div class="library-batch-preview-heading-row">
                <div>
                    <p class="library-summary-badge">Review before applying</p>
                    <h2 id="library-batch-metadata-edit-preview-heading">Batch metadata edit preview</h2>
                    <p class="library-muted">No changes have been written yet. This will update the selected field for every item that still differs from the normalized value.</p>
                </div>
                <?php if (!$invalidField && $changedItems > 0): ?>
                    <form method="post" action="<?php p($applyUrl); ?>" class="library-batch-preview-apply-form">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                        <input type="hidden" name="bulkEditField" value="<?php p((string)($result['field'] ?? '')); ?>">
                        <input type="hidden" name="bulkEditValue" value="<?php p((string)($result['value'] ?? '')); ?>">
                        <input type="hidden" name="confirmBatchMetadataApply" value="APPLY">
                        <?php foreach ($filters as $key => $value): ?>
                            <input type="hidden" name="<?php p((string)$key); ?>" value="<?php p((string)$value); ?>">
                        <?php endforeach; ?>
                        <button type="submit" class="button primary">Apply changes to current results</button>
                        <p class="library-batch-preview-apply-summary"><strong>This affects <?php p((string)$changedItems); ?> current results.</strong></p>
                        <p class="library-muted">Applies to the same server-side filter result, capped at 5,000 items.</p>
                    </form>
                <?php endif; ?>
            </div>

            <?php if ($invalidField): ?>
                <p class="library-warning">The selected metadata field is not supported for batch editing. Nothing can be applied.</p>
            <?php endif; ?>

            <dl class="library-batch-preview-stat-grid" aria-label="Batch metadata edit summary">
                <div>
                    <dt>Field</dt>
                    <dd><?php p((string)($result['field'] ?? '')); ?></dd>
                </div>
                <div>
                    <dt>Normalized value</dt>
                    <dd><?php p((string)($result['value'] ?? '')); ?></dd>
                </div>
                <div>
                    <dt>Requested items</dt>
                    <dd><?php p((string)($result['requestedItems'] ?? 0)); ?></dd>
                </div>
                <div class="library-batch-preview-stat-primary">
                    <dt>Would change</dt>
                    <dd><?php p((string)($result['changedItems'] ?? 0)); ?></dd>
                </div>
                <div>
                    <dt>Already matching</dt>
                    <dd><?php p((string)($result['unchangedItems'] ?? 0)); ?></dd>
                </div>
                <div>
                    <dt>Skipped</dt>
                    <dd><?php p((string)($result['skippedItems'] ?? 0)); ?></dd>
                </div>
            </dl>
        </section>

        <section class="library-panel" aria-labelledby="library-batch-preview-examples-heading">
            <h3 id="library-batch-preview-examples-heading">Example matched items</h3>
            <?php if ($examples === []): ?>
                <p class="library-muted">No matching items were found for this preview.</p>
            <?php else: ?>
                <div class="library-batch-preview-card-list" aria-label="Mobile review cards">
                    <?php foreach ($examples as $example): ?>
                        <article class="library-batch-preview-card">
                            <h4><?php p((string)($example['title'] ?? 'Untitled publication')); ?></h4>
                            <p class="library-muted">Item <?php p((string)($example['itemId'] ?? '')); ?></p>
                            <dl>
                                <div><dt>Current</dt><dd><?php p((string)($example['currentValue'] ?? '')); ?></dd></div>
                                <div><dt>New</dt><dd><?php p((string)($example['newValue'] ?? '')); ?></dd></div>
                            </dl>
                            <p class="library-batch-preview-outcome"><?php p(!empty($example['willChange']) ? 'Will change' : 'Already matches'); ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
                <div class="library-batch-preview-table-wrap">
                    <table class="library-batch-preview-table">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Current value</th>
                                <th scope="col">New value</th>
                                <th scope="col">Outcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($examples as $example): ?>
                                <tr>
                                    <th scope="row">
                                        <strong><?php p((string)($example['title'] ?? 'Untitled publication')); ?></strong>
                                        <span class="library-muted">Item <?php p((string)($example['itemId'] ?? '')); ?></span>
                                    </th>
                                    <td><?php p((string)($example['currentValue'] ?? '')); ?></td>
                                    <td><?php p((string)($example['newValue'] ?? '')); ?></td>
                                    <td><?php p(!empty($example['willChange']) ? 'Will change' : 'Already matches'); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </section>
    </main>
</div>
