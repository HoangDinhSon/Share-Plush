<script setup lang="ts">
import Divider from "primevue/divider";
</script>
<template>
  <Divider
    :pt="{
      root: {
        class:
          'flex relative w-full  mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40 before:border-solid last:hidden',
      },
    }"
  />
</template>
