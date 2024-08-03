<template>
  <div class="c-slider">
    <div class="c-slider__discount-tag">
      <DiscountTag
        v-if="discountTag"
        :header="mainImage.header"
        :value="mainImage.value"
      />
    </div>
    <div class="c-slider__main-image">
      <img
        :src="mainImage.src"
        alt="Main Image"
      />
    </div>
    <div class="c-slider__thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        alt="Thumbnail"
        class="c-slider__thumbnails--content"
        :class="{
          'c-slider__thumbnails--content-active': mainImage.src === image.src,
        }"
        @click="updateMainImage(image)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import ImageSliderInterface from '@/interfaces/ImageSliderInterface'
import DiscountTag from '@/components/atoms/DiscountTag.vue'

const props = defineProps({
  discountTag: {
    type: Boolean,
    default: true,
  },
  images: {
    type: Array as PropType<ImageSliderInterface[]>,
    required: true,
  },
})

const images = ref<ImageSliderInterface[]>(props.images)
const mainImage = ref<ImageSliderInterface>(images.value[0])

const updateMainImage = (image: ImageSliderInterface) => {
  mainImage.value = image
}
</script>
