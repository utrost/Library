from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


def test_alpha166_version_sources_and_unpackage_boundary():
    version = "0.1.0-alpha.171"
    for path in ["appinfo/info.xml", "package.json", "package-lock.json", "vite.config.js", "lib/Controller/PageController.php", "templates/main.php", "scripts/smoke-release-package.sh"]:
        assert version in read(path), path
    assert "library-main-0-1-0-alpha-171-pathlink" in read("lib/Controller/PageController.php")
    assert "library-vue-0-1-0-alpha-171-pathlink" in read("lib/Controller/PageController.php")


def test_vue_has_field_specific_bidi_and_semantic_names_without_controls():
    app = read("src/App.vue")
    assert 'class="library-bidi-human" dir="auto"' in app
    assert 'class="library-bidi-machine" dir="ltr"' in app
    assert "aria-labelledby" in app
    assert 'class="library-review-results" role="region"' in app
    assert 'class="library-sidebar-content" aria-live="polite"' not in app
    assert 'id="library-detail-drawer-keyboard-hint" class="hidden-visually"' in app
    assert "unicode-bidi: isolate" in app
    assert not re.search(r"\.library-(?:cover-card|native-item-sidebar|sidebar-content)[^{]*\{[^}]*direction\s*:", app, re.S)
    assert not re.search(r"[\u202a-\u202e\u2066-\u2069]", app)


def test_every_review_rediscover_and_sidebar_value_has_field_level_isolation_and_valid_names():
    app = read("src/App.vue")
    assert ":aria-describedby=\"sidebarIsMobile && selectedDrawerItem ? 'library-detail-drawer-keyboard-hint' : undefined\"" in app
    assert ':aria-labelledby="\'library-detail-drawer-cover-label library-detail-drawer-heading\'"' in app
    assert 'id="library-detail-drawer-cover-label"' in app
    for value in [
        "metadataReviewWorkbench.item.title", "metadataReviewWorkbench.item.cachedPath",
        "field.currentValue", "field.scannerCandidate", "field.pathTemplateCandidate",
        "field.sidecarValue", "field.sourceProvenance",
        "selectedDrawerItem.metadataSource", "source", "field.sourceProvenance",
    ]:
        assert re.search(rf'<bdi class="library-bidi-(?:human|machine)" dir="(?:auto|ltr)">\s*{{{{\s*{re.escape(value)}', app), value


def test_legacy_templates_isolate_values_and_describe_tables():
    detail = read("templates/item-detail.php")
    settings = read("templates/settings-personal.php")
    batch = read("templates/batch-metadata-edit-preview.php")
    for text in [detail, settings, batch]:
        assert 'class="library-bidi-human" dir="auto"' in text
        assert 'class="library-bidi-machine" dir="ltr"' in text
    assert detail.count('scope="col"') >= 6
    assert detail.count('<caption class="hidden-visually">') >= 2
    assert '<caption class="hidden-visually">' in batch


def test_legacy_file_provenance_and_tags_are_isolated_and_composed_names_use_boundaries():
    detail = read("templates/item-detail.php")
    assert '$fileRowMachineFields' in detail
    assert 'in_array($label, $fileRowMachineFields, true) ? \'library-bidi-machine\' : \'library-bidi-human\'' in detail
    assert detail.count('<bdi class="library-bidi-human" dir="auto">') >= 10
    assert 'class="library-bidi-machine" dir="ltr"' in detail
    assert 'aria-labelledby="library-remove-tag-action-' in detail
    assert 'id="library-remove-tag-name-' in detail
    assert "Remove tag: %s" not in detail


def test_browser_harness_has_safe_mixed_direction_ax_and_adaptation_gates():
    smoke = read("scripts/smoke-browser-page.mjs")
    fixture_specs = smoke[smoke.index("const mixedDirectionFixtureFields"):smoke.index("// Source-harness alpha.169 matrix")]
    assert fixture_specs.count("{ id:") == 16
    for spec in [line for line in fixture_specs.splitlines() if "{ id:" in line]:
        assert "axSelector:" in spec and "axRole:" in spec and "axName:" in spec
    assert "Accessibility.enable" in smoke and "Accessibility.getFullAXTree" in smoke
    assert "browser_mixed_direction_arabic_locale" in smoke
    assert "browser_mixed_direction_german_locale" in smoke
    assert "browser_fixture_scope_safe" in smoke
    assert "browser_fixture_metadata_restored" in smoke
    assert "browser_fixture_persistence_zero_matches_and_complete_bodies" in smoke
    assert "Emulation.setEmulatedMedia" in smoke
    assert "forced-colors" in smoke and "prefers-reduced-motion" in smoke
    evaluator = read("scripts/browser-accessibility-gate.mjs")
    assert "browser_scale_200_reflow_model" in evaluator and "browser_scale_400_reflow_model" in evaluator
    assert "AX-tree evidence is not screen-reader testing" in smoke


