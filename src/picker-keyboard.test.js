import { expect, it } from 'vitest'
import { pickerIndex } from './picker-keyboard.js'
it('starts at each edge, wraps, and handles missing options', () => {
  expect(pickerIndex(-1, 'ArrowUp', 3)).toBe(2)
  expect(pickerIndex(-1, 'ArrowDown', 3)).toBe(0)
  expect(pickerIndex(0, 'ArrowUp', 3)).toBe(2)
  expect(pickerIndex(2, 'ArrowDown', 3)).toBe(0)
  expect(pickerIndex(1, 'ArrowUp', 0)).toBe(-1)
})
