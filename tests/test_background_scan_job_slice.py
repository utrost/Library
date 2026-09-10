from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scan_background_job_class_runs_existing_scanner_and_marks_job_lifecycle():
    job = (ROOT / "lib" / "BackgroundJob" / "ScanJob.php").read_text()

    assert "namespace OCA\\Library\\BackgroundJob" in job
    assert "use OCP\\BackgroundJob\\QueuedJob;" in job
    assert "class ScanJob extends QueuedJob" in job
    assert "ITimeFactory $time" in job
    assert "LibraryScanner $scanner" in job
    assert "ScanJobService $scanJobService" in job
    assert "$this->scanJobService->markRunning($userId, $jobId);" in job
    assert "$rootId = isset($argument['rootId']) ? (int)$argument['rootId'] : null;" in job
    assert "$progress = function (array $progress) use ($userId, $jobId): void" in job
    assert "$this->scanJobService->updateProgress($userId, $jobId, $progress);" in job
    assert "$this->scanner->scan($userId, $rootId, $progress)" in job
    assert "$this->scanJobService->finishJob($userId, $jobId, $result);" in job
    assert "$this->scanJobService->failJob($userId, $jobId, $e->getMessage());" in job


def test_scan_controller_queues_background_job_and_returns_before_scanning():
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()

    assert "use OCA\\Library\\BackgroundJob\\ScanJob;" in controller
    assert "use OCP\\BackgroundJob\\IJobList;" in controller
    assert "IJobList $jobList" in controller
    assert "$job = $this->scanJobService->queueJob($user->getUID());" in controller
    assert "$this->jobList->add(ScanJob::class, ['userId' => $user->getUID(), 'jobId' => (int)$job['id']]);" in controller
    assert "$this->scanner->scan" not in controller
    assert "finishJob" not in controller


def test_scan_job_service_supports_queued_and_running_statuses():
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()

    assert "public function queueJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array" in service
    assert "scopeType" in service
    assert "rootId" in service
    assert "public function markRunning(string $userId, int $jobId): void" in service
    assert "queued" in service
    assert "running" in service
    assert "completed" in service
    assert "failed" in service
    assert "metadata_errors" in service


def test_docs_and_ui_name_scan_as_background_queued():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "queued background scan" in readme.lower()
    assert "queued background scan" in roadmap.lower()
    assert "Scan progress" in template
    assert "scanJobStatus" in template
