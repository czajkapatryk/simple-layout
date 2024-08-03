<template>
  <FormTemplate
    class="c-payment-form"
    title="Payment Details"
    @submit="handleSubmit"
  >
    <template #content>
      <div class="c-payment-form__container">
        <div class="c-payment-form__container--input-group">
          <Input
            v-model="formData.first_name"
            name="First name"
            label="First Name"
            placeholder="First Name"
          />
          <Input
            v-model="formData.last_name"
            name="Last name"
            label="Last name"
            placeholder="Last name"
          />
        </div>
        <Input
          v-model="formData.street"
          name="Street"
          label="Street"
          placeholder="Street"
        />
        <div class="c-payment-form__container--input-group">
          <Input
            v-model="formData.postal_code"
            name="Postal code"
            label="Postal code"
            placeholder="Postal code"
          />
          <Input
            v-model="formData.city"
            name="City"
            label="City"
            placeholder="City"
          />
        </div>
        <Input
          v-model="formData.phone_number"
          name="Phone number"
          label="Phone number"
          type="number"
          placeholder="Phone number"
        />
        <Input
          v-model="formData.email"
          name="Email"
          label="Email"
          placeholder="Email"
        />
      </div>
    </template>
  </FormTemplate>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import PaymentFormInterface from '@/interfaces/PaymentFormInterface'
import FormTemplate from '@/components/molecules/FormTemplate.vue'
import Input from '@/components/atoms/Input.vue'

const props = defineProps<{
  data: PaymentFormInterface
}>()

const emit = defineEmits(['update:data'])

const formData = reactive({
  ...props.data,
})

const handleSubmit = () => {
  emit('update:data', { ...formData })
}
</script>
