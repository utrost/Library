# Library human test handbook

**Working through a real incoming collection in 0.4?** Use the [real-life intake and curation handbook](v0.4-field-test-handbook.md): connect the actual folder to your normal account, index it, work through Review and organise, keep useful corrections and check results as you go. The isolated regression and technical acceptance checks remain below.

## Current developer checkpoint

**0.4.0-alpha.8** is installed on developer NC34. The exact archive checksum, source commit, upgrade/rollback rehearsal and live desktop/mobile results are recorded in [signed-package delivery](providers-alpha8-verification.md). Use disposable books for source-write and sharing trials. EPUB write-back supports local filesystem storage only; remote/encrypted writes are refused. The stable Store remains 0.3.0.

When repeating browser checks after restarting disposable containers, refresh their assigned port and trusted-domain configuration. Seed at least one **To read** book before asserting a populated native Dashboard. New test accounts may show Nextcloud's welcome dialog; dismiss it for those accounts and use Library as their landing page, leaving instance-wide settings unchanged. For repeated EPUB restores, wait for the active operation to finish and compare original bytes; an older “Original restored” entry is insufficient.

## Development: selected-book metadata lookup

Alpha.8 is installed on developer NC34. See the
[current signed-package verification record](providers-alpha8-verification.md) and the
[workflow and limitations](bulk-metadata-lookup.md). On a disposable catalogue,
select two books and open **Find book details**; repeat from a personal list.
Verify the default is **Fill missing fields**, providers reflect configuration,
and no provider search happens before **Find matches**. Pause/resume, leave and
reopen the saved run, choose editions, select fields and reload. Choices should
persist. Apply one row without leaving the queue, then Undo. Apply selected rows
with one book edited elsewhere: the stale row must fail while other rows succeed.
Confirm Undo refuses to overwrite a later manual edit. Cancel a run, delete it,
and check the retention explanation. Check 51-book rejection, keyboard focus,
long descriptions, mobile wrapping, dark mode and RTL. Use synthetic books only.

For the next source package, check the provider setup with no preferred provider:
no provider is selected until you choose one. Switching providers changes the
available field checkboxes; Cover appears only where supported and starts clear.
When Google Books has no server key, its unavailable message should explain why.
Select 50 books across catalogue pages, then try an empty, duplicate or forged
selection through the API fixture. None may create a job or send provider data.
Review a candidate whose language differs from the selected edition: the strong
match shortcut must leave Language clear. An explicit language choice remains
reviewable with the saved value and original evidence visible. In Home, check
duplicate and stalled-job counts after the background snapshot completes; each
link should lead to its matching review view. In Nextcloud Unified Search, check
owned-book and author results, pagination and account isolation with Text both
enabled and disabled. These source-package checks do not change the installed
alpha.8 checkpoint or complete 0.4 release certification.


### Lookup refinements retained in alpha.6

These checks target the installed alpha.8 build; the stable App Store release remains 0.3.0.

- Refine one row’s title/author/ISBN and switch an enabled provider; check no
  request until Search, old approvals cleared only for that row, and stale-tab
  Apply rejected. Cancel the inline form and verify its approvals survive.
- Change status filters. Book/field selection counts cover all filters. Apply
  eleven selected synthetic books: two requests (ten plus one), visible progress,
  durable outcomes, no redirect. Interrupt/fail a request and refresh before retry.
- Choose an exact-ISBN edition with matching title/author; select missing fields
  using the shortcut. Ambiguous editions, replacements and conflicting language
  evidence must remain unselected. Selection alone must not edit a book.
- Compare raw language evidence with normalized suggestions in one-book and batch
  review. Check aliases, regional codes, multiple languages and an unknown code.
  Existing language sets survive Fill missing fields; explicitly approved language
  replacement remains reversible until a later edit.
- Delete lookup suggestions after Apply; reopen the retained receipt and Undo.
  Delete receipts only after the separate confirmation. Test expiry using the
  disposable backend fixture, never by changing the developer instance’s clock.
