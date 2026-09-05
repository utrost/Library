from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_migration_adds_scan_jobs_table_for_progress_history():
    migrations = "\n".join(p.read_text() for p in (ROOT / "lib" / "Migration").glob("Version*.php"))

    assert "library_scan_jobs" in migrations
    assert "status" in migrations
    assert "started_at" in migrations
    assert "finished_at" in migrations
    assert "roots_total" in migrations
    assert "files_indexed" in migrations
    assert "error_count" in migrations
    assert "summary" in migrations


def test_scan_job_service_tracks_start_finish_and_recent_user_job():
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()

    assert "final class ScanJobService" in service
    assert "public function startJob(string $userId): array" in service
    assert "public function finishJob(string $userId, int $jobId, array $result): void" in service
    assert "public function failJob(string $userId, int $jobId, string $error): void" in service
    assert "public function latestJob(string $userId): ?array" in service
    assert "running" in service
    assert "completed" in service
    assert "failed" in service


def test_scan_controller_wraps_existing_scan_in_job_status():
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()

    assert "ScanJobService $scanJobService" in controller
    assert "$job = $this->scanJobService->startJob($user->getUID());" in controller
    assert "$this->scanJobService->finishJob($user->getUID(), (int)$job['id'], $result);" in controller
    assert "$this->scanJobService->failJob($user->getUID(), (int)$job['id'], $e->getMessage());" in controller


def test_page_template_exposes_latest_scan_job_progress_summary():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    template = (ROOT / "templates" / "main.php").read_text()

    assert "ScanJobService $scanJobService" in page
    assert "latestScanJob" in page
    assert "Scan progress" in template
    assert "scanJobStatus" in template
    assert "filesIndexed" in template
    assert "errorCount" in template
    assert "durationSeconds" in template
