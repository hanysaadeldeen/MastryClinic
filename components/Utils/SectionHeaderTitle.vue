<template>
  <div class="mb-10 lg:mb-16">
    <h1
      class="text-center text-2xl md:text-2xl lg:text-4xl font-semibold text-white mb-4 w-full"
    >
      {{ $t(title) }}
    </h1>
    <p class="text-center text-paragraph font-normal text-sm md:text-base">{{ $t(description) }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}
defineProps<Props>();
</script>

<style scoped></style>
