from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_controller_exposes_unassigned_tag_suggestions_for_picker():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "unassignedTagSuggestions" in controller
    assert "array_column($currentTags" in controller
    assert "array_diff($suggestions" in controller


def test_detail_template_renders_one_click_suggested_tag_buttons():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-tag-suggestion-picker" in template
    assert "Suggested Nextcloud tags" in template
    assert "foreach ($tagSuggestions as $tagName)" in template
    assert "name=\"nextcloudTagName\"" in template
    assert "value=\"<?php p((string)$tagName); ?>\"" in template
    assert "Add suggested tag" in template
    assert "No assignable tag suggestions" in template


def test_catalogue_cards_stay_free_of_tag_picker_forms():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "library-tag-suggestion-picker" not in vue
    assert "Add suggested tag" not in vue
    assert "library-batch-tag-form" in vue


def test_smoke_vue_page_checks_detail_tag_suggestion_picker():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_tag_suggestion_picker" in smoke
    assert "library-tag-suggestion-picker" in smoke


def test_docs_mark_richer_picker_landed_and_bulk_tagging_future():
    guide = (ROOT / "docs" / "user-guide.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "one-click suggested tag buttons" in guide
    assert "one-click suggested tag buttons" in roadmap
    assert "bulk tagging" in guide
