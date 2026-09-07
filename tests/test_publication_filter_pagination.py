from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_pagination_preserves_publication_filter():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'publication' => trim((string)$this->request->getParam('publication', ''))" in controller
    assert "foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'workflowStatus', 'genre', 'classification', 'starred', 'sort'] as $param)" in controller
    assert "@param array{q:string,type:string,publication:string,year:string,creator:string,tag:string,shelf:string,format:string,status:string,workflowStatus:string,genre:string,classification:string,starred:string,sort:string}" in controller


def test_smoke_requires_publication_filter_pagination_marker():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "publication_filter_pagination_preserved" in smoke
    assert "publication=__library_smoke_publication__" in smoke
