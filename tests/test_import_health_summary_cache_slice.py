from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_import_health_summary_endpoint_uses_cached_summary_unless_refresh_requested():
    controller = (ROOT / "lib" / "Controller" / "HealthController.php").read_text()
    service = (ROOT / "lib" / "Service" / "LibraryHealthService.php").read_text()

    assert "getParam('refresh', '0')" in controller
    assert "cachedImportHealthSummary($userId" in controller
    assert "refreshImportHealthSummary" in service
    assert "cachedImportHealthSummary(string $userId, bool $refresh = false)" in service
    assert "import_health_summary_json" in service
    assert "import_health_summary_generated_at" in service
    assert "setUserValue($userId, 'library', 'import_health_summary_json'" in service


def test_import_health_summary_cache_has_safe_missing_and_cached_payload_contracts():
    service = (ROOT / "lib" / "Service" / "LibraryHealthService.php").read_text()

    assert "cacheStatus' => 'missing'" in service
    assert "['cacheStatus'] = 'cached'" in service
    assert "['cacheStatus'] = 'refreshed'" in service
    assert "generatedAt' => 0" in service
    assert "No cached metadata overview exists yet" in service
    assert "json_decode($cachedJson, true" in service


def test_actions_metadata_overview_has_manual_refresh_affordance_and_cache_copy():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "refreshImportHealthSummary" in app
    assert "refresh=1" in app
    assert "Refresh metadata overview" in app
    assert "Last generated" in app
    assert "No cached metadata overview exists yet" in app
    assert "Cached metadata overview loads quickly" in app
    assert "importHealthState.refreshing" in app


def test_live_smoke_covers_cached_and_refreshed_import_health_paths():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "import_summary_cached_http" in smoke
    assert "import_summary_cached_elapsed_ms" in smoke
    assert "import_summary_refresh_http" in smoke
    assert "import_summary_refresh_cache_status" in smoke
    assert "import_summary_after_refresh_cache_status" in smoke
