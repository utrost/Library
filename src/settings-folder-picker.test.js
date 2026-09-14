import { beforeEach, describe, expect, it, vi } from 'vitest'
import folderPickerSource from '../js/settings-folder-picker-dialog.js?raw'

function loadFolderPicker(filepicker, dialogs = { filepicker }) {
  window.OC = { dialogs }
  window.eval(folderPickerSource)
  document.dispatchEvent(new Event('DOMContentLoaded'))
}

describe('settings folder picker', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main id="library-settings">
        <form><input name="path" value="/"><button type="submit" hidden
          data-library-folder-picker data-picker-title="Choose a folder"
          data-picker-error="Could not open the folder picker. Enter the path manually.">Choose folder</button></form>
      </main>`
  })

  it('calls the Nextcloud 34 legacy picker with its dialogs receiver and updates the existing POST field', () => {
    const dialogs = {
      FILEPICKER_TYPE_CHOOSE: 1,
      filepicker: vi.fn(function(_title, callback) {
        // NC34 core's OC.dialogs.filepicker reads picker constants through `this`.
        if (this.FILEPICKER_TYPE_CHOOSE !== 1) {
          throw new TypeError('invalid OC.dialogs receiver')
        }
        callback('Comics')
      }),
    }
    const form = document.querySelector('form')
    const submit = vi.fn(event => event.preventDefault())
    form.addEventListener('submit', submit)
    loadFolderPicker(dialogs.filepicker, dialogs)

    document.querySelector('button').click()

    expect(submit).not.toHaveBeenCalled()
    expect(dialogs.filepicker).toHaveBeenCalledWith(
      'Choose a folder', expect.any(Function), false, 'httpd/unix-directory', true, undefined, '/',
    )
    expect(document.querySelector('input[name="path"]').value).toBe('/Comics')
  })

  it('does not show an error when the picker promise rejects after opening', async () => {
    loadFolderPicker(vi.fn(() => Promise.reject(new Error('picker closed'))))
    document.querySelector('button').click()
    await Promise.resolve()

    expect(document.querySelector('[data-library-folder-picker-error]')).toBeNull()
    expect(document.querySelector('input[name="path"]').value).toBe('/')
  })

  it('shows an accessible error when opening the picker throws synchronously', () => {
    loadFolderPicker(vi.fn(() => { throw new Error('broken') }))
    document.querySelector('button').click()

    const feedback = document.querySelector('[data-library-folder-picker-error]')
    expect(feedback?.getAttribute('role')).toBe('alert')
    expect(feedback?.textContent).toBe('Could not open the folder picker. Enter the path manually.')
    expect(document.querySelector('input[name="path"]').value).toBe('/')
  })
})
