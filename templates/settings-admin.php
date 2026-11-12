<?php
/** @var array $_ */
$settings = $_['thumbnailSettings'];
?>
<div id="library-settings" class="section library-admin-settings">
    <h1><?php p($l->t('Cover thumbnail cache')); ?></h1>
    <form method="post" action="<?php p($_['saveUrl']); ?>">
        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
        <p><label for="library-thumbnail-budget"><?php p($l->t('Cache budget per account (MiB)')); ?></label><span data-library-help><?php p($l->t('Maximum thumbnail data per account, divided across 256 shards. Set 0 to disable disk caching. Existing entries are trimmed gradually by maintenance.')); ?></span>
        <input id="library-thumbnail-budget" type="number" name="budgetMiB" min="0" max="1024" required value="<?php p($settings['budgetMiB']); ?>"></p>
        <p><label for="library-thumbnail-retention"><?php p($l->t('Retention (hours)')); ?></label><span data-library-help><?php p($l->t('Expired thumbnails are regenerated on demand and removed gradually by maintenance. Originals remain intact.')); ?></span>
        <input id="library-thumbnail-retention" type="number" name="retentionHours" min="1" max="720" required value="<?php p($settings['retentionHours']); ?>"></p>
        <button type="submit"><?php p($l->t('Save')); ?></button>
    </form>
</div>
<div id="library-provider-settings" class="section library-admin-settings library-provider-settings">
    <h2><?php p($l->t('Book metadata lookup')); ?></h2>
    <p><?php p($l->t('In Book Details, people choose a provider and Search. Only then is the ISBN or title and author sent to that provider. Suggestions must be reviewed and saved manually.')); ?></p>
    <?php if ($_['providerResult'] === 'saved'): ?>
        <p class="library-settings-success" role="status"><?php p($l->t('Metadata provider settings saved.')); ?></p>
    <?php elseif ($_['providerResult'] === 'invalid-key'): ?>
        <p class="library-warning" role="alert"><?php p($l->t('Enter a valid Google Books API key (letters, numbers, hyphens and underscores; up to 256 characters). No settings were changed.')); ?></p>
    <?php elseif ($_['providerResult'] === 'invalid-request'): ?>
        <p class="library-warning" role="alert"><?php p($l->t('The provider settings were not saved. Check the fields and try again.')); ?></p>
    <?php endif; ?>
    <form method="post" action="<?php p($_['providerSaveUrl']); ?>">
        <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
        <fieldset class="library-provider-fieldset">
            <legend><?php p($l->t('Open Library')); ?></legend>
            <label class="library-provider-checkbox" for="library-openlibrary-enabled">
                <input id="library-openlibrary-enabled" type="checkbox" name="openLibraryEnabled" value="1" <?php if ($_['openLibraryEnabled']): ?>checked<?php endif; ?>>
                <?php p($l->t('Enable Open Library lookup')); ?>
            </label>
            <p class="library-provider-note"><?php p($l->t('No API key is needed.')); ?></p>
        </fieldset>
        <fieldset class="library-provider-fieldset">
            <legend><?php p($l->t('Google Books')); ?></legend>
            <label class="library-provider-checkbox" for="library-googlebooks-enabled">
                <input id="library-googlebooks-enabled" type="checkbox" name="googleBooksEnabled" value="1" <?php if ($_['googleBooksEnabled']): ?>checked<?php endif; ?>>
                <?php p($l->t('Enable Google Books lookup')); ?>
            </label>
            <p class="library-provider-note" role="status"><?php p($_['googleBooksKeyConfigured'] ? $l->t('API key configured') : $l->t('API key not configured')); ?></p>
            <label for="library-googlebooks-key"><?php p($l->t('Google Books API key')); ?></label>
            <input id="library-googlebooks-key" type="password" name="googleBooksApiKey" maxlength="256" autocomplete="new-password" spellcheck="false" aria-describedby="library-googlebooks-key-help">
            <p id="library-googlebooks-key-help" class="library-provider-note"><?php p($l->t('Leave blank to keep the stored key. The key is never shown here again.')); ?></p>
            <label class="library-provider-checkbox" for="library-googlebooks-remove-key">
                <input id="library-googlebooks-remove-key" type="checkbox" name="removeGoogleBooksKey" value="1">
                <?php p($l->t('Remove stored Google Books API key')); ?>
            </label>
            <div class="library-provider-instructions">
                <h3><?php p($l->t('Set up Google Books')); ?></h3>
                <ol>
                    <li><?php p($l->t('In your Google Cloud project, enable the Books API and create an API key.')); ?> <a href="https://developers.google.com/books/docs/v1/using" target="_blank" rel="noopener noreferrer"><?php p($l->t('Google Books API guide')); ?></a></li>
                    <li><?php p($l->t('Restrict the key to the Books API. If your server has a fixed outbound IP address, restrict it to that IP as well. This is a server-side key, so do not use website referrer restrictions.')); ?> <a href="https://docs.cloud.google.com/docs/authentication/api-keys" target="_blank" rel="noopener noreferrer"><?php p($l->t('Google API key restrictions')); ?></a></li>
                    <li><?php p($l->t('Paste the key above, leave Google Books enabled, then save. Each Nextcloud server uses its own key.')); ?></li>
                </ol>
                <p class="library-provider-note"><?php p($l->t('Keep the key out of screenshots, support requests and source control. Lookup runs on the server; the key is not sent to the browser.')); ?></p>
            </div>
        </fieldset>
        <fieldset class="library-provider-fieldset">
            <legend><?php p($l->t('DNB (German National Library)')); ?></legend>
            <label class="library-provider-checkbox" for="library-dnb-enabled">
                <input id="library-dnb-enabled" type="checkbox" name="dnbEnabled" value="1" <?php if ($_['dnbEnabled']): ?>checked<?php endif; ?>>
                <?php p($l->t('Enable DNB lookup')); ?>
            </label>
            <p class="library-provider-note"><?php p($l->t('No API key is needed.')); ?> <?php p($l->t('Search the German National Library catalogue by ISBN or title and author. Covers are not included.')); ?></p>
        </fieldset>
        <fieldset class="library-provider-fieldset">
            <legend><?php p($l->t('Library of Congress')); ?></legend>
            <label class="library-provider-checkbox" for="library-loc-enabled">
                <input id="library-loc-enabled" type="checkbox" name="locEnabled" value="1" <?php if ($_['locEnabled']): ?>checked<?php endif; ?>>
                <?php p($l->t('Enable Library of Congress lookup')); ?>
            </label>
            <p class="library-provider-note"><?php p($l->t('No API key is needed.')); ?> <?php p($l->t('Search the Library of Congress catalogue by ISBN or title and author. Covers are not included.')); ?></p>
        </fieldset>
        <button type="submit" class="primary"><?php p($l->t('Save provider settings')); ?></button>
    </form>
</div>
