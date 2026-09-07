from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_catalogue_state_exposes_root_counts_for_first_run_guidance():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "$roots = $this->rootService->listRoots($userId);" in controller
    assert "'rootCount' => count($roots)," in controller
    assert "'enabledRootCount' => count(array_filter($roots" in controller


def test_vue_and_fallback_distinguish_first_run_from_filtered_empty_state():
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    for source in (app, fallback):
        assert "library-first-run-guidance" in source
        assert "Start with one Library root" in source
        assert "Add a Library root" in source
        assert "Run a scan after saving a root" in source
        assert "library-filter-empty-state" in source
        assert "No matches for the current filters" in source
        assert "Clear search" in source
        assert "Clear all filters" in source

    assert "browser_first_run_guidance_source" in smoke
    assert "browser_filter_empty_state_source" in smoke


def test_settings_page_has_getting_started_guidance_for_empty_roots():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-getting-started" in template
    assert "Getting started" in template
    assert "Add one folder path that already exists in Nextcloud Files." in template
    assert "Run Scan enabled roots after saving the root." in template
    assert "Deleting a Library root removes only Library index and catalogue rows" in template
    assert ".library-getting-started" in css
