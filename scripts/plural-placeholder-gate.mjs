export function orderedPrintfPlaceholders(value) {
  return [...String(value).matchAll(/%(?:n|s)/g)].map((match) => match[0])
}

export function pluralSourceForms(key) {
  const match = String(key).match(/^_(.*)_::_((?:.|\n)*)_$/u)
  return match ? [match[1], match[2]] : null
}

export function evaluatePluralPlaceholderIntegrity(key, variants) {
  const forms = pluralSourceForms(key)
  if (!forms || !Array.isArray(variants) || variants.length === 0) return { pass: false, expected: [], variants: [] }
  const sourceOrders = forms.map(orderedPrintfPlaceholders)
  const sourceContractConsistent = JSON.stringify(sourceOrders[0]) === JSON.stringify(sourceOrders[1])
  const expected = sourceOrders[0]
  const variantOrders = variants.map(orderedPrintfPlaceholders)
  return {
    pass: sourceContractConsistent && variantOrders.every((order) => JSON.stringify(order) === JSON.stringify(expected)),
    sourceContractConsistent,
    expected,
    variants: variantOrders,
  }
}
