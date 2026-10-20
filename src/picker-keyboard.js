/** Shared cyclic navigation; an unopened picker starts at the appropriate edge. */
export function pickerIndex(current, key, count) {
  if (!count) return -1
  if (current < 0 || current >= count) return key === 'ArrowUp' ? count - 1 : 0
  return (current + (key === 'ArrowUp' ? -1 : 1) + count) % count
}
