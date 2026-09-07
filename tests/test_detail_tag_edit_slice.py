from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_page_owns_nextcloud_tag_editor():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "library-detail-tag-editor" in template
    assert "nextcloudTagEditor" in template
    assert "name=\"nextcloudTagName\"" in template
    assert "name=\"returnTo\"" in template
    assert "value=\"details\"" in template
    assert "Remove tag" in template
    assert "tag['removeUrl']" in template
    assert "linkToRoute('library.tag.assign'" in controller
    assert "linkToRoute('library.tag.remove'" in controller


def test_tag_controller_can_redirect_tag_changes_back_to_detail():
    controller = (ROOT / "lib" / "Controller" / "TagController.php").read_text()

    assert "getParam('returnTo', '')" in controller
    assert "returnTo === 'details'" in controller
    assert "linkToRoute('library.item_page.show'" in controller
    assert "linkToRoute('library.page.index')" in controller


def test_catalogue_cards_no_longer_render_inline_tag_editor():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "nextcloudTagEditor" not in vue
    assert "library-tag-form" not in vue
    assert "library-batch-tag-form" in vue
    assert "library-batch-tag-remove-form" in vue
    assert "removeTagUrl(item, tag)" not in vue
    assert "library-detail-tag-editor" not in vue


def test_detail_smokes_assert_tag_editor_moved_to_details():
    http_smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    browser_smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "detail_has_tag_editor" in http_smoke
    assert "detail_has_tag_return_to_details" in http_smoke
    assert "browser_catalogue_tag_editor=false" in browser_smoke or "catalogueTagEditor" in browser_smoke
