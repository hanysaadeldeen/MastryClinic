<template>
    <nuxt-link :to="localePath(`/dental/${link}`)">
        <div class="glass flex flex-col gap-8 py-6 md:p-8 rounded-xl items-center justify-center h-full">
            <img :src="img" class="md:w-24 md:h-16" :alt="$t(title)">
            <p class="font-medium text-center text-xl md:text-2xl  text-white">{{ $t(title) }}</p>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface Props {
    title: string
    img: string
    link: string
}

defineProps<Props>()
</script>

<style scoped></style>