<script setup lang="ts">
import DollarIcon from "@/assets/icon/DollarIcon.vue";
import UserIcon from "@/assets/icon/UserIcon.vue";
import VideoIcon from "@/assets/icon/VideoIcon.vue";

interface IconTitleProps {
  whichChildren: string;
  title: string;
  discount?: string;
  isActive?: boolean;
}

const { whichChildren, title, discount } = defineProps<IconTitleProps>();
</script>
<template>
  <div class="flex items-center gap-1">
    <div v-if="whichChildren == '1'">
      <DollarIcon :color="isActive ? 'white' : ''" />
    </div>
    <div v-else-if="whichChildren == '2'"><UserIcon /></div>
    <div v-else="whichChildren == '3'"><VideoIcon /></div>
    <p
      v-if="!!discount || discount == ''"
      class="text-ellipsis whitespace-nowrap overflow-hidden text-[14px] leading-4"
      :class="{ 'text-white': isActive }"
    >
      {{ title }}
      <span
        v-if="!!discount || discount == ''"
        class="text-[red] ml-3"
        :class="{ 'text-[white]': isActive }"
        >{{ discount }}</span
      >
    </p>
    <p
      v-else
      class="text-ellipsis whitespace-nowrap overflow-hidden text-[11px] leading-4"
    >
      {{ title }}
    </p>
  </div>
</template>
