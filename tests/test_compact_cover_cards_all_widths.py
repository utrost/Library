from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_cards_use_compact_details_by_default_for_mobile_and_desktop():
    app = (ROOT / "src" / "App.vue").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "class=\"library-cover-details\"" in app
    assert "@toggle=\"setCoverDetailsOpen" in app
    assert "Show details and actions" in app
    assert "class=\"library-cover-actions\"" in app
    assert "No Nextcloud tags" in app

    default_css = css.split("@media (max-width: 520px)", 1)[0]
    assert ".library-cover-card" in default_css
    assert "grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))" in default_css
    assert "gap: 8px" in default_css
    assert "padding: 8px" in default_css
    assert "min-height: 0" in default_css
    assert ".library-cover-meta" in default_css
    assert "font-size: 13px" in default_css


def test_catalogue_cards_no_longer_show_repeated_secondary_metadata_before_details():
    app = (ROOT / "src" / "App.vue").read_text()
    card = app.split('<article v-for="item in items"', 1)[1].split('</article>', 1)[0]
    before_details = card.split('class="library-cover-details"', 1)[0]

    assert "item.title" in before_details
    assert "item.openUrl" in before_details
    assert "item.publicationType" not in before_details
    assert "item.shelf" not in before_details
    assert "tagsFor(item)" not in before_details
    assert "Download source" not in before_details


def test_cache_busting_version_bumped_for_compact_card_fix():
    info = (ROOT / "appinfo" / "info.xml").read_text()
    package = (ROOT / "package.json").read_text()
    lock = (ROOT / "package-lock.json").read_text()

    assert "<version>0.1.0-alpha.96</version>" in info
    assert '"version": "0.1.0-alpha.96"' in package
    assert '"version": "0.1.0-alpha.96"' in lock


def test_smoke_requires_compact_card_default_and_version_marker():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "source_has_compact_cover_cards_all_widths" in smoke
    assert "app_version=0.1.0-alpha.96" in smoke
    assert "served_css_has_compact_cover_defaults" in smoke
