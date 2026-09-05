document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    const app = document.getElementById('library-app');

    if (!appContent || !app) {
        return;
    }

    appContent.style.height = '100%';
    appContent.style.minHeight = '0';
    appContent.style.overflowX = 'hidden';
    appContent.style.overflowY = 'auto';

    app.style.minHeight = '0';
});
