# Catalogue cover hit-area fix — 2026-10-15

[PR #107](https://github.com/utrost/Library/pull/107), merged as `94f35ac`, fixes the catalogue cover image button being covered by the title gradient. The gradient now passes pointer events to the image button; the title button and duplicate badge retain their own click targets. The frontend asset filename changed from `v7` to `v8` so browsers fetch the updated CSS.

## Exact developer package

- Version: `0.3.0-alpha.9`, unsigned development archive `dist/library-0.3.0-alpha.9.tar.gz`.
- SHA-256: `692d1187997164a2a7e5d4bbe50369fb6b81f61b2856aea3a2f2e1e3cf529798`.
- The release script passed 1,045 Python contracts, PHP runtime checks, frontend packaging and archive/SBOM/provenance audits from the merged commit. The archive checksum matched inside the container, and the installed files matched the audited staging directory byte for byte.
- Installed on the populated developer Nextcloud `34.0.3` at `http://100.123.149.120:8088`; Library is enabled, maintenance mode is off, and no database upgrade is pending. The previous installed app is retained privately for rollback.

## Browser evidence

| Check | Result |
| --- | --- |
| [PR #107 checks](https://github.com/utrost/Library/pull/107/checks) | Source, security, CodeQL and GUI checks passed. |
| [Disposable NC34 exact-package GUI run](https://github.com/utrost/Library/actions/runs/38690832591) | Passed with the catalogue Playwright journey clicking the cover image itself. |
| Populated developer NC34 Playwright probe, with no CSS injection | Cover image click opened the sidebar; **Full details** rendered metadata, cover, tags and comments; **Open** launched a new tab; zero page errors; temporary authentication token removed. Private screenshot: `/tmp/library-full-details-probe/nc34-full-details.png`. |
| Populated developer NC34 browser smoke | Passed with 100 cards, sidebar open/render/close, zero browser console errors and temporary token removal. |

This verifies the reported cover click on NC34. The new `v8` package has not yet had a signed NC33–35 release matrix or human editing/cover acceptance pass. Use [H03-01 and H03-10](../../human-test-handbook.md#current-03-human-cases) for the latter.
