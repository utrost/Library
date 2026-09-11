from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_detail_page_contains_publication_metadata_edit_form():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-detail-edit-form" in template
    assert "updateUrl" in template
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    assert "linkToRoute('library.item.update'" in controller
    assert "name=\"requesttoken\"" in template
    assert "name=\"returnTo\"" in template
    assert "value=\"details\"" in template
    for field in [
        "publicationType",
        "title",
        "subtitle",
        "creators",
        "publication",
        "publicationDate",
        "publisher",
    ]:
        assert f'name="{field}"' in template
    assert 'name="language[]"' in template
    assert "$l->t('Publication metadata')" in template
    assert "$l->t('Edit publication metadata')" not in template
    assert "$l->t('Save metadata')" in template


def test_item_controller_can_redirect_back_to_detail_after_save():
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "getParam('returnTo', '')" in controller
    assert "returnTo === 'details'" in controller
    assert "linkToRoute('library.item_page.show'" in controller
    assert "linkToRoute('library.page.index')" in controller


def test_detail_smoke_asserts_edit_form_and_user_edit_provenance():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_edit_form" in smoke
    assert "detail_has_requesttoken" in smoke
    assert "detail_has_return_to_details" in smoke
    assert "detail_has_user_edited_marker" in smoke
    assert "data-library-field=\"userEdited\"" in smoke
