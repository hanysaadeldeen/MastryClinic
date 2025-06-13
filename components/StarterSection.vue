<template>
  <section
    class="bg-gradient-to-r from-primary via-secondary to-primary py-4 text-white h-[calc(100dvh-80px)] relative"
  >
    <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1320px]">
      <div
        class="w-full md:max-w-[608px] h-[calc(100%-80px)] flex flex-col justify-center"
      >
        <h1
          class="font-medium text-3xl md:text-[56px] mb-4"
          :class="locale === 'ar' ? 'leading-[150%]' : 'leading-[120%]'"
        >
          {{ $t(title) }}
        </h1>
        <p class="text-base md:text-xl font-normal mb-8 text-paragraph">
          {{ paragraph }}
        </p>
        <Button :title="buttonTitle" />
      </div>
      <div
        class="absolute bottom-5 px-11 sm:px-7"
        :class="locale === 'en' ? 'left-0' : 'right-0'"
      >
        <img src="~/assets/img/Vector.svg" alt="Vector" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  paragraph: string;
  buttonTitle: string;
}
defineProps<Props>();

const { locale } = useI18n();
</script>

<style scoped></style>