- Check keyboard focus after Apply, mobile refinement form wrapping, source links,
  retry timing, and readable light/dark states. Manual assistive technology and
  linguistic review remain human acceptance work.

**Stable release record: 0.3.0.** The signed stable archive, checksum and certification are recorded in the [release verification record](release-verification.md). Earlier RC checksums and results do not certify 0.3.0.

### Single-book provenance and optional covers

- Compare an Open Library edition in Book Details. Stage a publisher, edit the
  description manually, then Save once. Lookup change history should attribute
  only the accepted publisher. Undo restores it and keeps the manual description.
- Select only one of several suggested ISBNs. Its source should identify the
  provider; manually changed suggestions must remain user edits.
- Choose **Preview cover from Open Library**, compare the current and suggested
  images, and explicitly select the replacement. Staging alone changes nothing.
  Discard preserves the current cover; Save commits approved text and cover together.
- Repeat in bulk review with Cover enabled. Cover is never automatically checked
  by the strong-match shortcut, even under Fill missing fields. Text-only Apply
  must preserve a custom cover. Undo restores original cover bytes and source.
- Edit text or replace the cover in another tab after review. Stale Apply/Undo must
  refuse the whole operation. Expired, oversized, unsupported or unavailable
  images must leave the book unchanged and permit retry.
- Preview storage is private and bounded. Suggestions expire after 30 days;
  image approval expires after 30 minutes. Retained receipts and original cover
  backups expire 90 days after Apply. Explicit receipt deletion removes Undo.
- Google Books text lookup remains available when configured; permanent Google
  cover saving is unsupported pending provider-policy acceptance. No provider
  fallback or automatic external image requests should occur.

### 0.4 provider lookup preview

On the alpha.8 development build, open **Administration settings → Library → Book metadata lookup**. Confirm Open Library needs no key, Google Books shows whether a key is configured without showing it, a blank Save preserves a stored key, and explicit removal disables keyed lookup. Enter a disposable restricted key to try Google Books; never put it in screenshots or notes. Then open a disposable book's **Find book details** section. Select Open Library, search by a valid ISBN, compare an edition and stage one field, then Discard. Repeat with Google Books; check that the query is sent only after Search, the volume link identifies Google Books, and a matching ISBN is shown for an ISBN search. Select the GGKEY separately, Save on a disposable book and confirm it survives reload. Try a wrong ISBN, missing Google key, provider switch during a pending search, sparse results and provider failure; none should change saved book data. Check keyboard, mobile and screen-reader labels. These checks do not certify provider terms, attribution or the full NC33–35 matrix.

#### DNB lookup — alpha.8 addition

In Administration settings → Library, confirm DNB is available without a key and can be disabled. In a disposable book, explicitly choose **DNB (German National Library)**, search first by ISBN and then by title/author. Compare the source record at `d-nb.info`; inspect title, subtitle, publisher, publication year, languages and available subjects/description. Missing fields must not be invented. Covers and Open Library’s edition paging should not be offered.

Stage a field, Discard, then stage and Save. Reload to confirm the value and DNB source evidence; Undo should restore the previous value. Repeat through a small bulk run: search, choose, select, Apply, Undo. Check stale book/review protection, empty results, a disabled provider, unavailable service, and preserved DNB preference. Inspect desktop/mobile wrapping and keyboard labels. No lookup should happen merely by opening the editor or changing the provider.

#### Library of Congress lookup — alpha.8 addition

Repeat the DNB review workflow with **Library of Congress**, individually and in a small bulk run. In administrator settings, check the independent enable/disable control and no-key explanation. Verify ISBN search and title/author search; try both given-name-first and surname-first author input. Compare publication details and language before approving. Source links must open the matching LCCN page, and saved evidence must identify Library of Congress. Covers and Open Library’s edition browsing are not available here.

If the catalogue is unreachable, expect a Library of Congress unavailable message with existing book details unchanged. Explicitly retry or choose another provider. The source implementation has fixture coverage; live LoC lookup is not yet verified because its HTTPS endpoint timed out during development.

