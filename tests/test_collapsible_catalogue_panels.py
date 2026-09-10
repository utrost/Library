from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_catalogue_filters_are_collapsible_and_closed_by_default():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert 'library-workspace-panel--refine library-filter-panel' in vue
    assert 'library-filter-panel-summary' in vue
    assert "Refine results" in vue
    assert '<details class="library-workspace-panel library-workspace-panel--refine library-filter-panel" data-workspace-panel="refine">' in vue
    assert 'library-workspace-panel--refine library-filter-panel" open' not in vue
    assert '<form method="get" class="library-filter-bar"' in vue


def test_vue_top_series_periodicals_are_folded_into_compact_browse_disclosure():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert 'library-workspace-panel--browse' in vue
    assert "{{ t('library', 'Browse shortcuts') }}" in vue
    assert 'library-shortcut-selectors' in vue
    assert 'class="library-shortcut-select-card library-periodical-groups"' in vue
    assert '<select @change="navigateToSelected">' in vue
    assert ':value="publicationLandingUrl(summary.publication)"' in vue
    assert '<details v-if="publicationSummaries.length > 0" class="library-periodical-groups">' not in vue


def test_vue_fallback_uses_collapsible_catalogue_filter_panel():
    main = (ROOT / "src" / "main.js").read_text()

    assert "filterPanel.className = 'library-filter-panel'" in main
    assert "filterSummary.className = 'library-filter-panel-summary'" in main
    assert "filterSummary.textContent = t('library', 'Show catalogue filters')" in main
    assert "filterPanel.append(filterSummary, fallbackFilterForm(state, pagination))" in main


def test_styles_cover_collapsible_catalogue_panels():
    css = (ROOT / "css" / "style.css").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    assert ".library-filter-panel" in css
    assert ".library-filter-panel-summary" in css
    assert "library-workspace-panel--browse" in vue
    assert "library-catalogue-workspace" in vue
