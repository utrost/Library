# Library human test handbook

**Current acceptance target: 0.3.0-rc.1.** The exact signed RC is installed on developer NC34. Its SHA-256 is `caffb1ac1a93b961813d75270861d8185dcabfff95d17c233bade68e9e45eb07`; check the [RC certification and deployment record](compatibility-evidence/2026-10-24-rc1/README.md) before acceptance. A matching version string alone does not identify an archive.

This is the current working checklist. H03-01–H03-26 are arranged by case number, not release history. Record one result per case. The [v0.1 archive](human-test-handbook-v0.1-archive.md) preserves older A16x and LIB-HARDEN evidence; it is not an additional acceptance checklist.

Use disposable accounts and books for saved edits, imports, merges, scans and deletion. Read-only browsing or staging followed by Discard is suitable for a personal collection. Exact signed NC33–35 fresh-install/upgrade certification and manual assistive-technology testing remain separate release gates.

### RC indexed sorting check

On All publications, switch through Publication date, Series, Recently opened and Format at the top of a large catalogue and on page two. Each change should show Updating promptly, preserve the current rows until replacement rows arrive, then keep Next/Previous and the deferred total correct. Repeat on a phone, then change sorts quickly to verify an old response cannot replace the newest selection. When dates or opening times tie, their titles run Z–A; entries within a Series run by date A–Z. After a disposable book changes file extension and is rescanned, Format order should reflect the new extension.

### RC responsiveness check

On the large developer catalogue, switch between Title, Date added and Reading status. The current covers should remain visible, an Updating indicator should appear beside Sort, and the new page should arrive before its exact count. Next/Previous must work while the count says Counting; changing sort again must not restore stale rows. Repeat with a search and on mobile. Open Home and Shelves: book rows and shelf root links should appear promptly, with a clear loading state while aggregate summaries finish. Disconnect temporarily and check that Retry restores a failed request without losing the current rows.

### Reading-status result integrity

On All publications, sort by Reading status and inspect a book with a status. Its cover, creator, format, shelf and status must still appear. Change pages in this sort and in a second sorted view; each row must keep its book information.

### Reading-status sort performance

On a large catalogue, sort All publications by Reading status and switch pages. Compare its response with Title sorting, then filter by Not set. The status view should remain responsive while preserving title order within each status. No book data should change.

### Review queue and identifier checks

Extend H03-01/09/10 with these checks using disposable books:

- In Review and cleanup, apply a scanner suggestion. Confirm the queue stays open, shows a success message and presents the next pending suggestion. A failed or stale apply must show an error without leaving the queue. Confirm covers in the review workbench and result list, including a book without extracted artwork.
- In All publications, use the visible Reading status selector to filter books, including Not set. Sort by Reading status and confirm the shown order (To read, Reading, Paused, Needs action, Finished, Reference, Abandoned, Not set) and stable title order within a status. Clear the selector to restore all books.
- In book Details, copy a JPEG, PNG or WebP image and activate the cover. Confirm the saved image appears. Also try keyboard paste, Replace cover, and the file-picker fallback on a browser without clipboard image access. Check that the smaller controls do not obscure the artwork or trap keyboard focus on desktop and mobile.

### Alpha.38 acceptance checks

On the installed RC, extend H03-01/02/10/15 with these checks on disposable books:

- In the catalogue sidebar, search title/description, then author, subject, genre, classification and publisher. The first search must stay limited to title/description; main Search books still checks the broader catalogue. Selecting a genre must keep other filters.
- On Details, use Previous book, Next book and left/right arrow keys from a sorted, filtered catalogue, author profile, series and personal list. Back must restore the originating view and page. Arrows must leave text fields alone; navigating with unsaved metadata asks before discarding.
- In Extract metadata, select a nested folder, sort by oldest file modification time, change pages, and confirm order stays stable. Choose the supplied Title - Author pattern and create a named pattern from the same selector. Enable underscore replacement and verify literal pattern separators still match. Inspect the in-editor placeholder help.
- Capture a checksum-valid ISBN with `%isbn%`, including a file with an existing ISBN. Check the Before/After review, per-row Apply now, batch review and Undo. The ISBN should appear in Identifiers; unrelated identifiers must survive. Invalid ISBNs must remain unapplied.
- With no imported languages, confirm 20 common language choices appear before typing. Add ASIN and GGKEY in Details, save and reload; search for each identifier. A case-sensitive GGKEY must retain its spelling.

## Before testing

