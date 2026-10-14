const namedEntities = {
  '&quot;': '"',
  '&#039;': "'",
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
}

// Decode one HTML-attribute layer only. Decoding entities in separate passes
// would also turn literal text such as &amp;lt; into markup.
export function decodeHtmlAttribute(value) {
  return String(value ?? '').replace(/&(?:quot|#039|amp|lt|gt);/g, (entity) => namedEntities[entity])
}
