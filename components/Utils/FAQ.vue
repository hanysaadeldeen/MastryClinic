<template>
    <div class=" glass flex flex-col gap-5 p-8 rounded-xl">
        <div class="question flex justify-between gap-10 items-start">
            <h1 class="font-medium text-lg md:text-xl lg:text-2xl text-white">
                {{ $t(question) }}
            </h1>
            <div @click="toggleQuestion = !toggleQuestion" class="mt-2.5 cursor-pointer">
                <i v-if="!toggleQuestion" class="fa-solid fa-chevron-down  text-xl text-white"></i>
                <i v-if="toggleQuestion" class="fa-solid fa-chevron-up text-xl text-white"></i>
            </div>
        </div>
        <p v-if="toggleQuestion" class="answer  text-paragraph  text-sm md:text-base lg:text-lg max-w-[90%]">
            {{ $t(answer) }}
        </p>
    </div>
</template>

<script setup lang="ts">
type Props = {
    question: string;
    answer: string;
    loack: boolean;
};
const props = defineProps<Props>();
const toggleQuestion = ref<boolean>(props.loack);
</script>

<style scoped></style>