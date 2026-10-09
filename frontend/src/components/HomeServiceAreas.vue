<script setup lang="ts">
import AreaIcon from './AreaIcon.vue'

const areas = [
  {
    itemId: 'item1',
    kind: 'legal',
    title: 'Asesoría legal',
    description:
      'Derecho de familia y derecho tributario municipal. Orientación y acompañamiento según las necesidades de tu caso.',
  },
  {
    itemId: 'item-j9ples3e',
    kind: 'building',
    title: 'Arquitectura e ingeniería',
    description:
      'Diseño de planos, modelado 3D, topografía, licencias y regularización de edificaciones para tu proyecto.',
  },
  {
    itemId: 'item-j9plerjk',
    kind: 'finance',
    title: 'Contabilidad y finanzas',
    description:
      'Asesoría contable, administrativa y financiera para organizar la gestión de tu negocio.',
  },
]
</script>

<template>
  <div id="comp-mmn444su" class="ArRNfA comp-mmn444su wixui-repeater">
    <div data-testid="responsive-container-content" role="list" class="comp-mmn444su-container">
      <div
        v-for="area in areas"
        :id="`comp-mmn444sz__${area.itemId}`"
        :key="area.itemId"
        role="listitem"
        :class="`HFEOE3 NaeT1r comp-mmn444sz-container comp-mmn444sz comp-mmn444sz__${area.itemId} wixui-repeater__item`"
        dir="ltr"
      >
        <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-repeater__item"></div>
        <div
          :id="`comp-mmn4j7hg__${area.itemId}`"
          role=""
          :class="`HFEOE3 NaeT1r comp-mmn4j7hg-container comp-mmn4j7hg comp-mmn4j7hg__${area.itemId} wixui-box`"
          dir="ltr"
        >
          <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
          <div
            :id="`comp-mmn49law__${area.itemId}`"
            :class="`comp-mmn49law comp-mmn49law__${area.itemId} wixui-vector-image`"
          >
            <AreaIcon :kind="area.kind" />
          </div>
          <div
            :id="`comp-mmn49xpx__${area.itemId}`"
            :class="`N8MGzv _v6ohL AWXfZq PO9MfV comp-mmn49xpx comp-mmn49xpx__${area.itemId} wixui-rich-text`"
          >
            <h4 class="font_4 wixui-rich-text__text">{{ area.title }}</h4>
          </div>
          <div
            :id="`comp-mmn4hxuj__${area.itemId}`"
            :class="`N8MGzv _v6ohL AWXfZq PO9MfV comp-mmn4hxuj comp-mmn4hxuj__${area.itemId} wixui-rich-text`"
          >
            <p class="font_8 wixui-rich-text__text">{{ area.description }}</p>
          </div>
          <div
            :id="`comp-mmn4mg9n__${area.itemId}`"
            :class="`comp-mmn4mg9n comp-mmn4mg9n__${area.itemId} EU_s7i wixui-horizontal-line`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
