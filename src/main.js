import { createApp } from 'vue'
import { loadState } from '@nextcloud/initial-state'
import App from './App.vue'

const state = loadState('library', 'catalogue', {})

createApp(App, { state }).mount('#library-vue-root')
