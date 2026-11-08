/* Library's native Dashboard widget. No external requests or shared private metadata. */
(function () {
  'use strict';
  function register() {
    if (!window.OCA?.Dashboard) return;
    OCA.Dashboard.register('library', function (element) {
      const status = document.createElement('p');
      status.setAttribute('role', 'status');
      const list = document.createElement('ul');
      list.className = 'library-dashboard-books';
      const reload = document.createElement('button');
      reload.type = 'button'; reload.textContent = t('library', 'Refresh');
      const home = document.createElement('a');
      home.href = OC.generateUrl('/apps/library/?home=1');
      home.textContent = t('library', 'Open Library');
      const actions = document.createElement('div');
      actions.className = 'library-dashboard-actions';
      actions.append(reload, home);
      element.replaceChildren(status, list, actions);
      let busy = false;
      async function load() {
        if (busy || !element.isConnected) return;
        busy = true; reload.disabled = true; status.textContent = t('library', 'Loading…');
        try {
          const response = await fetch(OC.getRootPath() + '/ocs/v2.php/apps/dashboard/api/v1/widget-items?format=json&widgets[]=library&limit=7', { credentials: 'same-origin', cache: 'no-store', headers: { 'OCS-APIRequest': 'true', Accept: 'application/json' } });
          if (!response.ok) throw new Error('unavailable');
          const body = await response.json();
          if (!element.isConnected) return;
          const rows = body.ocs?.data?.library || [];
          list.replaceChildren();
          for (const row of rows) {
            const item = document.createElement('li'), link = document.createElement('a'), title = document.createElement('span'), subtitle = document.createElement('small');
            // Accept only local Library links, even if an unexpected response reaches this widget.
            const target = new URL(row.link, window.location.href);
            if (target.origin !== window.location.origin || !target.pathname.startsWith(OC.generateUrl('/apps/library'))) continue;
            link.href = target.href; title.textContent = row.title; subtitle.textContent = row.subtitle;
            if (row.iconUrl) {
              const cover=new URL(row.iconUrl,window.location.href);
              if (cover.origin===window.location.origin && cover.pathname.startsWith(OC.generateUrl('/apps/library'))) { const image=document.createElement('img');image.src=cover.href;image.alt='';image.loading='lazy';image.addEventListener('error',()=>image.remove(),{once:true});link.append(image); }
            }
            link.append(title, subtitle); item.append(link); list.append(item);
          }
          status.textContent = rows.length ? '' : t('library', 'No books in this section yet.');
        } catch { if (element.isConnected) status.textContent = t('library', 'Could not load books. Use Refresh to try again.'); }
        finally { busy = false; reload.disabled = false; }
      }
      reload.addEventListener('click', load);
      load();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register, { once: true }); else register();
})();
