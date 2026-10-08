<script setup lang="ts">
defineProps<{
  sectionId: string
  boxId: string
  titleId: string
  image: string
  title: string
}>()
</script>

<template>
  <section
    :id="sectionId"
    tabindex="-1"
    data-block-level-container="Section"
    :class="`munter-page-cover ke5pl1 ${sectionId} wixui-section fwXYgt`"
    data-testid="section-container"
  >
    <div
      :id="`bgLayers_${sectionId}`"
      data-hook="bgLayers"
      :data-motion-part="`BG_LAYER ${sectionId}`"
      class="QG9w8P"
    >
      <div data-testid="colorUnderlay" class="LNYVZi ayCf9D"></div>
      <div
        :id="`bgMedia_${sectionId}`"
        :data-motion-part="`BG_MEDIA ${sectionId}`"
        class="ROWgFb"
      >
        <wow-image
          :id="`img_${sectionId}`"
          class="Qh0lWW ayCf9D fO4mKs NgeJ4N bgImage"
          :data-motion-part="`BG_IMG ${sectionId}`"
          data-bg-effect-name=""
          data-has-ssr-src="true"
        ><img
          :src="image"
          alt="Fotografía ilustrativa de nuestros servicios"
          style="width: 100%; height: 100%; object-fit: cover; object-position: 42% 0%"
          width="100"
          height="100"
          data-ssr-src-done="true"
          fetchpriority="high"
        /></wow-image>
      </div>
    </div>
    <div
      data-testid="responsive-container-content"
      role="group"
      :class="`${sectionId}-container max-width-container`"
    >
      <div :id="boxId" role="" :class="`HFEOE3 NaeT1r ${boxId} wixui-box`" dir="ltr">
        <div aria-hidden="true" class="jdJeEr NYfD3h inner-box wixui-box"></div>
        <div data-testid="responsive-container-content" role="group" :class="`${boxId}-container`">
          <div
            :id="titleId"
            :class="`N8MGzv _v6ohL AWXfZq PO9MfV ${titleId} wixui-rich-text`"
          >
            <h1 class="font_0 wixui-rich-text__text">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
