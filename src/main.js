import { createApp } from 'vue'
import { loadState } from '@nextcloud/initial-state'
import App from './App.vue'

function reportStartupFailure() {
  window.LibraryStartupWatchdog?.fail()
}

function validInitialState(value) {
  return value !== null
    && typeof value === 'object'
    && !Array.isArray(value)
    && Array.isArray(value.items)
    && value.activeFilters !== null
    && typeof value.activeFilters === 'object'
    && !Array.isArray(value.activeFilters)
    && value.cataloguePagination !== null
    && typeof value.cataloguePagination === 'object'
    && !Array.isArray(value.cataloguePagination)
}

try {
  const initialState = loadState('library', 'catalogue', null)
  const mountTarget = document.querySelector('#library-vue-root')

  if (!mountTarget || !validInitialState(initialState)) {
    throw new Error('Library startup prerequisites are unavailable')
  }

  const state = {
    ...initialState,
    requestToken: mountTarget.dataset.requestToken || initialState.requestToken || '',
  }

  createApp(App, { state }).mount(mountTarget)
  window.LibraryStartupWatchdog?.mounted()
} catch (error) {
  reportStartupFailure()
  console.error('[library] Vue startup failed', error)
}
