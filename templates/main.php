<?php
/** @var array $_ */
?>
<div id="library-vue-root"
     lang="<?php p($_['language']); ?>"
     dir="<?php p($_['direction']); ?>"
     data-request-token="<?php p($_['requesttoken'] ?? ''); ?>"></div>
<main id="library-startup-status"
      class="library-startup-status"
      role="status"
      aria-live="polite"
      aria-atomic="true"
     data-library-main-script="library-main-0-1-0-alpha-165"
      data-library-startup-timeout="10000"
      hidden>
    <section class="library-panel" aria-labelledby="library-startup-heading">
        <h2 id="library-startup-heading"><?php p($l->t('Library could not start')); ?></h2>
        <p><?php p($l->t('The catalogue was not shown because its application code did not start safely. No cached or substitute catalogue is being displayed.')); ?></p>
        <p class="library-startup-actions">
            <button type="button" class="button primary" data-library-retry><?php p($l->t('Reload Library')); ?></button>
            <a class="button secondary" href="<?php p($_['settingsUrl'] ?? ''); ?>"><?php p($l->t('Open Library settings')); ?></a>
        </p>
    </section>
</main>
<noscript>
    <main id="library-app" class="library-app" tabindex="-1">
        <section class="library-panel" aria-labelledby="library-javascript-heading">
            <h2 id="library-javascript-heading"><?php p($l->t('JavaScript is disabled')); ?></h2>
            <p><?php p($l->t('Library needs JavaScript to show the catalogue. No cached or substitute catalogue is being displayed.')); ?></p>
            <p><a class="button primary" href="<?php p($_['settingsUrl'] ?? ''); ?>"><?php p($l->t('Open Library settings')); ?></a></p>
        </section>
    </main>
</noscript>
