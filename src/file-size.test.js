import { describe, expect, it } from 'vitest'
import { formatFileSize } from './file-size.js'

describe('file size presentation', () => {
  it('keeps unknown sizes distinct from zero-byte files', () => {
    for (const value of [null, undefined, '', -1, NaN, Infinity, 'invalid']) expect(formatFileSize(value)).toBe('—')
    expect(formatFileSize(0)).toBe('0 byte')
  })
  it('formats indexed bytes in readable units and exposes exact bytes', () => {
    expect(formatFileSize(1200)).toBe('1.2 kB')
    expect(formatFileSize(1234567)).toBe('1.23 MB')
    expect(formatFileSize('2000000000')).toBe('2 GB')
    expect(formatFileSize(1234567, 'en', true)).toBe('1,234,567 byte')
    expect(formatFileSize(1200, 'de')).toContain('1,2')
  })
})
