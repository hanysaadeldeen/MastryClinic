<template>
    <section class="dentalPage relative">
        <div class="container mx-auto px-11 sm:px-7 relative h-full max-w-[1320px]">

            <div class="py-5 flex text-white font-normal text-base lg:text-xl border-b border-primary gap-1">
                <p @click="router.push('/dental')" class="cursor-pointer"> قسم الأسنان / </p>
                <p> {{ $t("dentalPage.services.serviceSix.title") }}</p>
            </div>
        </div>


    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const router = useRouter()

const { params } = useRoute()


</script>

<style scoped></style>