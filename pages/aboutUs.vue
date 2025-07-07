<template>
  <section>
    <StarterSection :title="$t('aboutUsPage.startSection.startSectionTitle')"
      :paragraph="$t('aboutUsPage.startSection.startSectionDescription')"
      :buttonTitle="$t('aboutUsPage.startSection.startSectionBtn')">
      <template #background>
        <div class="Starterbackground  relative  w-[600px] h-[600px]">
          <img src="~/assets/img/aboutUsStarterSection.png" cla alt="aboutUsStarterSection"
            class="z-10  absolute left-1/2  -translate-y-1/2 -translate-x-1/2 top-1/2 object-contain" />
        </div>
      </template>

    </StarterSection>
    <div class="container px-11 sm:px-7 max-w-[1320px] mx-auto ">

      <section class="howCalendarHelp relative ">
        <div class="blob blob2" aria-hidden="true"></div>
        <SectionHeaderTitle description="orthodonticsandjawalignment.howDentalHelpYour.description"
          title="orthodonticsandjawalignment.howDentalHelpYour.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div v-for="item in Services"
            class="glass flex flex-col gap-8 py-6 md:p-8 rounded-xl items-center justify-center h-full">
            <img :src="item.img" class="md:w-14 md:h-14" :alt="$t(item.title)">
            <p class="font-medium text-center text-xl md:text-2xl  text-white">{{ $t(item.title) }}</p>
          </div>
        </div>
      </section>
      <ClosedFooter title="contact.CTA.title" description="contact.CTA.description"
        bootom-one-title="contact.CTA.buttonOne" />
    </div>
  </section>
</template>


<script setup lang="ts">
import values1 from "../assets/img/values1.svg"
import values2 from "../assets/img/values2.svg"
import values3 from "../assets/img/values3.svg"
import values4 from "../assets/img/values4.svg"

const Services = [
  {
    title: "aboutUsPage.values.valueOne",
    img: values1
  },
  {
    title: "aboutUsPage.values.valueTwo",
    img: values2
  },
  {
    title: "aboutUsPage.values.valueThree",
    img: values3
  },
  {
    title: "aboutUsPage.values.valueFour",
    img: values4
  },

]


</script>

<style scoped>
:root {
  --tertiary: #52A5B0;
  --tertiary-rgb: 82, 165, 176;
}

.Starterbackground {
  background-image: url("../assets/img/StarterSectionPattern.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.blob2 {
  background: linear-gradient(to right,
      rgba(var(--tertiary-rgb), 0.3),
      rgba(var(--tertiary-rgb), 0.1),
      rgba(var(--tertiary-rgb), 0.3));
}
</style>
