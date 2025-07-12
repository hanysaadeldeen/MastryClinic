<template>
  <section class="dentalPage relative">
    <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1200px]">

      <div class="py-5 flex text-white font-normal text-base lg:text-xl border-b border-primary gap-1">
        <p @click="router.push('/dental')" class="cursor-pointer"> قسم الأسنان / </p>
        <p> {{ $t("dentalPage.services.serviceOne.title") }}</p>
      </div>


      <!-- <section class="doctors mt-52 relative">
        <div class="blob " aria-hidden="true"></div>
        <SectionHeaderTitle description="dermatology.doctors.description" title="dermatology.doctors.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DoctorCard title="dermatology.doctors.one.name" description="dermatology.doctors.one.speciality"
            :img="dentalDoctorAsmaa" />
          <DoctorCard title="dermatology.doctors.two.name" description="dermatology.doctors.two.speciality"
            :img="drAbeer" />
        </div>
      </section> -->


      <section class="aboutMastery relative mt-52">

        <div class="blob blob2" aria-hidden="true"></div>

        <div class="flex max-md:flex-col items-center justify-between gap-10  relative z-20">

          <div class="flex flex-col gap-7 w-full md:max-w-[492px]">
            <h1 class="font-medium text-4xl text-white">{{
              $t("digitaldentalimplants.derviceDigitaldentalimplants.title") }}</h1>
            <p class="text-secondaryParagraph text-base font-normal text-justify">{{
              $t("digitaldentalimplants.derviceDigitaldentalimplants.description") }}
            </p>
          </div>
          <div class="flex flex-col gap-4 w-full md:max-w-[491px]">
            <div class="glass p-5 md:p-8 flex flex-col gap-6 text-center rounded-xl">
              <h1 class="text-center text-white font-medium text-2xl">
                {{ $t("digitaldentalimplants.derviceDigitaldentalimplants.cardOne") }}
              </h1>
            </div>
            <div class="glass p-5 md:p-8 flex flex-col gap-6 text-center rounded-xl">
              <h1 class="text-center text-white font-medium text-2xl">
                {{ $t("digitaldentalimplants.derviceDigitaldentalimplants.cardTwo") }}

              </h1>
            </div>
            <div class="glass p-5 md:p-8 flex flex-col gap-6 text-center rounded-xl">
              <h1 class="text-center text-white font-medium text-2xl">
                {{ $t("digitaldentalimplants.derviceDigitaldentalimplants.cardThree") }}

              </h1>
            </div>
            <div class="glass p-5 md:p-8 flex flex-col gap-6 text-center rounded-xl">
              <h1 class="text-center text-white font-medium text-2xl">
                {{ $t("digitaldentalimplants.derviceDigitaldentalimplants.cardFour") }}

              </h1>
            </div>
            <div class="glass p-5 md:p-8 flex flex-col gap-6 text-center rounded-xl">
              <h1 class="text-center text-white font-medium text-2xl">
                {{ $t("digitaldentalimplants.derviceDigitaldentalimplants.cardFive") }}

              </h1>
            </div>
            <div class="glass p-5 md:p-8 flex flex-col gap-6 text-center rounded-xl">
              <h1 class="text-center text-white font-medium text-2xl">
                {{ $t("digitaldentalimplants.derviceDigitaldentalimplants.cardSix") }}

              </h1>
            </div>
          </div>
        </div>
      </section>


      <section class="installingbraces relative ">
        <SectionHeaderTitle description="digitaldentalimplants.Conditionsinstallingbraces.description"
          title="digitaldentalimplants.Conditionsinstallingbraces.title" />
        <img loading="lazy" src="~/assets/img/StarterSectionPattern.svg" alt="StarterSectionPattern"
          class="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative">
          <div class="glass text-white font-normal text-base md:text-xl md:!leading-10 p-4 md:py-6 md:px-8 rounded-xl"
            v-for="item in Conditionsinstallingbraces">
            {{ $t(item.title) }}
          </div>
        </div>
      </section>

      <section class="readySteps relative ">
        <SectionHeaderTitle description="digitaldentalimplants.readyFiveSteps.description"
          title="digitaldentalimplants.readyFiveSteps.title" />
        <div class="max-md:mb-5 max-lg:mb-8  flex max-md:flex-col justify-center gap-5 md:gap-8 relative">
          <div
            class="glass md:max-w-[391px] text-white flex justify-center items-center text-center font-normal text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in bracesStepsOne">
            {{ $t(item.title) }}
          </div>
        </div>
        <img loading="lazy" src="~/assets/img/stepFive.svg" alt="stepFive" class="hidden lg:block my-6 " />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 relative">
          <div
            class="glass text-white text-center font-normal flex justify-center items-center text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in bracesStepsTwo">
            {{ $t(item.title) }}
          </div>
        </div>
      </section>


      <section class="sergerysteps relative ">
        <SectionHeaderTitle description="digitaldentalimplants.sergerySixsteps.description"
          title="digitaldentalimplants.sergerySixsteps.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 relative">
          <div
            class="glass text-white text-center font-normal flex justify-center items-center text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in StepsClearBracesOne">
            {{ $t(item.title) }}
          </div>
        </div>
        <img loading="lazy" src="~/assets/img/stepSix.svg" alt="stepSix" class="hidden lg:block my-6 " />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 relative">
          <div
            class="glass text-white text-center font-normal flex justify-center items-center text-base md:text-xl md:!leading-10 p-4 md:py-12 md:px-10 rounded-xl  !border-white"
            v-for="item in StepsClearBracesTwo">
            {{ $t(item.title) }}
          </div>
        </div>
      </section>




      <section class="QandAnswer mt-[120px] md:mt-[200px]">
        <SectionHeaderTitle title="dermatology.FAQ.title" />
        <div class="mt-10 md:mt-14 flex  flex-col gap-8 w-full  mx-auto">
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
const router = useRouter()
import dentalDoctorAsmaa from "../assets/img/dentalDoctor-Asmaa.svg"
import drAbeer from "../assets/img/drAbeer.svg"


