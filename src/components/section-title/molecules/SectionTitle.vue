<template>
  <div class="c-section__title">
    <div class="c-section__title--container">
      <h1>{{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
    </div>
    <div
      v-if="chips.length"
      class="c-section__title--chips"
    >
      <span>
        {{ formattedChips }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  chips: {
    type: Array,
    default: () => [],
  },
})

const formattedChips = computed(() => props.chips.join(' | '))
</script>

<style scoped>
.c-section__title {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--margin-xl);
}

.c-section__title--container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.c-section__title--chips {
  text-align: center;
  font-size: var(--font_size--xl);
  color: var(--lt-primary);
  margin-top: var(--margin-xs);
}

h1 {
  color: var(--primary-variant);
  font-size: var(--font_size--xxxxl);
  font-weight: 800;
  line-height: 110%;
}

h2 {
  font-size: var(--font_size--xl);
}
</style>
