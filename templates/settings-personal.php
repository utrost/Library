<?php
/** @var array $_ */
$roots = $_['roots'] ?? [];
$fileStatusCounts = $_['fileStatusCounts'] ?? ['total' => 0];
$latestScanJob = $_['latestScanJob'] ?? null;
$scanJobHistory = $_['scanJobHistory'] ?? [];
?>
<div id="library-settings" class="library-app library-settings" lang="<?php p($_['language'] ?? 'en'); ?>" dir="<?php p($_['direction'] ?? 'ltr'); ?>">
    <?php if ((string)filter_input(INPUT_GET, 'batchLimitError') === '1'): ?>
        <p class="library-warning library-batch-limit-error"><?php p($l->t('This batch matches more than 5,000 items. Narrow the selection and try again.')); ?></p>
    <?php endif; ?>
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

    <div class="library-panel library-operation-status" data-library-operation-status data-running-text="<?php p($l->t('Settings operation in progress')); ?>" data-completed-text="<?php p($l->t('Scan completed')); ?>" data-failed-text="<?php p($l->t('Scan failed')); ?>" role="status" aria-live="polite" aria-atomic="true" hidden>
        <span class="icon-loading-small" aria-hidden="true"></span>
        <span data-library-operation-status-text><?php p($l->t('Settings operation in progress')); ?></span>
    </div>

    <details class="library-panel library-settings-section library-settings-section-roots" open aria-labelledby="library-settings-roots-heading">
        <summary id="library-settings-roots-heading" class="library-settings-summary-row">
            <?php p($l->t('Folders and scanning')); ?>
            <span class="library-settings-count-badge"><?php p($l->n('%n root', '%n roots', count($roots))); ?></span>
        </summary>
        <section class="library-add-shelf-card" aria-label="<?php p($l->t('Add Library shelf')); ?>">
            <h3><?php p($l->t('Add a shelf')); ?></h3>
            <p class="library-muted"><?php p($l->t('Point Library at a Nextcloud folder; it becomes a browsable shelf after scanning.')); ?></p>
            <form method="post" action="<?php p($_['rootSaveUrl']); ?>" class="library-form library-add-shelf-form" data-library-operation="save-root">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <div class="library-folder-path-field">
                    <label>
                        <?php p($l->t('Folder path')); ?>
                        <input type="text" name="path" value="/LibrarySpike" placeholder="<?php p($l->t('/Media/Books')); ?>" aria-describedby="library-new-root-path-help" />
                    </label>
                    <button type="button" class="button secondary library-folder-picker-button" data-library-folder-picker data-picker-title="<?php p($l->t('Choose a folder for this Library shelf')); ?>" hidden><?php p($l->t('Choose folder')); ?></button>
                    <p id="library-new-root-path-help" class="library-muted library-folder-path-help"><?php p($l->t('Choose a folder from Nextcloud Files, or enter its path manually.')); ?></p>
                </div>
                <label>
                    <?php p($l->t('Label')); ?>
                    <input type="text" name="label" value="" placeholder="<?php p($l->t('Books, comics, manuals…')); ?>" />
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
                                <strong><bdi class="library-bidi-human" dir="auto"><?php p((string)($root['label'] ?? $root['path'])); ?></bdi></strong>
                                <p class="library-muted"><bdi class="library-bidi-machine" dir="ltr"><?php p((string)$root['path']); ?></bdi></p>
                            </div>
                            <span class="library-settings-count-badge"><?php p($root['enabled'] ? $l->t('enabled') : $l->t('disabled')); ?></span>
                        </div>
                        <?php if ($root['lastScanAt']): ?>
                            <p class="library-muted"><?php p($l->t('last scan:')); ?> <?php p(date('Y-m-d H:i', $root['lastScanAt'])); ?></p>
                        <?php endif; ?>
                        <p class="library-root-publication-count"><?php p($l->n('%n publication', '%n publications', (int)$root['publicationCount'])); ?></p>
                        <form method="post" action="<?php p($root['rootUpdateUrl']); ?>" class="library-form library-root-edit-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <div class="library-folder-path-field">
                                <label>
                                    <?php p($l->t('Folder path')); ?>
                                    <input type="text" name="path" value="<?php p((string)$root['path']); ?>" aria-describedby="library-root-path-help-<?php p((string)$root['id']); ?>" />
                                </label>
                                <button type="button" class="button secondary library-folder-picker-button" data-library-folder-picker data-picker-title="<?php p($l->t('Choose a folder for this Library shelf')); ?>" hidden><?php p($l->t('Choose folder')); ?></button>
                                <p id="library-root-path-help-<?php p((string)$root['id']); ?>" class="library-muted library-folder-path-help"><?php p($l->t('Choose a folder from Nextcloud Files, or edit its path manually.')); ?></p>
                            </div>
                            <label>
                                <?php p($l->t('Label')); ?>
                                <input type="text" name="label" value="<?php p((string)($root['label'] ?? '')); ?>" />
                            </label>
                            <button type="submit" class="button secondary"><?php p($l->t('Update root')); ?></button>
                        </form>
                        <div class="library-root-card-actions">
                            <form method="post" action="<?php p($root['rootScanUrl']); ?>" class="library-inline-form" data-library-operation="scan-root">
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
                                    <input type="text" name="confirmDeleteText" placeholder="<?php p($l->t('DELETE')); ?>" autocomplete="off" />
                                </label>
                                <button type="submit" class="button secondary"><?php p($l->t('Delete root')); ?></button>
                            </form>
                            <p class="library-muted"><?php p($l->t('Deleting a Library root removes only Library index and catalogue rows for that root, but never deletes source files from Nextcloud Files.')); ?></p>
                        </details>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    <section class="library-settings-subsection library-settings-section-scan" aria-labelledby="library-scan-progress-heading">
        <header class="library-settings-summary-row">
            <?php p($l->t('Scan and repair')); ?>
            <span class="library-settings-count-badge"><?php p($l->n('%n recent job', '%n recent jobs', count($scanJobHistory))); ?></span>
        </header>
        <div class="library-settings-action-strip">
            <form method="post" action="<?php p($_['scanRunUrl']); ?>" data-library-operation="scan-roots">
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
            <p><strong><?php p($l->t('All found publications')); ?>:</strong> <span data-library-total-publications><?php p((string)($_['totalPublications'] ?? 0)); ?></span></p>
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
                    <dt data-library-field="scanJobStatus"><?php p($l->t('Scan job status')); ?></dt>
                    <dd data-library-scan-status><?php p((string)$latestScanJob['status']); ?></dd>
                    <dt data-library-field="scanScope"><?php p($l->t('Scan scope')); ?></dt>
                    <dd data-library-scan-scope><?php p((string)($latestScanJob['scopeLabel'] ?? $latestScanJob['scopeType'] ?? 'all')); ?></dd>
                    <dt data-library-field="rootsTotal"><?php p($l->t('Roots total')); ?></dt>
                    <dd data-library-scan-roots-total><?php p((string)$latestScanJob['rootsTotal']); ?></dd>
                    <dt data-library-field="filesIndexed"><?php p($l->t('Files indexed')); ?></dt>
                    <dd data-library-scan-files-indexed><?php p((string)$latestScanJob['filesIndexed']); ?></dd>
                    <dt data-library-field="errorCount"><?php p($l->t('Error count')); ?></dt>
                    <dd data-library-scan-error-count><?php p((string)$latestScanJob['errorCount']); ?></dd>
                    <dt data-library-field="durationSeconds"><?php p($l->t('Duration in seconds')); ?></dt>
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

        <details class="library-scan-history" aria-labelledby="library-scan-history-heading" data-library-scan-history>
            <summary id="library-scan-history-heading"><?php p($l->t('Scan history')); ?></summary>
            <?php if (count($scanJobHistory) === 0): ?>
                <p class="library-muted"><?php p($l->t('No recent scan history yet.')); ?></p>
            <?php else: ?>
                <ol class="library-scan-history-list">
                    <?php foreach ($scanJobHistory as $historyJob): ?>
                        <li>
                            <dl>
                                <dt data-library-field="historyScanJobStatus"><?php p($l->t('Scan job status')); ?></dt>
                                <dd><?php p((string)$historyJob['status']); ?></dd>
                                <dt data-library-field="historyScanScope"><?php p($l->t('Scan scope')); ?></dt>
                                <dd><?php p((string)($historyJob['scopeLabel'] ?? $historyJob['scopeType'] ?? 'all')); ?></dd>
                                <dt data-library-field="historyFilesIndexed"><?php p($l->t('Files indexed')); ?></dt>
                                <dd><?php p((string)$historyJob['filesIndexed']); ?></dd>
                                <dt data-library-field="historyErrorCount"><?php p($l->t('Error count')); ?></dt>
                                <dd><?php p((string)$historyJob['errorCount']); ?></dd>
                                <dt data-library-field="historyDurationSeconds"><?php p($l->t('Duration in seconds')); ?></dt>
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
        </details>
    </section>
    </details>

    <details class="library-panel library-settings-section library-settings-section-metadata" aria-labelledby="library-settings-metadata-heading">
        <summary id="library-settings-metadata-heading" class="library-settings-summary-row"><?php p($l->t('Metadata and covers')); ?></summary>
        <p class="library-muted"><?php p($l->t('Metadata review and cover maintenance are available from publication details and Review.')); ?></p>
    </details>

    <details class="library-panel library-settings-section library-settings-section-portability" aria-labelledby="library-settings-portability-heading">
        <summary id="library-settings-portability-heading" class="library-settings-summary-row">
            <?php p($l->t('Import and export')); ?>
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
            <button type="submit" class="button secondary library-localization-long-control"><?php p($l->t('Preview metadata import')); ?></button>
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

    </details>

    <details class="library-panel library-settings-section library-settings-section-diagnostics" aria-labelledby="library-indexed-files-heading">
        <summary id="library-indexed-files-heading" class="library-settings-summary-row">
            <?php p($l->t('Diagnostics')); ?>
            <span class="library-settings-count-badge"><?php p($l->n('%n file', '%n files', (int)($fileStatusCounts['total'] ?? 0))); ?></span>
        </summary>
        <dl><dt><?php p($l->t('Indexed')); ?></dt><dd><?php p((string)($fileStatusCounts['indexed'] ?? 0)); ?></dd><dt><?php p($l->t('Missing')); ?></dt><dd><?php p((string)($fileStatusCounts['missing'] ?? 0)); ?></dd><dt><?php p($l->t('Metadata errors')); ?></dt><dd><?php p((string)($fileStatusCounts['metadata_error'] ?? 0)); ?></dd></dl>
        <p><a class="button secondary" href="<?php p($_['scanMetadataErrorsExportUrl']); ?>"><?php p($l->t('Download diagnostics')); ?></a></p>
    </details>
</div>
