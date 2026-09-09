from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_route_exposes_placeholder_diagnostic_headers():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    assert "placeholderResponse(string $label, string $reason" in controller
    assert "X-Library-Cover-Status" in controller
    assert "X-Library-Cover-Reason" in controller
    assert "preview-unavailable" in controller
    assert "cbz-cover-unavailable" in controller


def test_catalogue_has_show_in_files_action_separate_from_read():
    provider = (ROOT / "lib" / "Reader" / "DefaultNextcloudFileProvider.php").read_text()
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "public function getShowInFilesUrl(int $fileId, string $cachedPath = ''): string" in provider
    assert "filesUrl" in page
    assert "getShowInFilesUrl($fileId, (string)($item['cachedPath'] ?? ''))" in page
    assert "Show in Files" in vue
    assert "item.filesUrl" in vue


def test_catalogue_grid_supports_server_side_sort_modes():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "'sort' => trim((string)$this->request->getParam('sort', 'title'))" in page
    assert "applyCatalogueSort" in service
    for mode in ["title", "recent", "publicationDate", "format"]:
        assert mode in page or mode in service
        assert f'value="{mode}"' in vue
    assert "Sort" in vue


def test_scanner_marks_missing_files_after_root_scan_without_deleting_items():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    file_index = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    settings = (ROOT / "templates" / "settings-personal.php").read_text()
    assert "$seenLibraryFileIds" in scanner
    assert "markMissingExcept($userId, $rootId, $seenLibraryFileIds)" in scanner
    assert "public function markMissingExcept(string $userId, int $rootId, array $seenLibraryFileIds): int" in file_index
    assert "scan_status', $qb->createNamedParameter('missing')" in file_index
    assert "missing" in settings


def test_realistic_metadata_fixture_contract_documents_messy_inputs():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    opf = (ROOT / "lib" / "Metadata" / "OpfEpubMetadataExtractor.php").read_text()
    cbz = (ROOT / "lib" / "Metadata" / "CbzComicInfoMetadataExtractor.php").read_text()
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    tests = (ROOT / "tests" / "test_realistic_metadata_fixture_slice.py")
    assert tests.exists()
    assert "parseOpfMetadata" in metadata
    assert "parseOpfMetadata" in opf
    assert "parseComicInfoMetadata" in cbz
    assert "real-world-ish metadata fixture" in docs
