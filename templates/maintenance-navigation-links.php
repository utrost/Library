<?php
$navigationIcon = static function (string $name): void {
    ?><svg class="library-navigation-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="<?php p(image_path('library', 'navigation.svg') . '#' . $name); ?>" /></svg><?php
};
?>
<nav class="library-maintenance-links" aria-label="<?php p($l->t('Library navigation')); ?>">
    <strong><?php p($l->t('Library')); ?></strong>
    <a href="<?php p($catalogue . '?home=1'); ?>"><?php $navigationIcon('home'); ?><span><?php p($l->t('Home')); ?></span></a>
    <a href="<?php p($catalogue); ?>"><?php $navigationIcon('all'); ?><span><?php p($l->t('All publications')); ?></span></a>
    <a href="<?php p($catalogue . '?starred=1'); ?>"><?php $navigationIcon('starred'); ?><span><?php p($l->t('Favorites')); ?></span></a>
    <a href="<?php p($catalogue . '?recentlyOpened=1&sort=lastOpened'); ?>"><?php $navigationIcon('continue'); ?><span><?php p($l->t('Continue reading')); ?></span></a>
    <strong><?php p($l->t('Discover')); ?></strong>
    <a href="<?php p($catalogue . '?shelves=1'); ?>"><?php $navigationIcon('shelves'); ?><span><?php p($l->t('Shelves')); ?></span></a>
    <a href="<?php p($catalogue . '#library-collections'); ?>"><?php $navigationIcon('collections'); ?><span><?php p($l->t('Collections')); ?></span></a>
    <a href="<?php p($catalogue . '?authors=1'); ?>"><?php $navigationIcon('authors'); ?><span><?php p($l->t('Authors')); ?></span></a>
    <a href="<?php p($catalogue . '?series=1'); ?>"><?php $navigationIcon('series'); ?><span><?php p($l->t('Series')); ?></span></a>
    <a href="<?php p($catalogue . '?genres=1'); ?>"><?php $navigationIcon('genres'); ?><span><?php p($l->t('Genres')); ?></span></a>
    <strong><?php p($l->t('Your lists')); ?></strong>
    <a href="<?php p($catalogue . '?lists=1'); ?>"><?php $navigationIcon('lists'); ?><span><?php p($l->t('Lists')); ?></span></a>
    <a class="library-maintenance-create-list" href="<?php p($catalogue . '?lists=1&new=1'); ?>"><?php $navigationIcon('add'); ?><span><?php p($l->t('Create a new list')); ?></span></a>
    <details class="library-maintenance-tools" open>
    <summary><svg class="library-navigation-icon library-navigation-disclosure-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="<?php p(image_path('library', 'navigation.svg') . '#chevron'); ?>" /></svg><span><?php p($l->t('Review and cleanup')); ?></span></summary>
    <a href="<?php p($catalogue . '?scannerConflicts=1'); ?>"><?php $navigationIcon('review'); ?><span><?php p($l->t('Review')); ?></span></a>
    <a href="<?php p($catalogue . '?infer=1'); ?>"><?php $navigationIcon('infer'); ?><span><?php p($l->t('Extract metadata')); ?></span></a>
    <a href="<?php p($catalogue . '?duplicates=1'); ?>"><?php $navigationIcon('duplicates'); ?><span><?php p($l->t('Possible duplicates')); ?></span></a>
    <a href="<?php p($language); ?>"<?php if ($active === 'languages') print_unescaped(' aria-current="page"'); ?>><?php $navigationIcon('languages'); ?><span><?php p($l->t('Review languages')); ?></span></a>
    <a href="<?php p($mappings); ?>"<?php if ($active === 'mappings') print_unescaped(' aria-current="page"'); ?>><?php $navigationIcon('mappings'); ?><span><?php p($l->t('Publisher and subject names')); ?></span></a>
    </details>
    <a class="library-maintenance-settings" href="<?php p($_['settingsUrl']); ?>"><?php $navigationIcon('settings'); ?><span><?php p($l->t('Settings')); ?></span></a>
</nav>
