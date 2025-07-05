<template>
  <section class="dentalPage relative overflow-hidden">
    <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1320px]">
      <div class="py-5 flex text-white font-normal text-base lg:text-xl border-b border-primary gap-1">
        <p @click="router.push('/dental')" class="cursor-pointer"> {{ $t("header.dental") }} / </p>
        <p> {{ $t("dentalPage.services.serviceTwo.title") }}</p>
      </div>


      <section class="doctors mt-52 relative">
        <div class="blob " aria-hidden="true"></div>
        <SectionHeaderTitle description="dermatology.doctors.description" title="dermatology.doctors.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DoctorCard title="dermatology.doctors.one.name" description="dermatology.doctors.one.speciality"
            :img="dentalDoctorAsmaa" />
          <DoctorCard title="dermatology.doctors.two.name" description="dermatology.doctors.two.speciality"
            :img="drAbeer" />
        </div>
      </section>

      <section class="howCalendarHelp relative ">
        <div class="blob blob2" aria-hidden="true"></div>
        <SectionHeaderTitle description="orthodonticsandjawalignment.howDentalHelpYour.description"
          title="orthodonticsandjawalignment.howDentalHelpYour.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <OrthodonticsCard v-for="item in Services" :title="item.title" :img="item.img" :link="item.link" />
        </div>
      </section>

      <section class="TypesOrthodontics relative ">
        <SectionHeaderTitle description="orthodonticsandjawalignment.typeDental.description"
          title="orthodonticsandjawalignment.typeDental.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <img loading="lazy" src="~/assets/img/CycleShape.svg" alt="CycleShape"
            class="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />

          <TypeOrthodonticsCard v-for="item in typesTypeOrthodontics" :title="item.title" :img="item.img"
            :description="item.description" :link="item.link" />
        </div>
      </section>

      <section class="installingbraces relative ">
        <SectionHeaderTitle description="Conditionsinstallingbraces.description"
          title="Conditionsinstallingbraces.title" />
        <img loading="lazy" src="~/assets/img/StarterSectionPattern.svg" alt="StarterSectionPattern"
          class="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative">
          <div class="glass text-white font-normal text-base md:text-xl md:!leading-10 p-4 md:py-6 md:px-8 rounded-xl"
            v-for="item in Conditionsinstallingbraces">
            {{ $t(item.title) }}
          </div>
        </div>
      </section>
      <section class="bracesSteps relative ">
        <SectionHeaderTitle description="bracesSteps.description" title="bracesSteps.title" />
        <div class="max-md:mb-5 max-lg:mb-8  flex max-md:flex-col justify-center gap-5 md:gap-8 relative">
          <div
            class="glass md:max-w-[286px] text-white flex justify-center items-center text-center font-normal text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in bracesStepsOne">
            {{ $t(item.title) }}
          </div>
        </div>
        <img loading="lazy" src="~/assets/img/stepsSeven.svg" alt="stepsSeven" class="hidden lg:block my-6 " />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 relative">
          <div
            class="glass text-white text-center font-normal flex justify-center items-center text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in bracesStepsTwo">
            {{ $t(item.title) }}
          </div>
        </div>
      </section>

      <section class="StepsClearBraces relative ">
        <SectionHeaderTitle description="StepsClearBraces.description" title="StepsClearBraces.title" />
        <div class="max-md:mb-5 max-lg:mb-8  flex max-md:flex-col justify-center gap-5 md:gap-8 relative">
          <div
            class="glass md:max-w-[286px] text-white flex justify-center items-center text-center font-normal text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in StepsClearBracesOne">
            {{ $t(item.title) }}
          </div>
        </div>
        <img loading="lazy" src="~/assets/img/stepsSeven.svg" alt="stepsSeven" class="hidden lg:block my-6 " />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 relative">
          <div
            class="glass text-white text-center font-normal flex justify-center items-center text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in StepsClearBracesTwo">
            {{ $t(item.title) }}
          </div>
        </div>
      </section>

      <section class="QandAnswer mt-[120px] md:mt-[200px]">
        <SectionHeaderTitle title="dermatology.FAQ.title" />
        <div class="mt-10 md:mt-14 flex  flex-col gap-8 w-full max-w-screen-sm mx-auto">
          <FAQ v-for="faq in FAQSectionDescription" :key="faq.id" :question="faq.question" :answer="faq.answer"
            :loack="faq.loack" />
        </div>
      </section>
      <ClosedFooter title="contact.CTA.title" description="contact.CTA.description"
        bootom-one-title="contact.CTA.buttonOne" />
    </div>


  </section>
</template>

<script setup lang="ts">

import dentalDoctorAsmaa from "../assets/img/dentalDoctor-Asmaa.svg"
import drAbeer from "../assets/img/drAbeer.svg"
import orthodonticsOne from "../assets/img/orthodonticsOne.svg"
import orthodonticsTwo from "../assets/img/orthodonticsTwo.svg"
import orthodonticsThree from "../assets/img/orthodonticsThree.svg"

