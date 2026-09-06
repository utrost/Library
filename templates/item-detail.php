<?php
/** @var array $_ */
$item = $_['item'] ?? [];
$comments = $item['nextcloudComments'] ?? ['count' => 0, 'recent' => []];
$tags = $item['nextcloudTags'] ?? [];
$metadataRows = [
    'Title' => $item['title'] ?? '',
    'Subtitle' => $item['subtitle'] ?? '',
    'Creators' => $item['creators'] ?? '',
    'Publication' => $item['publication'] ?? '',
    'Publication date' => $item['publicationDate'] ?? '',
    'Publication type' => $item['publicationType'] ?? '',
    'Publisher' => $item['publisher'] ?? '',
    'Language' => $item['language'] ?? '',
];
$fileRows = [
    'fileId' => $item['fileId'] ?? '',
    'libraryFileId' => $item['libraryFileId'] ?? '',
    'path' => $item['cachedPath'] ?? '',
    'shelf' => $item['shelf'] ?? '',
    'format' => strtoupper((string)($item['extension'] ?? '')),
    'mimeType' => $item['mimeType'] ?? '',
    'scanStatus' => $item['scanStatus'] ?? '',
    'scanError' => $item['scanError'] ?? '',
];
?>
<div id="app-content" class="library-app-content">
    <main id="library-app" class="library-app library-item-detail" tabindex="-1">
        <nav class="library-detail-nav" aria-label="<?php p($l->t('Publication navigation')); ?>">
            <a href="<?php p($_['catalogueUrl'] ?? ''); ?>" class="button secondary"><?php p($l->t('Back to catalogue')); ?></a>
        </nav>

        <article class="library-panel" aria-labelledby="library-item-detail-heading">
            <div class="library-detail-hero">
                <img class="library-detail-cover" src="<?php p($item['coverUrl'] ?? ''); ?>" alt="<?php p($l->t('Cover for %s', [$item['title'] ?? $l->t('publication')])); ?>" loading="lazy" />
                <div>
                    <p class="library-muted"><?php p($l->t('Publication details')); ?></p>
                    <h2 id="library-item-detail-heading"><?php p((string)($item['title'] ?? $l->t('Untitled publication'))); ?></h2>
                    <?php if (($item['creators'] ?? '') !== ''): ?>
                        <p class="library-creator"><?php p((string)$item['creators']); ?></p>
                    <?php endif; ?>
                    <p class="library-muted">
                        <?php p((string)($item['publicationType'] ?? 'other')); ?>
                        <?php if (($item['extension'] ?? '') !== ''): ?>
                            · <?php p($l->t('Format: %s', [strtoupper((string)$item['extension'])])); ?>
                        <?php endif; ?>
                        <?php if (($item['shelf'] ?? '') !== ''): ?>
                            · <?php p($l->t('Shelf: %s', [(string)$item['shelf']])); ?>
                        <?php endif; ?>
                    </p>
                    <p class="library-detail-actions">
                        <a href="<?php p($item['openUrl'] ?? '#'); ?>" class="button primary"><?php p($l->t('Read')); ?></a>
                        <a href="<?php p($item['filesUrl'] ?? '#'); ?>" class="button secondary"><?php p($l->t('Show in Files')); ?></a>
                    </p>
                </div>
            </div>
        </article>

        <section class="library-panel" aria-labelledby="library-publication-metadata-heading">
            <h3 id="library-publication-metadata-heading"><?php p($l->t('Publication metadata')); ?></h3>
            <dl class="library-item-metadata">
                <?php foreach ($metadataRows as $label => $value): ?>
                    <dt><?php p($l->t($label)); ?></dt>
                    <dd><?php p(trim((string)$value) !== '' ? (string)$value : '—'); ?></dd>
                <?php endforeach; ?>
            </dl>
        </section>

        <section class="library-panel" aria-labelledby="library-file-metadata-heading">
            <h3 id="library-file-metadata-heading"><?php p($l->t('File metadata')); ?></h3>
            <dl class="library-item-metadata">
                <?php foreach ($fileRows as $label => $value): ?>
                    <dt><?php p($label); ?></dt>
                    <dd class="<?php p($label === 'scanError' && trim((string)$value) !== '' ? 'library-scan-error' : ''); ?>"><?php p(trim((string)$value) !== '' ? (string)$value : '—'); ?></dd>
                <?php endforeach; ?>
            </dl>
        </section>

        <section class="library-panel" aria-labelledby="library-provenance-heading">
            <h3 id="library-provenance-heading"><?php p($l->t('Provenance')); ?></h3>
            <dl class="library-item-metadata">
                <dt>metadataSource</dt>
                <dd><?php p((string)($item['metadataSource'] ?? '')); ?></dd>
                <dt>userEdited</dt>
                <dd><?php p(($item['userEdited'] ?? false) ? $l->t('yes') : $l->t('no')); ?></dd>
            </dl>
            <p class="library-muted"><?php p($l->t('User-edited publication metadata is preserved across rescans. Scanner values remain provenance-labelled.')); ?></p>
        </section>

        <section class="library-panel" aria-labelledby="library-nextcloud-metadata-heading">
            <h3 id="library-nextcloud-metadata-heading"><?php p($l->t('Nextcloud metadata')); ?></h3>
            <div class="library-nextcloud-tags" aria-label="nextcloudTags">
                <strong><?php p($l->t('Nextcloud tags')); ?></strong>
                <?php if (count($tags) === 0): ?>
                    <span class="library-muted"><?php p($l->t('No Nextcloud tags')); ?></span>
                <?php else: ?>
                    <?php foreach ($tags as $tag): ?>
                        <span class="library-tag"><?php p((string)$tag['name']); ?></span>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <div class="library-nextcloud-comments" aria-label="nextcloudComments">
                <strong><?php p($l->t('Nextcloud comments')); ?></strong>
                <?php if (($comments['count'] ?? 0) === 0): ?>
                    <span class="library-muted"><?php p($l->t('No Nextcloud comments')); ?></span>
                <?php else: ?>
                    <span><?php p($l->t('%n comment', '%n comments', (int)$comments['count'])); ?></span>
                    <ul class="library-comment-list">
                        <?php foreach (($comments['recent'] ?? []) as $comment): ?>
                            <li>
                                <span class="library-muted"><?php p((string)($comment['actorId'] ?? '')); ?> · <?php p((string)($comment['createdAt'] ?? '')); ?></span>
                                <span><?php p((string)($comment['message'] ?? '')); ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </section>
    </main>
</div>
