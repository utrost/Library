<?php
/** @var array $_ */
$roots = $_['roots'] ?? [];
$files = $_['files'] ?? [];
$latestScanJob = $_['latestScanJob'] ?? null;
$scanJobHistory = $_['scanJobHistory'] ?? [];
?>
<div id="library-settings" class="library-app library-settings">
    <section class="library-panel library-settings-summary" aria-labelledby="library-settings-heading">
        <div class="library-catalogue-header">
            <div>
                <h2 id="library-settings-heading"><?php p($l->t('Library settings')); ?></h2>
                <p class="library-muted"><?php p($l->t('Configure the folders that become Library shelves, run scans, and inspect scan/index diagnostics.')); ?></p>
            </div>
            <p class="library-settings-quick-actions">
                <a href="<?php p($_['catalogueUrl'] ?? ''); ?>" class="button secondary"><?php p($l->t('Back to catalogue')); ?></a>
                <a href="<?php p($_['metadataExportUrl']); ?>" class="button secondary"><?php p($l->t('Export corrected metadata')); ?></a>
            </p>
        </div>
    </section>

    <details class="library-panel library-settings-section library-settings-section-roots" open aria-labelledby="library-settings-roots-heading">
        <summary id="library-settings-roots-heading" class="library-settings-summary-row">
            <?php p($l->t('Shelves and roots')); ?>
            <span class="library-settings-count-badge"><?php p($l->t('%n root', '%n roots', count($roots))); ?></span>
        </summary>
        <form method="post" action="<?php p($_['rootSaveUrl']); ?>" class="library-form">
            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
            <label>
                <?php p($l->t('Folder path')); ?>
                <input type="text" name="path" value="/LibrarySpike" placeholder="/Media/Books" />
            </label>
            <label>
                <?php p($l->t('Label')); ?>
                <input type="text" name="label" value="" placeholder="Books, Comics, Manuals..." />
            </label>
            <button type="submit"><?php p($l->t('Save root')); ?></button>
        </form>

        <?php if (count($roots) === 0): ?>
            <p class="library-muted"><?php p($l->t('No roots configured yet. Start with one path; more roots can be added later.')); ?></p>
        <?php else: ?>
            <ul class="library-root-list">
                <?php foreach ($roots as $root): ?>
                    <li>
                        <form method="post" action="<?php p($root['rootUpdateUrl']); ?>" class="library-form library-root-edit-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <label>
                                <?php p($l->t('Folder path')); ?>
                                <input type="text" name="path" value="<?php p((string)$root['path']); ?>" />
                            </label>
                            <label>
                                <?php p($l->t('Label')); ?>
                                <input type="text" name="label" value="<?php p((string)($root['label'] ?? '')); ?>" />
                            </label>
                            <span><?php p($root['enabled'] ? $l->t('enabled') : $l->t('disabled')); ?></span>
                            <?php if ($root['lastScanAt']): ?>
                                <span><?php p($l->t('last scan:')); ?> <?php p(date('Y-m-d H:i', $root['lastScanAt'])); ?></span>
                            <?php endif; ?>
                            <button type="submit"><?php p($l->t('Update root')); ?></button>
                        </form>
                        <form method="post" action="<?php p($root['rootScanUrl']); ?>" class="library-inline-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <button type="submit"><?php p($l->t('Scan this root')); ?></button>
                        </form>
                        <form method="post" action="<?php p($root['rootToggleUrl']); ?>" class="library-inline-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <input type="hidden" name="enabled" value="<?php p($root['enabled'] ? '0' : '1'); ?>" />
                            <button type="submit"><?php p($root['enabled'] ? $l->t('Disable root') : $l->t('Enable root')); ?></button>
                        </form>
                        <form method="post" action="<?php p($root['rootDeleteUrl']); ?>" class="library-inline-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <input type="hidden" name="confirmDelete" value="1" />
                            <button type="submit"><?php p($l->t('Delete root')); ?></button>
                        </form>
                        <p class="library-muted"><?php p($l->t('Deleting a Library root removes Library catalogue/index data for that root, but never deletes source files from Nextcloud Files.')); ?></p>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    </details>

    <details class="library-panel library-settings-section library-settings-section-scan" open aria-labelledby="library-scan-progress-heading">
        <summary class="library-settings-summary-row">
            <?php p($l->t('Scan and repair')); ?>
            <span class="library-settings-count-badge"><?php p($l->t('%n recent job', '%n recent jobs', count($scanJobHistory))); ?></span>
        </summary>
        <div class="library-settings-action-strip">
            <form method="post" action="<?php p($_['scanRunUrl']); ?>">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <button type="submit"><?php p($l->t('Scan enabled roots')); ?></button>
            </form>

            <form method="post" action="<?php p($_['scanRetryMetadataErrorsUrl']); ?>" class="library-inline-form library-scan-retry-metadata-errors-form">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <button type="submit"><?php p($l->t('Retry metadata errors')); ?></button>
                <span class="library-muted"><?php p($l->t('Only rows currently marked metadata_error are retried; unrelated indexed files are not marked missing.')); ?></span>
            </form>

            <form method="post" action="<?php p($_['scanRecheckMissingFilesUrl']); ?>" class="library-inline-form library-scan-recheck-missing-files-form">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <button type="submit"><?php p($l->t('Recheck missing files')); ?></button>
                <span class="library-muted"><?php p($l->t('Only rows currently marked as missing files are rechecked; unrelated indexed files are not marked missing.')); ?></span>
            </form>
        </div>

        <section class="library-scan-progress" aria-labelledby="library-scan-progress-heading" data-library-scan-progress-url="<?php p($_['scanProgressUrl']); ?>">
            <h3 id="library-scan-progress-heading"><?php p($l->t('Scan progress')); ?></h3>
            <?php if ($latestScanJob === null): ?>
                <p class="library-muted"><?php p($l->t('No scan job has run yet.')); ?></p>
            <?php else: ?>
                <p class="library-muted"><?php p($l->t('Scan counts update automatically while the background job is running; scan progress updates while the background job is running.')); ?></p>
                <dl>
                    <dt>scanJobStatus</dt>
                    <dd data-library-scan-status><?php p((string)$latestScanJob['status']); ?></dd>
                    <dt>scanScope</dt>
                    <dd data-library-scan-scope><?php p((string)($latestScanJob['scopeType'] ?? 'all')); ?><?php if (($latestScanJob['rootId'] ?? null) !== null): ?> #<?php p((string)$latestScanJob['rootId']); ?><?php endif; ?></dd>
                    <dt>rootsTotal</dt>
                    <dd data-library-scan-roots-total><?php p((string)$latestScanJob['rootsTotal']); ?></dd>
                    <dt>filesIndexed</dt>
                    <dd data-library-scan-files-indexed><?php p((string)$latestScanJob['filesIndexed']); ?></dd>
                    <dt>errorCount</dt>
                    <dd data-library-scan-error-count><?php p((string)$latestScanJob['errorCount']); ?></dd>
                    <dt>durationSeconds</dt>
                    <dd data-library-scan-duration-seconds><?php p((string)$latestScanJob['durationSeconds']); ?></dd>
                </dl>
                <p class="library-muted" data-library-scan-summary><?php p((string)($latestScanJob['summary'] ?? '')); ?></p>
                <?php if (in_array(($latestScanJob['status'] ?? ''), ['queued', 'running'], true)): ?>
                    <form method="post" action="<?php p((string)$latestScanJob['cancelUrl']); ?>" class="library-inline-form library-scan-cancel-form">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                        <button type="submit"><?php p(($latestScanJob['status'] ?? '') === 'queued' ? $l->t('Cancel queued scan') : $l->t('Cancel scan')); ?></button>
                        <span class="library-muted"><?php p($l->t('Cancel scan is available for queued or running jobs; running scans stop cooperatively at progress checkpoints.')); ?></span>
                    </form>
                <?php endif; ?>
            <?php endif; ?>
        </section>

        <section class="library-scan-history" aria-labelledby="library-scan-history-heading" data-library-scan-history>
            <h3 id="library-scan-history-heading"><?php p($l->t('Scan history')); ?></h3>
            <?php if (count($scanJobHistory) === 0): ?>
                <p class="library-muted"><?php p($l->t('No recent scan history yet.')); ?></p>
            <?php else: ?>
                <ol class="library-scan-history-list">
                    <?php foreach ($scanJobHistory as $historyJob): ?>
                        <li>
                            <dl>
                                <dt>historyScanJobStatus</dt>
                                <dd><?php p((string)$historyJob['status']); ?></dd>
                                <dt>historyScanScope</dt>
                                <dd><?php p((string)($historyJob['scopeType'] ?? 'all')); ?><?php if (($historyJob['rootId'] ?? null) !== null): ?> #<?php p((string)$historyJob['rootId']); ?><?php endif; ?></dd>
                                <dt>historyFilesIndexed</dt>
                                <dd><?php p((string)$historyJob['filesIndexed']); ?></dd>
                                <dt>historyErrorCount</dt>
                                <dd><?php p((string)$historyJob['errorCount']); ?></dd>
                                <dt>historyDurationSeconds</dt>
                                <dd><?php p((string)$historyJob['durationSeconds']); ?></dd>
                            </dl>
                            <?php if (($historyJob['summary'] ?? '') !== ''): ?>
                                <p class="library-muted"><?php p((string)$historyJob['summary']); ?></p>
                            <?php endif; ?>
                            <?php if (in_array(($historyJob['status'] ?? ''), ['queued', 'running'], true)): ?>
                                <form method="post" action="<?php p((string)$historyJob['cancelUrl']); ?>" class="library-inline-form library-scan-cancel-form">
                                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                    <button type="submit"><?php p(($historyJob['status'] ?? '') === 'queued' ? $l->t('Cancel queued scan') : $l->t('Cancel scan')); ?></button>
                                </form>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ol>
            <?php endif; ?>
        </section>
    </details>

    <details class="library-panel library-settings-section library-settings-section-portability" aria-labelledby="library-settings-portability-heading">
        <summary id="library-settings-portability-heading" class="library-settings-summary-row">
            <?php p($l->t('Metadata portability')); ?>
            <span class="library-settings-count-badge"><?php p($l->t('export, preview, apply')); ?></span>
        </summary>
        <p class="library-detail-actions">
            <a href="<?php p($_['metadataExportUrl']); ?>" class="button secondary"><?php p($l->t('Export corrected metadata')); ?></a>
            <a href="<?php p($_['metadataSidecarManifestUrl']); ?>" class="button secondary"><?php p($l->t('Export sidecar manifest')); ?></a>
            <a href="<?php p($_['metadataSidecarBundleUrl']); ?>" class="button secondary"><?php p($l->t('Export sidecar ZIP')); ?></a>
        </p>
        <p class="library-muted"><?php p($l->t('The sidecar manifest lists suggested .library.json paths for corrected metadata. Export sidecar ZIP downloads those JSON sidecars as a reviewable archive; neither export writes sidecar files into source folders.')); ?></p>

        <form method="post" action="<?php p($_['metadataImportPreviewUrl']); ?>" class="library-form library-metadata-import-preview-form">
            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
            <label>
                <?php p($l->t('Preview metadata import')); ?>
                <textarea name="metadataJson" rows="6" placeholder="<?php p($l->t('Paste a Library corrected metadata JSON export here.')); ?>"></textarea>
            </label>
            <p class="library-muted"><?php p($l->t('No changes are written during preview. Use Apply metadata import only after reviewing the preview output.')); ?></p>
            <button type="submit" class="button secondary"><?php p($l->t('Preview metadata import')); ?></button>
        </form>

        <form method="post" action="<?php p($_['metadataImportApplyUrl']); ?>" class="library-form library-metadata-import-apply-form">
            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
            <label>
                <?php p($l->t('Apply metadata import')); ?>
                <textarea name="metadataJson" rows="6" placeholder="<?php p($l->t('Paste the reviewed Library corrected metadata JSON export here.')); ?>"></textarea>
            </label>
            <p class="library-muted"><?php p($l->t('This writes matched corrected metadata to existing Library items. Missing items and unchanged items are skipped.')); ?></p>
            <button type="submit" class="button primary"><?php p($l->t('Apply metadata import')); ?></button>
        </form>

        <form method="post" action="<?php p($_['bulkResetFieldsUrl']); ?>" class="library-form library-bulk-reset-fields-form">
            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
            <label>
                <?php p($l->t('Bulk reset selected items to scanner')); ?>
                <textarea name="itemIds" rows="3" placeholder="<?php p($l->t('Example: 12, 19, 27')); ?>"></textarea>
            </label>
            <p class="library-muted"><?php p($l->t('Paste item IDs from the scanner-conflict review filter. This applies stored scanner candidates to selected existing Library items only.')); ?></p>
            <button type="submit" class="button secondary"><?php p($l->t('Reset selected items to scanner')); ?></button>
        </form>
    </details>

    <details class="library-panel library-settings-section library-settings-section-indexed-files" aria-labelledby="library-indexed-files-heading">
        <summary id="library-indexed-files-heading" class="library-settings-summary-row">
            <?php p($l->t('Indexed files')); ?>
            <span class="library-settings-count-badge"><?php p($l->t('%n file', '%n files', count($files))); ?></span>
        </summary>
        <?php if (count($files) === 0): ?>
            <p class="library-muted"><?php p($l->t('No indexed files yet. Add a root and scan it.')); ?></p>
        <?php else: ?>
            <div class="library-index-list">
                <?php foreach ($files as $file): ?>
                    <article class="library-index-row">
                        <h3><?php p(basename($file['cachedPath'])); ?></h3>
                        <dl>
                            <dt>fileId</dt>
                            <dd><?php p((string)$file['fileId']); ?></dd>
                            <dt>rootLabel</dt>
                            <dd><?php p($file['rootLabel']); ?></dd>
                            <dt>path</dt>
                            <dd><?php p($file['cachedPath']); ?></dd>
                            <dt>format</dt>
                            <dd><?php p($file['extension']); ?> / <?php p($file['mimeType']); ?></dd>
                            <dt>scanStatus</dt>
                            <dd class="<?php p($file['scanStatus'] === 'missing' ? 'library-scan-error' : ''); ?>"><?php p($file['scanStatus']); ?></dd>
                            <?php if (($file['scanError'] ?? '') !== ''): ?>
                                <dt>scanError</dt>
                                <dd class="library-scan-error"><?php p($file['scanError']); ?></dd>
                            <?php endif; ?>
                        </dl>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </details>
</div>
