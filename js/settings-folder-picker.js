document.addEventListener('DOMContentLoaded', () => {
    const filepicker = window.OC?.dialogs?.filepicker;
    if (typeof filepicker !== 'function') {
        return;
    }

    document.querySelectorAll('#library-settings [data-library-folder-picker]').forEach((button) => {
        const form = button.closest('form');
        const pathInput = form?.querySelector('input[name="path"]');
        if (!pathInput) {
            return;
        }

        button.hidden = false;
        button.addEventListener('click', () => {
            filepicker(
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
                1,
                pathInput.value || '/'
            );
        });
    });
});
