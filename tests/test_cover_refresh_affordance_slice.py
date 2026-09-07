from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_controller_exposes_refresh_cover_url_with_refresh_query():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "coverRefreshUrl" in controller
    assert "'refresh' => '1'" in controller
    assert "library.cover.show" in controller
    assert "coverRefreshUrl" in template
    assert "Refresh cover preview" in template
    assert "library-cover-refresh-action" in template


def test_cover_route_marks_refresh_requests_no_store_with_diagnostic_header():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()

    assert "isRefreshRequest" in controller
    assert "getParam('refresh', '0')" in controller
    assert "X-Library-Cover-Refresh" in controller
    assert "private, no-store" in controller
    assert "refresh-requested" in controller
    assert "coverResponse(" in controller


def test_live_smoke_checks_refresh_cover_url_and_response_headers():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_cover_refresh_action" in smoke
    assert "cover_refresh_http" in smoke
    assert "cover_refresh_cache_control" in smoke
    assert "cover_refresh_header" in smoke
    assert "refresh=1" in smoke


def test_docs_mark_cover_refresh_affordance_landed_but_cache_override_future():
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "Refresh cover preview" in readme
    assert "Refresh cover preview" in guide
    assert "cover refresh affordance" in roadmap
    assert "app-owned cover cache" in roadmap
    assert "manual cover override" in roadmap
