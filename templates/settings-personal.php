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
        <section class="library-add-shelf-card" aria-label="<?php p($l->t('Add Library shelf')); ?>">
            <h3><?php p($l->t('Add a shelf')); ?></h3>
            <p class="library-muted"><?php p($l->t('Point Library at a Nextcloud folder; it becomes a browsable shelf after scanning.')); ?></p>
            <form method="post" action="<?php p($_['rootSaveUrl']); ?>" class="library-form library-add-shelf-form">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <label>
                    <?php p($l->t('Folder path')); ?>
                    <input type="text" name="path" value="/LibrarySpike" placeholder="/Media/Books" />
                </label>
                <label>
                    <?php p($l->t('Label')); ?>
                    <input type="text" name="label" value="" placeholder="Books, Comics, Manuals..." />
                </label>
                <button type="submit" class="button primary"><?php p($l->t('Save root')); ?></button>
            </form>
        </section>

        <?php if (count($roots) === 0): ?>
            <section class="library-getting-started" aria-label="<?php p($l->t('Getting started')); ?>">
                <h3><?php p($l->t('Getting started')); ?></h3>
                <ol>
                    <li><?php p($l->t('Add one folder path that already exists in Nextcloud Files.')); ?></li>
                    <li><?php p($l->t('Run Scan enabled roots after saving the root.')); ?></li>
                    <li><?php p($l->t('Browse covers, open Details, then correct metadata only where needed.')); ?></li>
                    <li><?php p($l->t('Export corrected metadata before uninstalling or moving to another install.')); ?></li>
                </ol>
            </section>
            <p class="library-muted"><?php p($l->t('No roots configured yet. Start with one path; more roots can be added later.')); ?></p>
        <?php else: ?>
            <ul class="library-root-list">
                <?php foreach ($roots as $root): ?>
                    <li class="library-root-card">
                        <div class="library-root-card-header">
                            <div>
                                <strong><?php p((string)($root['label'] ?? $root['path'])); ?></strong>
                                <p class="library-muted"><?php p((string)$root['path']); ?></p>
                            </div>
                            <span class="library-settings-count-badge"><?php p($root['enabled'] ? $l->t('enabled') : $l->t('disabled')); ?></span>
                        </div>
                        <?php if ($root['lastScanAt']): ?>
                            <p class="library-muted"><?php p($l->t('last scan:')); ?> <?php p(date('Y-m-d H:i', $root['lastScanAt'])); ?></p>
                        <?php endif; ?>
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
                            <button type="submit" class="button secondary"><?php p($l->t('Update root')); ?></button>
                        </form>
                        <div class="library-root-card-actions">
                            <form method="post" action="<?php p($root['rootScanUrl']); ?>" class="library-inline-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <button type="submit" class="button primary"><?php p($l->t('Scan this root')); ?></button>
                            </form>
                            <form method="post" action="<?php p($root['rootToggleUrl']); ?>" class="library-inline-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <input type="hidden" name="enabled" value="<?php p($root['enabled'] ? '0' : '1'); ?>" />
                                <button type="submit" class="button secondary"><?php p($root['enabled'] ? $l->t('Disable root') : $l->t('Enable root')); ?></button>
                            </form>
                        </div>
                        <details class="library-root-danger-zone">
                            <summary><?php p($l->t('Danger zone')); ?></summary>
                            <section class="library-root-recovery-checklist" aria-label="<?php p($l->t('Root deletion recovery checklist')); ?>">
                                <p class="library-muted"><strong><?php p($l->t('Before deleting this Library root')); ?></strong></p>
                                <ul>
                                    <li><?php p($l->t('Export corrected metadata if you want to keep manual corrections outside this app database.')); ?></li>
                                    <li><?php p($l->t('Keep a database backup if you need an exact rollback of Library catalogue rows.')); ?></li>
                                    <li><?php p($l->t('Re-add the same folder path and scan it again to rebuild catalogue rows from source files.')); ?></li>
                                    <li><?php p($l->t('The source files from Nextcloud Files are not deleted by this action.')); ?></li>
                                </ul>
                            </section>
                            <form method="post" action="<?php p($root['rootDeleteUrl']); ?>" class="library-inline-form library-root-delete-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <label>
                                    <?php p($l->t('Type DELETE to confirm')); ?>
                                    <input type="text" name="confirmDeleteText" placeholder="DELETE" autocomplete="off" />
                                </label>
                                <button type="submit" class="button secondary"><?php p($l->t('Delete root')); ?></button>
                            </form>
                            <p class="library-muted"><?php p($l->t('Deleting a Library root removes only Library index and catalogue rows for that root, but never deletes source files from Nextcloud Files.')); ?></p>
                        </details>
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
                <?php if (in_array(($latestScanJob['status'] ?? ''), ['completed', 'failed'], true)): ?>
                    <section class="library-scan-completion-summary library-scan-completion-summary--<?php p((string)$latestScanJob['status']); ?>" data-library-scan-completion-summary aria-live="polite">
                        <h4 data-library-scan-completion-title><?php p(($latestScanJob['status'] ?? '') === 'failed' ? $l->t('Scan failed') : $l->t('Scan completed')); ?></h4>
                        <p class="library-muted"><?php p($l->t('This post-scan completion summary survives page reloads and links each counter to the safest next review view.')); ?></p>
                        <?php if (($latestScanJob['finishedAt'] ?? null) !== null): ?>
                            <p class="library-muted"><?php p($l->t('Finished at')); ?> <time data-library-scan-finished-at datetime="<?php p(date('c', (int)$latestScanJob['finishedAt'])); ?>"><?php p(date('Y-m-d H:i', (int)$latestScanJob['finishedAt'])); ?></time></p>
                        <?php endif; ?>
                    </section>
                <?php endif; ?>
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
                <?php if (($latestScanJob['status'] ?? '') === 'completed'): ?>
                    <section class="library-scan-changes-panel" aria-label="<?php p($l->t('Changes found')); ?>">
                        <div class="library-scan-changes-heading">
                            <div>
                                <h4><?php p($l->t('Changes found')); ?></h4>
                                <p class="library-muted library-scan-changes-intro"><?php p($l->t('Library compared the scanned files with its catalogue index. Review anything that changed outside Library before forgetting missing rows.')); ?></p>
                            </div>
                            <span class="library-settings-count-badge"><?php p($l->t('safe review')); ?></span>
                        </div>
                        <dl class="library-scan-change-grid">
                            <a class="library-scan-change-card library-scan-change-card-link library-scan-change-card--attention" href="<?php p($_['scanAddedFilesUrl']); ?>">
                                <dt><?php p($l->t('Added')); ?></dt>
                                <dd data-library-scan-files-added><?php p((string)($latestScanJob['filesAdded'] ?? 0)); ?></dd>
                            </a>
                            <a class="library-scan-change-card library-scan-change-card-link library-scan-change-card--attention" href="<?php p($_['scanMovedFilesUrl']); ?>">
                                <dt><?php p($l->t('Moved or renamed')); ?></dt>
                                <dd data-library-scan-paths-updated><?php p((string)($latestScanJob['pathsUpdated'] ?? 0)); ?></dd>
                            </a>
                            <div class="library-scan-change-card library-scan-change-card--calm">
                                <dt><?php p($l->t('Unchanged')); ?></dt>
                                <dd data-library-scan-files-unchanged><?php p((string)($latestScanJob['filesUnchanged'] ?? 0)); ?></dd>
                            </div>
                            <a class="library-scan-change-card library-scan-change-card-link library-scan-change-card--attention" href="<?php p($_['scanMissingFilesUrl']); ?>">
                                <dt><?php p($l->t('Missing')); ?></dt>
                                <dd data-library-scan-files-missing><?php p((string)($latestScanJob['filesMissing'] ?? 0)); ?></dd>
                            </a>
                            <a class="library-scan-change-card library-scan-change-card-link library-scan-change-card--attention" href="<?php p($_['scanMetadataErrorsUrl']); ?>">
                                <dt><?php p($l->t('Metadata errors')); ?></dt>
                                <dd data-library-scan-metadata-errors><?php p((string)($latestScanJob['metadataErrors'] ?? 0)); ?></dd>
                            </a>
                        </dl>
                        <p class="library-detail-actions library-scan-change-actions">
                            <a href="<?php p($_['scanChangedFilesUrl']); ?>" class="button secondary"><?php p($l->t('Review recently changed files')); ?></a>
                            <a href="<?php p($_['scanMissingFilesUrl']); ?>" class="button secondary"><?php p($l->t('Review files missing from disk')); ?></a>
                            <a href="<?php p($_['scanMetadataErrorsUrl']); ?>" class="button secondary"><?php p($l->t('Review metadata errors')); ?></a>
                            <a href="<?php p($_['scanMetadataErrorsExportUrl']); ?>" class="button secondary"><?php p($l->t('Export metadata-error TSV')); ?></a>
                        </p>
                    </section>
                <?php endif; ?>
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
