# Library human test handbook

## Current source-candidate test status

Version under test: `0.1.0-alpha.171`. The current Alice deployment includes the accessibility/catalogue cleanup, ISBN/ISSN identifier spine, indexed substring search, mobile filter panel, high-cardinality typeaheads, and the review issue batch (#32-37).

Packaging: **used for the current private deployment**. Deployment: the exact unsigned `dist/library-0.1.0-alpha.171.tar.gz` package is installed in the private Nextcloud 34 test container. Run the installed-instance cases against `http://100.123.149.120:8088/apps/library/`; archive/package-identity assertions are applicable after each documented package rebuild/deploy.

## Identifier and search first pass

Run this focused pass after the current candidate package is deployed. It covers ISBN/ISSN storage, validation warnings, exact normalized search, the indexed arbitrary-substring catalogue search path, safe diagnostics and metadata-error TSV hardening; it does not cover DOI/OCLC/LCCN, external metadata lookup, or full type-aware field layouts yet.

### A168-01 — ISBN/ISSN edit, warning, and search

Setup: choose one disposable item you can safely edit, preferably a book or periodical. Keep its original identifier values in your notes so they can be restored.

Steps:

1. Open the item's **Advanced details** page.
2. In **Identifiers**, enter a valid ISBN such as `978-0-306-40615-7` and save.
3. Search the catalogue for `9780306406157` and then `978 0 306 40615 7`.
4. Replace the value with an invalid checksum such as `978-0-306-40615-8` and save.
5. Confirm the item remains editable and visible, and that Library shows an invalid-identifier warning/Attention item instead of deleting or silently rewriting the value.
6. If testing a periodical, repeat with ISSN `0378-5955` and search for `03785955`.
7. Restore the original values or clear the disposable test values.

Expected result: valid ISBN/ISSN values keep the display punctuation, also search by normalized exact value, and invalid checksums are retained with a warning. No source publication file is rewritten.

Failure evidence: item ID/title, entered display value, searched value, URL/query, screenshot of the identifier field and warning, whether the value changed unexpectedly, and console/server error if visible.

## Alpha.166/167 manual assistive-technology matrix

Automated DOM and CDP accessibility-tree evidence is not screen-reader testing. Each row remains **manual AT testing pending** until a named tester records OS, browser, AT version, date, tested surface, result, and defects.

| Environment | Required checks | Status |
|---|---|---|
| Windows + current Firefox or Chrome + NVDA | Landmarks/headings; Catalogue/Review order; search/filter names; disclosure and star states; sidebar/dialog announcement, Escape, containment and return; loading/error/empty announcements; table headers; mixed German/Arabic/Latin pronunciation; 200%/400% reflow and forced colors | **manual AT testing pending** |
| macOS + Safari + VoiceOver | Same checks, including modal announcement and rotor navigation | **manual AT testing pending** |
| Linux + Firefox + Orca | Same checks, including table navigation and browse/forms modes | **manual AT testing pending** |

This handbook is the repeatable human QA script for Library v0.1 testing. Uwe's browser testing is the controlling release-candidate verdict; automated checks cover non-browser contracts, packaging and server installation only.

## Alpha.166/167 executable first pass

Run these concise cases before the enduring safety cases below. Keep the browser console open throughout.

This pass covers visible search, selection-gated batch actions, Review/status meaning, bounded Settings summaries, and collapsed scan history.

### A166-01 — Mixed-direction layout, sidebar/dialog focus, and manual AT matrix

Setup: index an item whose title mixes Arabic, German, digits, and an LTR file path. Test once at desktop width and once near 390 px; then repeat the relevant checks in every available row of the manual AT matrix above.

Steps:

1. Switch the UI between English, German, and Arabic and inspect navigation, cards, facts, paths, and action order at 200% and 400% zoom.
2. On desktop, open the item from its cover/title and verify a desktop complementary sidebar keeps the catalogue context visible.
3. Close with Escape, reopen with keyboard, and verify focus return to the exact opener.
4. At mobile width, verify a mobile modal is announced, focus starts inside it, Tab/Shift+Tab stay contained, Escape closes it, and focus returns.
5. Complete the manual AT matrix rows available to the tester, recording the named AT/browser/version and result.

Expected result: mixed-direction and RTL text remains isolated and readable without changing control order or causing horizontal page scrolling; desktop is complementary, mobile is modal, and focus/Escape/return behavior matches the steps. Automation is not substituted for manual AT testing.

Failure evidence: locale, viewport/zoom, exact mixed text and path, screenshot or recording, active element before/after, AT/browser/version, console output, and failed matrix row.

### A167-01 — Calm catalogue controls and contextual actions

Setup: open a non-empty catalogue containing an item with valid Open, Files, Download, and details routes.

Steps:

1. On desktop, confirm visible Search/Filter/Sort/View controls; on mobile width, confirm the grouped **Filters** trigger shows active count, result count, **Clear all**, and a primary show-results action.
2. Search for a visible item, search for a short middle substring of that item title/creator/path, apply one filter, change sort and view, then clear the search/filter.
3. Open that item’s sidebar and activate or inspect, in order, **Open**, **Show in Files**, **Download**, and **Advanced details**.

Expected result: desktop and mobile filter controls are stable for their breakpoint; arbitrary substring search returns expected matches; results respond to each control; Open is the primary sidebar action and the other three are secondary and route to the selected item.

Failure evidence: full toolbar/sidebar screenshot, search/filter/sort/view values, selected item ID, link text and destination, final URL/status, and console errors.

### A167-02 — Explicit selection and every batch control

Setup: show at least three visible owned items A, B, and C. In a disposable test session, prepare to record direct requests with absent, empty, scalar, malformed-ID, mixed-invalid, duplicate, non-positive, and oversized item-ID input as syntax checks, plus syntactically valid selections containing unowned or nonexistent IDs as an ownership check; the ordinary UI is not expected to construct invalid input.

Steps:

1. With zero selected, confirm selection-gated batch controls are unavailable; select one visible item and verify the displayed count is 1, then select another and verify 2.
2. For selected items only, exercise **Add tag**, **Remove tag**, **Reset metadata**, **Preview edit**, and **Fresh covers**, verifying the selected count/IDs at confirmation or preview before accepting mutations.
3. Clear selection and confirm the controls become unavailable. As a security/runtime check, record separate direct requests with absent, empty, scalar, malformed, mixed-invalid, duplicate, non-positive, and oversized input. Verify that each request is rejected before mutation, with no mutation performed.
4. Submit a syntactically valid selection containing owned IDs A and B together with unowned and nonexistent IDs. Verify that the unowned/nonexistent IDs are ownership-filtered and are not mutated, while the valid owned selected IDs may proceed. Verify that unselected visible C is not affected.

Expected result: every selection-gated batch control operates only on explicit selected visible owned IDs, and counts track visible selections. Absent, empty, scalar, malformed, mixed-invalid, duplicate, non-positive, and oversized input is rejected before mutation. For a syntactically valid selection, unowned/nonexistent IDs are ownership-filtered and are not mutated, while valid owned selected IDs may proceed. Actions on selected A/B do not affect visible C.

Failure evidence: before/after item IDs and values, displayed count, submitted `itemIds[]`, action/response/status, validation message, and screenshots showing any unintended change.

### A167-03 — Review groups, queue navigation, and actions

Setup: prepare representative items for each queue or record zero-count groups: Suggested updates, Needs details, File problems, Cover problems, and Imported changes.

Steps:

1. Open Review and count the top-level groups.
2. Open each group, verify its label/count and that its URL/filter returns the matching queue; use back/forward and a copied URL.
3. In Suggested updates, inspect current/suggested/provenance values, use **Skip to next suggestion**, then use **Use suggested value** on a disposable field and open **Advanced details**.

Expected result: exactly five Review groups appear; queue URLs remain navigable and restorable; empty queues explain themselves; skip advances without mutation, accept changes only the chosen field, and Advanced details opens the queued item.

Failure evidence: Review screenshot, all five counts/URLs, item/field before and after, navigation sequence, action response, and console errors.

### A167-04 — Four metadata-status meanings

Setup: choose representative items with missing required metadata, strong embedded metadata, an actionable conflict/problem, and a user edit or personal rating/star.

Steps:

1. Open each item’s Advanced details and record Completeness, Confidence, Attention, and Personal.
2. Compare a complete item with an incomplete one, a strong-source item with a weak/filename-derived one, and an attention item with a clean one.
3. Add or remove a personal value and confirm only Personal changes unless the edited field genuinely affects another status.

Expected result: Completeness describes required-field coverage; Confidence describes source trust; Attention names actionable issues; Personal reports user-owned state such as edits/rating/star. The four concepts do not collapse into one score.

Failure evidence: representative item IDs/types, status labels/explanations before and after, metadata sources, missing/conflicting fields, and screenshots.

### A167-05 — Bounded Settings information architecture

Setup: use Settings with at least one root, a completed scan, and enough indexed files that an unbounded file-row listing would be obvious.

Steps:

1. Count the top-level sections: Folders and scanning, Metadata and covers, Import and export, and Diagnostics.
2. Inspect counts/summaries in each section and verify current scan progress remains visible when applicable.
3. Confirm scan history starts collapsed, expand it, inspect bounded recent entries, then collapse it again.

Expected result: exactly four Settings sections appear; summaries stay bounded and do not render the full catalogue; scan history is collapsed by default and remains usable when expanded.

Failure evidence: Settings screenshot, section count/names, visible row/count totals, scan-progress state, collapsed/expanded history state, load timing, and console errors.

After this first pass, continue with **LIB-HARDEN-001**, **LIB-HARDEN-003**, and **LIB-HARDEN-011**, then the remaining safety cases.

Stop and report immediately if the page stays blank, the startup recovery notice appears during a normal load, controls cannot be reached or escaped by keyboard, content overlaps or requires sideways page scrolling, mixed Arabic/Latin text changes control order, or any source file appears to change during Library-only metadata work.

Related docs:

- [User and admin guide](user-guide.md)
- [Public alpha test checklist](alpha-test-checklist.md)
- [Current state and risk register](current-state-and-risk-register.md)
- [Release process](../RELEASE.md)

## Session header template

Record this at the top of every manual test note:

```text
Date:
Tester:
Library app version:
Nextcloud version:
Install source: generated archive / checkout / other
URL:
Device/browser:
Viewport or phone model:
Network:
Approximate files scanned:
Result: Pass / Fail / Blocked / Not applicable
Evidence links/files:
Notes:
```

## Result vocabulary

- **Pass:** the expected result happened and no release-blocking issue was observed.
- **Fail:** the expected result did not happen, source-file safety was questionable, or a browser/runtime error blocked the workflow.
- **Blocked:** the case could not be executed because the environment was unavailable or setup failed.
- **Not applicable:** the case does not apply to the current fixture, for example no CBZ file is available.

## Critical pass criteria

For v0.1 testing to start, these must pass on the packaged app, not just the working checkout:

1. The exact `dist/library-0.1.0-alpha.171.tar.gz` is installed and enabled on the private Nextcloud 34 test instance; confirm the visible behavior is the candidate described here.
2. `/apps/library/` and `/settings/user/library` load for a normal user without Library-specific console errors.
3. Adding a root, scanning it, browsing compact cards, opening sidebar details, and using Open/Show in Files/Download works.
4. Editing Library metadata survives a rescan and stays separate from Nextcloud tags/comments.
5. Corrected metadata export, import preview/apply, sidecar manifest, and sidecar ZIP are visibly safe and do not write into source folders.
6. Root deletion and missing-item forget affect app-owned catalogue/index rows only; source files remain in Nextcloud Files.

## Test cases

### LIB-HARDEN-001 — Package install and app shell

Purpose: prove the tester is using the generated release archive.

Setup: use the private Nextcloud 34 test instance where the exact `dist/library-0.1.0-alpha.171.tar.gz` candidate is installed and enabled.

Steps:

1. Open `/apps/library/` as a normal user.
2. Open `/settings/user/library` as the same user.
3. Check the visible app version or installed app version if available.
4. Open browser developer tools and inspect console output.

Expected result: both pages load; the app is version `0.1.0-alpha.171`; no Library-specific JavaScript error appears. Home and Shelves load bounded server-backed summaries, Catalogue loads its paginated results and additive facets, Review shows the focused native cleanup destination, copied queue URLs preserve the selected filter, and Settings reaches the existing personal-settings page.

Evidence to capture on failure: screenshot, URL, browser console errors, Nextcloud app version, and whether the app came from the generated archive.

### LIB-HARDEN-002 — First root and scan

Purpose: prove a fresh tester can move from empty Library to browsable catalogue.

Setup: choose a small folder with 20-100 EPUB/PDF/CBZ files if available.

Steps:

1. Open `/settings/user/library`.
2. Add the folder as a Library root with a clear label.
3. Run **Scan this root**.
4. Wait until scan progress/history shows completion.
5. Return to `/apps/library/`.

Expected result: compact catalogue cards appear and source files remain in Nextcloud Files.

Evidence to capture on failure: root path/label, scan status summary, first error row, and whether any source file changed unexpectedly.

### LIB-HARDEN-003 — Catalogue browsing, search and filters

Purpose: prove the main browse loop is useful before testing deeper editing.

Setup: an indexed root with enough items to browse. If possible, choose or edit one item so a memorable word appears only in its Library description.

Steps:

1. Confirm cards show cover, title, **Open**, and the secondary actions menu by default.
2. Use text search for a title/creator/path term.
3. Use description-only search: search for a term that appears only in an item's Library description.
4. Apply at least two filters, preferably format plus publication year or shelf.
5. Remove filters through active chips.
6. Open one creator shortcut if the fixture has creator metadata.
7. Change sort and page size.

Expected result: the grid updates predictably; description-only search finds matching catalogue items; compact cards stay compact and do not show long description snippets by default; Details owns secondary metadata/actions; creator shortcuts open named discovery pages rather than broad text searches.

Evidence to capture on failure: screenshot before/after, active URL query, search term, filter values, and visible result count.

### LIB-HARDEN-004 — Reader and file actions

Purpose: prove Library does not need to own document rendering for v0.1.

Setup: one indexed item that Nextcloud can open.

Steps:

1. Click **Open**.
2. Return and click **Show in Files**.
3. Return and click **Download**.

Expected result: Open hands off to Nextcloud's file/viewer route, Show in Files opens the containing Files context, and Download returns the original file bytes.

Evidence to capture on failure: item title, source extension, final URL, HTTP status if known, and whether the file opens directly in Nextcloud Files.

### LIB-HARDEN-005 — Details metadata edit and rescan protection

Purpose: prove manual Library metadata is safe against rescans.

Setup: one indexed item.

Steps:

1. Open Details.
2. Change title or subtitle to a recognizable test value.
3. Save.
4. Rescan the containing root.
5. Reopen Details.
6. Reset the changed field to scanner candidate if a safe candidate is available, or restore the original value manually.

Expected result: the manual value remains after rescan and the scanner provenance/candidate area explains differences.

Evidence to capture on failure: before/after values, provenance summary, scan status, and item ID.

### LIB-HARDEN-005A — Unchanged-file fast path

Purpose: prove the alpha.154 optimization avoids catalogue writes on a second ordinary unchanged scan without weakening repair behavior.

Setup: complete the alpha.154 migration and use a non-empty configured root whose source files and selected OPF sidecars will remain untouched during the test.

Steps:

1. Run an ordinary root scan once; this may warm nullable fingerprint/revision markers after upgrade.
2. Snapshot item IDs and their exact `updated_at` values in a private test context.
3. Run the same ordinary root scan again without changing its files or sidecars.
4. Compare the complete per-item timestamp map, row count, marker count and source path/ETag/mtime/size/MIME observations.

Expected result: both scans index the fixture count with one root, zero errors and zero missing files; the second scan rewrites zero catalogue rows, row/marker counts remain stable and `source_observation_changes=0`. This proves equality of the before/after path/ETag/mtime/size/MIME observations, not instrumentation of source writes or comparison of content bytes. Do not infer timing improvement: performance instrumentation remains future work.

### LIB-HARDEN-006 — Nextcloud tags and comments stay separate

Purpose: prove file-level collaboration metadata does not mutate publication metadata.

Setup: one indexed item and one visible/assignable test tag.

Steps:

1. Add a Nextcloud tag from item Details using suggested tags or typed input.
2. Add a short test comment.
3. Confirm both appear on Details.
4. Check publication metadata fields are unchanged.
5. Remove the temporary tag/comment if desired.

Expected result: tags/comments change file-level metadata only; Library title/creator/publication fields stay unchanged.

Evidence to capture on failure: tag/comment names, item ID, and before/after publication fields.

### LIB-HARDEN-007 — Metadata portability roundtrip

Purpose: prove users can export and cautiously re-apply corrected metadata.

Setup: at least one user-edited item.

Steps:

1. Export corrected metadata.
2. Preview that JSON through metadata import preview.
3. Apply metadata import only after checking preview counts.
4. Reopen the edited item.

Expected result: preview reports matched existing items; apply updates matched Library items only; invalid rows are skipped rather than aborting the whole batch.

Evidence to capture on failure: exported JSON filename, preview counts, apply result counts, and item ID. Do not paste private metadata broadly unless needed.

### LIB-HARDEN-008 — Sidecar manifest and ZIP safety

Purpose: prove sidecar portability artifacts are reviewable and non-destructive.

Setup: at least one corrected metadata row.

Steps:

1. Export sidecar manifest.
2. Export sidecar ZIP.
3. Inspect file names inside the ZIP.
4. Check the source folder in Nextcloud Files.

Expected result: manifest/ZIP contain proposed `.library.json` paths and metadata; no `.library.json` files are written into source folders by these exports.

Evidence to capture on failure: manifest entry, ZIP listing, source-folder screenshot.

### LIB-HARDEN-009 — Repair controls and safe deletion boundaries

Purpose: prove repair actions are bounded and source-file-safe.

Setup: a test root where moving a file away and back is acceptable.

Steps:

1. Move one indexed source file out of the root in Nextcloud Files.
2. Rescan or recheck missing files so Library marks it missing.
3. Move it back and run **Recheck missing files**, or use **Forget missing item** only while it remains missing.
4. Read the root deletion recovery checklist before trying root deletion in a disposable fixture.

Expected result: repair updates app-owned index/catalogue rows; root deletion/forget does not delete source files.

Evidence to capture on failure: file path, Library status, source-file existence before/after, and root settings screenshot.

### LIB-HARDEN-010 — Discovery pages and visual issue browsing

Purpose: prove dedicated discovery contexts work beyond ordinary query filters.

Setup: catalogue items with publication/series names and publication dates.

Steps:

1. Open a publication/series link from **Top series and periodicals**.
2. Confirm the dedicated publication page has a heading/back link and filtered cards.
3. Confirm the publication page shows a compact **Publication contents** issue/date context summary with item count and date coverage.
4. Confirm the visual issue strip is present when the publication has enough grouped items, and weak/unknown issue rows remain visible below.
5. Open a year link from **Top publication years**.
6. Confirm the dedicated year page has a heading/back link and date-filtered cards.
7. Open a creator link from **Top creators**.
8. Confirm the dedicated creator page has a heading/back link and exact-creator filtered cards.

Expected result: publication, publication-year and creator discovery pages exist and keep the compact grid inside named discovery contexts. Publication pages expose **Publication contents** issue/date coverage and a visual issue strip without becoming a full issue-management database.

Evidence to capture on failure: source item, clicked link, resulting URL, issue-strip screenshot, and page header screenshot.

### LIB-HARDEN-011 — Mobile and browsing-polish walkthrough

Purpose: prove the v0.1 shape is usable on a phone-sized screen and that the new browsing surfaces do not hide core actions.

Setup: phone browser or responsive mode around 390 px width.

Steps:

1. Open the catalogue and confirm no page-local home rails displace the cover grid.
2. Browse several compact cards; confirm card-local expandable details are absent.
3. Switch through the view-mode buttons and back to Compact.
4. Watch a slow cover load if possible; otherwise inspect that the cover area does not look blank. If a cover image fails, confirm the **Cover unavailable** fallback appears. The normal loading state may show cover loading shimmer briefly.
5. Open sidebar details from a cover and from a title.
6. Confirm **Esc closes** and **ArrowLeft/ArrowRight** move between neighbouring drawer items when possible.
7. Open item Details and scroll through actions/metadata/provenance/tags/comments.
8. Return to catalogue.

Expected result: browsing remains cover-first and compact by default; Gallery/Shelf are additive visual modes; the details drawer is reachable without losing catalogue context; keyboard controls work on desktop; detail actions are reachable; duplicate metadata surfaces do not waste vertical space.

Evidence to capture on failure: phone screenshot, viewport size, selected view mode, visible drawer state, and whether the issue blocks a normal testing pass.

### LIB-HARDEN-012 — Metadata cleanup and review workbench

Purpose: prove the cleanup surfaces are understandable before broad real-collection testing.

Setup: a catalogue with at least one weak-metadata row or scanner-conflict row. If no conflict exists naturally, edit one field on a detail page so the stored scanner candidate differs from the current value.

Steps:

1. Open the weak-metadata cockpit and note counts for missing creator, missing publication/series, missing date, filename-derived title, no description and scanner conflicts.
2. Open a scanner-conflict or weak-metadata view.
3. Confirm the metadata review workbench appears.
4. Use **Review next suggestion** and inspect current value, scanner candidate, path-template candidate, sidecar value and source provenance.
5. Accept a scanner candidate only for a safe single field, or skip if the value should remain user-edited.
6. Reopen the item details and confirm provenance/difference labels still explain what happened.

Expected result: the workbench helps decide one field at a time; accepting a scanner candidate is explicit and per field; source files are not changed; user-edited values are not silently overwritten.

Evidence to capture on failure: active filter URL, item ID/title, field name, before/after values, and whether a source file changed unexpectedly.

### LIB-HARDEN-013 — Custom collections and useful views

Purpose: prove saved in-app views replace browser-bookmark workarounds for normal test sessions.

Setup: an active catalogue filter or search that returns a useful subset.

Steps:

1. Open a built-in Useful view and confirm the count badge and active filter chips match the view.
2. Create a Custom collection from the current filter setup.
3. Reopen the Custom collection from Library.
4. Delete the temporary collection if desired.

Expected result: Useful views and custom collections are part of the current test pass; they reopen normal Library filter states without breaking browse context.

Evidence to capture on failure: collection name, filter URL, visible count, and screenshot before/after deletion.

### LIB-HARDEN-014 — Known-limitations sanity check

Purpose: keep testing focused on v0.1 rather than future-product expectations.

Setup: read the Known alpha limitations in [Public alpha test checklist](alpha-test-checklist.md).

Steps:

1. Confirm the tester understands manual cover override/revert exists, but there is no app-owned cover cache or crop/rebuild workflow.
2. Confirm sidecar exports do not write source folders.
3. Confirm Useful views and custom collections are part of the current test pass.
4. Confirm creator pages are part of the current discovery surface.
5. Confirm shared/admin roots, a custom document reader, reader annotations, OCR/full-text search, internet lookup and AI classification are not part of this test pass.

Expected result: missing future features are reported as product feedback, not release-blocking regressions unless they break a current v0.1 workflow.

Evidence to capture on failure: the expectation mismatch and which current document created it.

## Exploratory dogfood script

After the numbered cases, spend 20-30 minutes trying to use Library like a normal publication shelf:

1. Pick one shelf/root.
2. Find something by search, something by series/publication, and something by year.
3. Try one Useful view and one Custom collection if the fixture has enough items.
4. Correct metadata on one weak item, or inspect it through the metadata review workbench.
5. Tag or classify one item for later.
6. Open/read one item.
7. Export corrected metadata.

Write down the first three moments that felt confusing, slow, unsafe, or too technical.

## Failure report template

```text
Case ID:
Result: Fail / Blocked
Build/version:
Nextcloud/browser/device:
Steps actually taken:
Expected:
Actual:
Source files safe? yes/no/unknown
Evidence:
Notes/privacy concerns:
```

## Quick regression subsets

- Catalogue-only UI change: LIB-HARDEN-001, 003, 010, 011.
- Details/editing change: LIB-HARDEN-001, 005, 006, 011.
- Scan/root/settings change: LIB-HARDEN-001, 002, 009.
- Portability change: LIB-HARDEN-001, 007, 008.
- Release packaging change: LIB-HARDEN-001 after checksum, package audit, install/version and server-health verification.
