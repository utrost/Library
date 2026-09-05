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
    template = (ROOT / "templates" / "main.php").read_text()
    assert "'status' => trim((string)$this->request->getParam('status', ''))" in page
    assert "buildScanStatuses" in page
    assert "'scanStatuses' => $scanStatuses" in page
    assert "scanStatus" in page
    assert "name=\"status\"" in template
    assert "All scan statuses" in template
    for status in ["indexed", "metadata_error", "missing"]:
        assert status in page


def test_catalogue_cards_show_scan_diagnostics_for_unhealthy_items():
    template = (ROOT / "templates" / "main.php").read_text()
    assert "library-item-scan-status" in template
    assert "scanStatus:" in template
    assert "scanError:" in template
    assert "library-scan-error" in template


def test_docs_record_scan_status_filter_slice():
    readme = (ROOT / "README.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "scan status" in readme.lower()
    assert "scan status" in roadmap.lower()
