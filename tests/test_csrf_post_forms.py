from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POST_CONTROLLERS = [
    "CommentController.php",
    "ItemController.php",
    "RootController.php",
    "TagController.php",
]


def test_mutating_post_controllers_use_nextcloud_csrf_protection():
    for controller_name in POST_CONTROLLERS:
        text = (ROOT / "lib" / "Controller" / controller_name).read_text()
        assert "NoCSRFRequired" not in text, f"{controller_name} must not disable CSRF for POST actions"

    scan = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()
    assert "#[NoCSRFRequired]\n    public function run" not in scan


def test_get_only_controllers_may_disable_csrf():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    cover = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    scan = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()
    assert "#[NoCSRFRequired]" in page
    assert "#[NoCSRFRequired]" in cover
    assert "#[NoCSRFRequired]\n    public function progress" in scan


def test_vue_page_has_no_post_forms_and_detail_forms_include_requesttoken():
    main_php = (ROOT / "templates" / "main.php").read_text()
    main_js = (ROOT / "src" / "main.js").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "data-request-token" in main_php
    assert "requestToken" in main_js
    assert 'method="post"' not in vue
    assert 'name="requesttoken"' not in vue
    assert detail.count('name="requesttoken"') >= 3
    assert "$_['requesttoken']" in detail
    assert "fallbackHiddenRequestToken" in main_js


def test_personal_settings_post_forms_include_requesttoken():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    assert template.count('name="requesttoken"') >= 2
    assert "$_['requesttoken']" in template
