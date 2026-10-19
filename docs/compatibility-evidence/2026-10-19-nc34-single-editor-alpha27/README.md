# NC34 single editor — alpha.27

Status: implementation and verification in progress. Developer NC34 currently runs signed alpha.26; this document must record the final package before handoff.

## Scope

Legacy owned-book bookmarks redirect to the current editor. Authors, Series and author-conflict links preserve the originating view. Legacy POST endpoints remain compatible. Redirect feedback and cover refresh are retained. Authorization returns a generic 404 for missing or non-owned books.

Metadata status joins imported suggestions and file metadata in collapsed bottom disclosures. Canonical authors count toward completeness once ready; attention reuses normalized scanner differences. Status is based on saved values and reloads after Save. The legacy editor JavaScript is omitted from the package; no budget increase or database migration.

## Verification

PHP runtime checks passed, including redirect validation, ownership isolation and canonical-author completeness. The final local check passed 1,045 source checks, 545 frontend tests, PHP runtime suites, 518 parser vectors, translation inventory, build and Markdown link checks. Tests must cover author/series/bookmark entry, Back, feedback, bottom order/keyboard/mobile themes, Save/Discard, stale rejection and the sticky bar.

## Release gate

Exact signed NC33–35 fresh/upgrade certification and owner acceptance remain separate App Store gates. Do not treat the developer smoke as certification.

## Initial browser findings

The first local disposable run passed all 38 existing journeys; three new cases used a selector for the editor column instead of the page-level disclosures. Those selectors were corrected before PR #121.

Hosted CI run 39317353665 passed 40/41 journeys. The Firefox entry journey started its next navigation after Back changed the URL but before the destination finished loading. Its trace located console errors in Nextcloud Notifications and interrupted core startup. The journey now waits for destination content, completed identity loading and network idle before proceeding. Browser errors remain strict failures; none are waived. Final rerun remains pending.
