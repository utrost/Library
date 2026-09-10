from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POST_CONTROLLERS = [
    "CommentController.php",
    "ItemController.php",
    "RootController.php",
    "TagController.php",
]


def method_attributes_before(text: str, method_name: str) -> str:
    before_method = text.split(f"public function {method_name}", 1)[0]
    previous_method = before_method.rfind("public function ")
    return before_method[previous_method:]


def test_mutating_post_controllers_use_nextcloud_csrf_protection():
    mutating_methods = {
        "CommentController.php": ["add"],
        "ItemController.php": ["update", "resetfield", "resetfields", "star", "forgetMissing"],
        "RootController.php": ["create", "update", "delete", "enable", "disable"],
        "TagController.php": ["assign", "remove"],
    }
    for controller_name, method_names in mutating_methods.items():
        text = (ROOT / "lib" / "Controller" / controller_name).read_text()
        for method_name in method_names:
            assert "NoCSRFRequired" not in method_attributes_before(text, method_name), (
                f"{controller_name}::{method_name} must not disable CSRF for POST actions"
            )

    scan = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()
    assert "#[NoCSRFRequired]\n    public function run" not in scan


def test_batch_mutations_with_tokenized_forms_require_csrf():
    mutating_methods = {
        "ItemController.php": ["bulkresetfields", "batchresetfilteredfields", "batchapplymetadataedit"],
        "TagController.php": ["batchassign", "batchremove"],
        "CoverController.php": ["batchrefresh"],
    }
    for controller_name, method_names in mutating_methods.items():
        text = (ROOT / "lib" / "Controller" / controller_name).read_text()
        for method_name in method_names:
            assert "NoCSRFRequired" not in method_attributes_before(text, method_name), (
                f"{controller_name}::{method_name} must use the request token supplied by its POST form"
            )

    item = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    assert "#[NoCSRFRequired]" in method_attributes_before(item, "batchpreviewmetadataedit")


def test_get_only_controllers_may_disable_csrf():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    cover = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    scan = (ROOT / "lib" / "Controller" / "ScanController.php").read_text()
    assert "#[NoCSRFRequired]" in page
    assert "#[NoCSRFRequired]" in cover
    assert "#[NoCSRFRequired]\n    public function progress" in scan


def test_vue_catalogue_star_and_detail_forms_include_requesttoken():
    main_php = (ROOT / "templates" / "main.php").read_text()
    main_js = (ROOT / "src" / "main.js").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "data-request-token" in main_php
    assert "requestToken" in main_js
    assert 'class="library-cover-star-form"' in vue
    assert 'name="requesttoken"' in vue
    assert 'name="returnTo" value="catalogue"' in vue
    assert detail.count('name="requesttoken"') >= 3
    assert "$_['requesttoken']" in detail
    assert "fallbackHiddenRequestToken" in main_js


def test_personal_settings_post_forms_include_requesttoken():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    assert template.count('name="requesttoken"') >= 2
    assert "$_['requesttoken']" in template