1. Record the [session header](#session-header-template). Confirm the installed app version in Nextcloud before the developer pass; use the current deployment record to verify the installed candidate. Record the exact archive name and checksum instead of assuming the version string identifies the package.
2. Use a disposable Nextcloud account/root. A small start is the [40 English Gutenberg books](gutenberg-example-books.md), plus two EPUBs with different Calibre or EPUB 3 series metadata and at least two books sharing an author. Add a PDF and CBZ if available. Keep a copy of any source files the tester deliberately changes.
3. Run a scan and wait for it to finish. Keep browser developer tools available. Capture screenshots before and after a change, with book IDs or titles and the affected list/author/series names. Do not publish private paths, credentials, or metadata.
4. Use **Pass**, **Fail**, **Blocked**, or **Not applicable** for each case. Report unexpected changes to source files immediately. Normal Library metadata, list, author and series actions should leave EPUB/PDF/CBZ bytes and OPF sidecars untouched. H03-23 deliberately deletes disposable source files after confirmation.

For a quick acceptance pass, run H03-01, H03-09, H03-10, H03-17, H03-18, H03-21, H03-22 and H03-26. Include **H03-02** for the mixed-pattern workflow and H03-23 with disposable files. Run the remaining cases before a release decision. The automated [Playwright journeys](playwright-journeys.md) supply repeatable browser checks; these cases ask a person to judge clarity, safety and real-file behavior.

Copy this result sheet into the session note. Write the checksum of the installed signed private archive in the session header; use the RC certification record for the deployed candidate. The developer build serves versioned frontend assets so browsers fetch the updated interface.

| Case | Status | Evidence file/link | Defect or observation |
| --- | --- | --- | --- |
| H03-01 |  |  |  |
| H03-02 |  |  |  |
| H03-03 |  |  |  |
| H03-04 |  |  |  |
| H03-05 |  |  |  |
| H03-06 |  |  |  |
| H03-07 |  |  |  |
| H03-08 |  |  |  |
| H03-09 |  |  |  |
| H03-10 |  |  |  |
| H03-11 |  |  |  |
| H03-12 |  |  |  |
| H03-13 |  |  |  |
| H03-14 |  |  |  |
| H03-15 |  |  |  |
| H03-16 |  |  |  |
| H03-17 |  |  |  |
| H03-18 |  |  |  |
| H03-19 |  |  |  |
| H03-20 |  |  |  |
| H03-21 |  |  |  |
| H03-22 |  |  |  |
| H03-23 |  |  |  |
| H03-24 |  |  |  |
| H03-25 |  |  |  |
| H03-26 |  |  |  |

After each case, capture the visible before/after state and note the selected book/author/series ID. A **Pass** requires the expected result and no relevant console error. Mark **Blocked** when setup or the instance prevents the action; a visible wrong result is **Fail**. Do not put private paths or book metadata in a public issue without redaction.

## Current 0.3 human cases

### H03-01 — First library and everyday browsing

**Setup:** A new or disposable account with the 40 English Gutenberg books in a Nextcloud Files folder.

**Steps:** Add that folder under Library settings; run **Scan this shelf**; browse **Home**, **All publications**, **Shelves**, **Review**, and one item. Search for a known title, change a filter and sort, then open the item by clicking the middle of its cover image and again by clicking its title. Both cover and title must open **Book details**. Follow an author link and return. From the catalogue, use **Quick view** to open the contextual sidebar; check **Overview**, **Metadata** and **Activity**, then **Full details**. Try **Open**, **Show in Files** and **Download**; Open must use a new tab.

**Expected:** The scan completes, the catalogue count is plausible, Book details and Quick view show the chosen book, and the author chip opens the correct profile. The detail page identifies the same file. **Open** launches the Nextcloud reader in a new tab while Library remains in the original tab; the book itself renders, rather than only a loading screen or Files root. No Library action in this case alters source bytes. A blank panel under the heading is a failure, even when the item API returns HTTP 200.

**Failure evidence:** Root label, scan status, item title/ID, URL, panel screenshot, browser console error, author-link target and whether the file still opens from Files.

### H03-02 — Lists, filters and metadata extraction

**Setup:** At least five indexed disposable books using different filename/folder conventions, including one title/author/year, one series number, a filename whose apparent author is actually part of its title, and an existing metadata value that would be replaced.

**Steps:** Create a private list from **Lists**, select books in the catalogue and add them to it, reorder and remove one, and save a book note. Save a catalogue filter as a collection and confirm it appears separately from lists. In **Extract metadata**, load the sample, assign different patterns to two files using their row pickers, and check their proposed fields. Use **Assign to matching files** with a third pattern; verify only complete matches are shown and empty fields are selected. Switch **Show files** back to All, leave an incorrect author and every unwanted replacement unchecked, then review and apply selected fields from at least two differently patterned files in one approval. Use Undo.

**Expected:** Lists contain chosen books in the chosen order; saved collections remain filters rather than list membership. Each file retains its chosen pattern while the review is open. A wrong or incomplete match never becomes an automatic write. The review lists exact Before/After values for both naming conventions. Apply changes only accepted catalogue metadata, and Undo restores the approved snapshot when no later edit intervened. Source files remain unchanged.

For a periodical fixture, open its publication link and inspect **Publication contents** and issue/date coverage; distinguish it from a linked Series.

**Failure evidence:** List/filter names, book IDs, pattern and sample path, preview and result screenshots, before/after field values.

### H03-03 — Author directory and profile

**Setup:** Two or more books with the same imported author, plus a second author for comparison.

**Steps:** Open **Authors**, search for the author and open the profile. Check the book list, cover/list views, search and sort. Edit the preferred name and an optional short biography or portrait, then revisit the catalogue and profile. Rescan unchanged files.

**Expected:** The profile shows only that account's linked books. Preferred names appear in author browsing and author suggestions while original source credits remain available. Biography and portrait stay private and unchanged after the rescan. A missing portrait shows initials.

**Failure evidence:** Imported and preferred names, affected books, profile/catalogue screenshots, rescan status and any broken image or browser error.

### H03-04 — Author reassignment, merge and Undo

**Setup:** Two author identities in a disposable account; record their linked books and original credits. If they represent different people, test a selected-book move. If they represent the same person, test a whole-author merge.

**Steps:** On a book's **Full details** page, choose **Change author**. Confirm that one or two typed letters do not start a search; type a third letter, select a suggestion without a separate Search click, and confirm that the selected author is visible before saving. Then open the source author, select a destination, inspect the preview and book count, confirm, and check both author pages and author filtering. Use **Undo** before further edits. For an author with more than 500 linked books, record the queued-task state instead of waiting on the page.

**Expected:** Only previewed relationships move; source credits and ebook files stay unchanged. A whole merge redirects later imports of the retired identity. Undo restores the original relationships when the operation is still current; stale operations explain that they cannot overwrite later work.

**Failure evidence:** Source/destination IDs and names, preview count, before/after book membership, task status, Undo result and screenshots.

### H03-05 — Series selected-book move and Undo

**Setup:** Two active series with at least one book each, plus one book with no linked series. Record the source book's imported series name and part label.

**Steps:** On the source book's **Full details** page, choose **Change series**. Confirm one or two letters do not search; type three letters, choose a result without a separate Search click, then save. Check the linked series and expand **Imported metadata and scan suggestions** for its original series and part. Repeat on the unlinked book using **Choose series**; Discard must leave it unlinked, while **Save book details** persists it. Separately use **Series → Move or merge books** to move one selected book, inspect **Review change**, confirm and use **Recent changes → Undo** for that operation.

**Expected:** The selected book alone moves; both series stay active. Its part label and imported source metadata remain visible and unchanged. The assignment survives an unchanged rescan. Undo of a reviewed move restores the previous link when no later changes make the operation stale. Per-book edits use Save/Discard; do not assume every editor save creates a merge-history operation.

**Failure evidence:** Book/series IDs, source and destination, part label, preview screenshot, membership before/after rescan and Undo result.

### H03-06 — Whole-series merge, redirect and empty source

**Setup:** Two active disposable series. Use the source from H03-05 after Undo or another test series.

**Steps:** Open the source's **Move or merge books** panel, leave all book checkboxes clear, review the full book count and confirm. Check that the old series links to the destination. Import another disposable EPUB carrying the old series name and scan it. If testing a series larger than 500 books, move selected books in batches and merge the now-empty source identity.

**Expected:** All previewed books move; the old identity leaves the active directory and later imports using its old name join the destination. An empty-source merge still creates the redirect. Each operation is capped at 500 books and 8 MiB of history; the UI should explain the limit. The original files and imported metadata remain unchanged.

**Failure evidence:** Series IDs, exact book counts, redirect page, new book's assigned series, limit message if encountered and screenshots.

### H03-07 — Changed imported author or series metadata

**Setup:** Disposable books with manually reviewed author or series assignments. Modify a copy of the source EPUB/OPF metadata and rescan; do not alter a personal original.

**Steps:** Open the author and series changed-import review queues. Compare the assigned identity, incoming source name/credits and part label. Expand the imported-change review, inspect **Review change** when offered, then use **Keep current** on one example and **Apply suggestion** on another. Rescan unchanged inputs, then change the source again.

**Expected:** A changed import enters review without silently replacing a manual assignment. Each choice affects only the selected book; the unchanged rescan keeps the decision, while another source change asks for review again. Stale previews must be rejected. Source file edits in this case are the tester's explicit setup, not a Library write.

**Failure evidence:** Book ID, old/new source values, assignment before/after, queue screenshots, chosen action and rescan result.

### H03-08 — Duplicate and mixed-format judgment

**Setup:** A small pair of true duplicate files and two different issues/volumes from one comic or book series; include EPUB/PDF variants if available.

**Steps:** Open **Possible duplicates**, inspect why a pair was suggested, choose **Keep both** or dismiss a false match, and check whether separate series issues are being suggested as duplicates. Reopen the queue and check the decision persists.

**Expected:** Different issues/series positions should not be presented solely because their series title and creator match. Decisions change review state, not files. A PDF and EPUB of the same work may still need human judgment.

**Failure evidence:** Both titles, format, issue/part numbers, matching reason, decision and screenshot. Keep private file paths out of public reports.

### H03-09 — Safety, responsive UI and assistive technology

**Setup:** One real mixed-format folder and a disposable account for mutations. Include long titles and, if possible, German/Arabic plus Latin text.

**Steps:** Check desktop and phone-width catalogue, list, author and series pages at 200% and 400% zoom. Navigate controls by keyboard; inspect labels, focus return, review announcements and the author **More actions → Merge or reassign** and series **Move or merge books** controls. Exercise the available NVDA, VoiceOver or Orca row in the [manual AT matrix](#manual-assistive-technology-matrix). Check Nextcloud Files before and after list, author, series, inference and deletion-boundary actions.

**Expected:** Controls remain reachable and understandable without sideways scrolling; keyboard and screen-reader users can identify what will change. Library-only organization leaves original publication files and OPF sidecars unchanged. Record manual AT testing pending for any platform not actually used.

**Failure evidence:** OS/browser/AT version, viewport/zoom, focused control, screenshot or recording, exact task and any source-file difference.

### H03-10 — Full details and item maintenance

**Setup:** Use a disposable book with an ISBN or ISSN, an imported cover and at least one scanner suggestion. Have a valid JPEG, PNG or WebP cover ready. Record its original metadata and file checksum.

**Steps:** Open the book sidebar and choose **Full details**; verify there is no **Maintenance (legacy)** entry. Edit title, subjects, an identifier and rating. In the compact Authors row, use the pencil action to select a different author, or Add author to select another; verify a name containing a comma remains one identity. Confirm all book changes are drafts, then press **Save book details** once. Use **Replace cover** on the image to choose a file, then activate the cover with a copied JPEG, PNG or WebP image and try keyboard paste. Refresh and revert using the small image controls. Add and remove a Nextcloud tag; add a comment. Mark the book **Favorite** and change its workflow status. Check that **Create a new list** reads as an action. Review scanner provenance, reset one safe field, then return to the catalogue. Open the book in a new tab. If a disposable item is marked missing, exercise **Forget missing publication** separately.

**Expected:** The full view loads without the catalogue's 100-book page, every action gives visible feedback and the changed values survive reload. Author selections remain separate identities. The old direct `/items/{id}` URL redirects to the same editor; there is no legacy autosave form. Cover, tags, comments, favorite and workflow changes do not overwrite unsaved metadata silently. Source publication bytes and sidecars remain unchanged.

**Failure evidence:** Book ID, initial and final values, screenshots of the full view and provenance, network response for any failed action, browser console and source-file checksum.

### H03-11 — Two-tab editing conflict

**Setup:** Open the same disposable book in two browser tabs. Record its title before editing.

**Steps:** Change and save the title in the first tab. Make a different title or description change in the second tab and save without reloading. Repeat after entering through an old `/apps/library/items/{id}` bookmark; it must redirect to the same editor. Reopen the book to compare the saved value before reapplying any intended change.

**Expected:** The stale save returns HTTP 409 and cannot silently overwrite the first tab. The editor keeps the second draft visible and reports the conflict; none of its book fields or linked identities may be partially applied. An old bookmark must not expose the removed autosave editor. Disabling JavaScript is not a route to a separate editor.

**Failure evidence:** Item ID, the two draft values, network status, comparison-page screenshot and final saved value. Use only a disposable book.

### H03-12 — Field-level rescan protection and metadata punctuation

**Setup:** Use disposable EPUB and CBZ copies with source metadata you can edit. Record the original file checksums. Include a subject containing a comma, separate `en` and `en-US` language examples, a ComicInfo series and number, and one CBZ creator written as `Surname, Given`.

**Steps:** In Full details, change only the EPUB title and save. Change an untouched source field such as publisher or publication date, rescan, and check both fields. Enter a comma-containing subject and classification, save and reload. Check the `en` language filter does not include the `en-US`-only item. Scan the CBZ and inspect creator, series and part number. Reset one corrected field to its scanner candidate and rescan. Repeat a rescan with an item manually edited before alpha.11 if available.

**Expected:** A new title correction survives while untouched source fields refresh. Existing pre-alpha.11 manual edits retain whole-item protection. Commas stay within one subject, classification or creator name; ComicInfo series and number reach dedicated fields. Reset removes the new correction's field protection. Library does not alter source file bytes.

**Failure evidence:** Disposable item IDs, before/after values, filter results, scanner candidate, screenshots and source checksums. Record whether the item was first edited before or after alpha.11.

### H03-13 — Preferred-author search and loading feedback

**Setup:** Use a disposable author linked to at least one book. Give the author a preferred name that does not appear in the book's imported creator text. Use enough catalogue items that search loading is visible.

**Steps:** Search the general catalogue by a middle fragment of the preferred name and then by a middle fragment of the sort name. Confirm the linked book appears; confirm the imported creator credit remains unchanged. Repeat at phone width. Observe the search field immediately after submitting a query and while results load. Change the query during loading and submit it again.

**Expected:** Search follows the current linked author identity and finds the book through either name. A compact loading indicator appears beside the desktop and mobile search field during a request and clears afterward. Newer typed text is retained, and a stale or failed request does not silently replace the newer query.

**Failure evidence:** Preferred/sort and imported names, searched fragments, result book ID, network timing, desktop/mobile screenshots and console error if present.

### H03-14 — Curated genres and scan suggestions

**Setup:** Use a disposable account with two books carrying the same source genre, one book in a clearly named `english_science_fiction` folder, and one book with a misleading or unknown source genre. Record source metadata and file checksums.

**Steps:** Open **Genres** and create a genre. In a book's **Full details**, type one or two letters in the genre picker, then at least three; select the genre, add a second genre, and remove one chip. Confirm that the choices are staged until **Save book details**, then save. Use the genre link to filter the catalogue. In **Genres**, advance discovery if needed. Map one suggested source name to an existing genre, accept another as a new genre, and ignore the misleading suggestion. Reopen the page and rescan the books. Change a book's subject in Full details and check the review queue again.

**Expected:** Short searches do not query the directory. Each accepted genre appears as a separate chip and filters to its linked books. A mapped suggestion reaches both matching books without changing their source genre or files. An ignored suggestion stays out of the queue after rescan. A manually removed chip stays removed. Edited source metadata updates suggestion evidence; source bytes remain unchanged. Unknown hints require human approval before they become curated genres.

**Failure evidence:** Book and genre IDs, suggestion name/source/count, before/after assignment screenshots, rescan status, network errors and file checksums.

### H03-15 — Language normalization and uncertain source values

**Setup:** In a disposable root, prepare source metadata with `en`, `EN`, `eng`, `en-us`, `EN-Us`, `3ng` and `en-en`; include one manually corrected book and two books with the same uncertain value. Record file checksums.

**Steps:** Scan the files. Inspect the language chips and **Review languages**. Confirm that clear codes normalize and `3ng`/`en-en` require review. Map one repeated value to `en`, ignore the other, and advance approved mappings. Change the corrected book's language manually before mapping, then rescan. Try entering `en-en` in the per-book picker.

**Expected:** Mixed case and familiar three-letter codes resolve to stable codes; `en-us` becomes `en-US`. Unknown or invalid values are not silently guessed. Mapping reaches matching unprotected books while preserving the original source value; an explicit manual correction survives mapping and rescan. An ignored value stays ignored. The picker does not accept `en-en`. No source file bytes change.

**Failure evidence:** Source and resulting codes, item IDs, mapping decision, before/after screenshots, scan status, browser console error and file checksums.

### H03-16 — Publisher/subject search, source review and reversible names

**Setup:** In a disposable root, use two books with publishers `St. Martin's Press` and `St Martins Press`, and two books with subjects `History, 19th century` and `History — 19th century`. Include one book whose source has no publisher or subjects. Record their original values and file checksums. Let the developer search-index rebuild finish before checking old-book publisher search.

**Steps:** Search a publisher name in the general catalogue; search a term that is also an exact book title and confirm matches from other fields still appear. In **Publisher and subject names**, search for a source spelling, preview its affected books, map it to the preferred spelling and repeat for a subject. Confirm the preferred suggestion and filter include books with both spellings. Open a mapped book: its source value must remain unchanged. Remove one mapping and confirm the filter separates again. On a book with subjects, edit an unrelated field and inspect **Imported metadata and scan suggestions**; unchanged subjects must not appear as a difference. On the source-empty book, add a publisher or subject manually, rescan it, then use **Reset to scanner** to clear that one field. Check that a later rescan keeps other manual corrections.

**Expected:** Mapping preview names the affected books before saving; mapping and removal change discovery immediately, without rewriting the book or source files. Publisher general search includes old and new books after the derived-index rebuild. Unchanged subject lists show no false scanner conflict; an explicit empty scanner value is reviewable and resettable. Source subject spelling/order, when normalization changed it on a new scan, appears under expanded provenance.

**Failure evidence:** Source and preferred labels, preview count, filtered count, item IDs, scanner candidate and current value, before/after screenshots, console errors and file checksums.

### H03-17 — One save for book details and linked metadata

**Setup:** Use a disposable book with an author, series and genre. Record its current title, rating, linked IDs and imported credits. Prepare a second tab on the same book.

**Steps:** Confirm Authors, Series and Genres form one compact panel in that order. Author names remain links; pencil and remove icons have hover/focus labels. Check long names wrap, empty fields remain actionable, and the part number appears only in its input. Confirm linked author/series/genre names are visibly underlined before hover. Expand **File metadata** at the very bottom using the keyboard; check the location links to Nextcloud Files and the indexed file size appears (exact bytes on hover). Collapse it again. Change the title, choose a different author and series directly from their suggestions, edit the part number, add a genre, remove a genre and select a rating. Confirm the Save/Discard bar stays visible while scrolling through the editor, file information and imported metadata, on desktop and mobile. Before saving, reload the second tab and confirm it still shows the original values. Press **Save book details** once, reload both tabs and confirm every visible change persisted. Make another edit, press **Discard changes**, and confirm the original saved value returns. Expand **Imported metadata and scan suggestions** and confirm the original creator, series and genre values are intact. Repeat with a second tab changing one link first; the stale first tab's save must return a conflict without applying any of its changes.

**Expected:** Only the one main Save button commits edits to the book. A successful save applies all fields and links together. A conflict leaves the draft visible and changes nothing on the server. The ebook file remains untouched. Creating a new directory identity can happen before book Save, but the book link remains unchanged until Save.

**Failure evidence:** Book and linked entity IDs, before/after screenshots, save response code, source file checksum and browser console errors.

### H03-18 — One editor from every entry point

1. From an author page, open a book title or cover. Repeat from a series page and imported-author conflict review. Expect **Book details**, the compact Authors → Series → Genres panel and explicit Save/Discard; never the old Creators field or automatic-save message.
2. Use Back to results. Expect the author/series or originating catalogue search view. Open an old `/apps/library/items/{id}` bookmark: it should reach the same editor. Another user's book must remain inaccessible.
3. Stage a title, author, series part and genre change. Scroll to the bottom: Save/Discard remains available. Discard restores all saved values. On a disposable sample, Save applies all changes once; another stale tab must be rejected.
4. Below Nextcloud tags/comments, expect collapsed **Metadata status** → **Imported metadata and scan suggestions** → **File metadata**. Tab to each heading and press Enter to expand. Status uses normal-sized labels and reflects saved values, not staged edits; it refreshes after Save.
5. Repeat at a narrow mobile width and in light/dark themes. Check readable wrapping, visible focus, no horizontal scrolling and no obscured actions. In File metadata, verify size and the underlined location link to Files.

Use a disposable account for Save/stale-edit checks. Developer smoke only stages and discards changes; it does not update real books. Release certification on NC33–35 remains separate.

### H03-19 — Destination author selection

1. Open an author, then **More actions → Merge or reassign**. Leave books unselected for a merge, or select books to reassign only those credits.
2. Type two letters in **Destination author**: no search is sent. At three letters, suggestions appear automatically. Select a result directly, or use Arrow Up/Down and Enter. Escape closes suggestions; Tab moves onward.
3. Review the change. Change the destination text: the old selection and review must clear. Search quickly for a different name; outdated results must not replace the latest results.
4. Search for a new name. Only after no matches are found should **Create new author** appear. Click it explicitly; the new author is selected but no books have moved. Review again, then Cancel. The new unused author record remains available.
5. On disposable books only, repeat and confirm a reassignment/merge, then Undo through Recent changes. Check the affected books and preserved original credits.
6. Repeat with long names at mobile width. Check readable suggestions, comfortable targets and no horizontal overflow. A failed search must show an error, never an invitation to create a duplicate.

### H03-20 — Catalogue author search regression

1. In All publications, clear filters. Search for `Heinlein` in Search; confirm the loading indicator finishes promptly and results remain usable.
2. Clear filters; type `Heinlein` in **Author**, then use **Apply author** to search that fragment. Enter with loaded suggestions selects the highlighted full name instead. Expect author-linked books, rather than zero results. General Search can return more books because it also checks descriptions and paths.
3. Type three or more letters in Author and select a full name. Confirm the selected name is reflected in the filter chip and Back/Forward restores it.
4. In a disposable test account, rename an author; search a distinctive part of their new display name and sort name. Both should find their books without rescanning.
5. Repeat with a language filter and on a narrow screen. Filters must combine; no overflow or blank-screen errors. Saved exact author filters should still work.

See the [alpha.29 measurements and repeat commands](compatibility-evidence/2026-10-20-nc34-search-alpha29/README.md).

### H03-21 — Browse authors

1. Open Authors. Expect compact rows sorted by the displayed name A–Z, with a linked book count and at most three cover/title previews. Sort names should not clutter each row.
2. Choose Name Z–A, then Surname / sort name A–Z. Check ordering, including page two; changing sort resets to page one.
3. Type two letters: no request yet. Type a third: results update automatically with a loading indication. Clear the field to restore all authors. Search matches the beginning of preferred names or sort names.
4. Open a preview book. Use Back to return to the same directory search, sort and page. Open an author and use All authors; expect the same directory state. The book count opens the author's book collection.
5. Check an unused author, a long name and missing covers. Try a narrow/mobile viewport and light/dark themes: controls and titles must fit, links must have visible keyboard focus.
6. On the author profile, confirm cover/list views, title/date/series sorting and merge/reassign still work. Browsing must not change book metadata.

The three covers are stable examples, not a complete bibliography. Open the author or book count for all books.

### H03-22 — Series and Genres browser parity

- Open Series and Genres. Both should have the same compact search/sort toolbar and cover/title previews as Authors, with Name A–Z as the default and Name Z–A available.
- Search after three letters, clear the search, paginate and follow book previews. Back must restore the originating directory state. Series names and counts open their profile; genre names and counts open the filtered catalogue.
- Genre pages must continue beyond the first 50 entries. Removed/inactive genre assignments must never appear among previews.
- Check narrow screens, keyboard focus and dark mode. Expand **Create a genre** to add a genre; suggestion review and series reassignment remain available and explicit.


### H03-23 — Delete a book from Details

Use disposable files in an isolated test account. Do not use valuable library books for this case.

1. Open a fixture through a filtered catalogue or author/series directory. Stage a title edit, then choose **Delete book**. Check the exact file paths in the confirmation. Cancel or press Escape: the file and unsaved draft must remain.
2. Confirm deletion. The source file and exclusive OPF should disappear; an empty immediate parent should disappear too. Return to the original list/search and expect **Book deleted.** No metadata Save request should occur.
3. With EPUB and PDF sharing an OPF, delete one format. The remaining format and shared OPF must survive, and the dialog must explain that the OPF is retained.
4. Leave `cover.jpg`, a hidden file or any other file in the parent. The folder and companion file must survive. Configured shelf/root folders and mount roots are always retained.
5. Change or replace the source after opening confirmation. Delete must fail closed; reopen confirmation after refreshing. Read-only files must not offer a usable confirmation.
6. Verify the deleted book is absent from search and duplicate results. Its reading-list entry remains unavailable; author/series/genre records remain.
7. Where Nextcloud Deleted files is supported, restore the parent folder first if it was removed, then restore the source file and scan again. It should reappear as an imported book; Library-only edits removed with the previous catalogue entry are not restored.
8. Try a disposable file on a mount that grants read but not delete access. Preview must explain the missing delete permission; Cancel leaves the file and catalogue entry untouched. Do not change production mount permissions to run this case.
9. Check keyboard focus, Cancel/Escape, scrolling and button contrast on desktop/mobile in light/dark themes. For partial cleanup failures, the message must say the book was deleted and identify the remaining cleanup.

Deletion requires Nextcloud transactional file locking. The storage guard preserves Nextcloud's normal trash/retention behavior; it does not permanently purge the trash. Deletion of arbitrary companion images or ancestor directories is outside this feature.

### H03-23a — Mark for deletion on a read-only mount

Use a disposable EPUB on a read-only shelf and another disposable book on a writable shelf. This case applies after the candidate with **To delete** is installed.

1. Open the read-only book and choose **Delete book**. Confirm the permission message offers **Mark for deletion**. Cancel first; the book should remain in ordinary browsing. Repeat and mark it. The file and any OPF must remain in Nextcloud Files.
2. Find the book under **Review and cleanup → To delete**. It must be absent from ordinary search, Home, shelf book counts and author/series/genre book views. Direct Details access and the To delete entry must still work. A reading-list entry remains visible with a deletion-mark label.
3. Stage an unsaved title edit on a second book, mark it, then choose **Discard changes**. Only the mark should persist. Open its Details from To delete, choose **Undo mark**, and confirm the book reappears in ordinary search.
4. Rescan the read-only shelf. The first book must remain marked and the file unchanged. Undo the mark, rescan again, then confirm it stays visible. Marking must never queue an automatic deletion if mount permissions later change.
5. Check keyboard operation, focus, narrow/mobile layout and both themes. Only an explicit, separately confirmed **Delete book** action may remove source files.


### H03-24 — UI consistency

1. **Find and browse:** open All publications at desktop and 390 px mobile widths. Search books without opening Filters. Sort and change view; verify the search and filters remain. Open a cover or title, then Back: restore the filtered result. Quick view opens the drawer; Escape closes it and restores focus. Open still launches the reader in a new tab. Check Home covers load visibly and a failed cover has a placeholder.
2. **Save a search:** run a search, expand Save this search, name it and save. Collections and its saved entries remain reachable from navigation. Deleting a saved collection explains the scope and offers Cancel. Books and source files remain.
3. **Protect drafts:** edit an author, series and reading-list name. Follow the page's Back link and a navigation link; cancel the warning and verify the draft is intact. Repeat browser Back/reload. Save explicitly persists, while Discard changes restores the saved state. Check a list note draft too. Existing book Save/Discard and stale-edit rejection must still work.
4. **Select names:** type two letters, then three in author, series and genre selectors. Check loading, arrow keys, Enter, Escape, direct selection and empty results. Simulate an offline lookup: show an error and Retry, never an empty-result creation prompt. A late response must not replace a newer query. Genre creation is absent while loading or when the matching genre is already assigned. Language codes retain their valid short-input behavior. Publisher and subject suggestions remain editable values.
5. **Review changes:** use author/series conflicts, language cleanup, publisher/subject grouping and metadata import. Verify current and proposed values and affected-book scope before Apply. Saved source values remain inspectable. Genre cleanup starts collapsed; Review genre suggestions opens it. Ignore means ignore future suggestions, not keep a hidden pending form.
6. **Import recovery:** paste malformed JSON in settings and Preview. The same navigation/content frame stays visible, the message explains the problem, and the input remains editable. With a valid fixture export, inspect current/proposed values before applying. Source files must stay unchanged.
7. **First shelf and settings:** with an empty account, follow Add a shelf → Choose folder → Save shelf → Scan this shelf → Browse. Shelves/scanning precede duplicate settings and scheduling. Duplicate suggestions require Save on both the duplicates page and settings; an unsaved choice survives background progress polling.
8. **Extract metadata:** choose a shelf/folder, use row pickers for mixed conventions, preview suggested fields, then review and apply the selected scope. Configure patterns stays collapsed initially. Bulk assignment shows only complete matches and selects empty fields without silently replacing existing values. Loading/error/retry states are distinct from an empty sample. Whole-folder analysis remains an explicit separate operation. Inspect partial results and stale-review protection.
9. **Consistency and accessibility:** compare Home, Shelves, Authors, Series, Genres, Lists, Details, review, settings and maintenance pages. Titles lead, use the shared scale, and long names wrap. Check 320/390 px, both themes, 200% zoom, keyboard focus, expanded menus and sticky Save/Discard. Tooltips work on focus/tap and Escape and identify their field. Touch controls remain comfortable. Check removal dialogs initially focus Cancel and return focus on cancellation.

Automated browser coverage is in `tests/gui/details/ui-consistency.spec.ts` plus the existing editor, list, directory, inference and settings journeys. Automation is not a substitute for NVDA, VoiceOver or Orca acceptance.


### H03-25 — Picker and browsing consistency

1. **Keyboard pickers:** type a partial subject and a language name. The first suggestion is visibly selected; Enter chooses it. Creating a subject is a separate explicit action. Invalid language input explains the next step. Repeat author, series, publisher and genre selections, and lookup failure/Retry.
2. **ArrowUp:** with three suggestions, ArrowUp from the first selects the last, never the penultimate. Escape closes without selecting; pointer selection still works.
3. **Directory searches:** enter three or more letters, then remove letters below the threshold. The message identifies the previously applied results. Sort, reload and return from a book: the draft and applied search remain distinct. Clearing restores all entries.
4. **Return to your place:** scroll well down a catalogue or entity directory; open a book and use Back to results. Check position and focus return to the book. Repeat browser Back and after a result disappears.
5. **Catalogue controls:** one content search at desktop and mobile. Search, then apply filters: the search must remain. Sorting and view changes preserve constraints; saved-search creation and Select all remain reachable.
6. **Book cards:** titles/authors appear below the cover; Quick view is secondary and reachable without hover. Covers/titles open Details, Quick view opens the drawer, Open launches the reader. Check long names and missing covers in both themes.
7. **Series collections:** default order is part number. Search across more than one page; change to title/date ordering and Covers/List. Open Details and return: retain query, sort, page and view. Renaming and merge review still protect drafts.
8. **Directory preview widths:** compare rows with zero, one, two and three previews. A single book uses the available width without losing its title. Check mobile wrapping.
9. **Settings:** at 320/390 px, Folder path uses the available row and Choose folder remains reachable below. The section heading is visually stronger than Add a shelf.
10. **Suggestion meaning:** when Publication and Series propose the same name, their labels, hover/focus help and action names explain the separate effects. Applying one must not silently apply the other. Repeat with a periodical.

Retain H03-24 regression coverage for Save/Discard, stale edits, sticky actions, navigation, imports and deletion. Record viewport, theme, steps and screenshots for any failure.


### H03-26 — Final consistency acceptance

Sidebar check: inspect **Library → Discover → Your lists → Review and cleanup**, consistent icons and active links, and Settings at the bottom. Use Tab and Enter to open/close Review and cleanup, then repeat on a narrow screen and on Review languages / Publisher and subject names. Check both themes; long labels and saved list names should remain usable without horizontal scrolling.

1. **Readable feedback:** inspect scanner errors and failed requests in light and dark themes. Error text and danger labels must remain readable.
2. **Profile search draft:** on both Authors and Series, type a nonmatching query without Search, switch Covers/List, open a book, then Back. The previous results and the typed draft must return. Repeat reload, browser Back, submitting/clearing the query and pagination.
3. **Filter keyboards:** in desktop/mobile filters, test Publisher, Publication / periodical, Year, Author, Subject, Classification, Tag and Folder. A visible selected suggestion receives Enter; arrows wrap, Escape closes, pending/error states are explicit and Retry works. An explicit Apply author still accepts a free-text author search.
4. **Header hit targets:** at 320/390 px, tap the start of Author, Series and List Back links. They must navigate back rather than open navigation. Review filter labels must also be unobscured.
5. **View controls:** selected Covers/List is visually obvious and keyboard accessible in catalogue and profiles. Mobile Search remains beside its field; Sort and View wrap together without clipped controls.
6. **Vocabulary:** Publication / periodical is distinct from Series in filters, Details, Quick view, Review and bulk previews. Folder selection uses Shelf.
7. **Language cleanup:** select German by name, add another language and remove a chip. Only valid selected codes reach the existing mapping form. Ignore remains usable without a selection; bulk scope stays explicit. Do not apply decisions to real library books for this check.
8. **Page framing:** compare Authors/Series/Genres, maintenance and Review in both themes. Dates remain readable; book-result titles are subordinate to the page title. Mobile maintenance navigation opens as a menu, supports Escape and returns focus to its trigger.

## Manual assistive-technology matrix

Automated DOM and CDP accessibility-tree evidence is not screen-reader testing. Each row remains **manual AT testing pending** until a named tester records OS, browser, AT version, date, tested surface, result, and defects.

| Environment | Required checks | Status |
|---|---|---|
| Windows + current Firefox or Chrome + NVDA | Landmarks/headings; Catalogue/Review order; search/filter names; disclosure and star states; sidebar/dialog announcement, Escape, containment and return; loading/error/empty announcements; table headers; mixed German/Arabic/Latin pronunciation; 200%/400% reflow and forced colors | **manual AT testing pending** |
| macOS + Safari + VoiceOver | Same checks, including modal announcement and rotor navigation | **manual AT testing pending** |
| Linux + Firefox + Orca | Same checks, including table navigation and browse/forms modes | **manual AT testing pending** |

The current automated browser coverage is listed in [Playwright journey coverage](playwright-journeys.md). Human dogfooding remains the release-candidate verdict for subjective usefulness, real-file edge cases, reader handoff quality, and assistive-technology use.

## Session header template

Record this at the top of every manual test note:

```text
Date:
Tester:
Library app version:
Nextcloud version:
Install source: generated archive / checkout / other
Archive checksum or commit (if known):
URL:
Device/browser:
Database type (if known):
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

- Verify the installed candidate and checksum against the deployment record; load Library and settings without Library browser errors.
- Add and scan a disposable shelf, find books, follow cover/title and Quick view links, and open a file in a new tab.
- Save book fields and linked identities once; verify persistence, Discard and stale-edit rejection. An unchanged rescan must retain reviewed corrections.
- Restore search, filters, sorting and position when returning from Details. Check desktop/mobile and keyboard access.
- Confirm imports, merges and deletion explain the affected scope. Only confirmed Delete book removes source files; other metadata operations leave source files unchanged.
- Record every untested or blocked case, including manual AT and the separate signed NC33–35 release matrix. Do not infer a pass from screenshots or older release evidence.

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

- Catalogue or navigation change: H03-01 and H03-09.
- Lists or inference change: H03-02, then H03-09 for responsive controls.
- Author change: H03-03, H03-04, H03-07, H03-19, H03-21 and H03-26.
- Series or genre change: H03-05, H03-06, H03-07, H03-14, H03-22 and H03-26.
- Duplicate matching change: H03-08 with distinct issues and true duplicates.
- Release-package change: H03-01, H03-03, H03-05 and H03-09 on the exact installed package, plus checksum and installed-version evidence. H03-17–H03-26 cover the current editor and browsing controls. Historical cases live in the separate archive.
- Book deletion: H03-23 using disposable files only.
- Shared controls/layout: H03-09 and H03-24–H03-26 in both themes.