import orthodonticsDentalOne from "../assets/img/orthodonticsDentalOne.svg"
import orthodonticsDentalTwo from "../assets/img/orthodonticsDentalTwo.svg"
import orthodonticsDentalThree from "../assets/img/orthodonticsDentalThree.svg"
import orthodonticsDentalFour from "../assets/img/orthodonticsDentalFour.svg"
import orthodonticsDentalFive from "../assets/img/orthodonticsDentalFive.svg"
import orthodonticsDentalSex from "../assets/img/orthodonticsDentalSex.svg"
const router = useRouter()
const FAQSectionDescription = [
  {
    id: 1,
    question: "dermatology.FAQ.one.question",
    answer: "dermatology.FAQ.one.answer",
    loack: false,
  },
  {
    id: 2,
    question: "dermatology.FAQ.two.question",
    answer: "dermatology.FAQ.two.answer",
    loack: true,
  },
  {
    id: 3,
    question: "dermatology.FAQ.three.question",
    answer: "dermatology.FAQ.three.answer",
    loack: false,
  },
];


const Services = [
  {
    title: "dentalPage.services.serviceOne.title",
    link: "digitaldentalimplants",
    img: orthodonticsOne
  },
  {
    title: "dentalPage.services.serviceTwo.title",
    link: "orthodonticsandjawalignment",
    img: orthodonticsTwo
  },
  {
    title: "dentalPage.services.serviceThree.title",
    link: "cosmeticanddentalprosthetics",
    img: orthodonticsThree
  }]


const typesTypeOrthodontics = [
  {
    title: "orthodonticsandjawalignment.typeDental.oneTitle",
    description: "orthodonticsandjawalignment.typeDental.oneDescription",
    link: "digitaldentalimplants",
    img: orthodonticsDentalOne
  },
  {
    title: "orthodonticsandjawalignment.typeDental.TwoTitle",
    description: "orthodonticsandjawalignment.typeDental.TwoDescription",
    img: orthodonticsDentalTwo
  },
  {
    title: "orthodonticsandjawalignment.typeDental.ThreeTitle",
    description: "orthodonticsandjawalignment.typeDental.ThreeDescription",
    img: orthodonticsDentalThree
  },
  {
    title: "orthodonticsandjawalignment.typeDental.FourTitle",
    description: "orthodonticsandjawalignment.typeDental.FourDescription",
    img: orthodonticsDentalFour
  },
  {
    title: "orthodonticsandjawalignment.typeDental.FiveTitle",
    description: "orthodonticsandjawalignment.typeDental.FiveDescription",
    img: orthodonticsDentalFive
  },
  {
    title: "orthodonticsandjawalignment.typeDental.SixTitle",
    description: "orthodonticsandjawalignment.typeDental.SixDescription",
    img: orthodonticsDentalSex
  },

]


const bracesStepsOne = [
  {
    id: 1,
    title: "bracesSteps.two",
  },
  {
    id: 2,
    title: "bracesSteps.four",
  },
  {
    id: 3,
    title: "bracesSteps.six",
  },
]
const bracesStepsTwo = [
  {
    id: 1,
    title: "bracesSteps.one",
  },
  {
    id: 2,
    title: "bracesSteps.three",
  },
  {
    id: 3,
    title: "bracesSteps.five",
  },
  {
    id: 4,
    title: "bracesSteps.seven",
  },
]
const StepsClearBracesOne = [
  {
    id: 1,
    title: "StepsClearBraces.two",
  },
  {
    id: 2,
    title: "StepsClearBraces.four",
  },
  {
    id: 3,
    title: "StepsClearBraces.six",
  },
]
const StepsClearBracesTwo = [
  {
    id: 1,
    title: "StepsClearBraces.one",
  },
  {
    id: 2,
    title: "StepsClearBraces.three",
  },
  {
    id: 3,
    title: "StepsClearBraces.five",
  },
  {
    id: 4,
    title: "StepsClearBraces.seven",
  },
]
const Conditionsinstallingbraces = [
  {
    id: 1,
    title: "Conditionsinstallingbraces.one",
  },
  {
    id: 2,
    title: "Conditionsinstallingbraces.two",
  },
  {
    id: 3,
    title: "Conditionsinstallingbraces.three",
  },
  {
    id: 4,
    title: "Conditionsinstallingbraces.four",
  },
  {
    id: 5,
    title: "Conditionsinstallingbraces.five",
  },
  {
    id: 6,
    title: "Conditionsinstallingbraces.six",
  }
]


</script>

<style>
:root {
  --tertiary: #52A5B0;
  --tertiary-rgb: 82, 165, 176;
}

.blob {
  background: linear-gradient(to right,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1));
}

.blob2 {
  background: linear-gradient(to right,
      rgba(var(--tertiary-rgb), 0.3),
      rgba(var(--tertiary-rgb), 0.1),
      rgba(var(--tertiary-rgb), 0.3));
}
</style>