import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `hermes-library-separation-smoke-${Date.now()}`
const cookies = new Map()

function runOcc(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function runPhp(env, code) {
  return execFileSync('docker', ['exec', ...Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`]), '-u', 'www-data', container, 'php', '-r', code], {
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

function rememberCookies(headers) {
  const setCookies = typeof headers.getSetCookie === 'function' ? headers.getSetCookie() : [headers.get('set-cookie')].filter(Boolean)
  for (const line of setCookies) {
    const first = line.split(';', 1)[0]
    const eq = first.indexOf('=')
    if (eq > 0) cookies.set(first.slice(0, eq), first.slice(eq + 1))
  }
}

function cookieHeader() {
  return [...cookies.entries()].map(([key, value]) => `${key}=${value}`).join('; ')
}

function decodeInitialState(page) {
  const match = page.match(/id="initial-state-library-catalogue" value="([^"]+)"/)
  if (!match) throw new Error('missing initial state')
  const escaped = match[1]
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
  return JSON.parse(Buffer.from(escaped, 'base64').toString('utf8'))
}

function hidden(page, name) {
  const re = new RegExp(`name="${name}"[^>]*value="([^"]*)"|value="([^"]*)"[^>]*name="${name}"`)
  const match = page.match(re)
  return match ? (match[1] || match[2] || '') : ''
}

async function fetchText(pathOrUrl, token, options = {}) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const cookie = cookieHeader()
  const response = await fetch(url, {
    method: options.method || 'GET',
    redirect: options.redirect || 'follow',
    body: options.body,
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
      ...(cookie ? { Cookie: cookie } : {}),
      ...(options.headers || {}),
    },
  })
  rememberCookies(response.headers)
  return { status: response.status, text: await response.text(), location: response.headers.get('location') || '', url: response.url }
}

function metadataSnapshot(itemId) {
  return runPhp({ ITEM_ID: String(itemId) }, `
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$qb = $db->getQueryBuilder();
$result = $qb->select("id", "publication_type", "title", "subtitle", "creators", "publication", "publication_date", "language", "publisher", "metadata_source", "user_edited")
  ->from("library_items")
  ->where($qb->expr()->eq("id", $qb->createNamedParameter((int)getenv("ITEM_ID"))))
  ->executeQuery();
$row = $result->fetch();
$result->closeCursor();
echo json_encode($row ?: [], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\\n";
`).trim()
}

function metadataHash(snapshot) {
  return createHash('sha256').update(snapshot).digest('hex')
}

function cleanupTag(tagName) {
  if (!tagName) return 'temporary_tags_deleted=0\ntemporary_tags_remaining=0\n'
  return runPhp({ TAG_NAME: tagName }, `
require_once "/var/www/html/lib/base.php";
$m = \\OC::$server->get(\\OCP\\SystemTag\\ISystemTagManager::class);
$deleted = 0;
foreach ($m->getAllTags(true, null) as $tag) {
  if ($tag->getName() === getenv("TAG_NAME")) {
    $m->deleteTags([$tag->getId()]);
    $deleted++;
  }
}
$remaining = 0;
foreach ($m->getAllTags(true, null) as $tag) {
  if ($tag->getName() === getenv("TAG_NAME")) { $remaining++; }
}
echo "temporary_tags_deleted=$deleted\\n";
echo "temporary_tags_remaining=$remaining\\n";
`)
}

function cleanupComment(fileId, message) {
  if (!fileId || !message) return 'temporary_comments_deleted=0\n'
  return runPhp({ FILE_ID: String(fileId), MESSAGE: message }, `
require_once "/var/www/html/lib/base.php";
$m = \\OC::$server->get(\\OCP\\Comments\\ICommentsManager::class);
$deleted = 0;
foreach ($m->getForObject("files", getenv("FILE_ID"), 100) as $comment) {
  if ($comment->getMessage() === getenv("MESSAGE")) {
    if ($m->delete($comment->getId())) { $deleted++; }
  }
}
echo "temporary_comments_deleted=$deleted\\n";
`)
}

let token = ''
let tagName = ''
let commentMessage = ''
let fileId = ''
try {
  token = parseToken(runOcc(['user:add-app-password', '--name', tokenName, user]))
  if (!token) throw new Error('temporary app password was not created')

  const page = await fetchText('/apps/library/', token)
  const state = decodeInitialState(page.text)
  const first = state.items?.[0]
  if (!first?.id || !first?.fileId || !first?.detailsUrl) throw new Error('catalogue did not expose a smokeable item')
  fileId = String(first.fileId)

  const before = metadataSnapshot(first.id)
  const beforeHash = metadataHash(before)
  console.log(`metadata_before_hash=${beforeHash}`)

  const detail = await fetchText(first.detailsUrl, token)
  const requestToken = hidden(detail.text, 'requesttoken')
  if (!requestToken) throw new Error('detail page did not expose requesttoken')

  tagName = `library-separation-smoke-${Date.now()}`
  commentMessage = `Library metadata separation smoke ${Date.now()}`

  const tagBody = new URLSearchParams({ requesttoken: requestToken, returnTo: 'details', nextcloudTagName: tagName })
  const tagPost = await fetchText(new URL(`/apps/library/items/${first.id}/tags`, upstream).toString(), token, {
    method: 'POST',
    redirect: 'manual',
    body: tagBody,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  console.log(`tag_post_status=${tagPost.status}`)
  console.log(`tag_post_location_is_details=${tagPost.location.includes('/apps/library/items/')}`)

  const taggedDetail = await fetchText(first.detailsUrl, token)
  const commentToken = hidden(taggedDetail.text, 'requesttoken') || requestToken
  const commentBody = new URLSearchParams({ requesttoken: commentToken, returnTo: 'details', commentMessage })
  const commentPost = await fetchText(new URL(`/apps/library/items/${first.id}/comments`, upstream).toString(), token, {
    method: 'POST',
    redirect: 'manual',
    body: commentBody,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  console.log(`comment_post_status=${commentPost.status}`)
  console.log(`comment_post_location_is_details=${commentPost.location.includes('/apps/library/items/')}`)

  const afterDetail = await fetchText(first.detailsUrl, token)
  console.log(`detail_has_temp_tag=${afterDetail.text.includes(tagName)}`)
  console.log(`detail_has_temp_comment=${afterDetail.text.includes(commentMessage)}`)

  const after = metadataSnapshot(first.id)
  const afterHash = metadataHash(after)
  console.log(`metadata_after_hash=${afterHash}`)
  const unchanged = before === after
  if (unchanged) {
    console.log('metadata_unchanged_after_tag_comment=true')
  } else {
    console.log('metadata_unchanged_after_tag_comment=false')
  }

  const ok = [302, 303].includes(tagPost.status)
    && [302, 303].includes(commentPost.status)
    && tagPost.location.includes('/apps/library/items/')
    && commentPost.location.includes('/apps/library/items/')
    && afterDetail.text.includes(tagName)
    && afterDetail.text.includes(commentMessage)
    && unchanged
  if (!ok) process.exitCode = 1
} catch (error) {
  console.error(error?.stack || error)
  process.exitCode = 1
} finally {
  try {
    process.stdout.write(cleanupTag(tagName))
  } catch (error) {
    console.log('temporary_tag_cleanup_error=true')
    console.error(error?.message || error)
    process.exitCode = 1
  }
  try {
    process.stdout.write(cleanupComment(fileId, commentMessage))
  } catch (error) {
    console.log('temporary_comment_cleanup_error=true')
    console.error(error?.message || error)
    process.exitCode = 1
  }
  try {
    const tokenList = runOcc(['user:auth-tokens:list', user])
    for (const id of parseTokenIds(tokenList)) {
      runOcc(['user:auth-tokens:delete', user, id])
    }
    const remaining = runOcc(['user:auth-tokens:list', user]).includes(tokenName) ? 1 : 0
    console.log(`temp_token_remaining=${remaining}`)
  } catch (error) {
    console.log('temp_token_cleanup_error=true')
    console.error(error?.message || error)
    process.exitCode = 1
  }
}
