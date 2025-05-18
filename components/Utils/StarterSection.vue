<template>
  <section
    class="bg-gradient-to-r from-primary via-secondary to-primary px-2 py-4 text-white h-[calc(100dvh-80px)]"
  >
    <div>
      <h1 class="">{{ title }}</h1>
      <p class=""></p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
