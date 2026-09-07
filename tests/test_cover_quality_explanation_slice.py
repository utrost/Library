from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_detail_controller_prepares_user_friendly_cover_quality_explanation():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "coverQualityExplanation" in controller
    assert "coverQualityExplanation(" in controller
    assert "EPUB package cover" in controller
    assert "CBZ first image" in controller
    assert "Nextcloud preview" in controller
    assert "stable placeholder" in controller


def test_item_detail_template_renders_cover_quality_explanation_near_refresh_action():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-cover-quality-explanation" in template
    assert "How Library chose this cover" in template
    assert "If you see a placeholder" in template
    assert "No app-owned cover cache or manual cover override exists yet" in template
    assert "coverQualityExplanation" in template
    assert "title=\"<?php p((string)($item['coverQualityExplanation']" in template
    assert "Refresh cover preview" in template


def test_live_smoke_checks_detail_cover_quality_explanation():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_cover_refresh_tooltip" in smoke
    assert "detail_has_cover_quality_explanation=${detail.text.includes('library-cover-quality-explanation')}" in smoke
    assert "!detail.text.includes('library-cover-quality-explanation')" in smoke


def test_docs_mark_cover_explanation_landed_and_cache_override_future():
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "cover-quality explanation" in readme
    assert "visible cover-quality explanation" in guide
    assert "visible cover-source explanation" in roadmap
    assert "app-owned cover cache" in roadmap
    assert "manual cover override" in roadmap
    assert "preview failures are diagnostic, not user-friendly" not in guide
