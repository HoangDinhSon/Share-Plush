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
    class="w-[80px] h-[80px] ml-0 overflow-hidden absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]"
  />
</template>
