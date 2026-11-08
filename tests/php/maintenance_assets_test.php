<?php
declare(strict_types=1);
namespace OCP {
    final class Util {
        public static array $assets = [];
        public static function addStyle(string $app, string $asset): void { self::$assets['css'] = [$app, $asset]; }
        public static function addScript(string $app, string $asset): void { self::$assets['js'] = [$app, $asset]; }
    }
}
namespace OCP\AppFramework { class Controller {} }
namespace {
    require __DIR__.'/../../lib/Controller/PageController.php';
    require __DIR__.'/../../lib/Service/UiAssets.php';
    \OCA\Library\Service\UiAssets::maintenance();
    foreach (['css' => 'css', 'js' => 'mjs'] as $kind => $extension) {
        [$app, $asset] = \OCP\Util::$assets[$kind];
        if ($app !== 'library' || !is_file(__DIR__.'/../../'.$kind.'/'.$asset.'.'.$extension)) {
            throw new \RuntimeException('Maintenance page requests an absent frontend asset');
        }
    }
    $template = file_get_contents(__DIR__.'/../../templates/main.php');
    $version = (string)simplexml_load_file(__DIR__.'/../../appinfo/info.xml')->version;
    if (!str_contains($template, 'data-library-main-script="'.\OCA\Library\Controller\PageController::VUE_SCRIPT_ASSET.'"')
        || !str_contains($template, 'data-library-version="'.$version.'"')) {
        throw new \RuntimeException('Startup watchdog and version marker must match the package');
    }
    echo "maintenance_assets_match_catalogue=true\n";
}
