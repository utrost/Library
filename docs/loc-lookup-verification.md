# Library of Congress lookup — focused development verification

**Historical source-run record.** Both adapters are now included in the signed alpha.8 development deployment; see [current delivery evidence](providers-alpha8-verification.md). Live LoC acceptance remains open.

Date: 2026-11-12. Unreleased source addition after alpha.7, verified on a disposable Nextcloud 34.0.3 / SQLite instance. Not deployed to the development library or published. No existing personal books changed.

## Implemented

Library of Congress is selectable in individual and bulk metadata lookup, with independent administrator controls and portable provider preference. ISBN or title/author searches are explicit. Comparison, selected-field Save/Apply, source-labelled receipts and conditional Undo use the existing workflow.

DNB and LoC share bounded SRU/MARC XML parsing and transport. Their endpoints, query indices, record identities, source URLs, cache namespaces and pacing slots remain separate. LoC uses the persistent, non-cancelled LCCN in 010$a; it does not treat the local 001 as an LCCN. Author-name words are ANDed to support different name orderings. Covers, classification enrichment and automatic author/series reassignment are outside this adapter. No migration is needed.

## Passed checks

- Frontend production build and module closure: 920,106 runtime JavaScript bytes, within the existing budget.
- PHP syntax for all affected services, controllers and settings template; clean diff whitespace.
- English/German translation inventory and generated catalogues; Arabic unchanged.
- Twelve focused Vue checks across lookup comparison, candidate selection and cover controls.
- Provider fault fixtures for Open Library, Google Books, DNB and LoC: bounded parsing, redirects, rate limits, Retry-After and malformed responses. LoC checks also cover exact/mismatched ISBNs, LCCN identity and prefixes, cancelled identifiers, author roles, escaped CQL, account-isolated caches, empty results and disabling before cache access.
- Synthetic 50-book integration: existing stale-edit and ownership checks plus DNB/LoC batch search, comparison, Apply, provenance, Undo, default-provider preference, disabled options and editor Save. Setup measured 140.6 ms in this fixture; not a large-catalogue performance benchmark.
- Four Playwright journeys: DNB and LoC on desktop Chromium and mobile Chromium. Search responses are synthetic; persisted server approvals, Save and Undo are real. No horizontal overflow or browser page errors. Comparison/receipt screenshots inspected.
- Actual administrator settings and HTTP controller smoke: disable LoC returns `provider_disabled`; re-enable reaches the provider. Live DNB ISBN search still succeeds after the shared-parser change. Lookup leaves the disposable book unchanged.

## Live LoC acceptance remains open

The [official catalogue documentation](https://www.loc.gov/z3950/lcserver.html), updated April 2026, specifies the HTTPS endpoint and supported Folio indices. Direct connections and requests through Nextcloud's HTTP client timed out from this environment. The installed controller returned `provider_unavailable` (HTTP 502) after approximately 6.1 seconds. This verifies failure handling, not a successful live search or save.

Repeat live ISBN, title/author and uncached LCCN lookup when the service is reachable, compare returned MARC data with the source page, and Save/Undo a reviewed field on a disposable book. Do not bypass TLS, downgrade to HTTP or silently switch providers. No full CI, GitHub Actions, signed release gate or App Store publication was run.

## Repeating the deterministic checks

Use the disposable source-instance workflow in [DNB verification](dnb-lookup-verification.md). Copy both provider fixture scripts and the full `tests/php/fixtures/` directory, then run the fault and batch integration scripts with `LIBRARY_DISPOSABLE_FIXTURE=1`.

The batch script creates `/tmp/library-loc-fixture.json` and `/tmp/library-dnb-fixture.json` inside the disposable instance. Copy them out; set `PW_LOC_FIXTURE` and `PW_DNB_FIXTURE`. Run `tests/gui/metadata/loc-lookup.spec.ts` and `tests/gui/metadata/dnb-lookup.spec.ts` for `desktop-chromium` and `mobile-chromium`. Rerun the PHP fixture before repeating browser saves; successful Save/Undo consumes the approval. Live provider requests are separate, explicitly initiated checks.
