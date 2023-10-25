<script setup lang="ts">
interface Props {
  scale?: number;
  color?: string;
}
const { scale, color } = defineProps<Props>();
</script>
<template>
  <svg
    :width="scale ? 22 * scale : 22"
    :height="scale ? 23 * scale : 23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="chevron-left">
      <path
        id="Vector"
        d="M13.75 6.03201L8.25 11.532L13.75 17.032"
        :stroke="color ? color : '#202B3C'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
