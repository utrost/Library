# Extracting metadata from filenames and folders

Library can preview metadata suggested by your folder and filename conventions. Open **Extract metadata** in the left menu.

**Current scope (alpha.18):** teach a rule with a loaded sample, then optionally analyse the entire indexed folder in the background. Explicitly select supported fields from a result page, review confirmed changes, then apply them to the Library catalogue. Source documents are never renamed, moved or rewritten; no OPF/JSON sidecars or scans are started. Saving a rule or pattern does not apply it to your books. Authors can be applied as ordered names and browsed individually. Existing catalogue records migrate in bounded background batches.

## Quick start

1. Choose a **Library root**, optionally enter a relative subfolder, and choose whether to include subfolders. Load the sample. Only already-indexed, currently accessible publications are shown, up to 40 per page.
2. Choose an **Example path**. The sticky live preview follows that record.
3. Choose **Guided assignments** to label and split parts, or **Advanced pattern** to use/edit a template.
4. Inspect the proposed fields and their current values. Choose other records to see whether the same rule works for them. Use the result filter and page controls to review the rest of the sample.
5. In **Review and apply metadata**, choose **Select empty fields** or expand books and select fields individually. Existing values are never selected automatically.
6. Choose **Review selected changes**, inspect the server-confirmed Before/After list, then **Apply reviewed changes**.
7. Open **Recent metadata batches** after reloading to inspect a saved review or undo an applied batch.

Hover over a label or focus/tap its **?** button for help. Escape dismisses help. Errors and unmatched results stay visible.

## Suggested assignments (alpha.29)

Choose an **Example path**, then select a suggestion under **Suggest fields**. The live preview updates immediately and the detailed editor collapses. Open **Edit pattern** to adjust assignments, split authors explicitly, or save the generated rule under **Rule name**. Generated suggestions use the same saved guided-rule format as manual assignments; they work with the existing per-book field selection, reviewed Apply, Undo and whole-folder analysis.

The fixed detectors look for a trailing year in parentheses (1800–2099), a possible bare trailing year, `Title by Author`, `Title - Author`, a corroborated `Author - Title`, a `Surname, Given name` author folder, series numbers and recognized language/genre folders. A repeated author name in a folder provides extra supporting evidence. `english_science_fiction` can propose language `en` and genre `science fiction`. A comma name remains one author; multiple comma-separated names are not split automatically.

These are suggestions of naming conventions. A number alone, such as `1984.epub`, remains a title. Bare trailing years, possible author names and numbered series folders carry visible cautions. **Title from filename** is always available as a conservative alternative. The match count covers at most the current 40-book page and measures compatible structure, not metadata accuracy. Other books can have a different convention even when their separators match. Selecting a different example does not silently replace the active rule; select a suggestion again to change it.

Detection runs locally on bounded paths and never starts a scan, writes metadata or saves a rule automatically. Review still lets you select an individual book or field, and existing values require explicit selection. General rule matching retains its usual validation; the year detector's 1800–2099 range is a clue used to create a rule, not a permanent restriction on that saved rule.

## Guided assignments

Each folder and the filename (without its extension) is a part. Assign a metadata field or **Ignore this part**.

**Split this part** divides it at a literal separator. Choose the first, last or every occurrence. Parts can be split further, up to six levels. If another record has a different folder depth or number of pieces, it is marked unmatched rather than silently changing your rule. **Reset assignments from this example** starts a new set of assignments for a different structure; it discards the previous guided draft.

### Folder containing language and genre

For `english_science_fiction/Book.epub`:

1. Split the folder at the **first** `_`.
2. Assign `english` to **Language**. The preview normalizes it to `en`.
3. Assign `science_fiction` to **Genre**.
4. Under **Transform this value**, enable underscore replacement. Optionally map the exact value `science fiction` to `Science fiction`.

Splitting at every underscore would create three parts, which is usually wrong for this convention.

### Folder containing author and series

