<template>
  <div class="language-switcher">
    <button @click="switchLanguage">
      {{ currentLocale === "en" ? "العربية" : "English" }}
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const currentLocale = ref(locale.value);

const switchLanguage = async () => {
  const newLocale = currentLocale.value === "en" ? "ar" : "en";
  currentLocale.value = newLocale;

  await setLocale(newLocale);

  document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
};
</script>

<style scoped></style>
