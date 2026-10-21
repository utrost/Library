<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\Util;

final class UiAssets {
    public static function maintenance(): void {
        Util::addStyle('library', 'library-vue-0-3-0-alpha-38-compact-list-table-cover-96-fit-v8');
        Util::addScript('library', 'library-main-0-3-0-alpha-38-compact-list-table-cover-96-fit-v8');
    }
}
