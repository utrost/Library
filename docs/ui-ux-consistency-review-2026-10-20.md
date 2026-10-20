# UI/UX consistency review — 20 October 2026

## Verdict

Library has useful individual workflows, but it does not yet present a consistent interface across those workflows. Book details and the entity directories have improved considerably; Home, catalogue controls, profile editors, maintenance forms and import previews still follow different conventions.

This needs a shared set of interface components and interaction rules, rather than another independent redesign of each page. Fix the observed defects first, then align the page frame, controls and terminology.

**Review baseline:** developer NC34, installed `0.3.0-alpha.31`; source checkout `2d1972b`. This is a review, not a deployment or accessibility certification.

## Scope and evidence

The review combined source inspection, live Chromium screenshots and focused interactions. The broad pass covered 29 screen configurations at desktop 1440 × 1000 and mobile 390 × 844, including light/dark styling, plus scrolled states. Additional passes covered maintenance pages, open menus, draft navigation, deletion cancellation, a 320 px details layout and an isolated new account.

There were 102 successful broad-pass captures. Nine initial maintenance-page captures failed because of the harness's CSRF/header or readiness handling; the language, mapping and administration pages were subsequently captured successfully with HTTP 200. These harness failures are **not product findings**. Three focused selectors also failed: author reassignment, advanced inference mode selection and opening the mobile filter panel. Recommendations about those unexercised states are based on source inspection, not a claimed successful interaction.

The real account was used for reading, staging/discarding drafts and cancelling dialogs. Library mutation requests were blocked except the normal duplicate-suggestion lookup. Separate disposable accounts exercised onboarding, scanning a synthetic file, creating a collection, and import/batch previews. No bulk Apply or book deletion was executed. The final real-account catalogue count was **107,717**, unchanged; review accounts and temporary credentials were removed.

Measurements and coverage are retained in [the evidence summary](compatibility-evidence/2026-10-20-nc34-ui-review/summary.json). Raw screenshots and browser reports remain local under `/tmp/library-ui-review-b6YfdJ`, `/tmp/library-ui-interactions-vzZNnx`, `/tmp/library-ui-interactions-5MsPsf`, `/tmp/library-ui-empty-641QKn` and `/tmp/library-ui-empty-3oDB55`. They contain private catalogue content and are not committed.

### Screen and journey coverage

| Area | Live coverage | Limits |
| --- | --- | --- |
| Home, Shelves | Populated and empty states; desktop/mobile; settled Home covers | Shelf configuration changes only in disposable account |
| All publications | Cover/list views, matching and empty search, selected-book toolbar, drawer and Escape | No new search-performance benchmark |
| Favorites, Continue reading, Collections | Browse states; isolated saved collection | No real-account collection changes |
| Authors, Series, Genres | Directories, previews, author/series profiles; series reassignment form | No merge, rename, removal or reconciliation committed |
| Author/list editors | Stage draft and follow Back; list deletion Cancel | Series draft protection inspected in source |
| Lists | Directory, creation form, populated list, unavailable entries, edit and cancel | Reordering and notes not saved in real lists |
| Book details | Author/language menus, staged title, Discard, deletion dialog Cancel, narrow sticky actions, bottom disclosures | Save/stale-rejection and actual deletion not repeated in this UX review |
| Review | Suggestions, missing details, file problems, cover problems, author conflicts | Acceptance/ignore/apply states inspected in source |
| Possible duplicates | Empty/populated landing, controls and source review of decisions | No full duplicate scan or decision committed |
| Extract metadata | Empty/populated landing, customization opening, scrolled preview; pattern/folder-rule source | Advanced mode interaction incomplete in harness |
| Language/publisher/subject cleanup | Desktop/mobile maintenance forms, source inspection | No mapping applied to existing books |
| Personal/admin settings | Desktop/mobile, scan summary, first-library state, disclosures | No production schedule, root or destructive setting changes |
| Import/export and batch tools | Invalid import preview and single-field batch preview using disposable data | Valid import Apply, downloads and batch writes not re-executed |
| Reader and Files handoff | Link destinations and navigation source reviewed | External reader UI and file restoration not retested |

