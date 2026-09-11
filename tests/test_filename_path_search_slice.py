from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_catalogue_text_search_includes_cached_filename_and_folder_path():
    service = read("lib/Service/ItemService.php")
    search_block = service.split("$query = mb_strtolower", 1)[1].split("private function jsonArrayContainsFilter", 1)[0]

    assert "LOWER(f.cached_path)" in search_block
    assert "filename and folder path" in service


def test_vue_search_copy_explains_filename_and_folder_search():
    app = read("src/App.vue")

    assert "Search title, creator, description, filename or folder" in app
    assert "Descriptions, filename and folder names are searchable" in app


def test_docs_and_smoke_track_filename_path_search_as_landed():
    readme = read("docs/user-guide.md")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    smoke = read("scripts/smoke-vue-page.mjs")
    info = read("appinfo/info.xml")
    package = read("package.json")

    assert "filename and folder path search" in readme.lower()
    assert "filename and folder path search" in guide.lower()
    assert "filename and folder path search" in roadmap.lower()
    assert "source_has_filename_path_search_copy" in smoke
    assert "<version>0.1.0-alpha.156</version>" in info
    assert '"version": "0.1.0-alpha.156"' in package
