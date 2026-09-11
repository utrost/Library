from pathlib import Path
import hashlib
import io
import subprocess
import tarfile
import uuid

import pytest


ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def test_alpha_160_packaged_runtime_size_and_checksum_sidecar_stay_consistent():
    current = ROOT / "js/library-main-0-1-0-alpha-163.mjs"
    assert current.read_bytes() == (ROOT / "js/library-main.mjs").read_bytes()
    assert current.stat().st_size <= 2_000_000
    assert not (ROOT / "js/library-main.mjs.map").exists()
    assert "total-package" in read("ALPHA.160-IMPLEMENTATION-REPORT.md")


def test_navigation_urls_are_same_origin_webroot_aware_initial_state():
    controller = read("lib/Controller/PageController.php")

    assert "'catalogueRootUrl' => $catalogueRootUrl" in controller
    assert "'reviewUrl' => $catalogueRootUrl . '?scannerConflicts=1'" in controller
    assert "$catalogueRootUrl = $this->urlGenerator->linkToRoute('library.page.index')" in controller
    assert "getAbsoluteURL($this->urlGenerator->linkToRoute('library.page.index'))" not in controller
    assert "'settingsUrl' => $this->urlGenerator->linkToRoute('settings.PersonalSettings.index', ['section' => 'library'])" in controller
    assert "'scannerConflictReviewUrl' => $catalogueRootUrl . '?scannerConflicts=1'" in controller


def test_nested_discovery_backlink_uses_generated_catalogue_root_in_component_and_browser_smoke():
    app = read("src/App.vue")
    smoke = read("scripts/smoke-browser-page.mjs")

    assert ':href="catalogueRootUrl"' in app
    assert '<a href="/apps/library/"' not in app
    assert "backLinkHref === publicationDiscoveryDom?.nativeLibraryHref" in smoke
    assert "backLinkHref === yearDiscoveryDom?.nativeLibraryHref" in smoke
    assert "backLinkHref === creatorDiscoveryDom?.nativeLibraryHref" in smoke
    assert "document.querySelector('.library-discovery-back-link')" in smoke
    assert 'a[href="/apps/library/"]' not in smoke


def test_browser_smoke_scopes_pages_without_ignoring_fatal_diagnostics():
    smoke = read("scripts/smoke-browser-page.mjs")
    classifier = read("scripts/browser-error-classifier.mjs")

    assert "const libraryPageEventCount = client.events.length" in smoke
    assert "client.events.slice(0, libraryPageEventCount)" in smoke
    assert "client.events.slice(libraryPageEventCount)" in smoke
    assert "classifyBrowserEvent(event).fatal" in smoke
    assert "isLibraryOwnedError" not in smoke
    assert "personalIconOwnership" not in smoke
    assert "'/apps/settings/img/personal.svg'" in classifier
    assert "event.method === 'Runtime.exceptionThrown'" in classifier
    assert "const consoleErrors = [...libraryConsoleErrors, ...settingsConsoleErrors]" in smoke
    assert "rewriteUpstreamOrigin" in smoke
    assert "upstream.replaceAll('/', '\\\\/')" in smoke


def test_vite_defines_nextcloud_vue_app_identity_and_built_bundle_has_no_missing_identity_diagnostics():
    vite = read("vite.config.js")

    assert "appName: JSON.stringify('library')" in vite
    assert "appVersion: JSON.stringify('0.1.0-alpha.163')" in vite

    bundle = read("js/library-main.mjs")
    assert '= "library";' in bundle
    assert '= "0.1.0-alpha.163";' in bundle


def test_settings_footer_does_not_use_component_slot_that_triggers_legacy_cross_origin_icon():
    app = read("src/App.vue")

    assert "<NcAppNavigationSettings" not in app
    assert 'class="library-navigation-settings-link"' in app
    assert ':href="settingsUrl"' in app


def test_vue_uses_only_public_component_subpath_imports_and_controlled_sidebar():
    app = read("src/App.vue")

    assert "from '@nextcloud/vue'" not in app
    for component in (
        "NcContent", "NcAppNavigation", "NcAppNavigationList",
        "NcAppNavigationItem", "NcAppContent",
        "NcAppSidebar",
    ):
        assert f"from '@nextcloud/vue/components/{component}'" in app
    assert ':open="sidebarOpen"' in app
    assert '@close="closeDetailsDrawer"' in app


