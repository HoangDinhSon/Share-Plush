<script setup lang="ts">
import DollarIcon from "@/assets/icon/DollarIcon.vue";
import UserIcon from "@/assets/icon/UserIcon.vue";
import VideoIcon from "@/assets/icon/VideoIcon.vue";

interface IconTitleProps {
  whichChildren: string;
  title: string;
  discount?: string;
  isActive?: boolean;
  variant?: "discount" | "main";
}

const { whichChildren, title, discount, isActive, variant } = withDefaults(
  defineProps<IconTitleProps>(),
  {
    variant: "main",
  }
);
</script>
<template>
  <div class="flex items-center gap-1">
    <div v-if="whichChildren == '1'">
      <DollarIcon v-if="variant == 'main'" />
      <DollarIcon
        :color="isActive ? 'white' : ''"
        :scale="1.5"
        v-if="variant == 'discount'"
      />
    </div>
    <div v-else-if="whichChildren == '2'"><UserIcon /></div>
    <div v-else="whichChildren == '3'"><VideoIcon /></div>

    <p
      v-if="variant == 'discount'"
      class="text-ellipsis whitespace-nowrap overflow-hidden text-[14px] leading-4"
      :class="{ 'text-[white]': isActive }"
    >
      {{ title }}
      <span class="text-discount ml-3" :class="{ 'text-[white]': isActive }">{{
        discount
      }}</span>
    </p>
    <p
      v-if="variant=='main'"
      class="text-ellipsis whitespace-nowrap overflow-hidden text-[11px] leading-4"
    >
      {{ title }}
    </p>
  </div>
</template>
