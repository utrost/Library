<?php

declare(strict_types=1);

namespace OCA\Library\Command;

use OCA\Library\Service\ItemService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

final class RebuildFacetIndex extends Command {
    public function __construct(private ItemService $items) {
        parent::__construct();
    }

    protected function configure(): void {
        $this->setName('library:facets:rebuild')
            ->setDescription('Rebuild the normalized subject/classification facet index for one user')
            ->addArgument('user-id', InputArgument::REQUIRED, 'Nextcloud user ID')
            ->addOption('batch-size', null, InputOption::VALUE_REQUIRED, 'Items read per batch', '500');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $userId = trim((string)$input->getArgument('user-id'));
        $batchSize = max(1, min(5000, (int)$input->getOption('batch-size')));
        $count = $this->items->rebuildFacetIndex($userId, $batchSize);
        $output->writeln(sprintf('Rebuilt facet index for %d items.', $count));
        return Command::SUCCESS;
    }
}
