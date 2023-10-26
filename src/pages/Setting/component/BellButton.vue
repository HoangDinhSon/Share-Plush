<script setup lang="ts">
import BellBlueIcon from "@/assets/icon/BellBlueIcon.vue";
import BellRedIcon from "@/assets/icon/BellRedIcon.vue";
interface BellButtonProps {
  status: boolean;
}
const { status } = defineProps<BellButtonProps>();
</script>
<template>
  <BellBlueIcon v-if="status" />
  <BellRedIcon v-else />
</template>
