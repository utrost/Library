from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_catalogue_filters_are_collapsible_and_closed_by_default():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert 'library-workspace-panel--refine library-filter-panel' in vue
    assert 'library-filter-panel-summary' in vue
    assert "Filter" in vue
    assert '<details class="library-workspace-panel library-workspace-panel--refine library-filter-panel" data-workspace-panel="refine">' in vue
    assert 'library-workspace-panel--refine library-filter-panel" open' not in vue
    assert '<form method="get" class="library-filter-bar"' in vue


def test_vue_browse_disclosure_keeps_year_and_creator_but_not_series_shortcut():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert 'library-workspace-panel--browse' in vue
    assert 'library-shortcut-selectors' in vue
    assert 'class="library-shortcut-select-card library-periodical-groups"' not in vue
    assert 'class="library-shortcut-select-card library-year-groups"' in vue
    assert 'class="library-shortcut-select-card library-creator-groups"' in vue
    assert '<select @change="navigateToSelected">' in vue
    assert 'Choose series' not in vue


def test_styles_cover_collapsible_catalogue_panels():
    css = (ROOT / "css" / "style.css").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    assert ".library-filter-panel" in css
    assert ".library-filter-panel-summary" in css
    assert "library-workspace-panel--browse" in vue
    assert "library-catalogue-workspace" in vue
