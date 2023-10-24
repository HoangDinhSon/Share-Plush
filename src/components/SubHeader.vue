<script setup lang="ts">
import SharePlusSmallLogoIcon from "../assets/icon/SharePlusSmallLogoIcon.vue";
import SettingIcon from "../assets/icon/SettingIcon.vue";
import SearchIcon from "../assets/icon/SearchIcon.vue";
const classButton = "bg-[#E2E8F0] h-[22px] px-[2px]  border-none rounded-lg";

</script>
<template>
  <div class="w-full flex justify-between card-main mb-2">
    <SharePlusSmallLogoIcon />
    <div class="flex gap-2">
      <Button
        :pt="{
          root: { class: classButton },
        }"
      >
        <SearchIcon :scale="0.8" />
      </Button>
      <Button
        :pt="{
          root: { class: classButton },
        }"
      >
        <SettingIcon />
      </Button>
    </div>
  </div>
</template>
