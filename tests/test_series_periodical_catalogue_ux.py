from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_accepts_publication_filter_and_provides_publication_facets():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'publication' => trim((string)$this->request->getParam('publication', ''))" in page
    assert "'publications' => $catalogue['facets']['publications']" in page
    assert "facets' => ['shelves' => [], 'formats' => [], 'scanStatuses' => ['indexed', 'metadata_error', 'missing'], 'workflowStatuses' => [], 'genres' => [], 'classifications' => [], 'publications' => [], 'publicationSummaries' => [], 'publicationYears' => [], 'creators' => []]" in page


def test_item_service_filters_and_sorts_by_publication_series_periodical_title():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "publication?:string" in service
    assert "publications:array<int, string>" in service
    assert "'publications' => $this->distinctCatalogueValues($userId, 'i.publication', 'publication')" in service
    assert "$publication = trim((string)($filters['publication'] ?? ''));" in service
    assert "$qb->expr()->eq('i.publication', $qb->createNamedParameter($publication))" in service
    assert "'publication' => $qb->orderBy('i.publication', 'ASC')->addOrderBy('i.publication_date', 'DESC')->addOrderBy('i.title', 'ASC')" in service


def test_vue_catalogue_exposes_series_periodical_filter_and_metadata_on_cards():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "const publications = computed(() => catalogueState.publications || [])" in vue
    assert "publication: catalogueState.activeFilters?.publication || ''" in vue
    assert "Series / periodical" in vue
    assert "name=\"publication\"" in vue
    assert "All series and periodicals" in vue
    assert "v-for=\"publication in publications\"" in vue
    assert "item.publication" in vue
    assert "item.publicationDate" in vue
    assert "<option value=\"publication\">" in vue


def test_smoke_requires_series_periodical_filter_contract():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "state_has_publications" in smoke
    assert "source_has_series_periodical_filter" in smoke
    assert "source_has_publication_sort" in smoke
    assert "Series / periodical" in smoke
    assert "All series and periodicals" in smoke


def test_docs_pivot_priority_from_import_export_to_series_periodical_ux():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Series and periodicals UX is the next common-use priority" in roadmap
    assert "Publication contents read-only issue/date grouping has landed on publication landing pages" in roadmap
    assert "Built-in useful views now cover daily destinations and cleanup queues" in roadmap
    assert "the next discovery layer is richer issue grouping" in roadmap
    assert "filter by series or periodical title" in guide.lower()
    assert "magazines, journals and recurring publications" in guide.lower()
