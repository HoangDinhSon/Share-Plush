<script setup lang="ts">
interface PlanSettingProps {
  plan: string;
  time: number | string;
}
const { plan, time } = defineProps<PlanSettingProps>();
</script>
<template>
  <div class="text-center">
    <p class="capitalize text-[--color-text-dark]">{{ plan }}</p>
    <p class="text-[#485BC9] text-[12px]">{{ `${time} days left` }}</p>
  </div>
</template>
