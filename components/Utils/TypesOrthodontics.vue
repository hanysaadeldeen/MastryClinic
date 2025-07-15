<template>

    <section class="TypesOrthodontics relative ">
        <SectionHeaderTitle description="dentalPage.whyMastery.description" title="dentalPage.whyMastery.title" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <img loading="lazy" src="~/assets/img/CycleShape.svg" alt="CycleShape"
                class="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
            <div class="relative group cursor-pointer w-fit mx-auto" v-for="item in typesTypeOrthodontics">
                <div
                    class="absolute top-1/2 right-1/2 px-4 group-hover:top-0 group-hover:right-0   w-20 h-20 flex justify-center items-center font-semibold text-3xl text-center text-white bg-[#52a5b0] z-20  opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-80 group-hover:w-full group-hover:h-full rounded-2xl ">
                    {{ item.title }}
                </div>
                <img :src="item.img" alt="لماذا تختار عيادة ماستري" class="mx-auto " />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import dentalWhy1 from "../assets/img/dentalWhy1.svg"
import dentalWhy2 from "../assets/img/dentalWhy2.svg"
import dentalWhy3 from "../assets/img/dentalWhy3.svg"
import dentalWhy4 from "../assets/img/dentalWhy4.svg"
import dentalWhy5 from "../assets/img/dentalWhy5.svg"
import dentalWhy6 from "../assets/img/dentalWhy6.svg"

const typesTypeOrthodontics = [
    {
        id: "1",
        img: dentalWhy1,
        title: "أطباء متخصصون ذوي خبرة"
    },
    {
        id: "2",
        img: dentalWhy2,
        title: "تقنيات متطورة وحديثة"
    },
    {
        id: "3",
        img: dentalWhy3,
        title: "خطط دفع مرنة"
    },
    {
        id: "4",
        img: dentalWhy4,
        title: "نتائج طويلة الأمد"
    },
    {
        id: "5",
        img: dentalWhy5,
        title: "خيارات علاجية للجميع"
    },
    {
        id: "6",
        img: dentalWhy6,
        title: "رعاية شخصية لكل مريض"
    },

]
</script>

<style scoped></style>