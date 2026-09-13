from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_catalogue_has_calm_server_backed_navigation_and_no_page_local_rails():
    app = read("src/App.vue")
    assert "data-library-quick-search" in app
    assert "starred=1" in app
    assert "sort=lastOpened" in app
    for obsolete in ("featuredHomeItems", "recentHomeItems", "rediscoverItem", "hasHomeDashboard", "library-home-dashboard", "Admin tools"):
        assert obsolete not in app


def test_catalogue_exposes_one_filter_sort_and_view_entry():
    app = read("src/App.vue")
    assert app.count('data-library-control="filter"') == 1
    assert app.count('data-library-control="sort"') == 1
    assert app.count('data-library-control="view"') == 1
    assert "{{ t('library', 'Filters') }}" in app


def test_catalogue_exposes_target_navigation_and_card_information_contract():
    app = read("src/App.vue")
    for label in ("Home", "All publications", "Starred", "Continue reading", "Shelves", "Collections", "Review", "Settings"):
        assert f"'{label}'" in app
    assert 'class="library-cover-creator"' in app
    assert 'class="library-cover-context"' in app
    assert "t('library', 'Maintenance')" in app
