<script setup lang="ts">
const cards = [
  { itemId: 'item1', title: 'Derecho de familia', image: '/images/consultoria.jpg', ssrSrc: 'true', position: '50% 50%' },
  { itemId: 'item-j9ples3e', title: 'Arquitectura e ingeniería', image: '/images/arquitectura-planos.jpg', ssrSrc: '/images/arquitectura-planos.jpg', position: '50% 50%' },
  { itemId: 'item-mmng1kz9', title: 'Contabilidad y finanzas', image: '/images/finanzas.jpeg', ssrSrc: 'true', position: '50% 50%' },
  { itemId: 'item-mmng1m3y', title: 'Comercio exterior', image: '/images/portada-derecho.jpg', ssrSrc: '/infinity-assets/cab28935363f6e7abbd2.jpg', position: '70% 50%' },
]
</script>

<template>
  <div id="comp-mmof7l0g" class="ArRNfA comp-mmof7l0g wixui-repeater">
    <div data-testid="responsive-container-content" role="list" class="comp-mmof7l0g-container">
      <div
        v-for="card in cards"
        :id="`comp-mmof7l0h6__${card.itemId}`"
        :key="card.itemId"
        tabindex="0"
        role="listitem"
        :class="`HFEOE3 NaeT1r comp-mmof7l0h6-container comp-mmof7l0h6 comp-mmof7l0h6__${card.itemId} wixui-repeater__item`"
        dir="ltr"
      >
        <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-repeater__item"></div>
        <div
          :id="`comp-mmof7l0k1__${card.itemId}`"
          data-testid="imageX"
          :class="`i4P7Vt comp-mmof7l0k1 comp-mmof7l0k1__${card.itemId} ZYZJBv wixui-image`"
        >
          <div class="YX2qkL" :data-motion-part="`BG_LAYER comp-mmof7l0k1__${card.itemId}`">
            <div :data-motion-part="`BG_MEDIA comp-mmof7l0k1__${card.itemId}`">
              <wow-image
                :id="`img-comp-mmof7l0k1__${card.itemId}`"
                data-is-responsive="true"
                :data-has-ssr-src="card.ssrSrc"
                :data-motion-part="`BG_IMG comp-mmof7l0k1__${card.itemId}`"
                class="qR3Oj6"
              ><picture><img
                loading="lazy"
                :src="card.image"
                alt="Fotografía ilustrativa de nuestros servicios"
                :style="{ objectFit: 'cover', objectPosition: card.position }"
              /></picture></wow-image>
            </div>
          </div>
        </div>
        <div
          :id="`comp-mmof923m__${card.itemId}`"
          role=""
          :class="`HFEOE3 NaeT1r comp-mmof923m-container comp-mmof923m comp-mmof923m__${card.itemId} wixui-box`"
          dir="ltr"
        >
          <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
          <div
            :id="`comp-mmofouos__${card.itemId}`"
            role=""
            :class="`HFEOE3 NaeT1r comp-mmofouos-container comp-mmofouos comp-mmofouos__${card.itemId} wixui-box`"
            dir="ltr"
          >
            <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
            <div
              :id="`comp-mmof7l0o__${card.itemId}`"
              :class="`N8MGzv _v6ohL AWXfZq PO9MfV comp-mmof7l0o comp-mmof7l0o__${card.itemId} wixui-rich-text`"
            >
              <h4 class="font_4 wixui-rich-text__text">{{ card.title }}</h4>
            </div>
            <div
              :id="`comp-mmofose4__${card.itemId}`"
              :class="`comp-mmofose4 comp-mmofose4__${card.itemId} wixui-vector-image`"
            >
              <a data-testid="linkElement" href="/contacto" target="_self" class="IT88M3">
                <div :data-testid="`svgRoot-comp-mmofose4__${card.itemId}`" class="iL7Pq5 gx51wo">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    viewBox="0 0 128 128"
                    height="512"
                    data-type="shape"
                    role="presentation"
                    aria-hidden="true"
                    aria-label=""
                  >
                    <g>
                      <path d="M64 0C28.711 0 0 28.711 0 64s28.711 64 64 64 64-28.711 64-64S99.289 0 64 0m0 120C33.121 120 8 94.879 8 64S33.121 8 64 8s56 25.121 56 56-25.121 56-56 56m26.828-58.828a3.997 3.997 0 0 1 0 5.656l-20 20C70.047 87.609 69.023 88 68 88s-2.047-.391-2.828-1.172a3.997 3.997 0 0 1 0-5.656L78.344 68H40c-2.209 0-4-1.789-4-4s1.791-4 4-4h38.344L65.172 46.828c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0z" />
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
