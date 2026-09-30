<?php
declare(strict_types=1);
namespace OCA\Library\Listener;

use OCA\Library\Service\ScanChangeJournal;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\Node\AbstractNodeEvent;
use OCP\Files\Events\Node\AbstractNodesEvent;
use OCP\Files\Folder;
use OCP\Files\File;
use Psr\Log\LoggerInterface;
use Throwable;

/** @implements IEventListener<Event> */
final class ScanNodeChangeListener implements IEventListener {
    public function __construct(private ScanChangeJournal $journal, private LoggerInterface $logger) {}

    public function handle(Event $event): void {
        $nodes = $event instanceof AbstractNodesEvent ? [$event->getSource(), $event->getTarget()]
            : ($event instanceof AbstractNodeEvent ? [$event->getNode()] : []);
        foreach ($nodes as $node) try {
            $mimeType = null;
            if ($node instanceof File) {
                // The old node of a rename may no longer resolve after the move.
                try { $mimeType = $node->getMimetype(); } catch (Throwable) {}
            }
            $this->journal->recordNodePath($node->getPath(), $node instanceof Folder, $mimeType);
        } catch (Throwable $e) {
            // A Library index problem must never make a Nextcloud file operation fail.
            $this->logger->warning('Library change event was not recorded; full reconciliation will retry', ['exception_class' => get_class($e)]);
        }
    }
}
