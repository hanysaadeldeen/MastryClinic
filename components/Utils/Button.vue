<template>

  <nuxt-link :to="localePath(`/${link}`)">
    <button class="bg-tertiary text-black px-4 py-3 rounded-xl text-base font-semibold w-fit">
      {{ $t(title) }}
    </button></nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  link?: string
}


const localePath = useLocalePath()


defineProps<Props>();
</script>

<style scoped></style>