def test_build_has_deterministic_bundle_budget_and_dependency_closure_gate():
    build = read("scripts/build-vue.mjs")
    package = read("package.json")

    assert "MAX_RUNTIME_CHUNKS" in build
    assert "MAX_RUNTIME_BYTES" in build
    assert "validate-module-closure.mjs" in build
    assert '"test:bundle":' in package


def run_validator(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["node", str(ROOT / "scripts/validate-module-closure.mjs"), *args],
        cwd=ROOT,
        text=True,
        capture_output=True,
    )


def test_module_closure_validator_recurses_static_and_dynamic_imports(tmp_path: Path):
    js = tmp_path / "js"
    js.mkdir()
    (js / "entry.mjs").write_text("import './static.chunk.mjs'; import('./dynamic.chunk.mjs')", encoding="utf-8")
    (js / "static.chunk.mjs").write_text("export { value } from './nested.chunk.mjs'", encoding="utf-8")
    (js / "nested.chunk.mjs").write_text("export const value = 1", encoding="utf-8")

    missing = run_validator("--directory", str(js), "--entry", "entry.mjs")
    assert missing.returncode != 0
    assert "dynamic.chunk.mjs" in missing.stderr

    (js / "dynamic.chunk.mjs").write_text("export default 1", encoding="utf-8")
    valid = run_validator("--directory", str(js), "--entry", "entry.mjs")
    assert valid.returncode == 0, valid.stderr
    assert "module_closure_count=4" in valid.stdout


def test_module_closure_validator_rejects_missing_dynamic_import_with_options_and_comments(tmp_path: Path):
    js = tmp_path / "js"
    js.mkdir()
    (js / "entry.mjs").write_text(
        "import( /* chunk selected at runtime */ './missing.chunk.mjs' /* attributes */, { with: { type: 'json' } })",
        encoding="utf-8",
    )

    missing = run_validator("--directory", str(js), "--entry", "entry.mjs")
    assert missing.returncode != 0
    assert "missing.chunk.mjs" in missing.stderr


def test_module_closure_validator_fails_closed_on_parse_errors(tmp_path: Path):
    js = tmp_path / "js"
    js.mkdir()
    (js / "entry.mjs").write_text("import './dependency.chunk.mjs' }", encoding="utf-8")
    (js / "dependency.chunk.mjs").write_text("export default 1", encoding="utf-8")

    invalid = run_validator("--directory", str(js), "--entry", "entry.mjs")
    assert invalid.returncode != 0
    assert "Could not parse module" in invalid.stderr


def test_archive_validator_reads_module_at_declared_runtime_budget(tmp_path: Path):
    package_root = tmp_path / "library"
    js = package_root / "js"
    js.mkdir(parents=True)
    prefix = "import( /* options */ './used.chunk.mjs', { with: { type: 'json' } });\n"
    (js / "entry.mjs").write_text(prefix + (" " * (2_000_000 - len(prefix))), encoding="utf-8")
    (js / "used.chunk.mjs").write_text("export default 1", encoding="utf-8")
    archive = tmp_path / "library.tar.gz"
    with tarfile.open(archive, "w:gz") as tar:
        tar.add(package_root, arcname="library")

    valid = run_validator("--archive", str(archive), "--entry", "library/js/entry.mjs")
    assert valid.returncode == 0, valid.stderr
    assert "module_closure_count=2" in valid.stdout


def test_module_closure_validator_rejects_orphan_chunks_and_checks_archive(tmp_path: Path):
    package_root = tmp_path / "library"
    js = package_root / "js"
    js.mkdir(parents=True)
    (js / "entry.mjs").write_text("import './used.chunk.mjs'", encoding="utf-8")
    (js / "used.chunk.mjs").write_text("export default 1", encoding="utf-8")
    (js / "orphan.chunk.mjs").write_text("export default 2", encoding="utf-8")

    orphan = run_validator("--directory", str(js), "--entry", "entry.mjs", "--reject-orphans")
    assert orphan.returncode != 0
    assert "orphan.chunk.mjs" in orphan.stderr

    (js / "orphan.chunk.mjs").unlink()
    archive = tmp_path / "library.tar.gz"
    with tarfile.open(archive, "w:gz") as tar:
        tar.add(package_root, arcname="library")
    valid = run_validator("--archive", str(archive), "--entry", "library/js/entry.mjs", "--reject-orphans")
    assert valid.returncode == 0, valid.stderr


