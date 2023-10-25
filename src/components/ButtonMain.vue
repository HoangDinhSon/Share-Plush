<script setup lang="ts">
interface ButtonMainProps {
  content: string;
}
const { content } = defineProps<ButtonMainProps>();
</script>
<template>
  <Button
    :label="content"
    :pt="{
      root: {
        class: 'my_gradient_button py-[8px] px-[32px]  rounded-lg',
      },
      label: { class: 'text-white' },
    }"
  />
</template>
<style>
.my_gradient_button {
  background: var(
    --Linear,
    linear-gradient(145deg, #485bc9 2.72%, #27aae2 97.87%)
  );
}
</style>
