<script setup lang="ts">
import ButtonIconSmall from "./ButtonIconSmall.vue";
import type { RouteRecordName } from "vue-router";
import { CONTENT_SUB_HEADER } from "@/types/constant";
import { NAME_ROUTER } from "@/routes/constant-router";

interface SubHeadingCommonProps {
  nameRouter: RouteRecordName | null | undefined;
}
const { nameRouter } = defineProps<SubHeadingCommonProps>();
const { followPlan } = NAME_ROUTER;
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
  case followPlan:
    contentLeft = CONTENT_SUB_HEADER.followPlant;
    break;
  default:
    contentLeft = ":((-check-switch";
}
</script>
<template>
  <div class="flex justify-between gap-2 font-medium text-[--color-text-grey]">
    <p>{{ contentLeft }}</p>
    <ButtonIconSmall :name-icon="'arrowLeft'" />
  </div>
</template>
