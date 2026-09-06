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

async function fetchText(pathOrUrl, token) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
    },
  })
  return { status: response.status, text: await response.text() }
}

function fail(reason, extra = {}) {
  console.log(`vue_smoke_ok=false reason=${reason}`)
  for (const [key, value] of Object.entries(extra)) {
    console.log(`${key}=${value}`)
  }
  process.exitCode = 1
}

let token = ''
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

    const script = scriptMatch ? await fetchText(scriptMatch[1], token) : { status: 0, text: '' }
    const css = cssMatch ? await fetchText(cssMatch[1], token) : { status: 0, text: '' }
    const items = state?.items || []
    const first = items[0] || {}
    const detail = first.detailsUrl ? await fetchText(first.detailsUrl, token) : { status: 0, text: '' }

    console.log(`page_http=${page.status}`)
    console.log(`has_vue_mount=${page.text.includes('library-vue-root')}`)
    console.log(`has_initial_state=${Boolean(state)}`)
    console.log(`state_items=${items.length}`)
    console.log(`first_has_coverUrl=${'coverUrl' in first}`)
    console.log(`first_has_openUrl=${'openUrl' in first}`)
    console.log(`first_has_filesUrl=${'filesUrl' in first}`)
    console.log(`first_has_detailsUrl=${'detailsUrl' in first}`)
    console.log(`first_detailsUrl_is_item_page=${String(first.detailsUrl || '').includes('/apps/library/items/')}`)
    console.log(`detail_http=${detail.status}`)
    console.log(`detail_has_publication_metadata=${detail.text.includes('Publication metadata')}`)
    console.log(`detail_has_file_metadata=${detail.text.includes('File metadata')}`)
    console.log(`detail_has_provenance=${detail.text.includes('Provenance')}`)
    console.log(`detail_has_nextcloud_metadata=${detail.text.includes('Nextcloud metadata')}`)
    console.log(`detail_has_edit_form=${detail.text.includes('library-detail-edit-form')}`)
    console.log(`detail_has_requesttoken=${detail.text.includes('name="requesttoken"')}`)
    console.log(`detail_has_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"')}`)
    console.log(`detail_has_tag_editor=${detail.text.includes('library-detail-tag-editor') && detail.text.includes('nextcloudTagEditor')}`)
    console.log(`detail_has_tag_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"') && detail.text.includes('name="nextcloudTagName"')}`)
    console.log(`detail_has_comment_form=${detail.text.includes('library-detail-comment-form') && detail.text.includes('name="commentMessage"')}`)
    console.log(`detail_has_comment_return_to_details=${detail.text.includes('name="returnTo"') && detail.text.includes('value="details"') && detail.text.includes('name="commentMessage"')}`)
    console.log(`detail_mentions_userEdited=${detail.text.includes('userEdited')}`)
    console.log(`first_filesUrl_has_dir=${String(first.filesUrl || '').includes('?dir=') || String(first.filesUrl || '').includes('&dir=')}`)
    console.log(`first_filesUrl_opens_reader=${String(first.filesUrl || '').includes('openfile=true')}`)
    console.log(`first_filesUrl_shows_folder=${String(first.filesUrl || '').includes('openfile=false')}`)
    console.log(`script_http=${script.status}`)
    console.log(`css_http=${css.status}`)
    console.log(`bundle_process_env=${script.text.includes('process.env')}`)
    console.log(`source_has_library-cover-card=${sourceComponent.includes('library-cover-card')}`)
    console.log(`source_has_library-cover-image=${sourceComponent.includes('library-cover-image')}`)
    console.log(`source_has_compact_mobile_hero=${sourceComponent.includes('library-hero-actions') && sourceStyle.includes('font-size: 28px;') && !sourceComponent.includes('without importing or owning the files')}`)
    console.log(`bad_host_hrefs=${(page.text.match(/href="http:\/\/(?:f|settings)\//g) || []).length}`)

    if (page.status !== 200 || !state || items.length === 0 || !('coverUrl' in first) || !('openUrl' in first) || !('filesUrl' in first) || !('detailsUrl' in first) || !String(first.detailsUrl || '').includes('/apps/library/items/') || detail.status !== 200 || !detail.text.includes('Publication metadata') || !detail.text.includes('File metadata') || !detail.text.includes('Provenance') || !detail.text.includes('Nextcloud metadata') || !detail.text.includes('library-detail-edit-form') || !detail.text.includes('name="requesttoken"') || !detail.text.includes('name="returnTo"') || !detail.text.includes('value="details"') || !detail.text.includes('userEdited') || !detail.text.includes('library-detail-tag-editor') || !detail.text.includes('name="nextcloudTagName"') || !detail.text.includes('library-detail-comment-form') || !detail.text.includes('name="commentMessage"') || !(String(first.filesUrl || '').includes('?dir=') || String(first.filesUrl || '').includes('&dir=')) || !String(first.filesUrl || '').includes('openfile=false') || String(first.filesUrl || '').includes('openfile=true')) {
      fail('catalogue_initial_state_invalid')
    } else if (script.status !== 200 || css.status !== 200 || script.text.includes('process.env')) {
      fail('vue_assets_invalid')
    } else if (!sourceComponent.includes('library-cover-card') || !sourceComponent.includes('library-cover-image') || sourceComponent.includes('without importing or owning the files') || !sourceComponent.includes('library-hero-actions') || !sourceStyle.includes('font-size: 28px;')) {
      fail('vue_source_contract_invalid')
    } else {
      console.log('vue_smoke_ok=true')
    }
  }
} finally {
  try {
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
