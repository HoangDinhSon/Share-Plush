<script setup lang="ts">
import Avatar from "primevue/avatar";
interface AvatarOnlyProps {
  avatar: string;
}
const { avatar } = defineProps<AvatarOnlyProps>();
</script>
<template>
  <Avatar
    :image="avatar"
    shape="circle"
    :pt="{
      root: {
        class: [
          'flex items-center justify-center bg-gray-300 dark:bg-gray-800 rounded-full text-base ',
          'w-[80px] h-[80px] overflow-hidden object-contain absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]',
          'outline-4 outline outline-[#FEFCFFB2]',
        ],
      },
    }"
  />
</template>
