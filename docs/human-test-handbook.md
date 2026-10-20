# Library human test handbook

## Alpha.34 final consistency acceptance (H03-26)

Signed **0.3.0-alpha.34** is deployed on developer NC34; installed smoke and required CI passed. Confirm the installed version before testing. Keep H03-25 and H03-24 regression cases. Use disposable books for persisted changes.

1. **Readable feedback:** inspect scanner errors and failed requests in light and dark themes. Error text and danger labels must remain readable.
2. **Profile search draft:** on both Authors and Series, type a nonmatching query without Search, switch Covers/List, open a book, then Back. The previous results and the typed draft must return. Repeat reload, browser Back, submitting/clearing the query and pagination.
3. **Filter keyboards:** in desktop/mobile filters, test Publisher, Publication / periodical, Year, Author, Subject, Classification, Tag and Folder. A visible selected suggestion receives Enter; arrows wrap, Escape closes, pending/error states are explicit and Retry works. An explicit Apply author still accepts a free-text author search.
4. **Header hit targets:** at 320/390 px, tap the start of Author, Series and List Back links. They must navigate back rather than open navigation. Review filter labels must also be unobscured.
5. **View controls:** selected Covers/List is visually obvious and keyboard accessible in catalogue and profiles. Mobile Search remains beside its field; Sort and View wrap together without clipped controls.
6. **Vocabulary:** Publication / periodical is distinct from Series in filters, Details, Quick view, Review and bulk previews. Folder selection uses Shelf.
7. **Language cleanup:** select German by name, add another language and remove a chip. Only valid selected codes reach the existing mapping form. Ignore remains usable without a selection; bulk scope stays explicit. Do not apply decisions to real library books for this check.
8. **Page framing:** compare Authors/Series/Genres, maintenance and Review in both themes. Dates remain readable; book-result titles are subordinate to the page title. Mobile maintenance navigation opens as a menu, supports Escape and returns focus to its trigger.


## Alpha.33 follow-up acceptance (H03-25)

Installed on developer NC34: signed **0.3.0-alpha.33**. See the [verified package and deployment record](compatibility-evidence/2026-10-20-nc34-ux-follow-up-alpha33/README.md). Use a disposable account for persisted changes; stage and discard when browsing the real catalogue.

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



## Alpha.32 UI consistency acceptance (H03-24)

Regression cases introduced in alpha.32 and retained in alpha.33. Verify the installed version against the current deployment record before testing. Use a disposable account and fixture books for edits, merges, imports and deletion.

1. **Find and browse:** open All publications at desktop and 390 px mobile widths. Search books without opening Filters. Sort and change view; verify the search and filters remain. Open a cover or title, then Back: restore the filtered result. Quick view opens the drawer; Escape closes it and restores focus. Open still launches the reader in a new tab. Check Home covers load visibly and a failed cover has a placeholder.
2. **Save a search:** run a search, expand Save this search, name it and save. Collections and its saved entries remain reachable from navigation. Deleting a saved collection explains the scope and offers Cancel. Books and source files remain.
3. **Protect drafts:** edit an author, series and reading-list name. Follow the page's Back link and a navigation link; cancel the warning and verify the draft is intact. Repeat browser Back/reload. Save explicitly persists, while Discard changes restores the saved state. Check a list note draft too. Existing book Save/Discard and stale-edit rejection must still work.
4. **Select names:** type two letters, then three in author, series and genre selectors. Check loading, arrow keys, Enter, Escape, direct selection and empty results. Simulate an offline lookup: show an error and Retry, never an empty-result creation prompt. A late response must not replace a newer query. Genre creation is absent while loading or when the matching genre is already assigned. Language codes retain their valid short-input behavior. Publisher and subject suggestions remain editable values.
5. **Review changes:** use author/series conflicts, language cleanup, publisher/subject grouping and metadata import. Verify current and proposed values and affected-book scope before Apply. Saved source values remain inspectable. Genre cleanup starts collapsed; Review genre suggestions opens it. Ignore means ignore future suggestions, not keep a hidden pending form.
6. **Import recovery:** paste malformed JSON in settings and Preview. The same navigation/content frame stays visible, the message explains the problem, and the input remains editable. With a valid fixture export, inspect current/proposed values before applying. Source files must stay unchanged.
7. **First shelf and settings:** with an empty account, follow Add a shelf → Choose folder → Save shelf → Scan this shelf → Browse. Shelves/scanning precede duplicate settings and scheduling. Duplicate suggestions require Save on both the duplicates page and settings; an unsaved choice survives background progress polling.
8. **Extract metadata:** choose a shelf/folder, preview suggested fields, then review and apply the selected scope. Advanced rule editors stay collapsed initially. Loading/error/retry states are distinct from an empty sample. Whole-folder analysis remains an explicit separate operation. Inspect partial results and stale-review protection.
9. **Consistency and accessibility:** compare Home, Shelves, Authors, Series, Genres, Lists, Details, review, settings and maintenance pages. Titles lead, use the shared scale, and long names wrap. Check 320/390 px, both themes, 200% zoom, keyboard focus, expanded menus and sticky Save/Discard. Tooltips work on focus/tap and Escape and identify their field. Touch controls remain comfortable. Check removal dialogs initially focus Cancel and return focus on cancellation.

