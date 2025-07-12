<template>
  <section class="dermatologyPage relative">
    <StarterSection :title="$t('dermatology.startSection.startSectionTitle')"
      :paragraph="$t('dermatology.startSection.startSectionDescription')"
      :buttonTitle="$t('dermatology.startSection.startSectionBtn')" />

    <div class="container relative mx-auto px-11 sm:px-7 text-white max-w-[1200px] mt-24">

      <section class="doctors ">

        <SectionHeaderTitle description="dermatology.doctors.description" title="dermatology.doctors.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DoctorCard title="dermatology.doctors.one.name" description="dermatology.doctors.one.speciality"
            :img="dentalDoctorAsmaa" />
          <!-- <DoctorCard title="dermatology.doctors.two.name" description="dermatology.doctors.two.speciality"
            :img="drAbeer" /> -->

        </div>
      </section>
      <section class="machine  mt-[120px] md:mt-[200px]">

        <SectionHeaderTitle description="dermatology.machine.description" title="dermatology.machine.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <MachineCard v-for="item in Mahines" :title="item.title" :info="item.info" :img="item.img" />
        </div>
      </section>


      <section class="QandAnswer mt-[120px] md:mt-[200px]">
        <SectionHeaderTitle title="dermatology.FAQ.title" />
        <div class="mt-10 md:mt-14 flex  flex-col gap-12 w-full mx-auto">
          <FAQ v-for="faq in FAQSectionDescription" :key="faq.id" :question="faq.question" :answer="faq.answer"
            :loack="faq.loack" />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">

import dentalDoctorAsmaa from "../assets/img/dentalDoctor-Asmaa.svg"
import drAbeer from "../assets/img/drAbeer.svg"
import machineHydra from "../assets/img/machineHydra.svg"
import mahineIndiba from "../assets/img/mahineIndiba.svg"

const Mahines = [
  {
    img: machineHydra,
    title: "dermatology.machine.one.name",
    info: [
      "dermatology.machine.one.description.one",
      "dermatology.machine.one.description.two",
      "dermatology.machine.one.description.three",
      "dermatology.machine.one.description.four",
      "dermatology.machine.one.description.five",
    ]
  },
  {
    img: mahineIndiba,
    title: "dermatology.machine.two.name",
    info: [
      "dermatology.machine.two.description.one",
      "dermatology.machine.two.description.two",
      "dermatology.machine.two.description.three",
      "dermatology.machine.two.description.four",
      "dermatology.machine.two.description.five",
      "dermatology.machine.two.description.six",
      "dermatology.machine.two.description.seven",
    ]
  }
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
