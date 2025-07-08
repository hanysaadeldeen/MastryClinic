<template>
  <div class="mb-10 lg:mb-16 relative z-10">
    <h1 class="text-center text-2xl md:text-2xl lg:text-4xl font-normal text-white mb-4 w-full">
      {{ $t(title) }}
    </h1>
    <p v-if="description" class="text-center text-secondaryParagraph font-normal text-sm md:text-base">{{
      $t(description) }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}
defineProps<Props>();
</script>

<style scoped></style>
