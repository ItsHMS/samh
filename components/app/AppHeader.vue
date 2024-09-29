<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">

      <button @click="toggleMenu" class="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <NuxtLink to="/" class="text-xl font-bold text-blue-600">
        {{ $t("header.logo") }}<span class="text-orange-500">✈</span
        >{{ $t("header.flight") }}
      </NuxtLink>

      <div class="hidden lg:flex space-x-4">
        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">{{
          $t("header.home")
        }}</NuxtLink>
        <NuxtLink to="/promo" class="text-gray-600 hover:text-gray-900">{{
          $t("header.promo")
        }}</NuxtLink>
        <NuxtLink to="/bookings" class="text-gray-600 hover:text-gray-900">{{
          $t("header.myBooking")
        }}</NuxtLink>
      </div>
      
      <div class="flex items-center space-x-4">
        <button
          class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          {{ $t("header.signIn") }}
        </button>

        <LanguageSwitcher />
      </div>
    </nav>

    <div v-if="isMenuOpen" class="lg:hidden bg-white py-2">
      <NuxtLink
        to="/"
        class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
        >{{ $t("header.home") }}</NuxtLink
      >
      <NuxtLink
        to="/promo"
        class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
        >{{ $t("header.promo") }}</NuxtLink
      >
      <NuxtLink
        to="/bookings"
        class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
        >{{ $t("header.myBooking") }}</NuxtLink
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import LanguageSwitcher from "~/components/app/LanguageSwitcher.vue";
import { useScreen } from "~/composables/useScreen";

const { isPhone, isTablet } = useScreen();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  if (isPhone() || isTablet()) {
    isMenuOpen.value = !isMenuOpen.value;
  }
};
</script>
