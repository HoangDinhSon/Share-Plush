<script setup lang="ts">
import UserCarousel from "./UserCarousel.vue";
import listUser from "@/services/user";
import Carousel from "primevue/carousel";
</script>
<template>
  <div class="card-main mb-2">
    <div class="flex justify-between mb-3 text-header-main">
      <p class="text-xs font-medium">Explore SHAREPLUS Idols:</p>
      <Button
        label="View all"
        link
        :pt="{
          label: { class: 'text-[var(--color-text-secondary)] font-medium' },
          root: { class: 'p-0 ' },
        }"
      />
    </div>
    <Carousel
      :value="listUser"
      :showNavigators="false"
      :showIndicators="false"
      :numVisible="3"
      :numScroll="2"
      :pt="{
        root: {
          class: 'rounded-[8px] overflow-hidden',
        },
        itemsContainer: { class: 'w-[342px] flex' },
      }"
    >
      <template #item="slotProps">
        <div class="w-[108px] overflow-hidden">
          <UserCarousel
            :alias="slotProps.data.alias"
            :avatar="slotProps.data.avatar"
            :cost="slotProps.data.cost"
            :follower="slotProps.data.follower"
            :frequency="slotProps.data.frequency"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>
