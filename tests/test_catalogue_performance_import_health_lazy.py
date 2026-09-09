from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_catalogue_initial_state_does_not_compute_expensive_import_health_summary():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    build_start = controller.index("private function buildCatalogueState")
    build_body = controller[build_start:controller.index("    /**", build_start)]

    assert "importHealthSummary(" not in build_body
    assert "importHealthSummaryUrl" in build_body
    assert "health#importSummary" in (ROOT / "appinfo" / "routes.php").read_text()


def test_import_health_summary_has_dedicated_lazy_endpoint():
    controller = (ROOT / "lib" / "Controller" / "HealthController.php").read_text()

    assert "public function importSummary(): JSONResponse" in controller
    assert "importHealthSummary($userId)" in controller
    assert "Cache-Control" in controller


def test_vue_loads_import_health_only_when_actions_menu_is_opened():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "importHealthSummaryUrl" in app
    assert "loadImportHealthSummary" in app
    assert "@toggle=\"loadImportHealthSummary\"" in app
    assert "fetch(importHealthSummaryUrl.value" in app
    assert "hasImportHealthFindings" in app