const Conditionsinstallingbraces = [
  {
    id: 1,
    title: "digitaldentalimplants.Conditionsinstallingbraces.one",
  },
  {
    id: 2,
    title: "digitaldentalimplants.Conditionsinstallingbraces.two",
  },
  {
    id: 3,
    title: "digitaldentalimplants.Conditionsinstallingbraces.three",
  },
  {
    id: 4,
    title: "digitaldentalimplants.Conditionsinstallingbraces.four",
  },
  {
    id: 5,
    title: "digitaldentalimplants.Conditionsinstallingbraces.five",
  },
  {
    id: 6,
    title: "digitaldentalimplants.Conditionsinstallingbraces.six",
  },
  {
    id: 6,
    title: "digitaldentalimplants.Conditionsinstallingbraces.seven",
  },
  {
    id: 6,
    title: "digitaldentalimplants.Conditionsinstallingbraces.eight",
  }
]


const bracesStepsOne = [
  {
    id: 1,
    title: "digitaldentalimplants.readyFiveSteps.two",
  },
  {
    id: 2,
    title: "digitaldentalimplants.readyFiveSteps.four",
  },
]
const bracesStepsTwo = [
  {
    id: 1,
    title: "digitaldentalimplants.readyFiveSteps.one",
  },
  {
    id: 2,
    title: "digitaldentalimplants.readyFiveSteps.three",
  },
  {
    id: 3,
    title: "digitaldentalimplants.readyFiveSteps.five",
  },
]


const StepsClearBracesTwo = [
  {
    id: 1,
    title: "digitaldentalimplants.sergerySixsteps.two",
  },
  {
    id: 2,
    title: "digitaldentalimplants.sergerySixsteps.four",
  },
  {
    id: 3,
    title: "digitaldentalimplants.sergerySixsteps.six",
  },
]



const StepsClearBracesOne = [
  {
    id: 1,
    title: "digitaldentalimplants.sergerySixsteps.one",
  },
  {
    id: 2,
    title: "digitaldentalimplants.sergerySixsteps.three",
  },
  {
    id: 3,
    title: "digitaldentalimplants.sergerySixsteps.five",
  },
]




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
</script>

<style scoped></style>