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
    'shared' => $l->t('Library access was shared. The recipient can browse the selected books.'),
    'revoked' => $l->t('Library access was removed.'),
    'invalid_recipient' => $l->t('Choose an existing, enabled Nextcloud user.'),
    'invalid_root' => $l->t('This shelf cannot be shared. Choose an enabled folder you own.'),
    'invalid_selection' => $l->t('Choose a list with 1–100 available, shareable books from this shelf.'),
    'sharing_not_allowed' => $l->t('Nextcloud sharing policy or source permissions do not allow sharing these books.'),
    'files_access_required' => $l->t('Share this folder read-only with the user in Nextcloud Files, ask them to accept it, then review Library sharing again.'),
    'recipient_has_writable_access' => $l->t('This user already has write access to that folder. Read-only Library sharing cannot override Files permissions.'),
    'share_limit_reached' => $l->t('This library has reached the current 100-share limit.'),
    'already_shared' => $l->t('This shelf is already shared with that user.'),
    'existing_share_changed' => $l->t('This share no longer has the expected access. Remove access below, then review and share again.'),
    'revocation_pending' => $l->t('This share is awaiting Files cleanup. Remove access again before creating it.'),
    'share_changed' => $l->t('The shelf, Files access, or selected books changed. Review sharing again before confirming.'),
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
                        <span class="library-muted"><?php p($l->t('Shared by')); ?> <bdi dir="auto"><?php p((string)$grant['ownerId']); ?></bdi><?php if ($grant['accessMode'] === 'library_only'): ?> · <?php p($l->t('Selected books')); ?><?php endif; ?></span>
                        <?php if ($grant['status'] === 'awaiting-acceptance'): ?><span class="library-muted"><?php p($l->t('Accept the Files share to browse this shelf.')); ?></span><?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </section>
        <section class="library-panel" aria-labelledby="library-sharing-heading">
            <h2 id="library-sharing-heading"><?php p($l->t('Share one of my shelves')); ?></h2>
            <p class="library-muted"><?php p($l->t('Share selected books directly through Library, or reuse an existing read-only Nextcloud Files share.')); ?></p>
            <?php if (empty($_['roots'])): ?><p><?php p($l->t('Add and enable a shelf in Library settings before sharing.')); ?></p><?php else: ?>
                <form method="post" action="<?php p((string)$_['previewUrl']); ?>" class="library-shared-form">
                    <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                    <label><?php p($l->t('Shelf')); ?><select name="rootId" required>
                        <?php foreach ($_['roots'] as $root): ?><option value="<?php p((string)$root['id']); ?>"><?php p((string)($root['label'] ?: $root['path'])); ?></option><?php endforeach; ?>
                    </select></label>
                    <label><?php p($l->t('Access')); ?><select name="filesMode" data-library-share-mode>
                        <option value="reuse"><?php p($l->t('Existing read-only Files share')); ?></option>
                        <option value="library_only"><?php p($l->t('Selected books only — no Files share')); ?></option>
                    </select></label>
                    <label data-library-share-list-label><?php p($l->t('Books to share')); ?><select name="listId" data-library-share-list>
                        <option value=""><?php p($l->t('Choose a list')); ?></option>
                        <?php foreach (($_['shareableLists'] ?? []) as $list): ?><option value="<?php p((string)$list['id']); ?>"><?php p((string)$list['name'] . ' (' . (int)$list['count'] . ')'); ?></option><?php endforeach; ?>
                    </select></label>
                    <p class="library-muted" data-library-share-list-help><?php p($l->t('The list must contain 1–100 available books from this shelf. Only those books will be shared. Later list changes do not change this share. Recipients can download these books; opening them in Nextcloud requires a separate Files share.')); ?></p>
                    <label><?php p($l->t('Nextcloud username')); ?><input name="recipient" maxlength="64" required autocomplete="off"></label>
                    <div data-library-share-recipient-picker data-url="<?php p((string)$_['recipientSuggestionsUrl']); ?>" hidden></div>
                    <button class="button primary" type="submit"><?php p($l->t('Review sharing')); ?></button>
                </form>
            <?php endif; ?>
            <?php if (!empty($_['owned'])): ?>
                <h3><?php p($l->t('People with access')); ?></h3>
                <?php if (array_filter($_['owned'], static fn (array $grant): bool => !empty($grant['managedFilesShare']) || $grant['status'] === 'cleanup-pending')): ?><p class="library-muted"><?php p($l->t('Library-managed Files shares can remain active after disabling Library. Remove access here first, or remove them in Nextcloud Files.')); ?></p><?php endif; ?>
                <ul class="library-shared-list">
                    <?php foreach ($_['owned'] as $grant): ?>
                        <li>
                            <div><strong><bdi dir="auto"><?php p($displayShelf((string)$grant['rootLabel'])); ?></bdi></strong><span><bdi dir="auto"><?php p((string)$grant['recipientName']); ?></bdi> (<bdi dir="auto"><?php p((string)$grant['recipientId']); ?></bdi>) · <?php if ($grant['accessMode'] === 'library_only'): ?><?php p($l->t('Selected books')); ?><?php if ($grant['scopeName'] !== ''): ?>: <bdi dir="auto"><?php p((string)$grant['scopeName']); ?></bdi><?php endif; ?> · <?php endif; ?><?php p(match ($grant['status']) {
                                'ready' => $l->t('Ready'),
                                'cleanup-pending' => $l->t('Cleanup pending'),
                                'awaiting-acceptance' => $l->t('Waiting for the recipient to accept the Files share'),
                                default => $l->t('Access changed. Review sharing settings and source permissions.'),
                            }); ?></span><?php if ($grant['status'] === 'cleanup-pending'): ?><p class="library-muted"><?php p($l->t('Automatic cleanup preserves Files shares that were changed or cannot be identified. Review the share in Files. If you remove it there, retry Remove access to finish Library cleanup.')); ?></p><?php endif; ?></div>
                            <form method="post" action="<?php p($indexUrl . '/' . (int)$grant['id'] . '/revoke'); ?>"><input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>"><button class="button secondary" type="submit" aria-label="<?php p($l->t('Remove access for %s to %s', [(string)$grant['recipientName'] . ' (' . (string)$grant['recipientId'] . ')', (string)$grant['rootLabel']])); ?>"><?php p($l->t('Remove access')); ?></button></form>
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
                <dt><?php p($l->t('Access')); ?></dt><dd><?php if ($grant['filesMode'] === 'library_only'): ?><?php p($l->t('Selected books only, without a Nextcloud Files share')); ?><?php else: ?><?php p($l->t('Use the recipient’s existing read-only Files access. Library will not remove that Files share later.')); ?><?php endif; ?></dd>
                <?php if ($grant['filesMode'] === 'library_only'): ?><dt><?php p($l->t('Books')); ?></dt><dd><bdi dir="auto"><?php p((string)$grant['scopeName']); ?></bdi> · <?php p((string)$grant['bookCount']); ?></dd><?php endif; ?>
            </dl>
            <?php if ($grant['filesMode'] === 'library_only'): ?>
                <details><summary><?php p($l->t('Review selected books')); ?></summary>
                    <ul class="library-shared-list">
                        <?php foreach ($grant['reviewBooks'] as $book): ?>
                            <li><div><strong><bdi dir="auto"><?php p($book['title']); ?></bdi></strong><span class="library-muted"><bdi dir="auto"><?php p($book['path']); ?></bdi></span></div></li>
                        <?php endforeach; ?>
                    </ul>
                </details>
            <?php endif; ?>
            <p class="library-muted"><?php p($grant['filesMode'] === 'library_only'
                ? $l->t('Only the selected books and their publication details will be available through Library. The recipient can download their files. Personal reading details and lists remain private.')
                : $l->t('Library shows only indexed books and their publication details. Existing Files access may also expose every file and subfolder in this shelf, including unindexed files. Personal reading details and lists remain private.')); ?></p>
            <form method="post" action="<?php p((string)$_['grantUrl']); ?>" class="library-shared-form">
                <input type="hidden" name="requesttoken" value="<?php p($_['requesttoken'] ?? ''); ?>">
                <input type="hidden" name="rootId" value="<?php p((string)$grant['rootId']); ?>">
                <input type="hidden" name="recipient" value="<?php p((string)$grant['recipientId']); ?>">
                <input type="hidden" name="rootFileId" value="<?php p((string)$grant['rootFileId']); ?>">
                <input type="hidden" name="filesMode" value="<?php p((string)$grant['filesMode']); ?>">
                <?php if ($grant['filesMode'] === 'library_only'): ?><input type="hidden" name="listId" value="<?php p((string)$grant['listId']); ?>"><input type="hidden" name="selectionHash" value="<?php p((string)$grant['selectionHash']); ?>"><?php endif; ?>
                <input type="hidden" name="confirmed" value="1">
                <button class="button primary" type="submit"><?php p($l->t('Share read-only')); ?></button>
                <a class="button secondary" href="<?php p($indexUrl); ?>"><?php p($l->t('Cancel')); ?></a>
            </form>
        </section>
    <?php elseif ($view === 'shelf'): ?>
        <h1><bdi dir="auto"><?php p($displayShelf((string)$_['rootLabel'])); ?></bdi></h1>
        <p class="library-muted"><?php p($l->t('Shared read-only by')); ?> <bdi dir="auto"><?php p((string)$_['ownerName']); ?></bdi></p>
        <section class="library-panel" aria-label="<?php p($l->t('Shared books')); ?>">
            <form method="get" action="<?php p($indexUrl . '/' . $grantId); ?>" class="library-shared-form"><label><?php p($l->t('Search titles and authors')); ?><input type="search" name="search" value="<?php p((string)($_['search'] ?? '')); ?>" minlength="3" maxlength="100" placeholder="<?php p($l->t('Enter at least three characters')); ?>"></label><button class="button secondary" type="submit"><?php p($l->t('Search')); ?></button><?php if (!empty($_['search'])): ?><a class="button secondary" href="<?php p($indexUrl . '/' . $grantId); ?>"><?php p($l->t('Clear search')); ?></a><?php endif; ?></form>
            <?php if (!empty($_['searchError'])): ?><p role="alert"><?php p($l->t('Enter at least three characters to search shared books.')); ?></p><?php elseif (empty($_['books'])): ?><p><?php p($l->t('No readable indexed books on this page.')); ?></p><?php endif; ?>
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
            <p><a class="button primary" href="<?php p((string)$_['openUrl']); ?>"<?php if (empty($_['libraryOnly'])): ?> target="_blank" rel="noopener"<?php endif; ?>><?php p(!empty($_['libraryOnly']) ? $l->t('Download shared file') : $l->t('Open in Nextcloud')); ?></a></p>
            </div>
        </section>
    <?php endif; ?>
        </div>
    </main>
</div>
