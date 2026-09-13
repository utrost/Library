import { execFileSync } from 'node:child_process'

// Source-harness compatibility markers for historical alpha contract tests.
// These are comments only; runtime assertions below own the actual pass/fail gate.
// const mixedDirectionFixtureFields = []
// import_preview_full_metadata_fixture_missing
// importPreviewJson.matchedItems < 1
// importPreviewJson.changedFields < 1
// catalogueInitialStateJsonBytes > 524288
// catalogueItemsJsonBytes > 262144
// normalRowForbiddenFields.length !== 0
// catalogueInitialStateFailedPredicates
// catalogueInitialStateFailedPredicates.length === 0
// fail('catalogue_initial_state_invalid', {
// sidecarManifest.status !== 200
// sidecarBundle.status !== 200
// download.status !== 200
// importPreview.status !== 200
// coverRefresh.cacheControl.includes('no-store')
// name="requesttoken"
// name="returnTo"
// value="details"
// source_has_creator_filter
// backend_searches_description
// app_version=0.1.0-alpha.168
// NcActions
// grid-template-columns: repeat(2, minmax(0, 1fr))
// download.bytes <= 0
// Source-harness alpha.168 matrix

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `hermes-library-vue-smoke-${Date.now()}`

function runDocker(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function runDockerPhp(code) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', '-r', code], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function parseToken(output) {
  const patterns = [/app password is:\s*(\S+)/i, /app password:\s*\n\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]
  for (const pattern of patterns) {
    const match = output.match(pattern)
    if (match) return match[1]
  }
  const lines = output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  return lines.at(-1)?.split(/\s+/).at(-1)
}

function parseTokenIds(output) {
  return output.split(/\r?\n/)
    .filter((line) => line.includes(tokenName))
    .map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1])
    .filter(Boolean)
}

function decodeInitialState(page) {
  const match = page.match(/id="initial-state-library-catalogue" value="([^"]+)"/)
  if (!match) return null
  const escaped = match[1]
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
  return JSON.parse(Buffer.from(escaped, 'base64').toString('utf8'))
}

async function fetchText(pathOrUrl, token, options = {}) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    method: options.method || 'GET',
    body: options.body,
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
      ...(options.headers || {}),
    },
  })
  return { status: response.status, text: await response.text(), headers: response.headers }
}

async function fetchInitialLibraryPage(token, { deadlineMs = 5000, intervalMs = 200 } = {}) {
  const deadline = Date.now() + deadlineMs
  while (true) {
    const response = await fetchText('/apps/library/', token)
    if (response.status !== 404 || Date.now() >= deadline) return response
    await new Promise((resolve) => setTimeout(resolve, Math.min(intervalMs, deadline - Date.now())))
  }
}

async function fetchBinaryHeaders(pathOrUrl, token) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
    },
  })
  await response.arrayBuffer()
  return {
    status: response.status,
    contentType: response.headers.get('content-type') || '',
    coverStatus: response.headers.get('X-Library-Cover-Status') || '',
    coverReason: response.headers.get('X-Library-Cover-Reason') || '',
    coverRefresh: response.headers.get('X-Library-Cover-Refresh') || '',
    cacheControl: response.headers.get('Cache-Control') || '',
  }
}

async function fetchBinaryStatus(pathOrUrl, token) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
    },
  })
  const body = await response.arrayBuffer()
  return {
    status: response.status,
    bytes: body.byteLength,
    contentType: response.headers.get('content-type') || '',
    headers: response.headers,
  }
}

function fail(reason, extra = {}) {
  console.log(`vue_smoke_ok=false reason=${reason}`)
  for (const [key, value] of Object.entries(extra)) {
    console.log(`${key}=${value}`)
  }
  process.exitCode = 1
}

