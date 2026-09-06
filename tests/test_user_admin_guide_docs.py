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
        "Root management polish",
        "Database-level catalogue querying",
        "Scan lifecycle controls",
        "Metadata correction workflow",
        "Tag UX",
        "Cover quality path",
        "Shared-library administration",
        "Discovery by publication structure",
        "User-facing onboarding and empty states",
        "Export/import of corrected metadata",
    ]:
        assert gap in guide
