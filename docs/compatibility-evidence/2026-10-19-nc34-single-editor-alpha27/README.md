# NC34 single editor — alpha.27

Status: implementation and verification in progress. Developer NC34 currently runs signed alpha.26; this document must record the final package before handoff.

## Scope

Legacy owned-book bookmarks redirect to the current editor. Authors, Series and author-conflict links preserve the originating view. Legacy POST endpoints remain compatible. Redirect feedback and cover refresh are retained. Authorization returns a generic 404 for missing or non-owned books.

Metadata status joins imported suggestions and file metadata in collapsed bottom disclosures. Canonical authors count toward completeness once ready; attention reuses normalized scanner differences. Status is based on saved values and reloads after Save. The legacy editor JavaScript is omitted from the package; no budget increase or database migration.

## Verification

PHP runtime checks passed, including redirect validation, ownership isolation and canonical-author completeness. Updated source checks and browser journeys are pending final recording. Tests must cover author/series/bookmark entry, Back, feedback, bottom order/keyboard/mobile themes, Save/Discard, stale rejection and the sticky bar.

## Release gate

Exact signed NC33–35 fresh/upgrade certification and owner acceptance remain separate App Store gates. Do not treat the developer smoke as certification.
