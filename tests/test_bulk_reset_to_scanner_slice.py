from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_bulk_reset_route_controller_and_settings_form_are_available():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "'name' => 'item#bulkresetfields'" in routes
    assert "'/bulk/items/reset-fields'" in routes
    assert routes.index("'name' => 'item#bulkresetfields'") < routes.index("'/items/{itemId}/reset-fields'")
    assert "public function bulkresetfields(): RedirectResponse" in controller
    assert "getParam('itemIds', '')" in controller
    assert "bulkResetFieldsToScannerCandidates($user->getUID()," in controller
    assert "bulkResetFieldsUrl" in settings
    assert "linkToRoute('library.item.bulkresetfields')" in settings
    assert "library-bulk-reset-fields-form" in template
    assert 'name="itemIds"' in template
    assert "Reset selected items to scanner" in template
    assert "Paste item IDs from the scanner-conflict review filter" in template


def test_item_service_bulk_reset_normalizes_ids_and_reports_counts():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function bulkResetFieldsToScannerCandidates(string $userId, mixed $itemIds): array" in service
    assert "private function normalizeBulkItemIds(mixed $itemIds): array" in service
    assert "preg_split('/[^0-9]+/'" in service
    assert "array_unique" in service
    assert "array_slice" in service
    assert "resetAllFieldsToScannerCandidates($userId, $itemId)" in service
    assert "'requestedItems'" in service
    assert "'resetItems'" in service
    assert "'skippedItems'" in service


def test_bulk_reset_smoke_and_docs_are_landed():
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-bulk-reset-fields.mjs").read_text()
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert '"smoke:bulk-reset"' in package
    assert "bulk_reset_fields_smoke_ok=true" in smoke
    assert "bulk reset selected scanner-conflict items" in readme
    assert "Bulk reset selected items to scanner" in guide
    assert "first selected-item bulk reset process" in roadmap
