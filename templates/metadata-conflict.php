<?php
/** A native form fallback keeps the submitted draft available for review. */
$draft = is_array($_['draft'] ?? null) ? $_['draft'] : [];
$current = is_array($_['current'] ?? null) ? $_['current'] : [];
$fields = [
    'publicationType' => $l->t('Publication type'), 'title' => $l->t('Title'),
    'subtitle' => $l->t('Subtitle'), 'creators' => $l->t('Creators'),
    'authors' => $l->t('Authors'), 'publication' => $l->t('Publication'),
    'series' => $l->t('Series'), 'seriesNumber' => $l->t('Part in series'),
    'genre' => $l->t('Genre'), 'publicationDate' => $l->t('Publication date'),
    'language' => $l->t('Language'), 'publisher' => $l->t('Publisher'),
    'description' => $l->t('Description'), 'subjects' => $l->t('Subjects'),
    'classifications' => $l->t('Classifications'), 'personalRating' => $l->t('Personal rating'),
    'identifiers' => $l->t('Identifiers'),
];
$show = static function (mixed $value): string {
    if ($value === null) return '';
    if (!is_array($value)) return (string)$value;
    return (string)json_encode($value, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
};
$hidden = static function (string $name, mixed $value) use (&$hidden): void {
    if (is_array($value)) {
        foreach ($value as $key => $part) {
            if (!preg_match('/^[a-zA-Z0-9_]+$/D', (string)$key)) continue;
            $hidden($name . '[' . $key . ']', $part);
        }
        return;
    }
    if (!is_scalar($value) && $value !== null) return;
    ?><input type="hidden" name="<?php p($name); ?>" value="<?php p((string)$value); ?>"><?php
};
?>
<div id="app-content" class="library-app-content">
    <main id="library-app" class="library-app library-item-detail">
        <article class="library-panel library-metadata-conflict" aria-labelledby="library-conflict-heading">
            <h1 id="library-conflict-heading"><?php p($l->t('Review conflicting book changes')); ?></h1>
            <p role="alert"><?php p((string)$_['message']); ?></p>
            <p><?php p($l->t('Your submitted draft is preserved below. Compare it with the latest saved values before choosing what to keep.')); ?></p>
            <div class="library-metadata-conflict-table-wrap">
                <table class="library-metadata-conflict-table">
                    <thead><tr><th scope="col"><?php p($l->t('Field')); ?></th><th scope="col"><?php p($l->t('Your draft')); ?></th><th scope="col"><?php p($l->t('Latest saved')); ?></th></tr></thead>
                    <tbody>
                    <?php foreach ($fields as $key => $label): if (!array_key_exists($key, $draft)) continue; ?>
                        <tr><th scope="row"><?php p($label); ?></th><td><pre><?php p($show($draft[$key])); ?></pre></td><td><pre><?php p($show($current[$key] ?? null)); ?></pre></td></tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            <div class="library-metadata-conflict-actions">
                <a class="button secondary" href="<?php p((string)$_['detailsUrl']); ?>"><?php p($l->t('Use latest saved values')); ?></a>
                <?php if ($draft !== []): ?>
                    <form method="post" action="<?php p((string)$_['updateUrl']); ?>">
                        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                        <input type="hidden" name="returnTo" value="details">
                        <input type="hidden" name="metadataRevision" value="<?php p((string)($current['metadataRevision'] ?? '')); ?>">
                        <?php foreach ($fields as $key => $_label): if (array_key_exists($key, $draft)) $hidden($key, $draft[$key]); endforeach; ?>
                        <button type="submit" class="button primary"><?php p($l->t('Save my reviewed draft')); ?></button>
                    </form>
                <?php endif; ?>
            </div>
        </article>
    </main>
</div>
