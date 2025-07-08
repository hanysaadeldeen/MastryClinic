<template>
  <header class="relative bg-gradient-to-r from-primary via-secondary to-primary pt-10 pb-4 text-white "
    :class="[{ 'overflow-hidden': isSideBar }]">
    <div class="container relative mx-auto text-white max-w-[1320px] px-11 sm:px-7">
      <div class="relative z-20">
        <div class="flex items-center justify-between">
          <nuxt-link :to="localePath('index')">
            <img src="~/assets/img/logo.svg" alt="mastery clinics" width="160" height="43.35" loading="eager"
              fetchpriority="high" />
          </nuxt-link>
          <nav class="hidden lg:block">
            <ul class="flex gap-8">
              <nuxt-link :to="localePath('index')">
                <li :class="adjustedPath === '/' ? 'active' : ''">
                  {{ $t("header.home") }}
                </li>
              </nuxt-link>
              <nuxt-link :to="localePath('aboutUs')">
                <li :class="adjustedPath === '/aboutUs' ? 'active' : ''">
                  {{ $t("header.aboutUs") }}
                </li>
              </nuxt-link>
              <nuxt-link :to="localePath('dental')">
                <li :class="adjustedPath === '/dental' ? 'active' : ''">
                  {{ $t("header.dental") }}
                </li>
              </nuxt-link>
              <nuxt-link :to="localePath('dermatology')">
                <li :class="adjustedPath === '/dermatology' ? 'active' : ''">
                  {{ $t("header.dermatology") }}
                </li>
              </nuxt-link>

              <nuxt-link :to="localePath('doctors')">
                <li :class="adjustedPath === '/doctors' ? 'active' : ''">
                  {{ $t("header.doctors") }}
                </li>
              </nuxt-link>
            </ul>
          </nav>
          <div class="hidden justify-between gap-4 items-center lg:flex">
            <Button title="header.contactUs" link="contact" />
            <LanguageSwitcher />
          </div>
          <i @click="toggleSidebar" class="fa-solid fa-bars-staggered block cursor-pointer text-3xl lg:hidden"
            :class="{ hidden: isSideBar }" aria-label="Open menu"></i>
          <i @click="toggleSidebar" class="fa-solid fa-xmark block cursor-pointer text-3xl lg:hidden"
            :class="{ hidden: !isSideBar }" aria-label="Close menu"></i>
        </div>
      </div>
      <transition :name="transitionName">
        <div v-if="isSideBar"
          class="sideBar fixed inset-x-0 top-[100px] z-20 flex h-[calc(100dvh-100px)] w-full flex-col items-start px-5 transition-all lg:hidden"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]">
          <div class="container mx-auto">
            <nav class="mt-10 inline-block w-full">
              <ul class="flex flex-col gap-5">
                <nuxt-link :to="localePath('index')" @click="isSideBar = !isSideBar" class="w-full">
                  <li :class="[adjustedPath === '/' ? 'active' : '']">
                    {{ $t("header.home") }}
                  </li>
                </nuxt-link>
                <nuxt-link :to="localePath('aboutUs')" @click="isSideBar = !isSideBar" class="w-full">
                  <li :class="[adjustedPath === '/aboutUs' ? 'active' : '']">
                    {{ $t("header.aboutUs") }}
                  </li>
                </nuxt-link>
                <nuxt-link :to="localePath('dermatology')" @click="isSideBar = !isSideBar" class="w-full">
                  <li :class="[adjustedPath === '/dermatology' ? 'active' : '']">
                    {{ $t("header.dermatology") }}
                  </li>
                </nuxt-link>
                <nuxt-link :to="localePath('dental')" @click="isSideBar = !isSideBar" class="w-full">
                  <li :class="[adjustedPath === '/dental' ? 'active' : '']">
                    {{ $t("header.dental") }}
                  </li>
                </nuxt-link>
                <nuxt-link :to="localePath('doctors')" @click="isSideBar = !isSideBar" class="w-full">
                  <li :class="[adjustedPath === '/doctors' ? 'active' : '']">
                    {{ $t("header.doctors") }}
                  </li>
                </nuxt-link>
              </ul>
            </nav>
            <div class="mt-5 flex flex-col items-start justify-between gap-10">
              <Button title="header.contactUs" link="contact" @click="isSideBar = !isSideBar" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() =>
  locale.value === "ar" ? "sidebar-ar" : "sidebar-en"
);
const route = useRoute();

// Optimize sidebar toggle function
const toggleSidebar = () => {
  isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
  document.body.style.overflow = value ? "hidden" : "";
}, 100);

watch(isSideBar, (newValue) => {
  debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
  if (isSideBar.value) {
    isSideBar.value = false;
  }
}, 100);

onMounted(() => {
  window.addEventListener("scroll", debouncedScrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", debouncedScrollHandler);
});

const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
</script>

<style scoped>
a {
  text-decoration: none;
}

ul li {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: inline-block;
  position: relative;
  list-style: none;
  width: fit-content;
  padding: 10px 0;
  cursor: pointer;
  transition: color 0.3s ease;
  will-change: color;
}

ul li:hover,
ul li.active {
  color: #52a5b0;
}

.sideBar {
  background: linear-gradient(to right, #19264f, #0b142f, #19264f);
  will-change: transform;
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

.sidebar-en-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-en-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-ar-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.sidebar-ar-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.gradient-button {
  position: relative;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  border-radius: 18px;
  background: linear-gradient(#0a0911, #0a0911) padding-box,
    linear-gradient(45deg, rgba(175, 153, 255, 0.5), rgba(255, 244, 34, 0.5)) border-box;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.gradient-button:hover {
  background: linear-gradient(#0a0911, #0a0911) padding-box,
    linear-gradient(45deg, #af99ff, #fff422) border-box;
}
</style>
