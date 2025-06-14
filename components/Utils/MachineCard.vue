<template>

    <div class="glass gap-7 lg:flex-row flex-col  flex rounded-xl p-7 bg-blue-900">
    <div class="relative block max-h-[392px] md:w-[25%] w-full min-w-[155px] ">
      <img :src="img" alt="title" class=" object-contain rounded-xl" />
    </div>
    <div class=" w-full lg:w-[65%] ">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white">
        {{ $t(title) }}
      </h2>
      <p class="lista relative px-4 my-1.5 text-lg md:text-xl font-normal text-paragraph" v-for="item in info"

      :class="locale === 'en' ? 'before:left-0' : 'before:right-0'"
      >
        {{ $t(item) }} 
      </p>
    </div>  
  </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    title: string;
    info: string[];
    img: string;
  }
  const { locale } = useI18n();
defineProps<Props>();

  </script>
  
  <style scoped>

.lista::before {
  content: "*";
  position: absolute;
  top: 20px;
  transform: translateY(-50%);
  color: var(--paragraph);
  font-size: 1em;
  font-weight: bold; 
}
</style>
  