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


def test_item_detail_template_keeps_cover_quality_explanation_as_contextual_refresh_help():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "coverQualityExplanation" in template
    assert "title=\"<?php p((string)($item['coverQualityExplanation']" in template
    assert "aria-label=\"<?php p($l->t('Refresh cover preview. How Library chose this cover: %s'" in template
    assert "Refresh cover preview" in template
    assert "library-cover-quality-explanation" not in template
    assert "<aside" not in template.split('class=\"library-detail-hero\"', 1)[1].split('</article>', 1)[0]


def test_live_smoke_checks_detail_cover_quality_help_without_visible_body_panel():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_cover_refresh_tooltip" in smoke
    assert "detail_has_visible_cover_quality_explanation=${detail.text.includes('library-cover-quality-explanation')}" in smoke
    pre_failure_contract = smoke.split("fail('catalogue_initial_state_invalid')", 1)[0]
    assert "detail.text.includes('library-cover-quality-explanation')" in pre_failure_contract
    assert "|| !detail.text.includes('library-cover-quality-explanation')" not in smoke


def test_docs_mark_cover_explanation_landed_and_cache_override_future():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "cover-quality explanation" in readme
    assert "cover-quality explanation on the refresh action" in guide
    assert "cover-source explanation on the refresh action" in roadmap
    assert "visible cover-quality explanation" not in guide
    assert "visible cover-source explanation" not in roadmap
    assert "app-owned cover cache" in roadmap
    assert "manual cover override" in roadmap
    assert "preview failures are diagnostic, not user-friendly" not in guide
