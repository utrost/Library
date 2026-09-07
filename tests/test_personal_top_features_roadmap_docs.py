from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_readme_links_personal_top_features_scope():
    readme = read("README.md")

    assert "[Personal top features scope](docs/personal-top-features.md)" in readme


def test_personal_top_features_doc_prioritizes_user_list_with_current_state():
    doc = read("docs/personal-top-features.md")

    assert "# Personal Top Features Scope" in doc
    assert "Uwe's personal top features" in doc
    for phrase in [
        "fully implemented multi-root library",
        "starring/bookmarking",
        "last read/opened",
        "search with description",
        "custom status per publication",
        "genres and classifications",
    ]:
        assert phrase in doc.lower()

    assert "Current support" in doc
    assert "Recommended priority" in doc
    assert "Feedback" in doc
    assert "Nextcloud tags are useful" in doc
    assert "Library-owned reading activity" in doc
    assert "canonical Library-native fields" in doc


def test_personal_top_features_doc_has_ordered_vertical_slices():
    doc = read("docs/personal-top-features.md")

    expected_order = [
        "P0 — finish multi-root confidence",
        "P1 — personal starring",
        "P2 — last opened",
        "P3 — richer text search",
        "P4 — custom reading/workflow status",
        "P5 — genres and classifications",
    ]
    positions = [doc.index(item) for item in expected_order]
    assert positions == sorted(positions)
    for phrase in [
        "acceptance checks",
        "database-backed catalogue query",
        "detail page",
        "filter chip",
        "export/import",
    ]:
        assert phrase in doc.lower()


def test_roadmap_points_to_personal_top_features_as_current_product_priority():
    roadmap = read("docs/roadmap.md")

    assert "Personal top features" in roadmap
    assert "personal-top-features.md" in roadmap
    assert "starring/bookmarking" in roadmap.lower()
    assert "last read/opened" in roadmap.lower()
    assert "genres and classifications" in roadmap.lower()


def test_user_guide_mentions_tags_vs_library_native_status_boundary():
    guide = read("docs/user-guide.md")

    assert "Tags can approximate status today" in guide
    assert "Library-native status" in guide
    assert "genres and classifications" in guide.lower()
