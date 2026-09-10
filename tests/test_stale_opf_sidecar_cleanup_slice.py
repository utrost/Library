from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scanner_marks_suppressed_opf_sidecars_and_deletes_existing_catalogue_item():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "private function cleanupSuppressedOpfSidecar(string $userId, int $rootId, File $file): ?int" in scanner
    assert "$preservedSidecarId = $this->cleanupSuppressedOpfSidecar($userId, $rootId, $node)" in scanner
    assert "markAsSidecar" in scanner
    assert "deleteItemForLibraryFile" in scanner
    assert "return null;" in scanner


def test_file_index_service_can_mark_previously_indexed_files_as_sidecar():
    service = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    assert "public function markAsSidecar(string $userId, int $libraryFileId): void" in service
    assert "scan_status" in service
    assert "sidecar" in service
    assert "updated_at" in service


def test_item_service_can_remove_scanner_created_catalogue_item_for_sidecar_file():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "public function deleteItemForLibraryFile(string $userId, int $libraryFileId): void" in service
    assert "delete('library_items')" in service
    assert "library_file_id" in service
    assert "user_id" in service


def test_file_index_list_exposes_sidecar_status_but_catalogue_joins_only_active_items():
    file_index = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    item = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "scanStatus" in file_index
    assert "sidecar" in file_index
    assert "neq('f.scan_status'" in item
    assert "sidecar" in item


def test_docs_record_stale_sidecar_cleanup():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "clean up stale sidecar OPF catalogue rows" in readme
    assert "stale sidecar cleanup" in roadmap
