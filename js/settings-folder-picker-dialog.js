document.addEventListener('DOMContentLoaded', () => {
    const dialogs = window.OC?.dialogs;
    if (typeof dialogs?.filepicker !== 'function') {
        return;
    }

    document.querySelectorAll('#library-settings [data-library-folder-picker]').forEach((button) => {
        const form = button.closest('form');
        const pathInput = form?.querySelector('input[name="path"]');
        if (!pathInput) {
            return;
        }

        button.hidden = false;
        const showPickerError = () => {
            let feedback = form.querySelector('[data-library-folder-picker-error]');
            if (!feedback) {
                feedback = document.createElement('p');
                feedback.className = 'library-validation-feedback';
                feedback.setAttribute('role', 'alert');
                feedback.dataset.libraryFolderPickerError = '';
                button.insertAdjacentElement('afterend', feedback);
            }
            feedback.textContent = button.dataset.pickerError;
        };

        button.addEventListener('click', (event) => {
            event.preventDefault();
            try {
                const pickerResult = dialogs.filepicker(
                    button.dataset.pickerTitle,
                    (selection) => {
                        const selectedPath = Array.isArray(selection) ? selection[0] : selection;
                        if (typeof selectedPath === 'string' && selectedPath !== '') {
                            pathInput.value = selectedPath.startsWith('/') ? selectedPath : `/${selectedPath}`;
                            pathInput.dispatchEvent(new Event('change', { bubbles: true }));
                            pathInput.focus();
                        }
                    },
                    false,
                    'httpd/unix-directory',
                    true,
                    undefined,
                    pathInput.value || '/'
                );
                if (pickerResult && typeof pickerResult.catch === 'function') {
                    pickerResult.catch(() => {
                        // A rejection can mean the already-open picker was closed.
                    });
                }
            } catch (error) {
                showPickerError();
            }
        });
    });
});
