<template>

  <div class="contactPage mx-auto max-w-[1384px] px-11 sm:px-7 text-white">


    <div class="mt-[128px] flex max-md:flex-col justify-between items-start  md:gap-10 md:mb-[100px] ">
      <div class="flex md:pt-8 flex-col w-full md:max-w-[417px]  lg:max-w-[600px]">
        <h1 class="font-semibold max-md:text-center text-xl lg:text-3xl mb-2 md:mb-4 text-white">{{
          $t("contactPage.startSection.startSectionTitle")
        }}</h1>
        <p
          class="mb-20 md:mb-14 lg:mb-16 max-md:text-center w-full md:max-w-[460px] text-paragraph text-xs md:text-sm lg:text-base">
          {{
            $t("contactPage.startSection.startSectionDescription") }}
        </p>
        <div class="hidden md:flex flex-col gap-5">
          <a href="https://www.instagram.com/mastery_clinics/" target="_blank">
            <div class="email flex gap-6 items-center">
              <i class="fa-brands fa-instagram"></i>
              <p class="text-secondParagraph text-sm md:text-base">
                mastery_clinics
              </p>
            </div>
          </a>
          <a href="tel:+05555555555" target="_blank" class="cursor-pointer ">
            <div class="phone flex gap-6 items-center">
              <i class="fa-solid fa-phone-volume -rotate-[30deg]"></i>
              <p class="text-secondParagraph text-sm md:text-base">
                05555555555
              </p>
            </div>
          </a>
          <div class="address flex gap-6 items-center">
            <i class="fa-solid fa-location-dot"></i>
            <p class="text-secondParagraph text-sm md:text-base">{{ $t("contactPage.startSection.location") }}
            </p>

          </div>

        </div>
      </div>

      <div
        class="glassFromContact w-full md:max-w-[448px] rounded-xl px-6 py-12 md:p-14 lg:px-12 lg:py-16 max-md:mb-16 lg:max-w-[664px] ">
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" class="w-full lg:max-w-[640px]">
          <div class="flex flex-col w-full gap-4 lg:gap-8 mb-8">
            <div class="flex flex-col w-full ">
              <label for="FullName"
                class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                {{ locale === "ar" ? "الإسم الكامل" : " Full Name" }}
              </label>
              <Field id="FullName" name="FullName" type="text" :placeholder="locale === 'en'
                ? 'Enter your full name'
                : 'أدخل اسمك الكامل'
                "
                class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                :class="{ '!border-red-500': errors.FullName }" />
              <span class="text-red-500 text-sm">{{
                errors.FullName
              }}</span>
            </div>
            <div class="flex flex-col w-full ">
              <label for="email"
                class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                {{
                  locale === "ar" ? "عنوان البريد الإلكتروني" : "e.g. name@domain.com"
                }}
              </label>
              <Field id="email" name="email" type="email" :placeholder="locale === 'en'
                ? 'Enter your email address'
                : 'أدخل عنوان بريدك الإلكتروني'
                "
                class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                :class="{ '!border-red-500': errors.email }" />
              <span class="text-red-500 text-sm">{{ errors.email }}</span>
            </div>
          </div>
          <div class="flex max-lg:flex-col gap-4 lg:gap-8 mb-4 lg:mb-8">
            <div class="flex flex-col w-full ">
              <label for="phoneNumber"
                class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                {{ locale === "ar" ? "رقم الهاتف" : "Phone Number (Optional)" }}
              </label>
              <Field id="phoneNumber" name="phoneNumber" type="text" :placeholder="locale === 'en'
                ? 'e.g. +9665xxxxxxx'
                : 'أدخل رقم الهاتف '
                "
                class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                :class="{ '!border-red-500': errors.phoneNumber }" />
              <span class="text-red-500 text-sm">{{
                errors.phoneNumber
              }}</span>
            </div>

          </div>
          <div class="flex flex-col w-full lg:max-w-[640px]">
            <label for="message"
              class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
              {{ locale === "ar" ? "الرسالة" : "Message" }}
            </label>
            <Field id="message" name="message" as="textarea" :placeholder="locale === 'en'
              ? 'Write your project details or inquiry here'
              : 'اكتب رسالتك هنا'
              "
              class="  inputBack p-4 w-full h-32 md:h-[240px] border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-main"
              :class="{ '!border-red-500': errors.message }" />
            <span class="text-red-500 text-sm">{{ errors.message }}</span>
          </div>
          <button disabled
            class="cursor-not-allowed bg-tertiary text-black px-11 py-3 mt-10 rounded-xl text-base font-semibold w-fit">
            {{ $t("contactPage.startSection.button") }}
          </button>

        </Form>
      </div>
    </div>
    <section class="MobileScreen md:hidden flex flex-col ">
      <div class="flex flex-col gap-5">
        <a href="https://www.instagram.com/mastery_clinics/" target="_blank">
          <div class="email flex gap-6 items-center">
            <i class="fa-brands fa-instagram"></i>
            <p class="text-secondParagraph text-sm md:text-base">
              mastery_clinics
            </p>
          </div>
        </a>
        <a href="tel:+05555555555" target="_blank" class="cursor-pointer ">
          <div class="phone flex gap-6 items-center">
            <i class="fa-solid fa-phone-volume -rotate-[30deg]"></i>
            <p class="text-secondParagraph text-sm md:text-base">
              05555555555
            </p>
          </div>
        </a>
        <div class="address flex gap-6 items-center">
          <i class="fa-solid fa-location-dot"></i>
          <p class="text-secondParagraph text-sm md:text-base">{{ $t("contactPage.startSection.location") }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <SectionHeaderTitle description="contactPage.location.description" title="contactPage.location.title" />
      <div class=" flex justify-center items-center">

        <img src="~/assets/img/map.png" alt="map">
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">

import { Form, Field } from "vee-validate";
import * as yup from "yup";
const { locale } = useI18n();
const isOpenSuccess = ref(false);
const isLoading = ref(false);
const { sendEmail } = useEmail();


const schema = yup.object({
  FullName: yup
    .string()
    .min(
      2,
      locale.value === "en"
        ? "First name must be at least 2 characters"
        : "يجب أن يكون الاسم الأول على الأقل 2 أحرف"
    )
    .required(
      locale.value === "en" ? "First name is required" : "الاسم الأول مطلوب"
    ),
  email: yup
    .string()
    .email(
      locale.value === "en" ? "Invalid email" : "البريد الإلكتروني غير صالح"
    )
    .required(
      locale.value === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
    ),

  phoneNumber: yup
    .string()
    .matches(
      /^\+?[0-9]{10,}$/,
      locale.value === "en"
        ? "Number must be at least 10 digits"
        : "يجب أن يكون الرقم على الأقل 10 أرقام"
    )
    .required(
      locale.value === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
    ),


  message: yup
    .string()
    .min(
      10,
      locale.value === "en"
        ? "Message must be at least 10 characters"
        : "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"
    )
    .max(
      500,
      locale.value === "en"
        ? "Message cannot exceed 500 characters"
        : "يجب ألا تتجاوز الرسالة 500 حرف"
    )
    .required(locale.value === "en" ? "Message is required" : "الرسالة مطلوبة"),
});


const onSubmit = async (values: any) => {
  try {
    isLoading.value = true;
    console.log(values);

    const response = await sendEmail(values);
    if (response.status === 200) {
      console.log("success");
    }
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    isOpenSuccess.value = true;
  }
}




</script>

<style scoped>
.glassFromContact {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.08),
      rgba(175, 153, 255, 0.08));
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid;
  border-color: rgb(175 153 255 / 0.15);
  ;
}

.inputBack {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid;
  border-color: rgb(175 153 255 / 0.15);
  color: white;
  border-radius: 12px;
}
</style>