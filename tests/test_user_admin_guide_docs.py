from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_user_guide_is_linked_from_readme_and_roadmap():
    readme = (ROOT / "README.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "[User and admin guide](docs/user-guide.md)" in readme
    assert "[User and admin guide](user-guide.md)" in roadmap


def test_user_guide_covers_current_role_facing_surfaces():
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    for heading in [
        "## Product boundary",
        "## Current app surfaces",
        "### Library catalogue",
        "### Item details page",
        "### Personal Library settings",
        "## Everyday user processes",
        "## Admin processes",
        "## User stories for judging v0.1 usefulness",
        "## Crucial missing-feature candidates exposed by the guide",
        "## Practical review script",
    ]:
        assert heading in guide


def test_user_guide_names_implemented_workflows_and_non_goals():
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    for phrase in [
        "Nextcloud Files remains the canonical storage layer",
        "Scan enabled roots",
        "Read",
        "Show in Files",
        "Details",
        "publication metadata",
        "Nextcloud system tags",
        "Nextcloud file comments",
        "metadata_error",
        "missing",
        "Manual Library metadata edits set provenance to `user`",
        "custom EPUB/PDF/CBZ reader",
        "OCR or full-text document search",
        "internet metadata lookup",
    ]:
        assert phrase in guide


def test_user_guide_lists_reviewable_missing_feature_candidates():
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    for gap in [
        "Root management polish beyond the first lifecycle slice",
        "Scan lifecycle controls",
        "Metadata correction workflow",
        "Tag UX",
        "Cover quality path",
        "Shared-library administration",
        "Discovery by publication structure",
        "User-facing onboarding and empty states",
        "Metadata portability beyond read-only export",
    ]:
        assert gap in guide


def test_user_guide_reflects_current_implemented_query_export_download_and_pdf_hardening():
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    for phrase in [
        "Download source",
        "database-backed item query",
        "DB-backed catalogue query path is implemented",
        "read-only corrected-metadata JSON export is implemented",
        "PDF Subject-as-subtitle",
        "normalized PDF CreationDate/ModDate",
        "nested PDF literal parentheses",
        "metadata_error",
        "sidecar OPFs are hidden from the catalogue query",
    ]:
        assert phrase in guide

    stale_phrases = [
        "filtering currently happens after loading the user's item list into the app layer",
        "Database-level catalogue querying — current app-layer filtering/pagination",
        "metadata export is documented as missing",
    ]
    for phrase in stale_phrases:
        assert phrase not in guide


def test_roadmap_combines_user_review_questions_with_guide_gaps():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "## Combined missing operational processes, 2026-09-06" in roadmap
    assert "[User and admin guide](user-guide.md)" in roadmap
    for phrase in [
        "deletion/update processes",
        "Library removal",
        "cover rescans",
        "folder/root scoped rescans",
        "Cover extraction optionality",
        "Root lifecycle UI and routes",
        "Per-root scan",
        "Deletion/forget policy",
        "Library removal/uninstall guide",
        "Scoped folder/subtree rescan",
        "Cover lifecycle only after cache",
        "DB-backed catalogue query path",
        "Metadata portability",
    ]:
        assert phrase in roadmap


def test_roadmap_recommends_root_lifecycle_and_per_root_scan_next():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "Root lifecycle UI and routes.** First slice landed" in roadmap
    assert "Per-root scan.** First slice landed" in roadmap
    assert "delete affects Library catalogue/index data, not Nextcloud Files" in roadmap
    assert "scan job rows track scope" in roadmap
    assert "Deletion/forget policy.** First slice landed" in roadmap
    assert "Metadata export foundation.** First slice landed" in roadmap
    assert "DB-backed catalogue query path.** First slice landed" in roadmap
    assert "Recommended next slice: **real-collection metadata hardening**" in roadmap
    assert "forget missing item" in roadmap
    assert "cover cache or cover refresh" in roadmap
    assert "deleting source files from Nextcloud Files" in roadmap
