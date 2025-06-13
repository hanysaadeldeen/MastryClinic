<template>
  <button
    class="bg-tertiary text-white px-4 py-3 rounded-xl text-base font-semibold w-fit"
  >
    {{ $t(title) }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped></style>
