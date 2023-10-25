<script setup lang="ts">
import SharePlusSmallLogoIcon from "@/assets/icon/SharePlusSmallLogoIcon.vue";
import ButtonIconSmall from "@/components/ButtonIconSmall.vue";
</script>
<template>
  <div class="w-full flex justify-between ">
    <SharePlusSmallLogoIcon />
    <div class="flex gap-2">
      <ButtonIconSmall :name-icon="'search'" />
      <ButtonIconSmall :name-icon="'setting'" />
    </div>
  </div>
</template>
