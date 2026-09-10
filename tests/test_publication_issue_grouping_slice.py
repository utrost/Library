from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_publication_issue_context_returns_read_only_issue_groups_and_unknown_bucket():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "issueGroups:array" in service
    assert "unknownIssueItems:array" in service
    assert "gapRanges:array" in service
    assert "private function publicationIssueRows" in service
    assert "private function deriveIssueSequence" in service
    assert "private function deriveVolumeLabel" in service
    assert "private function buildPublicationIssueGroups" in service
    assert "Unknown issue/date" in service
    assert "monthLabel" in service


def test_publication_pages_use_stable_issue_order_without_hiding_unknowns():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "'sort' => 'publicationIssue'" in controller
    assert "'publicationIssue' => $qb->orderBy('i.publication_date', 'ASC')" in service
    assert "CASE WHEN i.publication_date IS NULL OR i.publication_date = '' THEN 1 ELSE 0 END" in service
    assert "unknown issue/date rows remain visible" in service.lower()


def test_vue_publication_page_renders_grouped_contents_for_comics_and_periodicals():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "library-publication-issue-groups" in vue
    assert "publicationIssueContext.issueGroups" in vue
    assert "publicationIssueContext.unknownIssueItems" in vue
    assert "publicationIssueContext.gapRanges" in vue
    assert "Issue order" in vue
    assert "Unknown issue/date" in vue
    assert "Gap" in vue
    assert "Next issue" in vue
    assert "Previous issue" in vue
    assert "read-only grouping" in vue


def test_docs_track_landed_publication_issue_grouping_slice():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    feature_list = (ROOT / "docs" / "usefulness-and-ux-feature-list.md").read_text()

    for text in [readme, guide, roadmap, feature_list]:
        assert "read-only issue/date grouping" in text.lower()
        assert "unknown issue/date" in text.lower()

    assert "richer publication issue grouping remain future work" not in guide
    assert "richer issue grouping" in roadmap.lower()