def test_browser_fixture_and_markers_are_observation_driven_fail_closed():
    smoke = read("scripts/smoke-browser-page.mjs")
    fixture_block = smoke[smoke.index("localization-fixture"):smoke.index("if (body.indexOf", smoke.index("localization-fixture"))]
    assert "...seed" not in fixture_block
    assert "state.items?.[0]" not in fixture_block
    assert "itemSidebarUrlTemplate" in fixture_block
    for marker in [
        "browser_mixed_direction_arabic_locale", "browser_mixed_direction_german_locale",
        "browser_bidi_values_isolated", "browser_no_blanket_direction_forcing",
        "browser_accessible_names_mixed_direction", "browser_fixture_scope_safe",
        "browser_fixture_metadata_restored", "browser_fixture_persistence_zero_matches_and_complete_bodies",
    ]:
        assert f"print('{marker}', true)" not in smoke
        assert marker in smoke
        assert f"mixedDirectionEvidence.markers.{marker} === true" in smoke
    assert smoke.index("browser_mixed_direction_arabic_locale") > smoke.index("browser-locale=ar")
    assert "browser_zoom_200_reflow" not in smoke
    assert "browser_scale_200_reflow_model" in read("scripts/browser-accessibility-gate.mjs")
    assert "Input.dispatchKeyEvent" in smoke
    assert "finally" in smoke[smoke.index("async function collectAccessibilityAndAdaptationEvidence"):smoke.index("function startAuthProxy")]


def test_docs_are_truthful_source_candidate_with_manual_at_debt():
    handbook = read("docs/human-test-handbook.md")
    for product in ["NVDA", "VoiceOver", "Orca"]:
        assert product in handbook
    assert handbook.lower().count("manual at testing pending") >= 3
    release = read("RELEASE.md")
    assert "0.1.0-alpha.171" in release
    assert "source candidate" in release.lower()
    assert "unpackaged" in release.lower()
    assert "accessibility-tree" in release.lower()
    assert "not screen-reader testing" in release.lower()
    assert "alpha.166" in read("CHANGELOG.md")
    for path in ["README.md", "CHANGELOG.md", "docs/roadmap.md", "docs/current-state-and-risk-register.md", "docs/app-store-readiness.md", "docs/architecture-review.md", "docs/alpha-test-checklist.md"]:
        assert "alpha.171" in read(path), path
    assert "alpha.166" in read("CHANGELOG.md")


def test_operative_alpha_instructions_do_not_name_the_superseded_candidate():
    for path in ["docs/human-test-handbook.md", "docs/current-state-and-risk-register.md", "docs/architecture-review.md", "docs/alpha-test-checklist.md"]:
        assert "0.1.0-alpha.165" not in read(path), path


def test_release_operative_artifact_instructions_name_alpha166_only():
    release = read("RELEASE.md")
    required = [
        "dist/library-0.1.0-alpha.171.tar.gz",
        "dist/library-0.1.0-alpha.171.tar.gz.sha256",
        "sha256sum -c library-0.1.0-alpha.171.tar.gz.sha256",
        "tar -xzf dist/library-0.1.0-alpha.171.tar.gz",
        "openssl dgst -sha512 -sign ~/.nextcloud/certificates/library.key dist/library-0.1.0-alpha.171.tar.gz",
    ]
    assert all(value in release for value in required)
    operative_lines = [line for line in release.splitlines() if line.startswith(("dist/", "openssl ", "(cd dist", "tar -xzf", "- `dist/"))]
    assert not any("alpha.166" in line for line in operative_lines), operative_lines


def test_browser_harness_carries_rooted_ax_relationship_and_fixed_sidebar_oracle():
    smoke = read("scripts/smoke-browser-page.mjs")
    helper = read("scripts/browser-evidence-helpers.mjs")
    for token in ["matchedAxBackendNodeId", "selectedAxNodeId", "matchedAxNodeId", "axNodes"]:
        assert token in smoke and token in helper, token
    assert "sidebarExpectedCopy" in smoke
    assert "rootName: state.rootName" not in smoke
    assert "state.loadingName" not in smoke and "state.errorName" not in smoke


