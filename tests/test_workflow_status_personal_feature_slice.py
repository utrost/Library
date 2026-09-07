from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_workflow_status_has_schema_route_and_scoped_service_boundary():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "workflow_status" in migrations
    assert "item#workflowStatus" in routes
    assert "/items/{itemId}/workflow-status" in routes
    assert "public function setWorkflowStatus(string $userId, int $itemId, string $workflowStatus): bool" in service
    assert "private function normalizeWorkflowStatus" in service
    assert "public function workflowStatus(int $itemId): RedirectResponse" in controller
    workflow_method = controller.split("public function workflowStatus", 1)[1].split("public function", 1)[0]
    assert "setWorkflowStatus" in workflow_method
    assert "returnTo" in workflow_method


def test_workflow_status_is_visible_editable_and_filterable_without_overloading_scan_status():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    detail = (ROOT / "templates" / "item-detail.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "workflowStatus" in page
    assert "workflowStatuses" in page
    assert "workflowStatusUrl" in page
    assert "'status' => trim((string)$this->request->getParam('status', ''))" in page
    assert "'workflowStatus' => trim((string)$this->request->getParam('workflowStatus', ''))" in page
    assert "foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'workflowStatus', 'starred', 'sort'] as $param)" in page
    assert "i.workflow_status" in service
    assert "Workflow status" in detail
    assert 'name="workflowStatus"' in detail
    assert "workflow-status" in detail
    assert "Workflow status" in vue
    assert "workflowStatus" in vue
    assert "scanStatus" in vue


def test_workflow_status_roundtrips_through_corrected_metadata_import_export_without_touching_scanner_provenance():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    package = (ROOT / "package.json").read_text()
    smoke = (ROOT / "scripts" / "smoke-workflow-status.mjs").read_text()

    export_block = service.split("public function exportCorrectedMetadata", 1)[1].split("public function previewCorrectedMetadataImport", 1)[0]
    assert "workflowStatus" in export_block
    assert "i.workflow_status" in export_block
    changed_block = service.split("private function changedImportFields", 1)[1].split("private function emptyImportPreview", 1)[0]
    assert "workflowStatus" in changed_block
    apply_block = service.split("public function applyCorrectedMetadataImport", 1)[1].split("/**", 1)[0]
    assert "setWorkflowStatus" in apply_block
    set_method = service.split("public function setWorkflowStatus", 1)[1].split("public function", 1)[0]
    assert "metadata_source" not in set_method
    assert "field_sources" not in set_method
    assert "field_values" not in set_method
    assert "user_edited" not in set_method
    assert '"smoke:workflow-status"' in package
    assert "workflow_status_smoke_ok=true" in smoke


def test_workflow_status_docs_mark_p4_as_landed_and_distinct_from_scan_status_and_tags():
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    personal = (ROOT / "docs" / "personal-top-features.md").read_text()

    assert "Library-native workflow status" in readme
    assert "workflow status" in guide
    assert "separate from operational scan status" in guide
    assert "P4 — custom status per publication. Landed" in roadmap
    assert "workflow status is implemented" in personal
    assert "Tags can approximate status today" not in guide
