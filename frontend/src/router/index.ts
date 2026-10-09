import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { services } from '../data/content'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Consultoría legal, ingeniería y negocios' } },
    {
      path: '/nosotros',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'Nosotros' },
    },
    {
      path: '/servicios',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Servicios' },
    },
    {
      path: '/servicios/:slug',
      component: () => import('../views/ServicesView.vue'),
      beforeEnter: (to) => services.some((s) => s.id === to.params.slug) || '/servicios',
    },
    {
      path: '/contacto',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contacto' },
    },
    {
      path: '/privacidad',
      component: () => import('../views/PrivacyView.vue'),
      meta: { title: 'Privacidad' },
    },
    {
      path: '/accesibilidad',
      component: () => import('../views/AccessibilityView.vue'),
      meta: { title: 'Accesibilidad' },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Página no encontrada' },
    },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash === '#especialidades') return { el: '#especialidades', top: 30, behavior: 'smooth' }
    return { top: 0, behavior: 'instant' }
  },
})
router.afterEach((to) => {
  const service = services.find((s) => s.id === to.params.slug)
  const title = service?.title || to.meta.title || 'Servicios'
  const description =
    service?.description ||
    'Consultora Munter & Asociados en Manchay, Pachacámac. Asesoría legal, ingeniería, contabilidad, comercio exterior y diseño.'
  document.title = `${title} | Consultora Munter & Asociados`
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute('href', `https://consultora-munter.vercel.app${to.path}`)
})
export default router
