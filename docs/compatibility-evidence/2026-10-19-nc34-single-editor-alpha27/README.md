# NC34 single editor — alpha.27

Status: signed alpha.27 deployed on developer NC34 (34.0.3.2) on 2026-10-19. PR #121 merged as `8ed93e9250faf937c26d7ca906816a669b4860ea`.

## Scope

Legacy owned-book bookmarks redirect to the current editor. Authors, Series and author-conflict links preserve the originating view. Legacy POST endpoints remain compatible. Redirect feedback and cover refresh are retained. Authorization returns a generic 404 for missing or non-owned books.

Metadata status joins imported suggestions and file metadata in collapsed bottom disclosures. Canonical authors count toward completeness once ready; attention reuses normalized scanner differences. Status is based on saved values and reloads after Save. The legacy editor JavaScript is omitted from the package; no budget increase or database migration.

## Verification

PHP runtime checks passed, including redirect validation, ownership isolation and canonical-author completeness. The final local check passed 1,045 source checks, 545 frontend tests, PHP runtime suites, 518 parser vectors, translation inventory, build and Markdown link checks. Browser journeys cover author/series/bookmark entry, Back, feedback, bottom order/keyboard/mobile themes, Save/Discard, stale rejection and the sticky bar.

## Release gate

Exact signed NC33–35 fresh/upgrade certification and owner acceptance remain separate App Store gates. Do not treat the developer smoke as certification.

## Initial browser findings

The first local disposable run passed all 38 existing journeys; three new cases used a selector for the editor column instead of the page-level disclosures. Those selectors were corrected before PR #121.

Hosted CI run 39317353665 passed 40/41 journeys. The Firefox entry journey started its next navigation after Back changed the URL but before the destination finished loading. Its trace located console errors in Nextcloud Notifications and interrupted core startup. The journey now waits for destination content, completed identity loading and network idle before proceeding. Browser errors remain strict failures; none are waived. Final CI rerun passed all 41 browser journeys without waiving errors.

## Final checks and installed package

- [PR #121](https://github.com/utrost/Library/pull/121), [CI 39318685226](https://github.com/utrost/Library/actions/runs/39318685226): all required checks passed, including 41/41 Playwright journeys. Security run 39318684741 passed.
- Signed archive: `library-0.3.0-alpha.27.tar.gz`; SHA256 `23d88627a06efe80c878132aaadc85c3d67812f02955a7c364811ffc1465f292`.
- Frontend payload: 1,307,409 / 1,320,000 bytes. Legacy editor bundle absent. Signature, SBOM, provenance and module-closure audits passed.
- App integrity clean, maintenance off, no pending database upgrade. Catalogue count: 107,717 before and after. No database migration.
- Rollback directory in developer container: `/tmp/library-before-alpha27-20261019T203151Z`.
- Served main JavaScript SHA256: `4baf0159ed343925d7c5d36466f524522ab6ca53b6ac297609f02c85b358cc95`; Vue CSS: `7a99476485b880bcbf093eaaee1999c2b44761a3a35751d6e652d098527c500d`; style.css: `4430c1c1f3756d2bb312a2ee7544acd3297cdd41a6f1f53eb20aa1fd65a166ee`. All match the package.

## Installed-package browser smoke

Authenticated desktop (1440×900) and mobile (390×844) journeys passed with the installed assets, no frontend overlay. Author/series entry points, legacy redirects and feedback, Back context, direct selection, stage/discard, sticky controls, bottom disclosure order, keyboard expansion, light/dark wrapping, file size and Files location were exercised. Saved metadata stayed unchanged; zero Library mutation requests, zero page errors and zero Library console errors. Temporary credentials were removed.

Opening the location correctly reached Nextcloud Files but logged a separate Files viewer error: “The handler is already registered”. This developer-stack issue is recorded, not counted as an error-free Files smoke. No Library errors were suppressed. Private screenshots/results: `/tmp/library-alpha27-deployed-smoke-Ks5yLe`; deployment log: `/tmp/library-alpha27-deploy.log`; final checks: `/tmp/library27-check3.log`.
