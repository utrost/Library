<?php
/** @var array $_ */
?>
<div id="library-vue-root" data-request-token="<?php p($_['requesttoken'] ?? ''); ?>"></div>
<main id="library-startup-status"
      class="library-startup-status"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      data-library-main-script="library-main-0-1-0-alpha-163"
      data-library-startup-timeout="10000"
      hidden>
    <section class="library-panel" aria-labelledby="library-startup-heading">
        <h2 id="library-startup-heading">Library could not start</h2>
        <p>The catalogue was not shown because its application code did not start safely. No cached or substitute catalogue is being displayed.</p>
        <p class="library-startup-actions">
            <button type="button" class="button primary" data-library-retry>Reload Library</button>
            <a class="button secondary" href="<?php p($_['settingsUrl'] ?? ''); ?>">Open Library settings</a>
        </p>
    </section>
</main>
<noscript>
    <main id="library-app" class="library-app" tabindex="-1">
        <section class="library-panel" aria-labelledby="library-javascript-heading">
            <h2 id="library-javascript-heading">JavaScript is disabled</h2>
            <p>Library needs JavaScript to show the catalogue. No cached or substitute catalogue is being displayed.</p>
            <p><a class="button primary" href="<?php p($_['settingsUrl'] ?? ''); ?>">Open Library settings</a></p>
        </section>
    </main>
</noscript>