This covers the main screen families, not every combination of permissions, failures, locales, browser engines or assistive technologies. Dark-theme inspection is visual; it is not a full contrast audit. Root-width measurements found no horizontal document overflow in the successful broad captures, but that does not prove every menu or focus target is unobscured.

## Findings

Priorities: **P1** = visible defect, potential loss of work, or major task obstruction; **P2** = important consistency/usability work; **P3** = polish. Suggested acceptance criteria describe future implementation, not tests already passed.

### UX01 — P1: Home covers are loaded but invisible

**Observed:** all ten sampled Home images had `complete = true`, a positive natural width and computed `opacity: 0`. The same books have visible covers elsewhere.

**Cause:** Home in `src/App.vue` renders raw `.library-cover-image` elements. Shared CSS hides this class until `.library-cover-image--loaded` is present. `CatalogueCover.vue` adds that state; Home does not.

**Change:** reuse `CatalogueCover` for Home and any remaining equivalent cover views. Preserve lazy loading, error placeholders and reserved dimensions.

**Acceptance:** loaded Home covers are visible; failed images show an understandable placeholder; loading, success and failure work in both themes without layout jumps.

### UX02 — P1: Leaving profile/list editors silently loses drafts

**Observed:** after changing an author's displayed name and following “All authors,” the editor closed without a warning. The same happened after changing a list name and following “All lists.” No save request was submitted. Book details has explicit dirty-state protection; source inspection found no equivalent protection in the series editor.

**Change:** share draft tracking, navigation protection and Save/Discard actions across book, author, series and list forms. Distinguish intentional Discard from navigation away.

**Acceptance:** internal Back, browser Back/reload and other navigation protect changed drafts; unchanged forms do not prompt. Cancelling a navigation warning preserves the draft and focus.

### UX03 — P1: Import failure loses the application layout

**Observed:** submitting invalid JSON in the disposable account produced a page directly on the Nextcloud wallpaper, without the normal content surface/navigation, displaying `invalid_json` as the explanation. This is a rendered product state, not a failed browser test.

**Source:** `ImportController.php`, `templates/metadata-import-result.php`. The template also lists changed field names without showing their individual before/after values.

**Change:** render preview/result/error states in the shared page frame. Explain invalid input in ordinary language, retain the submitted input, and offer a clear return action. Use a common change preview showing current and proposed values for valid imports.

**Acceptance:** malformed, empty, valid and partially invalid imports have the same layout; errors identify the next corrective action; users can inspect values before Apply.

### UX04 — P1: Catalogue controls obscure the primary task

**Observed:** collection naming/saving dominates the catalogue header while content search is in the sidebar, or inside Filters on mobile. In the 390 × 844 capture the first cover begins around **525 px** down the screen. Count, paging, collection controls, sorting, view switches and an explanatory duplicate-suggestion paragraph all precede the books. This also appears in an empty library.

**Change:** show content search directly above the results at every width. Group Sort, Filters and View in one compact toolbar. Make “Save this search” a secondary action that reveals the collection-name field. Show selection tools only when needed. Replace generic warning paragraphs with contextual status/help.

**Acceptance:** a new user can search without opening navigation; a normal mobile catalogue exposes books within the first screen; collection creation remains easy to discover; empty states hide irrelevant result controls. Keep the existing slash shortcut and active-filter chips.

### UX05 — P2: Page hierarchy and alignment vary substantially

**Measured:** Home and Shelves place the page title on the right; catalogue/directories place it on the left. At the same desktop viewport, Authors starts around y142 and Series around y106. Authors uses 24 px semibold while Series uses 24 px normal. The book title in Details is a 15 px normal H1, below a 27 px bold section heading in visual prominence. Some desktop catalogue title text measures only 9.9 px.

**Change:** introduce a common page header, leading alignment, content gutters and heading scale. Make the book title a true visual title. Retain small labels for compact Authors/Series/Genres rows: those are intentionally subordinate.

