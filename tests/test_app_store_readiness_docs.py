from pathlib import Path
import xml.etree.ElementTree as ET

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
        "appinfo/database.xml",
        "lib/AppInfo/Application.php",
        "templates/main.php",
        "js/library-main-{re.sub",
        "css/library-vue-{re.sub",
        "README.md",
        "LICENSE",
        "CHANGELOG.md",
    ]:
        assert required in audit_script

    assert "frontend manifest" in release


def test_database_xml_app_store_schema_is_documented_and_packaged():
    database_xml = read("appinfo/database.xml")
    audit_script = read("scripts/audit-release-package.sh")
    release = read("RELEASE.md")
    readiness = read("docs/app-store-readiness.md")

    assert "https://apps.nextcloud.com/schema/apps/database.xsd" in database_xml
    assert "appinfo/database.xml" in audit_script
    assert "appinfo/database.xml" in release
    assert "database.xsd" in release
    assert "appinfo/database.xml" in readiness
    assert "database.xsd" in readiness


def test_app_store_listing_draft_has_reviewer_sections_and_public_scope():
    readme = read("README.md")
    roadmap = read("docs/app-store-readiness.md")
    listing = read("docs/app-store-listing.md")

    assert "[App Store listing draft](docs/app-store-listing.md)" in readme
    assert "[App Store listing draft](app-store-listing.md)" in roadmap

    for heading in [
        "## Short description",
        "## Full description",
        "## Current scope",
        "## Privacy statement",
        "## Support URL",
        "## Screenshot checklist",
        "## Release note draft",
    ]:
        assert heading in listing

    for phrase in [
        "Nextcloud 34 only",
        "does not contact external metadata services",
        "does not provide a built-in reader",
        "no real filenames, private folder names, user names, server names or credentials",
    ]:
        assert phrase in listing


def test_app_store_public_surfaces_do_not_expose_internal_names_or_paths():
    public_surfaces = {
        "README.md": read("README.md"),
        "CHANGELOG.md": read("CHANGELOG.md"),
        "docs/app-store-listing.md": read("docs/app-store-listing.md"),
        "appinfo/info.xml": read("appinfo/info.xml"),
    }
    forbidden = ["Uwe", "Hermes", "Alice", "Bob", "Charlie", "/home/uwe", "utrost@", "assistant"]

    for path, content in public_surfaces.items():
        for term in forbidden:
            assert term not in content, f"{term!r} leaked into {path}"


def test_info_xml_public_metadata_parses_and_stays_nextcloud_34_only():
    info = read("appinfo/info.xml")
    root = ET.fromstring(info)

    author = root.find("author")
    assert author is not None

    assert root.findtext("summary") == "Publication catalogue for files stored in Nextcloud Files"
    assert root.findtext("author") == "Library contributors"
    assert author.attrib == {}
    assert root.findtext("licence") == "AGPL-3.0-or-later"
    assert root.findtext("bugs") == "https://github.com/utrost/Library/issues"
    assert root.findtext("website") == "https://github.com/utrost/Library"
    assert root.findtext("repository") == "https://github.com/utrost/Library"
    assert [category.text for category in root.findall("category")] == ["files", "multimedia"]

    dependency = root.find("dependencies/nextcloud")
    assert dependency is not None
    assert dependency.attrib == {"min-version": "34", "max-version": "34"}


def test_signed_release_workflow_is_documented_and_wired_without_packaging_keys():
    package_script = read("scripts/package-release.sh")
    sign_script = read("scripts/sign-release-package.sh")
    audit_script = read("scripts/audit-release-package.sh")
    release = read("RELEASE.md")
    roadmap = read("docs/app-store-readiness.md")

    assert "--signed" in package_script
    assert "scripts/sign-release-package.sh" in package_script
    assert "NEXTCLOUD_SIGNING_PRIVATE_KEY" in sign_script
    assert "NEXTCLOUD_SIGNING_CERTIFICATE" in sign_script
    assert "integrity:sign-app" in sign_script
    assert "appinfo/signature.json" in sign_script
    assert "rm -rf" in sign_script
    assert "--require-signature" in audit_script
    assert "stable releases require `appinfo/signature.json`" in release
    assert "npm run package:release -- --signed" in release
    assert "NEXTCLOUD_SIGNING_PRIVATE_KEY" in roadmap

    for private_key_pattern in [
        "private.key",
        "signing.key",
        "*.key",
        "*.pem",
    ]:
        assert private_key_pattern in audit_script


def test_stable_package_audit_requires_signature_while_alpha_allows_unsigned():
    audit_script = read("scripts/audit-release-package.sh")

    assert "require_signature = explicit_require_signature or '-' not in version" in audit_script
    assert "missing required signed release entry" in audit_script
    assert "unsigned_alpha_package=true" in audit_script


def test_app_store_archive_top_folder_matches_app_id_guideline():
    package_script = read("scripts/package-release.sh")
    audit_script = read("scripts/audit-release-package.sh")
    smoke_script = read("scripts/smoke-release-package.sh")
    release = read("RELEASE.md")
    readiness = read("docs/app-store-readiness.md")

    assert 'STAGE_DIR="$DIST_DIR/$APP_ID"' in package_script
    assert 'create-reproducible-archive.sh' in package_script
    assert 'TOP="$APP_ID"' in audit_script
    assert 'one `library/` directory' in release
    assert 'must match the app id `library`' in readiness
    assert 'mv /var/www/html/custom_apps/library-' not in smoke_script
    assert 'mv /var/www/html/custom_apps/library-' not in release


def test_nextcloud_app_store_guideline_steps_are_captured_for_submission():
    release = read("RELEASE.md")
    readiness = read("docs/app-store-readiness.md")

    for text in [release, readiness]:
        assert "~/.nextcloud/certificates/library.key" in text
        assert "~/.nextcloud/certificates/library.csr" in text
        assert "~/.nextcloud/certificates/library.crt" in text
        assert "openssl req -nodes -newkey rsa:4096" in text
        assert "echo -n \"library\" | openssl dgst -sha512 -sign" in text
        assert "openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key dist/library-0.1.0-alpha.160.tar.gz" in text
        assert "App metadata is read from `appinfo/info.xml` and `CHANGELOG.md`" in text