def test_module_closure_validator_recursively_rejects_nested_directory_orphans(tmp_path: Path):
    js = tmp_path / "js"
    nested = js / "lazy" / "deeper"
    nested.mkdir(parents=True)
    (js / "entry.mjs").write_text("export default 1", encoding="utf-8")
    (nested / "orphan.chunk.mjs").write_text("export default 2", encoding="utf-8")

    orphan = run_validator("--directory", str(js), "--entry", "entry.mjs", "--reject-orphans")
    assert orphan.returncode != 0
    assert "lazy/deeper/orphan.chunk.mjs" in orphan.stderr


def test_module_closure_validator_recursively_rejects_nested_archive_orphans(tmp_path: Path):
    package_root = tmp_path / "library"
    nested = package_root / "js" / "lazy" / "deeper"
    nested.mkdir(parents=True)
    (package_root / "js" / "entry.mjs").write_text("export default 1", encoding="utf-8")
    (nested / "orphan.chunk.mjs").write_text("export default 2", encoding="utf-8")
    archive = tmp_path / "library.tar.gz"
    with tarfile.open(archive, "w:gz") as tar:
        tar.add(package_root, arcname="library")

    orphan = run_validator("--archive", str(archive), "--entry", "library/js/entry.mjs", "--reject-orphans")
    assert orphan.returncode != 0
    assert "library/js/lazy/deeper/orphan.chunk.mjs" in orphan.stderr


def _release_archive(version: str, extra_names: list[str]) -> Path:
    archive = ROOT / "dist" / f"library-{version}.tar.gz"
    archive.parent.mkdir(exist_ok=True)
    required = [
        "appinfo/info.xml", "appinfo/database.xml", "appinfo/routes.php",
        "lib/AppInfo/Application.php", "templates/main.php",
        "README.md", "LICENSE", "CHANGELOG.md", "css/style.css",
        "js/library-detail.js", "js/library-shell.js", "js/scan-progress.js",
    ]
    entry = f"js/library-main-{version.replace('.', '-').replace('+', '-')}.mjs"
    css_entry = f"css/library-vue-{version.replace('.', '-').replace('+', '-')}.css"
    with tarfile.open(archive, "w:gz") as tar:
        names = [*(f"library/{name}" for name in required), f"library/{entry}", f"library/{css_entry}", *extra_names]
        for name in names:
            info = tarfile.TarInfo(name)
            content = b"export default 1" if info.name.endswith(".mjs") else b"fixture"
            info.size = len(content)
            tar.addfile(info, io.BytesIO(content))
    return archive


@pytest.mark.parametrize("unsafe_name", [
    "library/../outside.txt",
    "library/./README.md",
    "/library/absolute.txt",
    r"library\windows.txt",
    r"C:\library\drive.txt",
    "library//ambiguous.txt",
])
def test_release_audit_rejects_unsafe_or_noncanonical_archive_names(unsafe_name: str):
    version = f"0.1.0-alpha.163-adversarial-{uuid.uuid4().hex}"
    archive = _release_archive(version, [unsafe_name])
    try:
        result = subprocess.run(
            ["bash", str(ROOT / "scripts/audit-release-package.sh"), version],
            cwd=ROOT, text=True, capture_output=True,
        )
    finally:
        archive.unlink(missing_ok=True)

    assert result.returncode != 0
    assert "release_package_audit_ok=false" in result.stdout
    assert unsafe_name in result.stdout


def test_release_audit_rejects_duplicate_normalized_archive_names():
    version = f"0.1.0-alpha.163-duplicate-{uuid.uuid4().hex}"
    archive = _release_archive(version, ["library/README.md/"])
    try:
        result = subprocess.run(
            ["bash", str(ROOT / "scripts/audit-release-package.sh"), version],
            cwd=ROOT, text=True, capture_output=True,
        )
    finally:
        archive.unlink(missing_ok=True)

    assert result.returncode != 0
    assert "duplicate archive entry" in result.stdout


