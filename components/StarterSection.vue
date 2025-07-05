<template>
  <section
    class="overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary pt-4 text-white h-[calc(100dvh-104px)] relative">
    <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1320px]">
      <div class="w-full md:max-w-[608px] h-full flex flex-col justify-center">
        <h1 class="font-medium text-3xl md:text-[56px] mb-4"
          :class="locale === 'ar' ? 'leading-[150%]' : 'leading-[120%]'">
          {{ $t(title) }}
        </h1>
        <p class="text-base md:text-xl font-normal mb-8 text-paragraph">
          {{ paragraph }}
        </p>
        <Button :title="buttonTitle" />
      </div>
      <div class="absolute  bottom-[5%] px-11 sm:px-7" :class="locale === 'en' ? 'left-0' : 'right-0'">
        <img src="~/assets/img/Vector.svg" alt="Vector" />
      </div>
      <div class="absolute  hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2 z-10"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <slot name="background" />
      </div>
      <div class="absolute hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2 z-20"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <slot name="main" />
      </div>
      <div class="z-10 absolute hidden xl:block bottom-0 px-11 sm:px-7" :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <slot name="doctor" />
      </div>
      <div class="absolute hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2 z-10"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <slot name="privacy" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

const { path } = useRoute()


interface Props {
  title: string;
  paragraph: string;
  buttonTitle: string;
}
defineProps<Props>();

const { locale } = useI18n();
</script>

<style scoped></style>
