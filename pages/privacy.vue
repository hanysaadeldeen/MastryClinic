<template>
  <section class="Privacyhero relative startSection">
    <StarterSection
      :title="$t('privacy.startSection.startSectionTitle')"
      :paragraph="$t('privacy.startSection.startSectionDescription')"
      :buttonTitle="$t('privacy.startSection.startSectionBtn')"
      headerTitle="mastery"
    />
    <div class="container relative mx-auto text-white max-w-[1320px] mt-24">
      <div class="relative  px-11 sm:px-7">
        <div class="privacy-page flex" :key="locale">
          <main
            class="content flex-1"
            :class="locale === 'ar' ? 'lg:ml-32  flex-1' : 'lg:mr-32  flex-1'"
          >
            <h1 class="font-normal text-xl lg:text-2xl mb-6">
              {{ $t("privacy.content.title") }}
            </h1>
            <p class="text-base md:text-lg lg:text-xl">
              {{ $t("privacy.content.Description") }}
              <a
                href="https://masteryclinic.com"
                class="underline"
                target="_blank"
                >https://masteryclinic.com.</a
              >
            </p>
            <div
              v-for="(section, index) in sections"
              :id="section.id"
              :key="index"
              class="mb-8 mt-10 lg:mt-16"
            >
              <h2 class="text-lg lg:text-xl font-bold mb-5">
                {{ $t(section.title) }}
              </h2>
              <ul>
                <li
                  v-for="(bullet, index) in section.content"
                  :key="index"
                  class="lista px-5 text-paragraph-mediumDark text-base md:text-lg lg:text-xl font-medium mb-6 relative"
                  :class="locale === 'en' ? 'before:left-0' : 'before:right-0'"
                >
                  {{ $t(bullet) }}
                </li>
              </ul>
            </div>
          </main>
          <nav
            class="hidden lg:block table-of-contents sticky top-0 bottom-0 max-w-[286px]"
            :class="locale === 'en' ? 'right-0' : 'left-0'"
          >
            <h3 class="font-medium lg:text-2xl mb-8">
              {{ locale === "ar" ? "جدول المحتوي" : "Table of Contents" }}
            </h3>
            <ul>
              <li v-for="(section, index) in sections" :key="index">
                <span
                  class="inline-block text-white font-light text-xl mb-5 cursor-pointer"
                  :class="locale === 'en' ? 'text-left' : 'text-right'"
                  @click="scrollToSection(section.id)"
                >
                  {{ $t(section.title) }}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
// const flexDirection = computed(() =>
//   locale.value === "ar" ? "flex flex-row-reverse" : " flex flex-row"
// );
const sections = [
  {
    id: "data-we-collect",
    title: "privacy.content.firstSection.firstSectionTitle",
    description: "",
    content: [
      "privacy.content.firstSection.firstSectionDescription1",
      "privacy.content.firstSection.firstSectionDescription2",
      "privacy.content.firstSection.firstSectionDescription3",
    ],
  },
  {
    id: "how-we-use-the-data",
    title: "privacy.content.secondtSection.secondtSectionTitle",
    description: "privacySectionTwoDescription",
    content: [
      "privacy.content.secondtSection.secondtSectionDescription1",
      "privacy.content.secondtSection.secondtSectionDescription2",
      "privacy.content.secondtSection.secondtSectionDescription3",
    ],
  },
  {
    id: "data-sharing",
    title: "privacy.content.thirdSection.thirdSectionTitle",
    description: "privacySectionThreeDescription",
    content: ["privacy.content.thirdSection.thirdSectionDescription1"],
  },
  {
    id: "data-protection",
    description: "privacySectionFourDescription",
    title: "privacy.content.fourSection.fourSectionTitle",
    content: ["privacy.content.fourSection.fourSectionDescription1"],
  },
  {
    id: "user-rights",
    description: "privacySectionFiveDescription",
    title: "privacy.content.fivedSection.fivedSectionTitle",
    content: [
      "privacy.content.fivedSection.fivedSectionDescription1",
      "privacy.content.fivedSection.fivedSectionDescription2",
    ],
  },
  {
    id: "policy-updates",
    title: "privacy.content.sixSection.sixSectionTitle",
    content: [
      "privacy.content.sixSection.sixSectionDescription1",
      "privacy.content.sixSection.sixSectionDescription2",
    ],
  },
  {
    id: "Where_Your_Data",
    title: "privacy.content.sevenSection.sevenSectionTitle",
    content: ["privacy.content.sevenSection.sevenSectionDescription1"],
  },
  {
    id: "How_to_Contact",
    title: "privacy.content.eightSection.eightSectionTitle",
    content: ["privacy.content.eightSection.eightSectionDescription1"],
  },
];
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
<style scoped>
.table-of-contents {
  width: 280px;
  padding: 1rem;
  height: fit-content;
}

/* .content {
  flex-grow: 1;
} */

#data-we-collect,
#how-we-use-the-data,
#data-sharing,
#data-protection,
#user-rights,
#policy-updates,
#Where_Your_Data,
#How_to_Contact {
  scroll-margin-top: 40px;
}

.lista::before {
  content: "•";
  position: absolute;
  top: 12px;
  transform: translateY(-50%);
  color: white;
  font-size: 1.2em;
  font-weight: bold;
}
</style>
