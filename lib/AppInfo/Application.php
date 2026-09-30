<?php

declare(strict_types=1);

namespace OCA\Library\AppInfo;

use OCP\AppFramework\App;

class Application extends App implements \OCP\AppFramework\Bootstrap\IBootstrap {
    public function register(\OCP\AppFramework\Bootstrap\IRegistrationContext $context): void {
        $context->registerEventListener(\OCP\User\Events\UserDeletedEvent::class, \OCA\Library\Listener\UserDeletedListener::class);
        foreach ([
            \OCP\Files\Events\Node\NodeCreatedEvent::class,
            \OCP\Files\Events\Node\NodeWrittenEvent::class,
            \OCP\Files\Events\Node\NodeTouchedEvent::class,
            \OCP\Files\Events\Node\BeforeNodeDeletedEvent::class,
            \OCP\Files\Events\Node\NodeDeletedEvent::class,
            \OCP\Files\Events\Node\NodeRenamedEvent::class,
            \OCP\Files\Events\Node\NodeCopiedEvent::class,
        ] as $event) $context->registerEventListener($event, \OCA\Library\Listener\ScanNodeChangeListener::class);
    }
    public function boot(\OCP\AppFramework\Bootstrap\IBootContext $context): void {}
    public const APP_ID = 'library';

    public function __construct() {
        parent::__construct(self::APP_ID);
    }
}
