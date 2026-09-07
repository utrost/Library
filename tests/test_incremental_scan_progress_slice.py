from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_library_scanner_accepts_progress_callback_and_reports_roots_and_files():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()

    assert "public function scan(string $userId, ?int $onlyRootId = null, ?callable $progress = null): array" in scanner
    assert "$this->reportProgress($progress, $rootsTotal, $indexed, count($errors)," in scanner
    assert "private function reportProgress(?callable $progress, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary): void" in scanner
    assert "$progress([" in scanner
    assert "'roots' => $rootsTotal" in scanner
    assert "'indexed' => $filesIndexed" in scanner
    assert "'errors' => $errorCount" in scanner


def test_background_scan_job_persists_incremental_progress_while_running():
    job = (ROOT / "lib" / "BackgroundJob" / "ScanJob.php").read_text()
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()

    assert "$progress = function (array $progress) use ($userId, $jobId): void" in job
    assert "$this->scanJobService->updateProgress($userId, $jobId, $progress);" in job
    assert "$this->scanner->scan($userId, $rootId, $progress)" in job
    assert "public function updateProgress(string $userId, int $jobId, array $progress): void" in service
    assert "->set('status', $qb->createNamedParameter('running'))" in service
    assert "->set('roots_total', $qb->createNamedParameter((int)($progress['roots'] ?? 0)))" in service
    assert "->set('files_indexed', $qb->createNamedParameter((int)($progress['indexed'] ?? 0)))" in service
    assert "->set('error_count', $qb->createNamedParameter((int)($progress['errors'] ?? 0)))" in service
    assert "->set('summary', $qb->createNamedParameter(mb_substr((string)($progress['summary'] ?? 'Scanning…'), 0, 4000)))" in service
    assert "finished_at" not in service.split("public function updateProgress", 1)[1].split("public function", 1)[0]


def test_ui_copy_names_live_progress_during_background_scan():
    readme = (ROOT / "README.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()
    template = (ROOT / "templates" / "settings-personal.php").read_text().lower()

    assert "live-ish scan progress" in readme
    assert "live-ish scan progress" in roadmap
    assert "updates while the background job is running" in template
