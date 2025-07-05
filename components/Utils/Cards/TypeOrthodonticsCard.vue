<template>
  <div class="glass flex flex-col gap-8 p-4 rounded-xl items-center justify-center h-full">
    <img :src="img" class="w-full" :alt="$t(title)">
    <div>
      <h2 class="font-medium text-center text-xl md:text-2xl mb-4  text-white">{{ $t(title) }}</h2>
      <p class="font-medium text-center text-base  text-secondaryParagraph">{{ $t(description) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface Props {
  title: string
  description: string
  img: string

}

defineProps<Props>()
</script>

<style scoped></style>