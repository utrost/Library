<?php
/** @var array $_ */
$item = $_['item'] ?? [];
$comments = $item['nextcloudComments'] ?? ['count' => 0, 'recent' => []];
$tags = $item['nextcloudTags'] ?? [];
$tagSuggestions = is_array($item['tagSuggestions'] ?? null) ? $item['tagSuggestions'] : [];
$tagFeedback = is_array($item['tagFeedback'] ?? null) ? $item['tagFeedback'] : null;
$metadataSaved = (bool)($item['metadataSaved'] ?? false);
$publicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'];
$languageOptions = [
    'de' => 'German (de)',
    'en' => 'English (en)',
    'fr' => 'French (fr)',
    'es' => 'Spanish (es)',
    'it' => 'Italian (it)',
    'nl' => 'Dutch (nl)',
    'en-US' => 'English, US (en-US)',
    'en-GB' => 'English, UK (en-GB)',
];
$genreOptions = ['fiction', 'non-fiction', 'photography', 'science fiction', 'history', 'technical', 'manual', 'reference'];
$publisherSuggestions = ['Packt', "O'Reilly Media", 'Manning', 'No Starch Press', 'Apress', 'Springer', 'Penguin', 'Taschen'];
$metadataHelp = [
    'creators' => $l->t('One creator per line. Existing semicolon-separated values are still accepted.'),
    'publicationDate' => $l->t('Use YYYY, YYYY-MM, or YYYY-MM-DD.'),
    'language' => $l->t('Choose one or more language codes.'),
    'genres' => $l->t('Choose one or more Library genres. Use Nextcloud tags for ad-hoc cross-app labels.'),
    'classifications' => $l->t('Separate multiple classifications with semicolons. Use Nextcloud tags for ad-hoc cross-app labels.'),
];
$selectedLanguages = array_values(array_filter(array_map('trim', preg_split('/[;,\n]+/u', (string)($item['language'] ?? '')) ?: []), static fn ($value) => $value !== ''));
$selectedGenres = is_array($item['genres'] ?? null) ? $item['genres'] : [];
$creatorLines = implode("\n", array_filter(array_map('trim', preg_split('/[;\n]+/u', (string)($item['creators'] ?? '')) ?: []), static fn ($value) => $value !== ''));
$currentPublisher = trim((string)($item['publisher'] ?? ''));
if ($currentPublisher !== '' && !in_array($currentPublisher, $publisherSuggestions, true)) {
    array_unshift($publisherSuggestions, $currentPublisher);
}
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
$metadataHealthFields = [
    'title' => 'Title',
    'creators' => 'Creators',
    'publicationDate' => 'Publication date',
    'language' => 'Language',
    'genres' => 'Genres',
    'publisher' => 'Publisher',
    'description' => 'Description',
    'personalRating' => 'Personal rating',
];
$weakFields = [];
foreach ($metadataHealthFields as $field => $label) {
    $rawValue = $item[$field] ?? '';
    $hasValue = is_array($rawValue) ? count(array_filter($rawValue, static fn ($value) => trim((string)$value) !== '')) > 0 : trim((string)$rawValue) !== '';
    if (!$hasValue) {
        $weakFields[$field] = $label;
    }
}
$metadataHealthTotal = count($metadataHealthFields);
$metadataHealthComplete = $metadataHealthTotal - count($weakFields);
$metadataHealth = [
    'complete' => $metadataHealthComplete,
    'total' => $metadataHealthTotal,
    'score' => $metadataHealthTotal > 0 ? (int)round(($metadataHealthComplete / $metadataHealthTotal) * 100) : 100,
    'weakFields' => $weakFields,
];
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
                    <div class="library-detail-actionbar">
                        <div class="library-detail-primary-actions">
                            <a href="<?php p($item['openUrl'] ?? '#'); ?>" class="button primary"><?php p($l->t('Read')); ?></a>
                            <details class="library-detail-more-actions">
                                <summary><?php p($l->t('More actions')); ?></summary>
                                <div>
                                    <a href="<?php p($item['filesUrl'] ?? '#'); ?>" class="button secondary"><?php p($l->t('Show in Files')); ?></a>
                                    <a href="<?php p($item['downloadUrl'] ?? '#'); ?>" class="button secondary"><?php p($l->t('Download source')); ?></a>
                                    <a href="<?php p($item['coverRefreshPageUrl'] ?? ($item['coverUrl'] ?? '#')); ?>" class="button secondary library-cover-refresh-action" title="<?php p((string)($item['coverQualityExplanation'] ?? $l->t('Library asks Nextcloud preview first, then format-specific cover fallbacks, and finally shows a stable placeholder.'))); ?>" aria-label="<?php p($l->t('Refresh cover preview. How Library chose this cover: %s', [(string)($item['coverQualityExplanation'] ?? '')])); ?>"><?php p($l->t('Refresh cover preview')); ?></a>
                                </div>
                            </details>
                        </div>
                        <div class="library-detail-secondary-actions">
                            <form method="post" action="<?php p($item['starUrl'] ?? ''); ?>" class="library-inline-form library-star-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <input type="hidden" name="returnTo" value="details" />
                                <input type="hidden" name="starred" value="<?php p(($item['starred'] ?? false) ? '0' : '1'); ?>" />
                                <button type="submit" class="library-star-button <?php p(($item['starred'] ?? false) ? 'library-star-button--starred' : ''); ?>" aria-pressed="<?php p(($item['starred'] ?? false) ? 'true' : 'false'); ?>" title="<?php p(($item['starred'] ?? false) ? $l->t('Unstar this publication') : $l->t('Star this publication')); ?>" aria-label="<?php p(($item['starred'] ?? false) ? $l->t('Unstar this publication') : $l->t('Star this publication')); ?>"><?php p(($item['starred'] ?? false) ? '★' : '☆'); ?></button>
                            </form>
                            <form method="post" action="<?php p($item['workflowStatusUrl'] ?? ''); ?>" class="library-inline-form library-workflow-status-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <input type="hidden" name="returnTo" value="details" />
                                <span class="library-workflow-status-pill"><span><?php p($l->t('Workflow status')); ?></span><select name="workflowStatus" onchange="this.form.submit()" aria-label="<?php p($l->t('Workflow status')); ?>">
                                    <?php foreach ($workflowStatuses as $status => $label): ?>
                                        <option value="<?php p($status); ?>" <?php if (($item['workflowStatus'] ?? '') === $status) { print_unescaped('selected'); } ?>><?php p($l->t($label)); ?></option>
                                    <?php endforeach; ?>
                                </select></span>
                                <button type="submit" class="button secondary library-workflow-status-submit-fallback"><?php p($l->t('Save status')); ?></button>
                            </form>
                        </div>
                    </div>
                    <details class="library-cover-override-panel">
                        <summary><?php p($l->t('Manual cover override')); ?></summary>
                        <?php if (($item['coverUploadError'] ?? '') !== ''): ?>
                            <p class="library-validation-feedback" role="alert"><?php p($l->t((string)$item['coverUploadError'])); ?></p>
                        <?php endif; ?>
                        <form method="post" enctype="multipart/form-data" action="<?php p($item['coverOverrideActionUrl'] ?? ''); ?>" class="library-cover-override-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <label>
                                <?php p($l->t('Cover image URL')); ?>
                                <input type="url" name="coverOverrideUrl" value="<?php p((string)($item['coverOverrideUrl'] ?? '')); ?>" placeholder="https://…" />
                            </label>
                            <label>
                                <?php p($l->t('Upload cover image')); ?>
                                <input type="file" name="coverOverrideFile" accept="image/jpeg,image/png,image/webp" />
                                <small><?php p($l->t('JPEG, PNG, or WebP; up to 10 MiB, 10,000 px per side, and 40 megapixels.')); ?></small>
                            </label>
                            <button type="submit" class="button secondary"><?php p($l->t('Use manual cover')); ?></button>
                        </form>
                        <form method="post" action="<?php p($item['coverRevertUrl'] ?? ''); ?>" class="library-cover-revert-form">
                            <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                            <button type="submit" class="button secondary"><?php p($l->t('Revert to extracted/preview cover')); ?></button>
                        </form>
                    </details>
                </div>
            </div>
        </article>

        <div class="library-detail-workbench">
            <div class="library-detail-primary">
        <section class="library-panel library-detail-section-meta" aria-labelledby="library-publication-metadata-heading">
            <h3 id="library-publication-metadata-heading"><?php p($l->t('Publication metadata')); ?></h3>
            <!-- health anchors: href="#library-field-title" href="#library-field-creators" href="#library-field-publicationDate" -->
            <details class="library-metadata-health library-metadata-health-details" aria-label="<?php p($l->t('Metadata health')); ?>">
                <summary><?php p($l->t('Metadata quality')); ?> <span class="library-summary-badge"><?php p((string)$metadataHealth['score']); ?>%</span></summary>
                <span class="library-muted"><?php p($l->t('%n of %n useful fields complete', '%n of %n useful fields complete', (int)$metadataHealth['complete'], [(int)$metadataHealth['total']])); ?></span>
                <div class="library-weak-field-jump-list" aria-label="<?php p($l->t('Weak fields')); ?>">
                    <span><?php p($l->t('Weak fields')); ?>:</span>
                    <?php if (count($metadataHealth['weakFields']) === 0): ?>
                        <span class="library-muted"><?php p($l->t('None')); ?></span>
                    <?php else: ?>
                        <?php foreach ($metadataHealth['weakFields'] as $field => $label): ?>
                            <a href="#library-field-<?php p((string)$field); ?>"><?php p($l->t((string)$label)); ?></a>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </details>
            <form method="post" action="<?php p($item['updateUrl'] ?? ''); ?>" class="library-item-form library-detail-edit-form library-detail-edit-form--autosave" aria-labelledby="library-publication-metadata-heading" data-autosave="metadata">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                <input type="hidden" name="returnTo" value="details" />
                <input type="hidden" name="metadataAutosave" value="0" />
                <div class="library-detail-save-row">
                    <p class="library-save-feedback library-detail-autosave-status" role="status" aria-live="polite"><?php p($metadataSaved ? $l->t('Metadata saved') : $l->t('Changes save automatically.')); ?></p>
                    <button type="submit" class="button primary library-detail-save-button"><?php p($l->t('Save metadata')); ?></button>
                </div>
                <?php if (($item['metadataError'] ?? '') !== ''): ?>
                    <p class="library-validation-feedback library-detail-field-full" role="alert"><?php p($l->t('Metadata was not saved') . ': ' . (string)$item['metadataError']); ?></p>
                <?php endif; ?>
                <p class="library-muted library-metadata-guidance library-detail-field-full"><?php p($l->t('Non-blocking guidance: these hints document useful metadata shapes, but they do not block saving.')); ?></p>
                <div class="library-detail-fieldset library-detail-fieldset-identity library-detail-field-full">
                    <h4><?php p($l->t('Identity')); ?></h4>
                <label class="library-detail-field-wide library-detail-title-field" id="library-field-title">
                    <?php p($l->t('Title')); ?>
                    <input type="text" name="title" value="<?php p((string)($item['title'] ?? '')); ?>" />
                </label>
                <label class="library-detail-field-wide">
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
                <label class="library-detail-field-wide library-creators-field" id="library-field-creators">
                    <span class="library-field-label-help" title="<?php p($metadataHelp['creators']); ?>" aria-label="<?php p($l->t('Creators help: %s', [$metadataHelp['creators']])); ?>"><?php p($l->t('Creators')); ?></span>
                    <div class="library-creator-chip-editor" data-creator-chip-editor>
                        <div class="library-creator-chip-list" aria-label="<?php p($l->t('Creators')); ?>">
                            <?php foreach (array_filter(array_map('trim', preg_split('/[;\n]+/u', (string)($item['creators'] ?? '')) ?: []), static fn ($value) => $value !== '') as $creator): ?>
                                <span class="library-creator-chip"><span><?php p($creator); ?></span><button type="button" class="library-creator-chip-remove" aria-label="<?php p($l->t('Remove creator: %s', [$creator])); ?>">×</button></span>
                            <?php endforeach; ?>
                        </div>
                        <input type="text" class="library-creator-chip-input" placeholder="<?php p($l->t('Add creator and press Enter')); ?>" />
                        <input type="hidden" name="creators" value="<?php p($creatorLines); ?>" />
                    </div>
                </label>
                </div>
                <div class="library-detail-fieldset library-detail-fieldset-publication library-detail-field-full">
                    <h4><?php p($l->t('Publication')); ?></h4>
                <label class="library-detail-field-wide">
                    <?php p($l->t('Publication')); ?>
                    <input type="text" name="publication" value="<?php p((string)($item['publication'] ?? '')); ?>" />
                </label>
                <label id="library-field-publicationDate">
                    <span class="library-field-label-help" title="<?php p($metadataHelp['publicationDate']); ?>" aria-label="<?php p($l->t('Publication date help: %s', [$metadataHelp['publicationDate']])); ?>"><?php p($l->t('Publication date')); ?></span>
                    <input type="text" name="publicationDate" value="<?php p((string)($item['publicationDate'] ?? '')); ?>" />
                </label>
                <label class="library-detail-field-wide" id="library-field-publisher">
                    <?php p($l->t('Publisher')); ?>
                    <input type="text" name="publisher" list="library-publisher-suggestions" value="<?php p((string)($item['publisher'] ?? '')); ?>" />
                    <datalist id="library-publisher-suggestions">
                        <?php foreach ($publisherSuggestions as $publisher): ?>
                            <option value="<?php p($publisher); ?>"></option>
                        <?php endforeach; ?>
                    </datalist>
                </label>
                <label id="library-field-language">
                    <span class="library-field-label-help" title="<?php p($metadataHelp['language']); ?>" aria-label="<?php p($l->t('Language help: %s', [$metadataHelp['language']])); ?>"><?php p($l->t('Language')); ?></span>
                    <select name="language[]" multiple class="library-language-picklist">
                        <?php foreach ($languageOptions as $code => $label): ?>
                            <option value="<?php p($code); ?>" <?php if (in_array($code, $selectedLanguages, true)) { print_unescaped('selected'); } ?>><?php p($label); ?></option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <label class="library-detail-field-wide" id="library-field-genres">
                    <span class="library-field-label-help" title="<?php p($metadataHelp['genres']); ?>" aria-label="<?php p($l->t('Genres help: %s', [$metadataHelp['genres']])); ?>"><?php p($l->t('Genres')); ?></span>
                    <select name="genres[]" multiple class="library-genre-picklist">
                        <?php foreach ($genreOptions as $genre): ?>
                            <option value="<?php p($genre); ?>" <?php if (in_array($genre, $selectedGenres, true)) { print_unescaped('selected'); } ?>><?php p($genre); ?></option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <label class="library-detail-field-wide" id="library-field-classifications">
                    <span class="library-field-label-help" title="<?php p($metadataHelp['classifications']); ?>" aria-label="<?php p($l->t('Classifications help: %s', [$metadataHelp['classifications']])); ?>"><?php p($l->t('Classifications')); ?></span>
                    <input type="text" name="classifications" list="library-classification-suggestions" value="<?php p(implode('; ', is_array($item['classifications'] ?? null) ? $item['classifications'] : [])); ?>" />
                    <datalist id="library-classification-suggestions">
                        <option value="reference collection"></option>
                        <option value="manual"></option>
                        <option value="catalogue"></option>
                        <option value="OCR-needed"></option>
                    </datalist>
                </label>
                </div>
                <div class="library-detail-fieldset library-detail-fieldset-personal library-detail-field-full">
                    <h4><?php p($l->t('Personal')); ?></h4>
                <label id="library-field-personalRating">
                    <?php p($l->t('Personal rating')); ?>
                    <input type="number" name="personalRating" min="0" max="5" step="1" value="<?php p($item['personalRating'] !== null ? (string)$item['personalRating'] : ''); ?>" />
                </label>
                <label class="library-detail-field-full library-detail-description-field" id="library-field-description">
                    <?php p($l->t('Description')); ?>
                    <textarea name="description" rows="10"><?php p((string)($item['description'] ?? '')); ?></textarea>
                </label>
                </div>
            </form>
        </section>
            </div>
            <div class="library-detail-secondary">

        <details class="library-panel library-detail-diagnostic-section library-detail-section-file" aria-labelledby="library-file-metadata-heading">
            <summary id="library-file-metadata-heading"><?php p($l->t('File metadata')); ?> <span class="library-summary-badge">scanStatus: <?php p((string)($item['scanStatus'] ?? 'unknown')); ?></span></summary>
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
        </details>

        <details class="library-panel library-detail-diagnostic-section library-detail-section-provenance" aria-labelledby="library-provenance-heading">
            <summary id="library-provenance-heading"><?php p($l->t('Provenance')); ?> <span class="library-summary-badge"><?php p($l->t('Scanner differences: %n', 'Scanner differences: %n', $scannerConflictCount)); ?></span></summary>
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
                <div class="library-provenance-differences">
                    <p class="library-muted"><?php p($l->t('Only fields that currently differ from scanner candidates are shown first.')); ?></p>
                    <?php if ($scannerConflictCount === 0): ?>
                        <p class="library-muted"><?php p($l->t('No scanner differences for this item.')); ?></p>
                    <?php else: ?>
                        <table>
                            <thead>
                                <tr>
                                    <th><?php p($l->t('Field')); ?></th>
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
                                    <?php if (!$fieldDiffersFromScanner) { continue; } ?>
                                    <tr class="library-field-conflict">
                                        <th scope="row"><?php p($l->t($label)); ?></th>
                                        <td><?php p(trim($currentValue) !== '' ? $currentValue : '—'); ?></td>
                                        <td>
                                            <?php p(trim($candidateValue) !== '' ? $candidateValue : '—'); ?>
                                            <?php if ($resetUrl !== ''): ?>
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
                    <?php endif; ?>
                </div>
                <details class="library-provenance-all-fields">
                    <summary><?php p($l->t('Show all scanner provenance')); ?></summary>
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
                </details>
            </div>
        </details>

        <details class="library-panel library-detail-diagnostic-section library-detail-section-nextcloud" aria-labelledby="library-nextcloud-metadata-heading">
            <summary id="library-nextcloud-metadata-heading"><?php p($l->t('Nextcloud metadata')); ?> <span class="library-summary-badge"><?php p($l->t('%n tag', '%n tags', count($tags))); ?> · <?php p($l->t('%n comment', '%n comments', (int)($comments['count'] ?? 0))); ?></span></summary>
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
                <?php if ($tagFeedback !== null): ?>
                    <p class="library-tag-feedback library-tag-feedback-<?php p((string)($tagFeedback['type'] ?? 'info')); ?>" data-tag-result="<?php p((string)($tagFeedback['status'] ?? '')); ?>"><?php p((string)($tagFeedback['message'] ?? '')); ?></p>
                <?php endif; ?>
                <?php if (count($tags) > 0): ?>
                    <div class="library-tag-chip-list" aria-label="<?php p($l->t('Remove Nextcloud tag')); ?>">
                        <?php foreach ($tags as $tag): ?>
                            <form method="post" action="<?php p((string)($tag['removeUrl'] ?? '')); ?>" class="library-tag-chip-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <input type="hidden" name="returnTo" value="details" />
                                <span class="library-tag library-tag-removable">
                                    <span><?php p((string)$tag['name']); ?></span>
                                    <button type="submit" class="library-tag-chip-remove" aria-label="<?php p($l->t('Remove tag: %s', [(string)$tag['name']])); ?>">×</button>
                                </span>
                            </form>
                        <?php endforeach; ?>
                    </div>
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
                    <p class="library-muted library-tag-feedback-help"><?php p($l->t('Tag result feedback can report: Tag already assigned, Tag is not assignable, or Empty tag ignored.')); ?></p>
                    <button type="submit"><?php p($l->t('Add tag')); ?></button>
                </form>
                <div class="library-tag-suggestion-picker" aria-label="<?php p($l->t('Suggested Nextcloud tags')); ?>">
                    <strong><?php p($l->t('Suggested Nextcloud tags')); ?></strong>
                    <?php if (count($tagSuggestions) === 0): ?>
                        <span class="library-muted"><?php p($l->t('No assignable tag suggestions')); ?></span>
                    <?php else: ?>
                        <?php foreach ($tagSuggestions as $tagName): ?>
                            <form method="post" action="<?php p($item['tagUrl'] ?? ''); ?>" class="library-inline-form">
                                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>" />
                                <input type="hidden" name="returnTo" value="details" />
                                <input type="hidden" name="nextcloudTagName" value="<?php p((string)$tagName); ?>" />
                                <button type="submit" title="<?php p($l->t('Add suggested tag')); ?>: <?php p((string)$tagName); ?>"><?php p((string)$tagName); ?></button>
                            </form>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
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
        </details>
            </div>
        </div>
    </main>
</div>
