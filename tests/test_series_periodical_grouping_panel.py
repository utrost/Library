from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_service_provides_top_publication_summaries_with_counts():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "publicationSummaries:array<int, array{publication:string,itemCount:int}>" in service
    assert "'publicationSummaries' => $this->topPublicationSummaries($userId)" in service
    assert "private function topPublicationSummaries(string $userId): array" in service
    assert "COUNT(*)" in service
    assert "item_count" in service
    assert "->orderBy('item_count', 'DESC')" in service
    assert "->setMaxResults(12)" in service
    assert "'publicationSummaries' => array_map(function (array $summary): array" in controller
    assert "'publicationLandingUrl'" in controller


def test_vue_renders_periodicals_panel_with_counts_and_filter_links():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "const publicationSummaries = computed(() => catalogueState.publicationSummaries || [])" in vue
    assert "function publicationFilterUrl(publication)" in vue
    assert "library-periodical-groups" in vue
    assert "Series / periodicals" in vue
    assert "Jump into recurring publications with one click" in vue
    assert "v-for=\"summary in publicationSummaries\"" in vue
    assert ":value=\"publicationLandingUrl(summary.publication)\"" in vue
    assert "summary.itemCount" in vue
    assert "items" in vue


def test_smoke_requires_periodical_grouping_panel_contract():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "state_has_publication_summaries" in smoke
    assert "source_has_periodical_groups_panel" in smoke
    assert "library-periodical-groups" in smoke
    assert "Series / periodicals" in smoke


def test_docs_name_series_periodical_grouping_panel_as_landed():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "top series and periodicals panel" in roadmap.lower()
    assert "top series and periodicals" in guide.lower()
    assert "item counts" in guide.lower()
