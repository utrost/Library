/** Indexed file sizes use decimal units; unknown sizes must not look like empty files. */
export function formatFileSize(value, locale = 'en', exact = false) {
  if (value === null || value === undefined || value === '') return '—'
  const bytes = Number(value)
  if (!Number.isFinite(bytes) || bytes < 0) return '—'
  const units = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte']
  const exponent = exact || bytes < 1000 ? 0 : Math.min(4, Math.floor(Math.log10(bytes) / 3))
  return new Intl.NumberFormat(locale, { style: 'unit', unit: units[exponent], maximumFractionDigits: exponent ? 2 : 0 }).format(bytes / 1000 ** exponent)
}
