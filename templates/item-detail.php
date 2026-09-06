<?php
/** @var array $_ */
$item = $_['item'] ?? [];
$comments = $item['nextcloudComments'] ?? ['count' => 0, 'recent' => []];
$tags = $item['nextcloudTags'] ?? [];
$publicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'];
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

            <form method="post" action="<?php p($item['updateUrl'] ?? ''); ?>" class="library-item-form library-detail-edit-form" aria-labelledby="library-publication-edit-heading">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <input type="hidden" name="returnTo" value="details" />
                <h4 id="library-publication-edit-heading"><?php p($l->t('Edit publication metadata')); ?></h4>
                <label>
                    <?php p($l->t('Title')); ?>
                    <input type="text" name="title" value="<?php p((string)($item['title'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Subtitle')); ?>
                    <input type="text" name="subtitle" value="<?php p((string)($item['subtitle'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Type')); ?>
                    <select name="publicationType">
                        <?php foreach ($publicationTypes as $type): ?>
                            <option value="<?php p($type); ?>" <?php if (($item['publicationType'] ?? 'other') === $type) { print_unescaped('selected'); } ?>><?php p($type); ?></option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <label>
                    <?php p($l->t('Creators')); ?>
                    <input type="text" name="creators" value="<?php p((string)($item['creators'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Publication')); ?>
                    <input type="text" name="publication" value="<?php p((string)($item['publication'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Publication date')); ?>
                    <input type="text" name="publicationDate" value="<?php p((string)($item['publicationDate'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Publisher')); ?>
                    <input type="text" name="publisher" value="<?php p((string)($item['publisher'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Language')); ?>
                    <input type="text" name="language" value="<?php p((string)($item['language'] ?? '')); ?>" />
                </label>
                <button type="submit" class="button primary"><?php p($l->t('Save metadata')); ?></button>
            </form>
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
            <div class="library-detail-tag-editor" aria-label="nextcloudTagEditor">
                <?php if (count($tags) > 0): ?>
                    <ul class="library-tag-remove-list" aria-label="<?php p($l->t('Remove Nextcloud tag')); ?>">
                        <?php foreach ($tags as $tag): ?>
                            <li>
                                <span class="library-tag"><?php p((string)$tag['name']); ?></span>
                                <form method="post" action="<?php p((string)($tag['removeUrl'] ?? '')); ?>" class="library-inline-form">
                                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                    <input type="hidden" name="returnTo" value="details" />
                                    <button type="submit"><?php p($l->t('Remove tag')); ?></button>
                                </form>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
                <form method="post" action="<?php p($item['tagUrl'] ?? ''); ?>" class="library-tag-form">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                    <input type="hidden" name="returnTo" value="details" />
                    <label>
                        <?php p($l->t('Add Nextcloud tag')); ?>
                        <input type="text" name="nextcloudTagName" placeholder="<?php p($l->t('photography, project-library...')); ?>" />
                    </label>
                    <button type="submit"><?php p($l->t('Add tag')); ?></button>
                </form>
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
                <form method="post" action="<?php p($item['commentUrl'] ?? ''); ?>" class="library-detail-comment-form">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                    <input type="hidden" name="returnTo" value="details" />
                    <label>
                        <?php p($l->t('Add Nextcloud comment')); ?>
                        <textarea name="commentMessage" rows="2" placeholder="<?php p($l->t('file-level note...')); ?>"></textarea>
                    </label>
                    <button type="submit"><?php p($l->t('Add comment')); ?></button>
                </form>
            </div>
        </section>
    </main>
</div>
