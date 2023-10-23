<script setup lang="ts">
import SharePlusLogo from "../../assets/icon/SharePlusLogoIcon.vue";
import HomeLineIcon from "../../assets/icon/HomeLineIcon.vue";
</script>
<template>
  <div class="relative">
    <div class="flex w-full h-screen justify-center items-center  my_gradient">
      <SharePlusLogo />
    </div>
    <HomeLineIcon class="absolute bottom-2"/>
  </div>
</template>
<style>
.my_gradient {
  background: linear-gradient(145deg, #543288 2.72%, #43329A 32.46%, #485BC9 66.15%, #27AAE2 97.87%);
}
</style>
