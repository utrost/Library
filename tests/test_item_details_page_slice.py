from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_include_read_only_publication_details_page():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "'name' => 'item_page#show'" in routes
    assert "'url' => '/items/{itemId}'" in routes
    assert "'verb' => 'GET'" in routes
    assert "'name' => 'item#update', 'url' => '/items/{itemId}', 'verb' => 'POST'" in routes


def test_item_page_controller_resolves_current_user_item_and_renders_detail_template():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()

    assert "final class ItemPageController extends Controller" in controller
    assert "#[NoAdminRequired]" in controller
    assert "#[NoCSRFRequired]" in controller
    assert "public function show(int $itemId): TemplateResponse" in controller
    assert "findItem($user->getUID(), $itemId)" in controller
    assert "FileTagService $fileTagService" in controller
    assert "FileCommentService $fileCommentService" in controller
    assert "return new TemplateResponse(Application::APP_ID, 'item-detail'" in controller
    assert "throw new NotFoundException" in controller


def test_item_service_has_current_user_item_lookup_with_file_context():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function findItem(string $userId, int $itemId): ?array" in service
    assert "->andWhere($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))" in service
    assert "f.file_id" in service
    assert "f.cached_path" in service
    assert "f.scan_status" in service
    assert "r.label" in service


def test_catalogue_cards_link_to_dedicated_details_page():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()

    assert "detailsUrl" in page
    assert "linkToRoute('library.item_page.show'" in page
    assert ':href="item.detailsUrl"' in vue
    assert "t('library', 'Details')" in vue
    assert "item.detailsUrl" in fallback


def test_item_detail_template_has_layered_read_only_metadata_sections():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-item-detail" in template
    assert "$l->t('Publication details')" in template
    assert "$l->t('Publication metadata')" in template
    assert "$l->t('File metadata')" in template
    assert "$l->t('Provenance')" in template
    assert "$l->t('Nextcloud metadata')" in template
    assert "metadataSource" in template
    assert "userEdited" in template
    assert "scanStatus" in template
    assert "nextcloudTags" in template
    assert "nextcloudComments" in template
    assert "Read" in template
    assert "Show in Files" in template
    assert "Back to catalogue" in template
