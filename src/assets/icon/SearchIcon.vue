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
    :width="scale ? 22 * scale : 22"
    :height="scale ? 23 * scale : 23"
     viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10.786"
      cy="11.3181"
      r="8.23951"
      :stroke="color ? color : '#485BC9'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5167 17.4767L19.7471 20.6987"
      :stroke="color ? color : '#485BC9'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
