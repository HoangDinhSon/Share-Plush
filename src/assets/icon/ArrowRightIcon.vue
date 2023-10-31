<script setup lang="ts">
interface Props {
  scale?: number;
  color?: string;
}
const props = defineProps<Props>();
const { scale } = props;
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="scale ? 28 * scale : 28"
    :height="scale ? 28 * scale : 28"
    viewBox="0 0 28 29"
    fill="none"
  >
    <path
      d="M17.5 14.532L10.5 7.53198"
      :stroke="color ? color : '#4F627D'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5 14.532L10.5 21.532"
      :stroke="color ? color : '#4F627D'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
