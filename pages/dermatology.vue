<template>
  <section class="dermatologyPage relative">
    <StarterSection :title="$t('dermatology.startSection.startSectionTitle')"
      :paragraph="$t('dermatology.startSection.startSectionDescription')"
      :buttonTitle="$t('dermatology.startSection.startSectionBtn')" />

    <div class="container relative mx-auto px-11 sm:px-7 text-white max-w-[1320px] mt-24">
    
      <section class="doctors ">

        <SectionHeaderTitle description="dermatology.doctors.description" title="dermatology.doctors.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DoctorCard title="dermatology.doctors.one.name" description="dermatology.doctors.one.speciality"
          :img="dentalDoctorAsmaa" />
          <DoctorCard title="dermatology.doctors.two.name" description="dermatology.doctors.two.speciality"
          :img="drAbeer" />
          
        </div>
      </section>
      <div class="machine  mt-[120px] md:mt-[200px]">

        <SectionHeaderTitle description="dermatology.machine.description" title="dermatology.machine.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DoctorCard title="dermatology.machine.one.name" description="dermatology.machine.one.description"
          :img="dentalDoctorAsmaa" />
          <DoctorCard title="dermatology.machine.two.name" description="dermatology.machine.two.description"
          :img="drAbeer" />
          
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

import dentalDoctorAsmaa from "../assets/img/dentalDoctor-Asmaa.svg"
import drAbeer from "../assets/img/drAbeer.svg"
</script>

<style scoped></style>
