# UI/UX follow-up — alpha.32

Reviewed 20 October 2026 on developer NC34.0.3.2, Library 0.3.0-alpha.32. Runtime source: `1cb2a7437c3370f0cca48a4bdfcbb4720a7b8222`; checkout `8bd77a7`.

Implementation follow-up: [alpha.33 change map and verification](compatibility-evidence/2026-10-20-nc34-ux-follow-up-alpha33/README.md).

## Verdict

The previous overhaul improved navigation, readable headings, Home covers, the compact book editor and the placement of technical information. The next work should address interaction consistency and returning to a task, followed by density and information hierarchy. Another wholesale redesign is unnecessary.

Nine findings remain below. F01–F03 are reproduced interaction problems; F04–F09 are observed design gaps. Priority P1 means address before release; P2 means the next usability pass. These priorities are design judgments, not security ratings.

## Scope and limits

- Read-only Chromium sweep: 29 screen configurations at 1440 × 1000 and 390 × 844, light and dark styling, plus scrolled states: **111 captures**, all HTTP 200.
- DOM/layout checks across the sweep; visual inspection of representative Home, catalogue, details, directory, profile, review, extraction, settings and duplicate screens. Focused live interactions verified picker behavior, directory query transitions and catalogue return navigation.
- No page errors or page-level horizontal overflow detected. This does not establish that every nested control is unclipped or that every journey is accessible.
- Library mutations were intercepted, except the normal duplicate-suggestion lookup. A subject was staged and discarded; nothing was saved. Catalogue count remained **107,717**. Temporary credentials were removed.
- The first scroll probe used an overly strict accessible-name selector and timed out. It was corrected to the cover link and rerun successfully. This was a harness issue.
- No fresh destructive-operation, scanner-job, full Save/stale-edit, screen-reader, touch-device or performance certification run. Dark styling was applied in the browser without changing account preferences. Existing alpha.32 verification remains separate.

Sanitized measurements: [evidence summary](compatibility-evidence/2026-10-20-nc34-alpha32-follow-up/summary.json). Private screenshots and reports remain in `/tmp/library-ui-review-8jsq7s`; they contain catalogue information and are not committed.

## Findings

### F01 — P1: Similar pickers give Enter different meanings

**Reproduced:** typing `Hist` in Subjects displayed existing matches, including Historical. Enter added a new `Hist` chip. Typing `German` in Languages displayed German (de), but Enter left the query unchanged and added no language. The generic entity picker instead selects its first suggestion when none has been navigated to explicitly.

Free-form subjects and controlled languages legitimately accept different values, but that distinction should not require guessing what Enter will do.

**Change:** adopt one visibly indicated selection policy. Enter accepts the highlighted suggestion; creation is an explicit “Create subject …” choice. Explain invalid language input instead of silently doing nothing. Share keyboard handling while retaining each field's validation.

**Acceptance:** the same arrow/Enter/Escape interaction in authors, series, publishers, genres, languages and subjects; creation cannot accidentally turn a search fragment into metadata. Include pointer selection, pending/error states and initial ArrowUp. Source inspection also found initial ArrowUp selects the penultimate option in EntityPicker and MetadataValuePicker; this particular edge was not live-tested.

Sources: `src/components/MetadataValuePicker.vue`, `EntityPicker.vue`, `GenrePicker.vue`. The [WAI combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) distinguishes manual and automatic selection and specifies accepting the selected suggestion. This finding concerns inconsistent product behavior, not a claim that every free-text autocomplete violates WCAG.

### F02 — P1: Directory input can disagree with the displayed results

**Reproduced:** search Authors for `John`, then shorten it to `Jo`. John results and `authorSearch=John` remain, with no status explaining the three-letter threshold. Change Sort: the full directory appears, the URL loses the search, but the input still says `Jo`.

**Change:** explicitly distinguish the draft query from the applied query. Under the threshold, show “Type one more letter to search” and identify any retained results; sorting must not silently change the search scope.

**Acceptance:** query, results, URL and Back restoration remain understandable for 0/1/2/3 letters, deletion, sort changes and pagination. Shared DirectoryBrowser means Authors, Series and Genres need the same checks.

Source: `src/components/DirectoryBrowser.vue`.

### F03 — P1: Back to results loses the browsing position

**Reproduced:** opened the 36th catalogue cover after scrolling the content container to **1,498 px**. The Details Back link restored the catalogue URL but returned to **0 px**.

