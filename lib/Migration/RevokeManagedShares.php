<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use OCA\Library\Service\RootShareService;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

/** Clean up Files access created by Library before disabling or uninstalling it. */
final class RevokeManagedShares implements IRepairStep {
    public function __construct(private RootShareService $sharing) {
    }

    public function getName(): string {
        return 'Revoke Library-managed Files shares';
    }

    public function run(IOutput $output): void {
        $count = $this->sharing->revokeAllForShutdown();
        $output->info('Revoked ' . $count . ' Library shelf grants.');
    }
}
