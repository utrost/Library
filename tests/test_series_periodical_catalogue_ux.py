from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_accepts_publication_filter_and_provides_publication_facets():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'publication' => trim((string)$this->request->getParam('publication', ''))" in page
    assert "'publications' => $catalogue['facets']['publications']" in page
    assert "'publications' => []" in page


def test_item_service_filters_and_sorts_by_publication_series_periodical_title():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "publication?:string" in service
    assert "publications:array<int, string>" in service
    assert "'publications' => $this->distinctCatalogueValues($userId, $facetFilters['publications'], 'i.publication', 'publication', self::PUBLICATION_FACET_LIMIT)" in service
    assert "$publication = trim((string)($filters['publication'] ?? ''));" in service
    assert "$qb->expr()->eq('i.publication', $qb->createNamedParameter($publication))" in service
    assert "'publication' => $qb->orderBy('i.publication', 'ASC')->addOrderBy('i.publication_date', 'DESC')->addOrderBy('i.title', 'ASC')" in service


def test_vue_catalogue_exposes_series_periodical_filter_and_metadata_on_cards():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "const publications = computed(() => catalogueState.publications || [])" in vue
    assert "publication: catalogueState.activeFilters?.publication || ''" in vue
    assert "Series / periodical" in vue
    assert 'name="publicationSearch"' in vue
    assert 'type="hidden" name="publication"' in vue
    assert 'select name="publication"' not in vue
    assert "PUBLICATION_SUGGESTION_LIMIT = 20" in vue
    assert "selectedDrawerItem.publication" in vue
    assert "selectedDrawerItem.publicationDate" in vue
    assert "<option value=\"publication\">" in vue


def test_publication_facet_payload_has_a_named_server_side_limit():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "private const PUBLICATION_FACET_LIMIT = 100;" in service
    assert "'publication', self::PUBLICATION_FACET_LIMIT" in service
    assert "?int $limit = null" in service
    assert "->setMaxResults($limit)" in service


def test_smoke_requires_series_periodical_filter_contract():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "state_has_publications" in smoke
    assert "source_has_series_periodical_filter" in smoke
    assert "source_has_publication_sort" in smoke
    assert "Series / periodical" in smoke
    assert "publicationSearch" in smoke


def test_docs_pivot_priority_from_import_export_to_series_periodical_ux():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "Series and periodicals UX is the next common-use priority" in roadmap
    assert "Publication contents read-only issue/date grouping has landed on publication landing pages" in roadmap
    assert "Built-in useful views now cover daily destinations and cleanup queues" in roadmap
    assert "the next discovery layer is richer issue grouping" in roadmap
    assert "filter by series or periodical title" in guide.lower()
    assert "magazines, journals and recurring publications" in guide.lower()
