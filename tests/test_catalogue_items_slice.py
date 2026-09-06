from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_migration_adds_publication_items_with_metadata_precedence_fields():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    assert "library_items" in migrations
    assert "library_file_id" in migrations
    assert "publication_type" in migrations
    assert "title" in migrations
    assert "metadata_source" in migrations
    assert "user_edited" in migrations
    assert "library_items_file_unique" in migrations


def test_item_service_creates_items_for_indexed_files_and_preserves_user_edits():
    service_path = ROOT / "lib" / "Service" / "ItemService.php"
    assert service_path.exists()
    service = service_path.read_text()
    assert "namespace OCA\\Library\\Service" in service
    assert "final class ItemService" in service
    assert "public function ensureItemForFile(string $userId, array $file, array $metadata = []): void" in service
    assert "public function updateItem(string $userId, int $itemId, array $metadata): void" in service
    assert "public function listItems(string $userId): array" in service
    assert "user_edited" in service
    assert "metadata_source" in service
    assert "filename" in service
    assert "if ((bool)$existing['user_edited'])" in service
    assert "publication_type" in service


def test_filename_fallback_title_cleans_real_scale_staging_noise():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "cleanFilenameFallbackTitle" in service
    assert "Real-00001-Durst_M707_Werbung" in service
    assert "Durst M707 Werbung" in service
    assert "stripArchiveSourceSuffix" in service
    assert "preg_replace('/\\s+ocr$/iu'" in service


def test_scanner_ensures_catalogue_items_after_file_index_upsert():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "ItemService $itemService" in scanner
    assert "ensureItemForFile($userId, $indexedFile, $metadata)" in scanner
    assert "upsertFile" in scanner

    file_index = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    assert "public function upsertFile(string $userId, int $rootId, array $file): array" in file_index
    assert "findByFileId" in file_index


def test_item_edit_route_and_controller_are_wired():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "item#update" in routes
    assert "/items/{itemId}" in routes

    controller_path = ROOT / "lib" / "Controller" / "ItemController.php"
    assert controller_path.exists()
    controller = controller_path.read_text()
    assert "final class ItemController" in controller
    assert "ItemService $itemService" in controller
    assert "public function update(int $itemId): RedirectResponse" in controller
    assert "publicationType" in controller


def test_catalogue_shows_items_and_detail_page_owns_edit_form():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "ItemService $itemService" in page
    assert "queryCatalogue($userId, $activeFilters, $pagination)" in page
    assert "detailsUrl" in page

    vue = (ROOT / "src" / "App.vue").read_text()
    assert "Publication catalogue" in vue
    assert "publicationType" in vue
    assert "Details" in vue
    assert "metadataSource" not in vue
    assert "userEdited" not in vue
    assert "Save metadata" not in vue

    detail = (ROOT / "templates" / "item-detail.php").read_text()
    assert "metadataSource" in detail
    assert "userEdited" in detail
    assert "name=\"title\"" in detail
    assert "name=\"publicationType\"" in detail
    assert "Save metadata" in detail
