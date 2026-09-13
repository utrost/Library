document.addEventListener('DOMContentLoaded', () => {
    const status = document.querySelector('[data-library-operation-status]');
    if (!status) {
        return;
    }

    const statusText = status.querySelector('[data-library-operation-status-text]');
    const spinner = status.querySelector('.icon-loading-small');
    const forms = document.querySelectorAll('#library-settings form[method="post"]');

    forms.forEach((form) => {
        form.addEventListener('submit', () => {
            status.hidden = false;
            status.setAttribute('aria-busy', 'true');
            if (statusText) {
                statusText.textContent = status.dataset.runningText;
            }
            if (spinner) {
                spinner.hidden = false;
            }
            status.scrollIntoView({ block: 'nearest' });

            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.disabled = true;
            }
        });
    });

    const scanStatus = document.querySelector('[data-library-scan-status]');
    if (!scanStatus || !statusText) {
        return;
    }

    const reflectScanStatus = () => {
        const value = scanStatus.textContent.trim();
        if (['queued', 'running'].includes(value)) {
            status.hidden = false;
            status.setAttribute('aria-busy', 'true');
            if (spinner) {
                spinner.hidden = false;
            }
            statusText.textContent = status.dataset.runningText;
        } else if (value === 'completed' || value === 'failed') {
            status.hidden = false;
            status.removeAttribute('aria-busy');
            if (spinner) {
                spinner.hidden = true;
            }
            statusText.textContent = value === 'completed' ? status.dataset.completedText : status.dataset.failedText;
        }
    };

    reflectScanStatus();
    new MutationObserver(reflectScanStatus).observe(scanStatus, { childList: true, characterData: true, subtree: true });
});
