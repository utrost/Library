# Alpha.23 unified book editor package

Signed `0.3.0-alpha.23` was built on 2026-10-18 for the populated Nextcloud 34 developer instance. Its local archive is `dist/library-0.3.0-alpha.23.tar.gz`, SHA-256 `06fe513c3feef6e00c1bb11a2afc7fdfdd2b9b4b9139fa0d254b67453dc4e965`. The archive contains 238 entries; the frontend totals 1,310,398 bytes against the 1,320,000-byte limit. App signing, archive audit, SBOM and provenance checks passed. PHP syntax and the frontend production build passed.

The main Full details editor stages publication fields, rating, linked authors, series and curated genres. **Save book details** commits them in one database transaction after checking the publication revision and the relationship snapshot. Imported creator credits, source series/genre and scanner suggestions remain available in a collapsed review panel; source files are unchanged. The legacy direct item page remains available as a specialist fallback.

Developer deployment and authenticated browser acceptance are recorded after the merge. Exact signed-package NC33–35 verification and owner acceptance remain release gates.
