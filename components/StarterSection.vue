<template>
  <section
    class="overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary pt-4 z-20 text-white h-[calc(100dvh-104px)] relative">
    <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1200px]">
      <div class="w-full  h-full flex flex-col justify-center"
        :class="adjustedPath === '/aboutUs' ? 'md:max-w-[600px]' : 'md:max-w-[500px]'">
        <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="150"
          class="font-medium text-3xl md:text-[45px] mb-4"
          :class="locale === 'ar' ? '!leading-[150%]' : '!leading-[120%]'">
          {{ $t(title) }}
        </h1>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="350"
          class="md:max-w-[450px] text-base md:text-xl font-normal mb-8 text-secondaryParagraph">
          {{ paragraph }}
        </p>
        <Button data-aos="fade-up" data-aos-duration="800" data-aos-delay="550" :title="buttonTitle" link="contact" />
      </div>
      <div class="absolute  bottom-[5%] px-11 sm:px-7" :class="locale === 'en' ? 'left-0' : 'right-0'">
        <img src="~/assets/img/Vector.svg" alt="Vector" data-aos="fade-left" data-aos-duration="800"
          data-aos-delay="650" />
      </div>
      <div class="absolute  hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2 z-10"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="150">
          <slot name="background" />
        </div>
      </div>
      <div class="absolute hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2 z-20"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          <slot name="main" />
        </div>
      </div>
      <div class="z-10 absolute hidden xl:block bottom-0 px-11 sm:px-7" :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          <slot name="doctor" />
        </div>
      </div>
      <div class="absolute hidden xl:block top-1/2 px-11 sm:px-7 -translate-y-1/2 z-10"
        :class="locale === 'ar' ? 'left-0' : 'right-0'">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          <slot name="privacy" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};
const adjustedPath = computed(() => getPathWithoutLocale(route.path));


interface Props {
  title: string;
  paragraph: string;
  buttonTitle: string;
}
defineProps<Props>();

const { locale } = useI18n();
</script>

<style scoped></style>
