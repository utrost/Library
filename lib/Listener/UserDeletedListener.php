<?php
declare(strict_types=1);
namespace OCA\Library\Listener;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\User\Events\UserDeletedEvent;
use OCA\Library\Service\LibraryCleanupService;
use OCA\Library\Service\CoverThumbnailService;
/** @implements IEventListener<UserDeletedEvent> */
final class UserDeletedListener implements IEventListener {
    public function __construct(private LibraryCleanupService $cleanup, private CoverThumbnailService $thumbnails) {}
    public function handle(Event $event): void {
        if ($event instanceof UserDeletedEvent) {
            $this->cleanup->deleteAccount($event->getUser()->getUID());
            $this->thumbnails->deleteUser($event->getUser()->getUID());
        }
    }
}
