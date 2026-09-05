from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_tag_service_can_assign_existing_or_created_system_tag_to_item_file():
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()
    assert "IDBConnection" in service
    assert "public function assignTagToItem(string $userId, int $itemId, string $tagName): void" in service
    assert "findFileIdForItem" in service
    assert "getTag($tagName" in service
    assert "createTag($tagName, true, true" in service
    assert "canUserCreateTag" in service
    assert "canUserAssignTag" in service
    assert "assignTags((string)$fileId, 'files'" in service


def test_tag_controller_and_route_are_wired():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "tag#assign" in routes
    assert "/items/{itemId}/tags" in routes

    controller_path = ROOT / "lib" / "Controller" / "TagController.php"
    assert controller_path.exists()
    controller = controller_path.read_text()
    assert "final class TagController" in controller
    assert "FileTagService $fileTagService" in controller
    assert "public function assign(int $itemId): RedirectResponse" in controller
    assert "tagName" in controller
    assert "assignTagToItem" in controller


def test_template_has_add_nextcloud_tag_form_separate_from_metadata_edit():
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "item.tagUrl" in vue
    assert "Add Nextcloud tag" in vue
    assert "name=\"nextcloudTagName\"" in vue
    assert "name=\"tagName\"" not in vue
    assert "placeholder=\"photography, project-library...\"" in vue


def test_add_tag_form_avoids_native_form_property_names_that_break_vue_dom_runtime():
    vue = (ROOT / "src" / "App.vue").read_text()
    forbidden = {"tagName", "nodeName", "nodeType", "children", "elements", "action", "method"}
    for name in forbidden:
        assert f'name=\"{name}\"' not in vue