For `Sanderson - mistborn series/Book.epub`, split at ` - `, assign the pieces to **Creators** and **Series / periodical**, then remove the literal suffix ` series` from the series value. The result is `Sanderson` and `mistborn`; Library does not invent an author's first name.

### Transformations

Transformations run in this order: trim surrounding whitespace; remove required literal prefix and suffix; replace underscores if enabled; trim again; apply an exact value mapping; normalize language; split and optionally format authors. A required prefix or suffix that is absent makes the record unmatched. Empty or invalid resulting values are flagged rather than applied.

## Multiple authors

An Author/Creators assignment preserves the captured name by default. Choose **Separate authors by**: none, semicolon, `&`, the English word `and` surrounded by spaces, or a custom literal separator. Each resulting author appears as a chip.

- `Abercrombie, Joe` remains one name. Commas do not automatically split names.
- `Gaiman, Neil; Pratchett, Terry` with the semicolon separator becomes two people.
- Opt into **Convert Surname, Given name to Given name Surname** to get `Neil Gaiman` and `Terry Pratchett`. The conversion requires exactly two nonempty comma-separated name parts.
- Enable **Combine authors from multiple parts** when different folders/filename pieces contain different authors. Order is preserved and exact duplicates are removed. Without this option, differing repeated Author assignments are ambiguous.

Approved names are stored individually. Catalogue suggestions, author chips in the details drawer and creator pages support browsing each person.

## Advanced patterns

Choose any entry in **Pattern** to immediately load it into the preview. Supplied and personal patterns appear together. Editing the text changes the preview immediately; the selector shows **Custom pattern** when no stored definition matches. Guided transformations are separate and are not encoded in advanced pattern text.

Patterns match the **entire path relative to the selected scope**, with no leading slash. Separators, spaces, capitalization and fixed folder names must match literally. No regular expressions are executed.

| Placeholder | Meaning |
| --- | --- |
| `%title%`, `%subtitle%` | Book title and subtitle |
| `%author%` | Creator text; advanced patterns do not split author names |
| `%series%` | Book series name, separate from the legacy Publication field |
| `%seriesNumber%` | Part in series, preserving `01`, `2.5`, `IV` and other labels |
| `%language%` | Language code; common names such as English and German normalize to `en` and `de` |
| `%subject%` | Subject text |
| `%genre%` | Separate genre label, such as Science fiction |
| `%year%` | Four-digit publication year |
| `%publisher%` | Publisher |
| `%folder%/` | Ignore exactly one folder |
| `%folders%/` | Ignore zero or more folders |
| `%ignore%` | Capture a nonempty piece without assigning metadata |
| `%extension%` | File extension without its dot |

Repeated metadata placeholders must capture the same value; otherwise the advanced pattern is ambiguous. Adjacent placeholders require a literal separator. A pattern is limited to 1,000 characters and 16 placeholders.

### Examples

| Path | Pattern |
| --- | --- |
| `A Magic Deep and Drowning by Hester Fox.epub` | `%title% by %author%.%extension%` |
| `Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub` | `%folder%/%title% - %author% (%year%).%extension%` |
| `Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub` | `%folder%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%` |
| `Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub` | `%series%/%seriesNumber%_%title%_%author%.%extension%` |

For the path:

```text
books/english_fiction/20 Little People/Little People - 20 Little People (2011).epub
```

use:

```text
books/%language%_%subject%/%folder%/%title% (%year%).%extension%
```

This gives language `en`, subject `fiction`, title `Little People - 20 Little People`, year `2011`. If you scope the sample inside `books/english_fiction`, those two folders disappear from the relative path: change the pattern accordingly.

## Folder rules for mixed conventions

Use **Rule editor → Folder rules** to combine saved definitions across a Library root.

