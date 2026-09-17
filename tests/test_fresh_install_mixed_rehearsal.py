from pathlib import Path
import hashlib
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def tree_hash(root: Path) -> str:
    digest = hashlib.sha256()
    for path in sorted(candidate for candidate in root.rglob("*") if candidate.is_file()):
        digest.update(path.relative_to(root).as_posix().encode())
        digest.update(b"\0")
        digest.update(path.read_bytes())
    return digest.hexdigest()


def test_disposable_nc34_mixed_rehearsal_is_wired_and_fail_closed():
    package = (ROOT / "package.json").read_text(encoding="utf-8")
    script = (ROOT / "scripts" / "smoke-fresh-install-mixed.sh").read_text(encoding="utf-8")

    assert '"smoke:fresh-install-mixed": "bash scripts/smoke-fresh-install-mixed.sh"' in package
    assert "nextcloud@sha256:" in script
    assert "maintenance:install" in script
    assert "package:release" in script
    assert "sha256sum -c" in script
    assert "physical_table_count=8" in script
    assert "migration_count=" in script
    assert "selected_formats=" in script
    assert "source_tree_unchanged=true" in script
    assert "scanned_tree_unchanged=true" in script
    assert "CONTAINER_CREATED=0" in script
    assert '[[ "$CONTAINER_CREATED" == 1 ]]' in script
    assert "container name already exists" in script
    assert "catalogue_temp_token_remaining=0" in script
    assert "real_scale_temp_token_remaining=0" in script
    assert "vue_temp_token_remaining=0" in script
    assert "browser_temp_token_remaining=0" in script
    assert "LIBRARY_BROWSER_EXPECTED_CARDS=100" in script
    assert "smoke:catalogue-performance" in script
    assert "smoke:vue" in script
    assert "smoke:sidebar-http" in script
    assert "LIBRARY_BROWSER_SMOKE_BASIC=1" in script
    assert "fresh_install_mixed_smoke_ok=true" in script
    assert "trap cleanup EXIT" in script


def test_mixed_fixture_generator_builds_balanced_publication_formats(tmp_path):
    generator = ROOT / "scripts" / "generate-mixed-publications.py"
    assert generator.exists()

    import subprocess

    result = subprocess.run(
        ["python3", str(generator), str(tmp_path), "8"],
        check=True,
        capture_output=True,
        text=True,
    )
    assert "fixture_count=8" in result.stdout
    assert "fixture_formats={\"cbz\":2,\"epub\":2,\"opf\":2,\"pdf\":2}" in result.stdout
    assert sorted(path.suffix for path in tmp_path.iterdir()) == [
        ".cbz", ".cbz", ".epub", ".epub", ".opf", ".opf", ".pdf", ".pdf"
    ]


def test_mixed_fixture_generator_is_byte_deterministic(tmp_path):
    generator = ROOT / "scripts" / "generate-mixed-publications.py"
    first = tmp_path / "first"
    second = tmp_path / "second"
    subprocess.run(["python3", str(generator), str(first), "8"], check=True)
    subprocess.run(["python3", str(generator), str(second), "8"], check=True)

    assert tree_hash(first) == tree_hash(second)


def test_rehearsal_harness_checks_complete_responses_sidebar_and_cleanup():
    performance = (ROOT / "scripts" / "smoke-catalogue-performance.mjs").read_text()
    browser = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    scale = (ROOT / "scripts" / "smoke-real-scale-pilot.mjs").read_text()
    vue = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert performance.index("await response.json()") < performance.index("const elapsedSeconds")
    assert "basic.cards !== expectedBasicCards" in browser
    assert "browser_basic_sidebar_opened" in browser
    assert "browser_basic_sidebar_rendered" in browser
    assert "browser_basic_sidebar_closed" in browser
    assert "scanned_tree_sha256_before" in scale
    assert "scanned_tree_sha256_after" in scale
    assert "real_scale_temp_token_remaining" in scale and "process.exitCode = 1" in scale
    assert "browser_temp_token_remaining" in browser
    assert "vue_temp_token_remaining" in vue


def test_install_faq_and_first_scan_walkthrough_are_linked():
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    guide = (ROOT / "docs" / "user-guide.md").read_text(encoding="utf-8")
    faq = (ROOT / "docs" / "faq.md").read_text(encoding="utf-8")

    assert "## Install" in readme
    assert "[FAQ and troubleshooting](docs/faq.md)" in readme
    assert "## Fresh install and first scan" in guide
    assert "[FAQ and troubleshooting](faq.md)" in guide
    assert "# FAQ and troubleshooting" in faq
    assert "How do I install Library?" in faq
    assert "Why is my first scan still queued?" in faq
    assert "Does Library change or delete my source files?" in faq
