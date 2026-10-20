# Final UI/UX sweep — alpha.33

Reviewed 20 October 2026 against **installed Library 0.3.0-alpha.33** on developer NC34. Runtime commit `35f9dd4eeb1f9934ef7aeb3c65c12b0a4e96e91d`; documentation checkout `1d1a367`.

Implementation follow-up: [alpha.34 verification record](compatibility-evidence/2026-10-20-nc34-final-ux-alpha34/README.md). This report describes the alpha.33 baseline.

## Verdict

The core browsing and editing experience is substantially more coherent. The compact identity panel, single Save/Discard workflow, linked covers/titles, readable book titles, directory search and return-position handling are working in the journeys repeated here.

**I would not sign off complete UI/UX consistency yet.** Four reproduced defects need a finishing pass, followed by four smaller consistency improvements. These are concentrated gaps in shared behavior, theme tokens and secondary screens. The current editor structure should be retained.

P1 below means fix before release acceptance; P2 means important consistency/polish. These are UX priorities, not security severity ratings. A remaining issue is not necessarily a regression introduced by alpha.33.

## Coverage and safeguards

- Fresh installed-package sweep: **111 captures** across 29 screen configurations, desktop 1440 × 1000 and mobile 390 × 844, light/dark styling and selected scrolled states. All captured routes returned HTTP 200; no page errors or measured root horizontal overflow.
- Covered Home, catalogue cover/list/search/empty states, Favorites, Continue reading, Shelves, Collections, Lists/new list/list details, Authors/Series/Genres, author/series profiles, Review queues, conflicts, duplicates, metadata extraction, language/value cleanup, personal/admin settings and book details.
- Additional focused captures: seven desktop dark screens and author/series/list/details/settings at 390 and 320 px. Inspected representative screenshots from each screen family, rather than treating successful capture as a visual pass.
- Repeated installed desktop/mobile editor smoke: author and series entry points, legacy bookmark redirect and feedback, stage/discard title/author/series/subject/language, keyboard suggestions, sticky action hit targets, bottom disclosure order, file size/location and Files handoff. Saved metadata stayed identical.
- Repeated directory short-query/sort/reload and normal catalogue Details → Back checks. The returned book's viewport anchor was preserved; raw scroll position can change when surrounding content height changes.
- Focused probes reproduced the profile-search, filter-keyboard and mobile hit-target defects below. Quick view → Escape restores trigger focus on desktop/mobile **after the transition completes**.
- No book edits, deletion, merges, scan runs or settings changes were submitted. Library mutation requests were intercepted except the ordinary duplicate-suggestion lookup. Blocked mutation attempts: **0**. Catalogue **107,717 → 107,717**. Temporary review credentials remaining: **0**.

This is not a new full Save/stale-edit, destructive-operation, import/apply, job/performance, Firefox, screen-reader, physical-device or NC33–35 certification run. Existing packaged regression evidence remains in the [alpha.33 verification record](compatibility-evidence/2026-10-20-nc34-ux-follow-up-alpha33/README.md). Browser-applied theme styling did not change the account preference.

The focused harness initially used obsolete collection/drawer selectors and an overly strict Quick view accessible name; corrected probes were rerun. An immediate focus sample taken during the sidebar transition was also repeated after settling. Those initial attempts are not product findings or successful checks. The existing external Files duplicate-viewer-handler diagnostic remains; no Library page errors were recorded.

Sanitized results: [evidence summary](compatibility-evidence/2026-10-20-nc34-alpha33-final-ux/summary.json). Private screenshots contain catalogue data and are not committed.

## Remaining defects

### F01 — P1: Error messages are barely readable in both themes

**Reproduced:** Review → File problems renders the scanner failure explanation using `--color-error` as the foreground. On this installed Nextcloud version that is a background token:

| Theme | Text | Surface | Calculated contrast |
| --- | --- | --- | --- |
| Light | `#FFE7E7` | `#FFFFFF` | 1.18:1 |
| Dark | `#552121` | `#171717` | 1.39:1 |

The same theme exposes `--color-error-text` as `#8A0000` / `#FFCCCC`. The message is present but unnecessarily hard to read, especially on the screen intended to explain broken files.

**Source:** `css/style.css`, `.library-scan-error`. Source inspection also found foreground uses of the background token in the root danger disclosure, cover-paste errors, shared danger actions and FullDetails errors. Those additional states were not all triggered.

**Acceptance:** use the appropriate text/surface token pairing; inspect actual foreground/background combinations for errors, warnings, destructive actions and disabled states in both themes. Keep explanations readable independently of color. Include a real scanner error and simulated request/validation failures.

### F02 — P1: Unsubmitted profile search changes results after returning from a book

**Reproduced on both Authors and Series:**

1. Open a populated profile.
2. Type a deliberately nonmatching title query without pressing Search.
3. Change Covers/List. Existing books remain visible.
4. Open one of those books, then use Details → Back.
5. The previously unsubmitted query is now applied; the profile returns with zero books.

The tested author had one visible book and the series three; both returned with none. Author book links serialize the draft into `returnTo`; Series serializes it into the page URL when the view changes. The directory's recently fixed draft/applied distinction does not yet extend to profile collections.

**Source:** `Authors.vue` `bookUrl()`; `Series.vue` `rememberBooks()` / `watch(bookView, …)`.

**Acceptance:** persist the last successfully applied query separately from input text. View changes and book links must preserve the displayed scope. Check unsubmitted text, submitted text, clearing, pagination, reload, in-app Back and browser Back for both profile types.

