<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "@/components/HeadingPage.vue";
import { useNameRouter } from "@/hooks/useNameRouter";
import PricePlan from "./component/PricePlan.vue";
import { LIST_PLAN_UI } from "@/types/constant";
import DialogConfirmMain from "@/components/DialogConfirmMain.vue";

const nameRouter = useNameRouter();
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader :name-router="nameRouter" />
    <div class="card-main">
      <p
        class="text-base font-semibold text-[var(--color-text-secondary)] mb-6"
      >
        Choose plan to follow your idol
      </p>
      <div class="card-secondary mb-3">
        <PricePlan
          v-for="item in LIST_PLAN_UI"
          :plan="item.plan"
          :price="item.price"
          :kindOfPlanIcon="item.kindOfPlanIcon"
          :discount="item.discount"
          chosen-plan="sixMonth"
        />
      </div>
      <div class="flex justify-center">
        <DialogConfirmMain />
      </div>
    </div>
  </div>
</template>
