from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_filter_result_cover_refresh_route_counts_current_catalogue_filters():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'name' => 'cover#batchrefresh'" in routes
    assert "'url' => '/bulk/covers/refresh'" in routes
    assert routes.index("/bulk/covers/refresh") < routes.index("/items/{itemId}/cover")
    assert "public function batchrefresh(): RedirectResponse" in controller
    attributes = controller.split("public function batchrefresh", 1)[0].split("public function revert", 1)[-1]
    assert "NoCSRFRequired" not in attributes
    assert "catalogueFiltersFromRequest" in controller
    assert "SelectedItemIds::parse" in controller
    body = controller.split("public function batchrefresh", 1)[1].split("private function", 1)[0]
    assert "itemIdsForCatalogueFilters" not in body
    assert "coverRefreshItemIds" in body
    assert "coverRefreshItemIds'] = $selectedItemIds" in body
    assert "if ($requested > 0)" in body
    assert "batchCoverRefreshResult" in controller
    assert "batchCoverRefreshRequested" in controller
    assert "batchCoverRefreshUrl" in page
    assert "library.cover.batchrefresh" in page


def test_catalogue_refresh_state_threads_refresh_into_cover_urls():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "batchCoverRefreshRequested" in page
    assert "coverRefresh" in page
    assert "$this->request->getParam('coverRefreshItemIds', null)" in page
    assert "$this->fileIndexService->coverRefreshItemIds" in page
    assert "array_fill_keys($coverRefreshItemIds, true)" in page
    assert "'refresh' => isset($coverRefreshItemIdSet[(int)$itemId]) ? '1' : null" in page

    for source in (app,):
        assert "batchCoverRefreshUrl" in source
        assert "library-batch-cover-refresh-form" in source
        assert "Fresh covers" in source
        assert "Batch actions for selected publications" in source
        assert "Request fresh cover previews" in source or "Fresh covers" in source

    assert "print('browser_batch_cover_refresh_form', dom.batchCoverRefreshForm)" in smoke


def test_docs_and_version_track_filter_result_cover_refresh():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()

    assert "fresh covers" in guide.lower() or "refresh cover preview" in guide.lower()
    assert "refresh cover preview" in guide.lower()
    assert "batch cover refresh" in roadmap.lower()
    assert "<version>0.1.0-alpha.170</version>" in info
    assert '"version": "0.1.0-alpha.170"' in package
