from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_accepts_format_filter_and_builds_available_formats():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "getParam('format'" in controller
    assert "queryCatalogue($userId, $activeFilters, $pagination)" in controller
    assert "catalogueFacets" in service
    assert "formats" in controller
    assert "array{q?:string,type?:string,publication?:string,year?:string,format?:string" in service


def test_page_controller_filters_catalogue_items_by_file_extension():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "$filters['format']" in service
    assert "LOWER(f.extension)" in service
    assert "createNamedParameter($format)" in service


def test_template_renders_format_filter_and_card_format_label():
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "formats" in vue
    assert "name=\"format\"" in vue
    assert "All formats" in vue
    assert "v-for=\"format in formats\"" in vue
    assert "Format:" in vue


def test_docs_name_format_filter_slice_as_landed():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "file format filter" in roadmap
    assert "Filter by PDF, EPUB, CBZ or OPF" in roadmap
    readme = (ROOT / "README.md").read_text()
    assert "file format" in readme
