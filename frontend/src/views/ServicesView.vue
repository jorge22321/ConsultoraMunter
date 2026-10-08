<script setup lang="ts">
import { useOriginalLayout } from '../composables/useOriginalLayout'
import SiteHeader from '../components/SiteHeader.vue'
import PageCover from '../components/PageCover.vue'
import SiteFooter from '../components/SiteFooter.vue'
import ServiceBlocks from '../components/ServiceBlocks.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '../data/content'
const route = useRoute()
const pageTitle = computed(
  () => services.find((s) => s.id === route.params.slug)?.title || 'Servicios',
)
const pageCover = computed(
  () =>
    services.find((service) => service.id === route.params.slug)?.image ||
    '/images/portada-derecho.jpg',
)
useOriginalLayout()
</script>
<template>
  <div id="SITE_CONTAINER">
    <div id="main_MF" class="main_MF">
      <div
        id="SCROLL_TO_TOP"
        class="qe3oTb ignore-focus SCROLL_TO_TOP"
        role="region"
        tabindex="-1"
        aria-label="Inicio de la página"
      >
        <span class="TvbeET">Inicio de la página</span>
      </div>
      <button
        id="SKIP_TO_CONTENT_BTN"
        class="SKIP_TO_CONTENT_BTN BqYkvS has-custom-focus"
        tabindex="0"
      >
        Saltar al contenido
      </button>
      <div id="site-root" class="site-root">
        <div id="masterPage" class="masterPage css-editing-scope">
          <div id="SITE_PAGES" class="Y3K28_ SITE_PAGES">
            <div id="ia1ff" class="ETqrjz theme-vars ia1ff">
              <div class="g0IvTF wixui-page" data-testid="page-bg"></div>
              <div>
                <div
                  class="ia1ff-overflow-wrapper ku1hVK"
                  data-testid="responsive-container-overflow"
                >
                  <div
                    data-testid="responsive-container-content"
                    tabindex="-1"
                    role="group"
                    class="ia1ff-container"
                  >
                    <div id="comp-mmso9wuu-pinned-layer" class="comp-mmso9wuu-pinned-layer QED8q1">
                      <SiteHeader root-id="comp-mmso9wuu" />
                    </div>
                    <main
                      id="PAGE_SECTIONSia1ff"
                      class="PAGE_SECTIONSia1ff ooGRUo"
                      data-main-content-parent="true"
                    >
                      <PageCover section-id="comp-mmsob3hs" box-id="comp-mmsob3iu" title-id="comp-mmsob3iw2" :image="pageCover" :title="pageTitle" />
                      <ServiceBlocks class="infinity-service-blocks" />
                    </main>
                    <SiteFooter root-id="comp-mmso9x2a" />
                    <div id="comp-mmso9x9d-pinned-layer" class="comp-mmso9x9d-pinned-layer QED8q1">
                      <div id="comp-mmso9x9d" class="comp-mmso9x9d S829f_ comp-mmso9x9d-container">
                        <div id="comp-mmso9x9d_r_comp-kd5px9hr" class="vO4l6e">
                          <div id="overlay-comp-mmso9x9d_r_comp-kd5px9hr" class="KyTZlx"></div>
                          <div
                            id="container-comp-mmso9x9d_r_comp-kd5px9hr"
                            class="V1WvhC"
                            data-block-level-container="MenuContainer"
                          >
                            <div class="qINwWP"></div>
                            <div
                              id="inlineContentParent-comp-mmso9x9d_r_comp-kd5px9hr"
                              class="dz6k8U"
                            >
                              <div
                                class="comp-mmso9x9d_r_comp-kd5px9hr-overflow-wrapper dz6k8U wixui-mobile-menu ku1hVK"
                                data-testid="responsive-container-overflow"
                              >
                                <div
                                  data-testid="responsive-container-content"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-label="Site navigation"
                                  class="comp-mmso9x9d_r_comp-kd5px9hr-container"
                                >
                                  <nav
                                    id="comp-mmso9x9d_r_comp-kd5px9kk"
                                    aria-label="Navegación"
                                    class="d2V6sy comp-mmso9x9d_r_comp-kd5px9kk wixui-vertical-menu"
                                  >
                                    <ul class="OXEw4D">
                                      <li
                                        data-testid="comp-mmso9x9d_r_comp-kd5px9kk-0"
                                        class="Onlmt7 GrMktH WIf5uD wixui-vertical-menu__item"
                                      >
                                        <div data-testid="itemWrapper" class="keDKhi">
                                          <span data-testid="linkWrapper" class="j945c8"
                                            ><a
                                              data-testid="linkElement"
                                              href="/"
                                              target="_self"
                                              class="G7GdaI wixui-vertical-menu__item-label"
                                              >Inicio</a
                                            ></span
                                          >
                                        </div>
                                      </li>
                                      <li
                                        data-testid="comp-mmso9x9d_r_comp-kd5px9kk-1"
                                        class="Onlmt7 GrMktH WIf5uD wixui-vertical-menu__item"
                                      >
                                        <div data-testid="itemWrapper" class="keDKhi">
                                          <span data-testid="linkWrapper" class="j945c8"
                                            ><a
                                              data-testid="linkElement"
                                              href="/nosotros"
                                              target="_self"
                                              class="G7GdaI wixui-vertical-menu__item-label"
                                              >Nosotros</a
                                            ></span
                                          >
                                        </div>
                                      </li>
                                      <li
                                        data-testid="comp-mmso9x9d_r_comp-kd5px9kk-2"
                                        aria-current="page"
                                        class="Onlmt7 GrMktH WIf5uD wixui-vertical-menu__item jqR3kU"
                                      >
                                        <div data-testid="itemWrapper" class="keDKhi">
                                          <span data-testid="linkWrapper" class="j945c8"
                                            ><a
                                              data-testid="linkElement"
                                              href="/servicios"
                                              target="_self"
                                              class="G7GdaI wixui-vertical-menu__item-label"
                                              >Servicios</a
                                            ></span
                                          >
                                        </div>
                                      </li>
                                      <li
                                        data-testid="comp-mmso9x9d_r_comp-kd5px9kk-3"
                                        class="Onlmt7 GrMktH WIf5uD wixui-vertical-menu__item"
                                      >
                                        <div data-testid="itemWrapper" class="keDKhi">
                                          <span data-testid="linkWrapper" class="j945c8"
                                            ><a
                                              data-testid="linkElement"
                                              href="/#especialidades"
                                              target="_self"
                                              class="G7GdaI wixui-vertical-menu__item-label"
                                              >Especialidades</a
                                            ></span
                                          >
                                        </div>
                                      </li>
                                      <li
                                        data-testid="comp-mmso9x9d_r_comp-kd5px9kk-4"
                                        class="Onlmt7 GrMktH WIf5uD wixui-vertical-menu__item"
                                      >
                                        <div data-testid="itemWrapper" class="keDKhi">
                                          <span data-testid="linkWrapper" class="j945c8"
                                            ><a
                                              data-testid="linkElement"
                                              href="/contacto"
                                              target="_self"
                                              class="G7GdaI wixui-vertical-menu__item-label"
                                              >Contacto</a
                                            ></span
                                          >
                                        </div>
                                      </li>
                                    </ul>
                                  </nav>
                                  <button
                                    id="comp-mmso9x9d_r_comp-kkmqi5tc"
                                    class="comp-mmso9x9d_r_comp-kkmqi5tc wixui-vector-image"
                                  >
                                    <div
                                      data-testid="svgRoot-comp-mmso9x9d_r_comp-kkmqi5tc"
                                      class="iL7Pq5 gx51wo LXgYyC"
                                    >
                                      <svg
                                        preserveAspectRatio="none"
                                        data-bbox="65.35 65.35 69.3 69.3"
                                        viewBox="65.35 65.35 69.3 69.3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-type="shape"
                                        role="img"
                                        aria-label="Close Site Navigation"
                                      >
                                        <g>
                                          <path
                                            d="M134.65 128.99L105.66 100l28.99-28.99-5.66-5.66L100 94.34 71.01 65.35l-5.66 5.66L94.34 100l-28.99 28.99 5.66 5.66L100 105.66l28.99 28.99 5.66-5.66z"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="portal-comp-mmso9wuu_r_comp-mb5540mw">
            <div
              id="comp-mmso9wuu_r_comp-mb5540no"
              class="HamburgerOverlay547129737--showBackgroundOverlay HamburgerOverlay547129737__root OrbgmN"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              data-visible="false"
              data-hook="hamburger-overlay-root"
              tabindex="-1"
              data-part="hamburger-overlay"
              data-animation-name="none"
            >
              <div
                data-hook="hamburger-overlay-dialog"
                aria-hidden="true"
                class="HamburgerOverlay547129737__overlay comp-mmso9wuu_r_comp-mb5540no-styleId__root wixui-hamburger-overlay"
              ></div>
              <div
                class="comp-mmso9wuu_r_comp-mb5540no-overflow-wrapper gDZ5xr"
                data-testid="responsive-container-overflow"
              >
                <div
                  data-testid="responsive-container-content"
                  tabindex="-1"
                  role="group"
                  class="comp-mmso9wuu_r_comp-mb5540no-container"
                >
                  <div
                    id="comp-mmso9wuu_r_comp-mb5540np4"
                    tabindex="-1"
                    class="comp-mmso9wuu_r_comp-mb5540np4 ZBf0K1 fy6eJk"
                    data-animation-name="none"
                  >
                    <div
                      aria-hidden="true"
                      class="HamburgerMenuContainer502174924__root comp-mmso9wuu_r_comp-mb5540np4-styleId__root wixui-hamburger-menu-container"
                    ></div>
                    <div
                      class="comp-mmso9wuu_r_comp-mb5540np4-overflow-wrapper gDZ5xr"
                      data-testid="responsive-container-overflow"
                    >
                      <div
                        data-testid="responsive-container-content"
                        tabindex="-1"
                        role="group"
                        class="comp-mmso9wuu_r_comp-mb5540np4-container"
                      >
                        <div
                          id="comp-mmso9wuu_r_comp-mb5540nr1"
                          class="HamburgerCloseButton872037521__root StylableButton2545352419__root comp-mmso9wuu_r_comp-mb5540nr1"
                          data-semantic-classname="hamburger-close-button"
                        >
                          <button
                            type="button"
                            class="StylableButton2545352419__root comp-mmso9wuu_r_comp-mb5540nr1-styleId__root wixui-hamburger-close-button"
                            data-testid="buttonContent"
                            aria-label="Cerrar"
                          >
                            <span class="StylableButton2545352419__container"
                              ><span
                                class="StylableButton2545352419__label wixui-hamburger-close-button__label"
                                data-testid="stylablebutton-label"
                                >Cerrar</span
                              ><span
                                class="StylableButton2545352419__icon wixui-hamburger-close-button__icon"
                                aria-hidden="true"
                                data-testid="stylablebutton-icon"
                                ><span>
                                  <svg
                                    data-bbox="0 -0.012 32.012 32"
                                    viewBox="0 0 32 32"
                                    height="32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-type="shape"
                                  >
                                    <g>
                                      <path
                                        d="M.293.293a1 1 0 0 1 1.414 0L16 14.586 30.293.293a1 1 0 1 1 1.414 1.414L17.414 16l14.293 14.293a1 1 0 0 1-1.414 1.414L16 17.414 1.707 31.707a1 1 0 0 1-1.414-1.414L14.586 16 .293 1.707a1 1 0 0 1 0-1.414"
                                        fill-rule="evenodd"
                                      ></path>
                                    </g>
                                  </svg> </span></span
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="SCROLL_TO_BOTTOM"
        class="qe3oTb ignore-focus SCROLL_TO_BOTTOM"
        role="region"
        tabindex="-1"
        aria-label="Final de la página"
      >
        <span class="TvbeET">Final de la página</span>
      </div>
    </div>
  </div>
</template>
