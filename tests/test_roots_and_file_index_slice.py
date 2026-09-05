from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_database_migration_defines_user_specific_multi_root_and_file_index_tables():
    migrations = list((ROOT / "lib" / "Migration").glob("Version*.php"))
    assert migrations, "A Nextcloud database migration must define the roots/file index schema"
    migration = "\n".join(path.read_text() for path in migrations)

    assert "library_roots" in migration
    assert "user_id" in migration
    assert "path" in migration
    assert "label" in migration
    assert "enabled" in migration
    assert "last_scan_at" in migration

    assert "library_files" in migration
    assert "root_id" in migration
    assert "file_id" in migration
    assert "cached_path" in migration
    assert "mime_type" in migration
    assert "scan_status" in migration
    assert "file_id_unique" in migration


def test_root_service_is_list_based_not_singleton():
    service_path = ROOT / "lib" / "Service" / "RootService.php"
    assert service_path.exists()
    service = service_path.read_text()
    assert "namespace OCA\\Library\\Service" in service
    assert "final class RootService" in service
    assert "public function listRoots(string $userId): array" in service
    assert "public function saveRoot(string $userId, string $path" in service
    assert "public function listEnabledRoots(string $userId): array" in service
    assert "LIMIT 1" not in service
    assert "getSingle" not in service


def test_scanner_iterates_enabled_roots_and_indexes_supported_formats_by_file_id():
    scanner_path = ROOT / "lib" / "Service" / "LibraryScanner.php"
    assert scanner_path.exists()
    scanner = scanner_path.read_text()
    assert "final class LibraryScanner" in scanner
    assert "listEnabledRoots($userId)" in scanner
    assert "getDirectoryListing()" in scanner
    assert "upsertFile" in scanner
    assert "getId()" in scanner
    assert "application/pdf" in scanner
    assert "application/epub+zip" in scanner
    assert "application/comicbook+zip" in scanner


def test_page_routes_expose_root_save_and_manual_scan_actions():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "root#save" in routes
    assert "scan#run" in routes
    assert "/roots" in routes
    assert "/scan" in routes

    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    assert "RootService $rootService" in settings
    assert "FileIndexService $fileIndexService" in settings
    assert "listRoots($this->userId)" in settings
    assert "listFiles($this->userId)" in settings


def test_personal_settings_template_shows_extendable_root_configuration_and_file_index():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    assert "Library roots" in template
    assert "name=\"path\"" in template
    assert "Scan enabled roots" in template
    assert "Indexed files" in template
    assert "rootLabel" in template
    assert "fileId" in template
    assert "scanStatus" in template
