<template>

  <div class="glass gap-7 lg:flex-row flex-col  flex rounded-xl p-7 bg-blue-900">
  <div class="relative block max-h-[280px] md:w-[25%] w-full min-w-[155px] ">
    <img loading="lazy" v-if="img" :src="img" :alt="title" class="object-contain rounded-xl" />
  </div>
  <div class=" w-full lg:w-[65%] ">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-white">
      {{ $t(title) }}
    </h2>
    <p class="text-lg md:text-xl font-normal text-paragraph">
      {{ $t(description) }} 
    </p>
  </div>  
</div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  img?: string;
}

defineProps<Props>();
</script>

<style scoped></style>
