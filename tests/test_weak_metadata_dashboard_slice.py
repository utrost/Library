from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_catalogue_renders_weak_metadata_dashboard_with_stable_filter_links():
    source = (ROOT / "src" / "App.vue").read_text()

    assert "library-weak-metadata-dashboard" in source
    assert "Weak metadata cockpit" in source
    for label in [
        "Missing creator",
        "Missing publication/series",
        "Missing date",
        "Filename-derived title",
        "Filename/path-derived metadata",
        "Placeholder cover",
        "Scanner conflict",
        "Metadata extraction error",
        "No description",
        "Unsupported archive/container",
    ]:
        assert label in source
    for query in [
        "noCreator=1",
        "noPublication=1",
        "noDate=1",
        "titleFromFilename=1",
        "weakMetadata=filename",
        "coverReview=placeholder",
        "scannerConflicts=1",
        "status=metadata_error",
        "noDescription=1",
        "unsupportedContainer=1",
    ]:
        assert query in source


def test_catalogue_accepts_weak_metadata_dashboard_filter_parameters_everywhere():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    cover = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    item = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    tag = (ROOT / "lib" / "Controller" / "TagController.php").read_text()

    for param in ["noDate", "titleFromFilename", "noDescription", "unsupportedContainer"]:
        assert f"'{param}' => trim((string)$this->request->getParam('{param}', ''))" in page
        assert param in service
        assert param in cover
        assert param in item
        assert param in tag

    assert "'missing-date' => ['noDate' => '1']" in service
    assert "'title-from-filename' => ['titleFromFilename' => '1']" in service
    assert "'no-description' => ['noDescription' => '1']" in service
    assert "'unsupported-containers' => ['unsupportedContainer' => '1']" in service
    assert "i.publication_date" in service
    assert "i.description" in service
    assert "LOWER(f.extension)" in service
    assert "filename-pattern" in service


def test_weak_metadata_dashboard_keeps_cards_browse_first_and_uses_counts_from_catalogue():
    source = (ROOT / "src" / "App.vue").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "weakMetadataDashboardRows" in source
    assert "smartViewCounts[row.key]" in source
    assert "smartViewUrl(row.filters)" in source
    assert "compact cards stay browse-first" in source
    assert "queryCatalogue($userId, $filters, ['page' => 1, 'limit' => 1])['total']" in service
