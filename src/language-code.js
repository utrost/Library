export const languageAliases = {
  ara: 'ar', chi: 'zh', zho: 'zh', dut: 'nl', nld: 'nl', eng: 'en',
  fre: 'fr', fra: 'fr', ger: 'de', deu: 'de', ita: 'it', jpn: 'ja', spa: 'es',
  por: 'pt', rus: 'ru',
}

export function normalizeLanguageCode(value) {
  const trimmed = value.trim().replace('_', '-')
  const match = /^([a-z]{2,3})(?:-([a-z]{2}))?$/i.exec(trimmed)
  return match ? (languageAliases[match[1].toLowerCase()] || match[1].toLowerCase()) + (match[2] ? `-${match[2].toUpperCase()}` : '') : trimmed
}
export function validLanguageCode(value) {
  const match = /^([a-z]{2,3})(?:-([A-Z]{2}))?$/.exec(value)
  if (!match) return false
  if (typeof Intl.DisplayNames !== 'function') return true
  const languageName = new Intl.DisplayNames(['en'], { type: 'language' }).of(match[1])
  if (!languageName || languageName.toLowerCase() === match[1] || languageName === 'Unknown language') return false
  if (!match[2]) return true
  const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(match[2])
  return Boolean(name && name !== match[2] && name !== 'Unknown Region')
}
