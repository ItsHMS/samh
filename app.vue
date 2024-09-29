<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { locale } = useI18n();
const isRTL = computed(() => locale.value === "ar");
useHead(() => ({
  htmlAttrs: {
    dir: isRTL.value ? "rtl" : "ltr",
  },
}));
</script>