def test_second_review_proxy_is_inbound_authenticated_and_fixture_is_response_only():
    smoke = read("scripts/smoke-browser-page.mjs")
    assert "randomBytes" in smoke
    assert "timingSafeEqual" in smoke
    assert "Network.setExtraHTTPHeaders" in smoke
    assert "x-library-smoke-authorization" in smoke
    assert "inboundAuthRejected" in smoke and "inboundAuthAccepted" in smoke
    assert "browser_fixture_scope_safe" in smoke
    assert "browser_fixture_persistence_zero_matches_and_complete_bodies" in smoke
    assert "browser_fixture_files_removed" not in smoke


def test_real_detail_candidates_are_captured_before_fixture_navigation_and_remain_separate():
    smoke = read("scripts/smoke-browser-page.mjs")
    normal_navigation = smoke.index("const url = `${proxyBase}/apps/library/?browser-smoke=${Date.now()}`")
    capture = smoke.index("const realDetailCandidates = captureCanonicalDetailCandidates", normal_navigation)
    first_fixture_navigation = smoke.index("localization-fixture=1", normal_navigation)
    selection = smoke.index("selectAuthenticatedDetailCandidate(realDetailCandidates", first_fixture_navigation)
    assert normal_navigation < capture < first_fixture_navigation < selection
    assert "detailCandidates:" not in smoke[first_fixture_navigation:selection]


def test_second_review_harness_observes_restoration_ax_interaction_and_bidi_contracts():
    smoke = read("scripts/smoke-browser-page.mjs")
    for evidence in [
        "mediaRestored", "metricsRestored", "baselineMetrics", "pageReflowContained",
        "visibleControlBoundsObserved", "controlScrollRestored", "representativeDurationsSuppressed",
        "observedFocusinCount", "observedKeydownCount", "forwardBoundaryContained",
        "backwardBoundaryContained", "loadingAx", "successAx", "errorAx",
        "expectedFixtureFields", "computedDirection", "exactAssociatedAxNames",
    ]:
        assert evidence in smoke, evidence
    assert "node.focus()" not in smoke
    assert "row.restored = true" not in smoke
    assert "box.left >= 0" in smoke and "box.top >= 0" in smoke
    assert "box.right <= innerWidth" in smoke and "box.bottom <= innerHeight" in smoke
    assert "scrollIntoView" in smoke and "controlScrollRestored" in smoke
    assert "tableContained: tables.every" not in smoke


def test_second_review_field_level_isolation_and_current_identity():
    batch = read("templates/batch-metadata-edit-preview.php")
    detail = read("templates/item-detail.php")
    app = read("src/App.vue")
    assert "($example['title']" in batch and "<bdi" in batch
    assert "($example['currentValue']" in batch and "($example['newValue']" in batch
    assert "$item['shelf']" in detail and "library-item-cover-explanation" in detail
    assert "selectedDrawerItem.publicationType" in app and "selectedDrawerItem.language" in app
    assert "library-tag-feedback-value" in detail
    readiness = read("docs/app-store-readiness.md")
    assert readiness.count("Current candidate baseline: `0.1.0-alpha.171`") == 1
    release = read("RELEASE.md")
    operative = release[release.index("This repo is prepared for independent review"):release.index("## Local release gates")]
    assert "0.1.0-alpha.165" not in operative


def test_second_review_required_field_contracts_fail_when_each_boundary_is_mutated():
    contracts = {
        "templates/batch-metadata-edit-preview.php": [
            '<bdi class="library-bidi-human" dir="auto"><?php p((string)($example[\'title\']',
            '<bdi class="library-bidi-human" dir="auto"><?php p((string)($example[\'currentValue\']',
            '<bdi class="library-bidi-human" dir="auto"><?php p((string)($example[\'newValue\']',
        ],
        "templates/item-detail.php": [
            '<bdi class="library-bidi-human" dir="auto"><?php p((string)$item[\'shelf\']',
            'id="library-tag-feedback-value" class="library-bidi-human" dir="auto"',
            'aria-describedby="library-item-cover-explanation"',
        ],
        "src/App.vue": [
            '<bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.publicationType',
            '<bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.language',
        ],
    }
    for path, required in contracts.items():
        source = read(path)
        assert all(snippet in source for snippet in required), path
        for snippet in required:
            mutated = source.replace(snippet, "")
            assert not all(candidate in mutated for candidate in required), f"{path}:{snippet}"
