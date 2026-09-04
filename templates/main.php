<?php
/** @var array $_ */
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
            <p>First target: roots, scan, metadata, covers, catalogue and reader handoff.</p>
        </article>
        <article class="library-card">
            <h2>Reader handoff spike</h2>
            <p>Next technical risk: open existing Nextcloud files through compatible viewer/reader apps.</p>
            <p><a href="<?php p($_['fixtureOpenUrl']); ?>">Open reader-handoff.pdf fixture</a></p>
        </article>
        <article class="library-card">
            <h2>No import silo</h2>
            <p>Removing Library must leave the original publication archive usable as normal files.</p>
        </article>
    </section>
</div>
