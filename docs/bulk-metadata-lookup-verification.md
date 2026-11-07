# Bulk metadata lookup: first implementation verification

Date: 2026-11-07. Scope: development source, disposable Nextcloud 34.0.4.
The source results below are followed by a focused signed development-package deployment record. Neither is full release certification.

| Check | Result |
| --- | --- |
| Frontend build and module closure | Passed; one runtime module, 830,733 bytes |
| Release frontend allowlist budget | 1,098,758 / 1,320,000 bytes |
| English, German and Arabic catalogue validation | Passed; 1,533 keys |
| PHP syntax and installed service resolution | Passed |
| SQLite backend integration | Passed with 50 synthetic EPUBs |
| MariaDB backend integration | Passed with 50 synthetic EPUBs |
| Physical schema against database.xml | 45 tables, no differences on SQLite or MariaDB |
| Lookup migration schema rerun | Passed on both fixture environments |
| Desktop Chromium journey | Passed, 8.4 s |
| Desktop Firefox journey | Passed, 9.0 s |
| Mobile Chromium journey | Passed, 7.0 s |
| JavaScript page errors / horizontal overflow | None in the focused browser journeys |
| Screenshots | Light/dark desktop and mobile captured locally; desktop dark and mobile light visually inspected |
| Working-tree whitespace check | Passed |

Creation of a 50-book run measured approximately **118–134 ms on SQLite** and
**206–250 ms on MariaDB** across local runs. These measurements cover fixture
snapshot/queue creation, not external-provider latency or a 100k catalogue.
Provider responses were deterministic synthetic cache entries; no public
metadata-provider request was required for these tests.

The backend fixture covers the selection limit, ownership rejection, idempotent
creation after a lost response, persisted results, pause/resume, finite retries,
lease recovery, cancellation and Skip during provider I/O, selective Apply,
independent per-book conflicts, provider attribution, idempotent Apply/Undo,
source-revision rejection and rejection of Undo after later edits. SQLite also
injects a receipt-write failure and verifies that the book edit rolls back.

The browser journey covers saved field selection across reload, per-book Apply
without navigation, keyboard selection and focus after Apply, conditional Undo,
Skip, returning to browsing, catalogue and personal-list selection, and private
job lookup failure. It uses synthetic account data only. The initial migration
rerun fixture used the wrong Nextcloud connection wrapper; the fixture was
corrected and the final runs above passed.

No GitHub Actions, full CI, full release gate or App Store publication was run.
Source checks used disposable instances. The subsequent development deployment is recorded below.
Screenshots, traces and fixture environment files remain outside tracked public
artifacts. The [workflow document](bulk-metadata-lookup.md#remaining-acceptance-work)
records outstanding acceptance work and capability extensions.

## Alpha.4 development upgrade

The source alpha.3 → alpha.4 upgrade passed on a disposable NC34.0.4/MariaDB
instance populated from the preserved signed alpha.3 package: three synthetic
books, saved corrections, a personal list and an accepted Files-backed grant
remained unchanged. The lookup migration rerun against the installed schema
made no changes; the physical schema check found 45 tables with no differences.

`scripts/deploy-lookup-alpha4.sh` is restricted to this alpha.3 → alpha.4 upgrade.
It requires a signed archive checksum already checked on the disposable upgrade,
a clean commit with matching provenance, the existing signing certificate and
exactly the new lookup migration. It stops cron, enables maintenance and takes
private database/config/app backups. Existing catalogue, list and sharing rows
are fingerprinted before and after. Failure restores the complete backup set
and removes the new lookup table. Replacing app files alone is insufficient
rollback after this migration. Keep backups and browser artifacts private.

This development process does not run full CI or release certification.

## Signed alpha.4 installed checkpoint

- Implementation merged in [PR #213](https://github.com/utrost/Library/pull/213).
- Package source commit: `a2fe794e3f53c3cb0630603e5bb33c443948a106`.
- Archive: `library-0.4.0-alpha.4.tar.gz` (844,212 bytes).
- SHA-256: `0f65372c629f9fcf8cffd50ec54a976e67784b3a065f4f292d15694144874dfb`.
- App signature, package allowlist, frontend budget, module closure, SPDX SBOM
  and provenance audits passed. Verification notes are a later documentation-only
  commit; the package remains the exact archive built from the source commit above.
- Repeated the populated alpha.3 → alpha.4 upgrade with this signed archive on
  disposable NC34.0.4/MariaDB. Existing books, corrections, list entries and
  Files-backed grant access were preserved; installed app integrity passed.
- Repeated the 50-book backend fixture against the signed package: passed.
  Queue creation took 441 ms in this run while the developer database backup was
  also active. This is a synthetic fixture measurement, not a large-catalogue
  acceptance result or provider-network benchmark.
- Signed-package desktop/mobile Chromium journeys passed. Screenshots were
  inspected in desktop dark and mobile light mode.
- Installed on developer NC34.0.3/MariaDB using a complete private rollback
  backup. The migration and 45-table physical schema check passed. Integrity
  passed, maintenance is off, cron resumed, and the lookup background job is
  registered. Both served versioned frontend assets match the signed archive.
- Installed desktop and mobile Chromium journeys passed (5.5 s and 5.6 s).
  They cover persisted field choices, inline Apply, conditional Undo, Skip,
  catalogue/list selection, Back navigation and private-job 404 behavior.
  No JavaScript page errors or horizontal overflow were detected.
- The first installed browser attempt was blocked by Nextcloud's welcome wizard
  for the new fixture account. Marking it seen for that account allowed the
  unmodified journey to pass; no instance-wide onboarding setting was changed.
- Browser checks used a newly created account, two synthetic books and
  deterministic saved suggestions. No public provider call was made. The fixture
  account and its books, lists and lookup jobs were removed after verification.
- Complete existing catalogue/file/list/sharing fingerprints match the
  pre-deployment snapshot both after migration and after fixture cleanup.
  Personal book metadata and files were not changed.

GitHub Actions were skipped for implementation and documentation commits. No
full CI, full release gate or App Store publication was performed. Remaining
provider, scale and accessibility acceptance stays open under #186 and #211.
