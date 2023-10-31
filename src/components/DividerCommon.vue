<script setup lang="ts">
import Divider from "primevue/divider";
interface DividerCommonProps {
  variant: "main" | "primary" | "secondary";
}
const { variant } = withDefaults(defineProps<DividerCommonProps>(), {
  variant: "main",
});
</script>
<template>
  <Divider
    :pt="{
      root: {
        class: [
          'flex relative w-full  mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40 before:border-solid last:hidden',
          {
            'my-[16px]': variant == 'main',
            'my-[10px]': variant == 'secondary',
            'my-[0]': variant == 'primary',
          },
        ],
      },
    }"
  />
</template>
