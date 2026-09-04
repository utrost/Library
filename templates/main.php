<?php
/** @var array $_ */
$roots = $_['roots'] ?? [];
$files = $_['files'] ?? [];
$items = $_['items'] ?? [];
$itemUpdateBaseUrl = $_['itemUpdateBaseUrl'] ?? '';
?>
<div id="library-app" class="library-app">
    <section class="library-hero">
        <h1>Library</h1>
        <p class="library-lede">
            Library is a catalogue layer for publications already stored in Nextcloud.
        </p>
        <p>
            Nextcloud Files remain canonical. Library will add discovery, metadata,
            covers, browsing, search and reader handoff without importing or owning the files.
        </p>
    </section>

    <section class="library-card-grid" aria-label="Library bootstrap status">
        <article class="library-card">
            <h2>v0.1 Catalogue</h2>
            <p>Current slice: user-specific Library roots, manual scan and a stable file-ID index.</p>
        </article>
        <article class="library-card">
            <h2>Reader handoff spike</h2>
            <p>Existing Nextcloud viewers/readers open indexed files through the default file route.</p>
            <p><a href="<?php p($_['fixtureOpenUrl']); ?>">Open reader-handoff.pdf fixture</a></p>
        </article>
        <article class="library-card">
            <h2>No import silo</h2>
            <p>Removing Library must leave the original publication archive usable as normal files.</p>
        </article>
    </section>

    <section class="library-panel" aria-label="Library roots">
        <h2>Library roots</h2>
        <p>The first UI is intentionally small, but the backend stores a user-specific list of roots.</p>
        <form method="post" action="<?php p($_['rootSaveUrl']); ?>" class="library-form">
            <label>
                Folder path
                <input type="text" name="path" value="/LibrarySpike" placeholder="/Media/Books" />
            </label>
            <label>
                Label
                <input type="text" name="label" value="" placeholder="Books, Comics, Manuals..." />
            </label>
            <button type="submit">Save root</button>
        </form>

        <?php if (count($roots) === 0): ?>
            <p class="library-muted">No roots configured yet. Start with one path; more roots can be added later.</p>
        <?php else: ?>
            <ul class="library-root-list">
                <?php foreach ($roots as $root): ?>
                    <li>
                        <strong><?php p($root['label'] ?: $root['path']); ?></strong>
                        <span><?php p($root['path']); ?></span>
                        <span><?php p($root['enabled'] ? 'enabled' : 'disabled'); ?></span>
                        <?php if ($root['lastScanAt']): ?>
                            <span>last scan: <?php p(date('Y-m-d H:i', $root['lastScanAt'])); ?></span>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <form method="post" action="<?php p($_['scanRunUrl']); ?>">
            <button type="submit">Scan enabled roots</button>
        </form>
    </section>

    <section class="library-panel" aria-label="Indexed files">
        <h2>Indexed files</h2>
        <?php if (count($files) === 0): ?>
            <p class="library-muted">No indexed files yet. Add a root and scan it.</p>
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
                            <dd><?php p($file['scanStatus']); ?></dd>
                        </dl>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </section>

    <section class="library-panel" aria-label="Publication catalogue">
        <h2>Publication catalogue</h2>
        <?php if (count($items) === 0): ?>
            <p class="library-muted">No catalogue items yet. Scan enabled roots to create one publication item for each indexed file.</p>
        <?php else: ?>
            <div class="library-index-list">
                <?php foreach ($items as $item): ?>
                    <?php $itemUpdateUrl = str_replace('__ITEM_ID__', (string)$item['id'], $itemUpdateBaseUrl); ?>
                    <article class="library-index-row library-item-row">
                        <h3><?php p($item['title']); ?></h3>
                        <p>
                            <strong>publicationType</strong>: <?php p($item['publicationType']); ?> ·
                            <strong>metadataSource</strong>: <?php p($item['metadataSource']); ?> ·
                            <strong>userEdited</strong>: <?php p($item['userEdited'] ? 'yes' : 'no'); ?>
                        </p>
                        <p class="library-muted"><?php p($item['cachedPath']); ?></p>
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
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </section>
</div>
