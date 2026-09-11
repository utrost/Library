from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scan_retry_metadata_errors_route_queues_scoped_background_job():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()
    job = (ROOT / "lib" / "BackgroundJob" / "ScanJob.php").read_text()
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()

    assert "scan#retryMetadataErrors" in routes
    assert "/scan/retry-metadata-errors" in routes
    assert "public function retryMetadataErrors(): RedirectResponse" in controller
    assert "queueJob($user->getUID(), 'metadata_errors')" in controller
    assert "'retryMetadataErrors' => true" in controller
    assert "$scopeType = (string)$queuedJob['scopeType'];" in job
    assert "retryMetadataErrors($userId" in job
    assert "metadata_errors" in service


def test_file_index_service_lists_only_metadata_error_rows_for_retry():
    service = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()

    assert "public function metadataErrorFiles(string $userId): array" in service
    assert "scan_status" in service
    assert "metadata_error" in service
    assert "orderBy('last_scanned_at', 'ASC')" in service
    assert "normalizeFileRow" in service


def test_library_scanner_retries_metadata_error_files_without_missing_sweep():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()

    assert "public function retryMetadataErrors(string $userId, ?callable $progress = null): array" in scanner
    retry_body = scanner.split("public function retryMetadataErrors", 1)[1].split("public function recheckMissingFiles", 1)[0]
    assert "metadataErrorFiles($userId)" in retry_body
    assert "listEnabledRoots($userId)" in retry_body
    assert "scanFile($userId, (int)$file['rootId'], $node, $seenLibraryFileIds, true, (int)$file['rootId'])" in retry_body
    scan_file = scanner.split("private function scanFile", 1)[1].split("private function cleanupSuppressedOpfSidecar", 1)[0]
    assert scan_file.count("repairObservation($userId, $repairOriginalRootId, $node)") == 1
    assert scan_file.index("getSize()") < scan_file.index("repairObservation(") < scan_file.index("upsertFile(")
    assert "rootState" not in scanner
    assert "markMissingExcept" not in retry_body
    assert "Retrying metadata errors" in retry_body


def test_settings_page_exposes_retry_metadata_errors_form_and_url():
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "scanRetryMetadataErrorsUrl" in settings
    assert "library.scan.retryMetadataErrors" in settings
    assert "library-scan-retry-metadata-errors-form" in template
    assert "Retry metadata errors" in template
    assert "Only rows currently marked metadata_error are retried" in template
    assert "name=\"requesttoken\"" in template


def test_smoke_and_docs_track_retry_metadata_errors_as_landed():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "settings_has_retry_metadata_errors_form" in smoke
    assert "Retry metadata errors" in guide
    assert "metadata-error retry works" in guide
    assert "metadata-error retry works" in roadmap
    assert "check missing files" in roadmap