### F03 — P1: Catalogue filter dropdowns still disagree on keyboard selection

**Reproduced:**

- Publisher `Peng` shows suggestions. ArrowDown sets an active suggestion; Enter selects the complete publisher.
- Publication `Xan` shows `Xanth`. ArrowDown sets no active option; Enter submits `publication=Xan`.
- Year `200` shows complete years starting with `2000`. ArrowDown sets no active option; Enter submits `year=200`.

Visually similar comboboxes therefore either select an option or submit a fragment. The book editor's harmonized picker behavior has not reached these filters.

**Source:** desktop/mobile filter markup in `src/App.vue`. Author, tag, folder, subject and classification controls also warrant the same audit; the live author probe returned no suggestions within its observation window, so its selection behavior is not claimed as reproduced here.

**Acceptance:** share explicit selection, ArrowUp/Down, Enter, Escape, active-option styling, loading/error and minimum-input behavior. Preserve deliberate free-text author search where supported, while making it distinct from selecting an exact facet. Test desktop and mobile filters.

### F04 — P1: Nextcloud navigation intercepts the start of mobile Back links

**Reproduced at 390 and 320 px** on Author, Series and List details. The links begin at x32/y75; the navigation toggle occupies x15–49/y58–92. Hit-testing the beginning of the Back link returns **Open navigation**, not the link.

This is a partial overlap, not a completely unusable Back link. It was already present before alpha.33; the current sweep also confirms the List case. Other top-of-page content, such as Review's active-filter label, visually enters the same reserved area.

**Acceptance:** reserve the navigation toggle's space in the shared page header, including breadcrumbs/Back links and active filters. Check pointer hits and keyboard focus, not just root overflow. Avoid separate offsets for every page.

## Remaining consistency improvements

### F05 — P2: Profile view switches have no visible selected state, and toolbars wrap poorly

**Measured:** profile Covers/List buttons expose different `aria-pressed` values but have identical idle background, border and font-weight styling. Sighted users cannot identify the selected mode from the switch. Catalogue uses visibly different segmented controls and calls the equivalent mode **Compact**, while profiles call it **Covers**.

At 390 px the shared profile toolbar is **186 px high**: Search label/input, Search button and Sort label, select, then view buttons spread across several lines.

**Acceptance:** reuse one view-switch convention with a visible selected state; choose one user-facing name for cover browsing. Group each label with its field, keep Search with its input, and deliberately arrange sort/view controls on mobile. Preserve comfortable targets.

### F06 — P2: The glossary is still inconsistent across secondary surfaces

**Observed/source:**

- Review says **Publication / periodical**; catalogue filters, Quick view and bulk-edit options still say **Series / periodical** for the same `publication` field. The desktop action says **Apply series**.
- Book details labels that field **Publication**, alongside the separate canonical Series assignment.
- Possible duplicates still says **Library root / All library roots**, while normal setup/browsing uses **Shelf**.

This preserves some of the conceptual confusion the overhaul was intended to remove.

**Acceptance:** apply one glossary across editor, filters, drawer, review, bulk preview and settings. Distinguish the publication field from canonical Series; do not silently remap data while fixing labels. Use technical root terminology in diagnostics where needed.

### F07 — P2: Language cleanup requires code syntax that the book editor hides

**Observed:** book details provides language-name/code suggestions and chips. Review source languages instead asks for **“language codes, separated by semicolons”**, with a plain `en; de` input.

The bulk scope and explicit “Save mapping and apply next 100 books” action are useful and should remain. The value-entry mechanism needlessly requires different knowledge for the same language choice.

**Source:** `templates/language-review.php`.

**Acceptance:** reuse a controlled language picker with multiple selections and canonical codes, retain affected counts and explicit bulk application. Ambiguous source values must still require a deliberate decision.

### F08 — P2: Typography and page framing still have outliers

**Measured/observed:**

- Catalogue titles are now 14 px and authors 13 px, but date/publication context remains **8.7 px**.
- Review uses a 27 px page heading and 24 px book-result headings; most browse pages use a 24 px page heading and smaller item labels.
- Genres adds a bordered outer panel around the shared directory; Authors/Series do not.
- Maintenance pages use a separate mobile **Library navigation** disclosure and content gutter, while normal pages use the Nextcloud navigation toggle.

These are design consistency gaps rather than failed navigation in the tested states.

**Acceptance:** finish applying the shared type scale, page frame and nesting rules. Keep secondary information readable, make results subordinate to the page title, and align maintenance navigation with the established pattern while preserving all destinations.

## What should remain

- Compact Authors → Series → Genres rows and direct entity selection.
- One explicit book Save/Discard bar, with drafts protected.
- Bottom Metadata status → Imported metadata and scan suggestions → File metadata disclosures.
- Cover/title → Details; explicit Open → reader in a new tab; clearly linked entity names and Files location.
- Applied/draft search distinction in directories, bounded previews and normal Back position/focus restoration.
- Contextual help on labels; visible essential errors and action consequences.

## Recommended finishing pass

1. Fix F01–F04 and extend regression journeys to the exact reproduced transitions.
2. Consolidate the remaining toolbar, glossary, language input and visual tokens (F05–F08).
3. Repeat installed screenshots plus failure/keyboard/Back checks; then perform owner acceptance and the separately tracked release gates.

No application code or deployment changed during this review.
