document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('library-app');
    if (!app) {
        return;
    }

    const containers = [
        document.documentElement,
        document.body,
        document.getElementById('content'),
        document.getElementById('app-content'),
    ];

    for (const container of containers) {
        if (!container) {
            continue;
        }
        container.style.height = 'auto';
        container.style.minHeight = 'calc(100vh - var(--header-height))';
        container.style.overflowY = 'auto';
    }

    app.style.height = 'auto';
    app.style.minHeight = 'calc(100vh - var(--header-height))';
    app.style.overflow = 'visible';
});
