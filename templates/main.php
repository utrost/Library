<?php
/** @var array $_ */
$items = $_['items'] ?? [];
$fileTagsByFileId = $_['fileTagsByFileId'] ?? [];
$fileCommentsByFileId = $_['fileCommentsByFileId'] ?? [];
$itemUpdateBaseUrl = $_['itemUpdateBaseUrl'] ?? '';
$itemCoverBaseUrl = $_['itemCoverBaseUrl'] ?? '';
$itemTagBaseUrl = $_['itemTagBaseUrl'] ?? '';
$itemTagRemoveBaseUrl = $_['itemTagRemoveBaseUrl'] ?? '';
$itemCommentBaseUrl = $_['itemCommentBaseUrl'] ?? '';
$itemOpenBaseUrl = $_['itemOpenBaseUrl'] ?? '';
$itemFilesBaseUrl = $_['itemFilesBaseUrl'] ?? '';
$settingsUrl = $_['settingsUrl'] ?? '';
$shelves = $_['shelves'] ?? [];
$formats = $_['formats'] ?? [];
$scanStatuses = $_['scanStatuses'] ?? [];
$cataloguePagination = $_['cataloguePagination'] ?? ['page' => 1, 'limit' => 100, 'total' => count($items), 'visible' => count($items), 'from' => count($items) > 0 ? 1 : 0, 'to' => count($items), 'previousUrl' => '', 'nextUrl' => ''];
$activeFilters = $_['activeFilters'] ?? ['q' => '', 'type' => '', 'format' => '', 'tag' => '', 'shelf' => '', 'status' => '', 'sort' => 'title'];
?>
<div id="app-content" class="library-app-content">
<main id="library-app" class="library-app" tabindex="-1">
    <section class="library-hero">
        <h1>Library</h1>
        <p class="library-lede">
            Library is a catalogue layer for publications already stored in Nextcloud.
        </p>
        <p>
            Nextcloud Files remain canonical. Library adds discovery, metadata,
            cover-style browsing, search/filtering and reader handoff without importing or owning the files.
        </p>
    </section>

    <p><a class="button" href="<?php p($settingsUrl); ?>">Library settings</a></p>

    <section class="library-panel" aria-label="Publication catalogue">
        <h2>Publication catalogue</h2>
        <p class="library-muted">Browse as a shelf/gallery first; open the details panel when metadata matters.</p>

        <form method="get" class="library-filter-bar" aria-label="Catalogue search and filters">
            <label>
                Search title / author
                <input type="search" name="q" value="<?php p($activeFilters['q'] ?? ''); ?>" placeholder="Camera, Eco, Rolleiflex..." />
            </label>
            <label>
                Type
                <select name="type">
                    <option value="">All types</option>
                    <?php foreach (['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'] as $type): ?>
                        <option value="<?php p($type); ?>" <?php if (($activeFilters['type'] ?? '') === $type) { print_unescaped('selected'); } ?>><?php p($type); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>
                Nextcloud tag
                <input type="text" name="tag" value="<?php p($activeFilters['tag'] ?? ''); ?>" placeholder="photography" />
            </label>
            <label>
                Format
                <select name="format">
                    <option value="">All formats</option>
                    <?php foreach ($formats as $format): ?>
                        <option value="<?php p($format); ?>" <?php if (($activeFilters['format'] ?? '') === $format) { print_unescaped('selected'); } ?>><?php p(mb_strtoupper($format)); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>
                Shelf
                <select name="shelf">
                    <option value="">All shelves</option>
                    <?php foreach ($shelves as $shelf): ?>
                        <option value="<?php p($shelf); ?>" <?php if (($activeFilters['shelf'] ?? '') === $shelf) { print_unescaped('selected'); } ?>><?php p($shelf); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>
                Scan status
                <select name="status">
                    <option value="">All scan statuses</option>
                    <?php foreach ($scanStatuses as $status): ?>
                        <option value="<?php p($status); ?>" <?php if (($activeFilters['status'] ?? '') === $status) { print_unescaped('selected'); } ?>><?php p($status); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <label>
                Sort
                <select name="sort">
                    <option value="title" <?php if (($activeFilters['sort'] ?? 'title') === 'title') { print_unescaped('selected'); } ?>>Title</option>
                    <option value="recent" <?php if (($activeFilters['sort'] ?? 'title') === 'recent') { print_unescaped('selected'); } ?>>Recently added</option>
                    <option value="publicationDate" <?php if (($activeFilters['sort'] ?? 'title') === 'publicationDate') { print_unescaped('selected'); } ?>>Publication date</option>
                    <option value="format" <?php if (($activeFilters['sort'] ?? 'title') === 'format') { print_unescaped('selected'); } ?>>Format</option>
                </select>
            </label>
            <label>
                Page size
                <select name="limit">
                    <?php foreach ([25, 50, 100, 250, 500] as $limit): ?>
                        <option value="<?php p((string)$limit); ?>" <?php if ((int)($cataloguePagination['limit'] ?? 100) === $limit) { print_unescaped('selected'); } ?>><?php p((string)$limit); ?></option>
                    <?php endforeach; ?>
                </select>
            </label>
            <button type="submit">Apply filters</button>
            <a class="library-reset-link" href="?">Clear</a>
        </form>

        <nav class="library-pagination" aria-label="Catalogue pagination">
            <span>
                Showing <?php p((string)($cataloguePagination['from'] ?? 0)); ?>–<?php p((string)($cataloguePagination['to'] ?? 0)); ?>
                of <?php p((string)($cataloguePagination['total'] ?? 0)); ?> catalogue items
            </span>
            <?php if (($cataloguePagination['previousUrl'] ?? '') !== ''): ?>
                <a href="<?php p($cataloguePagination['previousUrl']); ?>">Previous</a>
            <?php else: ?>
                <span class="library-muted">Previous</span>
            <?php endif; ?>
            <?php if (($cataloguePagination['nextUrl'] ?? '') !== ''): ?>
                <a href="<?php p($cataloguePagination['nextUrl']); ?>">Next</a>
            <?php else: ?>
                <span class="library-muted">Next</span>
            <?php endif; ?>
        </nav>

        <?php if (count($items) === 0): ?>
            <p class="library-muted">No catalogue items match. Scan enabled roots or clear the active filters.</p>
        <?php else: ?>
            <div class="library-cover-gallery">
                <?php foreach ($items as $item): ?>
                    <?php $itemUpdateUrl = str_replace('__ITEM_ID__', (string)$item['id'], $itemUpdateBaseUrl); ?>
                    <?php $itemCoverUrl = str_replace('__ITEM_ID__', (string)$item['id'], $itemCoverBaseUrl); ?>
                    <?php $itemTagUrl = str_replace('__ITEM_ID__', (string)$item['id'], $itemTagBaseUrl); ?>
                    <?php $itemTagRemoveUrl = str_replace('__ITEM_ID__', (string)$item['id'], $itemTagRemoveBaseUrl); ?>
                    <?php $itemCommentUrl = str_replace('__ITEM_ID__', (string)$item['id'], $itemCommentBaseUrl); ?>
                    <?php $itemOpenUrl = str_replace('__FILE_ID__', (string)$item['fileId'], $itemOpenBaseUrl); ?>
                    <?php $itemFilesUrl = str_replace('/0?openfile=true', '/' . (string)$item['fileId'] . '?openfile=true', $itemFilesBaseUrl); ?>
                    <?php $nextcloudTags = $fileTagsByFileId[(int)$item['fileId']] ?? []; ?>
                    <?php $nextcloudComments = $fileCommentsByFileId[(int)$item['fileId']] ?? ['count' => 0, 'recent' => []]; ?>
                    <article class="library-cover-card">
                        <a class="library-cover-link" href="<?php p($itemOpenUrl); ?>" aria-label="Read <?php p($item['title']); ?>">
                            <img class="library-cover-image" src="<?php p($itemCoverUrl); ?>" alt="Cover for <?php p($item['title']); ?>" loading="lazy" />
                        </a>
                        <div class="library-cover-summary">
                            <h3><?php p($item['title']); ?></h3>
                            <?php if ($item['creators'] !== ''): ?>
                                <p class="library-creator"><?php p($item['creators']); ?></p>
                            <?php endif; ?>
                            <p class="library-muted">
                                <span><?php p($item['publicationType']); ?></span>
                                <?php if (($item['extension'] ?? '') !== ''): ?> · <span>Format: <?php p(mb_strtoupper($item['extension'])); ?></span><?php endif; ?>
                                <?php if (($item['shelf'] ?? '') !== ''): ?> · <span>Shelf: <?php p($item['shelf']); ?></span><?php endif; ?>
                            </p>
                            <?php if (($item['scanStatus'] ?? 'indexed') !== 'indexed' || ($item['scanError'] ?? '') !== ''): ?>
                                <p class="library-item-scan-status library-scan-error">
                                    scanStatus: <?php p($item['scanStatus'] ?? 'unknown'); ?>
                                    <?php if (($item['scanError'] ?? '') !== ''): ?> · scanError: <?php p($item['scanError']); ?><?php endif; ?>
                                </p>
                            <?php endif; ?>
                            <div class="library-nextcloud-tags" aria-label="nextcloudTags">
                                <?php if (count($nextcloudTags) === 0): ?>
                                    <span class="library-muted">No Nextcloud tags</span>
                                <?php else: ?>
                                    <?php foreach ($nextcloudTags as $tag): ?>
                                        <span class="library-tag"><?php p($tag['name']); ?></span>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                            <p><a href="<?php p($itemOpenUrl); ?>">Read</a> · <a href="<?php p($itemFilesUrl); ?>">Show in Files</a></p>
                        </div>

                        <details>
                            <summary>Details / edit metadata</summary>
                            <dl class="library-item-metadata">
                                <dt>publicationType</dt>
                                <dd><?php p($item['publicationType']); ?></dd>
                                <dt>metadataSource</dt>
                                <dd><?php p($item['metadataSource']); ?></dd>
                                <dt>userEdited</dt>
                                <dd><?php p($item['userEdited'] ? 'yes' : 'no'); ?></dd>
                                <dt>path</dt>
                                <dd><?php p($item['cachedPath']); ?></dd>
                                <dt>publication</dt>
                                <dd><?php p($item['publication'] ?: '—'); ?></dd>
                                <dt>date</dt>
                                <dd><?php p($item['publicationDate'] ?: '—'); ?></dd>
                                <dt>language</dt>
                                <dd><?php p($item['language'] ?: '—'); ?></dd>
                                <dt>publisher</dt>
                                <dd><?php p($item['publisher'] ?: '—'); ?></dd>
                            </dl>

                            <div class="library-nextcloud-tags" aria-label="nextcloudTagEditor">
                                <strong>Nextcloud tags</strong>
                                <?php if (count($nextcloudTags) > 0): ?>
                                    <ul class="library-tag-remove-list" aria-label="Remove Nextcloud tag">
                                        <?php foreach ($nextcloudTags as $tag): ?>
                                            <?php $tagRemoveUrl = str_replace('__TAG_ID__', (string)$tag['id'], $itemTagRemoveUrl); ?>
                                            <li>
                                                <span class="library-tag"><?php p($tag['name']); ?></span>
                                                <form method="post" action="<?php p($tagRemoveUrl); ?>" class="library-inline-form">
                                                    <button type="submit">Remove tag</button>
                                                </form>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                                <form method="post" action="<?php p($itemTagUrl); ?>" class="library-tag-form">
                                    <label>
                                        Add Nextcloud tag
                                        <input type="text" name="tagName" placeholder="photography, project-library..." />
                                    </label>
                                    <button type="submit">Add tag</button>
                                </form>
                            </div>

                            <div class="library-nextcloud-comments" aria-label="nextcloudComments">
                                <strong>Nextcloud comments</strong> <span class="library-muted">(file-level notes)</span>:
                                <?php if ((int)$nextcloudComments['count'] === 0): ?>
                                    <span class="library-muted">No Nextcloud comments</span>
                                <?php else: ?>
                                    <span><?php p((string)$nextcloudComments['count']); ?> total</span>
                                    <ul class="library-comment-list">
                                        <?php foreach ($nextcloudComments['recent'] as $comment): ?>
                                            <li>
                                                <span class="library-muted"><?php p($comment['actorId']); ?> · <?php p($comment['createdAt']); ?></span>
                                                <span><?php p($comment['message']); ?></span>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                                <form method="post" action="<?php p($itemCommentUrl); ?>" class="library-comment-form">
                                    <label>
                                        Add Nextcloud comment
                                        <textarea name="commentMessage" rows="2" placeholder="file-level note..."></textarea>
                                    </label>
                                    <button type="submit">Add comment</button>
                                </form>
                            </div>

                            <form method="post" action="<?php p($itemUpdateUrl); ?>" class="library-item-form">
                                <label>
                                    Title
                                    <input type="text" name="title" value="<?php p($item['title']); ?>" />
                                </label>
                                <label>
                                    Type
                                    <select name="publicationType">
                                        <?php foreach (['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other'] as $type): ?>
                                            <option value="<?php p($type); ?>" <?php if ($item['publicationType'] === $type) { print_unescaped('selected'); } ?>><?php p($type); ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </label>
                                <label>
                                    Creators
                                    <input type="text" name="creators" value="<?php p($item['creators']); ?>" />
                                </label>
                                <label>
                                    Publication
                                    <input type="text" name="publication" value="<?php p($item['publication']); ?>" />
                                </label>
                                <label>
                                    Date
                                    <input type="text" name="publicationDate" value="<?php p($item['publicationDate']); ?>" />
                                </label>
                                <input type="hidden" name="subtitle" value="<?php p($item['subtitle']); ?>" />
                                <input type="hidden" name="language" value="<?php p($item['language']); ?>" />
                                <input type="hidden" name="publisher" value="<?php p($item['publisher']); ?>" />
                                <button type="submit">Save metadata</button>
                            </form>
                        </details>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </section>
</main>
</div>
