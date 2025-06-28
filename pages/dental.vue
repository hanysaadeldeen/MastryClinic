<template>
    <section class="dentalPage relative">
        <StarterSection :title="$t('dentalPage.startSection.startSectionTitle')"
            :paragraph="$t('dentalPage.startSection.startSectionDescription')"
            :buttonTitle="$t('dentalPage.startSection.startSectionBtn')">
            <template #background>
                <div class="Starterbackground relative  w-[600px] h-[600px]">
                </div>
            </template>
            <template #main>
                <div class="main relative ">
                    <div class="relative  w-[600px] h-[600px] ">
                        <div :class='locale === "ar" ? "right-10" : "left-10"'
                            class="absolute top-16  glass py-5  px-8 rounded-xl z-40 ">
                            <p class="text-sm font-normal">{{ $t('dentalPage.startSection.jawbalance') }}</p>
                        </div>
                        <div :class='locale === "ar" ? "-right-10" : "-left-10"'
                            class="absolute  bottom-[25%] glass py-5  px-8 rounded-xl z-40 ">
                            <p class="text-sm font-normal">{{ $t('dentalPage.startSection.dentalhealth') }} </p>
                        </div>
                        <div :class='locale === "ar" ? "-left-2" : "-right-2"'
                            class="absolute top-1/2  glass py-5  px-8 rounded-xl z-40 ">
                            <p class="text-sm font-normal">{{ $t('dentalPage.startSection.confidencesmile') }}</p>
                        </div>
                    </div>
                </div>
            </template>
            <template #doctor>
                <div class="doctor">
                    <img src="~/assets/img/dentalStarterSection.svg" alt="dentalStarterSection"
                        class="relative z-10  object-contain" />
                </div>
            </template>
        </StarterSection>

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
const { locale } = useI18n();

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
</style>