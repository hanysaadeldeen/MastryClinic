<template>
  <section class="relative startSection heroSection text-white bg-gradient-to-b from-[#000000] to-[#220D0E]">
    <StarterSection :title="$t('aboutUsPage.startSection.startSectionTitle')"
      :paragraph="$t('aboutUsPage.startSection.startSectionDescription')"
      :buttonTitle="$t('aboutUsPage.startSection.startSectionBtn')">
      <template #background>
        <div class="Starterbackground  relative  w-[600px] h-[600px]">
          <img src="~/assets/img/aboutUsStarterSection.png" cla alt="aboutUsStarterSection"
            class="z-10  absolute left-1/2  -translate-y-1/2 -translate-x-1/2 top-1/2 object-contain" />
        </div>
      </template>

    </StarterSection>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.Starterbackground {
  background-image: url("../assets/img/StarterSectionPattern.svg");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
