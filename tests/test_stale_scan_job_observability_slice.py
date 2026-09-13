from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_scan_jobs_have_portable_heartbeat_and_current_path_schema():
    migration = read("lib/Migration/Version000100Date20260913190000.php")
    database_xml = read("appinfo/database.xml")

    for column in ("last_progress_at", "current_path"):
        assert column in migration
        assert column in database_xml
    assert "['length' => 1024, 'notnull' => false]" in migration


def test_running_jobs_heartbeat_and_persist_bounded_progress_context():
    service = read("lib/Service/ScanJobService.php")
    mark_running = service.split("public function markRunning", 1)[1].split("public function", 1)[0]
    update_progress = service.split("public function updateProgress", 1)[1].split("public function", 1)[0]

    assert "last_progress_at" in mark_running
    assert "last_progress_at" in update_progress
    assert "current_path" in update_progress
    assert "CURRENT_PATH_MAX_LENGTH = 1024" in service
    assert "mb_substr" in service


def test_latest_job_reports_staleness_without_owning_a_terminal_transition():
    service = read("lib/Service/ScanJobService.php")
    latest = service.split("public function latestJob", 1)[1].split("public function getJob", 1)[0]

    assert "STALE_RUNNING_AFTER_SECONDS = 15 * 60" in service
    assert "last_progress_at" in latest
    assert "$this->recentJobs($userId, 1)" in latest
    assert "return $this->normalizeRow($running, true);" in latest
    assert "markStale" not in service
    assert "'isStale' => $isStale" in service
    assert "'staleAfterSeconds' => self::STALE_RUNNING_AFTER_SECONDS" in service
    assert "'staleSeconds' => $staleSeconds" in service


def test_scanner_reports_folder_or_file_path_through_existing_throttled_callback():
    scanner = read("lib/Service/LibraryScanner.php")
    job = read("lib/BackgroundJob/ScanJob.php")

    assert "'currentPath' => $currentPath" in scanner
    assert "$this->displayPath($folder, $userId)" in scanner
    assert "$currentPath = $this->displayPath($node, $userId);" in scanner
    assert "'Retrying metadata errors: ' . $currentPath" in scanner
    assert "'Rechecking missing files: ' . $currentPath" in scanner
    assert "ScanProgressPolicy" in job
    assert "$policy->shouldPersist" in job
    assert "$this->scanJobService->updateProgress($userId, $jobId, $progress)" in job


def test_scan_lifecycle_logging_is_failure_safe():
    service = read("lib/Service/ScanJobService.php")
    job = read("lib/BackgroundJob/ScanJob.php")

    assert "library.scan.cancelled" in service
    for event in ("library.scan.started", "library.scan.completed", "library.scan.failed"):
        assert event in job
    assert "catch (Throwable)" in service
    assert "catch (Throwable)" in job
    assert "'job_id' => $jobId" in job
    assert "'user_id' => $userId" in job
