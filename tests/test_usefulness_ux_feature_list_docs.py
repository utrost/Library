from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_usefulness_ux_feature_list_is_linked_from_readme_and_roadmap():
    readme = (ROOT / "README.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "[Usefulness and UX feature list](docs/usefulness-and-ux-feature-list.md)" in readme
    assert "[Usefulness and UX feature list](usefulness-and-ux-feature-list.md)" in roadmap


def test_usefulness_ux_feature_list_captures_uwe_and_hermes_priorities():
    doc = (ROOT / "docs" / "usefulness-and-ux-feature-list.md").read_text()

    for phrase in [
        "Re-indexing, moving, adding and deleting files",
        "Configurable metadata extraction from path and filename",
        "/<genre>/<Author>/<Series>/<title>.epub",
        "database-backed catalogue text search includes title, subtitle, creators, publication/series/periodical, **description**, filename and folder path text",
        "Saved views and smart collections",
        "Weak-metadata discovery dashboard",
        "Metadata review workbench",
        "File-First sidecar write-back and fresh-install restore",
    ]:
        assert phrase in doc


def test_usefulness_ux_feature_list_separates_implemented_description_search_from_followup_copy():
    doc = (ROOT / "docs" / "usefulness-and-ux-feature-list.md").read_text()

    assert "**implemented**: Library-native description is included in database-backed catalogue search" in doc
    assert "make the search help text mention description explicitly" in doc
    assert "compact cards do not show long description snippets by default" in doc
