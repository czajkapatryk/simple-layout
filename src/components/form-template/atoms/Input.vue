<template>
  <input
    :id="name"
    v-model="modelValue"
    :label="label"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    required
    @input="$emit('update:modelValue', modelValue)"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])

const modelValue = props.modelValue
</script>

<style scoped>
input {
  padding: var(--padding-xs) var(--padding);
  box-sizing: border-box;
  border: 1px solid var(--muted);
  font-size: var(--font_size);
  border-radius: 10px;
  width: 100%;
  line-height: 24px;
}

input:active {
  border: 1px solid var(--primary-variant);
  color: var(--primary-variant);
}
</style>
