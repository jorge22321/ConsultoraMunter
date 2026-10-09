import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

/** Local Vue behavior for the preserved reference markup; no Wix runtime. */
export function useOriginalLayout() {
  const router = useRouter()
  const updateHeader = () => document.body.classList.toggle('munter-scrolled', window.scrollY > 80)
  const updateViewport = () =>
    document.body.style.setProperty(
      '--scrollbar-width',
      `${window.innerWidth - document.documentElement.clientWidth}px`,
    )
  function setPanel(button: HTMLElement, open: boolean) {
    const panel = document.getElementById(button.getAttribute('aria-controls') || '')
    if (!panel) return
    const wrapper = panel.closest<HTMLElement>('[role="region"]') || panel
    button.setAttribute('aria-expanded', String(open))
    wrapper.dataset.localCollapsed = String(!open)
    wrapper.querySelectorAll('[class*="isContentHidden"]').forEach((el) => {
      Array.from(el.classList)
        .filter((c) => c.includes('isContentHidden'))
        .forEach((c) => el.classList.remove(c))
    })
    const icon = button.querySelector('svg')
    if (icon) icon.style.transform = open ? 'rotate(180deg)' : ''
  }
  function onClick(event: MouseEvent) {
    const target = event.target as Element
    const menu = target.closest<HTMLElement>('.wixui-hamburger-open-button')
    if (menu) {
      document.dispatchEvent(new CustomEvent('munter:menu', { detail: menu }))
      return
    }
    const accordion = target.closest<HTMLElement>('button[aria-controls][aria-expanded]')
    if (accordion) {
      setPanel(accordion, accordion.getAttribute('aria-expanded') !== 'true')
      return
    }
    if (target.closest('#SKIP_TO_CONTENT_BTN')) {
      const main = document.querySelector('main')
      main?.setAttribute('tabindex', '-1')
      main?.focus()
      return
    }
    const link = target.closest<HTMLAnchorElement>('a')
    if (
      !link ||
      event.defaultPrevented ||
      event.button ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return
    if (link.dataset.anchor === 'SCROLL_TO_TOP') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const href = link.getAttribute('href') || ''
    if (
      href.startsWith('/') &&
      !href.startsWith('//') &&
      (!link.target || link.target === '_self') &&
      !link.hasAttribute('download')
    ) {
      event.preventDefault()
      void router.push(href)
    }
  }
  onMounted(() => {
    document.body.classList.add('responsive')
    updateViewport()
    updateHeader()
    document
      .querySelectorAll('main [id]')
      .forEach((el) => el.setAttribute('data-motion-enter', 'done'))
    document
      .querySelectorAll<HTMLElement>('button[aria-controls][aria-expanded]')
      .forEach((button) => setPanel(button, button.getAttribute('aria-expanded') === 'true'))
    window.addEventListener('resize', updateViewport)
    window.addEventListener('scroll', updateHeader, { passive: true })
    document.addEventListener('click', onClick)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateViewport)
    window.removeEventListener('scroll', updateHeader)
    document.removeEventListener('click', onClick)
  })
}
