<script setup lang="ts">
interface Props {
  scale?: number;
  color?: string;
}
const { scale, color } = defineProps<Props>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="scale ? scale * 12 : 12"
    :height="scale ? scale * 12 : 12"
    viewBox="0 0 12 13"
    fill="none"
  >
    <path
      d="M4.33594 7.19693C4.33594 7.84193 4.83094 8.36193 5.44594 8.36193H6.70094C7.23594 8.36193 7.67094 7.90693 7.67094 7.34693C7.67094 6.73693 7.40594 6.52193 7.01094 6.38193L4.99594 5.68193C4.60094 5.54193 4.33594 5.32693 4.33594 4.71693C4.33594 4.15693 4.77094 3.70193 5.30594 3.70193H6.56094C7.17594 3.70193 7.67094 4.22193 7.67094 4.86693"
      :stroke="color ? color : '#485BC9'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 3.03201V9.03201"
      :stroke="color ? color : '#485BC9'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 11.032C8.76142 11.032 11 8.79344 11 6.03201C11 3.27059 8.76142 1.03201 6 1.03201C3.23858 1.03201 1 3.27059 1 6.03201C1 8.79344 3.23858 11.032 6 11.032Z"
      :stroke="color ? color : '#485BC9'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
