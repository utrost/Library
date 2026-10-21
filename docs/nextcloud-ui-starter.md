# Nextcloud app UI starter: lessons from Library

Use this as an interaction and layout contract for a new app, then replace the Library nouns with the new product's language. It complements the [architecture and release checklist](nextcloud-app-guidelines.md). It is a starting point, not a component library or a claim that every current Library screen is perfect.

## Start with the user's job

Write one sentence: “The app helps **[person]** do **[job]** with **[Nextcloud object]**.” Choose the landing page and primary action from that sentence. Keep setup, diagnostics and repair nearby but secondary. A new user should reach the first useful result through one short path, with an empty state that names the next action.

Create a small glossary before building screens. Give each concept one user-facing name and use it in navigation, filters, detail fields, bulk actions, messages and documentation. Keep implementation terms in diagnostics. Library learned this through “root” versus “shelf”, “creator” versus “author”, and two meanings of “series”.

## Pick one app shell

Nextcloud's [layout guidance](https://docs.nextcloud.com/server/stable/developer_manual/design/layout.html) describes **navigation → content**, optionally with a details sidebar, and **navigation → list → content**. Pick the simpler shape that suits the job. Use the same shell and page frame for ordinary pages, settings and maintenance screens.

```text
Nextcloud header
┌──────────────┬───────────────────────────────────────────┐
│ Navigation   │ Page title                 page action     │
│              │ Search / sort / filters / view controls   │
│ Browse       │ Current scope + result count              │
│ Organize     │ Results / work area                        │
│ Review       │                                           │
│ Settings     │ Contextual details when needed            │
└──────────────┴───────────────────────────────────────────┘
```

