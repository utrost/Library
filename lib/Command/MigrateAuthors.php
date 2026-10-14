<?php
declare(strict_types=1);
namespace OCA\Library\Command;

use OCA\Library\Service\AuthorStorageService;
use OCP\IUserManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/** Bounded operator control: default invocation reports progress without changing data. */
final class MigrateAuthors extends Command {
    public function __construct(private AuthorStorageService $authors, private IUserManager $users) { parent::__construct(); }
    protected function configure(): void {
        $this->setName('library:authors:migrate')
            ->setDescription('Report author migration progress, or process one bounded batch')
            ->addArgument('user-id', InputArgument::REQUIRED, 'Nextcloud user ID')
            ->addOption('run', null, InputOption::VALUE_NONE, 'Process at most 500 books / 5 seconds')
            ->addOption('retry-failed', null, InputOption::VALUE_NONE, 'Requeue failed books; preserves manual-assignment conflicts');
    }
    protected function execute(InputInterface $input, OutputInterface $output): int {
        $uid = (string)$input->getArgument('user-id');
        if (!$this->users->userExists($uid)) { $output->writeln('Unknown user.'); return Command::FAILURE; }
        if ($input->getOption('retry-failed')) $this->authors->retryFailed($uid);
        if ($input->getOption('run')) $this->authors->advance($uid, 500);
        $status = $this->authors->status($uid);
        $output->writeln(json_encode($status, JSON_THROW_ON_ERROR));
        return $status['failed'] > 0 ? Command::FAILURE : Command::SUCCESS;
    }
}
