# Alpha.23 unified book editor package

Signed `0.3.0-alpha.23` was built on 2026-10-18 for the populated Nextcloud 34 developer instance. Its local archive is `dist/library-0.3.0-alpha.23.tar.gz`, SHA-256 `cec41c2adff664f9f3a2704e00455eb8ebf053cbf22293f31008fb856798ad29`. The archive contains 238 entries; the frontend totals 1,310,683 bytes against the 1,320,000-byte limit. App signing, archive audit, SBOM and provenance checks passed. PHP syntax, the frontend production build, translation inventory and 1,045 local source-contract checks and 532 frontend tests passed.

The main Full details editor stages publication fields, rating, linked authors, series and curated genres. **Save book details** commits them in one database transaction after checking the publication revision and the relationship snapshot. Only edited publication fields are submitted, so an unreviewed imported value cannot block an unrelated correction. Imported creator credits, source series/genre and scanner suggestions remain available in a collapsed review panel; source files are unchanged. The legacy direct item page remains available as a specialist fallback.

Developer deployment and authenticated browser acceptance are recorded after the merge. Exact signed-package NC33–35 verification and owner acceptance remain release gates.
