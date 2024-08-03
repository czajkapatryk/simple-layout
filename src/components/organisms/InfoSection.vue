<template>
  <TextWithImage image-src="/first_info_section.png">
    <template #default>
      <section class="c-section">
        <SectionTitle title="Curious about the StockX Mystery Box?" />
        <div class="c-section__content">
          <span
            >Experience the thrill of unboxing cutting-edge gadgets with Stockx
            Mystery Boxes. Each box is a treasure trove of high-quality
            electronics, handpicked to elevate your tech game.</span
          >
          <span
            >Expect the unexpected! Our boxes are packed with the latest
            gadgets, from smartphones to gaming consoles, ensuring you get the
            best tech surprises every time.</span
          >
        </div>
      </section>
    </template>
  </TextWithImage>
  <TextWithImage
    :reverse="true"
    image-src="/second_info_section.png"
  >
    <template #default>
      <section class="c-section">
        <SectionTitle title="Why is everyone buzzing about these boxes?" />
        <div class="c-section__content">
          <span
            >StockX Mystery Boxes are not just about products; they’re about the
            experience. Imagine the excitement of unveiling top-tier electronics
            at a fraction of the cost.</span
          >
          <span
            >Our boxes include a variety of premium tech items, making it a
            must-have for every tech enthusiast. Join the buzz and see why
            everyone is raving about the unbeatable value and surprise factor of
            Stockx Mystery Boxes!</span
          >
        </div>
      </section>
    </template>
  </TextWithImage>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/molecules/SectionTitle.vue'
import TextWithImage from '@/components/molecules/TextWithImage.vue'
</script>
