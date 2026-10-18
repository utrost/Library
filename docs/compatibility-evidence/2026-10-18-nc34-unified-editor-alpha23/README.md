# Alpha.23 unified book editor package

Signed `0.3.0-alpha.23` was built on 2026-10-18 for the populated Nextcloud 34 developer instance. Its local archive is `dist/library-0.3.0-alpha.23.tar.gz`, SHA-256 `6c47d02c81007973f7863a3b0c2fc705f8f6d78f160a023c8c1ef2b1e41bbf52`. The archive contains 238 entries; the frontend totals 1,310,370 bytes against the 1,320,000-byte limit. App signing, archive audit, SBOM and provenance checks passed. PHP syntax, the frontend production build, translation inventory and 1,045 local source-contract checks and 532 frontend tests passed.

The main Full details editor stages publication fields, rating, linked authors, series and curated genres. **Save book details** commits them in one database transaction after checking the publication revision and the relationship snapshot. Imported creator credits, source series/genre and scanner suggestions remain available in a collapsed review panel; source files are unchanged. The legacy direct item page remains available as a specialist fallback.

Developer deployment and authenticated browser acceptance are recorded after the merge. Exact signed-package NC33–35 verification and owner acceptance remain release gates.