**Acceptance:** equivalent screens share title position, size and toolbar spacing; long titles wrap; normal book-identifying text is readable without zoom. Use approximately 24 px titles, 20 px section headings, 15 px body and 13 px supplementary text as a starting point, adapting to Nextcloud.

### UX06 — P2: Entity selection is still several different interactions

**Observed/source:** author reassignment and book assignments use typeahead; series-profile reassignment still uses Search followed by a select field. Publisher uses a native datalist, subjects/languages another picker, and genres another search/creation flow. Genre creation can appear while a query is still being resolved. Some lookup failures are swallowed, making failure resemble “no matches.”

**Change:** share an entity/value picker with explicit waiting, loading, matches, empty and error states. Reuse the three-character threshold for author/series/genre search. Language codes need their own valid short-input rules. Offer creation only when a completed lookup permits it; a request failure must never imply that no entity exists.

**Acceptance:** keyboard and mouse selection behave consistently; stale responses cannot replace newer results; Retry is available on failure; users cannot accidentally create duplicates while lookup is pending. Different backend models do not require different-looking controls.

### UX07 — P2: Cover clicks and text links make different promises

**Observed/source:** catalogue and Home cover/title clicks open a drawer; directory book previews open the full editor. Series-profile covers and list covers do not consistently share their title link's behavior. “Open” launches the reader separately.

**Change:** define and apply one contract: book cover/title opens book details; an explicit Quick view control opens a drawer if retained; Open launches the reader in a new tab. Entity names navigate to their pages; file location opens Files. Use consistent link styling and visible keyboard focus.

**Acceptance:** the same book control has the same destination across Home, catalogue, lists, directories and profiles. Returning restores the originating search, page and sorting. Verify drawer focus returns to its actual trigger; the current audit did not establish that reliably.

### UX08 — P2: The same setting has two save models

**Observed/source:** automatic duplicate suggestions uses an immediately persisted checkbox in `DuplicateSuggestionSettings.vue`, but a switch plus Save in personal settings.

**Change:** share the setting component and its persistence feedback. More generally, visibly distinguish immediate actions such as Favorite from staged metadata forms. Do not make users infer whether a nearby Save button applies.

**Acceptance:** changing the same preference behaves identically wherever exposed; saving/failure feedback is accessible; errors restore or clearly flag the unsaved state.

### UX09 — P2: Removal and deletion conventions differ

**Observed/source:** book deletion has a detailed modal; list deletion uses inline confirmation; collection deletion is an immediate × action; removing unused authors is another immediate action. These operations have different consequences, but the visual language does not consistently explain them.

**Change:** use Remove for detaching an item, Delete for deleting an object/file, and name the affected object. Prefer Undo for safely reversible removals; confirmation for irreversible or consequential loss. Share dialog focus/keyboard behavior. Keep book deletion's explicit file scope and partial-result reporting.

**Acceptance:** users can tell whether files, list membership or saved configuration will be affected before acting. Cancelling preserves edits. Avoid adding confirmation dialogs to every harmless toggle.

### UX10 — P2: Cleanup workflows expose implementation concepts

**Observed/source:** Review, author conflicts, series conflicts, genre suggestions, language mappings and publisher/subject mappings have different layouts and actions: Accept/map, Ignore, Keep assignment, Use imported, Apply approved and others. Some cleanup work is mixed into browsing pages.

**Change:** use a common review presentation: current value → proposed value, affected-book count, collapsed source explanation, Apply suggestion and Keep current/Skip with distinct meanings. Put bulk scope and confirmation in the same place. Keep discovery/progress separate from the decision itself.

**Acceptance:** users can explain what changes, how many books are affected, and whether the decision is saved immediately. Directory browsing does not require navigating through large cleanup forms.

### UX11 — P2: First-run settings prioritize secondary tasks

**Observed:** empty catalogue instructions say “Library root”; navigation says Shelves; settings use shelf/folder/root terminology. Personal settings puts duplicate suggestions and scheduling before the first shelf workflow.

