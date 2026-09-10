from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_user_story_ux_concept_covers_gallery_metadata_shelves_and_filtering():
    doc = ROOT / "docs" / "ux-concept.md"
    assert doc.exists()
    text = doc.read_text()
    assert "# Library UX Concept" in text
    assert "gallery of covers" in text
    assert "metadata is visible" in text
    assert "Shelf" in text
    assert "Search and filter" in text
    assert "one workspace, progressive disclosure" in text
    for panel in [
        "Refine results",
        "Browse shortcuts",
        "Batch actions",
        "Review queue",
        "Admin tools",
    ]:
        assert panel in text
    for scope in [
        "this item",
        "current results",
        "this shelf",
        "all enabled roots",
        "whole catalogue",
    ]:
        assert scope in text
    for story in [
        "As a reader, I want to browse a gallery of covers",
        "As an archivist, I want metadata visible on cards and detail sections",
        "As a collector, I want shelves that map to meaningful roots or collections",
        "As a finder, I want to search and filter by tag, type, title and author",
    ]:
        assert story in text


def test_page_controller_passes_filter_state_and_shelves_to_template():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "getParam('q'" in controller
    assert "getParam('type'" in controller
    assert "getParam('tag'" in controller
    assert "getParam('shelf'" in controller
    assert "queryCatalogue($userId, $activeFilters, $pagination)" in controller
    assert "applyCatalogueFilters" in service
    assert "shelves" in controller
    assert "activeFilters" in controller


def test_template_renders_cover_gallery_metadata_detail_and_filter_controls():
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "t('library', 'Catalogue search and filters')" in vue
    assert "name=\"q\"" in vue
    assert "name=\"type\"" in vue
    assert "name=\"tag\"" in vue
    assert "name=\"shelf\"" in vue
    assert "class=\"library-cover-gallery\"" in vue
    assert "class=\"library-cover-card\"" in vue
    assert "class=\"library-cover-image\"" in vue
    assert "class=\"library-cover-placeholder\"" not in vue
    assert "Details" in vue
    assert "class=\"library-item-metadata\"" not in vue
    assert "Details / edit metadata" not in vue
    assert "Shelf" in vue


def test_styles_define_responsive_cover_gallery_and_filter_bar():
    css = (ROOT / "css" / "style.css").read_text()
    assert ".library-filter-bar" in css
    assert ".library-cover-gallery" in css
    assert "grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))" in css
    assert ".library-cover-image" in css
    assert ".library-cover-placeholder" not in css
    assert ".library-cover-details" in css


def test_readme_links_ux_concept_and_names_current_presentation_slice():
    readme = (ROOT / "README.md").read_text()
    assert "docs/ux-concept.md" in readme
    assert "cover gallery" in readme
    assert "search and filter" in readme
