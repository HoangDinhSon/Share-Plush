<script setup lang="ts">
import ButtonIconSmall from "./ButtonIconSmall.vue";
import type { RouteRecordName } from "vue-router";
import { CONTENT_SUB_HEADER } from "@/types/constant";

interface SubHeadingCommonProps {
  nameRouter: RouteRecordName | null | undefined;
}
const { nameRouter } = defineProps<SubHeadingCommonProps>();
let contentLeft = " ";
switch (nameRouter) {
  case "search":
    contentLeft = CONTENT_SUB_HEADER.search;
    break;
  case "setting":
    contentLeft = CONTENT_SUB_HEADER.setting;
    break;
  case "profile":
    contentLeft = CONTENT_SUB_HEADER.userProfile;
    break;
  default:
    contentLeft = ":((-check-switch";
}
</script>
<template>
  <div class="flex justify-between gap-2">
    <p>{{ contentLeft }}</p>
    <ButtonIconSmall :name-icon="'arrowLeft'" />
  </div>
</template>
