from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_catalogue_search_contract_includes_description_and_cached_path():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "$qb->expr()->like($qb->createFunction('LOWER(i.description)'), $like)" in service
    assert "$qb->expr()->like($qb->createFunction('LOWER(f.cached_path)'), $like)" in service


def test_page_controller_exposes_json_catalogue_endpoint_reusing_catalogue_state():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "['name' => 'page#catalogue', 'url' => '/catalogue', 'verb' => 'GET']" in routes
    assert "use OCP\\AppFramework\\Http\\JSONResponse;" in controller
    assert "public function catalogue(): JSONResponse" in controller
    assert "private function buildCatalogueState(string $userId): array" in controller
    assert "return new JSONResponse($this->buildCatalogueState($userId));" in controller


def test_vue_filters_fetch_catalogue_json_without_full_page_reload():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "const catalogueState = reactive" in app
    assert "catalogueEndpointUrl" in app
    assert "async function submitFiltersAjax" in app
    assert "history.replaceState" in app
    assert "fetch(catalogueEndpointUrl.value" in app
    assert "@submit.prevent=\"submitFiltersAjax\"" in app
    assert "@input=\"scheduleFilterSubmit\"" in app
    assert "@change=\"submitFiltersAjax\"" in app


def test_browser_smoke_proves_ajax_filter_without_navigation():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "browser_ajax_filter_fetch_calls" in smoke
    assert "browser_ajax_filter_no_navigation" in smoke
    assert "browser_ajax_filter_endpoint" in smoke
