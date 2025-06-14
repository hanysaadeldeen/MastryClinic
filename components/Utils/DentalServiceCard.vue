<template>
    <nuxt-link :to="localePath(link)">
        <div class="glass flex flex-col gap-8 p-8 rounded-xl items-center justify-center">
            <img :src="img" alt="logo" width="97px" height="70px">
            <p class="font-medium  text-xl md:text-2xl  text-white">{{ $t(title) }}</p>
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