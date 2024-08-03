<template>
  <PaymentSection />
  <SectionTitle
    class="u-margin__top--xxxl"
    title="Top Tech Mystery Box at Unbeatable Prices"
    custom-container-class="c-custom-section-title"
    :chips="chips"
  />
  <InfoSection />
  <Footer />
</template>
<script setup lang="ts">
import PaymentSection from '@/components/organisms/PaymentSection.vue'
import SectionTitle from '@/components/molecules/SectionTitle.vue'
import InfoSection from '@/components/organisms/InfoSection.vue'
import Footer from '@/components/organisms/Footer.vue'

const chips = [
  'Fast shipping',
  'Easy returns',
  'Special discounts for students',
]
</script>
