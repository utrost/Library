from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_last_opened_has_schema_route_and_service_boundary():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "last_opened_at" in migrations
    assert "item#open" in routes
    assert "/items/{itemId}/open" in routes
    assert "public function markOpened(string $userId, int $itemId): ?array" in service
    assert "public function open(int $itemId): RedirectResponse" in controller
    open_method = controller.split("public function open", 1)[1].split("public function update", 1)[0]
    open_attributes = controller.split("public function open", 1)[0].rsplit("#[NoAdminRequired]", 1)[1]
    assert "#[NoCSRFRequired]" in open_attributes
    assert "markOpened" in open_method
    assert "getAbsoluteURL('/f/' . (int)$item['fileId'])" in open_method


def test_read_links_route_through_library_but_files_and_download_do_not_mark_opened():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    detail_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    detail_template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library.item.open" in page
    assert "library.item.open" in detail_controller
    assert "item.openUrl" in vue
    assert "$item['openUrl']" in detail_template
    assert "getShowInFilesUrl" in page
    assert "getDownloadUrl" in page
    assert "markOpened" not in page
    assert "markOpened" not in detail_controller


def test_catalogue_supports_recently_opened_sort_and_filter_preservation():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-last-opened.mjs").read_text()

    assert "lastOpened" in page
    pagination_method = page.split("private function paginationUrl", 1)[1]
    for param in ["lastOpened", "starred", "needsMetadata", "coverReview", "noCreator", "noPublication", "weakMetadata", "unreviewedImports", "sort"]:
        assert param in pagination_method or param in page
    assert "lastOpened" in service
    assert "i.last_opened_at" in service
    assert "Recently opened" in vue
    assert "lastOpenedAt" in vue
    assert '"smoke:last-opened"' in package
    assert "last_opened_smoke_ok=true" in smoke
    assert "last_opened_files_unchanged" in smoke
    assert "last_opened_download_unchanged" in smoke


def test_last_opened_is_exported_and_imported_without_touching_scanner_provenance():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "lastOpenedAt" in service.split("public function exportCorrectedMetadata", 1)[1].split("public function previewCorrectedMetadataImport", 1)[0]
    assert "lastOpenedAt" in service.split("private function changedImportFields", 1)[1].split("private function emptyImportPreview", 1)[0]
    apply_method = service.split("public function applyCorrectedMetadataImport", 1)[1].split("/**", 1)[0]
    assert "setLastOpenedAtForImport" in apply_method
    mark_opened_method = service.split("public function markOpened", 1)[1].split("public function", 1)[0]
    assert "metadata_source" not in mark_opened_method
    assert "field_sources" not in mark_opened_method
    assert "field_values" not in mark_opened_method
    assert "user_edited" not in mark_opened_method
