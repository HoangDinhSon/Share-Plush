<script setup lang="ts">
import NoDataIcon from "@/assets/icon/NoDataIcon.vue";
interface NoDataProps {
  content?: string;
}
const { content } = defineProps<NoDataProps>();
</script>
<template>
  <div class="card-main relative flex justify-center items-center">
    <p class="absolute top-[85px] max-w-[200px] text-center">
      {{ content }}
    </p>
    <NoDataIcon />
  </div>
</template>
