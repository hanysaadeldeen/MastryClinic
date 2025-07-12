<template>
  <footer
    class="relative mt-[120px] bg-secondary border-white/60 border-t text-white md:mt-[240px] py-8 md:pt-14 px-11 sm:px-7">
    <div class="container relative mx-auto text-white max-w-[1200px]">
      <div
        class="grid grid-cols-2 gap-16 border-b border-white/10 pb-6 md:grid-cols-3 md:gap-[72px] md:pb-12 lg:grid-cols-5">
        <div class="col-span-2">
          <nuxt-link :to="localePath('/')">
            <img src="~/assets/img/logo.svg"
              class="mb-12 inline-block object-contain w-[200px] h-[50px] md:w-[235px] md:h-[63px]"
              alt="Mastry Clinics logo" width="235px" height="63px" />
          </nuxt-link>
          <div class="content max-w-[288px]">
            <p class="text-base font-normal !text-white">
              ابقَ على تواصل معنا عبر منصات التواصل الاجتماعي!
            </p>
            <div class="flex flex-wrap gap-3 md:gap-4 mt-4">
              <div class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10"
                v-for="social in SocialMedia" :key="social.id">
                <a :href="social.link" target="_blank" rel="noopener noreferrer" class="text-white text-xl"
                  v-html="social.icon"></a>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:max-w-[304px]">
          <h2 class="footer_title">
            {{ locale === "ar" ? "الصفحات" : "Pages" }}
          </h2>
          <div class="flex flex-col gap-3">
            <nuxt-link :to="localePath('/')">
              <p>{{ $t("footer.page.home") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath('dental')">
              <p>{{ $t("footer.page.dental") }}</p>
            </nuxt-link>
            <nuxt-link :to="localePath('dermatology')">
              <p>{{ $t("footer.page.dermatology") }}</p>
            </nuxt-link>
            <nuxt-link :to="localePath('doctors')">
              <p> {{ $t("footer.page.doctors") }} </p>
            </nuxt-link>
            <nuxt-link :to="localePath('aboutUs')">
              <p>{{ $t("footer.page.aboutUs") }}</p>
            </nuxt-link>
          </div>
        </div>
        <div>
          <h2 class="footer_title">
            {{ locale === "ar" ? "قانوني" : "policy" }}
          </h2>
          <div class="flex flex-col gap-2 text-lg font-medium">
            <nuxt-link :to="localePath('privacy')">
              <p>{{ $t("footer.privacy.privacy") }}</p>
            </nuxt-link>
          </div>
        </div>
        <div>
          <img src="~/assets/img/QR Code.svg" alt="QR Code" width="220px" height="220px"
            class="inline-block object-contain" />
        </div>
        <!-- </div> -->
      </div>
      <h1 class="mt-4 px-4 text-center text-sm font-normal text-paragraph md:mt-6">
        {{ $t("footer.copyright") }}
      </h1>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const SocialMedia = [

  {
    id: 1,
    icon: '<i class="fa-brands fa-instagram"></i>',
    socialName: "Instagram",
    link: "https://www.instagram.com/mastery_clinics/",
  },
  {
    id: 1,
    icon: '<i class="fa-brands fa-tiktok"></i>',
    socialName: "Tiktok",
    link: "https://",
  },

];
</script>

<style scoped>
.footer_title {
  @apply mb-6 text-lg font-normal capitalize text-white;
}

@media (max-width: 768px) {
  .footer_title {
    @apply mb-3;
  }
}

p {
  color: #a1a1a1;
}

a p:hover {
  cursor: pointer;
  color: white;
  transition: all 0.3s ease-in-out;
}

.image-container {
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  cursor: pointer;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
}

.black-image {
  z-index: 1;
  opacity: 1;
}

.color-image {
  z-index: 0;
  opacity: 0;
}

.image-container:hover .black-image {
  opacity: 0;
}

.image-container:hover .color-image {
  opacity: 1;
}
</style>
