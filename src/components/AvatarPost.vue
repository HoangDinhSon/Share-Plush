<script setup lang="ts">
import Avatar from "primevue/avatar";
</script>
<template>
  <div class="flex items-center pl-[11px] mb-1">
    <Avatar
      image="https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750"
      class="mr-2 overflow-hidden w-[40px] h-[40px] object-contain"
      size="xlarge"
      shape="circle"
    />
    <div>
      <p class="text-name-main">My name is son</p>
      <p class="text-sub-header-main">
        Hello world
        <span class="ml-1">Share image</span>
      </p>
    </div>
  </div>
</template>
