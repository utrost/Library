from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_current_user_docs_describe_alpha168_workflow():
    guide = (ROOT / "docs/user-guide.md").read_text()
    for term in ("Suggested updates", "Needs details", "Completeness", "Confidence", "Attention", "Personal", "Folders and scanning", "Metadata and covers", "Import and export", "Diagnostics"):
        assert term in guide
    for obsolete in ("Quick details", "Open full details", "**Read**", "Continue reading", "**Admin tools**", "filter-result batch", "Weak metadata cockpit"):
        assert obsolete not in guide

    current_surfaces = guide.split("## Current app surfaces", 1)[1].split("## Supported file and metadata behaviour", 1)[0]
    everyday_processes = guide.split("## Everyday user processes", 1)[1].split("## Admin processes", 1)[0]
    for current_instructions in (current_surfaces, everyday_processes):
        assert "cover or title" in current_instructions.lower()
        assert "contextual sidebar" in current_instructions
        assert "**Advanced details**" in current_instructions
        assert "Open **Details** from a catalogue card" not in current_instructions
        assert "Use **Details**" not in current_instructions

    roadmap = (ROOT / "docs/roadmap.md").read_text()
    current_baseline = roadmap.split("## Current baseline", 1)[1].split("## Phase 0", 1)[0]
    current_priorities = roadmap.split("## Prioritized v0.1 gap stack", 1)[1].split("## App Store readiness track", 1)[0]
    for current_section in (current_baseline, current_priorities):
        for obsolete in ("Read and Details", "Indexed-file list", "visible indexed-file diagnostics", "weak-metadata cockpit", "filter-result bulk", "current-scanner-conflict results"):
            assert obsolete not in current_section
    for phrase in ("Catalogue", "Review", "Settings", "Suggested updates", "Needs details", "File problems", "Cover problems", "Imported changes", "selected visible items"):
        assert phrase in current_baseline + current_priorities


def test_release_and_manual_docs_name_the_actual_candidate_workflow():
    release = (ROOT / "RELEASE.md").read_text()
    handbook = (ROOT / "docs/human-test-handbook.md").read_text()
    checklist = (ROOT / "docs/alpha-test-checklist.md").read_text()
    assert "Alpha.171 unsigned package candidate" in release
    assert "safe-diagnostic live reflection" in release
    assert "visible search" in handbook and "selection-gated batch" in handbook
    assert "**Open**" in checklist and "**Read**" not in checklist


def test_alpha168_docs_keep_landed_data_and_scan_contracts_current():
    current = "\n".join(
        (ROOT / path).read_text()
        for path in (
            "README.md",
            "CHANGELOG.md",
            "docs/current-state-and-risk-register.md",
            "docs/metadata-storage.md",
        )
    )

    for phrase in (
        "server-backed Home",
        "Shelves",
        "ISBN/ISSN",
        "normalized exact search",
        "identifier joins",
        "OPF sidecars",
        "per-root publication counts",
        "cooperative cancellation",
        "heartbeat",
        "current path",
        "without being destructively changed to failed",
    ):
        assert phrase in current

    operative = (ROOT / "RELEASE.md").read_text().split("## Alpha.165 legacy", 1)[0]
    assert "0.1.0-alpha.172" in operative
    assert "0.1.0-alpha.167" not in operative


def test_handbook_has_executable_combined_alpha166_alpha167_first_pass():
    handbook = (ROOT / "docs/human-test-handbook.md").read_text()
    first_pass = handbook.split("## Alpha.166/167 executable first pass", 1)[1].split("## Session header template", 1)[0]

    assert "current candidate package" in handbook
    assert "Packaging: **used for the current private deployment**" in handbook
    assert "exact unsigned `dist/library-0.1.0-alpha.172.tar.gz` package is installed" in handbook
    assert first_pass.count("### A16") >= 6
    for case in first_pass.split("### A16")[1:]:
        assert "Setup:" in case
        assert "Steps:" in case
        assert "Expected result:" in case
        assert "Failure evidence:" in case
    for phrase in (
        "mixed-direction and RTL",
        "desktop complementary sidebar",
        "mobile modal",
        "manual AT matrix",
        "visible Search",
        "grouped **Filters** trigger",
        "malformed-ID",
        "exactly five Review groups",
        "Completeness, Confidence, Attention, and Personal",
        "exactly four Settings sections",
        "collapsed scan history",
    ):
        assert phrase in first_pass

    selected_batch = first_pass.split("### A167-02", 1)[1].split("### A167-03", 1)[0]
    for rejected in ("absent", "empty", "scalar", "malformed", "mixed-invalid", "duplicate", "non-positive", "oversized"):
        assert rejected in selected_batch
    assert "rejected before mutation" in selected_batch
    assert "syntactically valid selection" in selected_batch
    assert "unowned/nonexistent IDs are ownership-filtered" in selected_batch
    assert "valid owned selected IDs may proceed" in selected_batch
    assert "selected A/B" in selected_batch and "visible C" in selected_batch
    assert "entire request is explicitly rejected" not in selected_batch
    assert "nonexistent, and unowned selections all fail closed" not in selected_batch
    assert "successful no-op" not in selected_batch
    assert "no mutation" in selected_batch
    assert "security/runtime check" in selected_batch
