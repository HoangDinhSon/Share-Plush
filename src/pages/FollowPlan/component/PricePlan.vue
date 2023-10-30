<script setup lang="ts">
import IconTitle from "@/pages/NewFeed/component/IconTitle.vue";
import PlanOneMonthIcon from "@/assets/icon/PlanOneMonthIcon.vue";
import PlanThreeMonthIcon from "@/assets/icon/PlanThreeMonthIcon.vue";
import PlanSixMonthIcon from "@/assets/icon/PlanSixMonthIcon.vue";
import PlanOneYearIcon from "@/assets/icon/PlanOneYearIcon.vue";
import DivideSecond from "@/components/DivideSecond.vue";
import type { KindOfPlan } from "@/types/page-follow-plan";

interface PricePlantProps {
  plan: string;
  price: string;
  discount: string;
  kindOfPlanIcon: KindOfPlan;
}
const { plan, price, kindOfPlanIcon } = defineProps<PricePlantProps>();
</script>
<template>
  <div class="flex items-center gap-3 p-4">
    <PlanOneMonthIcon v-if="kindOfPlanIcon == 'oneMonth'" />
    <PlanThreeMonthIcon v-if="kindOfPlanIcon == 'threeMonth'" />
    <PlanSixMonthIcon v-if="kindOfPlanIcon == 'sixMonth'" />
    <PlanOneYearIcon v-if="kindOfPlanIcon == 'oneYear'" />
    <div>
      <p
        class="text-base font-semibold text-[var(--color-text-secondary)] mb-2"
      >
        {{ plan }}
      </p>
      <IconTitle which-children="1" :title="price" :discount="discount" />
    </div>
  </div>
  <DivideSecond />
</template>