**Change:** start empty libraries with Add a shelf → Choose folder → Scan → Browse. Show shelves/latest scan first in normal settings; place schedules, portability and diagnostics below. Use a small UI glossary: Shelf, Author, Favorite, Reading status, Saved search/Collection, Reading list.

**Acceptance:** a new user can index the first folder without understanding roots, reconciliation or duplicate indexing. Keep technical source terms in advanced diagnostics where useful. No API/database renaming is needed for this wording change.

### UX12 — P2: Maintenance and batch pages break the shared shell

**Observed/source:** server-rendered maintenance navigation omits some destinations present in the Vue navigation. Batch preview opens a separate tab with another header/card layout and repeated Back links. It does show useful current/new-value information, which should be preserved. Bulk-edit controls still expose source-style creators/series/genre fields rather than the current editor's assignment language.

**Change:** share navigation data, page-frame styling and preview/result components across rendering technologies. Align bulk fields with the canonical editing model, explicitly identifying any intentionally source-only operation.

**Acceptance:** equivalent destinations remain available; previews preserve return context; single-book and bulk edits do not use conflicting terminology or imply different metadata authority. This does not require rewriting all PHP pages in Vue.

### UX13 — P2: Help, focus and touch behavior are not uniform

**Source/visual:** `LabelHelp` supports hover, focus, tap and Escape, while `IdentityAction` uses a separate tooltip with `pointer-events: none`; other controls rely on native `title`. Generic accessible names of “Help” lack field context. Small help buttons are 20 px. That size alone is not enough to declare WCAG failure because spacing exceptions exist.

**Change:** use one accessible contextual-help primitive, named for its field. Supplemental help can stay on labels as requested. Essential errors, required steps and action consequences must remain visible. Use comfortable touch targets and persistent focus indicators. Keep tooltips dismissible and reachable by pointer when they contain necessary information.

**Acceptance:** keyboard/touch users get the same information as mouse users; tooltips do not cover the active control; focus remains visible with sticky actions and expanded menus. Aim for 44 px touch targets where practical; evaluate the WCAG 24 px minimum and spacing rules rather than applying a blanket size assertion.

### UX14 — P2: Extraction and status feedback need the same vocabulary

**Observed/source:** extraction combines selection, customization, sample review, analysis and application jobs. Search, scan, duplicate and apply screens use different loading/error/progress presentations.

**Change:** preserve live extraction preview, but keep the default path short: choose folder, inspect proposed fields, review scope, apply. Put advanced pattern/folder controls behind customization. Share loading, progress, empty, failure, partial-success and retry components.

**Acceptance:** loading never looks like zero matches; partial success never looks like total failure; an Apply action always names its scope. Details' compact mobile Save/Discard actions should stay reachable without consuming excessive editing space.

## Consistency contract

These are proposed implementation rules, not a declaration that current screens already satisfy them.

| Element | Shared rule |
| --- | --- |
| Page frame | One visually dominant title; leading alignment; common gutters/content width; related toolbar immediately below |
| Typography/spacing | Small shared token set; 4 px spacing increments; no arbitrary per-page heading sizes |
| Primary action | One main action per active task; secondary actions quiet; danger styling reserved for consequential deletion |
| Links/buttons | Links navigate; buttons act; cover/title behavior consistent; underlined text links and visible focus |
| Search | Debounced where appropriate; clear minimum length; loading, empty and error distinguished; stale-response protection |
| Entity pickers | Same selection/clear/create keyboard behavior; preserve ordered authors and existing canonical identities |
| Forms | Explicit Save/Discard and dirty navigation protection; immediate settings clearly identified |
| Disclosures | Same heading/chevron spacing, keyboard behavior and collapsed defaults for secondary diagnostics |
| Help | Supplemental hover/focus/tap help on labels; essential instructions/errors visible |
| Feedback | Inline field errors, persistent actionable failure, concise success; scoped progress and partial results |
| Mobile | Wrap controls; prioritize the task; no horizontal overflow or hidden focus; keep sticky actions compact |
| Themes/icons | Nextcloud semantic colors and a consistent icon set; avoid hardcoded foreground colors on theme-dependent surfaces |

