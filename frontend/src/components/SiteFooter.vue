<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import SiteNavigationItems from './SiteNavigationItems.vue'
import ContactChannels from './ContactChannels.vue'

const props = withDefaults(defineProps<{ rootId: string; fixedImageSize?: boolean }>(), { fixedImageSize: false })
const route = useRoute()
const imageStyle = computed<CSSProperties>(() => ({
  width: props.fixedImageSize ? '1265px' : '100%',
  height: props.fixedImageSize ? '454px' : '100%',
  objectFit: 'cover',
  objectPosition: '50% 50%',
}))
</script>
<template>
<footer :id="`${rootId}`" :class="`${rootId} S829f_ ${rootId}-container`">
                      <section
                        :id="`${rootId}_r_comp-mmna9jbz`"
                        tabindex="-1"
                        data-block-level-container="Section"
                        :class="`ke5pl1 ${rootId}_r_comp-mmna9jbz wixui-footer fwXYgt`"
                        data-testid="section-container"
                      >
                        <div
                          :id="`bgLayers_${rootId}_r_comp-mmna9jbz`"
                          data-hook="bgLayers"
                          :data-motion-part="`BG_LAYER ${rootId}_r_comp-mmna9jbz`"
                          class="QG9w8P"
                        >
                          <div data-testid="colorUnderlay" class="LNYVZi ayCf9D"></div>
                          <div
                            :id="`bgMedia_${rootId}_r_comp-mmna9jbz`"
                            :data-motion-part="`BG_MEDIA ${rootId}_r_comp-mmna9jbz`"
                            class="ROWgFb"
                          >
                            <wow-image
                              :id="`img_${rootId}_r_comp-mmna9jbz`"
                              class="Qh0lWW ayCf9D fO4mKs NgeJ4N bgImage"
                              :data-motion-part="`BG_IMG ${rootId}_r_comp-mmna9jbz`"
                              data-bg-effect-name=""
                              data-has-ssr-src="true"
                              ><img
                                src="/images/portada-derecho.jpg"
                                alt="Fotografía ilustrativa de nuestros servicios"
                                :style="imageStyle"
                                width="100"
                                height="100"
                                :data-ssr-src-done="fixedImageSize ? 'true' : undefined"
                                :fetchpriority="fixedImageSize ? 'high' : undefined"
                            /></wow-image>
                          </div>
                        </div>
                        <div
                          data-testid="responsive-container-content"
                          role="group"
                          :class="`${rootId}_r_comp-mmna9jbz-container max-width-container`"
                        >
                          <div
                            :id="`${rootId}_r_comp-mmna6rco2`"
                            role=""
                            :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rco2 wixui-box`"
                            dir="ltr"
                          >
                            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
                            <div
                              data-testid="responsive-container-content"
                              role="group"
                              :class="`${rootId}_r_comp-mmna6rco2-container`"
                            >
                              <div
                                :id="`${rootId}_r_comp-mmt0f2e7`"
                                role=""
                                :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmt0f2e7-container ${rootId}_r_comp-mmt0f2e7 wixui-box`"
                                dir="ltr"
                              >
                                <div
                                  aria-hidden="true"
                                  class="jdJeEr NYfD3h inner-box wixui-box"
                                ></div>
                                <div
                                  :id="`${rootId}_r_comp-mmt0exuf`"
                                  :class="`${rootId}_r_comp-mmt0exuf wixui-vector-image`"
                                >
                                  <BrandLogo />
                                </div>
                                <div
                                  :id="`${rootId}_r_comp-mmna6rct`"
                                  :class="`${rootId}_r_comp-mmna6rct eAOB3n`"
                                >
                                  <ContactChannels />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            :id="`${rootId}_r_comp-mmna6rd2`"
                            role=""
                            :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rd2 wixui-box`"
                            dir="ltr"
                          >
                            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
                            <div
                              data-testid="responsive-container-content"
                              role="group"
                              :class="`${rootId}_r_comp-mmna6rd2-container`"
                            >
                              <div
                                :id="`${rootId}_r_comp-mmnav4s3`"
                                role=""
                                :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmnav4s3-container ${rootId}_r_comp-mmnav4s3 wixui-box`"
                                dir="ltr"
                              >
                                <div
                                  aria-hidden="true"
                                  class="jdJeEr NYfD3h inner-box wixui-box"
                                ></div>
                                <div
                                  :id="`${rootId}_r_comp-mmna6rd35`"
                                  :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rd35 wixui-rich-text`"
                                >
                                  <h6 class="font_6 wixui-rich-text__text">Navegación</h6>
                                </div>
                                <div
                                  :id="`${rootId}_r_comp-mmnav2af`"
                                  :class="`${rootId}_r_comp-mmnav2af-container ${rootId}_r_comp-mmnav2af`"
                                  data-prehydration=""
                                >
                                  <div
                                    :id="`${rootId}_r_comp-mmnav2af-menu-content`"
                                    class="h75ntl"
                                  >
                                    <nav
                                      class="Y4Cdvx tn8ZSa VxjUGd YUEUpV wixui-horizontal-menu wixui-menu"
                                      data-part="navbar"
                                      data-hook="menu-root"
                                      aria-label="Navegación"
                                    >
                                      <ul class="OD_PyT"><SiteNavigationItems /></ul>
                                      <div class="UU6mel">
                                        <div
                                          aria-hidden="true"
                                          aria-label="scroll"
                                          class="PnnIOa hcRPG3 MXA4tA sLcDXV wixui-menu__scroll-button scroll-button"
                                          data-menu-scroll-action="page"
                                          data-hidden="true"
                                          data-part="scroll-backward-button"
                                        >
                                          <span class="KEUNmX wixui-menu__scroll-button-icon"
                                            ><svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 6 12"
                                            >
                                              <path
                                                d="M0 6L5.2 0 6 .7 1.3 6 6 11.3 5.2 12z"
                                              ></path></svg
                                          ></span>
                                        </div>
                                        <div
                                          aria-hidden="true"
                                          aria-label="scroll"
                                          class="PnnIOa hcRPG3 MXA4tA sLcDXV wixui-menu__scroll-button scroll-button"
                                          data-menu-scroll-action="page"
                                          data-hidden="true"
                                          data-part="scroll-forward-button"
                                        >
                                          <span class="KEUNmX wixui-menu__scroll-button-icon"
                                            ><svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 6 12"
                                            >
                                              <path
                                                d="M6 6L.8 0 0 .7 4.7 6 0 11.3l.8.7z"
                                              ></path></svg
                                          ></span>
                                        </div>
                                      </div>
                                    </nav>
                                  </div>
                                  <div
                                    :id="`${rootId}_r_comp-mmnav2b2`"
                                    :class="`${rootId}_r_comp-mmnav2b2-container wiZmhC`"
                                  >
                                    <nav
                                      aria-label="Navegación"
                                      class="HamburgerOpenButton3537389287__nav"
                                    >
                                      <div
                                        :id="`${rootId}_r_comp-mmnav2b51`"
                                        :class="`HamburgerOpenButton3537389287__root StylableButton2545352419__root ${rootId}_r_comp-mmnav2b51`"
                                        data-semantic-classname="hamburger-open-button"
                                      >
                                        <button
                                          type="button"
                                          :class="`StylableButton2545352419__root ${rootId}_r_comp-mmnav2b51-styleId__root wixui-hamburger-open-button`"
                                          data-testid="buttonContent"
                                          aria-expanded="false"
                                          aria-haspopup="dialog"
                                          aria-label="Menú"
                                        >
                                          <span class="StylableButton2545352419__container"
                                            ><span
                                              class="StylableButton2545352419__label wixui-hamburger-open-button__label"
                                              data-testid="stylablebutton-label"
                                              >Menú</span
                                            ><span
                                              class="StylableButton2545352419__icon wixui-hamburger-open-button__icon"
                                              aria-hidden="true"
                                              data-testid="stylablebutton-icon"
                                              ><span
                                                ><svg
                                                  data-bbox="20.5 54 159 92"
                                                  viewBox="0 0 200 200"
                                                  height="200"
                                                  width="200"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  data-type="shape"
                                                >
                                                  <g>
                                                    <path d="M179.5 54v9.517h-159V54h159z"></path>
                                                    <path
                                                      d="M179.5 95.241v9.517h-159v-9.517h159z"
                                                    ></path>
                                                    <path
                                                      d="M179.5 136.483V146h-159v-9.517h159z"
                                                    ></path>
                                                  </g>
                                                </svg> </span></span
                                          ></span>
                                        </button>
                                      </div>
                                    </nav>
                                    <div :id="`portal-${rootId}_r_comp-mmnav2af`">
                                      <div
                                        :id="`${rootId}_r_comp-mmnav2b82`"
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
                                          :class="`HamburgerOverlay547129737__overlay ${rootId}_r_comp-mmnav2b82-styleId__root wixui-hamburger-overlay`"
                                        ></div>
                                        <div
                                          :class="`${rootId}_r_comp-mmnav2b82-overflow-wrapper gDZ5xr`"
                                          data-testid="responsive-container-overflow"
                                        >
                                          <div
                                            data-testid="responsive-container-content"
                                            tabindex="-1"
                                            role="group"
                                            :class="`${rootId}_r_comp-mmnav2b82-container`"
                                          >
                                            <div
                                              :id="`${rootId}_r_comp-mmnav2bb2`"
                                              tabindex="-1"
                                              :class="`${rootId}_r_comp-mmnav2bb2 ZBf0K1 fy6eJk`"
                                              data-animation-name="none"
                                            >
                                              <div
                                                aria-hidden="true"
                                                :class="`HamburgerMenuContainer502174924__root ${rootId}_r_comp-mmnav2bb2-styleId__root wixui-hamburger-menu-container`"
                                              ></div>
                                              <div
                                                :class="`${rootId}_r_comp-mmnav2bb2-overflow-wrapper gDZ5xr`"
                                                data-testid="responsive-container-overflow"
                                              >
                                                <div
                                                  data-testid="responsive-container-content"
                                                  tabindex="-1"
                                                  role="group"
                                                  :class="`${rootId}_r_comp-mmnav2bb2-container`"
                                                >
                                                  <div
                                                    :id="`${rootId}_r_comp-mmnav2bg3`"
                                                    :class="`HamburgerCloseButton872037521__root StylableButton2545352419__root ${rootId}_r_comp-mmnav2bg3`"
                                                    data-semantic-classname="hamburger-close-button"
                                                  >
                                                    <button
                                                      type="button"
                                                      :class="`StylableButton2545352419__root ${rootId}_r_comp-mmnav2bg3-styleId__root wixui-hamburger-close-button`"
                                                      data-testid="buttonContent"
                                                      aria-label="Cerrar"
                                                    >
                                                      <span
                                                        class="StylableButton2545352419__container"
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
                              </div>
                            </div>
                          </div>
                          <div
                            :id="`${rootId}_r_comp-mmna6rd48`"
                            role=""
                            :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rd48 wixui-box`"
                            dir="ltr"
                          >
                            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
                            <div
                              data-testid="responsive-container-content"
                              role="group"
                              :class="`${rootId}_r_comp-mmna6rd48-container`"
                            >
                              <div
                                :id="`${rootId}_r_comp-mmnb3m7a`"
                                role=""
                                :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmnb3m7a-container ${rootId}_r_comp-mmnb3m7a wixui-box`"
                                dir="ltr"
                              >
                                <div
                                  aria-hidden="true"
                                  class="jdJeEr NYfD3h inner-box wixui-box"
                                ></div>
                                <div
                                  :id="`${rootId}_r_comp-mmna6rd6`"
                                  :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rd6 wixui-rich-text`"
                                >
                                  <h6 class="font_6 wixui-rich-text__text">Información</h6>
                                </div>
                                <div
                                  :id="`${rootId}_r_comp-mmnb3iuv`"
                                  :class="`${rootId}_r_comp-mmnb3iuv-container ${rootId}_r_comp-mmnb3iuv`"
                                  data-prehydration=""
                                >
                                  <div
                                    :id="`${rootId}_r_comp-mmnb3iuv-menu-content`"
                                    class="h75ntl"
                                  >
                                    <nav
                                      class="Y4Cdvx tn8ZSa VxjUGd YUEUpV wixui-horizontal-menu wixui-menu"
                                      data-part="navbar"
                                      data-hook="menu-root"
                                      aria-label="Navegación"
                                    >
                                      <ul class="OD_PyT">
                                        <li
                                          class="NxO5nt"
                                          data-part="menu-item"
                                          data-animation-name="none"
                                          data-item-depth="0"
                                        >
                                          <div class="fYThT1">
                                            <div
                                              class="FBAIyH QFOPOz wixui-horizontal-menu__item wixui-menu__item cVnJ7u"
                                              :data-selected="route.path === '/privacidad' ? 'true' : undefined"
                                              data-part="menu-item-content"
                                              :data-interactive="route.path === '/privacidad' ? 'false' : 'true'"
                                            >
                                              <a
                                                data-testid="linkElement"
                                                data-part="menu-item-link"
                                                :aria-current="route.path === '/privacidad' ? 'page' : undefined"
                                                href="/privacidad"
                                                target="_self"
                                                class=""
                                                ><div
                                                  class="ijO_Jr wixui-horizontal-menu__item-label wixui-menu__item-label GPIJZi"
                                                  data-part="label"
                                                >
                                                  Privacidad
                                                </div></a
                                              >
                                            </div>
                                          </div>
                                          <span class="BDrALc"></span>
                                        </li>
                                        <li
                                          class="NxO5nt"
                                          data-part="menu-item"
                                          data-animation-name="none"
                                          data-item-depth="0"
                                        >
                                          <div class="fYThT1">
                                            <div
                                              class="FBAIyH QFOPOz wixui-horizontal-menu__item wixui-menu__item cVnJ7u"
                                              :data-selected="route.path === '/accesibilidad' ? 'true' : undefined"
                                              data-part="menu-item-content"
                                              :data-interactive="route.path === '/accesibilidad' ? 'false' : 'true'"
                                            >
                                              <a
                                                data-testid="linkElement"
                                                data-part="menu-item-link"
                                                :aria-current="route.path === '/accesibilidad' ? 'page' : undefined"
                                                href="/accesibilidad"
                                                target="_self"
                                                class=""
                                                ><div
                                                  class="ijO_Jr wixui-horizontal-menu__item-label wixui-menu__item-label GPIJZi"
                                                  data-part="label"
                                                >
                                                  Accesibilidad
                                                </div></a
                                              >
                                            </div>
                                          </div>
                                          <span class="BDrALc"></span>
                                        </li>
                                      </ul>
                                      <div class="UU6mel">
                                        <div
                                          aria-hidden="true"
                                          aria-label="scroll"
                                          class="PnnIOa hcRPG3 MXA4tA sLcDXV wixui-menu__scroll-button scroll-button"
                                          data-menu-scroll-action="page"
                                          data-hidden="true"
                                          data-part="scroll-backward-button"
                                        >
                                          <span class="KEUNmX wixui-menu__scroll-button-icon"
                                            ><svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 6 12"
                                            >
                                              <path
                                                d="M0 6L5.2 0 6 .7 1.3 6 6 11.3 5.2 12z"
                                              ></path></svg
                                          ></span>
                                        </div>
                                        <div
                                          aria-hidden="true"
                                          aria-label="scroll"
                                          class="PnnIOa hcRPG3 MXA4tA sLcDXV wixui-menu__scroll-button scroll-button"
                                          data-menu-scroll-action="page"
                                          data-hidden="true"
                                          data-part="scroll-forward-button"
                                        >
                                          <span class="KEUNmX wixui-menu__scroll-button-icon"
                                            ><svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 6 12"
                                            >
                                              <path
                                                d="M6 6L.8 0 0 .7 4.7 6 0 11.3l.8.7z"
                                              ></path></svg
                                          ></span>
                                        </div>
                                      </div>
                                    </nav>
                                  </div>
                                  <div
                                    :id="`${rootId}_r_comp-mmnb3iv5`"
                                    :class="`${rootId}_r_comp-mmnb3iv5-container wiZmhC`"
                                  >
                                    <nav
                                      aria-label="Navegación"
                                      class="HamburgerOpenButton3537389287__nav"
                                    >
                                      <div
                                        :id="`${rootId}_r_comp-mmnb3iv66`"
                                        :class="`HamburgerOpenButton3537389287__root StylableButton2545352419__root ${rootId}_r_comp-mmnb3iv66`"
                                        data-semantic-classname="hamburger-open-button"
                                      >
                                        <button
                                          type="button"
                                          :class="`StylableButton2545352419__root ${rootId}_r_comp-mmnb3iv66-styleId__root wixui-hamburger-open-button`"
                                          data-testid="buttonContent"
                                          aria-expanded="false"
                                          aria-haspopup="dialog"
                                          aria-label="Menú"
                                        >
                                          <span class="StylableButton2545352419__container"
                                            ><span
                                              class="StylableButton2545352419__label wixui-hamburger-open-button__label"
                                              data-testid="stylablebutton-label"
                                              >Menú</span
                                            ><span
                                              class="StylableButton2545352419__icon wixui-hamburger-open-button__icon"
                                              aria-hidden="true"
                                              data-testid="stylablebutton-icon"
                                              ><span
                                                ><svg
                                                  data-bbox="20.5 54 159 92"
                                                  viewBox="0 0 200 200"
                                                  height="200"
                                                  width="200"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  data-type="shape"
                                                >
                                                  <g>
                                                    <path d="M179.5 54v9.517h-159V54h159z"></path>
                                                    <path
                                                      d="M179.5 95.241v9.517h-159v-9.517h159z"
                                                    ></path>
                                                    <path
                                                      d="M179.5 136.483V146h-159v-9.517h159z"
                                                    ></path>
                                                  </g>
                                                </svg> </span></span
                                          ></span>
                                        </button>
                                      </div>
                                    </nav>
                                    <div :id="`portal-${rootId}_r_comp-mmnb3iuv`">
                                      <div
                                        :id="`${rootId}_r_comp-mmnb3iv84`"
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
                                          :class="`HamburgerOverlay547129737__overlay ${rootId}_r_comp-mmnb3iv84-styleId__root wixui-hamburger-overlay`"
                                        ></div>
                                        <div
                                          :class="`${rootId}_r_comp-mmnb3iv84-overflow-wrapper gDZ5xr`"
                                          data-testid="responsive-container-overflow"
                                        >
                                          <div
                                            data-testid="responsive-container-content"
                                            tabindex="-1"
                                            role="group"
                                            :class="`${rootId}_r_comp-mmnb3iv84-container`"
                                          >
                                            <div
                                              :id="`${rootId}_r_comp-mmnb3iva`"
                                              tabindex="-1"
                                              :class="`${rootId}_r_comp-mmnb3iva ZBf0K1 fy6eJk`"
                                              data-animation-name="none"
                                            >
                                              <div
                                                aria-hidden="true"
                                                :class="`HamburgerMenuContainer502174924__root ${rootId}_r_comp-mmnb3iva-styleId__root wixui-hamburger-menu-container`"
                                              ></div>
                                              <div
                                                :class="`${rootId}_r_comp-mmnb3iva-overflow-wrapper gDZ5xr`"
                                                data-testid="responsive-container-overflow"
                                              >
                                                <div
                                                  data-testid="responsive-container-content"
                                                  tabindex="-1"
                                                  role="group"
                                                  :class="`${rootId}_r_comp-mmnb3iva-container`"
                                                >
                                                  <div
                                                    :id="`${rootId}_r_comp-mmnb3ivc4`"
                                                    :class="`HamburgerCloseButton872037521__root StylableButton2545352419__root ${rootId}_r_comp-mmnb3ivc4`"
                                                    data-semantic-classname="hamburger-close-button"
                                                  >
                                                    <button
                                                      type="button"
                                                      :class="`StylableButton2545352419__root ${rootId}_r_comp-mmnb3ivc4-styleId__root wixui-hamburger-close-button`"
                                                      data-testid="buttonContent"
                                                      aria-label="Cerrar"
                                                    >
                                                      <span
                                                        class="StylableButton2545352419__container"
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
                              </div>
                            </div>
                          </div>
                          <div
                            :id="`${rootId}_r_comp-mmna6rd72`"
                            role=""
                            :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rd72 wixui-box`"
                            dir="ltr"
                          >
                            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
                            <div
                              data-testid="responsive-container-content"
                              role="group"
                              :class="`${rootId}_r_comp-mmna6rd72-container`"
                            >
                              <div
                                :id="`${rootId}_r_comp-mmna6rd9`"
                                role=""
                                :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rd9-container ${rootId}_r_comp-mmna6rd9 wixui-box`"
                                dir="ltr"
                              >
                                <div
                                  aria-hidden="true"
                                  class="jdJeEr NYfD3h inner-box wixui-box"
                                ></div>
                                <div
                                  :id="`${rootId}_r_comp-mmna6rda2`"
                                  :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rda2 wixui-rich-text`"
                                >
                                  <h6 class="font_6 wixui-rich-text__text">Contacto</h6>
                                </div>
                                <div
                                  :id="`${rootId}_r_comp-mmna6rdb6`"
                                  :class="`ArRNfA ${rootId}_r_comp-mmna6rdb6 wixui-repeater`"
                                >
                                  <div
                                    data-testid="responsive-container-content"
                                    role="list"
                                    :class="`${rootId}_r_comp-mmna6rdb6-container`"
                                  >
                                    <div
                                      :id="`${rootId}_r_comp-mmna6rdd5__item1`"
                                      role="listitem"
                                      :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rdd5-container ${rootId}_r_comp-mmna6rdd5 ${rootId}_r_comp-mmna6rdd5__item1 wixui-repeater__item`"
                                      dir="ltr"
                                    >
                                      <div
                                        aria-hidden="true"
                                        class="jdJeEr NYfD3h inner-box wixui-repeater__item"
                                      ></div>
                                      <div
                                        :id="`${rootId}_r_comp-mmna6rde4__item1`"
                                        role=""
                                        :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rde4-container ${rootId}_r_comp-mmna6rde4 ${rootId}_r_comp-mmna6rde4__item1 wixui-box`"
                                        dir="ltr"
                                      >
                                        <div
                                          aria-hidden="true"
                                          class="jdJeEr NYfD3h inner-box wixui-box"
                                        ></div>
                                        <div
                                          :id="`${rootId}_r_comp-mmna6rdg1__item1`"
                                          :class="`${rootId}_r_comp-mmna6rdg1 ${rootId}_r_comp-mmna6rdg1__item1 wixui-vector-image`"
                                        >
                                          <div
                                            :data-testid="`svgRoot-${rootId}_r_comp-mmna6rdg1__item1`"
                                            class="iL7Pq5 gx51wo"
                                          >
                                            <svg
                                              preserveAspectRatio="xMidYMid meet"
                                              data-bbox="0 0 25.626 25.626"
                                              viewBox="0 0 25.626 25.626"
                                              height="512"
                                              width="512"
                                              xmlns="http://www.w3.org/2000/svg"
                                              data-type="color"
                                              role="presentation"
                                              aria-hidden="true"
                                              aria-label=""
                                            >
                                              <defs></defs>
                                              <g>
                                                <path
                                                  fill="#bac8d3"
                                                  d="M25.626 12.813c0 7.076-5.737 12.813-12.813 12.813S0 19.889 0 12.813 5.737 0 12.813 0s12.813 5.737 12.813 12.813"
                                                  data-color="1"
                                                ></path>
                                                <path
                                                  fill="#030104"
                                                  d="M17.91 15.574c-.852-.728-1.716-1.17-2.557-.442l-.502.44c-.368.319-1.05 1.809-3.692-1.23-2.64-3.034-1.069-3.506-.701-3.822l.505-.44c.836-.729.52-1.646-.083-2.59l-.364-.573c-.606-.942-1.266-1.56-2.104-.833l-.454.396c-.37.27-1.407 1.148-1.658 2.815-.302 2.001.652 4.293 2.838 6.807 2.184 2.515 4.321 3.778 6.347 3.756 1.683-.018 2.699-.921 3.017-1.25l.455-.396c.836-.727.316-1.467-.536-2.197z"
                                                  data-color="2"
                                                ></path>
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                        <div
                                          :id="`${rootId}_r_comp-mmna6rdi2__item1`"
                                          :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rdi2 ${rootId}_r_comp-mmna6rdi2__item1 wixui-rich-text`"
                                        >
                                          <p class="font_9 wixui-rich-text__text">
                                            <a href="tel:+51986994914">986 994 914</a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      :id="`${rootId}_r_comp-mmna6rdd5__item-j9ples3e`"
                                      role="listitem"
                                      :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rdd5-container ${rootId}_r_comp-mmna6rdd5 ${rootId}_r_comp-mmna6rdd5__item-j9ples3e wixui-repeater__item`"
                                      dir="ltr"
                                    >
                                      <div
                                        aria-hidden="true"
                                        class="jdJeEr NYfD3h inner-box wixui-repeater__item"
                                      ></div>
                                      <div
                                        :id="`${rootId}_r_comp-mmna6rde4__item-j9ples3e`"
                                        role=""
                                        :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rde4-container ${rootId}_r_comp-mmna6rde4 ${rootId}_r_comp-mmna6rde4__item-j9ples3e wixui-box`"
                                        dir="ltr"
                                      >
                                        <div
                                          aria-hidden="true"
                                          class="jdJeEr NYfD3h inner-box wixui-box"
                                        ></div>
                                        <div
                                          :id="`${rootId}_r_comp-mmna6rdg1__item-j9ples3e`"
                                          :class="`${rootId}_r_comp-mmna6rdg1 ${rootId}_r_comp-mmna6rdg1__item-j9ples3e wixui-vector-image`"
                                        >
                                          <div
                                            :data-testid="`svgRoot-${rootId}_r_comp-mmna6rdg1__item-j9ples3e`"
                                            class="iL7Pq5 gx51wo"
                                          >
                                            <svg
                                              preserveAspectRatio="xMidYMid meet"
                                              data-bbox="0 0 512 512"
                                              viewBox="0 0 512 512"
                                              height="512"
                                              width="512"
                                              xmlns="http://www.w3.org/2000/svg"
                                              data-type="color"
                                              role="presentation"
                                              aria-hidden="true"
                                              aria-label=""
                                            >
                                              <defs></defs>
                                              <g>
                                                <path
                                                  fill="#bac8d3"
                                                  d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256"
                                                  data-color="1"
                                                ></path>
                                                <path
                                                  fill="#000000"
                                                  clip-rule="evenodd"
                                                  d="m143.969 164.571 80.226 80.26c17.497 17.464 46.1 17.48 63.611 0l80.226-80.26a1.824 1.824 0 0 0-.247-2.792c-8.183-5.707-18.139-9.09-28.863-9.09H173.079c-10.725 0-20.68 3.384-28.863 9.09a1.824 1.824 0 0 0-.247 2.792m-21.44 38.667a50.16 50.16 0 0 1 5.775-23.405 1.824 1.824 0 0 1 2.91-.442l79.21 79.21c25.084 25.12 66.054 25.135 91.152 0l79.21-79.21a1.824 1.824 0 0 1 2.911.442 50.2 50.2 0 0 1 5.774 23.405v105.523c0 27.894-22.69 50.55-50.549 50.55H173.079c-27.858 0-50.55-22.656-50.55-50.55z"
                                                  fill-rule="evenodd"
                                                  data-color="2"
                                                ></path>
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                        <div
                                          :id="`${rootId}_r_comp-mmna6rdi2__item-j9ples3e`"
                                          :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rdi2 ${rootId}_r_comp-mmna6rdi2__item-j9ples3e wixui-rich-text`"
                                        >
                                          <p class="font_9 wixui-rich-text__text">
                                            <a href="https://wa.me/51986994914"
                                              >WhatsApp: 986 994 914</a
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      :id="`${rootId}_r_comp-mmna6rdd5__item-j9plerjk`"
                                      role="listitem"
                                      :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rdd5-container ${rootId}_r_comp-mmna6rdd5 ${rootId}_r_comp-mmna6rdd5__item-j9plerjk wixui-repeater__item`"
                                      dir="ltr"
                                    >
                                      <div
                                        aria-hidden="true"
                                        class="jdJeEr NYfD3h inner-box wixui-repeater__item"
                                      ></div>
                                      <div
                                        :id="`${rootId}_r_comp-mmna6rde4__item-j9plerjk`"
                                        role=""
                                        :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rde4-container ${rootId}_r_comp-mmna6rde4 ${rootId}_r_comp-mmna6rde4__item-j9plerjk wixui-box`"
                                        dir="ltr"
                                      >
                                        <div
                                          aria-hidden="true"
                                          class="jdJeEr NYfD3h inner-box wixui-box"
                                        ></div>
                                        <div
                                          :id="`${rootId}_r_comp-mmna6rdg1__item-j9plerjk`"
                                          :class="`${rootId}_r_comp-mmna6rdg1 ${rootId}_r_comp-mmna6rdg1__item-j9plerjk wixui-vector-image`"
                                        >
                                          <div
                                            :data-testid="`svgRoot-${rootId}_r_comp-mmna6rdg1__item-j9plerjk`"
                                            class="iL7Pq5 gx51wo"
                                          >
                                            <svg
                                              preserveAspectRatio="xMidYMid meet"
                                              data-bbox="0 0 512 512"
                                              viewBox="0 0 512 512"
                                              height="512"
                                              width="512"
                                              xmlns="http://www.w3.org/2000/svg"
                                              data-type="color"
                                              role="presentation"
                                              aria-hidden="true"
                                              aria-label=""
                                            >
                                              <defs></defs>
                                              <g>
                                                <path
                                                  fill="#bac8d3"
                                                  d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256"
                                                  data-color="1"
                                                ></path>
                                                <path
                                                  fill="#000000"
                                                  d="M256 115.2c-56.235 0-101.985 45.75-101.985 101.984 0 69.789 91.267 172.242 95.152 176.57 3.65 4.065 10.022 4.057 13.666 0 3.885-4.328 95.152-106.781 95.152-176.57C357.984 160.95 312.235 115.2 256 115.2m0 153.295c-28.293 0-51.31-23.018-51.31-51.31s23.017-51.311 51.31-51.311 51.31 23.018 51.31 51.31-23.017 51.311-51.31 51.311"
                                                  data-color="2"
                                                ></path>
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                        <div
                                          :id="`${rootId}_r_comp-mmna6rdi2__item-j9plerjk`"
                                          :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rdi2 ${rootId}_r_comp-mmna6rdi2__item-j9plerjk wixui-rich-text`"
                                        >
                                          <p class="font_9 wixui-rich-text__text">
                                            Of. Mz. C, Lt. 11, A. H. Paul Poblet, Manchay,
                                            Pachacámac.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            :id="`${rootId}_r_comp-mmna6rdq`"
                            role=""
                            :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rdq wixui-box`"
                            dir="ltr"
                          >
                            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
                            <div
                              data-testid="responsive-container-content"
                              role="group"
                              :class="`${rootId}_r_comp-mmna6rdq-container`"
                            >
                              <div
                                :id="`${rootId}_r_comp-mmna6rds`"
                                :class="`${rootId}_r_comp-mmna6rds EU_s7i wixui-horizontal-line`"
                              ></div>
                            </div>
                          </div>
                          <div
                            :id="`${rootId}_r_comp-mmna6rdt`"
                            role=""
                            :class="`HFEOE3 NaeT1r ${rootId}_r_comp-mmna6rdt wixui-box`"
                            dir="ltr"
                          >
                            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
                            <div
                              data-testid="responsive-container-content"
                              role="group"
                              :class="`${rootId}_r_comp-mmna6rdt-container`"
                            >
                              <div
                                :id="`${rootId}_r_comp-mmna6rdu1`"
                                :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${rootId}_r_comp-mmna6rdu1 wixui-rich-text`"
                              >
                                <p class="font_9 wixui-rich-text__text" style="text-align: center">
                                  © 2026 Consultora Munter &amp; Asociados S.A.C.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </footer>
</template>
