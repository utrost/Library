/* Context help for server-rendered settings and maintenance pages. */
(() => {
  const setup = () => {
    let active = null
    const close = () => { if (active) active.hidden = true; active = null }
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close() })
    document.addEventListener('pointerdown', event => { if (active && !active.contains(event.target) && !event.target.closest('[data-library-help-button]')) close() })
    window.addEventListener('scroll', event => { if (active && !active.contains(event.target instanceof Node ? event.target : null) && document.activeElement?.getAttribute('aria-describedby') !== active.id) close() }, true)
    document.querySelectorAll('[data-library-help]').forEach((content, index) => {
      const scope = content.closest('form, section, article, .section') || content.parentElement
      const candidates = [...scope.querySelectorAll('label, h1, h2, h3, h4, summary')].filter(node => !node.contains(content) && Boolean(node.compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING))
      const target = candidates.at(-1) || content.previousElementSibling
      if (!target) return // Retain readable fallback if there is no appropriate label.
      const button = document.createElement('button')
      button.type = 'button'; button.textContent = '?'; button.className = 'library-context-help-button'
      button.dataset.libraryHelpButton = 'true'
      button.setAttribute('aria-label', window.OC?.L10N?.translate('library', 'Help') || 'Help')
      content.id ||= `library-context-help-${index}`
      button.setAttribute('aria-describedby', content.id)
      content.classList.add('library-context-help-popup'); content.setAttribute('role', 'tooltip'); content.hidden = true
      let timer
      const show = () => {
        clearTimeout(timer); close(); active = content
        document.body.append(content); content.hidden = false
        const rect = button.getBoundingClientRect()
        content.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - 336))}px`
        content.style.top = `${Math.max(8, rect.bottom + content.offsetHeight + 12 < window.innerHeight ? rect.bottom + 8 : rect.top - content.offsetHeight - 8)}px`
      }
      const leave = () => { timer = setTimeout(() => { if (active === content && document.activeElement !== button) close() }, 150) }
      button.addEventListener('focus', show); button.addEventListener('blur', leave)
      button.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); show() })
      target.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') show() }); target.addEventListener('pointerleave', leave)
      button.addEventListener('pointerenter', show); button.addEventListener('pointerleave', leave)
      content.addEventListener('pointerenter', () => clearTimeout(timer)); content.addEventListener('pointerleave', leave)
      if (target.matches('button, summary')) target.after(button)
      else {
        if (target.matches('label')) {
          const control = target.control
          if (control && !target.htmlFor) {
            control.id ||= `library-context-help-control-${index}`
            target.htmlFor = control.id
          }
          if (control && !control.hasAttribute('aria-label') && !control.hasAttribute('aria-labelledby')) control.setAttribute('aria-label', target.textContent.trim())
          const caption = document.createElement('span')
          caption.className = 'library-context-help-caption'
          for (const node of [...target.childNodes]) {
            if (node === control || (node.nodeType === Node.ELEMENT_NODE && node.contains(control))) break
            caption.append(node)
          }
          caption.append(' ', button)
          target.prepend(caption)
          return
        } else if (target.matches('h1, h2, h3, h4') && !target.hasAttribute('aria-label')) target.setAttribute('aria-label', target.textContent.trim())
        target.append(' ', button)
      }
    })
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup, { once: true })
  else setup()
})()