Retain the compact Authors → Series → Genres panel, single book Save/Discard, canonical links, safe deletion preview, bounded directory previews and existing return-context handling.

## Recommended implementation order

1. **Correctness:** UX01 Home images, UX02 draft protection, UX03 import failure/preview.
2. **Shared structure:** page header, typography, navigation data and common form actions; apply to every screen family.
3. **Browsing:** visible catalogue search, compact toolbar, consistent book links/previews and first-run flow.
4. **Interactions:** shared pickers, setting persistence, contextual help, confirmations and feedback.
5. **Specialist workflows:** consistent review, extraction, import/batch and scan progress.

For each slice, update the human handbook and run representative desktop/mobile, light/dark, keyboard, empty, populated, long-text, loading and failure journeys. Use disposable data for writes. Acceptance should check behavior and layout bounds, not exact screenshot pixel matches.

This review did not rerun the release suite, measure database performance or certify NC33–35. Those remain separate engineering/release checks.

## Design references

Nextcloud's current design guidance supports consistent typography, spacing, semantic colors and reusable controls. The linked “latest” documentation describes the upcoming platform; use it as design guidance and verify component compatibility against supported Nextcloud versions. [Foundations](https://docs.nextcloud.com/server/latest/developer_manual/design/foundations.html), [Components](https://docs.nextcloud.com/server/latest/developer_manual/design/components.html).

Recurring functions should be identified consistently, while genuinely different functions may need different labels. [WCAG: Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html).

Keyboard interaction and selection semantics for suggestions should follow a coherent combobox pattern. [WAI-ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

Reflow, target size and hover/focus content require behavioral checks, not just screenshots. [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html).


## Implementation follow-through: alpha.32

All fourteen findings have implementation changes in the alpha.32 candidate. The original observations above describe alpha.31 and are retained as the before-state. Verification is recorded in the [alpha.32 evidence](compatibility-evidence/2026-10-20-nc34-ui-consistency-alpha32/README.md); these changes do not close the signed NC33–35 App Store or manual assistive-technology gates.

| Finding | Implemented change |
| --- | --- |
| UX01 | Home reuses CatalogueCover loading, success and fallback states. |
| UX02 | Author, series and list editors share dirty navigation/unload protection and Save/Discard actions. |
| UX03 | Import errors retain input in the maintenance shell; previews expose current/proposed values. |
| UX04 | Main search above results, compact toolbar, secondary saved-search disclosure, quieter status and selection controls. |
| UX05 | Shared page gutters, leading titles and type scale; readable card text. |
| UX06 | Shared series/publisher picker; aligned lookup loading/error/retry states in author, genre and subject controls; stale-response guards. |
| UX07 | Cover/title → full details; explicit Quick view → drawer; reader → new tab. |
| UX08 | Duplicate preference uses explicit Save in both locations; polling retains an unsaved choice. |
| UX09 | Shared scope-aware confirmation for saved collections, unused authors and list removal/deletion; book deletion retains its file preview. |
| UX10 | Current/proposed review pairs, explicit decisions, affected-book counts and collapsed genre cleanup. |
| UX11 | Shelf setup/scanning first, schedule collapsed below; Shelf/Author/Favorite/Reading status terminology. |
| UX12 | Maintenance navigation destinations aligned; batch/import share the content shell; bulk source fields explicitly labeled. Read-only maintenance entry routes and catalogue links corrected. |
| UX13 | Contextual help names, reachable tooltip content, visible focus and coarse-pointer touch sizing. |
| UX14 | Three-step extraction default and shared loading/error/retry messages; whole-folder analysis remains explicit. |

PHP and Vue retain their rendering technologies. Shared CSS contracts, equivalent navigation destinations and regression tests keep their user-facing behavior aligned. Publisher/subject grouping preserves source values; book-level author and series assignment remains canonical. No metadata save authority or schema changes are hidden in the visual changes.
