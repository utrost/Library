# Alpha.9 development deployment

On 2026-11-22 the developer instance upgraded from signed Library 0.4.0-alpha.8 to **0.4.0-alpha.9** on Nextcloud 34.0.3 with MariaDB. The package came from merged commit `686004b67e9bd16fed9e84e521dfceccd6036df0`. Its SHA-256 is `0f6ed11d907f6f40040781d474bd9e865ba4ef1e662f0a508759b62330f63315`. The package audit verified the signature, frontend module dependencies, SBOM and build provenance.

## What to try

- Open a book from the catalogue for its reading summary. Choose **Edit details** to edit it. Open a pending book from Incoming to edit immediately, then use **Save, mark reviewed and next**. Home offers **Resume Incoming review**.
- Expand scan history to inspect the counts and a file with a scan error. Compare the ISBN and language evidence before choosing an edition in metadata lookup.
- Inspect selected books across catalogue pages, review proposed corrections, follow an eligible Undo, preview a recipient’s access and pin a saved collection to Home. The [field handbook](v0.4-field-test-handbook.md) describes these workflows.

## Verification

| Environment | Result |
| --- | --- |
| Build | Versioned assets built and the translation inventory passed. |
| Populated NC34.0.4 rehearsal | Upgraded 60 synthetic books on MariaDB. The installer allowed the scan-history migration adding nullable archive-count and error-sample columns. Earlier migrations matched the installed package byte for byte. A forced rollback restored the prior app, database, configuration and Library appdata. The second upgrade preserved catalogue fingerprints. |
| Signed-package browser journeys | Six Chromium journeys passed. Desktop and mobile covered saving once, rejecting stale decisions and reaching the end of the queue. Desktop also covered the mixed-folder scan report, reading summary and Home resume, pinning a collection and carrying a selection across pages. |
| Installed developer instance | The app integrity check passed. The JavaScript and CSS matched the package. Maintenance mode was off, the database upgrade was complete and cron was running. |
| Installed browser smoke | Desktop and mobile Chromium loaded the versioned assets, opened the reading summary and editor, and resumed review from Home. Both recorded zero page errors and zero book-update requests. The three synthetic source files retained their original hashes and the fixture accounts were removed. The final fingerprints for books, indexed files, lists, list entries, grants and selected share items matched the pre-upgrade fingerprints. |

The first developer restart exposed an unavailable host address in the container configuration. Service was restored through an already configured private interface before retrying. The local deployment helper now checks explicit port-binding addresses before maintenance. Private rollback backups and raw verification artifacts stay on the development system. The stable Store release remains 0.3.0.
