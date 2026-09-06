from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_edit_form_shows_non_blocking_validation_guidance_for_ambiguous_fields():
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-metadata-guidance" in detail
    assert "Non-blocking guidance" in detail
    assert "Use YYYY, YYYY-MM, or YYYY-MM-DD" in detail
    assert "Use short language codes such as de, en, fr" in detail
    assert "Separate multiple creators with semicolons" in detail
    assert "aria-describedby=\"library-publication-date-guidance\"" in detail
    assert "aria-describedby=\"library-language-guidance\"" in detail
    assert "aria-describedby=\"library-creators-guidance\"" in detail
    assert "pattern=" not in detail
    assert "required" not in detail


def test_guidance_is_documented_as_hint_only_not_blocking_validation():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Non-blocking edit guidance" in roadmap
    assert "validation guidance has landed" in roadmap
    assert "hard validation remains future work" in roadmap
    assert "The edit form shows hints for dates, language codes and creator separators" in guide
    assert "hints do not block saving" in guide


def test_live_smoke_checks_validation_guidance_marker():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_metadata_guidance" in smoke
    assert "library-metadata-guidance" in smoke
    assert "Use YYYY, YYYY-MM, or YYYY-MM-DD" in smoke
