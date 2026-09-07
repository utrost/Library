from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_cards_use_touch_friendly_collapsed_metadata_details():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "library-cover-primary" in vue
    assert "library-cover-details" in vue
    assert "library-cover-details-summary" in vue
    assert "Show details and actions" in vue
    assert "library-cover-meta" in vue
    assert "library-cover-actions" in vue
    assert "library-cover-tags" in vue
    assert "class=\"library-cover-details\"" in vue
    assert "@toggle=\"setCoverDetailsOpen" in vue
    assert "Download source" in vue


def test_mobile_css_makes_catalogue_cards_cover_first_and_dense():
    css = (ROOT / "css" / "style.css").read_text()

    assert "@media (max-width: 520px)" in css
    assert "#library-app.library-app" in css
    assert "max-width: 100vw" in css
    assert "padding: 0 8px 80px" in css
    assert "grid-template-columns: repeat(2, minmax(0, 1fr))" in css
    assert ".library-cover-card" in css
    assert "padding: 6px" in css
    assert "gap: 6px" in css
    assert ".library-cover-image" in css
    assert "min-height: 0" in css
    assert ".library-cover-summary h3" in css
    assert "font-size: 14px" in css
    assert ".library-cover-details[open]" in css
    assert ".library-cover-actions" in css
    assert "font-size: 13px" in css


def test_live_smoke_checks_mobile_cover_first_source_markers():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "source_has_mobile_cover_first_cards" in smoke
    assert "library-cover-details" in smoke
    assert "Show details and actions" in smoke
    assert "grid-template-columns: repeat(2, minmax(0, 1fr))" in smoke
