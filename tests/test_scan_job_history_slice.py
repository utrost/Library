from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scan_job_service_lists_recent_user_history_newest_first_and_limited():
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()

    assert "public function recentJobs(string $userId, int $limit = 5): array" in service
    assert "->orderBy('started_at', 'DESC')" in service
    assert "->setMaxResults(max(1, min(20, $limit)))" in service
    assert "array_map(fn (array $row): array => $this->normalizeRow($row), $rows)" in service


def test_page_controller_passes_scan_history_to_template():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'scanJobHistory' => $userId !== '' ? $this->scanJobService->recentJobs($userId, 5) : []" in page


def test_template_renders_scan_history_without_replacing_latest_progress():
    template = (ROOT / "templates" / "main.php").read_text()

    assert "$scanJobHistory = $_['scanJobHistory'] ?? [];" in template
    assert "Scan history" in template
    assert "data-library-scan-history" in template
    assert "foreach ($scanJobHistory as $historyJob)" in template
    assert "historyScanJobStatus" in template
    assert "historyFilesIndexed" in template
    assert "historyErrorCount" in template
    assert "historyDurationSeconds" in template


def test_docs_name_recent_scan_history():
    readme = (ROOT / "README.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "recent scan history" in readme
    assert "recent scan history" in roadmap
