import { t } from '@nextcloud/l10n'

/** Small native modal shared by removals that do not need a file preview. */
export function confirmAction(message, label, destructive = true) {
  return new Promise(resolve => {
    const trigger = document.activeElement
    const dialog = document.createElement('dialog')
    dialog.className = 'library-confirm-dialog'
    dialog.setAttribute('aria-label', label)
    const heading = document.createElement('h2')
    heading.textContent = label
    const description = document.createElement('p')
    description.textContent = message
    const actions = document.createElement('div')
    actions.className = 'library-form-actions'
    const cancel = document.createElement('button'), confirm = document.createElement('button')
    cancel.type = confirm.type = 'button'
    cancel.textContent = t('library', 'Cancel')
    confirm.textContent = label
    confirm.className = destructive ? 'library-danger-action' : 'button primary'
    function finish(result) { dialog.close(); dialog.remove(); trigger?.focus(); resolve(result) }
    cancel.onclick = () => finish(false)
    confirm.onclick = () => finish(true)
    dialog.oncancel = event => { event.preventDefault(); finish(false) }
    actions.append(cancel, confirm)
    dialog.append(heading, description, actions)
    document.body.append(dialog)
    dialog.showModal()
    cancel.focus()
  })
}
