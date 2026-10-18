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
