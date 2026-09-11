from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
README = ROOT / "README.md"


def test_readme_is_public_one_page_overview_without_internal_names():
    readme = README.read_text()
    lines = readme.splitlines()

    assert len(lines) <= 92
    assert "# Library" in readme
    assert "open-source Nextcloud app" in readme
    assert "Nextcloud Files remains the canonical storage" in readme
    assert "Current source candidate: `0.1.0-alpha.165`" in readme

    internal_names = ["Uwe", "Hermes", "Alice", "/home/uwe"]
    for name in internal_names:
        assert name not in readme


def test_readme_is_external_user_facing_not_a_full_implementation_log():
    readme = README.read_text()

    assert "## What it does" in readme
    assert "## Current scope" in readme
    assert "## Try it" in readme
    assert "## More documentation" in readme
    assert "The current development slice can:" not in readme
    assert "Current status" not in readme
    assert "The first integration target" not in readme


def test_readme_keeps_public_entry_links():
    readme = README.read_text()

    for link in [
        "[User and admin guide](docs/user-guide.md)",
        "[Human test handbook](docs/human-test-handbook.md)",
        "[Public alpha test checklist](docs/alpha-test-checklist.md)",
        "[Current state and risk register](docs/current-state-and-risk-register.md)",
        "[Release process](RELEASE.md)",
        "[Changelog](CHANGELOG.md)",
    ]:
        assert link in readme


def test_packaged_readme_does_not_embed_the_current_archive_checksum():
    readme = README.read_text(encoding="utf-8")
    checksum_file = ROOT / "dist/library-0.1.0-alpha.165.tar.gz.sha256"

    assert "adjacent `.sha256` artifact" in readme
    assert "excluded `RELEASE.md`" in readme
    assert re.search(r"archive SHA-256 is [` ]*[0-9a-f]{64}", readme, re.IGNORECASE) is None
    if checksum_file.exists():
        current_checksum = checksum_file.read_text(encoding="utf-8").split()[0]
        assert current_checksum not in readme
