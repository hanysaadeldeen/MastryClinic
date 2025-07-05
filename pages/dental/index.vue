<template>
	<section class="dentalPage relative overflow-hidden">
		<StarterSection :title="$t('dentalPage.startSection.startSectionTitle')"
			:paragraph="$t('dentalPage.startSection.startSectionDescription')"
			:buttonTitle="$t('dentalPage.startSection.startSectionBtn')">
			<template #background>
				<div class="Starterbackground relative  w-[600px] h-[600px]">
				</div>
			</template>
			<template #main>
				<div class="main relative ">
					<div class="relative  w-[600px] h-[600px] ">
						<div :class='locale === "ar" ? "right-10" : "left-10"'
							class="absolute top-16  glass py-5  px-8 rounded-xl z-40 ">
							<p class="text-sm font-normal">{{ $t('dentalPage.startSection.jawbalance') }}</p>
						</div>
						<div :class='locale === "ar" ? "-right-10" : "-left-10"'
							class="absolute  bottom-[25%] glass py-5  px-8 rounded-xl z-40 ">
							<p class="text-sm font-normal">{{ $t('dentalPage.startSection.dentalhealth') }} </p>
						</div>
						<div :class='locale === "ar" ? "-left-2" : "-right-2"'
							class="absolute top-1/2  glass py-5  px-8 rounded-xl z-40 ">
							<p class="text-sm font-normal">{{ $t('dentalPage.startSection.confidencesmile') }}</p>
						</div>
					</div>
				</div>
			</template>
			<template #doctor>
				<div class="doctor">
					<img src="~/assets/img/dentalStarterSection.svg" alt="dentalStarterSection"
						class="relative z-10  object-contain" />
				</div>
			</template>
		</StarterSection>

		<div class="container px-11 sm:px-7 max-w-[1320px] mx-auto ">


			<div class="min-h-[889.58px] relative  text-white mt-24 flex items-end justify-center">
				<div
					class="absolute hidden md:block top-0 left-1/2 z-20 max-h-[200px] w-full -translate-x-1/2 md:-bottom-5">
					<img src="~/assets/img/CirclesSections.svg" alt="CirclesSections" width="100%" height="200"
						loading="eager" fetchpriority="high" />
				</div>
				<div class="blob " aria-hidden="true"></div>
				<section class="doctors relative ">
					<SectionHeaderTitle description="dentalPage.services.description"
						title="dentalPage.services.title" />
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<DentalServiceCard v-for="item in Services" :title="item.title" :img="item.img"
							:link="item.link" />
					</div>
				</section>
			</div>

			<ClosedFooter title="contact.CTA.title" description="contact.CTA.description"
				bootom-one-title="contact.CTA.buttonOne" />
		</div>


	</section>
</template>

<script setup lang="ts">

import logo from "../assets/img/LogoTap.svg"
const { locale } = useI18n();
const localePath = useLocalePath()

const Services = [
	{
		title: "dentalPage.services.serviceOne.title",
		link: "digitaldentalimplants",
		img: logo
	},
	{
		title: "dentalPage.services.serviceTwo.title",
		link: "orthodonticsandjawalignment",
		img: logo
	},
	{
		title: "dentalPage.services.serviceThree.title",
		link: "cosmeticanddentalprosthetics",
		img: logo
	},
	{
		title: "dentalPage.services.serviceFour.title",
		link: "gumsurgeryandaesthetics",
		img: logo
	},
	{
		title: "dentalPage.services.serviceFive.title",
		link: "pediatricdentistry",
		img: logo
	},
	{
		title: "dentalPage.services.serviceSix.title",
		link: "preventivedentistry",
		img: logo
	}
]

</script>

<style scoped>
.glass {
	background-color: rgba(25, 38, 79, 0.3);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid;
	border-color: rgb(175 153 255 / 0.15);
}

.Starterbackground {
	background-image: url("../../assets/img/StarterSectionPattern.svg");
	background-position: center;
	background-repeat: no-repeat;
}

.blob {
	background: linear-gradient(to right,
			rgba(255, 255, 255, 0.1),
			rgba(255, 255, 255, 0.2),
			rgba(255, 255, 255, 0.1));
}
</style>