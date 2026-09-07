<?php
/** @var array $_ */
$item = $_['item'] ?? [];
$comments = $item['nextcloudComments'] ?? ['count' => 0, 'recent' => []];
$tags = $item['nextcloudTags'] ?? [];
$tagSuggestions = is_array($item['tagSuggestions'] ?? null) ? $item['tagSuggestions'] : [];
$publicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'];
$workflowStatuses = [
    '' => 'No workflow status',
    'to-read' => 'To read',
    'reading' => 'Reading',
    'finished' => 'Finished',
    'reference' => 'Reference',
    'paused' => 'Paused',
    'abandoned' => 'Abandoned',
    'needs-action' => 'Needs action',
];
$metadataRows = [
    'Title' => $item['title'] ?? '',
    'Subtitle' => $item['subtitle'] ?? '',
    'Creators' => $item['creators'] ?? '',
    'Publication' => $item['publication'] ?? '',
    'Publication date' => $item['publicationDate'] ?? '',
    'Publication type' => $item['publicationType'] ?? '',
    'Workflow status' => $workflowStatuses[(string)($item['workflowStatus'] ?? '')] ?? ($item['workflowStatus'] ?? ''),
    'Last opened' => !empty($item['lastOpenedAt']) ? gmdate('Y-m-d H:i', (int)$item['lastOpenedAt']) . ' UTC' : '',
    'Publisher' => $item['publisher'] ?? '',
    'Language' => $item['language'] ?? '',
    'Genres' => implode('; ', is_array($item['genres'] ?? null) ? $item['genres'] : []),
    'Classifications' => implode('; ', is_array($item['classifications'] ?? null) ? $item['classifications'] : []),
    'Description' => $item['description'] ?? '',
];
$fieldSources = is_array($item['fieldSources'] ?? null) ? $item['fieldSources'] : [];
$fieldValues = is_array($item['fieldValues'] ?? null) ? $item['fieldValues'] : [];
$fieldProvenanceRows = [
    'publicationType' => 'Publication type',
    'title' => 'Title',
    'subtitle' => 'Subtitle',
    'creators' => 'Creators',
    'publication' => 'Publication',
    'publicationDate' => 'Publication date',
    'language' => 'Language',
    'publisher' => 'Publisher',
    'description' => 'Description',
    'genres' => 'Genres',
    'classifications' => 'Classifications',
];
$scannerCandidateCount = count(array_filter($fieldValues, static fn ($value) => trim((string)$value) !== ''));
$scannerConflictCount = 0;
foreach ($fieldProvenanceRows as $field => $_label) {
    $rawCurrentValue = $item[$field] ?? '';
    $currentValue = is_array($rawCurrentValue) ? json_encode(array_values($rawCurrentValue)) : (string)$rawCurrentValue;
    $candidateValue = (string)($fieldValues[$field] ?? '');
    if (trim($candidateValue) !== '' && $candidateValue !== $currentValue) {
        $scannerConflictCount++;
    }
}
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
                    <div class="library-detail-actions">
                        <form method="post" action="<?php p($item['starUrl'] ?? ''); ?>" class="library-inline-form library-star-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <input type="hidden" name="returnTo" value="details" />
                            <input type="hidden" name="starred" value="<?php p(($item['starred'] ?? false) ? '0' : '1'); ?>" />
                            <button type="submit" class="button secondary"><?php p(($item['starred'] ?? false) ? $l->t('Unstar this publication') : $l->t('Star this publication')); ?></button>
                        </form>
                        <form method="post" action="<?php p($item['workflowStatusUrl'] ?? ''); ?>" class="library-inline-form library-workflow-status-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <input type="hidden" name="returnTo" value="details" />
                            <label>
                                <?php p($l->t('Workflow status')); ?>
                                <select name="workflowStatus">
                                    <?php foreach ($workflowStatuses as $status => $label): ?>
                                        <option value="<?php p($status); ?>" <?php if (($item['workflowStatus'] ?? '') === $status) { print_unescaped('selected'); } ?>><?php p($l->t($label)); ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </label>
                            <button type="submit" class="button secondary"><?php p($l->t('Save status')); ?></button>
                        </form>
                        <a href="<?php p($item['openUrl'] ?? '#'); ?>" class="button primary"><?php p($l->t('Read')); ?></a>
                        <a href="<?php p($item['filesUrl'] ?? '#'); ?>" class="button secondary"><?php p($l->t('Show in Files')); ?></a>
                        <a href="<?php p($item['downloadUrl'] ?? '#'); ?>" class="button secondary"><?php p($l->t('Download source')); ?></a>
                        <a href="<?php p($item['coverRefreshUrl'] ?? ($item['coverUrl'] ?? '#')); ?>" class="button secondary library-cover-refresh-action"><?php p($l->t('Refresh cover preview')); ?></a>
                    </div>
                    <aside class="library-cover-quality-explanation" aria-labelledby="library-cover-quality-heading">
                        <h3 id="library-cover-quality-heading"><?php p($l->t('How Library chose this cover')); ?></h3>
                        <p><?php p((string)($item['coverQualityExplanation'] ?? $l->t('Library asks Nextcloud preview first, then format-specific cover fallbacks, and finally shows a stable placeholder.'))); ?></p>
                        <p class="library-muted"><?php p($l->t('If you see a placeholder or a stale image, use Refresh cover preview to retry without browser caching. App-owned cover cache and manual cover override are still future work.')); ?></p>
                    </aside>
                </div>
            </div>
        </article>

        <div class="library-detail-workbench">
            <div class="library-detail-primary">
        <section class="library-panel library-detail-section-meta" aria-labelledby="library-publication-metadata-heading">
            <h3 id="library-publication-metadata-heading"><?php p($l->t('Publication metadata')); ?></h3>
            <dl class="library-item-metadata">
                <?php foreach ($metadataRows as $label => $value): ?>
                    <dt><?php p($l->t($label)); ?></dt>
                    <dd><?php p(trim((string)$value) !== '' ? (string)$value : '—'); ?></dd>
                <?php endforeach; ?>
            </dl>

            <form method="post" action="<?php p($item['updateUrl'] ?? ''); ?>" class="library-item-form library-detail-edit-form library-detail-section-edit" aria-labelledby="library-publication-edit-heading">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <input type="hidden" name="returnTo" value="details" />
                <h4 id="library-publication-edit-heading"><?php p($l->t('Edit publication metadata')); ?></h4>
                <p class="library-muted library-metadata-guidance"><?php p($l->t('Non-blocking guidance: these hints document useful metadata shapes, but they do not block saving.')); ?></p>
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
                    <input type="text" name="creators" aria-describedby="library-creators-guidance" value="<?php p((string)($item['creators'] ?? '')); ?>" />
                    <span id="library-creators-guidance" class="library-muted library-metadata-guidance"><?php p($l->t('Separate multiple creators with semicolons.')); ?></span>
                </label>
                <label>
                    <?php p($l->t('Publication')); ?>
                    <input type="text" name="publication" value="<?php p((string)($item['publication'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Publication date')); ?>
                    <input type="text" name="publicationDate" aria-describedby="library-publication-date-guidance" value="<?php p((string)($item['publicationDate'] ?? '')); ?>" />
                    <span id="library-publication-date-guidance" class="library-muted library-metadata-guidance"><?php p($l->t('Use YYYY, YYYY-MM, or YYYY-MM-DD.')); ?></span>
                </label>
                <label>
                    <?php p($l->t('Publisher')); ?>
                    <input type="text" name="publisher" value="<?php p((string)($item['publisher'] ?? '')); ?>" />
                </label>
                <label>
                    <?php p($l->t('Language')); ?>
                    <input type="text" name="language" aria-describedby="library-language-guidance" value="<?php p((string)($item['language'] ?? '')); ?>" />
                    <span id="library-language-guidance" class="library-muted library-metadata-guidance"><?php p($l->t('Use short language codes such as de, en, fr.')); ?></span>
                </label>
                <label>
                    <?php p($l->t('Genres')); ?>
                    <input type="text" name="genres" list="library-genre-suggestions" aria-describedby="library-genres-guidance" value="<?php p(implode('; ', is_array($item['genres'] ?? null) ? $item['genres'] : [])); ?>" />
                    <datalist id="library-genre-suggestions">
                        <option value="fiction"></option>
                        <option value="photography"></option>
                        <option value="science fiction"></option>
                        <option value="history"></option>
                    </datalist>
                    <span id="library-genres-guidance" class="library-muted library-metadata-guidance"><?php p($l->t('Separate multiple genres with semicolons. These are Library metadata, not Nextcloud tags.')); ?></span>
                </label>
                <label>
                    <?php p($l->t('Classifications')); ?>
                    <input type="text" name="classifications" list="library-classification-suggestions" aria-describedby="library-classifications-guidance" value="<?php p(implode('; ', is_array($item['classifications'] ?? null) ? $item['classifications'] : [])); ?>" />
                    <datalist id="library-classification-suggestions">
                        <option value="reference collection"></option>
                        <option value="manual"></option>
                        <option value="catalogue"></option>
                        <option value="OCR-needed"></option>
                    </datalist>
                    <span id="library-classifications-guidance" class="library-muted library-metadata-guidance"><?php p($l->t('Separate multiple classifications with semicolons. Use Nextcloud tags for ad-hoc cross-app labels.')); ?></span>
                </label>
                <label>
                    <?php p($l->t('Description')); ?>
                    <textarea name="description" rows="5"><?php p((string)($item['description'] ?? '')); ?></textarea>
                </label>
                <button type="submit" class="button primary"><?php p($l->t('Save metadata')); ?></button>
            </form>
        </section>
            </div>
            <div class="library-detail-secondary">

        <section class="library-panel library-detail-section-file" aria-labelledby="library-file-metadata-heading">
            <h3 id="library-file-metadata-heading"><?php p($l->t('File metadata')); ?></h3>
            <dl class="library-item-metadata">
                <?php foreach ($fileRows as $label => $value): ?>
                    <dt><?php p($label); ?></dt>
                    <dd class="<?php p($label === 'scanError' && trim((string)$value) !== '' ? 'library-scan-error' : ''); ?>"><?php p(trim((string)$value) !== '' ? (string)$value : '—'); ?></dd>
                <?php endforeach; ?>
            </dl>
            <?php if (($item['scanStatus'] ?? '') === 'missing'): ?>
                <form method="post" action="<?php p($item['forgetMissingUrl'] ?? ''); ?>" class="library-forget-missing-form">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                    <input type="hidden" name="returnTo" value="details" />
                    <p class="library-muted"><?php p($l->t('This removes this Library catalogue entry for a missing file. It does not delete source files from Nextcloud Files.')); ?></p>
                    <button type="submit" class="button secondary"><?php p($l->t('Forget missing item')); ?></button>
                </form>
            <?php endif; ?>
        </section>

        <section class="library-panel library-detail-section-provenance" aria-labelledby="library-provenance-heading">
            <h3 id="library-provenance-heading"><?php p($l->t('Provenance')); ?></h3>
            <dl class="library-item-metadata">
                <dt>metadataSource</dt>
                <dd><?php p((string)($item['metadataSource'] ?? '')); ?></dd>
                <dt>userEdited</dt>
                <dd><?php p(($item['userEdited'] ?? false) ? $l->t('yes') : $l->t('no')); ?></dd>
            </dl>
            <p class="library-muted"><?php p($l->t('User-edited publication metadata is preserved across rescans. Scanner values remain provenance-labelled.')); ?></p>
            <div class="library-field-provenance" aria-label="fieldSources">
                <h4><?php p($l->t('Field-level provenance')); ?></h4>
                <div class="library-metadata-correction-summary" aria-label="<?php p($l->t('Metadata correction summary')); ?>">
                    <strong><?php p($l->t('Read-only summary')); ?></strong>
                    <span><?php p($l->t('Scanner candidates')); ?>: <?php p((string)$scannerCandidateCount); ?></span>
                    <span><?php p($l->t('Fields differing from scanner')); ?>: <?php p((string)$scannerConflictCount); ?></span>
                </div>
                <?php $resetFieldsUrl = (string)($item['resetFieldsUrl'] ?? ''); ?>
                <?php if ($resetFieldsUrl !== '' && count($fieldValues) > 0): ?>
                    <form method="post" action="<?php p($resetFieldsUrl); ?>" class="library-fields-reset-form">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                        <input type="hidden" name="returnTo" value="details" />
                        <button type="submit" class="button secondary"><?php p($l->t('Reset all fields to scanner')); ?></button>
                    </form>
                <?php endif; ?>
                <table>
                    <thead>
                        <tr>
                            <th><?php p($l->t('Field')); ?></th>
                            <th><?php p($l->t('Scanner source')); ?></th>
                            <th><?php p($l->t('Current value')); ?></th>
                            <th><?php p($l->t('Scanner candidate')); ?></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($fieldProvenanceRows as $field => $label): ?>
                            <?php $rawCurrentValue = $item[$field] ?? ''; ?>
                            <?php $currentValue = is_array($rawCurrentValue) ? json_encode(array_values($rawCurrentValue)) : (string)$rawCurrentValue; ?>
                            <?php $candidateValue = (string)($fieldValues[$field] ?? ''); ?>
                            <?php $resetUrl = (string)($item['resetFieldUrl'] ?? ''); ?>
                            <?php $fieldDiffersFromScanner = trim($candidateValue) !== '' && $candidateValue !== $currentValue; ?>
                            <tr class="<?php p($fieldDiffersFromScanner ? 'library-field-conflict' : ''); ?>">
                                <th scope="row"><?php p($l->t($label)); ?></th>
                                <td><?php p((string)($fieldSources[$field] ?? ($item['metadataSource'] ?? ''))); ?></td>
                                <td>
                                    <?php p(trim($currentValue) !== '' ? $currentValue : '—'); ?>
                                    <?php if ($fieldDiffersFromScanner): ?>
                                        <span class="library-field-conflict-badge" aria-label="<?php p($l->t('Current value differs from scanner candidate')); ?>"><?php p($l->t('Differs from scanner')); ?></span>
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <?php p(trim($candidateValue) !== '' ? $candidateValue : '—'); ?>
                                    <?php if ($resetUrl !== '' && trim($candidateValue) !== '' && $candidateValue !== $currentValue): ?>
                                        <form method="post" action="<?php p($resetUrl); ?>" class="library-field-reset-form">
                                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                            <input type="hidden" name="returnTo" value="details" />
                                            <input type="hidden" name="field" value="<?php p((string)$field); ?>" />
                                            <button type="submit" class="button secondary"><?php p($l->t('Reset to scanner')); ?></button>
                                        </form>
                                    <?php endif; ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="library-panel library-detail-section-nextcloud" aria-labelledby="library-nextcloud-metadata-heading">
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
                        <input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" placeholder="<?php p($l->t('photography, project-library...')); ?>" />
                    </label>
                    <datalist id="library-nextcloud-tag-suggestions">
                        <?php foreach ($tagSuggestions as $tagName): ?>
                            <option value="<?php p((string)$tagName); ?>"></option>
                        <?php endforeach; ?>
                    </datalist>
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
            </div>
        </div>
    </main>
</div>
