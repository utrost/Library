from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_page_owns_nextcloud_comment_form():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "library-detail-comment-form" in template
    assert "name=\"commentMessage\"" in template
    assert "name=\"returnTo\"" in template
    assert "value=\"details\"" in template
    assert "$l->t('Add Nextcloud comment')" in template
    assert "$l->t('Add comment')" in template
    assert "linkToRoute('library.comment.add'" in controller


def test_comment_controller_can_redirect_comment_changes_back_to_detail():
    controller = (ROOT / "lib" / "Controller" / "CommentController.php").read_text()

    assert "getParam('returnTo', '')" in controller
    assert "returnTo === 'details'" in controller
    assert "linkToRoute('library.item_page.show'" in controller
    assert "linkToRoute('library.page.index')" in controller


def test_vue_catalogue_cards_are_browse_only_without_post_edit_forms():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "Details / edit metadata" not in vue
    assert "library-item-form" not in vue
    assert "library-comment-form" not in vue
    assert "item.commentUrl" not in vue
    assert "item.updateUrl" not in vue
    assert "name=\"commentMessage\"" not in vue
    assert "Save metadata" not in vue
    assert "Add Nextcloud comment" not in vue
    assert "Details" in vue


def test_browser_smoke_requires_zero_catalogue_post_forms():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "browser_catalogue_post_forms_zero" in smoke
    assert "dom.postForms === 0" in smoke
    assert "dom.requestTokenFields === 0" in smoke
