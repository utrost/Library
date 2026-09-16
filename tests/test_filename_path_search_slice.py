from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_catalogue_text_search_includes_cached_filename_and_folder_path():
    service = read("lib/Service/ItemService.php")
    search_document = service.split("private function searchDocumentForRow", 1)[1].split("private function searchGramsForText", 1)[0]

    assert "cached_path" in search_document
    assert "searchGramCandidateIds" in service


def test_vue_search_copy_explains_filename_and_folder_search():
    app = read("src/App.vue")

    assert "Title, creator, description, filename or folder" in app
    assert "Descriptions, filename and folder names are searchable" in app


def test_docs_and_smoke_track_filename_path_search_as_landed():
    readme = read("docs/user-guide.md")
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    smoke = read("scripts/smoke-vue-page.mjs")
    info = read("appinfo/info.xml")
    package = read("package.json")

    assert "filename and folder names" in readme.lower()
    assert "filename and folder names" in guide.lower()
    assert "filename and folder names" in roadmap.lower()
    assert "source_has_primary_catalogue_controls" in smoke
    assert "backend_searches_description" in smoke
    assert "<version>0.1.0-alpha.171</version>" in info
    assert '"version": "0.1.0-alpha.171"' in package
