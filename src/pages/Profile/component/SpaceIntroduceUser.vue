<script setup lang="ts">
import AvatarOnly from "@/pages/Profile/component/AvatarOnly.vue";
import ButtonMain from "@/components/ButtonMain.vue";
interface SpaceIntroduceUserProps {
  coverPhoto: string;// anh bia 
  avatar: string;
  alias: string;
  numberOfImage: string | number;
  numberOfVideo: string | number;
  description: string;
  
}
const { coverPhoto,alias, numberOfVideo,numberOfImage ,description,avatar} = defineProps<SpaceIntroduceUserProps>();
</script>
<template>
  <div class="card-main mb-2">
    <div class="relative mb-[40px]">
      <img
        :src="coverPhoto"
        class="w-full h-[179px] overflow-hidden object-contain object-center"
      />
      <AvatarOnly :avatar="avatar" />
    </div>
    <div class="text-center">
      <p class="text-header-secondary blankMiddle">{{ alias }}</p>
      <p class="text-[var(--color-text-grey)] ">
        {{ `${numberOfImage} Images . ${numberOfVideo} Videos` }}
      </p>
      <p class="text-sub-header-main blankMiddle">
        {{ description }}
      </p>
      <div class="blankMiddle">
        <ButtonMain content="Follow" variant="secondary" />
      </div>
    </div>
  </div>
</template>
