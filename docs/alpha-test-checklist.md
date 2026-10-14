# Public alpha test checklist

The current development candidate is **`0.3.0-alpha.9`**, deployed on the private developer Nextcloud 34 instance. The signed `0.2.0-beta.3` archive is the preserved release baseline; 0.3 is the planned first App Store submission. Historical `0.1.0-beta.1` and alpha.174 notes below are retained only for traceability. Accessibility-tree evidence is not screen-reader testing. Manual AT testing is pending.

Use the [Playwright journey suite](playwright-journeys.md) for repeatable browser workflows against a disposable instance. Use the [current 0.3 human cases](human-test-handbook.md#current-03-human-cases) for personal acceptance. This checklist covers package identity, source-file safety, real-file coverage and release-specific acceptance.

## Setup

For development acceptance, use the deployed alpha.9 developer instance or a disposable NC33–35 installation of the same source build. Record the installed version and commit. Once a signed 0.3 archive exists, repeat this checklist against the exact package, not a rebuild or checkout. The App Store package must be signed; see [RELEASE.md](../RELEASE.md).

1. For the release rehearsal, install the same signed 0.3 package into disposable Nextcloud 33.0.9, 34.0.4 and 35.0.0 instances, both fresh and upgraded from the preserved baseline. The alpha.9 source checks are focused feature evidence, not that release rehearsal.
2. Enable the app as a Nextcloud administrator.
3. Confirm background jobs are running.
4. Open `/apps/library/` as a normal user.
5. Open `/settings/user/library` as the same user.

Expected result: Library opens without browser console errors, and the settings page explains that Library indexes files already stored in Nextcloud Files.

## Catalogue/root smoke

1. Add a small root with 20-100 mixed real files if available.
2. Run **Scan this root**.
3. Wait for scan progress/history to show completion.
   Confirm the operation returns immediately, per-root publication counts remain visible, the current path advances while work is active, and cancellation remains available. If a running job becomes quiet past the stale threshold, verify the UI reports it as stale without rewriting its status to failed.
4. Browse the catalogue first, without using settings.
5. Verify compact cards show cover, title and **Open**; cover/title open a populated sidebar with Overview, Metadata, Activity and clickable author links. A heading with an empty body fails this check. The full maintenance route stays secondary.
6. Use search and at least one filter, preferably type, format, shelf, scan status, subject/classification or starred.
7. Open **Details** for one PDF, one EPUB and one CBZ when available.
8. Open one publication/series, publication-year and creator discovery page from the shortcut panels when the fixture contains matching metadata.

Expected result: source files stay in Nextcloud Files; Library only adds catalogue/index/metadata rows. Discovery pages keep compact cards in a named context; publication pages show **Publication contents** issue/date coverage when publication metadata exists.

## Reader/file actions

For at least one indexed item:

1. Click **Open**.
2. Click **Show in Files**.
3. Click **Download**.

Expected result: Open hands off to Nextcloud's existing file/viewer route, Show in Files opens the containing Files context, and Download returns the original file bytes.

## Metadata/editing smoke

1. Edit title/subtitle/creator/publication metadata on an item detail page.
2. Add or update description, workflow status, subjects and classifications.
3. Add one Nextcloud tag using typed input or a suggested tag button.
4. Add one Nextcloud comment.
5. Rescan the same root.
6. Reopen the item details.

Expected result: user-edited Library metadata survives the rescan. Nextcloud tags/comments remain separate from Library-native subjects/classifications.

For an unchanged-root regression check, run the same root twice after the current metadata pipeline has settled. The first run may warm fingerprint/revision markers; the second should preserve unchanged item timestamps while still reporting the fixture count as indexed. This verifies write avoidance, not a measured speedup.

## 0.3 identity and organization smoke

1. Run [H03-03 and H03-04](human-test-handbook.md#h03-03--author-directory-and-profile) for author profiles, selected-book reassignment, merge and conditional Undo.
2. Run [H03-05 and H03-06](human-test-handbook.md#h03-05--series-selected-book-move-and-undo) for selected-book series moves, whole-series merge, empty-source redirect and future imports.
3. Run [H03-07](human-test-handbook.md#h03-07--changed-imported-author-or-series-metadata) for a changed imported author or series field: manual relationships remain until reviewed, and a second source change returns to review.
4. Run [H03-02](human-test-handbook.md#h03-02--lists-filters-and-metadata-extraction) for lists, saved filters and reviewable path inference. Run [H03-08](human-test-handbook.md#h03-08--duplicate-and-mixed-format-judgment) for true duplicates versus different series issues.

Expected result: identity and organization changes affect account-owned catalogue relationships only. Imported names and source files remain available; stale previews and Undo refuse to overwrite later edits. Capture counts, names, part labels and before/after screenshots.

Historical alpha.171 baseline: the unsigned exact package was built from merged `main`, audited, installed on the private Nextcloud 34 test instance and live-smoked. Its package SHA-256 was `dee035479b847c091490ad7a57e9d04ef121180ddd6dd73ae7f6d5f00ac7e97f`; CI passed for the merged security-hardening commits, deployed checksums matched for the changed server files, safe-diagnostic reflection showed no SQLSTATE/table/exception leakage, and Vue route smoke ended with `vue_smoke_ok=true` plus temporary-token cleanup at zero.

Alpha.157 historical release baseline: the exact package passed checksum verification, install/enable, PHP lint, route listing, and live Vue/API and browser smokes. Browser console errors were zero and mutation restoration was verified. Both scans of the privacy-safe 40-file root reported `indexed=40`, `missing=0`, `errors=0`, zero catalogue rewrites, 40 markers and `source_observation_changes=0`; the run ended with `release_package_smoke_ok=true`. This is write-elision evidence only, not throughput or latency evidence.

Historical alpha.153 release baseline: the exact alpha.153 package also passed this check. Its warm-up rewrote 40 item rows and established 40 markers, while its unchanged second scan rewrote zero item rows and retained 40 markers. Keep this result labeled as historical alpha.153 evidence.

## Frontend request-race smoke

Before sign-off, rapidly change catalogue filters and confirm only the newest result remains visible; change detail metadata repeatedly and confirm saves settle on the latest values; rapidly activate each catalogue/detail star control and confirm only one request is accepted while pending. Simulate or observe a failed star request and confirm the control is restored with visible failure feedback.

## Metadata portability smoke

1. Use **Export corrected metadata**.
2. Use **Preview metadata import** with the exported JSON.
3. Use **Apply metadata import** only after checking the preview output.
4. Use **Export sidecar manifest** and inspect suggested `.library.json` paths.
5. Use **Export sidecar ZIP** and inspect the downloadable ZIP archive.

Expected result: preview reports matches and changed fields without writing; apply only updates matched existing Library items; manifest/ZIP are reviewable portability artifacts. None of these actions write sidecar files into source folders.

## Repair and deletion-boundary smoke

1. Try **Retry metadata errors** if metadata-error rows exist.
2. Try **Recheck missing files** after moving a fixture away and back in Nextcloud Files.
3. Try **Forget missing item** only for an item already marked missing.
4. Temporarily disable or delete a Library root from settings.

Expected result: Library removes or updates app-owned rows only. It must not delete source files from Nextcloud Files.

## Known alpha limitations

- Supported range: Nextcloud 33–35. Runtime smoke coverage is documented for 33.0.9, 34.0.4 and 35.0.0.
- Private, bounded thumbnails are generated on demand and reused; manual cover override/revert exists for individual items. A crop/rebuild workflow is not available.
- Sidecar manifest and sidecar ZIP are read-only/download-only. Source-folder OPF/JSON sidecar write-back is intentionally outside the app roadmap.
- Metadata import applies only to matched existing Library catalogue rows; fresh-install restore from sidecars belongs to external file-first tooling rather than the app.
- Scheduled incremental scans with periodic full reconciliation are available; admin Cron configuration and missed-event recovery still need observation during a release rehearsal. Scan notifications are not part of this pass.
- publication, publication-year and creator discovery pages exist, publication pages show **Publication contents** plus a visual issue strip, and built-in Useful views, a weak-metadata cockpit and in-app Custom collections exist. The metadata review workbench is also part of the current test pass; richer publication issue grouping remains post-v0.1 feedback beyond the current read-only summary.
- Shared/admin-managed roots are absent; users manage their own roots and Nextcloud permissions remain authoritative.
- One series relationship per book is supported; multiple series memberships and natural ordering of nonnumeric part labels remain open. Interactive series operations are limited to 500 books; larger sources can be moved in batches and the empty identity merged for future-import redirects.
- Library does not provide its own document reader, page-position sync, reader annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, shared/admin roots, internet metadata lookup or AI classification.

## Report format for testers

Please report:

- Nextcloud version and browser/device.
- Approximate number and type of files scanned.
- Which checklist step failed.
- What you expected versus what happened.
- Whether source files remained safe in Nextcloud Files.
