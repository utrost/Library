from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_scan_recheck_missing_files_route_queues_scoped_background_job():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/ScanController.php")
    job = read("lib/BackgroundJob/ScanJob.php")
    service = read("lib/Service/ScanJobService.php")

    assert "scan#recheckMissingFiles" in routes
    assert "/scan/recheck-missing-files" in routes
    assert "public function recheckMissingFiles(): RedirectResponse" in controller
    assert "queueJob($user->getUID(), 'missing_files')" in controller
    assert "'recheckMissingFiles' => true" in controller
    assert "recheckMissingFiles($userId" in job
    assert "missing_files" in service


def test_file_index_lists_only_missing_files_oldest_first():
    service = read("lib/Service/FileIndexService.php")

    assert "public function missingFiles(string $userId): array" in service
    body = service.split("public function missingFiles", 1)[1].split("private function normalizeFileRow", 1)[0]
    assert "scan_status" in body
    assert "createNamedParameter('missing')" in body
    assert "orderBy('last_scanned_at', 'ASC')" in body
    assert "normalizeFileRow" in body


def test_scanner_rechecks_missing_files_without_broad_missing_sweep():
    scanner = read("lib/Service/LibraryScanner.php")

    assert "public function recheckMissingFiles(string $userId, ?callable $progress = null): array" in scanner
    body = scanner.split("public function recheckMissingFiles", 1)[1].split("private function", 1)[0]
    assert "missingFiles($userId)" in body
    assert "getById((int)$file['fileId'])" in body
    assert "listEnabledRoots($userId)" in body
    assert "scanFile($userId, (int)$file['rootId'], $node, $seenLibraryFileIds, true, (int)$file['rootId'])" in body
    scan_file = scanner.split("private function scanFile", 1)[1].split("private function cleanupSuppressedOpfSidecar", 1)[0]
    assert scan_file.count("repairObservation($userId, $repairOriginalRootId, $node)") == 1
    assert scan_file.index("getSize()") < scan_file.index("repairObservation(") < scan_file.index("upsertFile(")
    assert "rootState" not in scanner
    assert "markMissingExcept" not in body
    assert "missing recheck failed: source file not found" in body
    assert "markMissingRecheckError($userId" in body


def test_missing_recheck_failure_keeps_row_missing_not_metadata_error():
    service = read("lib/Service/FileIndexService.php")

    assert "public function markMissingRecheckError(string $userId, int $libraryFileId, string $message): void" in service
    body = service.split("public function markMissingRecheckError", 1)[1].split("/**", 1)[0]
    assert "createNamedParameter('missing')" in body
    assert "scan_status" in body
    assert "missing recheck failed" in body


def test_settings_page_exposes_recheck_missing_files_form_and_url():
    settings = read("lib/Settings/Personal.php")
    template = read("templates/settings-personal.php")

    assert "scanRecheckMissingFilesUrl" in settings
    assert "library.scan.recheckMissingFiles" in settings
    assert "library-scan-recheck-missing-files-form" in template
    assert "Recheck missing files" in template
    assert "missing files are rechecked" in template


def test_smoke_and_docs_track_recheck_missing_files_as_landed():
    smoke = read("scripts/smoke-vue-page.mjs")
    readme = read("docs/user-guide.md")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")

    assert "settings_has_recheck_missing_files_form" in smoke
    assert "Recheck missing files" in readme
    assert "Recheck missing files" in guide
    assert "missing-file recheck" in roadmap.lower()
