from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_service_exposes_scan_status_for_catalogue_filters():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "f.scan_status" in service
    assert "f.scan_error" in service
    assert "'scanStatus' => (string)$row['scan_status']" in service
    assert "'scanError' => $row['scan_error'] !== null ? (string)$row['scan_error'] : ''" in service


def test_catalogue_supports_scan_status_filter():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "'status' => $this->normalizeScalarFilter($this->request->getParam('status', ''))" in page
    assert "scanStatusFacetValues" in service
    assert "'scanStatuses' => $catalogue['facets']['scanStatuses']" in page
    assert "f.scan_status" in service
    assert "name=\"status\"" in vue
    assert "All scan statuses" in vue
    for status in ["indexed", "metadata_error", "missing"]:
        assert status in page


def test_catalogue_cards_show_scan_diagnostics_for_unhealthy_items():
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "library-item-scan-status" in vue
    assert "scanStatus:" in vue
    assert "scanError:" in vue
    assert "library-scan-error" in vue


def test_docs_record_scan_status_filter_slice():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "scan status" in readme.lower()
    assert "scan status" in roadmap.lower()
