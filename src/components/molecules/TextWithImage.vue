<template>
  <section
    :class="['c-text-with-image', { 'c-text-with-image--reverse': reverse }]"
  >
    <img
      :src="imageSrc"
      :alt="altText"
      class="c-text-with-image__image"
    />
    <div class="c-text-with-image__text">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'StockX Mystery Box',
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.c-text-with-image {
  display: flex;
  align-items: center;
  gap: var(--gap--xxl);
  flex-wrap: wrap;
  margin-bottom: var(--margin-xxxl);
}

.c-text-with-image--reverse {
  flex-direction: row-reverse;
}

.c-text-with-image__image {
  width: 50%;
}

.c-text-with-image__text {
  flex: 1;
}

@media all and (max-width: 1600px) {
  .c-text-with-image__image {
    width: 100%;
    max-width: unset;
  }
  .c-text-with-image {
    flex-direction: column;
  }
}
</style>
