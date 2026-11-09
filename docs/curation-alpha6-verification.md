# Alpha.6 focused verification

Date: 2026-11-08. Source version: **0.4.0-alpha.6**. This record covers the local four-hour quality slice and is updated as focused runs complete.

**Current delivery:** signed alpha.6 is installed on developer NC34; the stable Store release remains 0.3.0. The original source-quality slice below is supplemented by [signed-package delivery](#signed-package-delivery). No full CI, GitHub Actions or Store publication ran. Fixtures contain generated books and synthetic accounts; raw logs, credentials, rollback backups and screenshots remain in private directories excluded from version control.

## Environments and upgrade evidence

| Nextcloud | Database | Completed focused source checks |
| --- | --- | --- |
| 34.0.4 | MariaDB | Populated alpha.5 → alpha.6, preserved books/lists/reused Files grants, physical schema, migration rerun, curation services and recovery |
| 34.0.4 | SQLite | Same populated upgrade and schema checks, curation services and recovery |
| 34.0.4 | PostgreSQL 18 | Same populated upgrade and schema checks, curation services and recovery; exposed boolean-SQL portability defects that were fixed |
| 33.0.9 | MariaDB | Populated source upgrade, schema, curation, native integration and recovery checks |
| 35.0.0 | SQLite | Populated source upgrade, schema, curation, native integration and recovery checks |

This is a focused environment sample, not every Nextcloud × database combination. The preserved alpha.5 baseline was a source fixture archive, not a recertified release package. No downgrade was attempted during that source-quality slice; the later signed-package delivery includes a backup-restoration rehearsal. Rollback requires matching database/appdata backups and the prior package; EPUB source writes additionally require original Files bytes.

## Functional evidence

- **Organisation/history:** ordered author replacement/add/remove/clear, deduplication, genre changes, series/part removal, language aliases, idempotent create, apply/Undo and later-edit rejection. Account ownership and missing-root cases are checked. Simultaneous prepare/apply workers on MariaDB, SQLite and PostgreSQL produce one mutation receipt per book. Undo also checks the live source before scanner reconciliation; changed bytes block stale Undo.
- **Portability:** same-account round trips plus SQLite → MariaDB and MariaDB → PostgreSQL/SQLite transfers into different synthetic accounts. Checks cover destination IDs, author order/profile, series part, parent genres, source evidence, explicit cover removal, list order/unavailable entries, shelf-bound collections, preferences, folder-rule IDs, mappings, notes and retained history. Source and note bytes are not exported or changed. Missing-book history conflicts are expected and reported.
- **Restore recovery:** interrupted upload resumes after the server accepted a chunk but its response was lost; identical records are idempotent. An injected database write failure pauses restore with the pending record intact; resume succeeds after removing the fault. Skip/Include and approval cancellation are exercised. Empty archives complete as no-ops. Serialized framing and manifest bytes count toward the 1 GiB limit; identical upload retries work at quota. Review records are capped at 128 KiB and imported-history evidence at 512 KiB. Incomplete relationship indexing blocks export and pauses restore with an actionable reason; resuming does not duplicate authors.
- **EPUB writes:** EPUB 2/3 metadata changes preserve non-package ZIP entries and the unique publication identifier. Invalid/protected/complex selected metadata is rejected. Service checks cover preview, apply/retry, exact original restoration, stale metadata/etag, damaged staged candidate/original, replacement files, unrelated external changes and unresolved-backup retention. An injected receipt failure rolls bytes back; a competing `r+` stream blocks writing without changing the source.
- **Genres:** depth limit, cycles, stale/foreign parents, descendant closure, distinct counts, parent preview books, moves and idempotent starter installation preserving custom identity.
- **Notes and native integrations:** rename/unlink, deleted-note privacy, missing/read-only sources, account-isolated history/reference/search, Dashboard registration and owned-book results. Independent notes/history failure states are covered in component checks. Generated note headings escape imported Markdown/HTML as literal text. Deleting Home’s selected list falls back to To-read books.
- **Lifecycle:** 52-book incoming review covers keyset pages, empty filtered windows, unchanged rescans, defer expiry, metadata-driven reopening and hidden books. Catalogue deletion cleans curation/history/note links while retaining unavailable reading-list entries and Files bytes. Account cleanup and the actual account-deletion event remove private records/recovery files without changing other owners; repeated cleanup is safe. Failure injection confirms one maintenance task cannot block unrelated worker pipelines.
- **Providers:** deterministic fake HTTP/cache fixtures cover result ordering, ISBN mismatch warnings, fixed Open Library work-edition URLs, membership and paging bounds, cache behavior, approval invalidation, selected edition application and Undo. No live provider calls are needed for these checks.
- **Legacy sharing:** exact managed-share removal, missing/changed markers, changed permissions/expiry, wrong folder/recipient, interrupted create, numeric share IDs, shutdown failure/retry and preservation of Files contents. Modified or unverifiable shares remain for manual review while Library access is hidden.

## Browser and component evidence

The focused Playwright suite covers incoming review, organisation apply/Undo, classifications, linked notes, EPUB apply/restore, archive upload/review, genre parent keyboard selection, Home preferences and actual Nextcloud Search/Reference/Dashboard endpoints. Desktop Chromium, desktop Firefox and a 390-pixel mobile Chromium viewport are used. Screenshots inspect both themes, visible focus, menu wrapping and stacked review rows. Browser errors are asserted, with only specific injected failures and the known Nextcloud login asset response allowed.

Completed focused browser sets: curation workflows (12), real HTTP/CSRF and cross-owner access (2), provider lookup (9), alternative editions (6), 100k browsing (2), maximum organisation review (3), and German long-name desktop/mobile layouts (3). The Text companion matrix adds six passing journeys (enabled/disabled on all three browser layouts), for 43 journeys. The complex-EPUB field refusal/recovery journey passes on all three layouts too, making **46 distinct passing Library journeys**. Three additional reader-compatibility journeys pass, each opening six publications, for **49 journeys in total**; companion diagnostics are recorded below. Text can normalize Markdown during opening; visible literal headings and absence of remote image/link requests are checked. The Files-only fallback preserves the current document bytes.

The component subset includes candidate selection and edition paging, accessible labels, keyboard entity selection, classifications, notes/history failures and stale responses, metadata lookup/cover controls, unsaved-change handling and return navigation. The latest recorded subset passed **49 tests across 12 files**. This is not the entire frontend suite or manual assistive-technology testing.

## Synthetic 100k-book measurements

Generated metadata-only catalogue; local disposable NC34/MariaDB, not the personal catalogue or 100k actual source files. Service runs use six samples; browser warm medians exclude the initial navigation. These figures are evidence for this fixture, not a universal response-time guarantee.

| Service | Before, warm median | After, warm median |
| --- | ---: | ---: |
| Incoming review | 574 ms | 7.13 ms |
| Home | 966 ms | 95.13 ms |
| Sorted 50-book control | 541 ms | about 500 ms |

The change avoids a root-first join plan and batches Home hydration. The measured PHP peak dropped from about 50.9 MiB to 35.7 MiB in the fixture process.

| Browser journey | Desktop warm median / maximum | Mobile warm median / maximum |
| --- | ---: | ---: |
| Incoming review | 551 / 851 ms | 600 / 870 ms |
| Home | 576 / 731 ms | 558 / 581 ms |
| Incoming filter | 98 / 388 ms | 96 / 308 ms |

Timings end at usable DOM; cover image completion is asynchronous. The measured journeys meet the two-second target in this fixture. No claim is made for live provider latency or the real developer catalogue.

## Maximum organisation and large EPUB boundaries

A second disposable owner on the 100k fixture has **5,000 generated source PDFs**. Selection of 5,001 is rejected; a 5,000-book request queues in 12.2 ms (229-byte response). Preparation takes 45.8 s, approved Apply 157.4 s and Undo 135.8 s. All 100 review pages preserve each book once; pause/resume makes no paused writes, and each book has one organisation receipt. PHP peak is 26 MiB. These are background-job durations, not synchronous UI waits.

Final review-page browser measurements:

| Browser | Initial page | Repeated page-change median |
| --- | ---: | ---: |
| Chromium desktop | 935 ms | 110 ms |
| Firefox desktop | 1,087 ms | 173 ms |
| Chromium mobile | 824 ms | 98 ms |

Responses were about 13.9 kB. An earlier Firefox cold navigation under simultaneous test load took **2,134 ms**; retain that outlier. Repeated page changes meet the two-second target. Mobile review rows stack without horizontal overflow.

A **133,170,248-byte (127 MiB) EPUB** streams through preview, write and exact original restoration on NC34 with MariaDB, SQLite and PostgreSQL. PHP heap growth stays within 4–6 MiB; peak is about 48.5 MiB. The final preview/write/restore phases take 7.45 s on MariaDB, 7.38 s on SQLite and 7.52 s on PostgreSQL. A source exceeding 128 MiB is rejected without changing bytes. The standalone writer has **51 passing assertions**, including EPUB 2/3, preserved non-package entries, protected files, ZIP path traversal, DOCTYPE, oversized XML, multiple renditions and complex metadata. Remote/encrypted-storage and reader interoperability remain separate checks. Complex-field refusals identify the affected field so users can preserve it and preview an ordinary field instead.

Independent validation with [W3C EPUBCheck 5.4.0](https://github.com/w3c/epubcheck/releases/tag/v5.4.0) reports **zero errors and warnings for six generated publications**: original EPUB 2/3, each reviewed publication, and each publication with ordinary creators cleared. The official validator download was checked against its release digest. `tests/php/epub_conformance_fixtures.php` reproduces the synthetic inputs. This verifies publication structure; reader evidence is separate below.

### Companion reader check

On disposable NC34, **EPUB Viewer 1.9.19** opens all six files through Library’s **Open** link in desktop Chromium, desktop Firefox and mobile Chromium: 18 successful opens across three journeys. Checks cover the publication title, chapter text, emphasis, a local PNG, stylesheet colour, internal navigation and unchanged source hashes. Desktop/mobile screenshots are retained privately. The initial image fixture had a corrupt PNG checksum; a generated, decoded PNG replaced it before the final validation and reader runs.

The reader is **not console-clean**: duplicate viewer registration and blocked base-URI messages occur on unmodified originals too. Chromium’s sandbox also reports blocked script execution while the test probes image properties. The test retains these diagnostics, allows only their narrowly matched signatures, and rejects unrelated errors. No companion security setting was relaxed. This is evidence for one reader/version and synthetic publications, not certification of all reading apps or complex real-world EPUBs.

## Large curation archive and storage boundaries

The 5,000-book owner round-trips **20,001 records** (20,697,861-byte archive): one author, 5,000 books and 15,000 retained history records. Export takes 87.0 s, validation 146.2 s and approved restore 308.3 s. The 1,001 upload batches have a 38.69 ms median and 50.98 ms maximum. Worker PHP peak is 26 MiB; the whole harness, including all source-file hash checks, peaks at 44 MiB. All saved book values and 5,000 source hashes are preserved; bounded archive cleanup completes. This is a substantial round trip, not a physical 1 GiB archive test.

The initial run exposed incomplete fixture author indexing: the indexer clamps each call to 500 records. The fixture now drains bounded passes. Product checks also refuse exports with pending/failed relationships and pause restore with an actionable indexing reason. Both the failed attempt and corrected run remain in private evidence.

A real Nextcloud-to-Nextcloud WebDAV mount is tested writable and read-only. A separate fixture uses actual Nextcloud server-side encryption. In all three cases, scanning, reading and Library-only edits work; source write-back is refused before a writable stream opens, no misleading preview is retained, and original bytes remain unchanged. Remote source etags also remain unchanged.

**Write-back support is intentionally limited to writable local filesystem storage.** A seekable WebDAV stream can be a temporary file uploaded only on close, so seekability alone does not establish safe verification or rollback. Remote/encrypted support requires a separately designed and tested commit/recovery protocol; it is not implied by these refusal tests. The restriction is checked during preview and again during Apply/Restore, and explained in the UI. A real named-user Files share is also downgraded from writable to read-only after preview: Apply refuses it, retains the original and Library edits, and succeeds/restores exact bytes only after permission is granted again. This sequence passes in all five environment samples. Author write-back waits for indexing, preserves canonical order, and does not revive imported names when assigned authors were explicitly cleared.

## Source checks and remaining acceptance

The current frontend build has one runtime module, no dynamic runtime chunks and a 915,329-byte runtime bundle. The complete frontend asset total is **1,196,399 bytes**, below the unchanged 1,320,000-byte budget. Translation checks cover **1,809 keys**, complete English/German, the existing Arabic fallback exception, nine approved identical translations and 92 semantic sentinels. Focused PHP lint covers 63 changed/new PHP files; shell syntax checks cover eight scripts. XML, diff whitespace and changed-file privacy checks also pass. The privacy scan examines 142 text files for personal paths, infrastructure references and credential patterns; it is not a new public-history audit. No full CI or release gate ran.

Remaining work includes broader release certification; real-catalogue performance measurements; a physically maximum-sized 1 GiB archive; broader reader interoperability and any future remote/encrypted write support; the wider companion editor matrix; remaining mutation-source history coverage; manual accessibility; and current provider policy/retention review. Keep the relevant acceptance issues open. Do not infer completed release certification from this record.

## Original source-quality handoff

The bulk-boundary, HTTP-access and reader accounts were removed after their final checks. Thirteen disposable containers from this slice were stopped, with private evidence and volumes retained for investigation. At that checkpoint the developer instance was unchanged and source changes were uncommitted. The subsequent delivery is recorded below.

## Development delivery preparation

The development package uses the locally verified alpha.6 source and built assets. The dedicated migration-aware deployment helper accepts only the new alpha.6 migration, preserves existing migration bytes, checks signing identity and package provenance, and captures database, configuration, app and Library appdata rollback copies. Database restoration removes newly introduced tables as well as restoring existing rows. A rollback rehearsal is restricted to labelled disposable instances.

Focused pre-package checks: frontend build, translation inventory, 35 component tests across 10 affected files, 63 PHP syntax checks, standalone EPUB writer checks, shell syntax and changed-file privacy review. These supplement the quality-slice evidence above; they do not constitute full CI or a release gate. Signed-package upgrade and installed deployment results follow below.

## Signed-package delivery

This historical checkpoint installed **0.4.0-alpha.6** from the following archive. It has since been superseded by [alpha.7 intake delivery](intake-alpha7-verification.md). The stable Store release remains **0.3.0**.

| Artifact | Recorded value |
| --- | --- |
| Packaged source commit | `df0fffdc006c29a00f1b0764a1f5fe0f965eae58` |
| Archive | `library-0.4.0-alpha.6.tar.gz` |
| SHA-256 | `77d5da69f0725fb71c1eae20f8335413530fb7bfb1ad7ecd6e74bf5ff7d49556` |
| Signature | Signed with the existing app certificate; installed integrity clean |
| Verification artifacts | Matching SPDX SBOM, build provenance and checksum file retained with the private development package |
| Environment | Nextcloud 34.0.3 / MariaDB, populated signed alpha.5 upgrade |
| Frontend assets | 1,196,399 bytes; unchanged 1,320,000-byte budget |

### Exact-package verification

- Preserved existing books, file records, lists, list entries and sharing grants; physical schema and migration rerun checks pass. Curation Apply/Undo, ownership boundaries, archive failure recovery and EPUB write/restore checks pass on the exact package.
- Rehearsed a forced failure after migration on a disposable instance. Database, app, configuration and Library appdata restoration returned it to alpha.5 with matching catalogue fingerprints. A second upgrade using the same helper succeeded.
- Thirteen focused Playwright cases pass on the signed disposable installation: eleven curation/native/sharing cases and two editor cases, across desktop Chromium and mobile Chromium. An additional two-case smoke verifies Home, incoming books, notes and exact EPUB byte restoration.
- The first candidate exposed stale maintenance-page asset names. The replacement shares the current catalogue constants, updates the startup watchdog/version marker and rejects stale PHP asset references during package audit. The rejected candidate was never deployed. Two focused asset-contract checks and the PHP maintenance-loader regression check pass.
- Retained failed attempts: fixture restarts reassigned its ephemeral port, and restoring the baseline removed its Dashboard reading-status fixture. Correcting the fixture address and reseeding that status resolved those setup failures. The strengthened EPUB browser check waits for the current operation, not an older restored-job label.

### Installed smoke and preservation

The developer deployment captured private database, configuration, application and Library appdata rollback backups before migration. Integrity, physical schema, current assets and installed version pass. Maintenance mode is off and cron is running.

Six desktop/mobile live journeys pass using three generated accounts and three generated books: Save/Discard and stale-edit rejection; selected-book sharing, download ranges, outsider denial and revocation; Home, incoming books, notes, EPUB Apply/Restore and layout checks. Synthetic source hashes match their originals after restoration. All three accounts and their files were removed. Existing catalogue/list/share fingerprints match both immediately after migration and again after smoke cleanup; existing personal books were untouched.

Initial live login encountered the Nextcloud welcome overlay and unrelated Dashboard recommendation-preview errors. Only disposable-account preferences were changed to dismiss the welcome dialog and land in Library. The final Library editor checks pass without weakening their console assertions; no instance-wide welcome or landing-page setting was changed.

The package and changed text passed a private-data/credential pattern review. Logs, raw screenshots, fixture credentials and rollback copies are excluded from public commits. Follow-up documentation and test-only commits do not alter the signed archive or its recorded source commit. No full CI, GitHub Actions, full release gate or App Store publication was run. Broader reader/companion acceptance, manual accessibility, provider-policy review and release certification remain open.
