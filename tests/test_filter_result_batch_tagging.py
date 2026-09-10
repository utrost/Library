from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_batch_tag_route_and_controller_use_current_catalogue_filters():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "TagController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "'name' => 'tag#batchassign'" in routes
    assert "'url' => '/bulk/tags'" in routes
    assert routes.index("/bulk/tags") < routes.index("/items/{itemId}/tags")
    assert "public function batchassign(): RedirectResponse" in controller
    attributes = controller.split("public function batchassign", 1)[0].split("public function assign", 1)[-1]
    assert "NoCSRFRequired" not in attributes
    assert "catalogueFiltersFromRequest" in controller
    assert "itemIdsForCatalogueFilters" in service
    assert "queryCatalogue($userId, $filters, ['page' => $page, 'limit' => 500])" in service
    assert "private const BULK_ITEM_LIMIT = 5000;" in service
    assert "min(self::BULK_ITEM_LIMIT, $limit)" in service


def test_batch_tag_service_reports_added_duplicate_skipped_counts():
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()

    assert "public function assignTagToItems(string $userId, array $itemIds, string $tagName): array" in service
    assert "'requestedItems'" in service
    assert "'addedItems'" in service
    assert "'alreadyTaggedItems'" in service
    assert "'skippedItems'" in service
    assert "assignTagToItem($userId, $itemId, $tagName)" in service


def test_vue_and_fallback_expose_batch_actions_for_current_filter_results():
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    for source in (app, fallback):
        assert "library-batch-actions" in source
        assert "Batch actions for current results" in source
        assert "Apply Nextcloud tag to current results" in source or "Add tag" in source
        assert "batchTagUrl" in source
        assert "name=\"nextcloudTagName\"" in source or "name = 'nextcloudTagName'" in source
        assert "name=\"q\"" in source or "hidden.name = key" in source
        assert "Current filter result" in source

    assert "print('browser_batch_actions', dom.batchActions)" in smoke
    assert "print('browser_batch_tag_form', dom.batchTagForm)" in smoke


def test_docs_and_version_track_filter_result_batch_tagging():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()

    assert "filter-result batch tagging" in guide.lower()
    assert "current filter results" in roadmap.lower()
    assert "<version>0.1.0-alpha.150</version>" in info
    assert '"version": "0.1.0-alpha.150"' in package