### 0.4 read-only sharing preview

Alpha.3 introduced selected-book sharing, retained in alpha.4. Create a personal list of 1–100 books from one shelf, then choose **Shared libraries → Selected books only — no Files share**. See the [focused upgrade and performance record](sharing-alpha3-verification.md) for measured coverage and remaining release acceptance.

Use disposable owner, recipient, outsider and second Files-recipient accounts. Enable an owner shelf with an indexed book and a cover. Share its folder read-only in Nextcloud Files with both recipients and have them accept it. In **Shared libraries**, choose the shelf and first recipient, type at least three letters of the recipient's name, select the result, review the folder-wide Files disclosure, then grant. As that recipient, browse, search by a corrected author name, inspect the cover and open the file. Confirm there are no metadata editing controls and neither the outsider nor the Files-only second recipient can open the shared shelf, book or cover URL. Revoke Library access and verify the recipient loses the shared view while the original Files share stays in place. Then remove the Files share separately. Repeat with a long shelf/user name, a missing cover, 390 px mobile width, keyboard focus, light/dark themes and a Files share whose permissions or acceptance state changes. The disposable NC34 browser script covers the basic permission boundary; it does not certify the full NC33–35, database, policy or large-catalogue matrix.

For **Selected books only — no Files share**, use a recipient with no Files access and a shelf containing at least two disposable books. Put only one in a personal list, select this access mode and list, then expand **Review selected books**, check the titles/paths and confirm. Verify that the recipient sees and downloads only the selected book; direct URLs for the other book, its cover and download return 404. Add the second book to the original list and confirm it is still excluded. Test an empty list, a list spanning shelves, stale confirmation, replacement at the same file path, disabled sharing policy and revocation. No Files share should be created. Revocation must deny new downloads, and account cleanup must remove the snapshot rows.

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

1. In All publications, clear filters. Search for `a known author` in Search; confirm the loading indicator finishes promptly and results remain usable.
2. Clear filters; type `a known author` in **Author**, then use **Apply author** to search that fragment. Enter with loaded suggestions selects the highlighted full name instead. Expect author-linked books, rather than zero results. General Search can return more books because it also checks descriptions and paths.
3. Type three or more letters in Author and select a full name. Confirm the selected name is reflected in the filter chip and Back/Forward restores it.
4. In a disposable test account, rename an author; search a distinctive part of their new display name and sort name. Both should find their books without rescanning.
5. Repeat with a language filter and on a narrow screen. Filters must combine; no overflow or blank-screen errors. Saved exact author filters should still work.

See the alpha.29 measurements and repeat commands.

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

## Alpha.6 development: alternative editions

