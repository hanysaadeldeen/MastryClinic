<template>
    <section class="dentalPage relative">
        <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1200px]">

            <div class="py-5 flex text-white font-normal text-base lg:text-xl border-b border-primary gap-1">
                <p @click="router.push('/dental')" class="cursor-pointer"> قسم الأسنان / </p>
                <p> {{ $t("dentalPage.services.serviceFive.title") }}</p>
            </div>

            <section class="QandAnswer mt-[120px] md:mt-[200px]">
                <SectionHeaderTitle title="dermatology.FAQ.title" />
                <div class="mt-10 md:mt-14 flex  flex-col gap-8 w-full max-w-screen-sm mx-auto">
                    <FAQ v-for="faq in FAQSectionDescription" :key="faq.id" :question="faq.question"
                        :answer="faq.answer" :loack="faq.loack" />
                </div>
            </section>
            <ClosedFooter title="contact.CTA.title" description="contact.CTA.description"
                bootom-one-title="contact.CTA.buttonOne" />
        </div>


    </section>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>