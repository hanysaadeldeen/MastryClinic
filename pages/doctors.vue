<template>
    <section class="dermatologyPage relative">
        <StarterSection :title="$t('doctors.startSection.startSectionTitle')"
            :paragraph="$t('doctors.startSection.startSectionDescription')"
            :buttonTitle="$t('doctors.startSection.startSectionBtn')" />
        <div class="container relative mx-auto px-11 sm:px-7 text-white max-w-[1320px] mt-24">
            <section class="Dentealdoctors ">

<SectionHeaderTitle description="doctors.dentalDoctors.description" title="doctors.dentalDoctors.title" />
<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
  <DoctorCard  v-for="item in DentalDoctors" :title="item.name" :description="item.speciality"
    :img="item.img" />
  
</div>
</section>
        </div>
    </section>
</template>

<script setup lang="ts">
import drAbeer from "../assets/img/drAbeer.svg"
import dranas from "../assets/img/dranas.svg"
import drmoaaed from "../assets/img/drmoaaed.svg"
import drRaa from "../assets/img/drRaa.svg"
import drAbdo from "../assets/img/drAbdo.svg"
import drSamaher from "../assets/img/drSamaher.svg"
import DrAyman from "../assets/img/DrAyman.svg"
import drAbeda from "../assets/img/drAbeda.svg"


const DentalDoctors = [
    {
        name: "doctors.dentalDoctors.doctorOne.name",
        speciality: "doctors.dentalDoctors.doctorOne.speciality",

    },
    {
        name: "doctors.dentalDoctors.doctorTwo.name",
        speciality: "doctors.dentalDoctors.doctorTwo.speciality",
        img:drAbeer
    },
    {
        name: "doctors.dentalDoctors.doctorThree.name",
        speciality: "doctors.dentalDoctors.doctorThree.speciality",
        img:dranas
    },
    {
        name: "doctors.dentalDoctors.doctorFour.name",
        speciality: "doctors.dentalDoctors.doctorFour.speciality",
        
    },
    {
        name: "doctors.dentalDoctors.doctorFive.name",
        speciality: "doctors.dentalDoctors.doctorFive.speciality",
        img:drmoaaed
    },
    {
        name: "doctors.dentalDoctors.doctorSix.name",
        speciality: "doctors.dentalDoctors.doctorSix.speciality",
        img:drRaa
    },
    {
        name: "doctors.dentalDoctors.doctorSeven.name",
        speciality: "doctors.dentalDoctors.doctorSeven.speciality",
        img:drAbdo
    },
    {
        name: "doctors.dentalDoctors.doctorEight.name",
        speciality: "doctors.dentalDoctors.doctorEight.speciality",
        img:drSamaher
    },
    {
        name: "doctors.dentalDoctors.doctorNine.name",
        speciality: "doctors.dentalDoctors.doctorNine.speciality",
        img:DrAyman
    },
    {
        name: "doctors.dentalDoctors.doctorTen.name",
        speciality: "doctors.dentalDoctors.doctorTen.speciality",
        img:drAbeda
    },
]

</script>

<style scoped></style>