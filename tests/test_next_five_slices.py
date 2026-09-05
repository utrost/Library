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
    template = (ROOT / "templates" / "main.php").read_text()
    assert "public function getShowInFilesUrl(int $fileId): string" in provider
    assert "itemFilesBaseUrl" in page
    assert "Show in Files" in template
    assert "$itemFilesUrl" in template


def test_catalogue_grid_supports_server_side_sort_modes():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    template = (ROOT / "templates" / "main.php").read_text()
    assert "'sort' => trim((string)$this->request->getParam('sort', 'title'))" in page
    assert "sortItemsForPresentation" in page
    for mode in ["title", "recent", "publicationDate", "format"]:
        assert mode in page
        assert f'value="{mode}"' in template
    assert "Sort" in template


def test_scanner_marks_missing_files_after_root_scan_without_deleting_items():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    file_index = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    template = (ROOT / "templates" / "main.php").read_text()
    assert "$seenLibraryFileIds" in scanner
    assert "markMissingExcept($userId, $rootId, $seenLibraryFileIds)" in scanner
    assert "public function markMissingExcept(string $userId, int $rootId, array $seenLibraryFileIds): void" in file_index
    assert "scan_status', $qb->createNamedParameter('missing')" in file_index
    assert "missing" in template


def test_realistic_metadata_fixture_contract_documents_messy_inputs():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    tests = (ROOT / "tests" / "test_realistic_metadata_fixture_slice.py")
    assert tests.exists()
    assert "parseOpfMetadata" in metadata
    assert "parseComicInfoMetadata" in metadata
    assert "real-world-ish metadata fixture" in docs
