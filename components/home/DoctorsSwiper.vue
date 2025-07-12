<template>
  <section class=" ">
    <SectionHeaderTitle description="heroSection.dectors.description" title="heroSection.dectors.title" />
    <div class="container relative mx-auto ">



      <button ref="nextElRef" class="custom-next absolute -left-5 top-[45%] z-10 -translate-y-1/2">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button ref="prevElRef" class="custom-prev  absolute -right-5 top-[45%] z-10 -translate-y-1/2">
        <i class="fa-solid fa-angle-right"></i></button>


      <swiper dir="rtl" :pagination="{ dynamicBullets: true }" :navigation="{ prevEl: prevElRef, nextEl: nextElRef }"
        :modules="modules" class="mySwiper " :spaceBetween="20" :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          }
        }">
        <swiper-slide v-for="(item, index) in DentalDoctorsMen" :key="index" class="h-full flex items-stretch">
          <HomeDoctorCard :key="item.name" :title="item.name" :description="item.speciality" :img="item.img" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import dranas from "../assets/img/dranas.svg"
import drmoaaed from "../assets/img/drmoaaed.svg"
import drRaa from "../assets/img/drRaa.svg"
import drAbdo from "../assets/img/drAbdo.svg"
import drSamaher from "../assets/img/drSamaher.svg"
import DrAyman from "../assets/img/DrAyman.svg"
import drAbeda from "../assets/img/drAbeda.svg"

const modules = [Pagination, Navigation];

const DentalDoctorsMen = [
  { name: 'doctors.dentalDoctors.doctorThree.name', speciality: 'doctors.dentalDoctors.doctorThree.speciality', img: dranas },
  { name: 'doctors.dentalDoctors.doctorFive.name', speciality: 'doctors.dentalDoctors.doctorFive.speciality', img: drmoaaed },
  { name: 'doctors.dentalDoctors.doctorNine.name', speciality: 'doctors.dentalDoctors.doctorNine.speciality', img: DrAyman },
  { name: 'doctors.dentalDoctors.doctorTen.name', speciality: 'doctors.dentalDoctors.doctorTen.speciality', img: drAbeda },


  {
    name: "doctors.dentalDoctors.doctorEight.name",
    speciality: "doctors.dentalDoctors.doctorEight.speciality",
    img: drSamaher
  },
  {
    name: "doctors.dentalDoctors.doctorSix.name",
    speciality: "doctors.dentalDoctors.doctorSix.speciality",
    img: drRaa
  },
  { name: 'doctors.dentalDoctors.doctorSeven.name', speciality: 'doctors.dentalDoctors.doctorSeven.speciality', img: drAbdo },

];

// عناصر التحكم
const prevElRef = ref(null);
const nextElRef = ref(null);
</script>

<style scoped>
.mySwiper {
  padding-bottom: 40px;
}

:deep(.swiper-pagination-bullet) {
  background-color: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: white;
  opacity: 1;
}

.custom-prev,
.custom-next {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  display: none;
}

@media (min-width:720px) {

  .mySwiper {
    padding: 0 40px 40px;
  }

  .custom-prev,
  .custom-next {
    display: block;
  }
}

.custom-prev:hover,
.custom-next:hover {
  background-color: white;
}
</style>
