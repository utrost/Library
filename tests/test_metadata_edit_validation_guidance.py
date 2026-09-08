from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_edit_form_shows_non_blocking_validation_guidance_for_ambiguous_fields():
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-metadata-guidance" in detail
    assert "Non-blocking guidance" in detail
    assert "Use YYYY, YYYY-MM, or YYYY-MM-DD" in detail
    assert "Choose one or more language codes" in detail
    assert "One creator per line" in detail
    assert "library-field-label-help" in detail
    assert "title=\"<?php p($metadataHelp['publicationDate']); ?>\"" in detail
    assert "title=\"<?php p($metadataHelp['language']); ?>\"" in detail
    assert "title=\"<?php p($metadataHelp['creators']); ?>\"" in detail
    assert "aria-describedby=\"library-publication-date-guidance\"" not in detail
    assert "aria-describedby=\"library-language-guidance\"" not in detail
    assert "aria-describedby=\"library-creators-guidance\"" not in detail
    assert "required" not in detail


def test_guidance_is_documented_with_first_hard_validation_boundary():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Non-blocking edit guidance" in roadmap
    assert "validation guidance has landed" in roadmap
    assert "first hard validation for publication dates and language codes has landed" in roadmap
    assert "The edit form keeps short field-shape hints as hover/focus help on the field names" in guide
    assert "hard validation for publication dates and language codes" in guide


def test_live_smoke_checks_validation_guidance_marker():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_metadata_guidance" in smoke
    assert "detail_has_validation_feedback_contract" in smoke
    assert "library-metadata-guidance" in smoke
    assert "library-field-label-help" in smoke
    assert "Use YYYY, YYYY-MM, or YYYY-MM-DD" in smoke
