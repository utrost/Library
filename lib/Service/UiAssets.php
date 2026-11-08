<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\Util;
use OCA\Library\Controller\PageController;

final class UiAssets {
    public static function maintenance(): void {
        Util::addStyle('library', PageController::VUE_STYLE_ASSET);
        Util::addScript('library', PageController::VUE_SCRIPT_ASSET);
    }
}
