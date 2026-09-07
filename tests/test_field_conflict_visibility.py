from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_field_provenance_marks_current_values_that_differ_from_scanner_candidates():
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-field-conflict" in detail
    assert "library-field-conflict-badge" in detail
    assert "Differs from scanner" in detail
    assert "trim($candidateValue) !== '' && $candidateValue !== $currentValue" in detail
    assert "aria-label=\"<?php p($l->t('Current value differs from scanner candidate')); ?>\"" in detail


def test_smoke_requires_field_conflict_marker_on_seeded_mismatch():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_field_conflict_marker" in smoke
    assert "library-field-conflict" in smoke
    assert "Differs from scanner" in smoke


def test_docs_describe_conflict_visibility_as_label_not_review_queue():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Field-level conflict visibility has landed" in roadmap
    assert "Differs from scanner" in guide
    assert "scanner-conflict filtering is the first review view" in guide
    assert "no bulk edit" in guide
