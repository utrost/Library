from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_import_health_admin_tools_panel_is_compact_by_default():
    app = (ROOT / "src" / "App.vue").read_text()

    actions_start = app.index("<details class=\"library-workspace-panel library-workspace-panel--admin\" data-workspace-panel=\"admin\" @toggle=\"loadImportHealthSummary\">")
    actions_end = app.index("</details>", actions_start)
    actions_menu = app[actions_start:actions_end]

    assert "library-actions-health-overview" in actions_menu
    assert "Metadata overview" in actions_menu
    assert "Review metadata errors" in actions_menu
    assert "Full review" in actions_menu
    assert "Export TSV" in actions_menu
    assert "Probe covers" in actions_menu

    main_catalogue = app[actions_end:]
    assert "library-import-health-panel" not in main_catalogue
    assert "Real-file findings" not in main_catalogue


def test_import_health_actions_css_keeps_menu_readable():
    app = (ROOT / "src" / "App.vue").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert ".library-actions-health-overview" in app
    assert ".library-actions-health-grid" in app
    assert "max-width: min(92vw, 760px)" in app
    assert "browser_import_health_panel_visible" in smoke
    assert "browser_actions_menu_has_metadata_overview" in smoke
    assert "dom.importHealthPanelVisible === false" in smoke