1. Create and save a guided rule or advanced pattern using paths relative to the folder it should govern. To use a supplied pattern, save it with a name first.
2. Choose the root and subfolder in step 1, then **Load sample**. The **Assignment folder** shows the actual loaded folder; `/` means the Library root. A changed folder input must be loaded before assigning.
3. Select **Saved rule or pattern**, choose whether to **Use in subfolders**, and click **Assign to this folder**.
4. Load the whole root or another subfolder. The live preview and sample results evaluate all applicable assignments. **Rule evaluation** shows the rules tried, their folders and outcomes; each proposed field identifies its matching rule.

For example, assign a general filename-title pattern at the root, an `Author - Title` pattern to `01 Author - Title`, and a guided series/number/title/author rule to `04 Series`. The root preview then handles all three conventions together. The teaching sample remains limited to 40 indexed records per page. Use **Analyse whole folder** for complete indexed-folder analysis.

### Matching and conflicts

- Paths are interpreted relative to each assignment's folder, even when you preview a higher or lower folder.
- The deepest folder with a successful rule match takes precedence for that record. An unmatched or invalid rule can fall back to a matching ancestor; an ambiguous interpretation stops fallback and remains visible.
- Rules at the same depth are combined: equal field proposals retain all their sources, and different fields are kept. Different values for the same field appear under **Conflicting rules**, with no single proposed value for that field. Other uncontested fields remain visible. Ancestor values are not merged into a successful deeper match.
- Turning off **Use in subfolders** restricts the assignment to files directly in that folder. Folder names match at boundaries: a rule for `Fiction` does not govern `Fictional`.
- Folder identity and read access are checked again when assignments load. A replaced, missing or inaccessible folder cannot contribute a rule to the preview. Source files are independently checked when samples load.

### Managing assignments

**Rules for this root** lists assignments in folder order, independently of the selected sample folder. **Remove assignment** requires confirmation. Reload the rules to pick up changes made in another browser tab.

Each assignment stores a fixed copy of the saved definition. Editing a draft, saving another version or deleting the original definition does not alter that copy. To replace it, assign the new saved definition, review the result and remove the old assignment. Temporary conflicts between two versions remain visible. Deleting a Library root removes its assignments but keeps reusable saved definitions. Removing an assignment does not delete the definition or modify books.

Assignments are private and limited to 100 per account, separately from the 100-definition limit. They generate previews only: they do not activate automatic inference during scans, change metadata, create sidecars or move files.

## Saving and deleting rules and patterns

Enter **Pattern name**, then **Save current pattern as new**. It saves the current advanced pattern to your Nextcloud account, available on other devices after sign-in. Names must be distinct. You can save up to 100 personal rules and patterns combined, each with a name up to 120 characters.

Loading and editing an existing pattern does not overwrite it. Save under another name to keep the revision, then delete the obsolete version if needed.

Select a pattern, choose **Delete pattern**, and confirm. Personal patterns are removed; deleting a supplied pattern hides it for your account. Other users and your books are unaffected. The active text remains in the preview. Supplied patterns currently have no dedicated restore button; save a copy of the active text before leaving if you want to retain it.

**Guided assignments:** enter **Rule name**, then **Save current rule as new**. This saves every assignment, nested split (separator and occurrence), transformation, author separator, name-formatting option and the combine-authors setting. Select **Saved rule** to restore it immediately and refresh the live preview. Editing creates a draft; save under a new name to keep changes. **Delete rule** requires confirmation and leaves the current draft intact.

Folder scope and the selected example are never saved or changed when loading a reusable definition. Folder assignments store scope separately, as described above. Choose a suitable example before loading; a different folder depth is flagged as unmatched. Unsaved drafts are discarded on page reload. Saved definitions are private to your account, shared across devices, and appear in the selector for their editor mode.

## Understanding the preview

