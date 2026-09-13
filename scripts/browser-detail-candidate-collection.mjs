export function collectCanonicalDetailCandidates(hrefs, origin) {
  const reservedIds = new Set([910001, 910002, 910003])
  let base
  try {
    base = new URL(origin)
  } catch {
    return []
  }

  const candidates = []
  for (const href of Array.isArray(hrefs) ? hrefs : []) {
    if (typeof href !== 'string') continue
    try {
      const url = new URL(href)
      if (url.origin !== base.origin || url.search !== '' || url.hash !== ''
        || url.username !== '' || url.password !== '' || url.pathname.includes('%')) continue
      const match = /^\/apps\/library\/items\/([1-9]\d*)$/.exec(url.pathname)
      if (!match) continue
      const id = Number(match[1])
      if (!Number.isSafeInteger(id) || String(id) !== match[1] || reservedIds.has(id)) continue
      candidates.push(url.pathname)
    } catch {
      // Invalid and non-absolute browser href values are not candidates.
    }
  }
  return [...new Set(candidates)]
}

export function captureCanonicalDetailCandidates(observation) {
  const candidates = collectCanonicalDetailCandidates(observation?.hrefs, observation?.origin)
  if (candidates.length === 0) {
    const error = new Error('no_real_detail_candidates_captured')
    error.code = 'no_real_detail_candidates_captured'
    throw error
  }
  return candidates
}
