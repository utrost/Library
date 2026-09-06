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
                        <strong><?php p($root['label'] ?: $root['path']); ?></strong>
                        <span><?php p($root['path']); ?></span>
                        <span><?php p($root['enabled'] ? $l->t('enabled') : $l->t('disabled')); ?></span>
                        <?php if ($root['lastScanAt']): ?>
                            <span><?php p($l->t('last scan:')); ?> <?php p(date('Y-m-d H:i', $root['lastScanAt'])); ?></span>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <form method="post" action="<?php p($_['scanRunUrl']); ?>">
            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
            <button type="submit"><?php p($l->t('Scan enabled roots')); ?></button>
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
