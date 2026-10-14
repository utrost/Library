# CodeQL triage — 2026-10-14

## Remediation follow-up

The post-merge scan of PR #100 closed the seven targeted alerts and left **115 open**. [PR #102](https://github.com/utrost/Library/pull/102) addresses that inventory in maintained source scripts and tests. It uses private random evidence directories, replaces dynamic Chrome DevTools code construction with argument passing, decodes HTML attributes once, fixes the build output race and removes stale quality warnings. The benchmark runner also stops saving its CSRF token and no longer reads inventory back from disk before making its own Nextcloud requests.

The `js/http-to-file-access` finding is an intentional benchmark operation: the developer runner records response timing and status metrics in its private evidence directory. It is not a release runtime path.

**Post-merge result:** PR #102 merged as `a5c8ae3`; its `main` CodeQL scan completed successfully and left two open alerts. The new `js/http-to-file-access` alert `1894` was dismissed individually as **won't fix** with the private benchmark evidence rationale. [PR #103](https://github.com/utrost/Library/pull/103) removes the remaining dynamic Chrome DevTools observation builder (`4`). Alert closure for that change awaits its merge and a new `main` scan.

Scope: the merged 0.3 integration, [PR #99](https://github.com/utrost/Library/pull/99), and `main` at `775f5c6`. GitHub reported **93 annotations** on the PR and **126 open alerts** on `main` when reviewed. The PR's separate CodeQL alert status was red; the CodeQL analysis workflow, CI, disposable NC34 GUI rehearsal and app-specific security gate passed. A red alert status is still a finding to review, not evidence that the analysis job failed.

**Triage action:** GitHub alerts `2`, `3`, `1559` and `1560` were dismissed individually as false positives with an explanation on each alert. This leaves **122 open alerts** before a fresh scan. Code changes in this branch should close another seven existing alerts (`11–16` and `316`) after CodeQL analyzes the merged commit; this is an expectation, not a verified result.

The current CodeQL workflow scans JavaScript/TypeScript and Python, including developer scripts and tests. The release archive excludes `scripts/`, `src/` and `tests/`; it ships the compiled Vue bundle. PHP is outside this CodeQL workflow. These boundaries inform priority but do not make developer tooling automatically safe.

## Security alerts

| Rule / GitHub alert IDs | Count | Disposition and evidence |
| --- | ---: | --- |
| Request forgery `2–3` | 2 critical | **Dismissed as false positive for arbitrary destination.** Both are browser smoke proxies bound to `127.0.0.1`, forwarding to the operator-selected `NC_URL` origin with redirects disabled. Incoming paths cannot choose a different origin; the main browser proxy also requires a per-run authorization secret. These scripts are excluded from release archives. |
| Insecure temporary file `1830–1866` | 37 high | **Real developer-host hardening work.** Smoke and benchmark scripts create or write predictable paths below `/tmp` or an operator-selected evidence directory. A pre-existing path or symlink on a shared host can redirect output; several scripts invoke Docker. CI runners are ephemeral and the scripts are not packaged, so this is not an App Store runtime finding. Keep open; use private `mkdtemp` directories, exclusive file creation and unique container-side paths before running these tools on a shared host. |
| Incomplete sanitization `11–16` | 6 high | **Test expectation defect, fixed in this triage.** URL expectations in `src/App.test.js` replaced only the first `%20`; they now replace all encoded spaces. Test code only. Let a fresh CodeQL scan close these alerts. |
| Double escaping `17, 19–27, 1827` | 11 high | **Developer harness parsing review.** These call sites decode HTML entities from smoke responses. Some values are base64 initial-state attributes, but the whole group has not been proven safe for arbitrary input. Keep open until each parser is changed to use one bounded decode or a browser/HTML parser. No release archive contains these scripts. |
| Incomplete multi-character sanitization `1559–1560` | 2 high | **Dismissed as false positive for HTML injection.** `normalizeDescriptionForDisplay` returns a string that the Vue template renders only with `{{ selectedDrawerDescription }}` text interpolation; there is no `v-html` or `innerHTML` sink. Vue escapes any residual angle brackets. Keep the interpolation invariant during future edits. |
| Reflected XSS `316` | 1 high | **Developer proxy response hardened in this triage.** The authenticated loopback smoke proxy no longer reflects an exception stack in its HTTP response; it returns a generic text response with `nosniff` and `no-store`. Let a fresh scan close the alert. |
| File-system race `317` | 1 high | **Low exposure build-tool race.** `build-vue.mjs` checks for generated CSS before writing a placeholder. A concurrent actor with write access to the checkout could race this step; the archive does not contain the build script. Keep open for atomic/exclusive build-output creation if builds are ever run in a shared writable checkout. |
| Code construction `4–10` | 7 medium | **Developer browser harness risk.** CDP `Runtime.evaluate` expressions are assembled in smoke scripts, some from fixture/API values. They are not packaged, but untrusted test data could affect a privileged browser session. Keep open; pass values as serialized data and use fixed expressions before using the harness with untrusted libraries. |
| Network/file flow `1867–1868` | 2 medium | **Expected privileged benchmark behavior.** `scripts/performance/run.mjs` reads/writes local helpers and calls an operator-selected Nextcloud URL. This is an explicit developer operation, not an app request path. Keep open as a tooling-risk reminder; restrict it to disposable accounts and trusted hosts. |

## Quality alerts

| Rule / alert IDs | Count | Disposition |
| --- | ---: | --- |
| Unused Python local variables `1535–1552` | 18 | Test-only cleanup; no security impact. |
| Trivial `created` conditionals `1877–1890` | 14 | Smoke-fixture cleanup paths; simplify while preserving cleanup after partial setup. |
| Unused JS local variables `1, 1445, 1829, 1869–1876` | 11 | Tests/scripts only; remove with nearby maintenance. |
| Superfluous trailing arguments `1529–1534` | 6 | Browser classifier tests only; align call signatures in test maintenance. |
| Unused Python imports `1554–1557` | 4 | Test-only cleanup. |
| Useless local assignments `1524, 1828` | 2 | Smoke scripts; remove after checking observation/cleanup behavior. |
| Implicit string concatenation `1892` | 1 | Intentional adjacent Python literals building one Node `--eval` argument; low-risk style finding. |
| Automatic semicolon insertion `1891` | 1 | Test-only formatting. |

These quality groups account for **57** alerts in the initial inventory. The 69 security-group alerts above plus these 57 equal the initial 126-alert `main` inventory. The 93 PR annotations are a subset; the large integration diff made GitHub report some pre-existing findings as PR alerts. The counts are a snapshot, not a claim that every open alert is new to 0.3.

## Next actions

1. Keep the 37 temporary-path and 7 code-construction findings open and harden the shared smoke/benchmark tooling before using it on shared hosts or with untrusted libraries.
2. Refactor the 11 HTML-entity decoding call sites in developer proxies to parse once; then rerun CodeQL and close only findings that disappear.
3. Re-scan the small fixes in this triage and confirm alerts `11–16` and `316` close. Record any new alert separately.
4. Before the 0.3 App Store package is signed, review PHP security and the exact compiled/runtime bundle separately. This CodeQL workflow does not analyze PHP.
