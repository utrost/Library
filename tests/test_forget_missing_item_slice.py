from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_forget_missing_item_post_action():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "item#forgetMissing" in routes
    assert "'/items/{itemId}/forget-missing'" in routes
    assert "'verb' => 'POST'" in routes


def test_item_service_forgets_only_missing_items_and_deletes_app_rows_only():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function forgetMissingItem(string $userId, int $itemId): bool" in service
    assert "scan_status" in service
    assert "missing" in service
    assert "delete('library_items')" in service
    assert "delete('library_files')" in service
    assert "getUserFolder" not in service
    assert "->delete()" not in service
    assert "return false" in service


def test_item_controller_redirects_forget_missing_back_to_details_or_catalogue():
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()

    assert "public function forgetMissing(int $itemId): RedirectResponse" in controller
    assert "forgetMissingItem($user->getUID(), $itemId)" in controller
    assert "getParam('returnTo', '')" in controller
    assert "returnTo === 'details'" in controller
    assert "library.item_page.show" in controller
    assert "library.page.index" in controller


def test_item_detail_page_only_renders_forget_action_for_missing_items():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "forgetMissingUrl" in controller
    assert "library.item.forgetMissing" in controller
    assert "library-forget-missing-form" in template
    assert "scanStatus'] ?? '') === 'missing'" in template
    assert "Forget missing item" in template
    assert "removes this Library catalogue entry" in template
    assert "does not delete source files" in template
    assert "name=\"returnTo\" value=\"details\"" in template
    assert "requesttoken" in template


def test_docs_describe_forget_missing_and_uninstall_export_boundary():
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "forget missing item" in readme.lower()
    assert "Forget missing item" in guide
    assert "only appears for missing catalogue entries" in guide
    assert "does not delete source files" in guide
    assert "Disable the app" in guide
    assert "Remove the app" in guide
    assert "metadata export" in guide
    assert "Deletion/forget policy.** First slice landed" in roadmap
    assert "Library removal/uninstall guide.** First slice landed" in roadmap
    assert "Metadata export foundation.** First slice landed" in roadmap
    assert "DB-backed catalogue query path.** First slice landed" in roadmap
    assert "Recommended next slice: **real-collection metadata hardening**" in roadmap
