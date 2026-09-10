from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def test_app_store_readiness_roadmap_is_linked_and_sliced():
    readme = read("README.md")
    roadmap = read("docs/roadmap.md")
    app_store = read("docs/app-store-readiness.md")

    assert "[App Store readiness roadmap](docs/app-store-readiness.md)" in readme
    assert "[App Store readiness roadmap](app-store-readiness.md)" in roadmap
    assert "# App Store readiness roadmap" in app_store
    assert "Nextcloud 34" in app_store

    for slice_id in ["AS-001", "AS-002", "AS-003", "AS-004", "AS-005"]:
        assert slice_id in app_store
        assert slice_id in roadmap


def test_app_store_readiness_defines_signing_listing_and_stable_submission():
    app_store = read("docs/app-store-readiness.md")

    for phrase in [
        "appinfo/signature.json",
        "Signing certificate",
        "App Store listing",
        "privacy statement",
        "support URL",
        "screenshot",
        "Stable `0.1.0` App Store submission",
        "blocked on external certificate request",
    ]:
        assert phrase in app_store


def test_release_package_hygiene_script_rejects_dev_only_paths():
    package_script = read("scripts/package-release.sh")
    audit_script = read("scripts/audit-release-package.sh")
    package_json = read("package.json")
    release = read("RELEASE.md")

    assert "bash \"$ROOT/scripts/audit-release-package.sh\" \"$VERSION\"" in package_script
    assert '"audit:release-package": "bash scripts/audit-release-package.sh"' in package_json
    assert "release_package_audit_ok=true" in audit_script
    assert "npm run audit:release-package" in release

    for forbidden in [
        "--exclude=tests",
        "--exclude=scripts",
        "--exclude=src",
        "--exclude=docs",
        "--exclude=package.json",
        "--exclude=package-lock.json",
        "--exclude=RELEASE.md",
        "--exclude=vite.config.js",
    ]:
        assert forbidden in package_script

    for forbidden in [
        '"tests"',
        '"scripts"',
        '"src"',
        '"node_modules"',
        '"build"',
        '"dist"',
        '"package.json"',
        '"package-lock.json"',
        '"RELEASE.md"',
        '"vite.config.js"',
    ]:
        assert forbidden in audit_script


def test_app_store_package_hygiene_keeps_minimal_public_files():
    audit_script = read("scripts/audit-release-package.sh")
    release = read("RELEASE.md")

    for required in [
        "appinfo/info.xml",
        "lib/AppInfo/Application.php",
        "templates/main.php",
        "js/library-main.mjs",
        "css/library-vue.css",
        "README.md",
        "LICENSE",
        "CHANGELOG.md",
    ]:
        assert required in audit_script

    assert "minimal public files: `README.md`, `LICENSE`, and `CHANGELOG.md`" in release