Automated browser coverage is in `tests/gui/details/ui-consistency.spec.ts` plus the existing editor, list, directory, inference and settings journeys. Automation is not a substitute for NVDA, VoiceOver or Orca acceptance. No database migration is introduced in alpha.32.

Alpha.28 adds direct destination-author typeahead for merge/reassign, starting after three letters and offering creation after an empty search. See the [alpha.28 verification record](compatibility-evidence/2026-10-19-nc34-author-destination-alpha28/README.md). That historical alpha.28 deployment had clean integrity and an unchanged large catalogue-book catalogue.

**Current acceptance target: 0.3.0-alpha.34.** Confirm the installed version and archive checksum using the [alpha.34 verification record](compatibility-evidence/2026-10-20-nc34-final-ux-alpha34/README.md). H03-26 covers this release; retain H03-25, H03-24 and the other H03 regression journeys. Use disposable books for saved edits and deletion. Exact signed NC33–35 certification and manual assistive-technology testing remain separate gates.

## H03-19: Destination author selection

1. Open an author, then **More actions → Merge or reassign**. Leave books unselected for a merge, or select books to reassign only those credits.
2. Type two letters in **Destination author**: no search is sent. At three letters, suggestions appear automatically. Select a result directly, or use Arrow Up/Down and Enter. Escape closes suggestions; Tab moves onward.
3. Review the change. Change the destination text: the old selection and review must clear. Search quickly for a different name; outdated results must not replace the latest results.
4. Search for a new name. Only after no matches are found should **Create new author** appear. Click it explicitly; the new author is selected but no books have moved. Review again, then Cancel. The new unused author record remains available.
5. On disposable books only, repeat and confirm a reassignment/merge, then Undo through Recent changes. Check the affected books and preserved original credits.
6. Repeat with long names at mobile width. Check readable suggestions, comfortable targets and no horizontal overflow. A failed search must show an error, never an invitation to create a duplicate.

## H03-18: One editor from every entry point

1. From an author page, open a book title or cover. Repeat from a series page and imported-author conflict review. Expect **Book details**, the compact Authors → Series → Genres panel and explicit Save/Discard; never the old Creators field or automatic-save message.
2. Use Back to results. Expect the author/series or originating catalogue search view. Open an old `/apps/library/items/{id}` bookmark: it should reach the same editor. Another user's book must remain inaccessible.
3. Stage a title, author, series part and genre change. Scroll to the bottom: Save/Discard remains available. Discard restores all saved values. On a disposable sample, Save applies all changes once; another stale tab must be rejected.
4. Below Nextcloud tags/comments, expect collapsed **Metadata status → Imported metadata and scan suggestions → File metadata**. Tab to each heading and press Enter to expand. Status uses normal-sized labels and reflects saved values, not staged edits; it refreshes after Save.
5. Repeat at a narrow mobile width and in light/dark themes. Check readable wrapping, visible focus, no horizontal scrolling and no obscured actions. In File metadata, verify size and the underlined location link to Files.

