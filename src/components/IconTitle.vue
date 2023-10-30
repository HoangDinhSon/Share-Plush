<script setup lang="ts">
import DollarIcon from "@/assets/icon/DollarIcon.vue";
import UserIcon from "@/assets/icon/UserIcon.vue";
import VideoIcon from "@/assets/icon/VideoIcon.vue";
interface IconTitleProps {
  whichChildren: string;
  title: string;
}

const { whichChildren, title } = defineProps<IconTitleProps>();
</script>
<template>
  <div class="flex items-center gap-1">
    <div v-if="whichChildren == '1'"><DollarIcon /></div>
    <div v-else-if="whichChildren == '2'"><UserIcon /></div>
    <div v-else="whichChildren == '3'"><VideoIcon /></div>
    <p
      class="text-ellipsis whitespace-nowrap overflow-hidden text-[11px] leading-4"
    >
      {{ title }}
    </p>
  </div>
</template>
whitespace-pre
