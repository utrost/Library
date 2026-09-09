from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_service_exposes_publication_issue_context_summary():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function publicationIssueContext(string $userId, string $publication): array" in service
    assert "itemCount:int,datedCount:int,undatedCount:int,earliestYear:string,latestYear:string" in service
    assert "private function publicationIssueRows" in service
    assert "private function buildPublicationIssueGroups" in service
    assert "issueGroups" in service
    assert "gapRanges" in service
    assert "unknownIssueItems" in service
    assert "f.scan_status" in service
    assert "sidecar" in service


def test_publication_discovery_page_provides_issue_context_initial_state():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'publicationIssueContext' => $this->enrichPublicationIssueContextForVue($this->itemService->publicationIssueContext($userId, $publication))" in controller
    assert "private function enrichPublicationIssueContextForVue" in controller
    assert "'detailsUrl'" in controller
    assert "'publicationIssueContext' => null" in controller


def test_vue_renders_publication_issue_context_on_publication_landing_page():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "const publicationIssueContext = computed(() => catalogueState.publicationIssueContext || null)" in vue
    assert "library-publication-issue-context" in vue
    assert "Publication contents" in vue
    assert "issue/date coverage" in vue
    assert "publicationIssueContext.itemCount" in vue
    assert "publicationIssueContext.earliestYear" in vue
    assert "publicationIssueContext.latestYear" in vue


def test_smoke_and_docs_track_publication_issue_context_slice():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "publication_issue_context" in smoke
    assert "publication_issue_grouping" in smoke
    assert "source_has_publication_issue_context" in smoke
    assert "publication issue/date context" in roadmap.lower() or "read-only issue/date grouping" in roadmap.lower()
    assert "publication contents" in guide.lower()
