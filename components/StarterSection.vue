<template>
  <section
    class="bg-gradient-to-r from-primary via-secondary to-primary pt-4 text-white h-[calc(100dvh-80px)] relative">
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
      <div class="absolute  hidden xl:block top-1/2  px-11 sm:px-7 -translate-y-1/2 "
        :class="locale === 'ar' ? 'left-0' : 'right-0'">

        <div class="relative w-[600px] h-[600px] bg-gradient-to-r z-10 from-primary to-primary/20 rounded-full ">
          <div class="absolute top-16 right-28 glassTwo py-5  px-8 rounded-xl z-40 ">
            <p class="text-sm font-normal">توازن الفك</p>
          </div>
          <div class="absolute -right-5 bottom-[20%] glassTwo py-5  px-8 rounded-xl z-40 ">
            <p class="text-sm font-normal">توازن الفك</p>
          </div>
          <div class="absolute top-1/2 -left-2 glassTwo py-5  px-8 rounded-xl z-40 ">
            <p class="text-sm font-normal">توازن الفك</p>
          </div>
        </div>

      </div>
      <div class="z-10 absolute hidden xl:block bottom-0 px-11 sm:px-7" :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <img src="~/assets/img/dentalStarterSection.svg" alt="dentalStarterSection"
          class="relative z-10  object-contain" />

      </div>
      <!-- <div class="absolute z-20 hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <div class="relative w-[600px] h-[600px] bg-gradient-to-r from-primary to-primary/20 rounded-full">
          <div class="absolute top-16 right-1/2 glassTwo py-5 px-8 rounded-xl z-50">
            <p class="text-sm font-normal">توازن الفك</p>
          </div>
        </div>
      </div>

      <div class="z-10 absolute hidden xl:block bottom-0 px-11 sm:px-7" :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <img src="~/assets/img/dentalStarterSection.svg" alt="dentalStarterSection"
          class="relative z-10 object-contain" />
      </div> -->
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

<style scoped>
.glassTwo {
  background-color: rgba(25, 38, 79, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid;
  border-color: rgb(175 153 255 / 0.15);
}
</style>
