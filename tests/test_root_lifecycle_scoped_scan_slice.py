from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_root_lifecycle_and_per_root_scan_actions():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "root#update" in routes
    assert "root#toggle" in routes
    assert "root#delete" in routes
    assert "scan#runRoot" in routes
    assert "/roots/{rootId}" in routes
    assert "/roots/{rootId}/toggle" in routes
    assert "/roots/{rootId}/delete" in routes
    assert "/scan/roots/{rootId}" in routes


def test_root_service_has_update_toggle_delete_without_source_file_deletion():
    service = (ROOT / "lib" / "Service" / "RootService.php").read_text()

    assert "public function updateRoot(string $userId, int $rootId" in service
    assert "public function setRootEnabled(string $userId, int $rootId, bool $enabled): void" in service
    assert "public function deleteRoot(string $userId, int $rootId): void" in service
    assert "delete('library_items')" in service
    assert "delete('library_files')" in service
    assert "delete('library_roots')" in service
    assert "getUserFolder" not in service
    assert "->delete()" not in service


def test_scan_jobs_record_scope_and_background_job_passes_root_id_to_scanner():
    migrations = "\n".join(p.read_text() for p in (ROOT / "lib" / "Migration").glob("Version*.php"))
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()
    job = (ROOT / "lib" / "BackgroundJob" / "ScanJob.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()

    assert "scope_type" in migrations
    assert "root_id" in migrations
    assert "public function queueJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array" in service
    assert "scopeType" in service
    assert "rootId" in service
    assert "$rootId = $scopeType === 'root' ? (int)($queuedJob['rootId'] ?? 0) : null;" in job
    assert "isset($argument['rootId'])" not in job
    assert "$this->scanner->scan($userId, $rootId" in job
    assert "runRoot(int $rootId)" in controller
    assert "queueJob($user->getUID(), 'root', $rootId)" in controller


def test_library_scanner_can_scan_all_enabled_roots_or_one_user_root():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()

    assert "public function scan(string $userId, ?int $onlyRootId = null, ?callable $progress = null): array" in scanner
    assert "listEnabledRoots($userId)" in scanner
    assert "filterRootsForScope" in scanner
    assert "scopeRootId" in scanner
    assert "root not found or disabled" in scanner


def test_settings_template_exposes_root_lifecycle_buttons_and_scan_scope():
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "rootUpdateUrl" in template
    assert "rootToggleUrl" in template
    assert "rootDeleteUrl" in template
    assert "rootScanUrl" in template
    assert "Scan this root" in template
    assert "Disable root" in template
    assert "Enable root" in template
    assert "Delete root" in template
    assert "scanScope" in template
