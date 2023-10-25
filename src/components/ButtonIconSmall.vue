<script setup lang="ts">
import SettingIcon from "@/assets/icon/SettingIcon.vue";
import SearchIcon from "@/assets/icon/SearchIcon.vue";
import ArrowLeftIcon from "@/assets/icon/ArrowLeftIcon.vue";
const classButton = "bg-[#E2E8F0] h-[22px] px-[2px]  border-none rounded-lg";
interface ButtonIconSmallProps {
  nameIcon: "search" | "setting" | "arrowLeft";
}
const { nameIcon } = defineProps<ButtonIconSmallProps>();
</script>
<template>
  <Button
    :pt="{
      root: { class: classButton },
    }"
  >
    <SearchIcon :scale="0.8" v-if="nameIcon == 'search'" />
    <SettingIcon :scale="0.8" v-if="nameIcon == 'setting'" />
    <ArrowLeftIcon :scale="0.8" v-if="nameIcon == 'arrowLeft'" />
  </Button>
</template>