**Change:** preserve the originating item and position with the existing filter/page context. Restore after results render and return keyboard focus to the item. Prefer an item anchor with a scroll fallback so changed result sets can recover sensibly.

**Acceptance:** Details → Back restores position for catalogue and directory entry points, including long pages and changed results. Verify browser Back separately; the live finding concerns the in-app Back link.

Sources: `src/details-return.js`, `src/components/FullDetails.vue`, `src/App.vue`.

### F04 — P2: Search is easier to find, but catalogue controls still dominate mobile

**Observed:** first cover begins at **y503** on the 390 × 844 screen. Search, a separate Filters row, sort/view controls, Collections, count, pagination, Select all and duplicate status all precede it. Desktop still exposes both the sidebar content search and the main Search books field.

**Change:** retain one content search. Group Filters, Sort and View compactly; move saved-search creation to a secondary action; combine count/pagination and reduce routine duplicate status prominence. Keep selection accessible without devoting a full row to an idle bulk workflow.

**Acceptance:** visibly more book content on the same viewport, without smaller touch targets or hiding the main search. Check loaded, searching, filtered and empty states.

### F05 — P2: Quick view competes with the book identity

**Observed:** catalogue covers have a full-width Quick view button above a truncated 13 px title; mobile often shows only fragments of long titles. Home uses covers with titles and author text beneath, so equivalent browsing cards still feel different.

**Change:** make title/author the identifying hierarchy; use a compact, explicitly labelled secondary Quick view action. Align card typography and action placement across Home and catalogue while retaining cover/title → Details and Open → reader.

**Acceptance:** long titles remain identifiable, action intent is clear, and keyboard/touch users can reach Quick view without hover.

### F06 — P2: Series profiles lack Author-profile browsing controls

**Observed/source:** Author profiles offer title search, sort and views. Series profiles show a fixed list and pagination without those controls. Improved shared directories do not yet extend to these profile collections.

**Change:** share the book-collection toolbar and cards, with series-specific default ordering by part. Retain search, suitable alternate sorts and view choice.

**Acceptance:** large series are navigable without going back to the catalogue; sort/view/query survive a Details round trip. Small and empty series remain compact.

Sources: `src/components/Authors.vue`, `Series.vue`.

### F07 — P2: A single directory preview wastes mobile width

**Observed:** a row with one book still uses one third of the preview area, truncating its title while the remainder is empty. CSS always reserves three columns.

**Change:** adapt the preview layout to the actual count; use the available width for one preview, and a deliberate two/three-item layout otherwise.

**Acceptance:** 0/1/2/3 previews, long titles and missing covers work on mobile without enlarging every row unnecessarily.

Source: `src/components/DirectoryBrowser.vue`, `.directory-previews`.

### F08 — P2: Settings retain excessive nesting and an inverted heading scale

**Observed:** the mobile shelf form sits inside several padded containers. Folder path is about 90 px wide beside Choose folder, hiding almost all of the entered path. The parent Folders and scanning disclosure uses smaller text than Add a shelf inside it.

**Change:** flatten one card level, stack the folder control and chooser at narrow widths, and use a consistent parent/subsection hierarchy. Apply the same nesting rule to other maintenance forms.

**Acceptance:** paths can be inspected and edited comfortably at 390 px and 320 px; controls remain reachable and parent sections are visually clear.

### F09 — P2: Review still exposes overlapping metadata concepts

**Observed:** one live suggestion showed both “Series / periodical” and “Series,” each proposing the same value, with separate Use suggested value buttons. A normal reader cannot tell whether these are duplicates or distinct changes.

**Change:** present suggestions around the user's intended field. Group equivalent changes where semantically safe; otherwise explain the distinction locally and show what each decision affects. Preserve genuinely distinct publication/series data rather than blindly merging fields.

**Acceptance:** no unexplained duplicate-looking decisions; review remains accurate for books and periodicals. Add a fixture with both source fields populated.

## Recommended order

1. Fix picker semantics, directory state and return-position restoration (F01–F03).
2. Improve catalogue/card density and profile/preview consistency (F04–F07).
3. Flatten settings and clarify overlapping review suggestions (F08–F09).

Keep the working compact editor and bottom disclosure order. Extend journey coverage to partially typed queries, keyboard selection and returning to a scrolled list; successful loading and screenshots alone missed those transitions.

Design reference: [Nextcloud foundations](https://docs.nextcloud.com/server/stable/developer_manual/design/foundations.html). Recommendations above are based on the observed Library screens; this review is not a formal accessibility certification.
