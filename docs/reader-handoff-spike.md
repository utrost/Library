# Reader Handoff Spike

## Question

Given a Nextcloud file ID for an EPUB, PDF or CBZ file, how can Library open that file in the best available viewer/reader without coupling to private implementation details of another app?

## Why this comes first

Library should organize publications, not become an EPUB/PDF/comic renderer. If clean handoff works, v0.1 can stay small. If it does not, the app needs an explicit fallback ladder before scanner and UI work expand.

## Alice spike fixture

A tiny PDF fixture was created inside Alice Nextcloud for user `uwe`:

- Nextcloud path: `/LibrarySpike/reader-handoff.pdf`
- filecache path: `files/LibrarySpike/reader-handoff.pdf`
- file ID: `82`
- format: PDF

## Mechanism tested: direct Nextcloud file route

The first stable-looking handoff mechanism is Nextcloud's short file route:

```text
/f/{fileId}
```

For the PDF fixture:

```text
/f/82
```

Authenticated smoke output showed that Nextcloud redirects this route to the Files app with the containing directory and open flag:

```text
HTTP 303
Location: /apps/files/files/82?dir=/LibrarySpike&openfile=true
```

Generic shape:

```text
/apps/files/files/{fileId}?dir=/LibrarySpike&openfile=true
```

This is promising because Library only needs the stable Nextcloud file ID. Nextcloud resolves the current path/directory and hands the file to the Files/Viewer stack.

## Bootstrap implementation

The current bootstrap page generates one temporary fixture link through a small reader-provider boundary:

```php
$this->readerProvider->getOpenUrl(self::READER_FIXTURE_FILE_ID)
```

The default provider is intentionally tiny:

```php
final class DefaultNextcloudFileProvider {
    public function getOpenUrl(int $fileId): string {
        return $this->urlGenerator->linkTo('', '/f/' . $fileId);
    }
}
```

This intentionally avoids coupling to the Viewer app's private routes. It also avoids implementing a Library-owned renderer.

## Candidate mechanisms

1. **`/f/{fileId}` short route — recommended first v0.1 default.**
   - Input: file ID.
   - Observed output: `303` to Files route with `openfile=true`.
   - Coupling risk: low; this is a general Nextcloud file route.

2. **Files app route.**
   - Observed target: `/apps/files/files/{fileId}?dir=...&openfile=true`.
   - Useful as diagnostic output, but Library should prefer `/f/{fileId}` so it does not need to calculate the current directory path.

3. **Viewer app route/capability.**
   - Not needed for the first handoff because `/f/{fileId}` delegates to Files/Viewer.
   - Revisit only if EPUB/CBZ reader apps require more specific handling.

4. **Direct download URL.**
   - Keep as final fallback later.

## Important implementation note

A first attempt at a Library-local redirect controller route (`/apps/library/reader/open/{fileId}`) matched in `occ router:match` but returned a Nextcloud 404 in HTTP smoke. That is not needed for the first spike and was removed. The simpler direct generated `/f/{fileId}` link worked and keeps the boundary cleaner.

## Spike acceptance status

- Installable `library` app is enabled on Alice Nextcloud: done.
- Simple Library page opens from Nextcloud navigation route: done.
- Test PDF exists in Nextcloud Files: done.
- Library page generates a safe open/show link for that file: done.
- Link hands off to Nextcloud Files/Viewer through `/f/{fileId}`: done.

## Recommendation for v0.1

Use `/f/{fileId}` as the first reader handoff mechanism for indexed files.

Later, model handoff as a provider abstraction, but make the default provider deliberately small:

```php
final class DefaultNextcloudFileProvider {
    public function getOpenUrl(int $fileId): string {
        return $urlGenerator->linkTo('', '/f/' . $fileId);
    }
}
```

Only add EPUB/comic-specific providers after testing actual reader apps and proving that `/f/{fileId}` is insufficient.
