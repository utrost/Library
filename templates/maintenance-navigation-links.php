<nav class="library-maintenance-links" aria-label="<?php p($l->t('Library navigation')); ?>">
    <strong><?php p($l->t('Browse')); ?></strong>
    <a href="<?php p($catalogue . '?home=1'); ?>"><?php p($l->t('Home')); ?></a>
    <a href="<?php p($catalogue); ?>"><?php p($l->t('All publications')); ?></a>
    <a href="<?php p($catalogue . '?starred=1'); ?>"><?php p($l->t('Favorites')); ?></a>
    <a href="<?php p($catalogue . '?recentlyOpened=1&sort=lastOpened'); ?>"><?php p($l->t('Continue reading')); ?></a>
    <a href="<?php p($catalogue . '#library-collections'); ?>"><?php p($l->t('Collections')); ?></a>
    <a href="<?php p($catalogue . '?shelves=1'); ?>"><?php p($l->t('Shelves')); ?></a>
    <a href="<?php p($catalogue . '?authors=1'); ?>"><?php p($l->t('Authors')); ?></a>
    <a href="<?php p($catalogue . '?series=1'); ?>"><?php p($l->t('Series')); ?></a>
    <a href="<?php p($catalogue . '?genres=1'); ?>"><?php p($l->t('Genres')); ?></a>
    <a href="<?php p($catalogue . '?lists=1'); ?>"><?php p($l->t('Lists')); ?></a>
    <strong><?php p($l->t('Review and cleanup')); ?></strong>
    <a href="<?php p($catalogue . '?scannerConflicts=1'); ?>"><?php p($l->t('Review')); ?></a>
    <a href="<?php p($catalogue . '?infer=1'); ?>"><?php p($l->t('Extract metadata')); ?></a>
    <a href="<?php p($catalogue . '?duplicates=1'); ?>"><?php p($l->t('Possible duplicates')); ?></a>
    <a href="<?php p($language); ?>"<?php if ($active === 'languages') print_unescaped(' aria-current="page"'); ?>><?php p($l->t('Review languages')); ?></a>
    <a href="<?php p($mappings); ?>"<?php if ($active === 'mappings') print_unescaped(' aria-current="page"'); ?>><?php p($l->t('Publisher and subject names')); ?></a>
    <a class="library-maintenance-settings" href="<?php p($_['settingsUrl']); ?>"><?php p($l->t('Settings')); ?></a>
</nav>
