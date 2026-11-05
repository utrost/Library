<?php
/** @var array $_ */
$view = (string)($_['view'] ?? 'index');
$catalogue = (string)($_['catalogueUrl'] ?? '');
$language = (string)($_['languageUrl'] ?? '');
$mappings = (string)($_['valueMappingsUrl'] ?? '');
$_['maintenanceActive'] = 'shares';
$indexUrl = (string)($_['indexUrl'] ?? '');
$grantId = (int)($_['grantId'] ?? 0);
$notice = (string)($_['notice'] ?? '');
$displayShelf = static fn (string $name): string => $name === 'Shared shelf' ? $l->t('Shared shelf') : $name;
$messages = [
    'shared' => $l->t('Library access was shared. The recipient may need to accept the Files share first.'),
    'revoked' => $l->t('Library access was removed.'),
    'invalid_recipient' => $l->t('Choose an existing, enabled Nextcloud user.'),
    'invalid_root' => $l->t('This shelf cannot be shared. Choose an enabled folder you own.'),
    'recipient_has_writable_access' => $l->t('This user already has write access to that folder. Read-only Library sharing cannot override Files permissions.'),
    'share_limit_reached' => $l->t('This library has reached the current 100-share limit.'),
    'already_shared' => $l->t('This shelf is already shared with that user.'),
    'existing_share_changed' => $l->t('This share no longer has the expected Files access. Remove access below, then share the shelf again.'),
    'revocation_pending' => $l->t('This share is awaiting Files cleanup. Remove access again before creating it.'),
    'share_changed' => $l->t('The shelf or Files access changed. Review sharing again before confirming.'),
    'share_failed' => $l->t('Could not share this shelf. Try again.'),
    'files_share_cleanup_pending' => $l->t('Sharing needs cleanup. Use Remove access below to retry. Check Nextcloud Files if cleanup remains pending.'),
    'share_not_found' => $l->t('This share is no longer available.'),
    'cleanup_pending' => $l->t('Library access is hidden, but Files share cleanup is pending. Retry Remove access.'),
];
?>
<div id="app-content" class="library-maintenance-shell">
    <?php include __DIR__ . '/maintenance-navigation.php'; ?>
    <main class="library-maintenance-main">
        <div class="library-app library-shared-page">
    <a class="library-shared-back" href="<?php p($view === 'index' ? (string)$_['catalogueUrl'] : ($view === 'book' ? (string)($_['backUrl'] ?? $indexUrl . '/' . $grantId) : $indexUrl)); ?>">← <?php p($view === 'index' ? $l->t('Library') : ($view === 'book' ? $l->t('Shared books') : $l->t('Shared libraries'))); ?></a>

    <?php if ($view === 'index'): ?>
        <h1><?php p($l->t('Shared libraries')); ?></h1>
        <?php if (isset($messages[$notice])): ?><p class="library-shared-notice" role="status"><?php p($messages[$notice]); ?></p><?php endif; ?>
        <section class="library-panel" aria-labelledby="library-received-heading">
            <h2 id="library-received-heading"><?php p($l->t('Shared with me')); ?></h2>
            <p class="library-muted"><?php p($l->t('Browse books that another Nextcloud user has shared with you. Your own reading lists and book details are separate.')); ?></p>
            <?php if (empty($_['received'])): ?><p><?php p($l->t('No shared libraries yet.')); ?></p><?php endif; ?>
            <ul class="library-shared-list">
                <?php foreach (($_['received'] ?? []) as $grant): ?>
                    <li>
                        <?php if ($grant['status'] === 'ready'): ?><a href="<?php p($indexUrl . '/' . (int)$grant['id']); ?>"><strong><bdi dir="auto"><?php p($displayShelf((string)$grant['rootLabel'])); ?></bdi></strong></a><?php else: ?><strong><bdi dir="auto"><?php p($displayShelf((string)$grant['rootLabel'])); ?></bdi></strong><?php endif; ?>
                        <span class="library-muted"><?php p($l->t('Shared by')); ?> <bdi dir="auto"><?php p((string)$grant['ownerId']); ?></bdi></span>
                        <?php if ($grant['status'] === 'awaiting-acceptance'): ?><span class="library-muted"><?php p($l->t('Accept the Files share to browse this shelf.')); ?></span><?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </section>
        <section class="library-panel" aria-labelledby="library-sharing-heading">
            <h2 id="library-sharing-heading"><?php p($l->t('Share one of my shelves')); ?></h2>
            <p class="library-muted"><?php p($l->t('Share a Library shelf read-only with one Nextcloud user. When needed, this creates a read-only Files share of the entire folder, including files Library has not indexed.')); ?></p>
            <?php if (empty($_['roots'])): ?><p><?php p($l->t('Add and enable a shelf in Library settings before sharing.')); ?></p><?php else: ?>
                <form method="post" action="<?php p((string)$_['previewUrl']); ?>" class="library-shared-form">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                    <label><?php p($l->t('Shelf')); ?><select name="rootId" required>
                        <?php foreach ($_['roots'] as $root): ?><option value="<?php p((string)$root['id']); ?>"><?php p((string)($root['label'] ?: $root['path'])); ?></option><?php endforeach; ?>
                    </select></label>
                    <label><?php p($l->t('Nextcloud username')); ?><input name="recipient" maxlength="64" required autocomplete="off"></label>
                    <div data-library-share-recipient-picker data-url="<?php p((string)$_['recipientSuggestionsUrl']); ?>" hidden></div>
                    <button class="button primary" type="submit"><?php p($l->t('Review sharing')); ?></button>
                </form>
            <?php endif; ?>
            <?php if (!empty($_['owned'])): ?>
                <h3><?php p($l->t('People with access')); ?></h3>
                <ul class="library-shared-list">
                    <?php foreach ($_['owned'] as $grant): ?>
                        <li>
                            <div><strong><bdi dir="auto"><?php p($displayShelf((string)$grant['rootLabel'])); ?></bdi></strong><span><bdi dir="auto"><?php p((string)$grant['recipientName']); ?></bdi> · <?php p(match ($grant['status']) {
                                'ready' => $l->t('Ready'),
                                'cleanup-pending' => $l->t('Cleanup pending'),
                                'awaiting-acceptance' => $l->t('Waiting for the recipient to accept the Files share'),
                                default => $l->t('Files access changed. Review the share in Nextcloud Files.'),
                            }); ?></span></div>
                            <form method="post" action="<?php p($indexUrl . '/' . (int)$grant['id'] . '/revoke'); ?>"><input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>"><button class="button secondary" type="submit" aria-label="<?php p($l->t('Remove access for %s to %s', [(string)$grant['recipientName'], (string)$grant['rootLabel']])); ?>"><?php p($l->t('Remove access')); ?></button></form>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </section>
    <?php elseif ($view === 'confirm'): $grant = $_['grantPreview']; ?>
        <h1><?php p($l->t('Review read-only sharing')); ?></h1>
        <section class="library-panel" aria-labelledby="library-shared-confirm-heading">
            <h2 id="library-shared-confirm-heading"><?php p($l->t('Confirm access')); ?></h2>
            <dl class="library-shared-facts">
                <dt><?php p($l->t('Shelf')); ?></dt><dd><bdi dir="auto"><?php p((string)$grant['rootLabel']); ?></bdi></dd>
                <dt><?php p($l->t('Nextcloud user')); ?></dt><dd><bdi dir="auto"><?php p((string)$grant['recipientName']); ?></bdi> (<bdi dir="auto"><?php p((string)$grant['recipientId']); ?></bdi>)</dd>
                <dt><?php p($l->t('Files access')); ?></dt><dd><?php p($grant['filesMode'] === 'create'
                    ? $l->t('Create a read-only Files share for this shelf. The recipient may need to accept it.')
                    : $l->t('Reuse the recipient’s existing read-only Files access. Library will not remove that Files share later.')); ?></dd>
            </dl>
            <p class="library-muted"><?php p($l->t('Library shows only indexed books and their publication details. The Files share also gives the recipient access to every file and subfolder in this shelf, including unindexed files. Personal reading details and lists remain private.')); ?></p>
            <?php if ($grant['filesMode'] === 'create'): ?><p class="library-muted"><?php p($l->t('Before disabling or uninstalling Library, remove this access here or remove the Files share in Nextcloud Files. Disabling Library does not remove the Files share.')); ?></p><?php endif; ?>
            <form method="post" action="<?php p((string)$_['grantUrl']); ?>" class="library-shared-form">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                <input type="hidden" name="rootId" value="<?php p((string)$grant['rootId']); ?>">
                <input type="hidden" name="recipient" value="<?php p((string)$grant['recipientId']); ?>">
                <input type="hidden" name="rootFileId" value="<?php p((string)$grant['rootFileId']); ?>">
                <input type="hidden" name="filesMode" value="<?php p((string)$grant['filesMode']); ?>">
                <input type="hidden" name="confirmed" value="1">
                <button class="button primary" type="submit"><?php p($l->t('Share read-only')); ?></button>
                <a class="button secondary" href="<?php p($indexUrl); ?>"><?php p($l->t('Cancel')); ?></a>
            </form>
        </section>
    <?php elseif ($view === 'shelf'): ?>
        <h1><bdi dir="auto"><?php p($displayShelf((string)$_['rootLabel'])); ?></bdi></h1>
        <p class="library-muted"><?php p($l->t('Shared read-only by')); ?> <bdi dir="auto"><?php p((string)$_['ownerName']); ?></bdi></p>
        <section class="library-panel" aria-label="<?php p($l->t('Shared books')); ?>">
            <form method="get" action="<?php p($indexUrl . '/' . $grantId); ?>" class="library-shared-form"><label><?php p($l->t('Search titles and authors')); ?><input type="search" name="search" value="<?php p((string)($_['search'] ?? '')); ?>" minlength="3" maxlength="100" placeholder="<?php p($l->t('Enter at least three letters')); ?>"></label><button class="button secondary" type="submit"><?php p($l->t('Search')); ?></button><?php if (!empty($_['search'])): ?><a class="button secondary" href="<?php p($indexUrl . '/' . $grantId); ?>"><?php p($l->t('Clear search')); ?></a><?php endif; ?></form>
            <?php if (!empty($_['searchError'])): ?><p role="alert"><?php p($l->t('Enter at least three letters to search shared books.')); ?></p><?php elseif (empty($_['books'])): ?><p><?php p($l->t('No readable indexed books on this page.')); ?></p><?php endif; ?>
            <ul class="library-shared-list">
                <?php foreach (($_['books'] ?? []) as $book): $bookQuery = http_build_query(['after' => (int)($_['after'] ?? 0), 'search' => (string)($_['search'] ?? '')], '', '&', PHP_QUERY_RFC3986); ?>
                    <li class="library-shared-book-row"><a href="<?php p($indexUrl . '/' . $grantId . '/books/' . (int)$book['id'] . '?' . $bookQuery); ?>"><img src="<?php p((string)$book['coverUrl']); ?>" alt="" loading="lazy" width="60" height="90"><span><strong><bdi dir="auto"><?php p((string)$book['title']); ?></bdi></strong><small class="library-muted"><bdi dir="auto"><?php p((string)$book['creators']); ?></bdi><?php if (!empty($book['format'])): ?> · <?php p((string)$book['format']); ?><?php endif; ?></small></span></a></li>
                <?php endforeach; ?>
            </ul>
            <?php if (!empty($_['nextCursor'])): ?><p><a class="button secondary" href="<?php p($indexUrl . '/' . $grantId . '?after=' . (int)$_['nextCursor'] . '&search=' . rawurlencode((string)($_['search'] ?? ''))); ?>"><?php p($l->t('Next books')); ?></a></p><?php endif; ?>
        </section>
    <?php elseif ($view === 'book'): $book = $_['book']; ?>
        <h1><bdi dir="auto"><?php p((string)$book['title']); ?></bdi></h1>
        <?php if (!empty($book['subtitle'])): ?><p class="library-shared-subtitle"><bdi dir="auto"><?php p((string)$book['subtitle']); ?></bdi></p><?php endif; ?>
        <section class="library-panel library-shared-detail" aria-label="<?php p($l->t('Book details')); ?>">
            <img class="library-shared-detail-cover" src="<?php p((string)$_['coverUrl']); ?>" alt="" width="120" height="180">
            <div>
            <dl class="library-shared-facts">
                <?php foreach (['creators' => $l->t('Author'), 'publisher' => $l->t('Publisher'), 'publicationDate' => $l->t('Publication date'), 'language' => $l->t('Language'), 'format' => $l->t('Format')] as $field => $label): ?>
                    <?php if (!empty($book[$field])): ?><dt><?php p($label); ?></dt><dd><bdi dir="auto"><?php p((string)$book[$field]); ?></bdi></dd><?php endif; ?>
                <?php endforeach; ?>
                <?php if (!empty($book['subjects'])): ?><dt><?php p($l->t('Subjects')); ?></dt><dd><bdi dir="auto"><?php p(implode(', ', $book['subjects'])); ?></bdi></dd><?php endif; ?>
            </dl>
            <?php if (!empty($book['description'])): ?><p class="library-shared-description"><bdi dir="auto"><?php p((string)$book['description']); ?></bdi></p><?php endif; ?>
            <p><a class="button primary" href="<?php p((string)$_['openUrl']); ?>" target="_blank" rel="noopener"><?php p($l->t('Open in Nextcloud')); ?></a></p>
            </div>
        </section>
    <?php endif; ?>
        </div>
    </main>
</div>
