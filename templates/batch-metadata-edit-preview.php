<?php
/** @var array<string, mixed> $_ */
$result = $_['result'] ?? [];
$examples = is_array($result['examples'] ?? null) ? $result['examples'] : [];
$filters = is_array($_['filters'] ?? null) ? $_['filters'] : [];
$itemIds = is_array($_['itemIds'] ?? null) ? $_['itemIds'] : [];
$backUrl = (string)($_['backUrl'] ?? '');
$applyUrl = (string)($_['applyUrl'] ?? '');
$changedItems = (int)($result['changedItems'] ?? 0);
$invalidField = !empty($result['invalidField']);
$batchLimitError = !empty($result['batchLimitError']);
?>
<div id="app-content" class="library-app-content" lang="<?php p($_['language'] ?? 'en'); ?>" dir="<?php p($_['direction'] ?? 'ltr'); ?>">
    <main id="library-app" class="library-batch-metadata-edit-preview-page" aria-labelledby="library-batch-metadata-edit-preview-heading">
        <section class="library-panel library-batch-preview-hero">
            <p class="library-settings-action-strip"><a href="<?php p($backUrl); ?>" class="button secondary library-batch-preview-back--top"><?php p($l->t('Back to catalogue')); ?></a></p>
            <div class="library-batch-preview-heading-row">
                <div>
                    <p class="library-summary-badge"><?php p($l->t('Review before applying')); ?></p>
                    <h2 id="library-batch-metadata-edit-preview-heading"><?php p($l->t('Batch metadata edit preview')); ?></h2>
                    <p class="library-muted"><?php p($l->t('No changes have been written yet. This will update the selected field for every item that still differs from the normalized value.')); ?></p>
                </div>
                <?php if (!$batchLimitError && !$invalidField && $changedItems > 0): ?>
                    <form method="post" action="<?php p($applyUrl); ?>" class="library-batch-preview-apply-form">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                        <input type="hidden" name="bulkEditField" value="<?php p((string)($result['field'] ?? '')); ?>">
                        <input type="hidden" name="bulkEditValue" value="<?php p((string)($result['value'] ?? '')); ?>">
                        <input type="hidden" name="confirmBatchMetadataApply" value="APPLY">
                        <?php foreach ($filters as $key => $value): ?>
                            <input type="hidden" name="<?php p((string)$key); ?>" value="<?php p((string)$value); ?>">
                        <?php endforeach; ?>
                        <?php foreach ($itemIds as $itemId): ?>
                            <input type="hidden" name="itemIds[]" value="<?php p((string)$itemId); ?>">
                        <?php endforeach; ?>
                        <button type="submit" class="button primary library-localization-long-control"><?php p($l->t('Apply changes to current results')); ?></button>
                        <p class="library-batch-preview-apply-summary"><strong><?php p($l->n('This affects %n current result.', 'This affects %n current results.', $changedItems)); ?></strong></p>
                        <p class="library-muted"><?php p($l->t('Applies to the same server-side filter result, capped at 5,000 items.')); ?></p>
                    </form>
                <?php endif; ?>
            </div>

            <?php if ($batchLimitError): ?>
                <p class="library-warning"><?php p($l->t('This batch matches more than 5,000 items. Narrow the selection and try again.')); ?></p>
            <?php endif; ?>

            <?php if ($invalidField): ?>
                <p class="library-warning"><?php p($l->t('The selected metadata field is not supported for batch editing. Nothing can be applied.')); ?></p>
            <?php endif; ?>

            <dl class="library-batch-preview-stat-grid" aria-label="<?php p($l->t('Batch metadata edit summary')); ?>">
                <div>
                    <dt><?php p($l->t('Field')); ?></dt>
                    <dd><?php p((string)($result['field'] ?? '')); ?></dd>
                </div>
                <div>
                    <dt><?php p($l->t('Normalized value')); ?></dt>
                    <dd><?php p((string)($result['value'] ?? '')); ?></dd>
                </div>
                <div>
                    <dt><?php p($l->t('Requested items')); ?></dt>
                    <dd><?php p((string)($result['requestedItems'] ?? 0)); ?></dd>
                </div>
                <div class="library-batch-preview-stat-primary">
                    <dt><?php p($l->t('Would change')); ?></dt>
                    <dd><?php p((string)($result['changedItems'] ?? 0)); ?></dd>
                </div>
                <div>
                    <dt><?php p($l->t('Already matching')); ?></dt>
                    <dd><?php p((string)($result['unchangedItems'] ?? 0)); ?></dd>
                </div>
                <div>
                    <dt><?php p($l->t('Skipped')); ?></dt>
                    <dd><?php p((string)($result['skippedItems'] ?? 0)); ?></dd>
                </div>
            </dl>
        </section>

        <p class="library-settings-action-strip"><a href="<?php p($backUrl); ?>" class="button secondary library-batch-preview-back--bottom"><?php p($l->t('Back to catalogue')); ?></a></p>

        <section class="library-panel" aria-labelledby="library-batch-preview-examples-heading">
            <h3 id="library-batch-preview-examples-heading"><?php p($l->t('Example matched items')); ?></h3>
            <?php if ($examples === []): ?>
                <p class="library-muted"><?php p($l->t('No matching items were found for this preview.')); ?></p>
            <?php else: ?>
                <div class="library-batch-preview-card-list" aria-label="<?php p($l->t('Mobile review cards')); ?>">
                    <?php foreach ($examples as $example): ?>
                        <article class="library-batch-preview-card">
                            <h4><?php p((string)($example['title'] ?? $l->t('Untitled publication'))); ?></h4>
                            <p class="library-muted"><?php p($l->t('Item %s', [(string)($example['itemId'] ?? '')])); ?></p>
                            <dl>
                                <div><dt><?php p($l->t('Current')); ?></dt><dd><?php p((string)($example['currentValue'] ?? '')); ?></dd></div>
                                <div><dt><?php p($l->t('New')); ?></dt><dd><?php p((string)($example['newValue'] ?? '')); ?></dd></div>
                            </dl>
                            <p class="library-batch-preview-outcome"><?php p(!empty($example['willChange']) ? $l->t('Will change') : $l->t('Already matches')); ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
                <div class="library-batch-preview-table-wrap">
                    <table class="library-batch-preview-table">
                        <thead>
                            <tr>
                                <th scope="col"><?php p($l->t('Item')); ?></th>
                                <th scope="col"><?php p($l->t('Current value')); ?></th>
                                <th scope="col"><?php p($l->t('New value')); ?></th>
                                <th scope="col"><?php p($l->t('Outcome')); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($examples as $example): ?>
                                <tr>
                                    <th scope="row">
                                        <strong><?php p((string)($example['title'] ?? $l->t('Untitled publication'))); ?></strong>
                                        <span class="library-muted"><?php p($l->t('Item %s', [(string)($example['itemId'] ?? '')])); ?></span>
                                    </th>
                                    <td><?php p((string)($example['currentValue'] ?? '')); ?></td>
                                    <td><?php p((string)($example['newValue'] ?? '')); ?></td>
                                    <td><?php p(!empty($example['willChange']) ? $l->t('Will change') : $l->t('Already matches')); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </section>
    </main>
</div>
