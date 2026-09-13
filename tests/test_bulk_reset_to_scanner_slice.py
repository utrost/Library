from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_bulk_reset_route_controller_and_settings_form_are_available():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "'name' => 'item#bulkresetfields'" not in routes
    assert "'/bulk/items/reset-fields'" not in routes
    assert "public function bulkresetfields(): RedirectResponse" not in controller
    assert "bulkResetFieldsUrl" not in settings
    assert "library-bulk-reset-fields-form" not in template
    assert 'name="itemIds"' not in template
    assert 'v-if="selectedItemIds.length > 0"' in (ROOT / "src" / "App.vue").read_text()


def test_item_service_bulk_reset_normalizes_ids_and_reports_counts():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    selected = (ROOT / "lib" / "Service" / "SelectedItemIds.php").read_text()

    assert "public function bulkResetFieldsToScannerCandidates(string $userId, mixed $itemIds): array" in service
    assert "private function normalizeBulkItemIds(mixed $itemIds): array" in service
    assert "preg_split('/[^0-9]+/'" not in selected
    assert "is_array($value)" in selected
    assert "Duplicate selected item ID" in selected
    assert "resetAllFieldsToScannerCandidates($userId, $itemId)" in service
    assert "'requestedItems'" in service
    assert "'resetItems'" in service
    assert "'skippedItems'" in service


def test_bulk_reset_smoke_and_docs_are_landed():
    package = (ROOT / "package.json").read_text()
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert '"smoke:bulk-reset"' not in package
    assert "bulk reset selected scanner-conflict items" not in readme
    assert "pasted or free-form item-ID text is not accepted" in guide
    assert "explicit selected-item arrays" in roadmap
