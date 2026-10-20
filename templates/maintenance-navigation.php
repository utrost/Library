<?php
declare(strict_types=1);
/** @var array $_ */
$catalogue = $_['catalogueUrl'];
$language = $_['languageUrl'];
$mappings = $_['valueMappingsUrl'];
$active = $_['maintenanceActive'] ?? '';
?>
<aside class="library-maintenance-navigation library-maintenance-navigation-desktop">
    <?php include __DIR__ . '/maintenance-navigation-links.php'; ?>
</aside>
<details class="library-maintenance-navigation library-maintenance-navigation-mobile">
    <summary><?php p($l->t('Library navigation')); ?></summary>
    <?php include __DIR__ . '/maintenance-navigation-links.php'; ?>
</details>
<button type="button" class="library-maintenance-toggle" data-library-navigation-open hidden aria-label="<?php p($l->t('Open navigation')); ?>" aria-controls="library-maintenance-menu" aria-expanded="false"><span aria-hidden="true">☰</span></button>
<dialog id="library-maintenance-menu" class="library-maintenance-menu" aria-label="<?php p($l->t('Library navigation')); ?>">
    <button type="button" data-library-navigation-close aria-label="<?php p($l->t('Close navigation')); ?>">×</button>
    <?php include __DIR__ . '/maintenance-navigation-links.php'; ?>
</dialog>
