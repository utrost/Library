from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_index_tracks_scan_error_without_losing_index_row():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    assert "scan_error" in migrations

    service = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    assert "public function markScanError(string $userId, int $libraryFileId, string $message): void" in service
    assert "scan_status" in service
    assert "metadata_error" in service
    assert "scan_error" in service
    assert "scanError" in service


def test_scanner_isolates_per_file_metadata_errors_and_continues_root_scan():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "private function scanFile(string $userId, int $rootId, File $node): bool" in scanner
    assert "try" in scanner
    assert "catch (Throwable $e)" in scanner
    assert "markScanError($userId" in scanner
    assert "getLastError()" in scanner
    assert "$indexed++" in scanner


def test_metadata_service_reports_corrupt_archives_as_non_fatal_errors():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "private ?string $lastError = null" in metadata
    assert "public function getLastError(): ?string" in metadata
    assert "Unsupported or corrupt EPUB archive" in metadata
    assert "Unsupported or corrupt CBZ archive" in metadata
    assert "metadata extraction failed" in metadata


def test_template_shows_file_scan_error_state_for_diagnosis():
    template = (ROOT / "templates" / "main.php").read_text()
    assert "scanError" in template
    assert "library-scan-error" in template
    assert "scanError" in (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
