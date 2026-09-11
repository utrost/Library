from pathlib import Path
import re


ROOT = Path(__file__).parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def method(source: str, name: str, next_name: str) -> str:
    return source[source.index(f"function {name}"):source.index(f"function {next_name}")]


def test_explicit_boolean_returns_and_exact_insert_fail_closed():
    service = read("lib/Service/ScanJobService.php")
    assert re.search(r"function markRunning.*?return \$qb->update\(.*?->executeStatement\(\) > 0;", service, re.S)
    update = method(service, "updateJob", "jobById")
    assert "return $qb->update('library_scan_jobs')" in update
    create = method(service, "createJob", "updateJob")
    assert "$insertedId <= 0" in create and "throw new \\RuntimeException" in create
    assert "?? [" not in create


def test_shared_cancellation_exception_and_scanner_propagation_contract():
    scanner = read("lib/Service/LibraryScanner.php")
    job = read("lib/BackgroundJob/ScanJob.php")
    exception = read("lib/Exception/ScanCancelledException.php")
    assert "namespace OCA\\Library\\Exception;" in exception
    assert "use OCA\\Library\\Exception\\ScanCancelledException;" in scanner
    assert "use OCA\\Library\\Exception\\ScanCancelledException;" in job
    assert "final class ScanCancelledException" not in job
    assert scanner.count("catch (ScanCancelledException $e)") >= 2
    root_catch = scanner.index("catch (Throwable $e)", scanner.index("foreach ($roots as $root)"))
    assert scanner.rfind("catch (ScanCancelledException $e)", 0, root_catch) > scanner.index("foreach ($roots as $root)")


def test_cancellation_has_one_atomic_privacy_safe_event_owner():
    service = read("lib/Service/ScanJobService.php")
    job = read("lib/BackgroundJob/ScanJob.php")
    cancel = method(service, "cancelJob", "isCancelled")
    assert "LoggerInterface" in service
    assert "if ($affected > 0)" in cancel
    assert "library.scan.cancelled" in cancel
    assert "try {" in cancel and "catch (Throwable)" in cancel
    assert "library.scan.cancelled" not in job
    forbidden = ("user_id", "userId", "job_id", "jobId", "root_id", "rootId", "path", "error")
    log_call = cancel[cancel.index("library.scan.cancelled"):]
    for key in forbidden:
        assert f"'{key}' =>" not in log_call


def test_terminal_updates_preserve_latest_metrics_and_running_predicates():
    service = read("lib/Service/ScanJobService.php")
    progress = method(service, "updateProgress", "finishJob")
    fail = method(service, "failJob", "cancelQueuedJob")
    assert "->eq('status', $qb->createNamedParameter('running'))" in progress
    assert "->neq('status'" not in progress
    for column in ("roots_total", "files_indexed", "files_added", "paths_updated", "files_unchanged", "files_missing", "metadata_errors", "fingerprint_skips", "metadata_extractions", "item_refreshes", "duration_ms"):
        assert f"->set('{column}'" in fail
    assert "->eq('status', $qb->createNamedParameter('running'))" in fail


def test_duration_scope_cover_status_and_failed_attempt_timing_contracts():
    service = read("lib/Service/ScanJobService.php")
    job = read("lib/BackgroundJob/ScanJob.php")
    scanner = read("lib/Service/LibraryScanner.php")
    cover = read("lib/Controller/CoverController.php")
    assert "runStartedAt" in service and "time() - $runStartedAt" in service
    assert "['completed', 'failed', 'cancelled']" in service
    assert "$scopeType = (string)$queuedJob['scopeType'];" in job
    assert "sevenzip-first-image" in cover and "rar-first-image" in cover
    assert "'archive-first-image'" not in cover
    upsert = scanner.index("upsertFile(")
    assert scanner.index("finally", upsert) < scanner.index("$seenLibraryFileIds[]", upsert)
    missing = scanner.index("markMissingExcept(")
    assert scanner.index("finally", missing) < scanner.index("markScanned", missing)


def test_progress_snapshots_logger_schema_and_ci_runtime_coverage():
    scanner = read("lib/Service/LibraryScanner.php")
    job = read("lib/BackgroundJob/ScanJob.php")
    ci = read(".github/workflows/ci.yml")
    script = read("scripts/run-php-runtime-tests.sh")
    report = method(scanner, "reportProgress", "scanFile")
    for key in ("fingerprintSkips", "metadataExtractions", "itemRefreshes", "fileIndexDurationMs", "missingUpdateDurationMs"):
        assert key in report
    expected = ("event_schema", "scope_type", "outcome", "queue_wait_ms", "progress_writes", "cancel_checks", "roots", "indexed", "fingerprint_skips", "metadata_extractions", "item_refreshes", "scanner_duration_ms", "file_index_duration_ms", "fingerprint_duration_ms", "metadata_extraction_duration_ms", "item_refresh_duration_ms", "missing_update_duration_ms")
    for key in expected:
        assert f"'{key}'" in job
    assert "'progressWrites'" not in job and "'cancelChecks'" not in job
    assert "metadata_fast_path_test.php" in script and "performance_instrumentation_test.php" in script
    assert "./scripts/run-php-runtime-tests.sh" in ci


def test_review_runtime_harnesses_and_traversal_authority_contracts():
    scanner = read("lib/Service/LibraryScanner.php")
    job = read("lib/BackgroundJob/ScanJob.php")
    script = read("scripts/run-php-runtime-tests.sh")
    assert "$rootId = $scopeType === 'root' ? (int)($queuedJob['rootId'] ?? 0) : null;" in job
    assert "Invalid persisted scan scope" in job
    assert "traversalUnits" in scanner
    assert "library_scanner_traversal_test.php" in script
    assert "scan_job_runtime_test.php" in script


def test_non_throwing_operational_logs_and_precision_documentation():
    for path in ("lib/BackgroundJob/ScanJob.php", "lib/Controller/PageController.php", "lib/Controller/CoverController.php"):
        source = read(path)
        assert "catch (Throwable)" in source
    docs = read("docs/architecture-review.md")
    assert "second-resolution approximations" in docs
    assert "single filesystem listing/node call" in docs
    assert "latest persisted snapshot" in docs
    assert "metadataExtractions" in docs and "attempts entering extraction" in docs
    assert "itemRefreshes" in docs and "successful ensureItem" in docs