@pytest.mark.parametrize("required_path", [
    "appinfo/info.xml",
    "templates/main.php",
    "README.md",
])
def test_release_audit_rejects_required_paths_replaced_by_directories(required_path: str):
    version = f"0.1.0-alpha.163-required-directory-{uuid.uuid4().hex}"
    archive = _release_archive(version, [])
    rewritten = archive.with_suffix(".replacement.tar.gz")
    with tarfile.open(archive, "r:gz") as source, tarfile.open(rewritten, "w:gz") as target:
        required_name = f"library/{required_path}"
        for member in source.getmembers():
            if member.name == required_name:
                directory = tarfile.TarInfo(required_name)
                directory.type = tarfile.DIRTYPE
                directory.mode = 0o755
                target.addfile(directory)
            else:
                extracted = source.extractfile(member) if member.isfile() else None
                target.addfile(member, extracted)
    rewritten.replace(archive)
    try:
        result = subprocess.run(
            ["bash", str(ROOT / "scripts/audit-release-package.sh"), version],
            cwd=ROOT, text=True, capture_output=True,
        )
    finally:
        archive.unlink(missing_ok=True)

    assert result.returncode != 0
    assert f"required package entry is not a regular file: library/{required_path}" in result.stdout


def test_release_audit_rejects_unlisted_root_level_files():
    version = f"0.1.0-alpha.163-root-file-{uuid.uuid4().hex}"
    archive = _release_archive(version, ["library/ALPHA.160-IMPLEMENTATION-REPORT.md"])
    try:
        result = subprocess.run(
            ["bash", str(ROOT / "scripts/audit-release-package.sh"), version],
            cwd=ROOT, text=True, capture_output=True,
        )
    finally:
        archive.unlink(missing_ok=True)

    assert result.returncode != 0
    assert "unlisted root-level package file" in result.stdout


@pytest.mark.parametrize("extra", [
    "library/js/nested/stale.mjs",
    "library/js/nested/removed.js",
    "library/css/nested/stale.css",
    "library/css/theme/removed.txt",
])
def test_release_audit_recursively_rejects_every_unlisted_frontend_file(extra: str):
    version = f"0.1.0-alpha.163-nested-frontend-{uuid.uuid4().hex}"
    archive = _release_archive(version, [extra])
    try:
        result = subprocess.run(
            ["bash", str(ROOT / "scripts/audit-release-package.sh"), version],
            cwd=ROOT, text=True, capture_output=True,
        )
    finally:
        archive.unlink(missing_ok=True)

    assert result.returncode != 0
    assert "unlisted frontend package file" in result.stdout
    assert extra in result.stdout


def test_package_staging_excludes_internal_implementation_reports():
    package_script = read("scripts/package-release.sh")
    assert "--exclude='ALPHA.*-IMPLEMENTATION-REPORT.md'" in package_script


def test_module_validator_explains_clean_checkout_dev_dependency_setup(tmp_path: Path):
    scripts = tmp_path / "scripts"
    scripts.mkdir()
    for name in ("validate-module-closure.mjs", "runtime-budget.mjs"):
        (scripts / name).write_text(read(f"scripts/{name}"), encoding="utf-8")
    js = tmp_path / "js"
    js.mkdir()
    (js / "entry.mjs").write_text("export default 1", encoding="utf-8")

    result = subprocess.run(
        ["node", str(scripts / "validate-module-closure.mjs"), "--directory", str(js), "--entry", "entry.mjs"],
        cwd=tmp_path, text=True, capture_output=True,
    )

    assert result.returncode != 0
    assert "@babel/parser" in result.stderr
    assert "npm ci" in result.stderr


def test_release_audit_validates_versioned_entry_module_closure():
    audit = read("scripts/audit-release-package.sh")

    assert "library-main-${VERSION//./-}.mjs" not in audit  # prerelease punctuation needs generic sanitizing
    assert "validate-module-closure.mjs" in audit
    assert "--archive" in audit
    assert "--reject-orphans" in audit


