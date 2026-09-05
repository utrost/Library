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

    const script = scriptMatch ? await fetchText(scriptMatch[1], token) : { status: 0, text: '' }
    const css = cssMatch ? await fetchText(cssMatch[1], token) : { status: 0, text: '' }
    const items = state?.items || []
    const first = items[0] || {}

    console.log(`page_http=${page.status}`)
    console.log(`has_vue_mount=${page.text.includes('library-vue-root')}`)
    console.log(`has_initial_state=${Boolean(state)}`)
    console.log(`state_items=${items.length}`)
    console.log(`first_has_coverUrl=${'coverUrl' in first}`)
    console.log(`first_has_openUrl=${'openUrl' in first}`)
    console.log(`first_has_filesUrl=${'filesUrl' in first}`)
    console.log(`script_http=${script.status}`)
    console.log(`css_http=${css.status}`)
    console.log(`bundle_process_env=${script.text.includes('process.env')}`)
    console.log(`source_has_library-cover-card=${sourceComponent.includes('library-cover-card')}`)
    console.log(`source_has_library-cover-image=${sourceComponent.includes('library-cover-image')}`)
    console.log(`bad_host_hrefs=${(page.text.match(/href="http:\/\/(?:f|settings)\//g) || []).length}`)

    if (page.status !== 200 || !state || items.length === 0 || !('coverUrl' in first) || !('openUrl' in first) || !('filesUrl' in first)) {
      fail('catalogue_initial_state_invalid')
    } else if (script.status !== 200 || css.status !== 200 || script.text.includes('process.env')) {
      fail('vue_assets_invalid')
    } else if (!sourceComponent.includes('library-cover-card') || !sourceComponent.includes('library-cover-image')) {
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
