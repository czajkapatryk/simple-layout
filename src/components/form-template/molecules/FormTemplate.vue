<template>
  <div class="c-form-template">
    <h2 class="c-form-template__title">{{ title }}</h2>
    <form @submit.prevent="$emit('submit')">
      <slot name="content" />
      <button type="submit">{{ buttonTitle }}</button>
    </form>
    <div class="c-form-template__icons">
      <img
        v-for="(image, index) in formFooterImages"
        :key="index"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Enter details',
  },
  buttonTitle: {
    type: String,
    default: 'PROCEED TO PAYMENT',
  },
})

defineEmits(['submit'])

const formFooterImages = [
  {
    src: '/mcafee.png',
    alt: 'McAfee SECURE',
  },
  {
    src: '/truste.png',
    alt: 'truste verified',
  },
  {
    src: '/encryption.png',
    alt: '256 BIT encryption',
  },
]
</script>

<style scoped>
.c-form-template {
  padding: var(--padding-xl);
  border: 1px solid var(--muted);
  background: var(--secondary);
  border-radius: 20px;
}

.c-form-template__title {
  font-size: var(--font_size--xxl);
  margin-bottom: var(--margin-xl);
  color: var(--primary);
  width: 100%;
  text-align: center;
}

button {
  width: 100%;
  padding: var(--padding-xs) var(--padding);
  background: var(--lt-primary);
  color: var(--secondary);
  margin-top: var(--margin-xl);
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  line-height: 24px;
}

form {
  width: 100%;
}

button:hover {
  background-color: #003315;
}

.c-form-template__icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
  margin-top: var(--margin-xl);
}

.c-form-template__icons img {
  width: 93px;
  height: 40px;
}
</style>
