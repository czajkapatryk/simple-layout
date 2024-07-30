<template>
  <section class="o-payment-section">
    <ImageSlider :images="images" />
    <div>
      <SectionTitle
        title="Chance to win a StockX Mystery Box today!"
        subtitle="Unleash the Excitement of Mystery Electronics"
      />
      <PaymentForm
        :data="formData"
        @update:data="handleUpdate"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PaymentFormInterface from '@/features/payment/interfaces/PaymentFormInterface'
import ImageSlider from '@/components/image-slider/molecules/ImageSlider.vue'
import PaymentForm from '@/components/payment/molecules/PaymentForm.vue'
import SectionTitle from '@/components/section-title/molecules/SectionTitle.vue'
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

const formData = ref<PaymentFormInterface>({
  first_name: '',
  last_name: '',
  street: '',
  postal_code: '',
  city: '',
  phone_number: null as number | null,
  email: '',
})

const handleUpdate = (updatedData: PaymentFormInterface) => {
  formData.value = updatedData
  alert('Proceeded to payment')
}
</script>
