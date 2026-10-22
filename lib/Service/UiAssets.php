<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\Util;

final class UiAssets {
    public static function maintenance(): void {
        Util::addStyle('library', 'library-vue-0-3-0-alpha-39-review-status-cover-v1');
        Util::addScript('library', 'library-main-0-3-0-alpha-39-review-status-cover-v1');
    }
}
