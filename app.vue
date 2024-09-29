<template>{{ t("welcome") }} to Smah Travel</template>

<script setup>
const { t, locale } = useI18n();
console.log("Current locale:", locale.value);

useHead(() => ({
  title: locale.value === 'ar' ? 'مرحبًا' : 'Welcome'
}))

</script>
