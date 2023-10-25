<script setup lang="ts">
import { ref } from "vue";
import UserCarousel from "./UserCarousel.vue";
import listUser from "@/services/user";
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
<template>
  <div class="card-main mb-2">
    <div class="flex justify-between mb-3">
      <p class="text-header-main">Explore SHAREPLUS Idols:</p>
      <Button
        label="View all"
        link
        :pt="{
          root: { class: 'p-0' },
        }"
      />
    </div>
    <Carousel
      :value="listUser"
      :numVisible="4"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
      :circular="true"
    >
      <template #item="slotProps">
        <div>
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
