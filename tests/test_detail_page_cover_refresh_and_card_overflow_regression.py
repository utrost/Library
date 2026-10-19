from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_refresh_cover_preview_reloads_detail_page_not_raw_cover_download():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    editor = (ROOT / "src/components/FullDetails.vue").read_text()
    assert "BookDetailsUrl::FEEDBACK" in controller
    assert "coverRefresh" in (ROOT / "lib/Presentation/BookDetailsUrl.php").read_text()
    assert "coverRefreshRequested.value = query.get('coverRefresh') === '1'" in editor
    assert "applyRedirectFeedback()" in editor


def test_compact_catalogue_card_text_and_open_details_stay_inside_card():
    css = (ROOT / "css" / "style.css").read_text()
    vue_css = (ROOT / "css" / "library-vue.css").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert "library-cover-card--open" in app
    assert "selectSidebarItem" in app
    assert "Advanced details" in app
    assert "openCoverDetails" in app

    assert ".library-cover-details[open]" in css
    for stylesheet in (css, vue_css):
        assert ".library-cover-card" in stylesheet
        assert "overflow-wrap: anywhere" in stylesheet or "overflow-wrap:anywhere" in stylesheet
        assert "position: relative" in stylesheet or "position:relative" in stylesheet
        assert "z-index: 2" in stylesheet or "z-index:2" in stylesheet
        assert ".library-cover-card--open" in stylesheet
        assert "grid-column: span 2" in stylesheet or "grid-column:span 2" in stylesheet
