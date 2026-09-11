from pathlib import Path
import re
import subprocess


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_package_checksum_is_portable_private_and_runtime_tests_cannot_be_bypassed():
    script = read("scripts/package-release.sh")

    python_tests = script.index("python -m pytest -q")
    runtime_tests = script.index("./scripts/run-php-runtime-tests.sh")
    staging = script.index('rm -rf "$STAGE_DIR"')
    assert python_tests < runtime_tests < staging

    assert 'ARCHIVE_BASENAME="${APP_ID}-${VERSION}.tar.gz"' in script
    assert 'sha256sum "$ARCHIVE_BASENAME" > "$ARCHIVE_BASENAME.sha256"' in script
    assert 'sha256sum "$ARCHIVE" > "$ARCHIVE.sha256"' not in script


def test_basename_checksum_verifies_from_any_checkout_path(tmp_path: Path):
    dist = tmp_path / "checkout with spaces" / "dist"
    dist.mkdir(parents=True)
    archive = dist / "library-0.1.0-alpha.157.tar.gz"
    archive.write_bytes(b"deterministic checksum fixture\n")

    subprocess.run(
        ["bash", "-c", 'cd "$1" && sha256sum "$2" > "$2.sha256"', "bash", str(dist), archive.name],
        check=True,
    )
    checksum = (dist / f"{archive.name}.sha256").read_text(encoding="utf-8")
    assert checksum.split(maxsplit=1)[1].strip() == archive.name
    assert str(dist) not in checksum
    subprocess.run(
        ["bash", "-c", 'cd "$1" && sha256sum -c "$2.sha256"', "bash", str(dist), archive.name],
        check=True,
    )


def test_checksum_verification_commands_run_inside_dist_with_basename():
    smoke = read("scripts/smoke-release-package.sh")
    release = read("RELEASE.md")

    assert '(cd "$DIST_DIR" && sha256sum -c "$CHECKSUM_BASENAME")' in smoke
    assert "(cd dist && sha256sum -c library-0.1.0-alpha.157.tar.gz.sha256)" in release
    assert "sha256sum -c dist/" not in release


def test_smoke_evidence_names_observation_changes_without_claiming_source_writes():
    evidence_files = [ROOT / "scripts" / "smoke-unchanged-fast-path.sh"]
    evidence_files.extend(ROOT.glob("*.md"))
    evidence_files.extend((ROOT / "docs").glob("*.md"))
    combined = "\n".join(path.read_text(encoding="utf-8") for path in evidence_files)

    assert "source_observation_changes" in combined
    assert "source_writes" not in combined
    assert not re.search(r"source writes?\s+(?:remained|stayed|were|was|equalled|=)\s+(?:0|zero)\b", combined, re.I)
    assert not re.search(r"\b(?:0|zero)\s+source writes?\b", combined, re.I)
    assert "$sourceObservationChanges === 0" in read("scripts/smoke-unchanged-fast-path.sh")
    assert "path/ETag/mtime/size/MIME observations" in combined
