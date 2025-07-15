<template>
    <section class="relative w-full ">
        <div data-aos="fade-up" data-aos-duration="800"
            class="relative z-30 mx-auto w-full rounded-xl border border-secondary/15  py-14 max-md:px-4 max-w-[1033px]  md:py-16 lg:py-[80px]">
            <img loading="lazy" src="~/assets/img/CycleShape.svg" alt="CycleShape"
                class="absolute max-h-[566px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />

            <div class="glass absolute inset-0 z-20 rounded-xl backdrop-blur-sm"></div>
            <div class="relative z-30 flex w-full flex-col items-center justify-center px-5 md:px-10">
                <h1
                    class="mx-auto mb-7 w-full text-center text-xl font-normal leading-[32px] text-white md:max-w-[840px] md:text-2xl lg:text-4xl lg:leading-[50.4px]">
                    {{ $t(title) }}
                </h1>
                <p v-if="description"
                    class="mx-auto  w-full text-center text-xs font-normal text-secondaryParagraph md:max-w-[736px] md:text-sm lg:text-base !leading-8">
                    {{ $t(description) }}
                </p>
                <div class="flex mt-8 flex-wrap justify-center gap-6">
                    <Button :title="bootomOneTitle" link="contact" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const route = useRoute()

const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (segments[1] && segments[1].length === 2) {
        return `/${segments.slice(2).join("/")}`;
    }
    return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
interface Props {
    title: string
    description?: string
    bootomOneTitle: string
    bootomTwoTitle?: string
}

defineProps<Props>();</script>

<style scoped>
.glass {
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.08),
            rgba(175, 153, 255, 0.08));
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
