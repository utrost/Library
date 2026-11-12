# Alpha.8 provider delivery

## Scope

DNB and Library of Congress individual/bulk metadata lookup, administrator controls, portable provider preferences and source-labelled receipts. Path-extraction rows stay mounted while refreshed proposals load after Apply/Undo. No database migration.

## Source checks

- Production build: 920,106 runtime JavaScript bytes, within the existing budget.
- Fifteen focused component tests: lookup comparison, candidate/cover selection and path-review refresh.
- Translation inventory: 1,819 keys; generated catalogues current.
- Provider parsing/fault and 50-book integration evidence: [DNB](dnb-lookup-verification.md), [Library of Congress](loc-lookup-verification.md).

## Delivery

Delivered on 2026-11-12 as **0.4.0-alpha.8** on developer NC34 (34.0.3). [Implementation PR #252](https://github.com/utrost/Library/pull/252) is merged. The final source commit is `8ece054fd9d364da3a4596dd53692482831420e2`; it also corrects the controller/bootstrap asset names caught during initial packaging.

- Signed archive: `library-0.4.0-alpha.8.tar.gz`.
- SHA-256: `5f5ab3e9e73c99b52dec56cb6b202632596f99f0265513259cc5b70ab35636ae`.
- Signature, SBOM, provenance, module closure and package audits pass. Packaged frontend: 1,201,176 bytes across 11 files.
- Exact signed alpha.7 → alpha.8 upgrade on populated NC34/MariaDB passes; 50 synthetic books and list data are preserved. Existing migration files are identical and no migration is added.
- Forced rollback restores database, app, configuration and Library appdata with identical catalogue fingerprints. A disposable cron fixture initially removed itself on stop; repeating with a persistent fixture passed, including restart.
- Installed provider fault checks and the 50-book integration pass, including stale-review rejection, ownership, DNB/LoC Apply/Undo, editor Save and provider preferences.
- Four signed-package Playwright journeys pass: DNB and LoC on desktop/mobile Chromium, with synthetic search responses and real saved approvals, Save, Discard and Undo. No horizontal overflow or page errors.
- Signed-package administrator disable/re-enable and HTTP checks pass. Live DNB lookup succeeds; live LoC returns the bounded unavailable response after about 6.1 seconds.
- Development deployment retains private database, configuration, app and Library-appdata rollback backups. An initial command session was interrupted before replacement; alpha.7 access/cron were restored, then the monitored retry completed. Installed integrity is clean; maintenance mode is off and cron is restored. Pre/post-upgrade catalogue fingerprints match.
- Installed desktop/mobile Incoming → Details → provider lookup/path extraction → Back and review-state journeys pass, without page errors, horizontal overflow or book-update requests. Observed queue readiness was 513 ms in both disposable-account runs, not a whole-catalogue benchmark.
- Live DNB ISBN lookup, comparison, publisher Save, `provider:dnb` evidence and Undo pass on a disposable book. The Nextcloud first-run wizard needed dismissal for the new fixture accounts before browser checks could proceed.

Execution logs, screenshots, credentials and rollback backups remain private and ignored by Git. All three fixture accounts and source files were removed after the smoke; source-byte hashes stayed unchanged. Final existing-catalogue fingerprints match the pre-smoke baseline. All delivery checks are local and focused; no full CI, GitHub Actions, release gate or App Store publication.

## Remaining limitation

Live Library of Congress requests time out from the development environment. Synthetic parsing and reviewed Save/Apply/Undo pass; successful live LoC lookup remains an acceptance item. Screenshot review also found that the long DNB provider label is crowded beside the next control on desktop; refine the selector width/wrapping in a follow-up UI pass. DNB live lookup succeeds. Google Books still needs an administrator API key for live lookup.
