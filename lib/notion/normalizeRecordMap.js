function unwrapRecordEntry(entry) {
  let current = entry
  let wrapperMetadata = {}
  let depth = 0

  while (
    depth < 3 &&
    current &&
    typeof current === 'object' &&
    !current.id &&
    current.value &&
    typeof current.value === 'object'
  ) {
    const { value, ...metadata } = current
    wrapperMetadata = { ...wrapperMetadata, ...metadata }
    current = value
    depth++
  }

  if (depth === 0) {
    return entry
  }

  return {
    ...wrapperMetadata,
    value: current
  }
}

/**
 * notion-client 7.12 returns some record-map tables as entry.value.value.
 * Keep the rest of the old NotionNext data handling compatible by removing
 * only that wrapper while preserving metadata such as spaceId and role.
 */
export function normalizeRecordMap(recordMap) {
  if (!recordMap || typeof recordMap !== 'object') {
    return recordMap
  }

  const normalized = { ...recordMap }

  Object.entries(recordMap).forEach(([tableName, table]) => {
    if (
      tableName === '__version__' ||
      !table ||
      typeof table !== 'object' ||
      Array.isArray(table)
    ) {
      return
    }

    const entries = Object.entries(table)
    if (!entries.some(([, entry]) => entry?.value?.value)) {
      return
    }

    normalized[tableName] = Object.fromEntries(
      entries.map(([id, entry]) => [id, unwrapRecordEntry(entry)])
    )
  })

  return normalized
}