def test_browser_smoke_rechecks_native_shell_on_nested_fixture_routes():
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "inspectDiscoveryRoute" in smoke
    assert "nativeSidebarExternalToggleAbsent" in smoke
    assert "browser_publication_native_shell" in smoke
    assert "browser_year_native_shell" in smoke
    assert "browser_creator_native_shell" in smoke
    assert "failed to fetch dynamically imported module" in read("scripts/browser-error-classifier.mjs").lower()
    assert "skipEvidence: `root catalogue exposed no ${kind} fixture URL`" in smoke


def test_browser_smoke_sidebar_selector_only_rejects_external_reopen_controls():
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "nativeSidebarExternalToggleAbsent" in smoke
    assert "[aria-controls=\"app-sidebar-vue\"]" in smoke
    assert "#app-sidebar-vue button" not in smoke


def test_browser_smoke_requires_proxy_safe_shell_hrefs_on_root_and_nested_routes():
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "nativeHrefsSameOrigin" in smoke
    assert "href.startsWith('/') && !href.startsWith('//')" in smoke
    assert "dom.nativeHrefsSameOrigin === true" in smoke
    for route in ("publicationDiscoveryDom", "yearDiscoveryDom", "creatorDiscoveryDom"):
        assert f"{route}?.nativeHrefsSameOrigin === true" in smoke


@pytest.mark.parametrize("specifier", ["missing-package", "/static/missing.mjs", "https://cdn.invalid/x.mjs"])
@pytest.mark.parametrize("syntax", ["import {q!r}", "export {{ value }} from {q!r}", "import({q!r})"])
def test_module_closure_fails_closed_on_nonrelative_specifiers_in_directory_and_archive(tmp_path: Path, specifier: str, syntax: str):
    package_root = tmp_path / "library"
    js = package_root / "js"
    js.mkdir(parents=True)
    (js / "entry.mjs").write_text(syntax.format(q=repr(specifier)), encoding="utf-8")
    directory = run_validator("--directory", str(js), "--entry", "entry.mjs")
    assert directory.returncode != 0
    assert "Unsupported browser module specifier" in directory.stderr
    archive = tmp_path / "library.tar.gz"
    with tarfile.open(archive, "w:gz") as tar:
        tar.add(package_root, arcname="library")
    archived = run_validator("--archive", str(archive), "--entry", "library/js/entry.mjs")
    assert archived.returncode != 0
    assert "Unsupported browser module specifier" in archived.stderr


def test_release_audit_rejects_source_maps_and_stale_versioned_assets():
    for extra in ("library/js/library-main.mjs.map", "library/js/library-main-0-1-0-alpha-159.mjs"):
        version = f"0.1.0-alpha.163-hygiene-{uuid.uuid4().hex}"
        archive = _release_archive(version, [extra])
        try:
            result = subprocess.run(["bash", str(ROOT / "scripts/audit-release-package.sh"), version], cwd=ROOT, text=True, capture_output=True)
        finally:
            archive.unlink(missing_ok=True)
        assert result.returncode != 0
        assert "source map forbidden" in result.stdout or "unlisted frontend package file" in result.stdout


def test_release_archive_creation_is_byte_reproducible_with_perturbed_metadata(tmp_path: Path):
    stage = tmp_path / "stage"
    app = stage / "library"
    app.mkdir(parents=True)
    (app / "a.txt").write_text("alpha", encoding="utf-8")
    (app / "b.txt").write_text("beta", encoding="utf-8")
    first = tmp_path / "first.tar.gz"
    second = tmp_path / "second.tar.gz"
    command = ["bash", str(ROOT / "scripts/create-reproducible-archive.sh"), str(stage), "library"]
    subprocess.run([*command, str(first)], check=True)
    (app / "a.txt").chmod(0o600)
    (app / "b.txt").chmod(0o777)
    subprocess.run(["touch", "-d", "2037-01-02 03:04:05", str(app / "a.txt"), str(app / "b.txt")], check=True)
    subprocess.run([*command, str(second)], check=True)
    assert first.read_bytes() == second.read_bytes()
