from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_omits_obsolete_series_periodical_shortcut():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "library-shortcut-selectors" in vue
    assert "library-periodical-groups" not in vue
    assert "Choose series" not in vue
    assert 'name="publicationSearch"' in vue
    assert "publicationSuggestionsUrl" in vue


def test_smoke_tracks_removed_series_periodical_shortcut_contract():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "source_has_no_periodical_shortcut" in smoke
    assert "library-periodical-groups" in smoke
    assert "Choose series" in smoke


def test_docs_describe_empty_state_as_landed_not_new_schema():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "empty-state guidance when no series metadata exists" in roadmap.lower()
    assert "No series or periodicals found yet" in guide
    assert "no new series schema" in guide.lower()
