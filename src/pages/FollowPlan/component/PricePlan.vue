<script setup lang="ts">
import IconTitle from "@/pages/NewFeed/component/IconTitle.vue";
import PlanOneMonthIcon from "@/assets/icon/PlanOneMonthIcon.vue";
import PlanThreeMonthIcon from "@/assets/icon/PlanThreeMonthIcon.vue";
import PlanSixMonthIcon from "@/assets/icon/PlanSixMonthIcon.vue";
import PlanOneYearIcon from "@/assets/icon/PlanOneYearIcon.vue";
import DividerCommon from "@/components/DividerCommon.vue";
import type { KindOfPlan } from "@/types/page-follow-plan";

interface PricePlantProps {
  plan: string;
  price: string;
  discount: string;
  kindOfPlanIcon: KindOfPlan;
  chosenPlan?: string;
}
const { plan, price, kindOfPlanIcon, chosenPlan } =
  defineProps<PricePlantProps>();
const isActive = chosenPlan == kindOfPlanIcon;
</script>
<template>
  <div class="flex items-center gap-3 p-3" :class="{ active: isActive }">
    <PlanOneMonthIcon v-if="kindOfPlanIcon == 'oneMonth'" />
    <PlanThreeMonthIcon v-if="kindOfPlanIcon == 'threeMonth'" />
    <PlanSixMonthIcon v-if="kindOfPlanIcon == 'sixMonth'" />
    <PlanOneYearIcon v-if="kindOfPlanIcon == 'oneYear'" />
    <div>
      <p
        class="text-base font-semibold text-[var(--color-text-secondary)] mb-2"
        :class="{ 'text-[var(--color-text-light)]': isActive }"
      >
        {{ plan }}
      </p>
      <IconTitle
        which-children="1"
        :title="price"
        :discount="discount"
        :is-active="isActive"
        variant="discount"
      />
    </div>
  </div>
  <DividerCommon variant="primary" />
</template>
<style scoped>
.active {
  background-color: var(--color-bg-main);
}
</style>