| Result | Meaning / next action |
| --- | --- |
| Empty field suggestions | Extracted values would fill currently empty fields. Nothing is written. |
| Existing values need review | A proposal differs from current metadata. Compare both values. |
| No changes | The extracted value already matches. |
| Unmatched paths | Folder depth, literal text, separator count or required affixes do not match. |
| Ambiguous matches | More than one interpretation is possible, or repeated fields disagree. Use a more specific rule. |
| Invalid pattern or value | Unsupported placeholder, missing separator, invalid language/year or invalid transformation. |

A title such as `A - B - C` is ambiguous with `%title% - %author%`. Use guided splitting at the first or last delimiter if that convention is known. Promotional wording and vague titles such as `A Novel` are not automatically removed or repaired. Mixed conventions normally need several patterns and narrower folder scopes.

**Series, part in series and genre have dedicated catalogue storage in alpha.15.** You can edit them in the publication sidebar or maintenance form and export/import them through corrected-metadata JSON. The live preview compares against these stored values. Alpha.16 can apply explicitly reviewed suggestions. Series and genre allow 255 characters; part in series allows 64. Rescans retain manually edited values, including explicitly cleared values. Existing Publication values are preserved; they are not automatically copied into Series. Dedicated filtering, automatic embedded-series/genre import and numerical series sorting remain future work. Full-folder background analysis is available in alpha.18; sidecar writing and filing remain future work. Sample counts are not whole-library totals, and alphabetical samples are not representative of every convention.

## Review, Apply and Undo

Apply supports title, subtitle, authors, series, part in series, genre, language, publisher, subject and year. A subject capture becomes one subject label; it does not guess delimiters. A year capture replaces the publication-date field with that year: the server review shows the complete existing date before you confirm. Language region codes normalize to forms such as `en-US`.

Selections cover only the currently loaded sample, at most 40 books. Invalid, ambiguous and unmatched records cannot be selected. The result filter above is a viewing aid; the Apply section lists all eligible records from the loaded sample. No replacement checkbox is selected by default. **Select empty fields** selects empty fields across that sample and clears replacement selections. Changes to rules, the loaded sample or field selections invalidate the displayed approval.

**Review selected changes** stores a fixed server-side review, valid for 30 minutes. Saving this review does not modify metadata. Its confirmed Before/After values are the exact values used by Apply, independent of later rule edits. An unused review can be discarded. A saved review can be reopened from **Recent metadata batches** after reload; drafts and unsubmitted selections remain temporary.

Apply rechecks ownership, current file identity/path/content markers and read access, and compares a metadata snapshot under a database lock. A stale or unavailable book blocks the whole batch; there are no partially applied batches. Changes and derived search/facet indexes commit together. Retrying the same Apply request is safe. Source files are not written. Accepted values use the same item-level rescan protection as manual edits; no rescan is needed to make them searchable where existing catalogue indexes support the field.

Applied batches offer **Undo this batch** and a confirmation, for seven days. Undo restores the selected values and previous provenance/protection state. It refuses if any publication metadata or scanner provenance in an affected record has changed since Apply, or if a file moved, changed or became inaccessible. This deliberately conservative check also blocks undo after an unrelated metadata edit in the same book. Stars, reading state and ratings are outside the metadata snapshot and are preserved. Undo is not a file-operation rollback.

History is private and capped at 100 unexpired batches per account. Unapplied reviews expire after 30 minutes; applied/undone history expires after seven days from its last transition. Expired rows are removed on history/review requests and in bounded runs of the registered maintenance job. Each prepared batch is limited to 256 KiB, including provenance and snapshots; unusually large selections may need smaller batches. Whole-folder analysis jobs only produce suggestions. Saving rules and scanning files never automatically apply inferred metadata.

## Apply and browse individual authors (alpha.17)

Assign a path part to **Author**, then choose **Separate authors by** only when that part uses a known separator. **None** remains the default. `Abercrombie, Joe` stays one name; `Abercrombie, Joe & Elizabeth Bear` produces two chips when `&` is selected. Combining author parts preserves their order and removes exact duplicates. Name formatting stays unchanged unless you explicitly choose conversion. Advanced `%author%` captures one name; use guided assignments for author splitting.

