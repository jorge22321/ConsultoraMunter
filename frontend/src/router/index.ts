import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { services } from '../data/content'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { title: 'Consultoría legal, ingeniería y negocios', layout: 'home' },
    },
    {
      path: '/nosotros',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'Nuestra consultora', layout: 'about' },
    },
    {
      path: '/servicios',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Nuestros servicios', layout: 'services' },
    },
    {
      path: '/servicios/:slug',
      component: () => import('../views/ServicesView.vue'),
      meta: { layout: 'services' },
      beforeEnter: (to) => services.some((s) => s.id === to.params.slug) || '/servicios',
    },
    {
      path: '/contacto',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contacto', layout: 'contact' },
    },
    {
      path: '/privacidad',
      component: () => import('../views/PrivacyView.vue'),
      meta: { title: 'Privacidad', layout: 'privacy' },
    },
    {
      path: '/accesibilidad',
      component: () => import('../views/AccessibilityView.vue'),
      meta: { title: 'Accesibilidad', layout: 'privacy' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash === '#especialidades') return { el: '#comp-mmof786q', top: 90, behavior: 'smooth' }
    return { top: 0, behavior: 'instant' }
  },
})
router.beforeResolve(async (to) => {
  const href = `/infinity-layout/${to.meta.layout || 'home'}.css`
  const previous = document.getElementById('page-layout') as HTMLLinkElement | null
  if (previous?.getAttribute('href') === href) return
  await new Promise<void>((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = () => {
      previous?.remove()
      link.id = 'page-layout'
      resolve()
    }
    link.onerror = () => {
      link.remove()
      reject(new Error('No se pudo cargar el diseño.'))
    }
    document.head.append(link)
  })
})
router.afterEach((to) => {
  const service = services.find((s) => s.id === to.params.slug)
  document.title = `${service?.title || to.meta.title || 'Servicios'} | Munter & Asociados`
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      service?.description ||
        'Consultora Munter & Asociados en Manchay, Pachacámac. Derecho, arquitectura e ingeniería, contabilidad, comercio exterior, marketing y diseño.',
    )
})
export default router
