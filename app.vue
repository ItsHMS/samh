<template>{{ t("welcome") }} to Smah Travel</template>

<script setup>
const { t, locale } = useI18n();
console.log("Current locale:", locale.value);
const isRTL = computed(() => locale.value === "ar");
useHead(() => ({
  htmlAttrs: {
    dir: isRTL.value ? "rtl" : "ltr",
  },
  title: locale.value === "ar" ? "مرحبًا" : "Welcome",
}));
</script>
