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

    const renderCompletionSummary = (job) => {
        const summary = panel.querySelector('[data-library-scan-completion-summary]');
        if (!summary || !job || !['completed', 'failed'].includes(job.status)) {
            return;
        }
        const title = summary.querySelector('[data-library-scan-completion-title]');
        if (title) {
            title.textContent = job.status === 'failed' ? 'Scan failed' : 'Scan completed';
        }
        const finished = summary.querySelector('[data-library-scan-finished-at]');
        if (finished && job.finishedAt) {
            const date = new Date(job.finishedAt * 1000);
            finished.dateTime = date.toISOString();
            finished.textContent = date.toLocaleString();
        }
        summary.classList.remove('library-scan-completion-summary--completed', 'library-scan-completion-summary--failed');
        summary.classList.add(`library-scan-completion-summary--${job.status}`);
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
        setText('[data-library-scan-files-added]', job.filesAdded);
        setText('[data-library-scan-paths-updated]', job.pathsUpdated);
        setText('[data-library-scan-files-unchanged]', job.filesUnchanged);
        setText('[data-library-scan-files-missing]', job.filesMissing);
        setText('[data-library-scan-metadata-errors]', job.metadataErrors);
        renderCompletionSummary(job);

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
