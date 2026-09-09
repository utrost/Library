from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_filter_result_tag_remove_route_uses_current_catalogue_filters():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "TagController.php").read_text()
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()

    assert "'name' => 'tag#batchremove'" in routes
    assert "'url' => '/bulk/tags/remove'" in routes
    assert routes.index("/bulk/tags/remove") < routes.index("/items/{itemId}/tags")
    assert "public function batchremove(): RedirectResponse" in controller
    assert "#[NoCSRFRequired]" in controller
    assert "catalogueFiltersFromRequest" in controller
    assert "itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in controller
    assert "removeTagFromItems(" in controller
    assert "$user->getUID()" in controller
    assert "$itemIds" in controller
    assert "batchTagRemoveResult" in controller
    assert "batchTagRemoveRequested" in controller
    assert "batchTagRemoveRemoved" in controller
    assert "public function removeTagFromItems(string $userId, array $itemIds, string $tagName): array" in service
    assert "removedItems" in service
    assert "notTaggedItems" in service


def test_catalogue_exposes_batch_tag_remove_form_separate_from_card_tag_editors():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "batchTagRemoveUrl" in page
    assert "library.tag.batchremove" in page

    for source in (app, fallback):
        assert "batchTagRemoveUrl" in source
        assert "library-batch-tag-remove-form" in source
        assert "Remove tag from current results" in source
        assert "nextcloudTagName" in source
        assert "/bulk/tags/remove" in source

    assert "print('browser_batch_tag_remove_form', dom.batchTagRemoveForm)" in smoke
    assert "dom.postForms === dom.catalogueStarForms + 5" in smoke


def test_docs_and_version_track_filter_result_batch_tag_remove():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()

    assert "remove a nextcloud tag from current filter results" in guide.lower()
    assert "batch tag removal" in roadmap.lower()
    assert "<version>0.1.0-alpha.119</version>" in info
    assert '"version": "0.1.0-alpha.119"' in package
