from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def method_block(source: str, name: str, next_name: str | None = None) -> str:
    block = source.split(f"public function {name}", 1)[1]
    if next_name:
        block = block.split(f"public function {next_name}", 1)[0]
    return block


def attributes_before(source: str, name: str) -> str:
    return source.split(f"public function {name}", 1)[0].rsplit("#[NoAdminRequired]", 1)[1]


def test_open_get_route_is_side_effect_free_and_recording_is_csrf_protected_post():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "['name' => 'item#open', 'url' => '/items/{itemId}/open', 'verb' => 'GET']" in routes
    assert "['name' => 'item#recordOpen', 'url' => '/items/{itemId}/open', 'verb' => 'POST']" in routes

    open_method = method_block(controller, "open", "recordOpen")
    open_attributes = attributes_before(controller, "open")
    assert "#[NoCSRFRequired]" in open_attributes
    assert "findItem($user->getUID(), $itemId)" in open_method
    assert "markOpened" not in open_method

    record_method = method_block(controller, "recordOpen", "update")
    record_attributes = attributes_before(controller, "recordOpen")
    assert "#[NoCSRFRequired]" not in record_attributes
    assert "markOpened($user->getUID(), $itemId)" in record_method
    assert "JSONResponse" in record_method


def test_vue_records_open_with_request_token_before_navigation_without_breaking_href():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "recordOpenUrl" in app
    assert "function recordOpenBeforeNavigate" in app
    assert "requesttoken: requestToken.value" in app
    assert "navigator.sendBeacon" in app
    assert '@click="recordOpenBeforeNavigate(item, $event)"' in app
    assert ':href="item.openUrl"' in app


def test_expensive_diagnostics_are_post_only_and_bounded_while_cached_reads_remain_get():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "HealthController.php").read_text()
    service = (ROOT / "lib" / "Service" / "LibraryHealthService.php").read_text()

    assert "['name' => 'health#importSummary', 'url' => '/health/import-summary', 'verb' => 'GET']" in routes
    assert "['name' => 'health#refreshImportSummary', 'url' => '/health/import-summary', 'verb' => 'POST']" in routes
    assert "['name' => 'health#coverProbe', 'url' => '/health/covers/probe', 'verb' => 'POST']" in routes
    assert "'health#coverProbe', 'url' => '/health/covers/probe', 'verb' => 'GET'" not in routes

    import_summary = method_block(controller, "importSummary", "refreshImportSummary")
    import_attrs = attributes_before(controller, "importSummary")
    assert "#[NoCSRFRequired]" in import_attrs
    assert "cachedImportHealthSummary($userId, false)" in import_summary
    assert "getParam('refresh'" not in import_summary

    refresh_summary = method_block(controller, "refreshImportSummary", "metadataErrors")
    refresh_attrs = attributes_before(controller, "refreshImportSummary")
    assert "#[NoCSRFRequired]" not in refresh_attrs
    assert "cachedImportHealthSummary($userId, true)" in refresh_summary

    cover_probe = method_block(controller, "coverProbe")
    cover_attrs = attributes_before(controller, "coverProbe")
    assert "#[NoCSRFRequired]" not in cover_attrs
    assert "min(30, max(1," in cover_probe
    assert "coverProbeReport(string $userId, int $limit = 30)" in service
