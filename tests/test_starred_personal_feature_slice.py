from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_starred_metadata_has_schema_route_and_service_boundary():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "starred" in migrations
    assert "item#star" in routes
    assert "/items/{itemId}/star" in routes
    assert "public function setStarred(string $userId, int $itemId, bool $starred): bool" in service
    assert "'starred' => (bool)$row['starred']" in service
    assert "public function star(int $itemId): RedirectResponse" in controller
    assert "setStarred($user->getUID(), $itemId" in controller


def test_catalogue_supports_starred_filter_and_active_chip():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert "'starred' => trim((string)$this->request->getParam('starred', ''))" in page
    assert "'starred'" in page.split("paginationUrl", 1)[1]
    assert "if ($starred === '1')" in service
    assert "i.starred" in service
    assert "Starred" in app
    assert "name=\"starred\"" in app
    assert "item.starred" in app


def test_starred_state_is_exported_and_imported_without_touching_scanner_provenance():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "starred" in service.split("public function exportCorrectedMetadata", 1)[1].split("public function previewCorrectedMetadataImport", 1)[0]
    assert "starred" in service.split("private function changedImportFields", 1)[1].split("private function emptyImportPreview", 1)[0]
    apply_method = service.split("public function applyCorrectedMetadataImport", 1)[1].split("/**", 1)[0]
    assert "setStarred" in apply_method
    set_starred_method = service.split("public function setStarred", 1)[1].split("public function", 1)[0]
    assert "metadata_source" not in set_starred_method
    assert "field_sources" not in set_starred_method
    assert "field_values" not in set_starred_method
    assert "user_edited" not in set_starred_method


def test_detail_page_has_star_toggle_separate_from_metadata_form():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-star-form" in template
    assert "name=\"starred\"" in template
    assert "Star this publication" in template
    assert "Unstar this publication" in template
    assert "starUrl" in template
