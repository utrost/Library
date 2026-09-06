from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_file_tag_service_can_remove_visible_system_tag_from_item_file():
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()
    assert "public function removeTagFromItem(string $userId, int $itemId, string $tagId): void" in service
    assert "findFileIdForItem" in service
    assert "getTagsByIds([$tagId], $user)" in service
    assert "canUserAssignTag($tag, $user)" in service
    assert "unassignTags((string)$fileId, 'files', $tagId)" in service


def test_tag_controller_and_delete_route_are_wired():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "tag#remove" in routes
    assert "/items/{itemId}/tags/{tagId}" in routes
    assert "'verb' => 'POST'" in routes

    controller = (ROOT / "lib" / "Controller" / "TagController.php").read_text()
    assert "public function remove(int $itemId, string $tagId): RedirectResponse" in controller
    assert "removeTagFromItem" in controller


def test_template_renders_remove_nextcloud_tag_forms_without_metadata_coupling():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "tag['removeUrl']" in template
    assert "Remove Nextcloud tag" in template
    assert "Remove tag" in template
    assert "returnTo" in template
    assert "item.tagRemoveBaseUrl" not in vue
    assert "removeTagUrl(item, tag)" not in vue
