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
            title.textContent = job.status === 'failed'
                ? (panel.dataset.libraryScanFailedText || 'Scan failed')
                : (panel.dataset.libraryScanCompletedText || 'Scan completed');
        }
        const finished = summary.querySelector('[data-library-scan-finished-at]');
        if (finished && job.finishedAt) {
            const date = new Date(job.finishedAt * 1000);
            finished.dateTime = date.toISOString();
            finished.textContent = date.toLocaleString();
        }
        summary.classList.remove('library-scan-completion-summary--completed', 'library-scan-completion-summary--failed');
        summary.classList.add(`library-scan-completion-summary--${job.status}`);
        summary.hidden = false;
    };

    const renderJob = (job) => {
        if (!job) {
            return false;
        }

        panel.dataset.libraryScanState = job.status;
        setText('[data-library-scan-status]', job.status);
        const badge = panel.querySelector('[data-library-scan-state-badge]');
        if (badge) {
            badge.textContent = panel.dataset[`libraryScanStatus${job.status[0].toUpperCase()}${job.status.slice(1)}`] || job.status;
        }
        const cancelForm = panel.querySelector('[data-library-active-scan-cancel]');
        if (cancelForm) {
            cancelForm.hidden = !['queued', 'running'].includes(job.status);
            const cancelButton = cancelForm.querySelector('[data-library-scan-cancel-button]');
            if (cancelButton) {
                cancelButton.textContent = job.status === 'queued'
                    ? panel.dataset.libraryScanCancelQueuedText
                    : panel.dataset.libraryScanCancelRunningText;
            }
        }
        const changes = panel.querySelector('[data-library-scan-changes-panel]');
        if (changes) {
            changes.hidden = job.status !== 'completed';
        }
        const errorExport = panel.querySelector('[data-library-metadata-errors-export]');
        if (errorExport) {
            errorExport.hidden = Number(job.metadataErrors || 0) === 0;
        }
        const historyJob = document.querySelector(`[data-library-scan-history-job-id="${Number(job.id)}"]`);
        if (historyJob) {
            const historyStatus = historyJob.querySelector('dd');
            if (historyStatus) {
                historyStatus.textContent = job.status;
            }
            const historyCancel = historyJob.querySelector('.library-scan-cancel-form');
            if (historyCancel) {
                historyCancel.hidden = !['queued', 'running'].includes(job.status);
            }
        }
        setText('[data-library-scan-scope]', job.scopeLabel || job.scopeType || 'all');
        setText('[data-library-scan-roots-total]', job.rootsTotal);
        setText('[data-library-scan-files-indexed]', job.filesIndexed);
        setText('[data-library-scan-error-count]', job.errorCount);
        setText('[data-library-scan-duration-seconds]', job.durationSeconds);
        setText('[data-library-scan-queued-seconds]', job.queuedSeconds);
        const timestampText = (value) => value ? new Date(value * 1000).toLocaleString() : '—';
        setText('[data-library-scan-run-started-at]', timestampText(job.runStartedAt));
        setText('[data-library-scan-last-progress-at]', timestampText(job.lastProgressAt));
        setText('[data-library-scan-current-path]', job.currentPath || '—');
        const stateMessages = {
            queued: panel.dataset.libraryScanQueuedText || 'Queued — waiting for the Nextcloud background worker.',
            queuedWarning: panel.dataset.libraryScanQueuedWarningText || 'This scan is still queued and no background worker has started it yet.',
            running: panel.dataset.libraryScanRunningText || 'Running — scan progress is updating.',
            stale: panel.dataset.libraryScanStaleText || 'Running, but progress is stale.',
        };
        const stateMessage = job.status === 'queued'
            ? (job.isQueuedTooLong ? stateMessages.queuedWarning : stateMessages.queued)
            : job.status === 'running'
                ? (job.isStale ? stateMessages.stale : stateMessages.running)
                : '';
        setText('[data-library-scan-state-message]', stateMessage);
        setText('[data-library-scan-summary]', job.summary);
        setText('[data-library-scan-files-added]', job.filesAdded);
        setText('[data-library-scan-paths-updated]', job.pathsUpdated);
        setText('[data-library-scan-files-unchanged]', job.filesUnchanged);
        setText('[data-library-scan-files-missing]', job.filesMissing);
        setText('[data-library-scan-metadata-errors]', job.metadataErrors);
        renderCompletionSummary(job);

        return ['completed', 'failed'].includes(job.status);
    };

    let pollCount = 0;

    const poll = () => {
        pollCount += 1;
        const url = new URL(progressUrl, window.location.href);
        if (pollCount % 5 === 0) {
            url.searchParams.set('includeTotal', '1');
        }

        fetch(url.toString(), {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.ok ? response.json() : Promise.reject(new Error('scan progress request failed')))
            .then((payload) => {
                if (payload.totalPublications !== null && payload.totalPublications !== undefined) {
                    setText('[data-library-total-publications]', payload.totalPublications);
                }
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
