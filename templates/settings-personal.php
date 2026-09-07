<?php
/** @var array $_ */
$roots = $_['roots'] ?? [];
$files = $_['files'] ?? [];
$latestScanJob = $_['latestScanJob'] ?? null;
$scanJobHistory = $_['scanJobHistory'] ?? [];
?>
<div id="library-settings" class="library-app library-settings">
    <section class="library-panel" aria-labelledby="library-settings-heading">
        <h2 id="library-settings-heading"><?php p($l->t('Library settings')); ?></h2>
        <p class="library-muted"><?php p($l->t('Configure the folders that become Library shelves, run scans, and inspect scan/index diagnostics.')); ?></p>
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

        <p class="library-detail-actions">
            <a href="<?php p($_['metadataExportUrl']); ?>" class="button secondary"><?php p($l->t('Export corrected metadata')); ?></a>
        </p>

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
                        </li>
                    <?php endforeach; ?>
                </ol>
            <?php endif; ?>
        </section>
    </section>

    <section class="library-panel" aria-labelledby="library-indexed-files-heading">
        <h2 id="library-indexed-files-heading"><?php p($l->t('Indexed files')); ?></h2>
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
    </section>
</div>
