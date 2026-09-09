from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_filter_result_metadata_reset_route_uses_current_catalogue_filters():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "'name' => 'item#batchresetfilteredfields'" in routes
    assert "'url' => '/bulk/items/reset-filtered-fields'" in routes
    assert routes.index("/bulk/items/reset-filtered-fields") < routes.index("/items/{itemId}")
    assert "public function batchresetfilteredfields(): RedirectResponse" in controller
    assert "#[NoCSRFRequired]" in controller
    assert "catalogueFiltersFromRequest" in controller
    assert "itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in controller
    assert "bulkResetFieldsToScannerCandidates($user->getUID(), $itemIds)" in controller
    assert "public function bulkResetFieldsToScannerCandidates(string $userId, mixed $itemIds): array" in service


def test_vue_and_fallback_expose_metadata_reset_batch_action_separate_from_tagging():
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "batchMetadataResetUrl" in page
    assert "library.item.batchresetfilteredfields" in page

    for source in (app, fallback):
        assert "batchMetadataResetUrl" in source
        assert "library-batch-metadata-reset-form" in source
        assert "Reset current scanner-conflict results to scanner metadata" in source
        assert "scannerConflicts" in source
        assert "Reset filtered metadata" in source
        assert "name=\"scannerConflicts\" value=\"1\"" in source or "name = 'scannerConflicts'" in source

    assert "print('browser_batch_metadata_reset_form', dom.batchMetadataResetForm)" in smoke


def test_docs_and_version_track_filter_result_metadata_reset():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()

    assert "filter-result metadata reset" in guide.lower()
    assert "scanner-conflict results" in guide.lower()
    assert "batch metadata reset" in roadmap.lower()
    assert "<version>0.1.0-alpha.138</version>" in info
    assert '"version": "0.1.0-alpha.138"' in package
