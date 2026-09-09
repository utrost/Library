import { execFileSync } from 'node:child_process'
import { readFileSync, rmSync } from 'node:fs'

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
  const patterns = [/app password is:\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]
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
  token = parseToken(runDocker(['user:add-app-password', '--name', tokenName, user]))
  if (!token) {
    fail('temporary_app_password_not_created')
  } else {
    const page = await fetchText('/apps/library/', token)
    const state = decodeInitialState(page.text)
    const scriptMatch = page.text.match(/src="([^"]*library-main\.mjs[^"]*)"/)
    const cssMatch = page.text.match(/href="([^"]*library-vue\.css[^"]*)"/)
    const sourceComponent = readFileSync('src/App.vue', 'utf8')
    const sourceStyle = readFileSync('css/style.css', 'utf8')
    const sourceDetailTemplate = readFileSync('templates/item-detail.php', 'utf8')
    const sourceSettingsTemplate = readFileSync('templates/settings-personal.php', 'utf8')

    const script = scriptMatch ? await fetchText(scriptMatch[1], token) : { status: 0, text: '' }
    const css = cssMatch ? await fetchText(cssMatch[1], token) : { status: 0, text: '' }
    const items = state?.items || []
    const first = items[0] || {}
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
    const importPreviewPayload = {
      schemaVersion: 1,
      exportKind: 'library-corrected-metadata',
      itemCount: first.id ? 1 : 0,
      items: first.id ? [{
        ...first,
        title: `${first.title || 'Untitled publication'} · import preview`,
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
    const importSingleSidecarPayload = sidecarManifestJson?.items?.find((item) => item?.metadata)?.metadata || (first.id ? { ...first } : {})
    const importSingleSidecarPreview = await fetchText(metadataImportPreviewUrl, token, {
      method: 'POST',
      body: new URLSearchParams({ metadataJson: JSON.stringify(importSingleSidecarPayload) }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    let importSingleSidecarPreviewJson = null
    try {
      importSingleSidecarPreviewJson = JSON.parse(importSingleSidecarPreview.text)
    } catch {}
    const cover = first.coverUrl ? await fetchBinaryHeaders(first.coverUrl, token) : { status: 0, contentType: '', coverStatus: '', coverReason: '', coverRefresh: '', cacheControl: '' }
    const coverRefreshPageMatch = detail.text.match(/href="([^"]*\/apps\/library\/items\/[^\"]*coverRefresh=1[^"]*)"[^>]*library-cover-refresh-action/)
    const coverRefreshPagePath = coverRefreshPageMatch ? coverRefreshPageMatch[1].replaceAll('&amp;', '&') : ''
    const coverRefreshPage = coverRefreshPagePath ? await fetchText(coverRefreshPagePath, token) : { status: 0, text: '', headers: new Headers() }
    const coverRefreshImageMatch = coverRefreshPage.text.match(/<img[^>]*class="[^"]*library-detail-cover[^"]*"[^>]*src="([^"]*refresh=1[^"]*)"/)
    const coverRefreshPath = coverRefreshImageMatch ? coverRefreshImageMatch[1].replaceAll('&amp;', '&') : ''
    const coverRefresh = coverRefreshPath ? await fetchBinaryHeaders(coverRefreshPath, token) : { status: 0, contentType: '', coverStatus: '', coverReason: '', coverRefresh: '', cacheControl: '' }
    const download = first.downloadUrl ? await fetchBinaryStatus(first.downloadUrl, token) : { status: 0, bytes: 0, contentType: '' }

    console.log(`page_http=${page.status}`)
    console.log(`has_vue_mount=${page.text.includes('library-vue-root')}`)
    console.log(`has_initial_state=${Boolean(state)}`)
    console.log(`state_items=${items.length}`)
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
    console.log(`year_discovery_http=${yearDiscoveryPage.status}`)
    console.log(`year_discovery_state=${yearDiscoveryState?.discoveryPage === 'year' && yearDiscoveryState?.discoveryTitle === smokeYear && yearDiscoveryState?.activeFilters?.year === smokeYear && (yearDiscoveryState?.items || []).every((item) => String(item.publicationDate || '').startsWith(smokeYear))}`)
    console.log(`creator_discovery_http=${creatorDiscoveryPage.status}`)
    console.log(`creator_discovery_state=${creatorDiscoveryState?.discoveryPage === 'creator' && creatorDiscoveryState?.discoveryTitle === smokeCreator && creatorDiscoveryState?.activeFilters?.creator === smokeCreator && (creatorDiscoveryState?.items || []).every((item) => item.creators === smokeCreator)}`)
    console.log(`creator_filter_smoke_ok=${String(creatorState?.cataloguePagination?.nextUrl || '').includes('creator=__library_smoke_creator__') && (creatorState?.items || []).every((item) => item.creators === '__library_smoke_creator__')}`)
    console.log(`source_has_series_periodical_filter=${sourceComponent.includes('Series / periodical') && sourceComponent.includes('name="publication"') && sourceComponent.includes('All series and periodicals')}`)
    console.log(`source_has_publication_year_filter=${sourceComponent.includes('Publication year') && sourceComponent.includes('name="year"') && sourceComponent.includes('All years')}`)
    console.log(`source_has_creator_filter=${sourceComponent.includes('Creator') && sourceComponent.includes('name="creator"') && sourceComponent.includes('All creators') && sourceComponent.includes('Exact full-field creator matches only')}`)
    console.log(`source_has_active_filter_chips=${sourceComponent.includes('library-active-filter-chips') && sourceComponent.includes('activeFilterChips') && sourceComponent.includes('filterChipRemoveUrl') && sourceComponent.includes('Remove filter') && sourceComponent.includes('param !== key') && sourceComponent.includes('params.set(param, normalized)')}`)
    const appInfo = readFileSync('appinfo/info.xml', 'utf8')
    console.log(`app_version=0.1.0-alpha.122`)
    console.log(`source_has_mobile_cover_first_cards=${sourceComponent.includes('library-cover-details') && sourceComponent.includes('Show details and actions') && sourceComponent.includes('library-cover-actions') && sourceStyle.includes('@media (max-width: 520px)') && sourceStyle.includes('grid-template-columns: repeat(2, minmax(0, 1fr))')}`)
    console.log(`source_has_compact_cover_cards_all_widths=${appInfo.includes('<version>0.1.0-alpha.122</version>') && sourceComponent.includes('library-cover-details') && sourceComponent.includes('Show details and actions') && sourceStyle.split('@media (max-width: 520px)', 1)[0].includes('grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))') && sourceStyle.split('@media (max-width: 520px)', 1)[0].includes('min-height: 0')}`)
    console.log(`served_css_has_compact_cover_defaults=${css.text.includes('grid-template-columns:repeat(auto-fill,minmax(120px,1fr))') && css.text.includes('min-height:0') && css.text.includes('library-cover-details')}`)
    console.log(`source_has_publication_sort=${sourceComponent.includes('<option value="publication">')}`)
    console.log(`source_has_periodical_groups_panel=${sourceComponent.includes('library-periodical-groups') && sourceComponent.includes('Top series and periodicals') && sourceComponent.includes('Jump into recurring publications with one click') && sourceComponent.includes('publicationLandingUrl(summary.publication)')}`)
    console.log(`source_has_publication_discovery_page=${sourceComponent.includes('isPublicationDiscoveryPage') && sourceComponent.includes('library-discovery-header') && sourceComponent.includes('discoveryTitle')}`)
    console.log(`source_has_publication_issue_context=${sourceComponent.includes('library-publication-issue-context') && sourceComponent.includes('Publication contents') && sourceComponent.includes('issue/date coverage')}`)
    console.log(`source_has_year_discovery_page=${sourceComponent.includes('isYearDiscoveryPage') && sourceComponent.includes('library-year-groups') && sourceComponent.includes('yearLandingUrl(year)')}`)
    console.log(`source_has_creator_discovery_page=${sourceComponent.includes('isCreatorDiscoveryPage') && sourceComponent.includes('library-creator-groups') && sourceComponent.includes('creatorLandingUrl(creator)')}`)
    console.log(`source_has_periodical_empty_state=${sourceComponent.includes('library-periodical-groups-empty') && sourceComponent.includes('No series or periodicals found yet')}`)
    console.log(`source_has_metadata_export_link=${sourceComponent.includes('metadataExportUrl') && sourceComponent.includes('Export corrected metadata')}`)
    console.log(`source_has_sidecar_manifest_link=${sourceComponent.includes('metadataSidecarManifestUrl') && sourceComponent.includes('Export sidecar manifest')}`)
    console.log(`source_has_sidecar_bundle_link=${sourceComponent.includes('metadataSidecarBundleUrl') && sourceComponent.includes('Export sidecar ZIP')}`)
    console.log(`cover_http=${cover.status}`)
    console.log(`cover_content_type=${cover.contentType}`)
    console.log(`cover_header_status=${cover.coverStatus}`)
    console.log(`cover_header_reason=${cover.coverReason}`)
    console.log(`detail_has_cover_refresh_action=${detail.text.includes('library-cover-refresh-action') && detail.text.includes('Refresh cover preview') && detail.text.includes('coverRefresh=1')}`)
    console.log(`detail_has_cover_refresh_tooltip=${detail.text.includes('library-cover-refresh-action') && detail.text.includes('title=') && detail.text.includes('Nextcloud preview')}`)
    console.log(`cover_refresh_page_http=${coverRefreshPage.status}`)
    console.log(`detail_has_visible_cover_quality_explanation=${detail.text.includes('library-cover-quality-explanation')}`)
    console.log(`cover_refresh_http=${coverRefresh.status}`)
    console.log(`cover_refresh_cache_control=${coverRefresh.cacheControl}`)
    console.log(`cover_refresh_header=${coverRefresh.coverRefresh}`)
    console.log(`detail_http=${detail.status}`)
    console.log(`detail_has_publication_metadata=${detail.text.includes('Publication metadata')}`)
    console.log(`detail_has_file_metadata=${detail.text.includes('File metadata')}`)
    console.log(`detail_has_provenance=${detail.text.includes('Provenance')}`)
    console.log(`detail_has_nextcloud_metadata=${detail.text.includes('Nextcloud metadata')}`)
    console.log(`detail_has_edit_form=${detail.text.includes('library-detail-edit-form')}`)
    const detailMetadataSection = sourceDetailTemplate.match(/<section class=\"library-panel library-detail-section-meta\"[\s\S]*?<\/section>/)?.[0] || ''
    console.log(`detail_has_single_metadata_surface=${detailMetadataSection.includes('library-detail-edit-form') && !detailMetadataSection.includes('<dl class=\"library-item-metadata\">') && !detailMetadataSection.includes('Edit publication metadata')}`)
    console.log(`detail_has_requesttoken=${detail.text.includes('name="requesttoken"')}`)
    console.log(`detail_has_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"')}`)
    console.log(`detail_has_tag_editor=${detail.text.includes('library-detail-tag-editor') && detail.text.includes('nextcloudTagEditor')}`)
    console.log(`detail_has_tag_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"') && detail.text.includes('name="nextcloudTagName"')}`)
    console.log(`detail_has_tag_suggestion_picker=${detail.text.includes('library-tag-suggestion-picker') && detail.text.includes('Suggested Nextcloud tags') && detail.text.includes('Add suggested tag')}`)
    console.log(`detail_has_comment_form=${detail.text.includes('library-detail-comment-form') && detail.text.includes('name="commentMessage"')}`)
    console.log(`detail_has_comment_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"') && detail.text.includes('name="commentMessage"')}`)
    console.log(`detail_mentions_userEdited=${detail.text.includes('userEdited')}`)
    console.log(`detail_has_field_provenance=${detail.text.includes('library-field-provenance') && detail.text.includes('Field-level provenance') && detail.text.includes('Scanner candidate')}`)
    console.log(`detail_has_field_reset_form=${detail.text.includes('library-field-reset-form') && detail.text.includes('Reset to scanner')}`)
    console.log(`detail_has_fields_reset_form=${detail.text.includes('library-fields-reset-form') && detail.text.includes('Reset all fields to scanner')}`)
    console.log(`detail_has_metadata_guidance=${detail.text.includes('library-metadata-guidance') && detail.text.includes('library-field-label-help') && detail.text.includes('Use YYYY, YYYY-MM, or YYYY-MM-DD') && detail.text.includes('Choose one or more language codes') && detail.text.includes('One creator per line') && !detail.text.includes('library-publication-date-guidance') && !detail.text.includes('library-language-guidance')}`)
    console.log(`detail_has_v01_metadata_form_polish=${detail.text.includes('library-detail-edit-form--autosave') && detail.text.includes('library-detail-title-field') && detail.text.includes('library-creators-field') && detail.text.includes('name="language[]"') && detail.text.includes('library-language-picklist') && detail.text.includes('name="genres[]"') && detail.text.includes('library-genre-picklist') && detail.text.includes('library-publisher-suggestions') && detail.text.includes('library-detail-description-field')}`)
    console.log(`detail_has_validation_feedback_contract=${sourceDetailTemplate.includes('library-validation-feedback') && sourceDetailTemplate.includes('Metadata was not saved') && sourceDetailTemplate.includes('role="alert"')}`)
    console.log(`detail_has_field_conflict_marker=${detail.text.includes('library-field-conflict') && detail.text.includes('Differs from scanner')}`)
    console.log(`detail_has_metadata_import_preview_form=${settingsPage.text.includes('library-metadata-import-preview-form') && settingsPage.text.includes('metadataJson') && settingsPage.text.includes('Preview metadata import')}`)
    console.log(`settings_has_metadata_import_apply_form=${settingsPage.text.includes('library-metadata-import-apply-form') && settingsPage.text.includes('metadataJson') && settingsPage.text.includes('Apply metadata import') && settingsPage.text.includes('This writes matched corrected metadata')}`)
    console.log(`settings_has_retry_metadata_errors_form=${settingsPage.text.includes('library-scan-retry-metadata-errors-form') && settingsPage.text.includes('Retry metadata errors')}`)
    console.log(`settings_has_recheck_missing_files_form=${settingsPage.text.includes('library-scan-recheck-missing-files-form') && settingsPage.text.includes('Recheck missing files')}`)
    console.log(`settings_has_cancel_queued_scan_form=${sourceSettingsTemplate.includes('library-scan-cancel-form') && sourceSettingsTemplate.includes('Cancel queued scan')}`)
    console.log(`source_has_cancel_queued_scan_form=${sourceSettingsTemplate.includes('library-scan-cancel-form') && sourceSettingsTemplate.includes('Cancel queued scan')}`)
    console.log(`settings_has_root_delete_recovery_copy=${settingsPage.text.includes('library-root-recovery-checklist') && settingsPage.text.includes('Before deleting this Library root') && settingsPage.text.includes('Export corrected metadata') && settingsPage.text.includes('database backup') && settingsPage.text.includes('source files from Nextcloud Files are not deleted')}`)
    console.log(`metadataImportPreviewUrl=${metadataImportPreviewUrl}`)
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
    const scannerConflictCountMatch = detail.text.match(/Fields differing from scanner:\s*([0-9]+)/)
    const scannerConflictCount = scannerConflictCountMatch ? Number.parseInt(scannerConflictCountMatch[1], 10) : 0
    console.log(`detail_has_metadata_correction_summary=${detail.text.includes('library-metadata-correction-summary') && detail.text.includes('Scanner candidates') && detail.text.includes('Fields differing from scanner')}`)
    console.log(`detail_seeded_conflict_count=${scannerConflictCount}`)
    console.log(`detail_has_seeded_conflict_count=${scannerConflictCount >= 1}`)
    console.log(`first_filesUrl_has_dir=${String(first.filesUrl || '').includes('?dir=') || String(first.filesUrl || '').includes('&dir=')}`)
    console.log(`first_filesUrl_opens_reader=${String(first.filesUrl || '').includes('openfile=true')}`)
    console.log(`first_filesUrl_shows_folder=${String(first.filesUrl || '').includes('openfile=false')}`)
    console.log(`script_http=${script.status}`)
    console.log(`css_http=${css.status}`)
    console.log(`bundle_process_env=${script.text.includes('process.env')}`)
    console.log(`source_has_library-cover-card=${sourceComponent.includes('library-cover-card')}`)
    console.log(`source_has_library-cover-image=${sourceComponent.includes('library-cover-image')}`)
    console.log(`source_has_compact_mobile_hero=${sourceComponent.includes('library-catalogue-toolbar') && sourceStyle.includes('library-catalogue-header') && !sourceComponent.includes('without importing or owning the files')}`)
    console.log(`bad_host_hrefs=${(page.text.match(/href="http:\/\/(?:f|settings)\//g) || []).length}`)

    if (page.status !== 200 || !state || items.length === 0 || !Array.isArray(state?.publications) || !Array.isArray(state?.publicationSummaries) || !Array.isArray(state?.publicationYears) || !Array.isArray(state?.creators) || !String(publicationState?.cataloguePagination?.nextUrl || '').includes('publication=__library_smoke_publication__') || publicationDiscoveryPage.status !== 200 || yearDiscoveryPage.status !== 200 || creatorDiscoveryPage.status !== 200 || creatorDiscoveryState?.discoveryPage !== 'creator' || creatorDiscoveryState?.discoveryTitle !== smokeCreator || creatorDiscoveryState?.activeFilters?.creator !== smokeCreator || !(creatorDiscoveryState?.items || []).every((item) => item.creators === smokeCreator) || yearDiscoveryState?.discoveryPage !== 'year' || yearDiscoveryState?.discoveryTitle !== smokeYear || yearDiscoveryState?.activeFilters?.year !== smokeYear || !(yearDiscoveryState?.items || []).every((item) => String(item.publicationDate || '').startsWith(smokeYear)) || publicationDiscoveryState?.discoveryPage !== 'publication' || publicationDiscoveryState?.discoveryTitle !== smokePublication || publicationDiscoveryState?.activeFilters?.publication !== smokePublication || !(publicationDiscoveryState?.items || []).every((item) => item.publication === smokePublication) || publicationDiscoveryState?.publicationIssueContext?.itemCount < 1 || !String(creatorState?.cataloguePagination?.nextUrl || '').includes('creator=__library_smoke_creator__') || !(creatorState?.items || []).every((item) => item.creators === '__library_smoke_creator__') || !String(state?.metadataExportUrl || '').includes('/apps/library/export/metadata') || !String(state?.metadataSidecarManifestUrl || '').includes('/apps/library/export/metadata/sidecar-manifest') || sidecarManifest.status !== 200 || sidecarManifest.headers.get('X-Library-Export-Type') !== 'corrected-metadata-sidecar-manifest' || sidecarManifestJson?.manifestKind !== 'library-corrected-metadata-sidecar-manifest' || sidecarManifestJson.itemCount < 0 || !('coverUrl' in first) || cover.status !== 200 || !cover.contentType.startsWith('image/') || !['preview', 'cbz-first-image', 'placeholder', 'epub-cover'].includes(cover.coverStatus) || cover.coverReason === '' || !detail.text.includes('library-cover-refresh-action') || !detail.text.includes('Refresh cover preview') || !detail.text.includes('coverRefresh=1') || !detail.text.includes('title=') || !detail.text.includes('Nextcloud preview') || detail.text.includes('library-cover-quality-explanation') || coverRefresh.status !== 200 || coverRefresh.coverRefresh !== 'refresh-requested' || !coverRefresh.cacheControl.includes('no-store') || !('openUrl' in first) || !('filesUrl' in first) || !('downloadUrl' in first) || !String(first.downloadUrl || '').includes('/remote.php/dav/files/') || download.status !== 200 || download.bytes <= 0 || !('detailsUrl' in first) || !String(first.detailsUrl || '').includes('/apps/library/items/') || detail.status !== 200 || !detail.text.includes('Publication metadata') || !detail.text.includes('File metadata') || !detail.text.includes('Provenance') || !detail.text.includes('Nextcloud metadata') || !detail.text.includes('library-detail-edit-form') || !detail.text.includes('name="requesttoken"') || !detail.text.includes('name="returnTo"') || !detail.text.includes('value="details"') || !detail.text.includes('userEdited') || !detail.text.includes('library-field-provenance') || !detail.text.includes('Field-level provenance') || !detail.text.includes('Scanner candidate') || !detail.text.includes('library-field-reset-form') || !detail.text.includes('Reset to scanner') || !detail.text.includes('library-fields-reset-form') || !detail.text.includes('Reset all fields to scanner') || !detail.text.includes('library-metadata-guidance') || !detail.text.includes('Use YYYY, YYYY-MM, or YYYY-MM-DD') || !detail.text.includes('Choose one or more language codes') || !detail.text.includes('One creator per line') || !detail.text.includes('library-field-conflict') || !detail.text.includes('Differs from scanner') || !detail.text.includes('library-metadata-correction-summary') || !detail.text.includes('Scanner candidates') || !detail.text.includes('Fields differing from scanner') || scannerConflictCount < 1 || scannerConflictCount > 8 || !settingsPage.text.includes('library-metadata-import-preview-form') || !settingsPage.text.includes('metadataJson') || !settingsPage.text.includes('library-metadata-import-apply-form') || !settingsPage.text.includes('Apply metadata import') || !settingsPage.text.includes('This writes matched corrected metadata') || !settingsPage.text.includes('library-scan-retry-metadata-errors-form') || !settingsPage.text.includes('Retry metadata errors') || !settingsPage.text.includes('library-scan-recheck-missing-files-form') || !settingsPage.text.includes('Recheck missing files') || !settingsPage.text.includes('missing files are rechecked') || importPreview.status !== 200 || importPreview.headers.get('X-Library-Import-Mode') !== 'preview-only' || !importPreviewJson?.valid || importPreviewJson.matchedItems < 1 || importPreviewJson.changedFields < 1 || !detail.text.includes('library-detail-tag-editor') || !detail.text.includes('name="nextcloudTagName"') || !detail.text.includes('library-tag-suggestion-picker') || !detail.text.includes('Suggested Nextcloud tags') || !detail.text.includes('Add suggested tag') || !detail.text.includes('library-detail-comment-form') || !detail.text.includes('name="commentMessage"') || !detail.text.includes('Download source') || !(String(first.filesUrl || '').includes('?dir=') || String(first.filesUrl || '').includes('&dir=')) || !String(first.filesUrl || '').includes('openfile=false') || String(first.filesUrl || '').includes('openfile=true')) {
      fail('catalogue_initial_state_invalid')
    } else if (script.status !== 200 || css.status !== 200 || script.text.includes('process.env')) {
      fail('vue_assets_invalid')
    } else if (!sourceComponent.includes('library-cover-card') || !sourceComponent.includes('library-cover-image') || sourceComponent.includes('without importing or owning the files') || !sourceComponent.includes('library-catalogue-toolbar') || !sourceComponent.includes('metadataExportUrl') || !sourceComponent.includes('Series / periodical') || !sourceComponent.includes('name="publication"') || !sourceComponent.includes('All series and periodicals') || !sourceComponent.includes('Publication year') || !sourceComponent.includes('name="year"') || !sourceComponent.includes('All years') || !sourceComponent.includes('Creator') || !sourceComponent.includes('name="creator"') || !sourceComponent.includes('All creators') || !sourceComponent.includes('Exact full-field creator matches only') || !sourceComponent.includes('library-active-filter-chips') || !sourceComponent.includes('activeFilterChips') || !sourceComponent.includes('filterChipRemoveUrl') || !sourceComponent.includes('Remove filter') || !sourceComponent.includes('library-cover-details') || !sourceComponent.includes('Show details and actions') || !sourceComponent.includes('library-cover-actions') || !css.text.includes('grid-template-columns:repeat(auto-fill,minmax(120px,1fr))') || !css.text.includes('min-height:0') || !css.text.includes('library-cover-details') || !sourceStyle.split('@media (max-width: 520px)', 1)[0].includes('grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))') || !sourceStyle.split('@media (max-width: 520px)', 1)[0].includes('min-height: 0') || !sourceStyle.includes('@media (max-width: 520px)') || !sourceStyle.includes('grid-template-columns: repeat(2, minmax(0, 1fr))') || !sourceComponent.includes('library-publication-issue-context') || !sourceComponent.includes('Publication contents') || !sourceComponent.includes('issue/date coverage') || !sourceComponent.includes('library-periodical-groups') || !sourceComponent.includes('Top series and periodicals') || !sourceComponent.includes('Jump into recurring publications with one click') || !sourceComponent.includes('publicationLandingUrl(summary.publication)') || !sourceComponent.includes('isPublicationDiscoveryPage') || !sourceComponent.includes('library-discovery-header') || !sourceComponent.includes('isYearDiscoveryPage') || !sourceComponent.includes('library-year-groups') || !sourceComponent.includes('yearLandingUrl(year)') || !sourceComponent.includes('isCreatorDiscoveryPage') || !sourceComponent.includes('library-creator-groups') || !sourceComponent.includes('creatorLandingUrl(creator)') || !sourceComponent.includes('library-periodical-groups-empty') || !sourceComponent.includes('No series or periodicals found yet') || !sourceComponent.includes('<option value="publication">') || !sourceComponent.includes('Export corrected metadata') || !sourceComponent.includes('Download source') || !sourceStyle.includes('font-size: 28px;')) {
      fail('vue_source_contract_invalid')
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
