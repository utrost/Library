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
    assert "#[NoCSRFRequired]" in controller
    assert "catalogueFiltersFromRequest" in controller
    assert "itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in controller
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
    assert "'refresh' => $batchCoverRefreshRequested ? '1' : null" in page

    for source in (app, fallback):
        assert "batchCoverRefreshUrl" in source
        assert "library-batch-cover-refresh-form" in source
        assert "Refresh cover previews for current results" in source
        assert "Request fresh cover previews" in source

    assert "print('browser_batch_cover_refresh_form', dom.batchCoverRefreshForm)" in smoke


def test_docs_and_version_track_filter_result_cover_refresh():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()

    assert "filter-result cover refresh" in guide.lower()
    assert "request fresh cover previews" in guide.lower()
    assert "batch cover refresh" in roadmap.lower()
    assert "<version>0.1.0-alpha.132</version>" in info
    assert '"version": "0.1.0-alpha.132"' in package
