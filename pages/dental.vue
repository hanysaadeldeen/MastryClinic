<template>
    <section class="dentalPage relative">
        <StarterSection :title="$t('dentalPage.startSection.startSectionTitle')"
            :paragraph="$t('dentalPage.startSection.startSectionDescription')"
            :buttonTitle="$t('dentalPage.startSection.startSectionBtn')" />

        <div class="container relative mx-auto px-11 sm:px-7 text-white max-w-[1320px] mt-24">

            <section class="doctors ">

                <SectionHeaderTitle description="dentalPage.services.description" title="dentalPage.services.title" />
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <DentalServiceCard v-for="item in Services" :title="item.title" :img="item.img" :link="item.link" />
                </div>
            </section>




        </div>
    </section>
</template>

<script setup lang="ts">

import logo from "../assets/img/LogoTap.svg"

const Services = [
    {
        title: "dentalPage.services.serviceOne.title",
        img: logo,
        link: "/dental"
    },
    {
        title: "dentalPage.services.serviceTwo.title",
        link: "/dental",
        img: logo
    },
    {
        title: "dentalPage.services.serviceThree.title",
        link: "/dental",
        img: logo
    },
    {
        title: "dentalPage.services.serviceFour.title",
        link: "/dental",
        img: logo
    },
    {
        title: "dentalPage.services.serviceFive.title",
        link: "/dental",
        img: logo
    },
    {
        title: "dentalPage.services.serviceSix.title",
        link: "/dental",
        img: logo
    }
]

</script>

<style scoped></style>