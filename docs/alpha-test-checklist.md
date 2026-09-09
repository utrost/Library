# Public alpha test checklist

Use this Public alpha checklist before Uwe's v0.1 manual test pass on `0.1.0-alpha.137` and for early tester feedback. For the full repeatable script, use the [human test handbook](human-test-handbook.md).

## Setup

1. Install the package produced by `scripts/package-release.sh` into a disposable or test Nextcloud 34 instance.
2. Enable the app as a Nextcloud administrator.
3. Confirm background jobs are running.
4. Open `/apps/library/` as a normal user.
5. Open `/settings/user/library` as the same user.

Expected result: Library opens without browser console errors, and the settings page explains that Library indexes files already stored in Nextcloud Files.

## Catalogue/root smoke

1. Add a small root with 20-100 mixed real files if available.
2. Run **Scan this root**.
3. Wait for scan progress/history to show completion.
4. Browse the catalogue first, without using settings.
5. Verify compact cards show cover, title, **Read** and **Details** by default.
6. Use search and at least one filter, preferably type, format, shelf, scan status, genre/classification or starred.
7. Open **Details** for one PDF, one EPUB and one CBZ when available.
8. Open one publication/series, publication-year and creator discovery page from the shortcut panels when the fixture contains matching metadata.

Expected result: source files stay in Nextcloud Files; Library only adds catalogue/index/metadata rows. Discovery pages keep compact cards in a named context; publication pages show **Publication contents** issue/date coverage when publication metadata exists.

## Reader/file actions

For at least one indexed item:

1. Click **Read**.
2. Click **Show in Files**.
3. Click **Download source**.

Expected result: Read hands off to Nextcloud's existing file/viewer route, Show in Files opens the containing Files context, and Download source returns the original file bytes.

## Metadata/editing smoke

1. Edit title/subtitle/creator/publication metadata on an item detail page.
2. Add or update description, workflow status, genres and classifications.
3. Add one Nextcloud tag using typed input or a suggested tag button.
4. Add one Nextcloud comment.
5. Rescan the same root.
6. Reopen the item details.

Expected result: user-edited Library metadata survives the rescan. Nextcloud tags/comments remain separate from Library-native genres/classifications.

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

- Nextcloud 34 is the only supported target for this alpha.
- Covers are on-demand; manual cover override/revert exists for individual items, but there is no app-owned cover cache or crop/rebuild workflow.
- Sidecar manifest and sidecar ZIP are read-only/download-only. There is no OPF/JSON sidecar write-back into source folders yet.
- Metadata import applies only to matched existing Library catalogue rows; a fresh-install restore flow is not complete.
- Scan scheduling, resumable scans and notifications are absent.
- publication, publication-year and creator discovery pages exist, and publication pages show a compact **Publication contents** issue/date summary; built-in Useful views, a weak-metadata cockpit and in-app Custom collections exist, while richer publication issue grouping is not part of this test pass.
- Shared/admin-managed roots are absent; users manage their own roots and Nextcloud permissions remain authoritative.
- Library does not provide its own document reader, page-position sync, annotations, OCR/full-text search, OPDS/Kobo/Kindle integration, internet metadata lookup or AI classification.

## Report format for testers

Please report:

- Nextcloud version and browser/device.
- Approximate number and type of files scanned.
- Which checklist step failed.
- What you expected versus what happened.
- Whether source files remained safe in Nextcloud Files.
