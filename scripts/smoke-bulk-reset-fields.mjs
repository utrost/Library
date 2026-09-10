import { execFileSync } from 'node:child_process'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `hermes-library-bulk-reset-smoke-${Date.now()}`

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

async function fetchText(pathOrUrl, token) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    headers: { Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` },
  })
  const text = await response.text()
  return { status: response.status, text }
}

function rowsState(ids) {
  const json = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $ids=${JSON.stringify(ids.map(Number))}; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("id", "title", "field_sources", "field_values", "user_edited", "metadata_source")->from("library_items")->where($qb->expr()->in("id", $qb->createNamedParameter($ids, \\OCP\\DB\\QueryBuilder\\IQueryBuilder::PARAM_INT_ARRAY)))->executeQuery(); $rows=[]; while($row=$res->fetch()){ $rows[]=$row; } $res->closeCursor(); echo json_encode($rows);`)
  return JSON.parse(json || '[]')
}

function seedRows(rows) {
  for (const row of rows) {
    const candidateTitle = `${row.title || 'Library smoke'} scanner bulk candidate`
    const manualTitle = `${row.title || 'Library smoke'} manual bulk title`
    runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("title", $qb->createNamedParameter(${JSON.stringify(manualTitle)}))->set("field_sources", $qb->createNamedParameter(${JSON.stringify(JSON.stringify({ title: 'filename' }))}))->set("field_values", $qb->createNamedParameter(${JSON.stringify(JSON.stringify({ title: candidateTitle }))}))->set("user_edited", $qb->createNamedParameter(1))->set("metadata_source", $qb->createNamedParameter("user"))->set("updated_at", $qb->createNamedParameter(time()))->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(row.id)})))->executeStatement();`)
  }
}

function restoreRows(rows) {
  for (const row of rows) {
    const fieldSources = Buffer.from(String(row.field_sources || '')).toString('base64')
    const fieldValues = Buffer.from(String(row.field_values || '')).toString('base64')
    runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $sources=base64_decode("${fieldSources}"); $values=base64_decode("${fieldValues}"); $qb->update("library_items")->set("title", $qb->createNamedParameter(${JSON.stringify(String(row.title || 'Untitled publication'))}))->set("field_sources", $qb->createNamedParameter($sources === "" ? null : $sources))->set("field_values", $qb->createNamedParameter($values === "" ? null : $values))->set("user_edited", $qb->createNamedParameter(${Number(row.user_edited || 0)}))->set("metadata_source", $qb->createNamedParameter(${JSON.stringify(String(row.metadata_source || 'filename'))}))->set("updated_at", $qb->createNamedParameter(time()))->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(row.id)})))->executeStatement();`)
  }
}

function fail(reason, extra = {}) {
  console.log(`bulk_reset_fields_smoke_ok=false reason=${reason}`)
  for (const [key, value] of Object.entries(extra)) {
    console.log(`${key}=${value}`)
  }
  process.exitCode = 1
}

let token = ''
let originalRows = []
try {
  token = parseToken(runDocker(['user:add-app-password', '--no-interaction', '--name', tokenName, user]))
  if (!token) {
    fail('temporary_app_password_not_created')
  } else {
    const page = await fetchText('/apps/library/?scannerConflicts=1&limit=2', token)
    const settings = await fetchText('/settings/user/library', token)
    const idsJson = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("id")->from("library_items")->where($qb->expr()->eq("user_id", $qb->createNamedParameter(${JSON.stringify(user)})))->setMaxResults(2)->executeQuery(); $ids=[]; while($row=$res->fetch()){ $ids[]=(int)$row["id"]; } $res->closeCursor(); echo json_encode($ids);`)
    const ids = JSON.parse(idsJson || '[]')
    if (ids.length < 2) {
      fail('not_enough_items')
    } else {
      originalRows = rowsState(ids)
      seedRows(originalRows)
      const settingsToken = settings.text.match(/name="requesttoken" value="([^"]+)"/)?.[1] || ''
      const bulkAction = settings.text.match(/class="library-form library-bulk-reset-fields-form"[\s\S]*?action="([^"]+)"/)?.[1] || '/apps/library/bulk/items/reset-fields'
      const postBody = new URLSearchParams({ requesttoken: settingsToken, itemIds: ids.join(', ') })
      const post = await fetch(new URL(bulkAction, upstream).toString(), {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
          requesttoken: settingsToken,
          'OCS-APIRequest': 'true',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: postBody,
        redirect: 'follow',
      })
      console.log(`bulk_reset_post_http=${post.status}`)
      console.log(`bulk_reset_post_final_url=${post.url}`)
      console.log(`bulk_reset_post_body_has_exception=${(await post.clone().text()).includes('Exception')}`)
      const result = { requestedItems: ids.length, resetItems: post.status < 400 ? ids.length : 0, skippedItems: post.status < 400 ? 0 : ids.length }
      const changed = rowsState(ids)
      const allReset = changed.every((row) => {
        const values = JSON.parse(row.field_values || '{}')
        return row.title === values.title && row.metadata_source === 'mixed' && Number(row.user_edited) === 1
      })

      console.log(`bulk_reset_settings_http=${settings.status}`)
      console.log(`bulk_reset_settings_form=${settings.text.includes('library-bulk-reset-fields-form')}`)
      console.log(`bulk_reset_conflict_page_http=${page.status}`)
      console.log(`bulk_reset_requested=${result.requestedItems ?? -1}`)
      console.log(`bulk_reset_applied=${result.resetItems ?? -1}`)
      console.log(`bulk_reset_skipped=${result.skippedItems ?? -1}`)
      console.log(`bulk_reset_all_titles_match_candidates=${allReset}`)

      if (settings.status !== 200 || !settings.text.includes('library-bulk-reset-fields-form') || Number(result.requestedItems || 0) !== ids.length || Number(result.resetItems || 0) !== ids.length || !allReset) {
        fail('bulk_reset_contract_failed')
      } else {
        console.log('bulk_reset_fields_smoke_ok=true')
      }
    }
  }
} catch (error) {
  fail('exception', { message: error instanceof Error ? error.message : String(error) })
} finally {
  if (originalRows.length > 0) {
    try { restoreRows(originalRows) } catch {}
    const restoredRows = rowsState(originalRows.map((row) => Number(row.id)))
    console.log(`bulk_reset_restored=${restoredRows.every((row) => originalRows.some((old) => Number(old.id) === Number(row.id) && old.title === row.title && (old.field_values || '') === (row.field_values || '')))}`)
  }
  if (token) {
    try {
      const tokenList = runDocker(['user:auth-tokens:list', user])
      for (const id of parseTokenIds(tokenList)) {
        runDocker(['user:auth-tokens:delete', user, id])
      }
      const remaining = parseTokenIds(runDocker(['user:auth-tokens:list', user])).length
      console.log(`temp_token_remaining=${remaining}`)
    } catch {
      console.log('temp_token_cleanup_failed=true')
    }
  }
}
