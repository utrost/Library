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
    assert "public function startJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array" in service
    assert "public function finishJob(string $userId, int $jobId, array $result): void" in service
    assert "public function failJob(string $userId, int $jobId, string $error): void" in service
    assert "public function latestJob(string $userId): ?array" in service
    assert "running" in service
    assert "completed" in service
    assert "failed" in service


def test_scan_controller_creates_visible_job_before_queueing_background_scan():
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()

    assert "ScanJobService $scanJobService" in controller
    assert "$job = $this->scanJobService->queueJob($user->getUID());" in controller
    assert "$this->jobList->add(ScanJob::class, ['userId' => $user->getUID(), 'jobId' => (int)$job['id']]);" in controller


def test_settings_template_exposes_latest_scan_job_progress_summary():
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "ScanJobService $scanJobService" in settings
    assert "latestScanJob" in settings
    assert "Scan progress" in template
    assert "scanJobStatus" in template
    assert "filesIndexed" in template
    assert "errorCount" in template
    assert "durationSeconds" in template
