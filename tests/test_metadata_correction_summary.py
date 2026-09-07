from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_detail_page_renders_read_only_metadata_correction_summary_counts():
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "$scannerCandidateCount" in detail
    assert "$scannerConflictCount" in detail
    assert "library-metadata-correction-summary" in detail
    assert "Scanner candidates" in detail
    assert "Fields differing from scanner" in detail
    assert "Read-only summary" in detail
    assert "count(array_filter($fieldValues" in detail
    assert "foreach ($fieldProvenanceRows as $field => $_label)" in detail


def test_live_smoke_requires_metadata_correction_summary_with_seeded_conflict_count():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_metadata_correction_summary" in smoke
    assert "library-metadata-correction-summary" in smoke
    assert "Scanner candidates" in smoke
    assert "Fields differing from scanner" in smoke
    assert "detail_has_seeded_conflict_count" in smoke
    assert "detail_seeded_conflict_count" in smoke
    assert "Number.parseInt" in smoke
    assert ">= 1" in smoke
    assert "scannerConflictCount > 8" in smoke


def test_docs_mark_summary_landed_without_bulk_or_review_workflow():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Metadata correction summary has landed" in roadmap
    assert "read-only metadata correction summary" in guide
    assert "scanner candidate count" in guide
    assert "differing-field count" in guide
    assert "first scanner-conflict review filter exist" in guide
    assert "Bulk edit remains future work" in guide
