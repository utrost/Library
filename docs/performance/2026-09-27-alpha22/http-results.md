# Alpha.22 HTTP and SQL aggregates

All shown requests returned 200. ¹One separate profiled request; SQL time is not part of the median HTTP value. No request URLs, SQL text, parameter values or book metadata are exported here.

| Operation | HTTP median ms | Maximum of 3 ms | SQL statements¹ | SQL ms¹ |
| --- | ---: | ---: | ---: | ---: |
| catalogue-25 | 145.8 | 158.7 | 6 | 124.5 |
| catalogue-100 | 153.1 | 173.2 | 6 | 127.1 |
| catalogue-recent | 157.3 | 165.9 | 6 | 125.1 |
| search-word | 389.4 | 716.7 | 10 | 351.1 |
| filter-epub | 162.4 | 169.2 | 6 | 127.9 |
| review-missing | 18.8 | 18.9 | 4 | 1.7 |
| review-conflicts | 19.1 | 20.9 | 7 | 1.8 |
| creator-typeahead | 17.8 | 22.6 | 1 | 0.6 |
| publisher-typeahead | 18.6 | 27.0 | 1 | 2.2 |
| folder-typeahead | 17.5 | 18.2 | 1 | 0.3 |
| shelf-children | 16.1 | 16.4 | 0 | 0.0 |
| home-html | 467.3 | 621.6 | 30 | 434.9 |
| shelves-html | 676.3 | 770.8 | 23 | 643.4 |
| catalogue-html | 173.0 | 174.5 | 20 | 128.6 |
| settings-html | 204.4 | 267.4 | 21 | 151.1 |
| sidebar | 18.2 | 19.5 | 2 | 0.7 |
| detail | 32.2 | 34.8 | 18 | 4.1 |
| lists-index | 16.1 | 18.1 | 2 | 0.5 |
| lists-membership | 16.7 | 17.1 | 3 | 0.7 |
| inference-roots | 26.8 | 32.2 | 25 | 5.5 |
| scan-progress | 16.9 | 17.2 | 3 | 0.8 |
| duplicates-1 | 23.4 | 31.1 | 20 | 4.4 |
| duplicates-100 | 197.9 | 361.2 | 236 | 115.7 |
| catalogue-cursor-next | 151.0 | 162.1 | 6 | 125.6 |
| catalogue-cursor-deep | 159.1 | 248.9 | 6 | 128.5 |
| review-counts | 724.6 | 1188.4 | 17 | 705.3 |
| cover-first | 27.1 | 46.5 | 20 | 5.2 |
| cover-pdf | 27.3 | 27.3 | 20 | 4.4 |
| cover-epub | 24.5 | 86.1 | 20 | 4.2 |
| cover-cbz | 22.3 | 29.0 | 12 | 2.5 |
| shelf-root-children | 16.6 | 16.9 | 1 | 0.2 |
| metadata-export | 54.6 | 199.4 | 6 | 7.0 |
| sidecar-manifest | 53.8 | 57.1 | 6 | 13.9 |
| inference-sample | 177.4 | 225.8 | 348 | 116.6 |
| list-page | 51.8 | 75.7 | 90 | 21.0 |
| catalogue-hydrate | 624.4 | 652.6 | 8 | 598.2 |
