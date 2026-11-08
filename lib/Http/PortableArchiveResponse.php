<?php
declare(strict_types=1);
namespace OCA\Library\Http;
use OCP\AppFramework\Http\{Response,ICallbackResponse,IOutput};
use OCA\Library\Service\CurationPortabilityService;
/** Streams bounded rows. No user-supplied filename or source book bytes. */
final class PortableArchiveResponse extends Response implements ICallbackResponse {
    public function __construct(private CurationPortabilityService $service,private string $uid,private string $id) {
        parent::__construct();
        $this->addHeader('Content-Type','application/x-ndjson');
        $this->addHeader('Content-Disposition','attachment; filename="library-curation.jsonl"');
        $this->addHeader('Cache-Control','private, no-store');
        $this->addHeader('X-Content-Type-Options','nosniff');
    }
    public function callback(IOutput $output): void { foreach ($this->service->download($this->uid,$this->id) as $line) { if (connection_aborted()) break;$output->setOutput($line); } }
}
