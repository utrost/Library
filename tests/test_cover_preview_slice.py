from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_item_cover_preview_endpoint():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "cover#show" in routes
    assert "'/items/{itemId}/cover'" in routes
    assert "'verb' => 'GET'" in routes


def test_cover_controller_uses_nextcloud_preview_api_and_owned_item_lookup():
    controller_path = ROOT / "lib" / "Controller" / "CoverController.php"
    assert controller_path.exists()
    controller = controller_path.read_text()
    assert "use OCP\\IPreview;" in controller
    assert "getPreview(" in controller
    assert "MODE_COVER" in controller
    assert "DataDownloadResponse" in controller
    assert "NoAdminRequired" in controller
    assert "NoCSRFRequired" in controller
    assert "findFileIdForItem" in controller
    assert "getUserFolder" in controller


def test_page_controller_passes_cover_base_url_to_template():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "itemCoverBaseUrl" in controller
    assert "library.cover.show" in controller


def test_template_prefers_real_cover_img_and_uses_cover_route_fallback():
    template = (ROOT / "templates" / "main.php").read_text()
    assert "$itemCoverUrl" in template
    assert "library-cover-image" in template
    assert "src=\"<?php p($itemCoverUrl); ?>\"" in template
    assert "class=\"library-cover-placeholder" not in template


def test_styles_define_real_cover_image_state():
    css = (ROOT / "css" / "style.css").read_text()
    assert ".library-cover-image" in css
    assert "object-fit: cover" in css


def test_docs_name_preview_backed_cover_slice():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "preview-backed covers" in roadmap
    assert "Phase 3.1" in roadmap
    readme = (ROOT / "README.md").read_text()
    assert "preview-backed covers" in readme
