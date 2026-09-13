from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_import_health_admin_tools_panel_is_compact_by_default():
    app = (ROOT / "src" / "App.vue").read_text()
    settings = (ROOT / "templates" / "settings-personal.php").read_text()
    assert 'data-workspace-panel="admin"' not in app
    assert "Metadata overview" not in app
    assert "library-import-health-panel" not in app
    assert "Diagnostics" in settings
    assert "Download diagnostics" in settings


def test_import_health_actions_css_keeps_menu_readable():
    app = (ROOT / "src" / "App.vue").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert ".library-actions-health-overview" in app
    assert ".library-actions-health-grid" in app
    assert "max-width: none" in app
    assert "grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr))" in app
    assert "browser_import_health_panel_visible" in smoke
    assert "browser_actions_menu_has_metadata_overview" in smoke
    assert "dom.importHealthPanelVisible === false" in smoke
