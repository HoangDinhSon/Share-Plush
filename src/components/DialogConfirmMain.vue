<script setup lang="ts">
import Dialog from "primevue/dialog";
import { ref } from "vue";
import ButtonMain from "@/components/ButtonMain.vue";
import DivideSecond from "./DivideSecond.vue";
const visible = ref(false);
</script>

<template>
  <ButtonMain content="Follow" @click="visible = true" />
  <Dialog
    :closeOnEscape="true"
    v-model:visible="visible"
    modal
    header="Follow Successful"
    :style="{ width: '50vw' }"
    :pt="{
      header: {
        class: [
          'flex items-center justify-between shrink-0',
          'bg-white text-header-secondary  border-t-0 px-4 py-2  rounded-tl-lg rounded-tr-lg p-6',
          'dark:bg-gray-900  dark:text-white/80',
        ],
      },
      content: ({ state, instance }) => ({
        class: [
          'overflow-y-auto',
          'bg-white text-gray-700 ',
          ,
          'dark:bg-gray-900  dark:text-white/80',
          {
            grow: state.maximized,
          },
          {
            'rounded-bl-lg rounded-br-lg': !instance.$slots.footer,
          },
        ],
      }),
    }"
  >
    <DivideSecond />
    <div class="py-5 px-6">
      <p class="pb-3">
        Thank you for your following. Please return Telegram to finish purchase!
      </p>
      <div class="flex justify-center">
        <ButtonMain content="Telegram" @click="visible = false" />
      </div>
    </div>
  </Dialog>
</template>