Tracked in [#183](https://github.com/utrost/Library/issues/183). In one-book Find book details and bulk lookup, search Open Library, choose **Other editions**, page forwards/backwards, inspect language/format/ISBN, then compare an edition and explicitly select fields. Original candidates remain available. Confirm changing a bulk edition clears only that row's previous approvals; Save/Discard, Apply and conditional Undo retain their existing behavior. ISBN matches and related-work editions must have distinct explanations. See [bounds and pending acceptance](lookup-edition-browsing.md).

## Alpha.6 expanded curation — remaining acceptance

The following is the complete acceptance checklist, not a claim that every item has passed. Completed focused runs are recorded separately in [alpha.6 verification](curation-alpha6-verification.md). Stable remains 0.3.0 and the installed development checkpoint is alpha.8; see [provider delivery](providers-alpha8-verification.md). Read [scope, limits and recovery](curation-alpha6.md) before enabling source-write trials. Do not use personal books for destructive or failure-injection journeys. New Arabic translation/UI work is outside this slice.

### Upgrade and ownership

- Preserve a populated alpha.5 database/appdata/Files backup. Upgrade with alpha.6; check the ten new tables, nullable unavailable list references, genre parent/closure and indexes against the XML reference. Rerun migration registration and verify existing books, lists, grants and file bytes remain unchanged.
- Delete a disposable catalogue entry: curation/history/note links must disappear, list entries become unavailable, and source/note Files stay intact. Delete a disposable account through Nextcloud: private records and recovery files must disappear without changing another account. Repeat cleanup safely.
- Repeat relevant schema/transaction cases on SQLite, MariaDB and PostgreSQL. Do not infer database compatibility from PHP lint.
- Use two unrelated accounts and a named-user sharing recipient. Guess other owners' book, note, hierarchy, job, archive and backup IDs; each must reveal no private data. Recipients must not see owner notes/history/private dashboard activity or gain write access.

### Incoming books and organisation

- Import books into two shelves across known indexing dates. Open Incoming books, filter one shelf/day, mark Done, defer a row, reload and return from Details. Confirm shelf, date, filter, cursor history and checked rows remain. Repeat reload while inside provider lookup, return to the queue, and follow the shelf-scoped path-extraction link back. A newly opened default queue link need not restore a previously bookmarked view. A later source or canonical relationship change must reopen review; a no-change rescan must not.
- Exercise empty 50-record filtered windows with older matching records. Up to four windows are skipped automatically; after 200 examined records, Continue to older books must remain usable. Distinguish that bounded search from reaching the end. Failed Next must retain the prior page and selection. Open existing metadata/duplicate review controls and return; completed inbox decisions must survive.
- From catalogue, collection and a personal list, select exact IDs and prepare author add/remove/replace, series/part, genre, language and publisher jobs. Check names and before/after values, ordering and empty replacement. Skip/include a row; no writes before approval.
- Apply with one stale revision and one unavailable source. Other rows may succeed; conflicts must remain visible. Pause/reload/resume, cancel midway and Undo applied rows. A later edit, cover/source change or file replacement must block Undo. Race two workers and review tabs; inspect atomic metadata/index/history outcomes and lease recovery.

### Portable curation

- With author/series indexing pending or failed, export must explain why it cannot start. A restore that encounters pending author indexing must pause without creating a partial author; resume after indexing and check exactly one author is created.
- Export profiles/portraits, redirects, hierarchy, multiple authors, a cover override, removed genres, languages, list order/notes, unavailable entries, saved searches, extraction patterns/rules and retained history. Inspect the version/coverage/exclusion manifest. Confirm no API key, sharing grant, provider cache, source bytes or note body.
- Restore source Files into an isolated account, configure matching shelves and scan. Upload the archive, reload halfway and resume with the same file. Different content under an existing archive key must fail. Check record/total limits, malformed UTF-8/JSON/version, missing/ambiguous destination files and cross-owner references.
- Upload an empty archive: completion must explicitly report no changes. Test an identical retry at quota, framing/manifest allowance, a 15 MB record, 128 KiB review and 512 KiB imported-history bounds. Oversized review records must show a conflict without expanding the whole review response.
- Inspect book and non-book review details. Skip records and observe dependent conflicts. Approve explicitly; repeat requests and interrupt the worker without duplicating lists/profiles or applying a row twice. Preserve destination custom genre parents and report missing shelf/changed settings rather than broadening filters.
- Modify a matched book after preview. Restore must refuse its stale row. Verify folder rules contain destination file IDs, unavailable list entries do not bind old numeric IDs, and note links never create/delete note files. Download/archive deletion/expiry must remain bounded. A restore is not a replacement for Files/database backup.

### Genre hierarchy, classifications and history

- Create custom genres, opt into starter labels, move/rename a subtree, reject a cycle and stale tree revision, and reject deleting a used parent. Browse a parent containing a book assigned to both parent and child; count it once. Child assignment must not add a parent chip. Race assignment/removal with hierarchy deletion.
- Keep imported untyped classifications unchanged. Add/remove multiple LCC/DDC/UDC/RVK/BK/ASB/custom values, select existing suggestions, use raw editing, Save/Discard and stale-edit rejection. Keyboard/mobile layout must keep the scheme and notation usable.
- Change a source file directly in Files before the scanner notices, then attempt history Undo: it must reject the stale source and preserve the newer metadata.
- Inspect manual, import, scanner acceptance, path, personal, cover, provider and entity events. Check before/after labels and private retention. Exercise ordinary and provider Undo; imported history must never execute old source-account Undo authorization.

### EPUB source-write trials

- For complex metadata, verify that the error names the affected field. Deselect it and preview an ordinary field; both the refused attempt and preview must leave source bytes unchanged. `tests/gui/details/writeback-complex.spec.ts` uses the `complex` mode of the disposable HTTP fixture.
- `tests/php/epub_conformance_fixtures.php` generates EPUB 2/3 originals, reviewed copies and cleared-author copies for an independent EPUBCheck run. Set `LIBRARY_EPUBCHECK_OUTPUT` to a private existing directory and run the generated six files through the official validator. Validation does not replace the reader checks below.

- Use disposable EPUB 2 and 3 files with independent original hashes and a reader. Preview and apply each supported field; compare OPF and every content/image entry, reopen in the reader and verify source reconciliation. Cancel or expire a preview without changing bytes.
- Reject remote/encrypted storage before opening any writable stream, even if its temporary stream is seekable. Verify scanning, reading and Library-only editing still work. Change a supported mount to unsupported/read-only after preview and confirm Apply also refuses it.
- Reject read-only/nonseekable storage, stale source ID/etag, replaced paths, malformed/oversized ZIP/XML, unsafe names, encrypted/signed/rights-managed books, multiple renditions and complex selected refinements. Other formats and sidecars remain unchanged.
- Interrupt before first write, during write and after final bytes but before status persistence. Verify retained originals, same-stream rollback, explicit recovery state and no retry overwriting unrelated replacement bytes. Unresolved originals must remain downloadable and protected from deletion/expiry.
- Restore an unchanged written file; refuse a newer edited version. Delete a resolved backup explicitly. Verify 15-minute preview, seven-day resolved-backup retention, five-job limit, source-write history and partial reconciliation messages. Repeat these source-write checks with disposable files on each newly supported storage configuration before using it. Remote/encrypted source writes remain unsupported.

### Nextcloud and Home

- Use a book title containing Markdown image/link syntax and HTML. A generated reading-note heading must show literal title text and make no remote requests when opened in Text. Text may normalize the Markdown itself when opening it; check visible content and links, not byte identity after handing the document to Text. Without an editor, Files navigation must not rewrite it.
- Create, attach, rename/move, unlink and delete/revoke a note; the stable link must follow current file permission and never delete its document. Try Text/Notes enabled and disabled, a subdirectory Nextcloud install and a large note folder.
- Test Unified Search with short/valid/empty/identifier queries, multiple pages and revoked Files access. It must use no external provider. Smart Picker previews must be private to the viewer; copying a URL must not grant access or return a cached private preview to another user.
- Enable the native Dashboard widget, change Up next list, delete/hide a listed book, simulate unavailable cover/API and use keyboard/mobile navigation. Recently opened is not reader-position progress.
- Delete the selected Up next list: Home and the native Dashboard must fall back to To-read books.
- Configure Home cards, empty lists, long names, dark/light themes and errors/retry. Health counts must appear asynchronously with a timestamp; review links must retain their intended filters. Record latency and payload/query counts on synthetic 100k data before claiming the two-second target.
- Capture replacement screenshots only from reproducible disposable data after these journeys pass. Record package hash/version, exact environment and outstanding failures separately from source build/lint evidence.

### Focused local alpha.6 harnesses

These commands create or require labelled disposable containers. Use a preserved alpha.5 archive and a private evidence directory excluded from version control. They do not deploy to the developer catalogue, sign a package or run GitHub Actions.

```bash
LIBRARY_UPGRADE_FROM_ARCHIVE=/private/fixtures/library-alpha5.tar.gz \
LIBRARY_LISTS_DATABASE=mysql \
bash scripts/smoke-curation-upgrade.sh
```

Repeat with `sqlite` and `pgsql`; use `NC_VERSION` for the Nextcloud version under test. The harness keeps evidence private and removes its fixture unless `LIBRARY_KEEP_FIXTURE=1` is set. `scripts/smoke-curation-concurrency.sh` requires `LIBRARY_LISTS_CONTAINER`; `scripts/smoke-curation-transfer.sh` requires distinct labelled `LIBRARY_TRANSFER_SOURCE` and `LIBRARY_TRANSFER_TARGET` containers. Both use synthetic files only.

The focused GUI suites include `tests/gui/details/curation-alpha6.spec.ts` and `curation-scale.spec.ts`. The former requires the fixture's explicit Playwright environment and installed PHP worker helper; the latter requires the synthetic scale account and `PW_SCALE_FIXTURE=1`. Do not point either at a personal catalogue. Provider browser tests require their deterministic seeded receipts and must not make live provider calls by accident.

Additional repeatable fixtures:

- `scripts/smoke-writeback-permissions.sh` requires `LIBRARY_LISTS_CONTAINER`. It previews a writable named-user share, revokes write permission, checks refused Apply and retained originals, restores permission, then verifies Apply/Restore and removes both accounts.
- `scripts/smoke-writeback-storage.sh` requires distinct labelled `LIBRARY_STORAGE_SOURCE` and `LIBRARY_STORAGE_TARGET` Nextcloud containers, with Files external enabled on the target. It creates isolated accounts and a temporary DAV mount, checks writable/read-only refusal, and removes its mounts, accounts and network. `tests/php/writeback_storage_integration.php encrypted` additionally checks a disposable encryption-enabled instance; never enable encryption on a developer or personal instance for this test.
- `tests/php/curation_lifecycle_integration.php` creates and deletes a 52-book owner for review pagination, rescans, defer/hidden state, catalogue deletion and account-deletion cleanup.
- `scripts/smoke-curation-boundary.sh` creates 5,000 actual source PDFs and runs prepare/Apply/Undo. It requires `LIBRARY_LISTS_CONTAINER`, enforces the disposable label, and deletes its fixture by default. Set `LIBRARY_KEEP_BOUNDARY_FIXTURE=1` only when continuing with the archive scale or browser checks.
- `tests/php/curation_archive_scale.php` streams the retained 5,000-book fixture through export/upload/review/restore and hashes all source files. `tests/php/writeback_large_integration.php` creates a 127 MiB EPUB, verifies streaming and exact restoration, then tests rejection above 128 MiB. Both require `LIBRARY_DISPOSABLE_FIXTURE=1`.
- `tests/php/curation_http_fixture.php` seeds disposable owner/outsider accounts for `curation-access.spec.ts`; `german` adds long translated names for `curation-german.spec.ts`, `text` prepares literal-title notes for `curation-notes-text.spec.ts`, and `complex` adds a multiple-title EPUB for `writeback-complex.spec.ts`. Supply its private JSON via `PW_CURATION_HTTP_FIXTURE`. The Text suite toggles Text only on the labelled container and restores it enabled in `finally`. Run these suites serially and clean up their accounts afterward.
- `tests/php/epub_reader_fixture.php` imports the six generated conformance EPUBs into a new disposable account. It requires `LIBRARY_DISPOSABLE_FIXTURE=1` and `LIBRARY_EPUBCHECK_OUTPUT`. With EPUB Viewer installed, pass its private JSON as `PW_EPUB_READER_FIXTURE` to `epub-reader.spec.ts`, along with that fixture's `PW_USER`/`PW_PASSWORD`. Run `cleanup` afterward. Keep companion-app console diagnostics separate from Library failures and do not claim general reader certification from one reader/version.
- `curation-boundary.spec.ts` requires `PW_CURATION_BOUNDARY_FIXTURE` pointing to the retained boundary fixture. It records cold navigation and repeated page timings without pixel-match assertions. `metadata/lookup-editions.spec.ts` requires deterministic receipts from `tests/php/lookup_editions_browser_fixture.php`, never live provider traffic.

Keep source-install evidence separate from release-package hashes, integrity checks and deployment evidence. A future signed candidate must repeat its required acceptance checks; these development runs do not replace that step.
