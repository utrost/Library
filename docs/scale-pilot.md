# Scale pilot guide

Use generated documents to measure scan and catalogue behaviour without publishing real library files or paths. The reusable command is:

```bash
NC_URL=http://localhost:8088 NC_USER=example npm run smoke:scale -- 100
```

The harness creates a temporary root, indexes generated PDFs, checks pagination and cleans up its files, catalogue rows, root and temporary credential. Increase the count only on a disposable instance or with a deliberate test account.

For a private real-file pilot, supply explicit source paths through `REAL_SCALE_SOURCES` and keep all reports outside Git:

```bash
REAL_SCALE_SOURCES="/path/to/books::/path/to/scanned-books" npm run smoke:real-scale -- 20
```

Real-file paths, titles, metadata, screenshots, scan logs and per-account catalogue counts are local test data. Publish only aggregate results after reviewing them.
