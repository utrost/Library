from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_renders_series_periodical_empty_state_when_no_publication_groups_exist():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "library-periodical-groups-empty" in vue
    assert "publicationSummaries.length === 0" in vue
    assert "No series or periodicals found yet" in vue
    assert "Add publication or series names in item details to build this shortcut panel" in vue


def test_smoke_tracks_series_periodical_empty_state_contract():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "source_has_periodical_empty_state" in smoke
    assert "library-periodical-groups-empty" in smoke
    assert "No series or periodicals found yet" in smoke


def test_docs_describe_empty_state_as_landed_not_new_schema():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "empty-state guidance when no series metadata exists" in roadmap.lower()
    assert "No series or periodicals found yet" in guide
    assert "no new series schema" in guide.lower()
