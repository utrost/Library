# HTTP and SQL aggregates

All request bodies, URLs, SQL and parameters stay local. SQL is a separate profiled request; HTTP medians are unprofiled.

| Operation | Median ms | Maximum ms | SQL count | SQL ms |
| --- | ---: | ---: | ---: | ---: |
| catalogue-25 | 144.7 | 156.2 | 6 | 124.3 |
| catalogue-100 | 153.3 | 175.8 | 6 | 126.1 |
| catalogue-page-400 | 267.5 | 378.2 | 6 | 198.1 |
| catalogue-recent | 156.8 | 160.8 | 6 | 125.5 |
| search-word | 387.6 | 707.8 | 10 | 347.9 |
| filter-epub | 153.2 | 162.8 | 6 | 125.8 |
| review-missing | 17.6 | 18.6 | 4 | 1.8 |
| review-conflicts | 18.3 | 18.7 | 7 | 1.9 |
| creator-typeahead | 16.4 | 19.9 | 1 | 0.5 |
| publisher-typeahead | 17.5 | 26.1 | 1 | 1.9 |
| folder-typeahead | 16.2 | 16.5 | 1 | 0.3 |
| shelf-children | 16.1 | 16.1 | 0 | 0.0 |
| home-html | 468.1 | 614.5 | 30 | 429.7 |
| shelves-html | 661.2 | 744.1 | 23 | 631.7 |
| catalogue-html | 169.0 | 173.2 | 20 | 128.1 |
| settings-html | 189.1 | 260.0 | 21 | 152.7 |
| sidebar | 17.0 | 18.0 | 2 | 0.6 |
| detail | 30.6 | 31.7 | 18 | 3.6 |
| lists-index | 16.0 | 16.6 | 2 | 0.5 |
| lists-membership | 16.1 | 16.5 | 3 | 0.7 |
| inference-roots | 25.5 | 30.9 | 25 | 5.2 |
| scan-progress | 15.9 | 16.0 | 3 | 0.6 |
| duplicates-1 | 22.8 | 29.9 | 20 | 4.1 |
| duplicates-100 | 201.5 | 311.8 | 236 | 101.0 |
| catalogue-cursor-next | 147.1 | 168.1 | 6 | 124.2 |
| catalogue-cursor-deep | 154.1 | 192.7 | 6 | 126.7 |
| review-counts | 701.1 | 1132.3 | 17 | 684.1 |
| cover-first | 32.1 | 45.4 | 20 | 5.2 |
| cover-pdf | 31.2 | 31.3 | 20 | 5.6 |
| cover-epub | 31.5 | 52.0 | 20 | 5.7 |
| cover-cbz | 28.6 | 36.7 | 12 | 3.6 |
| shelf-root-children | 17.3 | 22.6 | 1 | 0.2 |
| metadata-export | 56.2 | 183.7 | 6 | 6.6 |
| sidecar-manifest | 52.3 | 53.5 | 6 | 6.6 |
| inference-sample | 161.4 | 172.7 | 269 | 107.8 |
| list-page | 45.2 | 53.5 | 90 | 19.5 |
| catalogue-hydrate | 619.7 | 621.5 | 8 | 586.3 |