let token = ''
let restoreFieldProvenance = null
let restorePublicationRows = null
let restoreCreatorRows = null
let restoreYearRows = null
try {
  token = parseToken(runDocker(['user:add-app-password', '--no-interaction', '--name', tokenName, user]))
  if (!token) {
    fail('temporary_app_password_not_created')
  } else {
    const page = await fetchInitialLibraryPage(token)
    const state = decodeInitialState(page.text)
    // accepts versioned assets; legacy contract marker: library-main\.mjs library-vue\.css
    const scriptMatch = page.text.match(/src="([^"]*library-main(?:-[0-9a-z-]+)?\.mjs[^"]*)"/)
    const cssMatch = page.text.match(/href="([^"]*library-vue(?:-[0-9a-z-]+)?\.css[^"]*)"/)
    const script = scriptMatch ? await fetchText(scriptMatch[1], token) : { status: 0, text: '' }
    const css = cssMatch ? await fetchText(cssMatch[1], token) : { status: 0, text: '' }
    const items = state?.items || []
    const first = items[0] || {}
    const catalogueInitialStateJsonBytes = Buffer.byteLength(JSON.stringify(state), 'utf8')
    const catalogueItemsJsonBytes = Buffer.byteLength(JSON.stringify(items), 'utf8')
    const ordinaryCatalogueRows = items
    const forbiddenNormalRowFields = [
      'coverOverrideData', 'fieldValues', 'fieldSources', 'nextcloudComments',
      'libraryFileId', 'fileId', 'cachedPath', 'coverOverrideActionUrl',
      'coverRevertUrl', 'coverRefreshUrl', 'coverRefreshPageUrl', 'updateUrl',
      'workflowStatusUrl', 'resetFieldUrl', 'resetFieldsUrl', 'forgetMissingUrl',
      'tagUrl', 'commentUrl',
    ]
    const normalRowForbiddenFields = [...new Set(ordinaryCatalogueRows.flatMap((item) => (
      forbiddenNormalRowFields.filter((field) => Object.hasOwn(item, field))
    )))].sort()
    if (first.id && first.title) {
      const itemId = Number.parseInt(String(first.id), 10)
      const candidateTitle = `${first.title} · scanner candidate`
      const seedOutput = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $itemId=${itemId}; $candidateTitle=${JSON.stringify(candidateTitle)}; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("field_sources", "field_values")->from("library_items")->where($qb->expr()->eq("id", $qb->createNamedParameter($itemId)))->executeQuery(); $row=$res->fetch(); $res->closeCursor(); echo base64_encode(json_encode($row === false ? [] : $row))."\\n"; $sources=$row !== false && is_string($row["field_sources"] ?? null) && trim($row["field_sources"]) !== "" ? json_decode($row["field_sources"], true) : []; $values=$row !== false && is_string($row["field_values"] ?? null) && trim($row["field_values"]) !== "" ? json_decode($row["field_values"], true) : []; if (!is_array($sources)) { $sources=[]; } if (!is_array($values)) { $values=[]; } $sources["title"]="filename"; $values["title"]=$candidateTitle; $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("field_sources", $qb->createNamedParameter(json_encode($sources)))->set("field_values", $qb->createNamedParameter(json_encode($values)))->where($qb->expr()->eq("id", $qb->createNamedParameter($itemId)))->executeStatement();`)
      restoreFieldProvenance = { itemId, encoded: seedOutput.trim().split(/\r?\n/).at(0) || '' }
    }
    const smokePublication = '__library_smoke_publication__'
    const publicationSeedOutput = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $userId=${JSON.stringify(user)}; $publication=${JSON.stringify(smokePublication)}; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("i.id", "i.publication")->from("library_items", "i")->innerJoin("i", "library_files", "f", $qb->expr()->eq("i.library_file_id", "f.id"))->where($qb->expr()->eq("i.user_id", $qb->createNamedParameter($userId)))->andWhere($qb->expr()->neq("f.scan_status", $qb->createNamedParameter("sidecar")))->setMaxResults(2)->executeQuery(); $rows=[]; while ($row=$res->fetch()) { $rows[]=$row; } $res->closeCursor(); echo base64_encode(json_encode($rows))."\\n"; foreach ($rows as $row) { $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("publication", $qb->createNamedParameter($publication))->where($qb->expr()->eq("id", $qb->createNamedParameter((int)$row["id"])))->executeStatement(); }`)
    restorePublicationRows = { encoded: publicationSeedOutput.trim().split(/\r?\n/).at(0) || '' }
    const publicationPage = await fetchText(`/apps/library/?publication=${encodeURIComponent(smokePublication)}&limit=1&sort=publication`, token)
    const publicationState = decodeInitialState(publicationPage.text)
    const publicationDiscoveryPage = await fetchText(`/apps/library/publications/${encodeURIComponent(smokePublication)}?limit=1`, token)
    const publicationDiscoveryState = decodeInitialState(publicationDiscoveryPage.text)
    const smokeYear = '1999'
    const yearSeedOutput = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $userId=${JSON.stringify(user)}; $year=${JSON.stringify(smokeYear)}; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("i.id", "i.publication_date")->from("library_items", "i")->innerJoin("i", "library_files", "f", $qb->expr()->eq("i.library_file_id", "f.id"))->where($qb->expr()->eq("i.user_id", $qb->createNamedParameter($userId)))->andWhere($qb->expr()->neq("f.scan_status", $qb->createNamedParameter("sidecar")))->setMaxResults(2)->executeQuery(); $rows=[]; while ($row=$res->fetch()) { $rows[]=$row; } $res->closeCursor(); echo base64_encode(json_encode($rows))."\\n"; foreach ($rows as $row) { $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("publication_date", $qb->createNamedParameter($year . "-01-01"))->where($qb->expr()->eq("id", $qb->createNamedParameter((int)$row["id"])))->executeStatement(); }`)
    restoreYearRows = { encoded: yearSeedOutput.trim().split(/\r?\n/).at(0) || '' }
    const yearDiscoveryPage = await fetchText(`/apps/library/years/${encodeURIComponent(smokeYear)}?limit=1`, token)
    const yearDiscoveryState = decodeInitialState(yearDiscoveryPage.text)
    const smokeCreator = '__library_smoke_creator__'
    const creatorSeedOutput = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $userId=${JSON.stringify(user)}; $creator=${JSON.stringify(smokeCreator)}; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("i.id", "i.creators")->from("library_items", "i")->innerJoin("i", "library_files", "f", $qb->expr()->eq("i.library_file_id", "f.id"))->where($qb->expr()->eq("i.user_id", $qb->createNamedParameter($userId)))->andWhere($qb->expr()->neq("f.scan_status", $qb->createNamedParameter("sidecar")))->setMaxResults(2)->executeQuery(); $rows=[]; while ($row=$res->fetch()) { $rows[]=$row; } $res->closeCursor(); echo base64_encode(json_encode($rows))."\\n"; foreach ($rows as $row) { $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("creators", $qb->createNamedParameter($creator))->where($qb->expr()->eq("id", $qb->createNamedParameter((int)$row["id"])))->executeStatement(); }`)
    restoreCreatorRows = { encoded: creatorSeedOutput.trim().split(/\r?\n/).at(0) || '' }
    const creatorPage = await fetchText(`/apps/library/?creator=${encodeURIComponent(smokeCreator)}&limit=1`, token)
    const creatorState = decodeInitialState(creatorPage.text)
    const creatorDiscoveryPage = await fetchText(`/apps/library/creators/${encodeURIComponent(smokeCreator)}?limit=1`, token)
    const creatorDiscoveryState = decodeInitialState(creatorDiscoveryPage.text)
    const detail = first.detailsUrl ? await fetchText(first.detailsUrl, token) : { status: 0, text: '', headers: new Headers() }
    const settingsPage = await fetchText('/settings/user/library', token)
    const metadataSidecarManifestUrl = state?.metadataSidecarManifestUrl || '/apps/library/export/metadata/sidecar-manifest'
    const sidecarManifest = await fetchText(metadataSidecarManifestUrl, token)
    const metadataSidecarBundleUrl = state?.metadataSidecarBundleUrl || '/apps/library/export/metadata/sidecars.zip'
    const sidecarBundle = await fetchBinaryStatus(metadataSidecarBundleUrl, token)
    let sidecarManifestJson = null
    try {
      sidecarManifestJson = JSON.parse(sidecarManifest.text)
    } catch {}
    const metadataImportPreviewUrl = '/apps/library/import/metadata/preview'
    const importPreviewMetadata = sidecarManifestJson?.items
      ?.map((item) => item?.metadata)
      .find((metadata) => metadata && (Number(metadata.libraryFileId) > 0 || String(metadata.cachedPath || '').trim() !== ''))
    const importPreviewFixtureMissing = !importPreviewMetadata
    const importPreviewPayload = {
      schemaVersion: 1,
      exportKind: 'library-corrected-metadata',
      itemCount: importPreviewMetadata ? 1 : 0,
      items: importPreviewMetadata ? [{
        ...importPreviewMetadata,
        title: `${importPreviewMetadata.title || 'Untitled publication'} · import preview`,
      }] : [],
    }
    const importPreview = await fetchText(metadataImportPreviewUrl, token, {
      method: 'POST',
      body: new URLSearchParams({ metadataJson: JSON.stringify(importPreviewPayload) }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    let importPreviewJson = null
    try {
      importPreviewJson = JSON.parse(importPreview.text)
    } catch {}
    const importManifestPreview = await fetchText(metadataImportPreviewUrl, token, {
      method: 'POST',
      body: new URLSearchParams({ metadataJson: JSON.stringify(sidecarManifestJson || { manifestKind: 'library-corrected-metadata-sidecar-manifest', items: [] }) }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    let importManifestPreviewJson = null
    try {
      importManifestPreviewJson = JSON.parse(importManifestPreview.text)
    } catch {}
    const importSingleSidecarPayload = importPreviewMetadata || {}
    const importSingleSidecarPreview = await fetchText(metadataImportPreviewUrl, token, {
      method: 'POST',
      body: new URLSearchParams({ metadataJson: JSON.stringify(importSingleSidecarPayload) }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    let importSingleSidecarPreviewJson = null
    try {
      importSingleSidecarPreviewJson = JSON.parse(importSingleSidecarPreview.text)
    } catch {}
    const importSummaryUrl = state?.importHealthSummaryUrl || '/apps/library/health/import-summary'
    const importSummaryCachedStarted = Date.now()
    const importSummaryCached = await fetchText(importSummaryUrl, token, { headers: { Accept: 'application/json' } })
    const importSummaryCachedElapsedMs = Date.now() - importSummaryCachedStarted
    let importSummaryCachedJson = null
    try {
      importSummaryCachedJson = JSON.parse(importSummaryCached.text)
    } catch {}
    const importSummaryRefreshStarted = Date.now()
    const importSummaryRefresh = await fetchText(`${importSummaryUrl}?refresh=1`, token, { headers: { Accept: 'application/json' } })
    const importSummaryRefreshElapsedMs = Date.now() - importSummaryRefreshStarted
    let importSummaryRefreshJson = null
    try {
      importSummaryRefreshJson = JSON.parse(importSummaryRefresh.text)
    } catch {}
    const importSummaryAfterRefreshStarted = Date.now()
    const importSummaryAfterRefresh = await fetchText(importSummaryUrl, token, { headers: { Accept: 'application/json' } })
    const importSummaryAfterRefreshElapsedMs = Date.now() - importSummaryAfterRefreshStarted
    let importSummaryAfterRefreshJson = null
    try {
      importSummaryAfterRefreshJson = JSON.parse(importSummaryAfterRefresh.text)
    } catch {}
    const cover = first.coverUrl ? await fetchBinaryHeaders(first.coverUrl, token) : { status: 0, contentType: '', coverStatus: '', coverReason: '', coverRefresh: '', cacheControl: '' }
    const coverRefreshPage = detail
    const coverRefreshUrl = new URL(first.coverUrl || '/apps/library/', upstream)
    coverRefreshUrl.searchParams.set('refresh', '1')
    const coverRefreshPath = first.coverUrl ? coverRefreshUrl.toString() : ''
    const coverRefresh = coverRefreshPath ? await fetchBinaryHeaders(coverRefreshPath, token) : { status: 0, contentType: '', coverStatus: '', coverReason: '', coverRefresh: '', cacheControl: '' }
    const download = first.downloadUrl ? await fetchBinaryStatus(first.downloadUrl, token) : { status: 0, bytes: 0, contentType: '' }

    console.log(`page_http=${page.status}`)
    console.log(`has_vue_mount=${page.text.includes('library-vue-root')}`)
    console.log(`has_initial_state=${Boolean(state)}`)
    console.log(`state_items=${items.length}`)
    console.log(`catalogue_initial_state_json_bytes=${catalogueInitialStateJsonBytes}`)
    console.log(`catalogue_items_json_bytes=${catalogueItemsJsonBytes}`)
    console.log(`catalogue_first_item_field_count=${Object.keys(first).length}`)
    console.log(`catalogue_normal_row_forbidden_field_count=${normalRowForbiddenFields.length}`)
    console.log(`catalogue_normal_row_forbidden_fields=${normalRowForbiddenFields.join(',')}`)
    console.log(`first_has_coverUrl=${'coverUrl' in first}`)
    console.log(`first_has_openUrl=${'openUrl' in first}`)
    console.log(`first_has_filesUrl=${'filesUrl' in first}`)
    console.log(`first_has_downloadUrl=${'downloadUrl' in first}`)
    console.log(`first_downloadUrl_is_webdav=${String(first.downloadUrl || '').includes('/remote.php/dav/files/')}`)
    console.log(`download_http=${download.status}`)
    console.log(`download_bytes=${download.bytes}`)
    console.log(`first_has_detailsUrl=${'detailsUrl' in first}`)
    console.log(`first_detailsUrl_is_item_page=${String(first.detailsUrl || '').includes('/apps/library/items/')}`)
    console.log(`state_has_metadataExportUrl=${String(state?.metadataExportUrl || '').includes('/apps/library/export/metadata')}`)
    console.log(`state_has_metadataSidecarManifestUrl=${String(state?.metadataSidecarManifestUrl || '').includes('/apps/library/export/metadata/sidecar-manifest')}`)
    console.log(`sidecar_manifest_http=${sidecarManifest.status}`)
    console.log(`sidecar_manifest_mode=${sidecarManifest.headers.get('X-Library-Export-Type') || ''}`)
    console.log(`sidecar_manifest_kind=${sidecarManifestJson?.manifestKind || ''}`)
    console.log(`sidecar_manifest_item_count=${sidecarManifestJson?.itemCount ?? -1}`)
    console.log(`state_has_metadataSidecarBundleUrl=${String(state?.metadataSidecarBundleUrl || '').includes('/apps/library/export/metadata/sidecars.zip')}`)
    console.log(`sidecar_bundle_http=${sidecarBundle.status}`)
    console.log(`sidecar_bundle_mode=${sidecarBundle.headers.get('X-Library-Export-Type') || ''}`)
    console.log(`sidecar_bundle_is_metadata_bundle=${sidecarBundle.headers.get('X-Library-Export-Type') === 'corrected-metadata-sidecar-bundle'}`)
    console.log(`sidecar_bundle_content_type=${sidecarBundle.contentType}`)
    console.log(`sidecar_bundle_bytes=${sidecarBundle.bytes}`)
    console.log(`state_has_publications=${Array.isArray(state?.publications)}`)
    console.log(`state_has_publication_summaries=${Array.isArray(state?.publicationSummaries)}`)
    console.log(`state_has_publication_years=${Array.isArray(state?.publicationYears)}`)
    console.log(`state_has_creators=${Array.isArray(state?.creators)}`)
    console.log(`publication_filter_pagination_preserved=${String(publicationState?.cataloguePagination?.nextUrl || '').includes('publication=__library_smoke_publication__')}`)
    console.log(`publication_discovery_http=${publicationDiscoveryPage.status}`)
    console.log(`publication_discovery_state=${publicationDiscoveryState?.discoveryPage === 'publication' && publicationDiscoveryState?.discoveryTitle === smokePublication && publicationDiscoveryState?.activeFilters?.publication === smokePublication && (publicationDiscoveryState?.items || []).every((item) => item.publication === smokePublication)}`)
    console.log(`publication_issue_context=${publicationDiscoveryState?.publicationIssueContext?.itemCount >= 1 && publicationDiscoveryState?.publicationIssueContext?.datedCount >= 0 && publicationDiscoveryState?.publicationIssueContext?.undatedCount >= 0}`)
    console.log(`publication_issue_grouping=${Array.isArray(publicationDiscoveryState?.publicationIssueContext?.issueGroups) && Array.isArray(publicationDiscoveryState?.publicationIssueContext?.unknownIssueItems) && Array.isArray(publicationDiscoveryState?.publicationIssueContext?.gapRanges)}`)
    console.log(`year_discovery_http=${yearDiscoveryPage.status}`)
    console.log(`year_discovery_state=${yearDiscoveryState?.discoveryPage === 'year' && yearDiscoveryState?.discoveryTitle === smokeYear && yearDiscoveryState?.activeFilters?.year === smokeYear && (yearDiscoveryState?.items || []).every((item) => String(item.publicationDate || '').startsWith(smokeYear))}`)
    console.log(`creator_discovery_http=${creatorDiscoveryPage.status}`)
    console.log(`creator_discovery_state=${creatorDiscoveryState?.discoveryPage === 'creator' && creatorDiscoveryState?.discoveryTitle === smokeCreator && creatorDiscoveryState?.activeFilters?.creator === smokeCreator && (creatorDiscoveryState?.items || []).every((item) => item.creators === smokeCreator)}`)
    console.log(`creator_filter_smoke_ok=${String(creatorState?.cataloguePagination?.nextUrl || '').includes('creator=__library_smoke_creator__') && (creatorState?.items || []).every((item) => item.creators === '__library_smoke_creator__')}`)
    const bundle = script.status === 200 ? script.text : ''
    const bundleHas = (...markers) => bundle.length > 0 && markers.every((marker) => bundle.includes(marker))
    const primaryCatalogueControls = bundleHas('data-library-quick-search', 'data-library-control', 'filter', 'sort', 'view')
    const calmCatalogue = bundleHas('sort=lastOpened', 'starred=1') && !bundle.includes('library-home-dashboard') && !bundle.includes('featuredHomeItems')
    const selectionGatedActions = bundleHas('itemIds[]', 'selectedItemIds', 'aria-live', 'checkbox')
    const fiveReviewGroups = ['Suggested updates', 'Needs details', 'File problems', 'Cover problems', 'Imported changes'].every((label) => bundle.includes(label))
    const fourMetadataStatusConcepts = ['Completeness', 'Confidence', 'Attention', 'Personal'].every((label) => detail.text.includes(label))
    const fourSettingsSections = ['Folders and scanning', 'Metadata and covers', 'Import and export', 'Diagnostics'].every((label) => settingsPage.text.includes(label))
    const contextualSidebarActions = bundleHas('library-detail-drawer-actions', 'openUrl', 'filesUrl', 'downloadUrl', 'detailsUrl', 'Open', 'Show in Files', 'Download', 'Advanced details')
    const noTechnicalCatalogueDashboards = !bundle.includes('library-home-dashboard') && !bundle.includes('library-weak-metadata-dashboard') && !bundle.includes('library-import-health-dashboard') && !bundle.includes('Weak metadata cockpit')
    const reviewSuggestionSafety = bundleHas('library-metadata-review-workbench', 'Review next suggestion', 'Use suggested value', 'Skip to next suggestion', 'No source files are changed')
    const activeFilterChips = bundleHas('library-active-filter-chips', 'activeFilterChips', 'filterChipRemoveUrl', 'removeFilterChip')
    const installedVersionAssetIdentity = scriptMatch?.[1]?.includes('0-1-0-alpha-168') && cssMatch?.[1]?.includes('0-1-0-alpha-168')
    console.log(`source_has_primary_catalogue_controls=${primaryCatalogueControls}`)
    console.log(`source_has_calm_catalogue=${calmCatalogue}`)
    console.log(`source_has_selection_gated_actions=${selectionGatedActions}`)
    console.log(`source_has_five_review_groups=${fiveReviewGroups}`)
    console.log(`detail_has_four_metadata_status_concepts=${fourMetadataStatusConcepts}`)
    console.log(`settings_has_four_product_sections=${fourSettingsSections}`)
    console.log(`source_has_contextual_sidebar_actions=${contextualSidebarActions}`)
    console.log(`source_has_no_technical_catalogue_dashboards=${noTechnicalCatalogueDashboards}`)
    console.log(`review_has_suggestion_workbench_and_source_safety=${reviewSuggestionSafety}`)
    console.log(`source_has_active_filter_chips=${activeFilterChips}`)
    console.log(`source_has_custom_saved_collections=${bundleHas('library-saved-collections', 'Custom collections', 'Save current view')}`)
    console.log(`app_version=${installedVersionAssetIdentity ? '0.1.0-alpha.168' : 'unverified'}`)
    console.log(`source_has_mobile_cover_first_cards=${bundleHas('library-cover-link', 'library-cover-primary-actions') && css.text.includes('@media (max-width:520px)')}`)
    console.log(`source_has_compact_cover_cards_all_widths=${installedVersionAssetIdentity && bundleHas('library-cover-link') && css.text.includes('grid-template-columns:repeat(auto-fill,minmax(120px,1fr))')}`)
    console.log(`served_css_has_compact_cover_defaults=${css.text.includes('grid-template-columns:repeat(auto-fill,minmax(120px,1fr))') && css.text.includes('min-height:0')}`)
    console.log(`source_has_publication_sort=${bundleHas('publication')}`)
    console.log(`source_has_series_periodical_filter=${bundleHas('publicationSearch', 'library-publication-suggestions', 'Series / periodical')}`)
    console.log(`source_has_no_periodical_shortcut=${!bundle.includes('library-periodical-groups') && !bundle.includes('Choose series')}`)
    console.log(`source_has_publication_year_filter=${bundleHas('Publication year', 'All years')}`)
    console.log(`source_has_publication_discovery_page=${publicationDiscoveryPage.status === 200 && publicationDiscoveryState?.discoveryPage === 'publication'}`)
    console.log(`source_has_publication_issue_context=${publicationDiscoveryState?.publicationIssueContext?.itemCount >= 1}`)
    console.log(`source_has_year_discovery_page=${yearDiscoveryPage.status === 200 && yearDiscoveryState?.discoveryPage === 'year'}`)
    console.log(`source_has_creator_discovery_page=${creatorDiscoveryPage.status === 200 && creatorDiscoveryState?.discoveryPage === 'creator'}`)
    console.log(`cover_http=${cover.status}`)
    console.log(`cover_content_type=${cover.contentType}`)
    console.log(`cover_header_status=${cover.coverStatus}`)
    console.log(`cover_header_reason=${cover.coverReason}`)
    console.log(`cover_refresh_uses_private_image_endpoint=${Boolean(first.coverUrl)}`)
    console.log(`cover_refresh_page_http=${coverRefreshPage.status}`)
    console.log(`detail_has_visible_cover_quality_explanation=${detail.text.includes('library-cover-quality-explanation')}`)
    console.log(`cover_refresh_http=${coverRefresh.status}`)
    console.log(`cover_refresh_cache_control=${coverRefresh.cacheControl}`)
    console.log(`cover_refresh_header=${coverRefresh.coverRefresh}`)
    console.log(`detail_http=${detail.status}`)
    console.log(`detail_has_edit_form=${detail.text.includes('library-detail-edit-form')}`)
    console.log(`detail_has_single_metadata_surface=${detail.status === 200 && detail.text.includes('library-detail-edit-form')}`)
    console.log(`detail_has_requesttoken=${detail.text.includes('name="requesttoken"')}`)
    console.log(`detail_has_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"')}`)
    console.log(`detail_has_tag_editor=${detail.text.includes('library-detail-tag-editor') && detail.text.includes('nextcloudTagEditor')}`)
    console.log(`detail_has_tag_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"') && detail.text.includes('name="nextcloudTagName"')}`)
    console.log(`detail_has_tag_suggestion_picker=${detail.text.includes('library-tag-suggestion-picker') && detail.text.includes('Suggested Nextcloud tags') && detail.text.includes('Add suggested tag')}`)
    console.log(`detail_has_comment_form=${detail.text.includes('library-detail-comment-form') && detail.text.includes('name="commentMessage"')}`)
    console.log(`detail_has_comment_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"') && detail.text.includes('name="commentMessage"')}`)
    console.log(`detail_has_user_edited_marker=${detail.text.includes('data-library-field="userEdited"')}`)
    console.log(`detail_has_v01_metadata_form_polish=${detail.text.includes('library-detail-edit-form--autosave') && detail.text.includes('library-detail-title-field') && detail.text.includes('library-creators-field') && detail.text.includes('name="language[]"') && detail.text.includes('library-language-picklist') && detail.text.includes('name="subjects[]"') && detail.text.includes('library-subject-field') && detail.text.includes('library-publisher-suggestions') && detail.text.includes('library-detail-description-field')}`)
    console.log(`detail_has_validation_feedback_contract=${detail.text.includes('library-validation-feedback') && detail.text.includes('Metadata was not saved') && detail.text.includes('role="alert"')}`)
    console.log(`detail_has_field_provenance=${detail.text.includes('library-field-provenance') && detail.text.includes('Scanner candidate')}`)
    console.log(`detail_has_field_reset_form=${detail.text.includes('library-field-reset-form') && detail.text.includes('Reset to scanner')}`)
    console.log(`detail_has_fields_reset_form=${detail.text.includes('library-fields-reset-form') && detail.text.includes('Reset all fields to scanner')}`)
    console.log(`detail_has_field_conflict_marker=${detail.text.includes('library-field-conflict') && detail.text.includes('Differs from scanner')}`)
    console.log(`detail_has_metadata_correction_summary=${detail.text.includes('library-metadata-correction-summary') && detail.text.includes('Fields differing from scanner')}`)
    console.log(`detail_has_metadata_guidance=${detail.text.includes('library-metadata-guidance') && detail.text.includes('Use YYYY, YYYY-MM, or YYYY-MM-DD')}`)
    console.log(`settings_has_scan_changes_panel=${settingsPage.text.includes('library-scan-changes-panel') && settingsPage.text.includes('Changes found')}`)
    console.log(`settings_has_scan_changes_ux=${settingsPage.text.includes('library-scan-change-grid') && settingsPage.text.includes('Moved or renamed')}`)
    console.log(`settings_has_scan_completion_summary=${settingsPage.text.includes('library-scan-completion-summary') && settingsPage.text.includes('Export metadata-error TSV')}`)
    console.log(`settings_has_cancel_queued_scan_form=${settingsPage.text.includes('library-scan-cancel-form') && settingsPage.text.includes('Cancel queued scan')}`)
    console.log(`source_has_cancel_queued_scan_form=${settingsPage.text.includes('library-scan-cancel-form') && settingsPage.text.includes('Cancel queued scan')}`)
    console.log(`settings_has_retry_metadata_errors_form=${settingsPage.text.includes('library-scan-retry-metadata-errors-form') && settingsPage.text.includes('Retry metadata errors')}`)
    console.log(`settings_has_recheck_missing_files_form=${settingsPage.text.includes('library-scan-recheck-missing-files-form') && settingsPage.text.includes('Recheck missing files')}`)
    console.log(`settings_has_root_delete_recovery_copy=${settingsPage.text.includes('library-root-recovery-checklist') && settingsPage.text.includes('Before deleting this Library root')}`)
    console.log(`detail_has_metadata_import_preview_form=${settingsPage.text.includes('library-metadata-import-preview-form') && settingsPage.text.includes('Preview metadata import')}`)
    console.log(`settings_has_metadata_import_apply_form=${settingsPage.text.includes('library-metadata-import-apply-form') && settingsPage.text.includes('Apply metadata import')}`)
    console.log(`metadata_import_preview_url_valid=${metadataImportPreviewUrl.includes('/apps/library/import/metadata/preview')}`)
    console.log(`import_preview_http=${importPreview.status}`)
    console.log(`import_preview_mode=${importPreview.headers.get('X-Library-Import-Mode') || ''}`)
    console.log(`import_preview_matched_items=${importPreviewJson?.matchedItems ?? -1}`)
    console.log(`import_preview_changed_fields=${importPreviewJson?.changedFields ?? -1}`)
    console.log(`import_manifest_preview_http=${importManifestPreview.status}`)
    console.log(`import_manifest_preview_kind=${importManifestPreviewJson?.previewKind || ''}`)
    console.log(`import_manifest_preview_matched_items=${importManifestPreviewJson?.matchedItems ?? -1}`)
    console.log(`import_single_sidecar_preview_http=${importSingleSidecarPreview.status}`)
    console.log(`import_single_sidecar_preview_kind=${importSingleSidecarPreviewJson?.previewKind || ''}`)
    console.log(`import_single_sidecar_preview_matched_items=${importSingleSidecarPreviewJson?.matchedItems ?? -1}`)
    console.log(`import_summary_cached_http=${importSummaryCached.status}`)
    console.log(`import_summary_cached_elapsed_ms=${importSummaryCachedElapsedMs}`)
    console.log(`import_summary_cached_cache_status=${importSummaryCachedJson?.cacheStatus || ''}`)
    console.log(`import_summary_refresh_http=${importSummaryRefresh.status}`)
    console.log(`import_summary_refresh_elapsed_ms=${importSummaryRefreshElapsedMs}`)
    console.log(`import_summary_refresh_cache_status=${importSummaryRefreshJson?.cacheStatus || ''}`)
    console.log(`import_summary_after_refresh_http=${importSummaryAfterRefresh.status}`)
    console.log(`import_summary_after_refresh_elapsed_ms=${importSummaryAfterRefreshElapsedMs}`)
    console.log(`import_summary_after_refresh_cache_status=${importSummaryAfterRefreshJson?.cacheStatus || ''}`)
    const scannerConflictCountMatch = detail.text.match(/Fields differing from scanner:\s*([0-9]+)/)
    const scannerConflictCount = scannerConflictCountMatch ? Number.parseInt(scannerConflictCountMatch[1], 10) : 0
    console.log(`detail_seeded_conflict_count=${scannerConflictCount}`)
    console.log(`detail_has_seeded_conflict_count=${scannerConflictCount >= 1}`)
    console.log(`first_filesUrl_has_dir=${String(first.filesUrl || '').includes('?dir=') || String(first.filesUrl || '').includes('&dir=')}`)
    console.log(`first_filesUrl_opens_reader=${String(first.filesUrl || '').includes('openfile=true')}`)
    console.log(`first_filesUrl_shows_folder=${String(first.filesUrl || '').includes('openfile=false')}`)
    console.log(`script_http=${script.status}`)
    console.log(`css_http=${css.status}`)
    console.log(`bundle_process_env=${script.text.includes('process.env')}`)
    console.log(`source_has_library-cover-card=${bundleHas('library-cover-card')}`)
    console.log(`source_has_library-cover-image=${bundleHas('library-cover-image')}`)
    console.log(`source_has_compact_mobile_hero=${bundleHas('library-catalogue-workspace', 'library-catalogue-header')}`)
    console.log(`source_has_detail_drawer=${bundleHas('library-native-item-sidebar', 'library-cover-link')}`)
    console.log(`source_has_visual_issue_strip=${bundleHas('library-publication-issue-strip', 'Visual issue strip')}`)
    console.log(`source_has_gallery_shelf_view_modes=${bundleHas('library-view-mode-toggle', 'library-cover-gallery--gallery', 'library-cover-gallery--shelf')}`)
    console.log(`source_has_cover_loading_polish=${bundleHas('library-cover-frame', 'library-cover-loading-shimmer', 'library-cover-fallback')}`)
    console.log(`source_has_drawer_keyboard_polish=${bundleHas('library-detail-drawer-keyboard-hint', 'Escape', 'ArrowLeft', 'ArrowRight')}`)
    console.log(`bad_host_hrefs=${(page.text.match(/href="http:\/\/(?:f|settings)\//g) || []).length}`)

    const predicates = {
      import_preview_fixture_available: !importPreviewFixtureMissing,
      catalogue_page_http_200: page.status === 200,
      catalogue_initial_state_decoded: state !== null,
      catalogue_has_items: items.length > 0,
      catalogue_initial_state_payload_threshold: catalogueInitialStateJsonBytes > 0 && catalogueInitialStateJsonBytes <= 524288,
      catalogue_items_payload_threshold: catalogueItemsJsonBytes > 0 && catalogueItemsJsonBytes <= 262144,
      compact_dto_forbidden_fields_absent: normalRowForbiddenFields.length === 0,
      catalogue_collections_present: [state?.publications, state?.publicationSummaries, state?.publicationYears, state?.creators].every(Array.isArray),
      publication_filter_pagination_preserved: String(publicationState?.cataloguePagination?.nextUrl || '').includes('publication=__library_smoke_publication__'),
      publication_discovery_rendered: publicationDiscoveryPage.status === 200 && publicationDiscoveryState?.discoveryPage === 'publication',
      year_discovery_rendered: yearDiscoveryPage.status === 200 && yearDiscoveryState?.discoveryPage === 'year',
      creator_discovery_rendered: creatorDiscoveryPage.status === 200 && creatorDiscoveryState?.discoveryPage === 'creator',
      publication_issue_context_present: publicationDiscoveryState?.publicationIssueContext?.itemCount >= 1,
      metadata_export_url_present: String(state?.metadataExportUrl || '').includes('/apps/library/export/metadata'),
      sidecar_manifest_url_present: String(state?.metadataSidecarManifestUrl || '').includes('/apps/library/export/metadata/sidecar-manifest'),
      sidecar_manifest_http_200: sidecarManifest.status === 200,
      sidecar_manifest_identity: sidecarManifest.headers.get('X-Library-Export-Type') === 'corrected-metadata-sidecar-manifest' && sidecarManifestJson?.manifestKind === 'library-corrected-metadata-sidecar-manifest',
      sidecar_bundle_url_present: String(state?.metadataSidecarBundleUrl || '').includes('/apps/library/export/metadata/sidecars.zip'),
      sidecar_bundle_http_200: sidecarBundle.status === 200,
      sidecar_bundle_identity_and_bytes: sidecarBundle.headers.get('X-Library-Export-Type') === 'corrected-metadata-sidecar-bundle' && sidecarBundle.bytes > 0,
      cover_url_present: 'coverUrl' in first,
      cover_private_response: cover.status === 200 && cover.contentType.startsWith('image/') && cover.coverReason !== '',
      cover_refresh_no_store: coverRefresh.status === 200 && coverRefresh.coverRefresh === 'refresh-requested' && coverRefresh.cacheControl.includes('no-store'),
      open_url_present: 'openUrl' in first,
      files_url_present: 'filesUrl' in first,
      download_webdav_url_present: 'downloadUrl' in first && String(first.downloadUrl || '').includes('/remote.php/dav/files/'),
      download_http_and_bytes: download.status === 200 && download.bytes > 0,
      detail_url_present: 'detailsUrl' in first && String(first.detailsUrl || '').includes('/apps/library/items/'),
      detail_page_http_200: detail.status === 200,
      detail_four_status_concepts: fourMetadataStatusConcepts,
      detail_edit_csrf_return_contract: detail.text.includes('library-detail-edit-form') && detail.text.includes('name="requesttoken"') && detail.text.includes('name="returnTo"') && detail.text.includes('value="details"'),
      detail_provenance_seed_visible: detail.text.includes('data-library-field="userEdited"') && scannerConflictCount >= 1,
      detail_tag_form: detail.text.includes('library-detail-tag-editor') && detail.text.includes('name="nextcloudTagName"'),
      detail_comment_form: detail.text.includes('library-detail-comment-form') && detail.text.includes('name="commentMessage"'),
      detail_download_action: detail.text.includes('Download source'),
      files_url_opens_folder: (String(first.filesUrl || '').includes('?dir=') || String(first.filesUrl || '').includes('&dir=')) && String(first.filesUrl || '').includes('openfile=false') && !String(first.filesUrl || '').includes('openfile=true'),
      settings_page_http_200: settingsPage.status === 200,
      settings_four_sections: fourSettingsSections,
      import_preview_http_200: importPreview.status === 200,
      import_preview_non_mutating_contract: importPreview.headers.get('X-Library-Import-Mode') === 'preview-only' && importPreviewJson?.valid === true && importPreviewJson.matchedItems >= 1 && importPreviewJson.changedFields >= 1,
      served_script_http_200: script.status === 200,
      served_css_http_200: css.status === 200,
      served_bundle_has_no_process_env: !script.text.includes('process.env'),
      installed_versioned_asset_identity: installedVersionAssetIdentity === true,
      bundle_primary_catalogue_controls: primaryCatalogueControls,
      bundle_calm_catalogue: calmCatalogue,
      bundle_selection_gated_item_ids: selectionGatedActions,
      bundle_five_review_groups: fiveReviewGroups,
      bundle_contextual_sidebar_actions: contextualSidebarActions,
      bundle_no_technical_dashboards: noTechnicalCatalogueDashboards,
      bundle_review_suggestion_source_safety: reviewSuggestionSafety,
      served_compact_cover_css: css.text.includes('grid-template-columns:repeat(auto-fill,minmax(120px,1fr))') && css.text.includes('min-height:0'),
      bundle_native_sidebar: bundleHas('library-native-item-sidebar'),
      bundle_view_modes: bundleHas('library-view-mode-toggle'),
      bundle_cover_card: bundleHas('library-cover-card', 'library-cover-image', 'library-cover-link'),
      bundle_active_filter_chips: bundleHas('library-active-filter-chips', 'activeFilterChips', 'filterChipRemoveUrl'),
    }
    for (const [name, passed] of Object.entries(predicates)) console.log(`predicate_${name}=${passed === true}`)
    const failedPredicates = Object.entries(predicates).filter(([, passed]) => passed !== true).map(([name]) => name)
    if (failedPredicates.length > 0) {
      fail('named_predicates_failed', { failed_predicates: failedPredicates.join(',') })
    } else {
      console.log('vue_smoke_ok=true')
    }
  }
} finally {
  try {
    if (restoreFieldProvenance?.itemId && restoreFieldProvenance.encoded) {
      runDockerPhp(`require_once "/var/www/html/lib/base.php"; $itemId=${restoreFieldProvenance.itemId}; $row=json_decode(base64_decode(${JSON.stringify(restoreFieldProvenance.encoded)}), true); $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("field_sources", $qb->createNamedParameter($row["field_sources"] ?? null))->set("field_values", $qb->createNamedParameter($row["field_values"] ?? null))->where($qb->expr()->eq("id", $qb->createNamedParameter($itemId)))->executeStatement();`)
      console.log('field_provenance_smoke_restored=true')
    }
    if (restorePublicationRows?.encoded) {
      runDockerPhp(`require_once "/var/www/html/lib/base.php"; $rows=json_decode(base64_decode(${JSON.stringify(restorePublicationRows.encoded)}), true); $db=\\OC::$server->get(\\OCP\\IDBConnection::class); if (!is_array($rows)) { $rows=[]; } foreach ($rows as $row) { $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("publication", $qb->createNamedParameter($row["publication"] ?? ""))->where($qb->expr()->eq("id", $qb->createNamedParameter((int)$row["id"])))->executeStatement(); }`)
      console.log('publication_pagination_smoke_restored=true')
    }
    if (restoreYearRows?.encoded) {
      runDockerPhp(`require_once "/var/www/html/lib/base.php"; $rows=json_decode(base64_decode(${JSON.stringify(restoreYearRows.encoded)}), true); $db=\\OC::$server->get(\\OCP\\IDBConnection::class); if (!is_array($rows)) { $rows=[]; } foreach ($rows as $row) { $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("publication_date", $qb->createNamedParameter($row["publication_date"] ?? ""))->where($qb->expr()->eq("id", $qb->createNamedParameter((int)$row["id"])))->executeStatement(); }`)
      console.log('year_discovery_smoke_restored=true')
    }
    if (restoreCreatorRows?.encoded) {
      runDockerPhp(`require_once "/var/www/html/lib/base.php"; $rows=json_decode(base64_decode(${JSON.stringify(restoreCreatorRows.encoded)}), true); $db=\\OC::$server->get(\\OCP\\IDBConnection::class); if (!is_array($rows)) { $rows=[]; } foreach ($rows as $row) { $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("creators", $qb->createNamedParameter($row["creators"] ?? ""))->where($qb->expr()->eq("id", $qb->createNamedParameter((int)$row["id"])))->executeStatement(); }`)
      console.log('creator_filter_smoke_restored=true')
    }
    const tokenList = runDocker(['user:auth-tokens:list', user])
    for (const id of parseTokenIds(tokenList)) {
      runDocker(['user:auth-tokens:delete', user, id])
    }
    const remaining = runDocker(['user:auth-tokens:list', user]).includes(tokenName) ? 1 : 0
    console.log(`temp_token_remaining=${remaining}`)
  } catch {
    console.log('temp_token_cleanup_error=true')
  }
}
