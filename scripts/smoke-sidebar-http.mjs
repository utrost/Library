import { execFileSync } from 'node:child_process'
import { randomBytes } from 'node:crypto'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const primaryUser = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const marker = `library-sidebar-http-${Date.now()}`
const otherUser = `${marker}-user`
const otherPassword = randomBytes(24).toString('base64url')

function occ(args, env = {}) {
  const envArgs = Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`])
  return execFileSync('docker', ['exec', ...envArgs, '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
}

function token(output) {
  for (const pattern of [/app password is:\s*(\S+)/i, /app password:\s*\n\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]) {
    const match = output.match(pattern)
    if (match) return match[1]
  }
  return output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).at(-1)?.split(/\s+/).at(-1)
}

function tokenIds(output, name) {
  return output.split(/\r?\n/).filter((line) => line.includes(name)).map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1]).filter(Boolean)
}

async function request(path, user = '', password = '') {
  const headers = { Accept: 'application/json' }
  if (password) headers.Authorization = `Basic ${Buffer.from(`${user}:${password}`).toString('base64')}`
  const response = await fetch(new URL(path, upstream), { headers, redirect: 'manual' })
  return {
    status: response.status,
    contentType: (response.headers.get('content-type') || '').split(';', 1)[0].trim().toLowerCase(),
    body: Buffer.from(await response.arrayBuffer()),
  }
}

function sameResponse(actual, expected, label) {
  if (actual.status !== expected.status || actual.contentType !== expected.contentType || !actual.body.equals(expected.body)) {
    throw new Error(`${label} did not match the generic sidebar JSON 404 byte-for-byte`)
  }
}

let primaryToken = ''
let otherToken = ''
try {
  primaryToken = token(occ(['user:add-app-password', primaryUser, '--name', marker])) || ''
  if (!primaryToken) throw new Error('primary app password unavailable')
  const catalogue = await request('/apps/library/catalogue?limit=1', primaryUser, primaryToken)
  if (catalogue.status !== 200) throw new Error(`catalogue preflight returned ${catalogue.status}`)
  const itemId = JSON.parse(catalogue.body.toString('utf8'))?.items?.[0]?.id
  if (!Number.isSafeInteger(itemId) || itemId < 1) throw new Error('owned sidebar fixture unavailable')

  occ(['user:add', otherUser, '--password-from-env'], { OC_PASS: otherPassword })
  otherToken = token(occ(['user:add-app-password', otherUser, '--name', marker])) || ''
  if (!otherToken) throw new Error('other-user app password unavailable')

  const unauthenticated = await request(`/apps/library/items/${itemId}/sidebar`)
  const missing = await request('/apps/library/items/2147483647/sidebar', primaryUser, primaryToken)
  const nonOwned = await request(`/apps/library/items/${itemId}/sidebar`, otherUser, otherToken)
  sameResponse(unauthenticated, missing, 'unauthenticated response')
  sameResponse(nonOwned, missing, 'non-owned response')
  if (missing.status !== 404 || missing.contentType !== 'application/json' || missing.body.toString('utf8') !== '{"message":"Publication not found."}') {
    throw new Error('generic sidebar failure contract changed')
  }

  // Double-encoded malformed percent data reaches the application as the
  // malformed "%zz" route value; a literal malformed URI is rejected by HTTP.
  for (const invalid of ['0', '-1', '%2B7', '007', '2147483648', '999999999999999999999999999999', '7%5B%5D', '%37', '%25zz']) {
    sameResponse(await request(`/apps/library/items/${invalid}/sidebar`, primaryUser, primaryToken), missing, `invalid ID ${invalid}`)
  }

  const owned = await request(`/apps/library/items/${itemId}/sidebar`, primaryUser, primaryToken)
  if (owned.status !== 200 || owned.contentType !== 'application/json' || JSON.parse(owned.body.toString('utf8'))?.item?.id !== itemId) {
    throw new Error('authenticated user-scoped sidebar read failed')
  }
  console.log('sidebar_http_generic_404_byte_equivalent=true')
  console.log('sidebar_http_invalid_ids_generic_404=true')
  console.log('sidebar_http_owned_read=true')
} finally {
  for (const id of tokenIds(occ(['user:auth-tokens:list', primaryUser]), marker)) {
    try { occ(['user:auth-tokens:delete', primaryUser, id]) } catch {}
  }
  try { occ(['user:delete', otherUser]) } catch {}
}
