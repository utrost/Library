# Reader Handoff Spike

## Question

Given a Nextcloud file ID for an EPUB, PDF or CBZ file, how can Library open that file in the best available viewer/reader without coupling to private implementation details of another app?

## Why this comes first

Library should organize publications, not become an EPUB/PDF/comic renderer. If clean handoff works, v0.1 can stay small. If it does not, the app needs an explicit fallback ladder before scanner and UI work expand.

## Spike acceptance criteria

- Installable `library` app is enabled on Alice Nextcloud.
- A simple Library page can be opened from Nextcloud navigation.
- A test PDF in Nextcloud Files can be selected by file id or path during the spike.
- Library can generate a safe open/show link for that file.
- The link either opens in a compatible viewer or falls back to Files/download without breaking the catalogue boundary.

## Candidate mechanisms to investigate

1. Nextcloud default file open route.
2. Viewer app route/capability if public enough.
3. Files app route with path/fileid parameters.
4. Direct download URL as final fallback.

## Non-goals

- No custom PDF/EPUB/CBZ rendering.
- No reading progress API.
- No bookmarks or annotations.
- No private-reader coupling outside a small provider class if no public mechanism exists.

## Output

Record findings as:

- mechanism tried;
- URL/action generated;
- required permissions;
- supported formats;
- coupling risk;
- recommendation for v0.1.
