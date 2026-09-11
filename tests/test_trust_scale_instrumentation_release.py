from pathlib import Path
ROOT = Path(__file__).parents[1]
def read(path: str) -> str: return (ROOT / path).read_text(encoding="utf-8")
def test_scanner_aggregate_metrics_and_exact_boundaries():
    scanner = read("lib/Service/LibraryScanner.php")
    for key in ("fingerprintSkips", "metadataExtractions", "itemRefreshes", "scannerDurationMs", "fileIndexDurationMs", "fingerprintDurationMs", "metadataExtractionDurationMs", "itemRefreshDurationMs", "missingUpdateDurationMs"): assert key in scanner
    assert "MonotonicClock" in scanner
def test_portable_scan_job_schema_and_exact_insert_contract():
    migration = read("lib/Migration/Version000100Date20260911140000.php")
    schema = read("appinfo/database.xml"); service = read("lib/Service/ScanJobService.php")
    for column in ("run_started_at", "duration_ms", "fingerprint_skips", "metadata_extractions", "item_refreshes"):
        assert column in migration and column in schema
    assert "lastInsertId" in service and "return $this->latestJob($userId)" not in service
    assert "->addOrderBy('id', 'DESC')" in service
def test_terminal_atomicity_throttling_and_private_logger_allowlists():
    job = read("lib/BackgroundJob/ScanJob.php"); service = read("lib/Service/ScanJobService.php")
    page = read("lib/Controller/PageController.php"); cover = read("lib/Controller/CoverController.php")
    assert "LoggerInterface" in job and "ScanProgressPolicy" in job
    assert "progressWrites" in job and "cancelChecks" in job
    assert "library.scan.completed" in job and "library.scan.failed" in job
    assert "executeStatement() > 0" in service
    assert "library.catalogue.built" in page and "library.catalogue.slow" in page
    assert "library.cover.built" in cover and "library.cover.slow" in cover
    assert "preview-error: " not in cover
def test_alpha_154_release_assets_and_docs():
    assert "0.1.0-alpha.161" in read("appinfo/info.xml") and "0.1.0-alpha.161" in read("package.json")
    assert (ROOT / "js/library-main-0-1-0-alpha-154.mjs").exists() and (ROOT / "css/library-vue-0-1-0-alpha-154.css").exists()
    combined = "\n".join(read(p) for p in ("README.md", "CHANGELOG.md", "RELEASE.md", "docs/post-v0.1-roadmap.md"))
    assert "aggregate" in combined.lower() and "external telemetry" in combined.lower() and "non-preemptive" in combined.lower()

def test_cancellation_instrumentation_documents_unavailable_worker_metrics():
    docs = read("docs/architecture-review.md").lower()
    assert "worker_metrics_available" in docs
    assert "null rather than false zero" in docs
    assert "queue wait" in docs and "second-resolution" in docs
