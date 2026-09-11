(function () {
    'use strict';

    var DEFAULT_TIMEOUT = 10000;
    var startedAt = Date.now();
    var timer = null;
    var settled = false;
    var status = null;
    var assetMarker = '';

    function clearTimer() {
        if (timer !== null) {
            window.clearTimeout(timer);
            timer = null;
        }
    }

    function reveal() {
        status = status || document.getElementById('library-startup-status');
        if (settled) {
            return;
        }
        if (!status) {
            clearTimer();
            if (document.readyState === 'loading') {
                timer = window.setTimeout(reveal, 50);
            }
            return;
        }
        assetMarker = assetMarker || status.dataset.libraryMainScript || '';
        clearTimer();
        status.hidden = false;
    }

    function isLibraryModuleUrl(value) {
        status = status || document.getElementById('library-startup-status');
        assetMarker = assetMarker || (status && status.dataset.libraryMainScript) || '';
        return assetMarker !== '' && typeof value === 'string' && value.indexOf(assetMarker) !== -1;
    }

    window.LibraryStartupWatchdog = {
        mounted: function () {
            settled = true;
            clearTimer();
            if (status) {
                status.hidden = true;
            }
        },
        fail: reveal,
    };

    timer = window.setTimeout(reveal, DEFAULT_TIMEOUT);

    document.addEventListener('DOMContentLoaded', function () {
        var appContent = document.getElementById('app-content');
        var app = document.getElementById('library-app');
        if (appContent && app) {
            appContent.style.height = '100%';
            appContent.style.minHeight = '0';
            appContent.style.overflowX = 'hidden';
            appContent.style.overflowY = 'auto';
            app.style.minHeight = '0';
        }
        status = document.getElementById('library-startup-status');
        if (!status) {
            return;
        }
        assetMarker = status.dataset.libraryMainScript || '';
        var timeout = Number(status.dataset.libraryStartupTimeout);
        if (!Number.isFinite(timeout) || timeout < 1000) {
            timeout = DEFAULT_TIMEOUT;
        }
        var retry = status.querySelector('[data-library-retry]');
        if (retry) {
            retry.addEventListener('click', function () { window.location.reload(); });
        }
        clearTimer();
        if (!settled) {
            var remaining = timeout - (Date.now() - startedAt);
            if (remaining <= 0) {
                reveal();
            } else {
                timer = window.setTimeout(reveal, remaining);
            }
        }
    });

    window.addEventListener('error', function (event) {
        var targetUrl = event.target && (event.target.src || event.target.href);
        if (isLibraryModuleUrl(targetUrl) || isLibraryModuleUrl(event.filename)) {
            reveal();
        }
    }, true);

    window.addEventListener('unhandledrejection', function (event) {
        var detail = String(event.reason && (event.reason.stack || event.reason.message) || event.reason || '');
        if (isLibraryModuleUrl(detail) || /failed to fetch dynamically imported module|module script/i.test(detail)) {
            reveal();
        }
    });

    document.addEventListener('securitypolicyviolation', function (event) {
        if (isLibraryModuleUrl(event.blockedURI) || isLibraryModuleUrl(event.sourceFile)) {
            reveal();
        }
    });
}());
