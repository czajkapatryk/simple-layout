<template>
  <div id="#app">
    <PaymentSection />
    <SectionTitle
      class="u-margin__top--xxxl"
      title="Top Tech Mystery Box at Unbeatable Prices"
      :chips="chips"
    />
  </div>
</template>
<script setup lang="ts">
import PaymentSection from '@/components/payment-section/organisms/PaymentSection.vue'
import SectionTitle from '@/components/section-title/molecules/SectionTitle.vue'

const chips = [
  'Fast shipping',
  'Easy returns',
  'Special discounts for students',
]
</script>
