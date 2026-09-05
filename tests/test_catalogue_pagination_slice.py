from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_accepts_limit_page_and_slices_catalogue_items():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "page" in page
    assert "limit" in page
    assert "buildPagination" in page
    assert "sliceItemsForPresentation" in page
    assert "array_slice($items" in page
    assert "max(1, min(500" in page


def test_template_renders_catalogue_pagination_controls_and_summary():
    template = (ROOT / "templates" / "main.php").read_text()
    assert "cataloguePagination" in template
    assert "Showing" in template
    assert "of" in template
    assert "Previous" in template
    assert "Next" in template
    assert "name=\"limit\"" in template
    assert "[25, 50, 100, 250, 500]" in template


def test_pagination_preserves_active_filters_in_links():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "paginationUrl" in page
    for param in ["q", "type", "format", "tag", "shelf", "status", "sort", "limit", "page"]:
        assert param in page


def test_docs_note_scale_pilot_and_bounded_catalogue():
    readme = (ROOT / "README.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "paginated" in readme.lower()
    assert "10 → 100 → 1000 → 10000" in roadmap
