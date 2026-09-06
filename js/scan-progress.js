document.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('[data-library-scan-progress-url]');
    if (!panel) {
        return;
    }

    const progressUrl = panel.getAttribute('data-library-scan-progress-url');
    if (!progressUrl) {
        return;
    }

    const setText = (selector, value) => {
        const element = panel.querySelector(selector);
        if (element) {
            element.textContent = value === null || value === undefined ? '' : String(value);
        }
    };

    const renderJob = (job) => {
        if (!job) {
            return false;
        }

        setText('[data-library-scan-status]', job.status);
        setText('[data-library-scan-scope]', `${job.scopeType || 'all'}${job.rootId ? ` #${job.rootId}` : ''}`);
        setText('[data-library-scan-roots-total]', job.rootsTotal);
        setText('[data-library-scan-files-indexed]', job.filesIndexed);
        setText('[data-library-scan-error-count]', job.errorCount);
        setText('[data-library-scan-duration-seconds]', job.durationSeconds);
        setText('[data-library-scan-summary]', job.summary);

        return ['completed', 'failed'].includes(job.status);
    };

    const poll = () => {
        fetch(progressUrl, {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.ok ? response.json() : Promise.reject(new Error('scan progress request failed')))
            .then((payload) => {
                const done = renderJob(payload.job);
                if (!done) {
                    setTimeout(poll, 2000);
                }
            })
            .catch(() => {
                setTimeout(poll, 5000);
            });
    };

    const currentStatus = panel.querySelector('[data-library-scan-status]')?.textContent.trim() || '';
    if (!['completed', 'failed'].includes(currentStatus)) {
        setTimeout(poll, 2000);
    }
});