Use a disposable account for Save/stale-edit checks. Developer smoke only stages and discards changes; it does not update real books. Release certification on NC33–35 remains separate.

## Before testing

1. Record the [session header](#session-header-template). Confirm the installed app version in Nextcloud before the developer pass; use the current deployment record to verify the installed candidate. Record the exact archive name and checksum instead of assuming the version string identifies the package.
2. Use a disposable Nextcloud account/root. A small start is the [40 English Gutenberg books](gutenberg-example-books.md), plus two EPUBs with different Calibre or EPUB 3 series metadata and at least two books sharing an author. Add a PDF and CBZ if available. Keep a copy of any source files the tester deliberately changes.
3. Run a scan and wait for it to finish. Keep browser developer tools available. Capture screenshots before and after a change, with book IDs or titles and the affected list/author/series names. Do not publish private paths, credentials, or metadata.
4. Use **Pass**, **Fail**, **Blocked**, or **Not applicable** for each case. Report unexpected changes to source files immediately. Normal Library metadata, list, author and series actions should leave EPUB/PDF/CBZ bytes and OPF sidecars untouched.

For a quick acceptance pass, run H03-01, H03-03, H03-04, H03-05, H03-06, H03-09, H03-10, H03-11, H03-12, H03-13, H03-14, H03-15, H03-16 and H03-17. Run the remaining cases before a release decision. The automated [Playwright journeys](playwright-journeys.md) supply repeatable browser checks; these cases ask a person to judge clarity, safety and real-file behavior.

Copy this result sheet into the session note. Write the checksum of the installed signed private archive in the session header; use the [current package record](compatibility-evidence/2026-10-20-nc34-ui-consistency-alpha32/README.md) for the deployed candidate. The developer build serves versioned frontend assets so browsers fetch the updated interface.

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

After each case, capture the visible before/after state and note the selected book/author/series ID. A **Pass** requires the expected result and no relevant console error. Mark **Blocked** when setup or the instance prevents the action; a visible wrong result is **Fail**. Do not put private paths or book metadata in a public issue without redaction.

## Current 0.3 human cases

### H03-01 — First library and everyday browsing

**Setup:** A new or disposable account with the 40 English Gutenberg books in a Nextcloud Files folder.

**Steps:** Add that folder under Library settings; run **Scan this shelf**; browse **Home**, **All publications**, **Shelves**, **Review**, and one item. Search for a known title, change a filter and sort, then open the item by clicking the middle of its cover image and again by clicking its title. Confirm the panel shows **Overview**, **Metadata** and **Activity**; choose an author chip and return to the book. Try **Open**, **Show in Files**, **Download**, and **Full details**.

**Expected:** The scan completes, the catalogue count is plausible, the contextual sidebar shows more than a title/header, and the author chip opens the correct profile. The detail page identifies the same file. **Open** launches the Nextcloud reader in a new tab while Library remains in the original tab; the book itself renders, rather than only a loading screen or Files root. No Library action in this case alters source bytes. A blank panel under the heading is a failure, even when the item API returns HTTP 200.

**Failure evidence:** Root label, scan status, item title/ID, URL, panel screenshot, browser console error, author-link target and whether the file still opens from Files.

### H03-02 — Lists, filters and metadata extraction

**Setup:** At least three indexed test books, including one filename/path with a useful title, author, year or series hint.

**Steps:** Create a private list from **Lists**, select books in the catalogue and add them to it, reorder and remove one, and save a book note. Save a catalogue filter as a collection and confirm it appears separately from lists. In **Extract metadata**, select a root/rule, inspect the live selected-record preview, save a rule, review suggestions and apply one safe field; use Undo if available.

**Expected:** Lists contain chosen books in the chosen order; saved collections remain filters rather than list membership. Preview distinguishes source and proposed values. Apply changes only accepted catalogue metadata, and Undo restores the approved snapshot when no later edit intervened.

**Failure evidence:** List/filter names, book IDs, pattern and sample path, preview and result screenshots, before/after field values.

### H03-03 — Author directory and profile

**Setup:** Two or more books with the same imported author, plus a second author for comparison.

**Steps:** Open **Authors**, search for the author and open the profile. Check the book list, cover/list views, search and sort. Edit the preferred name and an optional short biography or portrait, then revisit the catalogue and profile. Rescan unchanged files.

**Expected:** The profile shows only that account's linked books. Preferred names appear in author browsing and creator suggestions while original source credits remain available. Biography and portrait stay private and unchanged after the rescan. A missing portrait shows initials.

**Failure evidence:** Imported and preferred names, affected books, profile/catalogue screenshots, rescan status and any broken image or browser error.

### H03-04 — Author reassignment, merge and Undo

**Setup:** Two author identities in a disposable account; record their linked books and original credits. If they represent different people, test a selected-book move. If they represent the same person, test a whole-author merge.

**Steps:** On a book's **Full details** page, choose **Change author**. Confirm that one or two typed letters do not start a search; type a third letter, select a suggestion without a separate Search click, and confirm that the selected author is visible before saving. Then open the source author, select a destination, inspect the preview and book count, confirm, and check both author pages and creator filtering. Use **Undo** before further edits. For an author with more than 500 linked books, record the queued-task state instead of waiting on the page.

**Expected:** Only previewed relationships move; source credits and ebook files stay unchanged. A whole merge redirects later imports of the retired identity. Undo restores the original relationships when the operation is still current; stale operations explain that they cannot overwrite later work.

**Failure evidence:** Source/destination IDs and names, preview count, before/after book membership, task status, Undo result and screenshots.

### H03-05 — Series selected-book move and Undo

**Setup:** Two active series with at least one book each, plus one book with no linked series. Record the source book's imported series name and part label.

**Steps:** On the source book's **Full details** page, choose **Change series**. Confirm one or two letters do not search; type three letters, choose a result without a separate Search click, then save. Check the linked series and the separate **Source series metadata** fields. In **Series**, use **Recent changes → Undo**. Repeat from Full details with the book that has no linked series using **Link a series**; Undo should remove that new link. Then use **Series → Move or merge books** to move one selected book and inspect **Review change**.

**Expected:** The selected book alone moves; both series stay active. Its part label and imported source metadata remain visible and unchanged. The assignment survives an unchanged rescan. Undo restores the previous link, or removes a newly created link, when no later changes make the operation stale.

**Failure evidence:** Book/series IDs, source and destination, part label, preview screenshot, membership before/after rescan and Undo result.

### H03-06 — Whole-series merge, redirect and empty source

**Setup:** Two active disposable series. Use the source from H03-05 after Undo or another test series.

**Steps:** Open the source's **Move or merge books** panel, leave all book checkboxes clear, review the full book count and confirm. Check that the old series links to the destination. Import another disposable EPUB carrying the old series name and scan it. If testing a series larger than 500 books, move selected books in batches and merge the now-empty source identity.

**Expected:** All previewed books move; the old identity leaves the active directory and later imports using its old name join the destination. An empty-source merge still creates the redirect. Each operation is capped at 500 books and 8 MiB of history; the UI should explain the limit. The original files and imported metadata remain unchanged.

**Failure evidence:** Series IDs, exact book counts, redirect page, new book's assigned series, limit message if encountered and screenshots.

### H03-07 — Changed imported author or series metadata

**Setup:** Disposable books with manually reviewed author or series assignments. Modify a copy of the source EPUB/OPF metadata and rescan; do not alter a personal original.

**Steps:** Open the author and series changed-import review queues. Compare the assigned identity, incoming source name/credits and part label. Use **Keep assignment** on one example and **Use imported series** or **Use imported authors** on another. Rescan unchanged inputs, then change the source again.

**Expected:** A changed import enters review without silently replacing a manual assignment. Each choice affects only the selected book; the unchanged rescan keeps the decision, while another source change asks for review again. Stale previews must be rejected. Source file edits in this case are the tester's explicit setup, not a Library write.

**Failure evidence:** Book ID, old/new source values, assignment before/after, queue screenshots, chosen action and rescan result.

### H03-08 — Duplicate and mixed-format judgment

**Setup:** A small pair of true duplicate files and two different issues/volumes from one comic or book series; include EPUB/PDF variants if available.

**Steps:** Open **Possible duplicates**, inspect why a pair was suggested, choose **Keep both** or dismiss a false match, and check whether separate series issues are being suggested as duplicates. Reopen the queue and check the decision persists.

**Expected:** Different issues/series positions should not be presented solely because their series title and creator match. Decisions change review state, not files. A PDF and EPUB of the same work may still need human judgment.

**Failure evidence:** Both titles, format, issue/part numbers, matching reason, decision and screenshot. Keep private file paths out of public reports.

### H03-09 — Safety, responsive UI and assistive technology

**Setup:** One real mixed-format folder and a disposable account for mutations. Include long titles and, if possible, German/Arabic plus Latin text.

**Steps:** Check desktop and phone-width catalogue, list, author and series pages at 200% and 400% zoom. Navigate controls by keyboard; inspect labels, focus return, review announcements and the **Move or merge books** disclosure. Exercise the available NVDA, VoiceOver or Orca row in the [manual AT matrix](#alpha166167-manual-assistive-technology-matrix). Check Nextcloud Files before and after list, author, series, inference and deletion-boundary actions.

**Expected:** Controls remain reachable and understandable without sideways scrolling; keyboard and screen-reader users can identify what will change. Library-only organization leaves original publication files and OPF sidecars unchanged. Record manual AT testing pending for any platform not actually used.

**Failure evidence:** OS/browser/AT version, viewport/zoom, focused control, screenshot or recording, exact task and any source-file difference.

### H03-10 — Full details and item maintenance

**Setup:** Use a disposable book with an ISBN or ISSN, an imported cover and at least one scanner suggestion. Have a valid JPEG, PNG or WebP cover ready. Record its original metadata and file checksum.

**Steps:** Open the book sidebar and choose **Full details**; verify there is no **Maintenance (legacy)** entry. Edit title, creator names (one per line, including a name with a comma), subjects, an identifier and rating, then save. Use **Replace cover** on the image to choose a file, then try **Paste image** with a copied JPEG, PNG or WebP. Refresh and revert using the small image controls. Add and remove a Nextcloud tag; add a comment. Mark the book **Favorite** and change its workflow status. Check that **Create a new list** reads as an action. Review scanner provenance, reset one safe field, then return to the catalogue. Open the book in a new tab. If a disposable item is marked missing, exercise **Forget missing publication** separately.

**Expected:** The full view loads without the catalogue's 100-book page, every action gives visible feedback and the changed values survive reload. A comma in a creator name stays within that creator. The old direct `/items/{id}` URL remains a fallback, while normal catalogue and list links open **Full details**. Cover, tags, comments, star and workflow changes do not overwrite unsaved metadata silently. Source publication bytes and sidecars remain unchanged.

**Failure evidence:** Book ID, initial and final values, screenshots of the full view and provenance, network response for any failed action, browser console and source-file checksum.

### H03-11 — Two-tab editing conflict

**Setup:** Open the same disposable book in two browser tabs. Record its title before editing.

**Steps:** Change and save the title in the first tab. Make a different title or description change in the second tab and save without reloading. Repeat with the direct `/apps/library/items/{id}` form with JavaScript disabled to exercise its native fallback.

**Expected:** The stale save returns HTTP 409 and cannot silently overwrite the first tab. The JavaScript editor keeps the second draft visible. The native form shows a comparison page with the draft and latest saved values. **Use latest saved values** returns without a write; **Save my reviewed draft** applies the draft only after an explicit choice and another revision check.

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

## Historical alpha.174 walkthrough

The sections below retain older case IDs and detailed release-hardening evidence. They are not the operative candidate instructions. Recheck their visible labels against the installed 0.3 UI before reusing an individual case.

## Historical source-candidate test status

Version under test in this older record: `0.1.0-alpha.174`. That development instance deployment included accessibility/catalogue cleanup, ISBN/ISSN identifier spine, indexed substring search, mobile filter panel, high-cardinality typeaheads, and the review issue batch (#32-37).

Packaging: **used for the current private deployment** was the historical alpha.174 status. At that time, the exact unsigned `dist/library-0.1.0-alpha.174.tar.gz` package was installed in the private Nextcloud 34 test container. The current version at that address is identified at the top of this handbook. Archive/package-identity assertions apply only to the artifact actually installed for a given test session.

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

The current automated browser coverage is listed in [Playwright journey coverage](playwright-journeys.md). Human dogfooding remains the release-candidate verdict for subjective usefulness, real-file edge cases, reader handoff quality, and assistive-technology use.

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

For v0.1 testing to start, these must pass on the packaged app, not just the working checkout:

1. The exact `dist/library-0.1.0-alpha.174.tar.gz` is installed and enabled on the private Nextcloud 34 test instance; confirm the visible behavior is the candidate described here.
2. `/apps/library/` and `/settings/user/library` load for a normal user without Library-specific console errors.
3. Adding a root, scanning it, browsing compact cards, opening sidebar details, and using Open/Show in Files/Download works.
4. Editing Library metadata survives a rescan and stays separate from Nextcloud tags/comments.
5. Corrected metadata export, import preview/apply, sidecar manifest, and sidecar ZIP are visibly safe and do not write into source folders.
6. Root deletion and missing-item forget affect app-owned catalogue/index rows only; source files remain in Nextcloud Files.

## Test cases

### LIB-HARDEN-001 — Package install and app shell

Purpose: prove the tester is using the generated release archive.

Setup: use the private Nextcloud 34 test instance where the exact `dist/library-0.1.0-alpha.174.tar.gz` candidate is installed and enabled.

Steps:

1. Open `/apps/library/` as a normal user.
2. Open `/settings/user/library` as the same user.
3. Check the visible app version or installed app version if available.
4. Open browser developer tools and inspect console output.

Expected result: both pages load; the app is version `0.1.0-alpha.174`; no Library-specific JavaScript error appears. Home and Shelves load bounded server-backed summaries, Catalogue loads its paginated results and additive facets, Review shows the focused native cleanup destination, copied queue URLs preserve the selected filter, and Settings reaches the existing personal-settings page.

Evidence to capture on failure: screenshot, URL, browser console errors, Nextcloud app version, and whether the app came from the generated archive.

### LIB-HARDEN-002 — First root and scan

Purpose: prove a fresh tester can move from empty Library to browsable catalogue.

Setup: choose a small folder with 20-100 EPUB/PDF/CBZ files if available.

Steps:

1. Open `/settings/user/library`.
2. Add the folder as a Library root with a clear label.
3. Run **Scan this shelf**.
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

Expected result: Open opens a new tab and hands off to Nextcloud's file/viewer route while Library stays in place; Show in Files opens the containing Files context, and Download returns the original file bytes.

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

1. Confirm the tester understands manual cover override/revert and bounded private thumbnails exist; a crop/rebuild workflow is still absent. This older case predates thumbnail caching.
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

- Catalogue or navigation change: H03-01 and H03-09.
- Lists or inference change: H03-02, then H03-09 for responsive controls.
- Author change: H03-03, H03-04, H03-07 and H03-09.
- Series change: H03-05, H03-06, H03-07 and H03-09.
- Duplicate matching change: H03-08 with distinct issues and true duplicates.
- Release-package change: H03-01, H03-03, H03-05 and H03-09 on the exact installed package, plus checksum and installed-version evidence. The historical LIB-HARDEN cases above can supply extra breadth when their labels still match the current UI.
### H03-20 — Catalogue author search regression

1. In All publications, clear filters. Search for `Heinlein` in Search; confirm the loading indicator finishes promptly and results remain usable.
2. Clear filters; type `Heinlein` in **Author**, then press Enter. Expect author-linked books, rather than zero results. General Search can return more books because it also checks descriptions and paths.
3. Type three or more letters in Author and select a full name. Confirm the selected name is reflected in the filter chip and Back/Forward restores it.
4. In a disposable test account, rename an author; search a distinctive part of their new display name and sort name. Both should find their books without rescanning.
5. Repeat with a language filter and on a narrow screen. Filters must combine; no overflow or blank-screen errors. Saved exact author filters should still work.

See the [alpha.29 measurements and repeat commands](compatibility-evidence/2026-10-20-nc34-search-alpha29/README.md).

### H03-21 — Browse authors (alpha.30)

1. Open Authors. Expect compact rows sorted by the displayed name A–Z, with a linked book count and at most three cover/title previews. Sort names should not clutter each row.
2. Choose Name Z–A, then Surname / sort name A–Z. Check ordering, including page two; changing sort resets to page one.
3. Type two letters: no request yet. Type a third: results update automatically with a loading indication. Clear the field to restore all authors. Search matches the beginning of preferred names or sort names.
4. Open a preview book. Use Back to return to the same directory search, sort and page. Open an author and use All authors; expect the same directory state. The book count opens the author's book collection.
5. Check an unused author, a long name and missing covers. Try a narrow/mobile viewport and light/dark themes: controls and titles must fit, links must have visible keyboard focus.
6. On the author profile, confirm cover/list views, title/date/series sorting and merge/reassign still work. Browsing must not change book metadata.

The three covers are stable examples, not a complete bibliography. Open the author or book count for all books.

### H03-22 — Series and Genres browser parity (alpha.30)

- Open Series and Genres. Both should have the same compact search/sort toolbar and cover/title previews as Authors, with Name A–Z as the default and Name Z–A available.
- Search after three letters, clear the search, paginate and follow book previews. Back must restore the originating directory state. Series names and counts open their profile; genre names and counts open the filtered catalogue.
- Genre pages must continue beyond the first 50 entries. Removed/inactive genre assignments must never appear among previews.
- Check narrow screens, keyboard focus and dark mode. Expand **Create a genre** to add a genre; suggestion review and series reassignment remain available and explicit.


### H03-23 — Delete a book from Details (alpha.31)

Use disposable files in an isolated test account. Do not use valuable library books for this case.

1. Open a fixture through a filtered catalogue or author/series directory. Stage a title edit, then choose **Delete book**. Check the exact file paths in the confirmation. Cancel or press Escape: the file and unsaved draft must remain.
2. Confirm deletion. The source file and exclusive OPF should disappear; an empty immediate parent should disappear too. Return to the original list/search and expect **Book deleted.** No metadata Save request should occur.
3. With EPUB and PDF sharing an OPF, delete one format. The remaining format and shared OPF must survive, and the dialog must explain that the OPF is retained.
4. Leave `cover.jpg`, a hidden file or any other file in the parent. The folder and companion file must survive. Configured shelf/root folders and mount roots are always retained.
5. Change or replace the source after opening confirmation. Delete must fail closed; reopen confirmation after refreshing. Read-only files must not offer a usable confirmation.
6. Verify the deleted book is absent from search and duplicate results. Its reading-list entry remains unavailable; author/series/genre records remain.
7. Where Nextcloud Deleted files is supported, restore the parent folder first if it was removed, then restore the source file and scan again. It should reappear as an imported book; Library-only edits removed with the previous catalogue entry are not restored.
8. Check keyboard focus, Cancel/Escape, scrolling and button contrast on desktop/mobile in light/dark themes. For partial cleanup failures, the message must say the book was deleted and identify the remaining cleanup.

Deletion requires Nextcloud transactional file locking. The storage guard preserves Nextcloud's normal trash/retention behavior; it does not permanently purge the trash. Deletion of arbitrary companion images or ancestor directories is outside this feature.
