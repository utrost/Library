export const MAX_RUNTIME_CHUNKS = 8
export const MAX_RUNTIME_BYTES = 2_000_000
export const MAX_PACKAGE_FRONTEND_BYTES = 1_200_000

// tar output includes the module itself; leave bounded headroom for process
// buffering and diagnostics above the largest permitted runtime payload.
export const MAX_ARCHIVE_READ_BUFFER = MAX_RUNTIME_BYTES + 1_000_000
