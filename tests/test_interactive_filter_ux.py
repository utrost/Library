from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_catalogue_has_compact_interactive_quick_filters():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "library-quick-filter-bar" in app
    assert "Quick catalogue filters" in app
    assert "scheduleFilterSubmit" in app
    assert "submitFiltersNow" in app
    assert "@input=\"scheduleFilterSubmit\"" in app
    assert "@change=\"submitFiltersAjax\"" in app
    assert "name=\"q\"" in app
    assert "name=\"sort\"" in app
    assert "name=\"limit\"" in app
    assert "Clear all" in app
    assert "Apply filters" in app


def test_filter_css_preserves_catalogue_area_with_compact_responsive_controls():
    css = (ROOT / "css" / "style.css").read_text()

    assert ".library-quick-filter-bar" in css
    assert ".library-quick-search-row" in css
    assert ".library-quick-filter-options" in css
    assert "grid-template-columns: repeat(3, minmax(110px, auto)) auto auto" in css
    assert ".library-filter-panel[open]" in css
    assert "@media (max-width: 760px)" in css


def test_browser_smoke_tracks_interactive_filter_markers():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "browser_quick_filter_bar" in smoke
    assert "browser_quick_filter_auto_submit" in smoke
    assert "browser_quick_filter_controls" in smoke
