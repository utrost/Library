from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text()


def test_root_delete_requires_typed_delete_confirmation_before_service_call():
    controller = read("lib/Controller/RootController.php")
    delete_body = controller.split("public function delete", 1)[1].split("private function redirectToSettings", 1)[0]

    assert "getParam('confirmDeleteText', '')" in delete_body
    assert "trim(" in delete_body
    assert "=== 'DELETE'" in delete_body
    assert delete_body.index("=== 'DELETE'") < delete_body.index("deleteRoot($user->getUID(), $rootId)")
    assert "getParam('confirmDelete', '') === '1'" not in delete_body


def test_settings_root_delete_form_asks_for_typed_delete_and_keeps_source_file_warning():
    template = read("templates/settings-personal.php")

    assert "name=\"confirmDeleteText\"" in template
    assert "placeholder=\"DELETE\"" in template
    assert "Type DELETE to confirm" in template
    assert "Deleting a Library root removes only Library index and catalogue rows" in template
    assert "never deletes source files from Nextcloud Files" in template
    assert "name=\"confirmDelete\" value=\"1\"" not in template


def test_docs_and_version_track_typed_root_delete_confirmation():
    readme = read("docs/user-guide.md")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")

    assert "typed root-delete confirmation" in readme.lower()
    assert "Type DELETE to confirm" in guide
    assert "typed root-delete confirmation" in roadmap.lower()
    assert "0.1.0-alpha.157" in info
    assert '"version": "0.1.0-alpha.157"' in package
