<template>
  <div>
    <div
      :style="{
        backgroundImage: `url(${mapImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <HeroSection />
      <SearchForm />
    </div>
    <PopularDestinations />
  </div>
</template>
<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import SearchForm from "@/components/home/SearchForm.vue";
import PopularDestinations from "@/components/home/PopularDestinations.vue";
import mapImage from "~/assets/images/map.png";
const { t, locale } = useI18n();
useHead(() => ({
  title: locale.value === "ar" ? "مرحبًا" : "Welcome",
}));
</script>
