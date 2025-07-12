<template>
    <section class="dermatologyPage relative">
        <StarterSection :title="$t('doctors.startSection.startSectionTitle')"
            :paragraph="$t('doctors.startSection.startSectionDescription')"
            :buttonTitle="$t('doctors.startSection.startSectionBtn')">

            <template #background>
                <div class="Starterbackground relative  w-[600px] h-[600px]">
                </div>
            </template>

            <template #doctor>
                <div class="doctor">
                    <img src="~/assets/img/doctorsStarterSection.png" alt="doctorsStarterSection"
                        class="relative z-10  object-contain" />
                </div>
            </template>

        </StarterSection>
        <div class="container relative mx-auto px-11 sm:px-7 text-white max-w-[1200px] mt-24">
            <section class="Dentealdoctors ">

                <SectionHeaderTitle description="doctors.dentalDoctors.description"
                    title="doctors.dentalDoctors.title" />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div class="flex flex-col gap-10">
                        <DoctorCard v-for="item in DentalDoctorsMen" :title="item.name" :description="item.speciality"
                            :img="item.img" />
                    </div>
                    <div class="flex flex-col gap-10">
                        <DoctorCard v-for="item in DentalDoctorsWoman" :title="item.name" :description="item.speciality"
                            :img="item.img" />


                    </div>
                </div>
            </section>

            <ClosedFooter title="contact.CTA.title" description="contact.CTA.description"
                bootom-one-title="contact.CTA.buttonOne" />
        </div>
    </section>
</template>

<script setup lang="ts">
import dranas from "../assets/img/dranas.svg"
import drmoaaed from "../assets/img/drmoaaed.svg"
import drRaa from "../assets/img/drRaa.svg"
import drAbdo from "../assets/img/drAbdo.svg"
import drSamaher from "../assets/img/drSamaher.svg"
import DrAyman from "../assets/img/DrAyman.svg"
import drAbeda from "../assets/img/drAbeda.svg"


const DentalDoctorsMen = [

    {
        name: "doctors.dentalDoctors.doctorSeven.name",
        speciality: "doctors.dentalDoctors.doctorSeven.speciality",
        img: drAbdo
    },

    {
        name: "doctors.dentalDoctors.doctorThree.name",
        speciality: "doctors.dentalDoctors.doctorThree.speciality",
        img: dranas
    },

    {
        name: "doctors.dentalDoctors.doctorFive.name",
        speciality: "doctors.dentalDoctors.doctorFive.speciality",
        img: drmoaaed
    },



    {
        name: "doctors.dentalDoctors.doctorNine.name",
        speciality: "doctors.dentalDoctors.doctorNine.speciality",
        img: DrAyman
    },
    {
        name: "doctors.dentalDoctors.doctorTen.name",
        speciality: "doctors.dentalDoctors.doctorTen.speciality",
        img: drAbeda
    },
    {
        name: "doctors.dentalDoctors.doctorOne.name",
        speciality: "doctors.dentalDoctors.doctorOne.speciality",
    },
]
const DentalDoctorsWoman = [

    {
        name: "doctors.dentalDoctors.doctorSix.name",
        speciality: "doctors.dentalDoctors.doctorSix.speciality",
        img: drRaa
    }, {
        name: "doctors.dentalDoctors.doctorEight.name",
        speciality: "doctors.dentalDoctors.doctorEight.speciality",
        img: drSamaher
    },
    {
        name: "doctors.dentalDoctors.doctorFour.name",
        speciality: "doctors.dentalDoctors.doctorFour.speciality",
    },


]

</script>

<style scoped>
.Starterbackground {
    background-image: url("../assets/img/StarterSectionPattern.svg");
    background-position: center;
    background-repeat: no-repeat;
}
</style>