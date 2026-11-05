<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use OCA\Library\Service\RootShareService;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

/** Allow new grants only after Nextcloud has enabled Library again. */
final class EnableSharing implements IRepairStep {
    public function __construct(private RootShareService $sharing) {
    }

    public function getName(): string {
        return 'Enable Library shelf sharing';
    }

    public function run(IOutput $output): void {
        $this->sharing->allowSharesAfterEnable();
    }
}