Select **Creators** in step 4, review the names, and apply. The server receives an ordered array, so punctuation within a name is preserved. Apply and Undo update creator text, ordered names, provenance and browsing indexes together. Authors are limited to 32 names, 255 Unicode characters per name and 1,024 characters in their combined display.

In a book's details drawer, click an author chip to open that person's catalogue page. Creator suggestions and counts use individual names. Existing saved filters containing a complete creator string continue to match that string.

The Maintenance creator editor uses one chip per person and preserves commas and semicolons inside each chip. Bulk creator edits retain the existing explicit semicolon convention. JSON exports include `authors`; imports preserve their order and punctuation. Omitted author data stays unchanged. Scanner resets restore the structured names from EPUB/OPF candidates.

New scans retain separate EPUB/OPF creator entries. Existing books migrate gradually through Nextcloud background jobs, at most 200 per run. Trusted untouched EPUB/OPF/ComicInfo imports use their known semicolon convention; unknown or manually edited legacy text stays one name for review. Backfill preserves original creator text and provenance.

Expired review history is removed by the registered maintenance job, at most 500 rows per run, scheduled every five minutes through Nextcloud's configured background runner. Expired approvals are rejected immediately even if cleanup is delayed. Deleting a Nextcloud account removes its Library records, private list notes, preferences and queued scans.


## Analyse the whole folder (alpha.18)

1. Load a root/subfolder and check the selected-record live preview. Choose guided assignments, an advanced pattern, or saved folder rules.
2. Open **5. Analyse the whole folder** and select **Analyse whole folder**. The server saves the current rule definition, folder identity and include-subfolders choice. Editing the rule later does not change an existing analysis.
3. Watch the progress or leave the page. Nextcloud's configured background runner continues the analysis. While this page is open, bounded requests also advance the job so you need not wait for cron. **Cancel analysis** stops further work; already-produced results remain available and no metadata has been written.
4. Select the job under **Saved analyses** to reopen it. Filter empty-field suggestions, existing-value conflicts, ambiguous/unmatched/invalid paths, unchanged records or initially unavailable books. Summary counts describe the analysis snapshot. A book changed since analysis is disabled on its displayed page; start a fresh analysis for its new values.
5. Review one page at a time, up to 40 books. **Select empty fields** selects only empty fields on that page. Select replacements individually, choose **Review selected changes**, inspect Before/After, and select **Apply reviewed changes**. Each page approval is a separate atomic batch. Use **Next page** to reach further books; selecting a field never selects it on other pages.
6. **Recent metadata batches** retains conditional Undo even after the analysis is discarded. Discarding an analysis removes its suggestions, not applied metadata or approval history.

Analysis uses only already-indexed publications. It freezes the highest item ID at startup, so books added later require another analysis. Deleted/moved/inaccessible books are skipped or marked unavailable. The initial count can therefore exceed the processed count when the scope changes during a run. Deeper folder assignments keep their precedence and fixed definitions; ambiguous rules never become selectable proposals. The server checks live folder/file identity and permissions, and Apply rechecks the full metadata revision.

An analysis is retained for seven days. At most five unexpired analyses can be saved per account. Choose smaller subfolders if a scope exceeds 100,000 indexed books, 512 KiB of saved rule definitions, 64 KiB for one result or 64 MiB of total result storage. A stopped/limited analysis visibly reports partial results; it is never presented as complete. Expired analyses cannot be reopened and are removed in bounded maintenance runs. Account deletion clears analysis data and queued workers.

The background runner must be configured by the Nextcloud administrator, as for scans. Analysis does not scan source contents, create sidecars, move files or apply metadata automatically. Runtime for a large mixed library has not been measured; alpha.18 was verified with 83 temporary EPUBs on developer Nextcloud 34.0.3/MariaDB. See the [test evidence](compatibility-evidence/2026-09-26-whole-folder-alpha18/README.md).
