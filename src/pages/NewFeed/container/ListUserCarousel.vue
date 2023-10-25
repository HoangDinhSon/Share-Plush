<script setup lang="ts">
import UserCarousel from "./UserCarousel.vue";
import listUser from "@/services/user";
</script>
<template>
  <div class="card-main mb-2">
    <div class="flex justify-between mb-3 text-header-main">
      <p>Explore SHAREPLUS Idols:</p>
      <Button
        label="View all"
        link
        :pt="{
          root: { class: 'p-0 text-[var(--color-text-secondary)]' },
        }"
      />
    </div>
    <Carousel
      :value="listUser"
      :numVisible="3"
      :numScroll="1"
      :showNavigators="false"
      :showIndicators="false"
      :circular="true"
      :unstyled="true"
      :pt="{
        root: {
          class: 'rounded-[8px] overflow-hidden',
        },
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
