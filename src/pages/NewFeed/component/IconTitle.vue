<script setup lang="ts">
import DollarIcon from "@/assets/icon/DollarIcon.vue";
import UserIcon from "@/assets/icon/UserIcon.vue";
import VideoIcon from "@/assets/icon/VideoIcon.vue";
interface IconTitleProps {
  whichChildren: string;
  title: string;
}

const { whichChildren, title } = defineProps<IconTitleProps>();
console.log(whichChildren);

</script>
<template>
  <div class="flex items-center gap-2">
    <div v-if="whichChildren=='1'"><DollarIcon/></div>
    <div v-else-if="whichChildren=='2'"><UserIcon/> </div>
    <div v-else="whichChildren=='3'"><VideoIcon/></div>
    <p>{{ title }}</p>
  </div>
</template>
