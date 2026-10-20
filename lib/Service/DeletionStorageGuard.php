<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Request-local adapter: called by View after its exclusive delete lock is held.
 * Delegates to the original wrapper chain, including Nextcloud trash handling.
 */
final class DeletionStorageGuard extends \OC\Files\Storage\Wrapper\Wrapper {
    public function __construct(\OCP\Files\Storage\IStorage $storage, private \Closure $guard) { parent::__construct(['storage' => $storage]); }
    public function unlink(string $path): bool { return ($this->guard)($path, false, fn() => parent::unlink($path)); }
    public function rmdir(string $path): bool { return ($this->guard)($path, true, fn() => parent::rmdir($path)); }
}
