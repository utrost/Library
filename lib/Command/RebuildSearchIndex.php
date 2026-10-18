<?php
declare(strict_types=1);
namespace OCA\Library\Command;

use OCA\Library\Service\ItemService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

final class RebuildSearchIndex extends Command {
    public function __construct(private ItemService $items) { parent::__construct(); }
    protected function configure(): void {
        $this->setName('library:search:rebuild')
            ->setDescription('Rebuild outdated catalogue search rows without reading publication files')
            ->addOption('max-items', null, InputOption::VALUE_REQUIRED, 'Maximum items in this run (0 means all)', '0');
    }
    protected function execute(InputInterface $input, OutputInterface $output): int {
        $max = max(0, (int)$input->getOption('max-items'));
        $done = 0;
        do {
            $batch = $this->items->backfillSearchIndex($max > 0 ? min(100, $max - $done) : 100);
            $done += $batch;
            if ($done > 0 && $done % 1000 === 0) $output->writeln(sprintf('%d items checked.', $done));
        } while ($batch > 0 && ($max === 0 || $done < $max));
        $output->writeln(sprintf('Checked %d search index items.', $done));
        return Command::SUCCESS;
    }
}