- Keep equivalent page titles, toolbar tops, content gutters and heading sizes aligned. Use one page header component or template. Reserve room for Nextcloud's mobile navigation toggle so it cannot cover Back links or filters.
- Group sidebar destinations by user task. Use short labels, one active state and one primary creation action where useful. Put rare review and administration destinations lower down.
- Prefer a compact toolbar over a large search form. Search belongs beside the results; sort and view controls follow it. Active filters and the result count explain the current scope.
- On mobile, keep search and the first useful content within the first screen. Stack paired fields, let chips wrap, and avoid horizontal overflow. A sidebar should become navigation, not a second page occupying most of the viewport.
- Use one heading scale: page title above section title above row title above supporting text. Library's 24 / 20 / 15 / 13 px was a useful starting scale, subject to Nextcloud theme and accessibility review.
- Use Nextcloud Vue components where they fit and Nextcloud [theme variables](https://docs.nextcloud.com/server/stable/developer_manual/html_css_design/css.html) for surfaces, text, borders, status and focus. Check actual text/surface contrast in light, dark and high contrast themes; similarly named status variables are not interchangeable.

## Reusable page recipes

| Page | Default structure | Key behavior |
| --- | --- | --- |
| Home | One useful overview, a short “continue” or recent section, clear path to Browse | No duplicate full catalogue or setup dashboard. |
| Browse/list | Title → compact toolbar → applied scope/count → paged results | Search, sorting, pagination, empty/loading/error and selection use one vocabulary. |
| Directory | Search/sort toolbar → compact linked rows → bounded previews | Rows identify entities; previews open their objects; no request per row. |
| Entity profile | Name/summary → actions → sortable linked collection | Back returns to the directory's applied search, sort and page. |
| Object details/editor | Object identity and primary actions → editable fields → related entities → Save/Discard → collapsed technical metadata | One canonical editor from every entry point. |
| Review/bulk | Scope → current versus proposed → affected count → preview → apply/keep → outcome | Distinguish discovery from the user's decision. |
| Settings/jobs | First-run action first → current configuration → job progress/history → advanced diagnostics | Show real counts and phases; do not invent a percentage or ETA. |

Use cards when visual recognition matters; use compact rows when comparison and scanning matter. Do not surround every small group with another large bordered card. The [Nextcloud component guidance](https://docs.nextcloud.com/server/stable/developer_manual/design/components.html) distinguishes list items, buttons, chips and persistent status cards; use each for its intended role.

## Control contracts to share across the app

| Control | Contract |
| --- | --- |
| Link | Underline or otherwise visibly identify text links. Names open entity pages; object cover and title open object details; a separate **Open** action opens the associated file or external view. Keyboard focus is visible. |
| Search | State what is searched. Debounce remote search, show activity, cancel or ignore stale responses, distinguish “loading”, “no matches” and “failed; retry”. Keep typed draft separate from the applied query when results do not update immediately. |
| Entity picker | Type ahead directly in one field. For large name directories, search after three letters; use a different threshold for short codes. Show waiting, loading, matches, empty and error. Arrow keys, Enter and Escape mean the same thing everywhere. Offer **Create new** only after a completed no-match lookup. |
| Multiple values | Show selected values as individual, removable chips. Preserve order where it matters. Do not split a person's name on commas without an explicit convention. |
| Help | Put supplemental help on the field label, reachable by hover, focus and tap. Keep essential instructions, validation errors and destructive consequences visible. Name help by its field, not just “Help”. |
| Save | One explicit Save/Discard workflow per editor. A draft remains a draft until Save; Save covers related assignments too. Keep the action bar reachable on long pages. Immediate toggles must look and report differently from staged fields. |
| Destructive action | Say **Remove** for detaching and **Delete** for deleting an object or file. Preview the affected objects and consequences; confirm consequential loss, offer Undo for safely reversible changes, report partial outcomes accurately. Cancel preserves the draft. |
| Status | Use a shared loading/error/success pattern with accessible status text. A pending operation never looks like an empty result. A failed lookup never becomes permission to create a duplicate. |
| View switch | Use the same names and a visible selected state everywhere, with `aria-pressed` or equivalent. |
| Pagination | Preserve query, sort, filters and page. Restore the originating row/scroll anchor when returning from details. |

Favor standard Nextcloud controls, but wrap them in app-level components when they require shared behavior. Library references: [field help](../src/components/LabelHelp.vue), [entity picker](../src/components/EntityPicker.vue), [operation status](../src/components/OperationStatus.vue), [directory browser](../src/components/DirectoryBrowser.vue), [collection toolbar](../src/components/BookCollectionToolbar.vue), [form actions](../src/components/FormActions.vue), [detail return context](../src/details-return.js) and [delete dialog](../src/components/DeleteBook.vue). Copy their **contracts**, then review the implementation against the target Nextcloud version; these are not a drop-in design system.

## Navigation and state rules

1. Give every object one canonical details route. Old URLs may redirect there, preserving safe feedback and return context. Avoid maintaining a second editor with different save rules.
2. Encode the applied browsing context in a URL or a validated return token: view, filters, applied query, sort, page and origin. Keep unsubmitted input separate. Returning must reproduce the results the user actually saw.
3. Keep the browser Back button, in-app Back link and focus restoration coherent. Overlays return focus to their trigger after closing. Use a shared mobile header offset; visual non-overlap alone does not prove a link is hittable.
4. Give each action one clear scope: this item, selected items, current results or whole collection. Put the scope beside Apply, not hidden in help.
5. Put technical source/provenance/status data into bottom disclosures. Keep the editable model simple unless source data conflicts actually require review.

## Data and performance decisions that affect UX

- Decide which system owns each object and which fields may be edited. If an import refreshes source metadata, protect edited fields individually. If normalized entities exist, pick by stable ID and make search/display use the canonical name rather than an old free-text shadow.
- Ship owner-scoped routes, revision-aware saves and additive migrations from the first public release. These decisions become expensive after users have data.
- Design browse endpoints for the target collection size: indexed filters and sorts, stable ID tie-breakers, bounded pages, batch preview lookup, lazy cached thumbnails and no N+1 calls. A typeahead endpoint should stay lightweight; request preview objects only for the directory view.
- Make long jobs background work with durable status, real phase/counter/error data, cancellation checkpoints where possible and honest partial-result reporting. A progress bar needs a known denominator; otherwise show activity and processed counts.
- For user data, preserve Nextcloud permissions and canonical storage. Confirm exactly which files a destructive action can remove, and recheck identity/authorization when it runs.

## Starter screen and acceptance set

Build **one thin vertical journey** before expanding the app: first-run empty state → create/connect one object → browse/search it → open details → edit and Save/Discard → return to the same results. Add review, bulk operations and long jobs only when the product needs them.

For every screen, inspect these states: populated, empty, loading, error/retry, long text, narrow phone, keyboard-only, light/dark themes and a stale or concurrent edit. For every cross-page journey, check Back context and focus. For every list, measure query count and response size at realistic volume. For every release, smoke the **installed package**, not just the source checkout, and keep screenshots and human-test instructions aligned with the shipped UI.

## The mistakes that cost Library time

- Separate editors and legacy links produced conflicting mental models.
- Free-text shadows beside normalized authors/series made edits, search and import authority confusing.
- A Search button followed by a separate destination select added avoidable steps.
- Similar comboboxes gave Enter different meanings; error states sometimes looked like no matches.
- Large cards, repeated headings and always-visible help pushed useful content below the fold.
- Untested theme tokens made error text unreadable; mobile navigation overlapped Back links despite no page overflow.
- Returning from details sometimes applied an unsubmitted draft or lost the original row.
- UI screenshots and handbook steps aged when the product changed. Treat them as release artifacts.

The practical rule is: **define the interaction once, implement it once, and reuse it on every screen that makes the same promise.**
