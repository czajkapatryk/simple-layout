<template>
  <div class="c-discount-tag">
    <h1 class="c-discount-tag--header">{{ header }}</h1>
    <span
      v-if="value"
      class="c-discount-tag--value"
      >{{ value }}</span
    >
  </div>
</template>

<script lang="ts" setup>
defineProps({
  header: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})
</script>
<style scoped>
.c-discount-tag {
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 100%;
  gap: var(--gap--xs);
  background: var(--lt-primary);
  color: var(--secondary);
  overflow: hidden;
}

.c-discount-tag--header {
  font-size: var(--font_size--xxxl);
  max-width: 160px;
}

.c-discount-tag--value {
  font-size: var(--font_size--xs);
  max-width: 160px;
}
</style>
