<template>
  <div>
    <ImageSlider :images="images" />
  </div>
</template>
<script setup lang="ts">
import ImageSlider from '@/components/image-slider/molecules/ImageSlider.vue'
const images = [
  {
    src: '/image_1.png',
    header: '$1.99',
    value: 'Original value $500',
  },
  {
    src: '/image_2.jfif',
    header: '$2.99',
    value: 'Original value $700',
  },
  {
    src: '/image_3.png',
    header: '$0.99',
    value: 'Original value $100',
  },
  {
    src: '/image_4.jfif',
    header: '$5.99',
    value: 'Original value $800',
  },
]
</script>
