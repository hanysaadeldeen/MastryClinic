<template>
  <section class="dentalPage relative overflow-hidden">
    <StarterSection :title="$t('heroSection.startSection.startSectionTitle')"
      :paragraph="$t('heroSection.startSection.startSectionDescription')"
      :buttonTitle="$t('heroSection.startSection.startSectionBtn')">
      <template #background>
        <div class="Starterbackground relative  w-[600px] h-[600px]">
        </div>
      </template>
      <template #doctor>
        <div class="doctor">
          <img src="~/assets/img/homeHero.svg" alt="dentalStarterSection" class="relative z-10  object-contain" />
        </div>
      </template>
    </StarterSection>
    <div class="container px-11 sm:px-7 max-w-[1200px] mx-auto ">

      <section class="aboutMastery relative">
        <div class="blob blob2" aria-hidden="true"></div>
        <div class="flex max-md:flex-col relative z-20 items-center justify-between gap-10 ">
          <div class="flex flex-col gap-7 w-full md:max-w-[492px]">
            <h1 class="font-normal leading-[150%] text-2xl md:text-3xl text-white max-md:text-center">{{
              $t("heroSection.aboutSection.aboutSectionTitle")
            }}</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-[592px]">
            <div class="glass p-4 md:p-5 lg:p-8 flex flex-col text-center rounded-xl">
              <h1 class="text-center text-white font-normal  md:text-2xl">
                {{ $t("heroSection.aboutSection.one") }}
              </h1>
            </div>
            <div class="glass p-4 md:p-5 lg:p-8 flex flex-col text-center rounded-xl">
              <h1 class="text-center text-white font-normal text-xl md:text-2xl">
                {{ $t("heroSection.aboutSection.two") }}
              </h1>
            </div>
            <div class="glass p-4 md:p-5 lg:p-8 flex flex-col text-center rounded-xl">
              <h1 class="text-center text-white font-normal text-xl md:text-2xl">
                {{ $t("heroSection.aboutSection.three") }}
              </h1>
            </div>
            <div class="glass p-4 md:p-5 lg:p-8 flex flex-col text-center rounded-xl">
              <h1 class="text-center text-white font-normal text-xl md:text-2xl">
                {{ $t("heroSection.aboutSection.four") }}
              </h1>
            </div>

          </div>
        </div>
      </section>


      <div class="min-h-[709px] relative  text-white mt-24 flex items-end justify-center">
        <div class="absolute hidden md:block top-0 left-1/2 z-20 max-h-[200px] w-full -translate-x-1/2 md:-bottom-5">
          <img src="~/assets/img/CirclesSections.svg" alt="CirclesSections" width="100%" height="200" loading="eager"
            fetchpriority="high" />
        </div>
        <div class="blob blob2" aria-hidden="true"></div>
        <section class="doctors relative ">
          <SectionHeaderTitle description="dentalPage.services.description" title="dentalPage.services.title" />
          <div class="grid grid-cols-1 md:grid-cols-2  gap-4">

            <div class="glass p-6 md:py-8 md:px-14 flex flex-col gap-6 text-center rounded-xl md:max-w-[592px]">
              <h1 class="text-center text-white font-normal text-2xl md:text-3xl">
                {{ $t("heroSection.serviceSection.one.title") }}
              </h1>
              <p class="text-center text-secondaryParagraph font-normal text-base md:text-xl">
                {{ $t("heroSection.serviceSection.one.description") }}
              </p>
            </div>
            <div class="glass p-6 md:py-8 md:px-14 flex flex-col gap-6 text-center rounded-xl md:max-w-[592px]">
              <h1 class="text-center text-white font-normal  text-2xl md:text-3xl">
                {{ $t("heroSection.serviceSection.two.title") }}
              </h1>
              <p class="text-center text-secondaryParagraph font-normal text-base md:text-xl">
                {{ $t("heroSection.serviceSection.two.description") }}
              </p>
            </div>
          </div>
        </section>
      </div>

      <section class="TypesOrthodontics relative ">
        <SectionHeaderTitle description="dentalPage.whyMastery.description" title="dentalPage.whyMastery.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <img loading="lazy" src="~/assets/img/CycleShape.svg" alt="CycleShape"
            class="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
          <img v-for="item in typesTypeOrthodontics" :src="item.img" alt="لماذا تختار عيادة ماستري" class="mx-auto" />
        </div>
      </section>





      <DoctorsSwiper />



      <ClosedFooter title="contact.CTA.title" description="contact.CTA.description"
        bootom-one-title="contact.CTA.buttonOne" />

    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import dentalWhy1 from "../assets/img/dentalWhy1.svg"
import dentalWhy2 from "../assets/img/dentalWhy2.svg"
import dentalWhy3 from "../assets/img/dentalWhy3.svg"
import dentalWhy4 from "../assets/img/dentalWhy4.svg"
import dentalWhy5 from "../assets/img/dentalWhy5.svg"
import dentalWhy6 from "../assets/img/dentalWhy6.svg"



const typesTypeOrthodontics = [
  {
    id: "1",
    img: dentalWhy1
  },
  {
    id: "2",
    img: dentalWhy2
  },
  {
    id: "3",
    img: dentalWhy3
  },
  {
    id: "4",
    img: dentalWhy4
  },
  {
    id: "5",
    img: dentalWhy5
  },
  {
    id: "6",
    img: dentalWhy6
  },

]

</script>





<style scoped>
.glass {
  background-color: rgba(25, 38, 79, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid;
  border-color: rgb(175 153 255 / 0.15);
}

.Starterbackground {
  background-image: url("../assets/img/StarterSectionPattern.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.blob2 {
  background: linear-gradient(to right,
      rgba(82, 165, 176, 0.3),
      rgba(82, 165, 176, 0.1),
      rgba(82, 165, 176, 0.3));
}
</style>
