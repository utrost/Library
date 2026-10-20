import { createApp, h, ref } from 'vue'
import MetadataValuePicker from './components/MetadataValuePicker.vue'

/** Enhance server-rendered review forms without changing their POST/CSRF contract. */
export function mountMaintenance() {
  const toggle = document.querySelector('[data-library-navigation-open]')
  const menu = document.querySelector('#library-maintenance-menu')
  if (toggle && menu) {
    document.querySelector('.library-maintenance-navigation-mobile').hidden = true
    toggle.hidden = false
    toggle.addEventListener('click', () => { menu.showModal(); toggle.setAttribute('aria-expanded', 'true') })
    menu.querySelector('[data-library-navigation-close]').addEventListener('click', () => menu.close())
    menu.addEventListener('click', event => {
      const rect = menu.getBoundingClientRect()
      if (event.target === menu && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) menu.close()
    })
    menu.addEventListener('close', () => { toggle.setAttribute('aria-expanded', 'false'); toggle.focus() })
    const desktop = window.matchMedia('(min-width: 1025px)')
    desktop.addEventListener('change', () => { if (desktop.matches && menu.open) menu.close() })
  }
  for (const [index, mount] of [...document.querySelectorAll('[data-library-language-picker]')].entries()) {
    const form = mount.closest('form')
    const field = form.querySelector('[name="codes"]')
    const apply = form.querySelector('[name="action"][value="map"]')
    const app = createApp({
      setup() {
        const value = ref(field.value.replaceAll(';', '\n'))
        return () => h(MetadataValuePicker, {
          kind: 'language', modelValue: value.value,
          'onUpdate:modelValue': next => {
            value.value = next
            field.value = next.split('\n').filter(Boolean).join(';')
            apply.disabled = !field.value
          },
        })
      },
    })
    app.config.idPrefix = `library-review-language-${index}`
    app.mount(mount)
    field.required = false
    field.type = 'hidden'
    field.closest('label').hidden = true
    mount.hidden = false
    apply.disabled = !field.value
  }
}
