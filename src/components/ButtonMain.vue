<script setup lang="ts">
interface ButtonMainProps {
  content: string;
  variant?: "primary" | "secondary";
}
const { content, variant } = withDefaults(defineProps<ButtonMainProps>(), {
  variant: "primary",
});
</script>
<template> 
  <Button
    :label="content"
    :pt="{
      root: [
        'my_gradient_button py-[8px] rounded-lg',
        {
          'px-[32px]': variant == 'primary',
          'px-[16px]': variant == 'secondary',
        },
      ],
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
